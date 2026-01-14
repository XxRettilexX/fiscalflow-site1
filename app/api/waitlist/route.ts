import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';
import { disposableDomains } from './disposable-domains';

// Configurazione Email (Sostituisci con le tue credenziali reali nel file .env)
const SMTP_HOST = process.env.SMTP_HOST || 'smtp.example.com';
const SMTP_PORT = parseInt(process.env.SMTP_PORT || '587');
const SMTP_USER = process.env.SMTP_USER || 'user@example.com';
const SMTP_PASS = process.env.SMTP_PASS || 'password';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, hp } = body;

        // Honeypot Check (Silenzioso)
        if (hp) {
            // Se il campo honeypot è compilato, è un bot.
            // Ritorniamo successo per ingannarlo, ma non salviamo nulla.
            return NextResponse.json({ success: true, message: 'Iscrizione avvenuta con successo!' });
        }

        if (!name || !email) {
            return NextResponse.json({ error: 'Nome ed email sono obbligatori' }, { status: 400 });
        }

        // Sanitizzazione base del nome (rimuove tag HTML)
        const sanitizedName = name.replace(/<[^>]*>?/gm, '').trim();
        const normalizedEmail = email.trim().toLowerCase();

        // --- VALIDAZIONE EMAIL ---

        // 0. Validazione Formato Email (Regex)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(normalizedEmail)) {
            return NextResponse.json({ error: 'Inserisci un indirizzo email valido.' }, { status: 400 });
        }

        // 1. Controllo Email Aziendale Interna
        if (normalizedEmail.endsWith('@fiscalflow.it')) {
            return NextResponse.json({ error: 'Non è possibile utilizzare indirizzi email @fiscalflow.it' }, { status: 400 });
        }

        // 2. Controllo Email Temporanee (Lista completa)
        const emailDomain = normalizedEmail.split('@')[1];
        if (disposableDomains.includes(emailDomain)) {
            return NextResponse.json({ error: 'Le email temporanee non sono ammesse. Usa un indirizzo reale.' }, { status: 400 });
        }

        // 3. Controllo Duplicati
        const dbPath = path.join(process.cwd(), 'waitlist.json');
        let waitlist: any[] = [];

        if (fs.existsSync(dbPath)) {
            const fileContent = fs.readFileSync(dbPath, 'utf-8');
            try {
                waitlist = JSON.parse(fileContent);
            } catch (e) {
                waitlist = [];
            }
        }

        const emailExists = waitlist.some((user: any) => user.email.toLowerCase() === normalizedEmail);
        if (emailExists) {
            return NextResponse.json({ error: 'Questa email è già iscritta alla lista d\'attesa.' }, { status: 400 });
        }

        // --- FINE VALIDAZIONE ---

        const newUser = {
            id: Date.now(),
            name: sanitizedName,
            email: normalizedEmail,
            date: new Date().toISOString(),
        };

        waitlist.push(newUser);
        fs.writeFileSync(dbPath, JSON.stringify(waitlist, null, 2));

        // 2. Invia Email di Conferma
        // Nota: In produzione, usa variabili d'ambiente per le credenziali
        const transporter = nodemailer.createTransport({
            host: SMTP_HOST,
            port: SMTP_PORT,
            secure: SMTP_PORT === 465, // true per 465, false per altre porte
            auth: {
                user: SMTP_USER,
                pass: SMTP_PASS,
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        // Preparazione allegati
        const attachments = [];
        const documentsPath = path.join(process.cwd(), 'public', 'documents');

        const termsPath = path.join(documentsPath, 'termini-e-condizioni.pdf');
        if (fs.existsSync(termsPath)) {
            attachments.push({
                filename: 'Termini_e_Condizioni_FiscalFlow.pdf',
                path: termsPath
            });
        }

        const privacyPath = path.join(documentsPath, 'privacy-policy.pdf');
        if (fs.existsSync(privacyPath)) {
            attachments.push({
                filename: 'Privacy_Policy_FiscalFlow.pdf',
                path: privacyPath
            });
        }

        // Contenuto Email
        const mailOptions = {
            from: `"FiscalFlow Team" <${SMTP_USER}>`,
            to: email,
            subject: 'Benvenuto a bordo! 🚀 La tua iscrizione a FiscalFlow',
            attachments: attachments,
            html: `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f7fc;">
            <table role="presentation" style="width: 100%; border-collapse: collapse;">
                <tr>
                    <td align="center" style="padding: 40px 0;">
                        <table role="presentation" style="width: 600px; border-collapse: collapse; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
                            <!-- Header -->
                            <tr>
                                <td style="padding: 40px 40px 30px 40px; text-align: center; background-color: #4A90E2;">
                                    <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700;">FiscalFlow</h1>
                                </td>
                            </tr>
                            
                            <!-- Body -->
                            <tr>
                                <td style="padding: 40px;">
                                    <h2 style="margin: 0 0 20px 0; color: #212121; font-size: 24px;">Ciao ${sanitizedName},</h2>
                                    <p style="margin: 0 0 20px 0; color: #555555; line-height: 1.6; font-size: 16px;">
                                        Grazie mille per esserti unito alla lista d'attesa di <strong>FiscalFlow</strong>! 🎉
                                    </p>
                                    <p style="margin: 0 0 20px 0; color: #555555; line-height: 1.6; font-size: 16px;">
                                        Hai appena fatto il primo passo verso una gestione finanziaria più semplice e intelligente. Stiamo lavorando duramente per completare la versione Beta e non vediamo l'ora di fartela provare.
                                    </p>
                                    <div style="background-color: #f8fafc; border-left: 4px solid #4A90E2; padding: 20px; margin: 30px 0; border-radius: 4px;">
                                        <p style="margin: 0; color: #444; font-style: italic;">
                                            "Metti ordine nelle tue spese. Risparmia senza stress."
                                        </p>
                                    </div>
                                    <p style="margin: 0 0 20px 0; color: #555555; line-height: 1.6; font-size: 16px;">
                                        Ti invieremo una notifica esclusiva non appena il tuo accesso sarà pronto. Nel frattempo, tieni d'occhio la tua casella di posta!
                                    </p>
                                </td>
                            </tr>

                            <!-- Footer -->
                            <tr>
                                <td style="padding: 30px 40px; background-color: #f8fafc; border-top: 1px solid #eeeeee; text-align: center;">
                                    <p style="margin: 0 0 15px 0; color: #666666; font-size: 14px; font-weight: 600;">
                                        FiscalFlow
                                    </p>
                                    <p style="margin: 0 0 15px 0; color: #999999; font-size: 12px; line-height: 1.5;">
                                        Questa email è stata inviata a ${email} perché ti sei iscritto alla nostra lista d'attesa.<br>
                                        Non è un'offerta commerciale vincolante.
                                    </p>
                                    <p style="margin: 0 0 15px 0; color: #999999; font-size: 12px;">
                                        <a href="https://fiscalflow.it/privacy-policy" style="color: #4A90E2; text-decoration: none;">Privacy Policy</a>
                                        &nbsp;|&nbsp;
                                        <a href="https://fiscalflow.it/terms-of-service" style="color: #4A90E2; text-decoration: none;">Termini e Condizioni</a>
                                    </p>
                                    <p style="margin: 0; color: #bbbbbb; font-size: 11px;">
                                        © ${new Date().getFullYear()} FiscalFlow - Vito Strisciuglio<br>
                                        Via Palestro 33, Giovinazzo, BA 70054
                                    </p>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </body>
        </html>
      `,
        };

        // Invia solo se le credenziali sono configurate (mock per dev)
        if (SMTP_HOST !== 'smtp.example.com') {
            await transporter.sendMail(mailOptions);
        } else {
            console.log("Simulazione invio email a:", email);
            console.log("Configura SMTP_HOST in .env per inviare email reali.");
        }

        return NextResponse.json({ success: true, message: 'Iscrizione avvenuta con successo!' });

    } catch (error) {
        console.error('Errore API Waitlist:', error);
        return NextResponse.json({ error: 'Errore interno del server' }, { status: 500 });
    }
}

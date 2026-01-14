"use client";

import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { FadeIn } from "../components/animations/FadeIn";

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-fiscal-bg font-sans text-fiscal-text selection:bg-fiscal-primary/20 overflow-x-hidden">
            <Navbar />
            <main className="pt-32 pb-20">
                <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                    <FadeIn>
                        <h1 className="text-4xl font-bold mb-8">Informativa sulla Privacy</h1>
                        <div className="prose prose-invert prose-lg text-fiscal-text-muted">
                            <p className="mb-4 text-sm italic">Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}</p>

                            <p className="mb-6">
                                La presente Informativa sulla Privacy descrive le modalità di gestione del sito web e dell'applicazione <strong>FiscalFlow</strong> (https://fiscalflow.it) in riferimento al trattamento dei dati personali degli utenti che lo consultano e lo utilizzano. Si tratta di un'informativa resa ai sensi dell'art. 13 del Regolamento UE 2016/679 (GDPR).
                            </p>

                            <h3 className="text-2xl font-bold text-fiscal-text mt-10 mb-4">1. Titolare del Trattamento</h3>
                            <p className="mb-4">
                                Il Titolare del trattamento dei dati è:<br />
                                <strong>Vito Strisciuglio</strong><br />
                                C.F. STRVTI05T27A662R<br />
                                Via Palestro 33, Giovinazzo, BA 70054<br />
                                <br />
                                Per qualsiasi richiesta relativa alla privacy e all'esercizio dei tuoi diritti, puoi contattare il Titolare al seguente indirizzo email:<br />
                                <strong>Email di contatto:</strong> <a href="mailto:assistenza@fiscalflow.it" className="text-fiscal-primary hover:underline">assistenza@fiscalflow.it</a>
                            </p>

                            <h3 className="text-2xl font-bold text-fiscal-text mt-10 mb-4">2. Tipologia di Dati Raccolti</h3>
                            <p className="mb-4">Durante l'utilizzo del Servizio, potremmo raccogliere le seguenti categorie di dati:</p>
                            <ul className="list-disc pl-6 mb-4 space-y-2">
                                <li><strong>Dati di Registrazione:</strong> Indirizzo email, nome e cognome (opzionale), necessari per creare il tuo account.</li>
                                <li><strong>Dati di Utilizzo (User Content):</strong> I dati che inserisci volontariamente nell'applicazione, come importi delle spese, categorie di spesa, budget e obiettivi di risparmio.</li>
                                <li><strong>Dati Tecnici e di Navigazione:</strong> Indirizzi IP, tipo di browser, sistema operativo, orari di accesso e altre statistiche tecniche raccolte automaticamente per garantire la sicurezza e il funzionamento del sito.</li>
                            </ul>

                            <h3 className="text-2xl font-bold text-fiscal-text mt-10 mb-4">3. Finalità e Base Giuridica del Trattamento</h3>
                            <p className="mb-4">Trattiamo i tuoi dati personali per le seguenti finalità:</p>
                            <ul className="list-disc pl-6 mb-4 space-y-2">
                                <li><strong>Erogazione del Servizio:</strong> Per permetterti di registrare un account, salvare le tue spese e visualizzare i tuoi report finanziari. (Base giuridica: Esecuzione del contratto).</li>
                                <li><strong>Assistenza Clienti:</strong> Per rispondere alle tue richieste di supporto. (Base giuridica: Esecuzione del contratto).</li>
                                <li><strong>Miglioramento del Servizio:</strong> Analisi statistiche anonime per capire come viene utilizzata l'app e migliorarne le funzionalità. (Base giuridica: Legittimo interesse).</li>
                                <li><strong>Marketing (Opzionale):</strong> Solo previo tuo esplicito consenso, per inviarti newsletter o aggiornamenti promozionali. (Base giuridica: Consenso).</li>
                            </ul>

                            <h3 className="text-2xl font-bold text-fiscal-text mt-10 mb-4">4. Destinatari dei Dati e Terze Parti</h3>
                            <p className="mb-4">
                                I tuoi dati non saranno mai venduti a terzi. Potranno essere comunicati a fornitori di servizi tecnici che agiscono come Responsabili del trattamento (es. hosting provider).
                            </p>
                            <p className="mb-4 font-semibold text-fiscal-text">Gestione dei Pagamenti (Stripe)</p>
                            <p className="mb-4 bg-fiscal-surface p-4 rounded-lg border border-fiscal-border">
                                I pagamenti sono gestiti tramite Stripe. FiscalFlow non raccoglie né memorizza i dati completi delle carte di credito. Tali dati sono forniti direttamente dall'utente a Stripe Inc., che agisce come autonomo titolare o responsabile del trattamento. Per maggiori informazioni, consultare la Privacy Policy di Stripe.
                            </p>

                            <h3 className="text-2xl font-bold text-fiscal-text mt-10 mb-4">5. Conservazione dei Dati</h3>
                            <p className="mb-4">
                                I tuoi dati personali saranno conservati per il tempo strettamente necessario a conseguire gli scopi per cui sono stati raccolti. Se decidi di cancellare il tuo account, i tuoi dati personali e i dati delle transazioni inserite saranno eliminati dai nostri server, salvo eventuali obblighi di legge che ne impongano la conservazione (es. obblighi fiscali).
                            </p>

                            <h3 className="text-2xl font-bold text-fiscal-text mt-10 mb-4">6. Diritti dell'Interessato</h3>
                            <p className="mb-4">
                                In conformità al GDPR, hai il diritto di chiedere al Titolare del trattamento:
                            </p>
                            <ul className="list-disc pl-6 mb-4 space-y-2">
                                <li>L'accesso ai tuoi dati personali;</li>
                                <li>La rettifica dei dati inesatti o l'integrazione di quelli incompleti;</li>
                                <li>La cancellazione dei dati (Diritto all'oblio), sussistendone i presupposti;</li>
                                <li>La limitazione del trattamento;</li>
                                <li>La portabilità dei dati in un formato strutturato e leggibile;</li>
                                <li>L'opposizione al trattamento per motivi legittimi.</li>
                            </ul>
                            <p className="mb-4">
                                Per esercitare i tuoi diritti, puoi inviare una richiesta scritta all'indirizzo email: <a href="mailto:assistenza@fiscalflow.it" className="text-fiscal-primary hover:underline">assistenza@fiscalflow.it</a>
                            </p>

                            <h3 className="text-2xl font-bold text-fiscal-text mt-10 mb-4">7. Modifiche a questa Informativa</h3>
                            <p className="mb-4">
                                Ci riserviamo il diritto di aggiornare la presente Privacy Policy in qualsiasi momento. Ti informeremo di eventuali modifiche pubblicando la nuova Privacy Policy su questa pagina. Ti consigliamo di consultare periodicamente questa pagina per eventuali modifiche.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </main>
            <Footer />
        </div>
    );
}

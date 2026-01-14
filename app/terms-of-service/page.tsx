"use client";

import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { FadeIn } from "../components/animations/FadeIn";

export default function TermsOfService() {
    return (
        <div className="min-h-screen bg-fiscal-bg font-sans text-fiscal-text selection:bg-fiscal-primary/20 overflow-x-hidden">
            <Navbar />
            <main className="pt-32 pb-20">
                <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                    <FadeIn>
                        <h1 className="text-4xl font-bold mb-8">Termini e Condizioni di Utilizzo</h1>
                        <div className="prose prose-invert prose-lg text-fiscal-text-muted">
                            <p className="mb-4 text-sm italic">Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}</p>

                            <p className="mb-6">
                                Benvenuto su FiscalFlow. Ti preghiamo di leggere attentamente i presenti Termini e Condizioni ("Termini", "Termini di Servizio") prima di utilizzare il sito web e, una volta disponibile, l'applicazione mobile FiscalFlow (collettivamente, il "Servizio") gestiti da FiscalFlow ("noi", "ci", o "nostro").
                            </p>

                            <h3 className="text-2xl font-bold text-fiscal-text mt-10 mb-4">1. Accettazione dei Termini</h3>
                            <p className="mb-4">
                                Accedendo o utilizzando il Servizio in qualsiasi modo, accetti di essere vincolato dai presenti Termini. Se non accetti tutte le condizioni contenute in questo accordo, non puoi accedere o utilizzare il Servizio. L'utilizzo del Servizio è espressamente condizionato all'accettazione di questi Termini.
                            </p>

                            <h3 className="text-2xl font-bold text-fiscal-text mt-10 mb-4">2. Oggetto del Servizio (Fase di Sviluppo e Waitlist)</h3>
                            <p className="mb-4">
                                L'Utente prende atto e accetta che FiscalFlow è un servizio attualmente in <strong>fase di sviluppo</strong> e non è ancora disponibile per l'utilizzo pubblico.
                            </p>
                            <p className="mb-4">
                                In questa fase, l'iscrizione tramite il sito ha l'unica finalità di inserire l'Utente in una "Lista d'Attesa" (Waitlist) per essere informato prioritariamente quando il servizio sarà lanciato. Non viene fornita alcuna funzionalità di gestione finanziaria in questo momento.
                            </p>
                            <p className="mb-4">
                                L'iscrizione alla Waitlist è gratuita e non comporta alcun obbligo di acquisto futuro.
                            </p>
                            <div className="bg-fiscal-surface border-l-4 border-fiscal-primary p-4 my-6">
                                <p className="font-bold text-fiscal-text mb-2">DISCLAIMER IMPORTANTE - NESSUNA CONSULENZA FINANZIARIA O LEGALE</p>
                                <p className="text-sm">
                                    L'Utente riconosce e accetta espressamente che FiscalFlow NON fornisce consulenza finanziaria, fiscale, legale o contabile. Tutte le informazioni, i calcoli e i suggerimenti forniti tramite il Servizio (inclusi newsletter e comunicazioni) sono a scopo puramente informativo e organizzativo.
                                </p>
                                <p className="text-sm mt-2">
                                    FiscalFlow non è un consulente finanziario abilitato. L'Utente è l'unico responsabile delle proprie decisioni economiche, di investimento e fiscali. Per questioni specifiche relative alla tassazione o alla gestione patrimoniale, si raccomanda vivamente di consultare un commercialista o un consulente finanziario qualificato.
                                </p>
                            </div>

                            <h3 className="text-2xl font-bold text-fiscal-text mt-10 mb-4">3. Iscrizione alla Waitlist</h3>
                            <p className="mb-4">
                                Per iscriversi alla Lista d'Attesa, l'Utente deve fornire un indirizzo email valido. L'Utente dichiara e garantisce:
                            </p>
                            <ul className="list-disc pl-6 mb-4 space-y-2">
                                <li>Di avere compiuto almeno 18 anni di età;</li>
                                <li>Che i dati forniti sono veritieri e corretti;</li>
                                <li>Di accettare di ricevere comunicazioni periodiche relative agli aggiornamenti di FiscalFlow.</li>
                            </ul>
                            <p className="mb-4">
                                FiscalFlow si riserva il diritto di rimuovere dalla lista d'attesa qualsiasi indirizzo email ritenuto non valido o fraudolento.
                            </p>

                            <h3 className="text-2xl font-bold text-fiscal-text mt-10 mb-4">4. Condizioni Future di Abbonamento (Al Lancio)</h3>
                            <p className="mb-4">
                                Le disposizioni di questa sezione si applicheranno solo quando il servizio sarà ufficialmente lanciato e disponibile. FiscalFlow prevede di offrire un modello "Freemium".
                            </p>
                            <ul className="list-disc pl-6 mb-4 space-y-2">
                                <li><strong>Gestione dei Pagamenti:</strong> I pagamenti sono gestiti interamente tramite la piattaforma sicura di terze parti <strong>Stripe</strong>. FiscalFlow non memorizza né ha accesso ai dati completi della tua carta di credito.</li>
                                <li><strong>Rinnovo Automatico:</strong> L'abbonamento Premium si rinnova automaticamente alla fine di ogni periodo di fatturazione (mensile o annuale) a meno che non venga disdetto dall'Utente prima della data di rinnovo.</li>
                                <li><strong>Disdetta:</strong> L'Utente può disdire l'abbonamento in qualsiasi momento tramite le impostazioni del proprio account o contattando il supporto. La disdetta avrà effetto dal periodo di fatturazione successivo. Non sono previsti rimborsi per periodi di abbonamento parzialmente utilizzati, salvo ove previsto dalla legge applicabile.</li>
                                <li><strong>Esclusione del Diritto di Recesso:</strong> Ai sensi dell'art. 59 del Codice del Consumo, il Diritto di Recesso è escluso per la fornitura di contenuto digitale mediante supporto non materiale se l'esecuzione è iniziata. Con l'attivazione dell'abbonamento Premium e l'inizio dell'utilizzo del servizio, l'Utente accetta espressamente di perdere il diritto di recesso entro i 14 giorni.</li>
                            </ul>

                            <h3 className="text-2xl font-bold text-fiscal-text mt-10 mb-4">5. Limitazione di Responsabilità</h3>
                            <p className="mb-4">
                                Nella misura massima consentita dalla legge applicabile, FiscalFlow e i suoi fornitori non saranno responsabili per danni indiretti, incidentali, speciali, consequenziali o punitivi, inclusi, senza limitazione, perdita di profitti, dati, uso, avviamento o altre perdite intangibili, derivanti da:
                            </p>
                            <ul className="list-disc pl-6 mb-4 space-y-2">
                                <li>L'accesso, l'uso o l'impossibilità di accedere o utilizzare il Servizio;</li>
                                <li>Qualsiasi condotta o contenuto di terze parti sul Servizio;</li>
                                <li>Accesso non autorizzato, uso o alterazione delle trasmissioni o dei contenuti dell'Utente.</li>
                            </ul>
                            <p className="mb-4">
                                FiscalFlow non garantisce che il Servizio sarà ininterrotto, sicuro o privo di errori.
                            </p>

                            <h3 className="text-2xl font-bold text-fiscal-text mt-10 mb-4">6. Modifiche ai Termini</h3>
                            <p className="mb-4">
                                Ci riserviamo il diritto di modificare o sostituire questi Termini in qualsiasi momento. Se una revisione è sostanziale, cercheremo di fornire un preavviso di almeno 30 giorni prima che i nuovi termini entrino in vigore. Continuando ad accedere o utilizzare il nostro Servizio dopo che tali revisioni diventano efficaci, accetti di essere vincolato dai termini modificati.
                            </p>

                            <h3 className="text-2xl font-bold text-fiscal-text mt-10 mb-4">7. Legge Applicabile e Foro Competente</h3>
                            <p className="mb-4">
                                I presenti Termini sono regolati e interpretati in conformità con le leggi dello Stato Italiano, senza riguardo alle disposizioni sui conflitti di legge. Per qualsiasi controversia sarà competente in via esclusiva il Foro del luogo di residenza o domicilio del consumatore, se ubicato nel territorio dello Stato Italiano.
                            </p>
                            <p className="mb-4">
                                Ai sensi del Regolamento UE n. 524/2013, si informa l'Utente che la Commissione Europea fornisce una piattaforma per la risoluzione alternativa extra-giudiziale delle controversie, accessibile al sito: <a href="http://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-fiscal-primary hover:underline">http://ec.europa.eu/consumers/odr</a>
                            </p>

                            <h3 className="text-2xl font-bold text-fiscal-text mt-10 mb-4">8. Contatti</h3>
                            <p className="mb-4">
                                Per qualsiasi domanda riguardante questi Termini, ti preghiamo di contattarci all'indirizzo email: <a href="mailto:assistenza@fiscalflow.it" className="text-fiscal-primary hover:underline">assistenza@fiscalflow.it</a>
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </main>
            <Footer />
        </div>
    );
}

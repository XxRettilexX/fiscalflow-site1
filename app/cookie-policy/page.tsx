"use client";

import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { FadeIn } from "../components/animations/FadeIn";

export default function CookiePolicy() {
    return (
        <div className="min-h-screen bg-fiscal-bg font-sans text-fiscal-text selection:bg-fiscal-primary/20 overflow-x-hidden">
            <Navbar />
            <main className="pt-32 pb-20">
                <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                    <FadeIn>
                        <h1 className="text-4xl font-bold mb-8">Informativa sui Cookie</h1>
                        <div className="prose prose-invert prose-lg text-fiscal-text-muted">
                            <p className="mb-4 text-sm italic">Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}</p>

                            <p className="mb-6">
                                Questa Informativa sui Cookie spiega cosa sono i cookie, come li utilizziamo sul sito web e sull'applicazione FiscalFlow, i tipi di cookie che utilizziamo e come puoi gestirli.
                            </p>

                            <h3 className="text-2xl font-bold text-fiscal-text mt-10 mb-4">1. Cosa sono i Cookie?</h3>
                            <p className="mb-4">
                                I cookie sono piccoli file di testo che vengono salvati sul tuo computer o dispositivo mobile quando visiti un sito web. Sono ampiamente utilizzati per far funzionare i siti web, o per farli funzionare in modo più efficiente, nonché per fornire informazioni ai proprietari del sito.
                            </p>

                            <h3 className="text-2xl font-bold text-fiscal-text mt-10 mb-4">2. Come utilizziamo i Cookie?</h3>
                            <p className="mb-4">Utilizziamo i cookie per diverse finalità:</p>
                            <ul className="list-disc pl-6 mb-4 space-y-2">
                                <li><strong>Cookie Essenziali:</strong> Necessari per il funzionamento del sito. Ti permettono di navigare e utilizzare le funzionalità essenziali come le aree sicure. Senza questi cookie, il servizio non può essere fornito.</li>
                                <li><strong>Cookie di Funzionalità:</strong> Ci permettono di ricordare le scelte che fai (come il tuo nome utente, la lingua o la regione) e fornire funzionalità migliorate e più personali.</li>
                                <li><strong>Cookie Analitici/Performance:</strong> Ci aiutano a capire come i visitatori interagiscono con il sito raccogliendo e riportando informazioni in modo anonimo. Questo ci aiuta a migliorare il funzionamento del nostro sito.</li>
                                <li><strong>Cookie di Marketing (opzionali):</strong> Utilizzati per tracciare i visitatori attraverso i siti web. L'intenzione è quella di visualizzare annunci pertinenti e coinvolgenti per il singolo utente.</li>
                            </ul>

                            <h3 className="text-2xl font-bold text-fiscal-text mt-10 mb-4">3. Cookie di Terze Parti</h3>
                            <p className="mb-4">
                                In alcuni casi speciali, utilizziamo anche cookie forniti da terze parti fidate. Ad esempio, questo sito potrebbe utilizzare Google Analytics, che è una delle soluzioni di analisi più diffuse e affidabili sul web, per aiutarci a capire come utilizzi il sito e come possiamo migliorare la tua esperienza.
                            </p>

                            <h3 className="text-2xl font-bold text-fiscal-text mt-10 mb-4">4. Gestione dei Cookie</h3>
                            <p className="mb-4">
                                Hai il diritto di decidere se accettare o rifiutare i cookie. Puoi impostare o modificare i controlli del tuo browser web per accettare o rifiutare i cookie. Se scegli di rifiutare i cookie, puoi comunque utilizzare il nostro sito web, anche se l'accesso ad alcune funzionalità e aree potrebbe essere limitato.
                            </p>
                            <p className="mb-4">
                                Poiché i mezzi attraverso i quali puoi rifiutare i cookie tramite i controlli del tuo browser web variano da browser a browser, dovresti visitare il menu di aiuto del tuo browser per ulteriori informazioni.
                            </p>

                            <h3 className="text-2xl font-bold text-fiscal-text mt-10 mb-4">5. Contatti</h3>
                            <p className="mb-4">
                                Se hai domande sulla nostra politica sui cookie, puoi contattarci via email all'indirizzo: <a href="mailto:assistenza@fiscalflow.it" className="text-fiscal-primary hover:underline">assistenza@fiscalflow.it</a>
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </main>
            <Footer />
        </div>
    );
}

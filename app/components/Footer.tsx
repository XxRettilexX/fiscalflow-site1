import React from "react";
import { Icons } from "./Icons";

export function Footer() {
    return (
        <footer className="bg-fiscal-surface border-t border-fiscal-border pt-20 pb-10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-fiscal-primary text-white">
                                <Icons.Logo className="h-5 w-5" />
                            </div>
                            <span className="text-xl font-bold text-fiscal-text">FiscalFlow</span>
                        </div>
                        <p className="text-fiscal-text-muted max-w-sm text-lg leading-relaxed">
                            La soluzione semplice e intelligente per gestire le tue finanze personali e raggiungere i tuoi obiettivi.
                        </p>
                    </div>
                    <div>
                        <p className="font-bold text-fiscal-text mb-6">Prodotto</p>
                        <ul className="space-y-4 text-sm text-fiscal-text-muted">
                            <li><a href="/#features" className="hover:text-fiscal-primary transition-colors">Funzionalità</a></li>
                            <li><a href="/#security" className="hover:text-fiscal-primary transition-colors">Sicurezza</a></li>
                            <li><a href="#" className="hover:text-fiscal-primary transition-colors">Roadmap</a></li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-bold text-fiscal-text mb-6">Legale</p>
                        <ul className="space-y-4 text-sm text-fiscal-text-muted">
                            <li><a href="/privacy-policy" className="hover:text-fiscal-primary transition-colors">Privacy Policy</a></li>
                            <li><a href="/terms-of-service" className="hover:text-fiscal-primary transition-colors">Termini di Servizio</a></li>
                            <li><a href="/cookie-policy" className="hover:text-fiscal-primary transition-colors">Cookie Policy</a></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-fiscal-border pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-sm text-fiscal-text-muted">
                        © {new Date().getFullYear()} FiscalFlow. Tutti i diritti riservati.
                    </p>
                    <div className="flex gap-4">
                        <a
                            href="https://www.instagram.com/_.vito.strisciuglio._/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="h-10 w-10 rounded-full bg-fiscal-bg hover:bg-fiscal-primary/10 transition-colors cursor-pointer flex items-center justify-center text-fiscal-text-muted hover:text-fiscal-primary"
                        >
                            <span className="sr-only">Instagram</span>
                            <Icons.Instagram className="h-5 w-5" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/vito-strisciuglio-615570268/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="h-10 w-10 rounded-full bg-fiscal-bg hover:bg-fiscal-primary/10 transition-colors cursor-pointer flex items-center justify-center text-fiscal-text-muted hover:text-fiscal-primary"
                        >
                            <span className="sr-only">LinkedIn</span>
                            <Icons.Linkedin className="h-5 w-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

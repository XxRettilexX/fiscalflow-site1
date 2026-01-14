"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/Button";
import { Icons } from "./Icons";
import { SettingsModal } from "./SettingsModal";

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <SettingsModal isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />

            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="sticky top-0 z-50 w-full border-b border-fiscal-border/30 bg-fiscal-surface/70 backdrop-blur-xl supports-[backdrop-filter]:bg-fiscal-surface/60"
            >
                <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-2">
                        <a href="/" className="flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-fiscal-primary text-white shadow-lg shadow-fiscal-primary/20">
                                <Icons.Logo className="h-5 w-5" />
                            </div>
                            <span className="text-xl font-bold tracking-tight text-fiscal-text">
                                FiscalFlow
                            </span>
                        </a>
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8">
                        <a href="/#features" className="text-sm font-medium text-fiscal-text-muted hover:text-fiscal-primary transition-colors">Funzionalità</a>
                        <a href="/#how-it-works" className="text-sm font-medium text-fiscal-text-muted hover:text-fiscal-primary transition-colors">Come funziona</a>
                        <a href="/#security" className="text-sm font-medium text-fiscal-text-muted hover:text-fiscal-primary transition-colors">Sicurezza</a>
                    </div>

                    <div className="hidden md:flex items-center gap-4">
                        <button
                            onClick={() => setIsSettingsOpen(true)}
                            className="p-2 text-fiscal-text-muted hover:text-fiscal-primary transition-colors rounded-full hover:bg-fiscal-primary/5"
                            aria-label="Impostazioni"
                        >
                            <Icons.Settings className="h-5 w-5" />
                        </button>
                        <Button size="sm" className="rounded-full px-6" onClick={() => scrollToSection('early-access')}>
                            Prova ora
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-fiscal-text-muted"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Menu"
                    >
                        <Icons.Menu className="h-6 w-6" />
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                            className="absolute top-full left-0 w-full md:hidden border-b border-fiscal-border bg-fiscal-surface/95 backdrop-blur-xl px-4 py-6 shadow-2xl"
                        >
                            <div className="flex flex-col space-y-4">
                                <a href="/#features" className="text-base font-medium text-fiscal-text-muted hover:text-fiscal-primary transition-colors p-2 rounded-lg hover:bg-fiscal-primary/5" onClick={() => setIsMenuOpen(false)}>Funzionalità</a>
                                <a href="/#how-it-works" className="text-base font-medium text-fiscal-text-muted hover:text-fiscal-primary transition-colors p-2 rounded-lg hover:bg-fiscal-primary/5" onClick={() => setIsMenuOpen(false)}>Come funziona</a>
                                <a href="/#security" className="text-base font-medium text-fiscal-text-muted hover:text-fiscal-primary transition-colors p-2 rounded-lg hover:bg-fiscal-primary/5" onClick={() => setIsMenuOpen(false)}>Sicurezza</a>
                                <button
                                    className="flex items-center text-base font-medium text-fiscal-text-muted w-full text-left p-2 rounded-lg hover:bg-fiscal-primary/5 hover:text-fiscal-primary transition-colors"
                                    onClick={() => {
                                        setIsMenuOpen(false);
                                        setIsSettingsOpen(true);
                                    }}
                                >
                                    <Icons.Settings className="h-5 w-5 mr-3" />
                                    Impostazioni
                                </button>
                                <div className="pt-2">
                                    <Button size="lg" fullWidth className="rounded-xl shadow-lg shadow-fiscal-primary/20" onClick={() => {
                                        setIsMenuOpen(false);
                                        scrollToSection('early-access');
                                    }}>
                                        Prova ora
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </>
    );
}

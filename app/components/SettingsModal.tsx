"use client";

import React from "react";
import { useTheme } from "../context/ThemeContext";
import { Icons } from "../components/Icons";
import { Button } from "../components/ui/Button";

interface SettingsModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose }) => {
    const {
        theme, setTheme,
        fontSize, setFontSize,
        highContrast, setHighContrast,
        dyslexicFont, setDyslexicFont,
        grayscale, setGrayscale
    } = useTheme();

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <div className="w-full max-w-md rounded-2xl bg-white dark:bg-slate-800 p-6 shadow-2xl border border-gray-200 dark:border-slate-700 max-h-[90vh] overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">Impostazioni Sito</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200" aria-label="Chiudi">
                        <Icons.X className="h-6 w-6" />
                    </button>
                </div>

                <div className="space-y-8">
                    {/* Theme Selection */}
                    <div>
                        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wider">Tema</h3>
                        <div className="grid grid-cols-3 gap-3">
                            <button
                                onClick={() => setTheme("light")}
                                className={`flex flex-col items-center justify-center p-3 rounded-xl border-2 transition-all ${theme === "light"
                                    ? "border-blue-600 bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400"
                                    : "border-gray-200 hover:border-gray-300 dark:border-slate-700 dark:hover:border-slate-600 text-gray-600 dark:text-gray-300"
                                    }`}
                            >
                                <Icons.Sun className="h-6 w-6 mb-2" />
                                <span className="text-sm font-medium">Chiaro</span>
                            </button>
                            <button
                                onClick={() => setTheme("dark")}
                                className={`flex flex-col items-center justify-center p-3 rounded-xl border-2 transition-all ${theme === "dark"
                                    ? "border-blue-600 bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400"
                                    : "border-gray-200 hover:border-gray-300 dark:border-slate-700 dark:hover:border-slate-600 text-gray-600 dark:text-gray-300"
                                    }`}
                            >
                                <Icons.Moon className="h-6 w-6 mb-2" />
                                <span className="text-sm font-medium">Scuro</span>
                            </button>
                            <button
                                onClick={() => setTheme("system")}
                                className={`flex flex-col items-center justify-center p-3 rounded-xl border-2 transition-all ${theme === "system"
                                    ? "border-blue-600 bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400"
                                    : "border-gray-200 hover:border-gray-300 dark:border-slate-700 dark:hover:border-slate-600 text-gray-600 dark:text-gray-300"
                                    }`}
                            >
                                <Icons.Monitor className="h-6 w-6 mb-2" />
                                <span className="text-sm font-medium">Sistema</span>
                            </button>
                        </div>
                    </div>

                    {/* Font Size Selection */}
                    <div>
                        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wider">Dimensione Testo</h3>
                        <div className="flex items-center justify-between bg-gray-100 dark:bg-slate-900 rounded-xl p-1">
                            <button
                                onClick={() => setFontSize("small")}
                                className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${fontSize === "small"
                                    ? "bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm"
                                    : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                                    }`}
                            >
                                Aa Piccolo
                            </button>
                            <button
                                onClick={() => setFontSize("medium")}
                                className={`flex-1 py-2 rounded-lg text-base font-medium transition-all ${fontSize === "medium"
                                    ? "bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm"
                                    : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                                    }`}
                            >
                                Aa Medio
                            </button>
                            <button
                                onClick={() => setFontSize("large")}
                                className={`flex-1 py-2 rounded-lg text-lg font-medium transition-all ${fontSize === "large"
                                    ? "bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm"
                                    : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                                    }`}
                            >
                                Aa Grande
                            </button>
                        </div>
                    </div>

                    {/* Accessibility Section */}
                    <div>
                        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wider">Accessibilità</h3>
                        <div className="space-y-3">
                            {/* High Contrast Toggle */}
                            <button
                                onClick={() => setHighContrast(!highContrast)}
                                className={`w-full flex items-center justify-between p-4 rounded-xl border-2 transition-all ${highContrast
                                    ? "border-blue-600 bg-blue-50 dark:bg-blue-900/20"
                                    : "border-gray-200 dark:border-slate-700 hover:border-gray-300 dark:hover:border-slate-600"
                                    }`}
                            >
                                <div className="flex items-center gap-3">
                                    <div className={`p-2 rounded-lg ${highContrast ? "bg-blue-600 text-white" : "bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-400"}`}>
                                        <Icons.Sun className="h-5 w-5" />
                                    </div>
                                    <div className="text-left">
                                        <p className={`font-medium ${highContrast ? "text-blue-700 dark:text-blue-400" : "text-gray-900 dark:text-white"}`}>Contrasto Elevato</p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">Aumenta il contrasto dei colori</p>
                                    </div>
                                </div>
                                <div className={`w-12 h-6 rounded-full relative transition-colors ${highContrast ? "bg-blue-600" : "bg-gray-300 dark:bg-slate-600"}`}>
                                    <div className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform ${highContrast ? "translate-x-6" : "translate-x-0"}`} />
                                </div>
                            </button>

                            {/* Dyslexic Font Toggle */}
                            <button
                                onClick={() => setDyslexicFont(!dyslexicFont)}
                                className={`w-full flex items-center justify-between p-4 rounded-xl border-2 transition-all ${dyslexicFont
                                    ? "border-blue-600 bg-blue-50 dark:bg-blue-900/20"
                                    : "border-gray-200 dark:border-slate-700 hover:border-gray-300 dark:hover:border-slate-600"
                                    }`}
                            >
                                <div className="flex items-center gap-3">
                                    <div className={`p-2 rounded-lg ${dyslexicFont ? "bg-blue-600 text-white" : "bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-400"}`}>
                                        <span className="font-serif font-bold text-lg">Aa</span>
                                    </div>
                                    <div className="text-left">
                                        <p className={`font-medium ${dyslexicFont ? "text-blue-700 dark:text-blue-400" : "text-gray-900 dark:text-white"}`}>Font Leggibile</p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">Ottimizzato per dislessia</p>
                                    </div>
                                </div>
                                <div className={`w-12 h-6 rounded-full relative transition-colors ${dyslexicFont ? "bg-blue-600" : "bg-gray-300 dark:bg-slate-600"}`}>
                                    <div className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform ${dyslexicFont ? "translate-x-6" : "translate-x-0"}`} />
                                </div>
                            </button>

                            {/* Grayscale Toggle */}
                            <button
                                onClick={() => setGrayscale(!grayscale)}
                                className={`w-full flex items-center justify-between p-4 rounded-xl border-2 transition-all ${grayscale
                                    ? "border-blue-600 bg-blue-50 dark:bg-blue-900/20"
                                    : "border-gray-200 dark:border-slate-700 hover:border-gray-300 dark:hover:border-slate-600"
                                    }`}
                            >
                                <div className="flex items-center gap-3">
                                    <div className={`p-2 rounded-lg ${grayscale ? "bg-blue-600 text-white" : "bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-400"}`}>
                                        <Icons.Eye className="h-5 w-5" />
                                    </div>
                                    <div className="text-left">
                                        <p className={`font-medium ${grayscale ? "text-blue-700 dark:text-blue-400" : "text-gray-900 dark:text-white"}`}>Scala di Grigi</p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">Rimuove tutti i colori</p>
                                    </div>
                                </div>
                                <div className={`w-12 h-6 rounded-full relative transition-colors ${grayscale ? "bg-blue-600" : "bg-gray-300 dark:bg-slate-600"}`}>
                                    <div className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform ${grayscale ? "translate-x-6" : "translate-x-0"}`} />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100 dark:border-slate-700 flex justify-end">
                    <Button onClick={onClose} variant="primary" className="w-full sm:w-auto">
                        Chiudi
                    </Button>
                </div>
            </div>
        </div>
    );
};

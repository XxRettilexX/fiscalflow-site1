import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FiscalFlow | App Gestione Spese, Budget e Risparmio Personale",
  description: "Non è per le tasse, è per il tuo portafoglio. Traccia le spese quotidiane, crea budget intelligenti e gestisci le finanze di casa con FiscalFlow. Provala ora.",
  verification: {
    google: "Lzu-EiapW50rxVFSoTh2PPQxWwPD5AdLnVeJE2WPeAo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <Script
        id="Cookiebot"
        src="https://consent.cookiebot.com/uc.js"
        data-cbid="0e2522e2-4564-44f8-99b1-21bfa10e03f7"
        data-blockingmode="auto"
        strategy="beforeInteractive"
      />
      <meta name="google-site-verification" content="Lzu-EiapW50rxVFSoTh2PPQxWwPD5AdLnVeJE2WPeAo" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

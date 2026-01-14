"use client";

import React from "react";
import { Button } from "./components/ui/Button";
import { Input } from "./components/ui/Input";
import { Card } from "./components/ui/Card";
import { Icons } from "./components/Icons";
import { FadeIn } from "./components/animations/FadeIn";
import { motion } from "framer-motion";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

export default function LandingPage() {
  const [privacyError, setPrivacyError] = React.useState(false);

  return (
    <div className="min-h-screen bg-fiscal-bg font-sans text-fiscal-text selection:bg-fiscal-primary/20 overflow-x-hidden">
      <Navbar />

      <main>
        {/* 2) Hero Section - Centered & Impactful */}
        <section className="relative overflow-hidden pt-20 pb-32 lg:pt-32 lg:pb-40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">

            <div className="inline-flex items-center rounded-full border border-fiscal-primary/20 bg-fiscal-primary/5 px-4 py-1.5 text-sm font-medium text-[var(--fiscal-primary-text)] mb-8 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-fiscal-primary mr-2 animate-pulse"></span>
              In arrivo a breve
            </div>

            <h1 className="text-5xl font-bold tracking-tight text-fiscal-text sm:text-7xl mb-6 max-w-4xl mx-auto leading-[1.1]">
              Il Tuo Budget Personale, <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fiscal-primary to-fiscal-accent">
                Finalmente Sotto Controllo.
              </span>
            </h1>

            <FadeIn delay={0.3}>
              <p className="text-xl text-fiscal-text-muted mb-10 max-w-2xl mx-auto leading-relaxed">
                Smetti di chiederti dove finiscono i soldi. FiscalFlow non è per le tasse, ma per la tua vita: traccia le spese, risparmia senza stress e realizza i tuoi sogni.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
                <Button size="lg" className="rounded-full px-8 text-lg h-14" onClick={() => document.getElementById('early-access')?.scrollIntoView({ behavior: 'smooth' })}>
                  Inizia a Risparmiare Gratis
                </Button>
                <Button variant="secondary" size="lg" className="rounded-full px-8 text-lg h-14 bg-fiscal-surface hover:bg-fiscal-border/50 border border-fiscal-border">
                  Scopri come funziona
                </Button>
              </div>
            </FadeIn>

            {/* Floating Phone Mockup */}
            <div className="relative mx-auto max-w-[300px] sm:max-w-[340px]">
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 8,
                  ease: "easeInOut"
                }}
                style={{ willChange: "transform" }}
                className="relative z-10"
              >
                {/* iPhone Frame */}
                <div className="relative mx-auto aspect-[9/19.5] w-full rounded-[3.5rem] border-[12px] border-[#2a2a2a] bg-black shadow-2xl overflow-hidden ring-1 ring-white/20">

                  {/* Screen Content */}
                  <div className="h-full w-full bg-fiscal-surface flex flex-col rounded-[2.8rem] overflow-hidden relative">

                    {/* Status Bar */}
                    <div className="absolute top-0 left-0 right-0 h-12 px-6 flex justify-between items-end pb-2 z-50 text-white text-xs font-medium">
                      <span>9:41</span>
                      <div className="flex items-center gap-1.5">
                        <Icons.Signal className="h-3.5 w-3.5" />
                        <Icons.Wifi className="h-3.5 w-3.5" />
                        <Icons.Battery className="h-3.5 w-3.5" />
                      </div>
                    </div>

                    {/* Dynamic Island */}
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 h-[28px] w-[100px] bg-black rounded-full z-50 flex items-center justify-center">
                      <div className="h-full w-full rounded-full bg-black relative overflow-hidden">
                        {/* Camera lens reflection simulation */}
                        <div className="absolute top-1/2 right-3 -translate-y-1/2 h-2 w-2 rounded-full bg-[#1a1a1a]/50"></div>
                      </div>
                    </div>

                    {/* App Header */}
                    <div className="bg-fiscal-primary p-6 pb-8 text-white pt-16 relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/20 to-transparent pointer-events-none"></div>
                      <div className="flex justify-between items-center mb-8">
                        <div className="flex items-center gap-2">
                          <div className="h-8 w-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                            <span className="font-bold text-xs">JD</span>
                          </div>
                        </div>
                        <Icons.Bell className="h-6 w-6 opacity-90" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm opacity-80 font-medium">Budget Mensile</p>
                        <div className="flex items-baseline gap-2">
                          <p className="text-4xl font-bold tracking-tight">€ 850,00</p>
                          <span className="text-sm opacity-80">/ € 1.200</span>
                        </div>
                        {/* Progress Bar */}
                        <div className="w-full h-1.5 bg-black/20 rounded-full mt-3 overflow-hidden">
                          <div className="h-full w-[70%] bg-white/90 rounded-full"></div>
                        </div>
                      </div>
                    </div>

                    {/* App Body */}
                    <div className="flex-1 bg-fiscal-surface relative z-0 -mt-6 rounded-t-[2rem] overflow-hidden">
                      <div className="p-5 space-y-5 h-full overflow-y-auto no-scrollbar pb-10">

                        {/* Quick Actions */}
                        <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar -mx-5 px-5">
                          <div className="flex-shrink-0 flex flex-col items-center gap-2">
                            <div className="h-14 w-14 rounded-2xl bg-fiscal-primary/10 flex items-center justify-center text-fiscal-primary">
                              <span className="text-2xl font-light">+</span>
                            </div>
                            <span className="text-xs font-medium text-fiscal-text-muted">Spesa</span>
                          </div>
                          <div className="flex-shrink-0 flex flex-col items-center gap-2">
                            <div className="h-14 w-14 rounded-2xl bg-fiscal-primary/10 flex items-center justify-center text-fiscal-primary">
                              <Icons.Target className="h-6 w-6" />
                            </div>
                            <span className="text-xs font-medium text-fiscal-text-muted">Obiettivi</span>
                          </div>
                          <div className="flex-shrink-0 flex flex-col items-center gap-2">
                            <div className="h-14 w-14 rounded-2xl bg-fiscal-primary/10 flex items-center justify-center text-fiscal-primary">
                              <Icons.Chart className="h-6 w-6" />
                            </div>
                            <span className="text-xs font-medium text-fiscal-text-muted">Report</span>
                          </div>
                          <div className="flex-shrink-0 flex flex-col items-center gap-2">
                            <div className="h-14 w-14 rounded-2xl bg-fiscal-surface border border-fiscal-border flex items-center justify-center text-fiscal-text-muted">
                              <Icons.Menu className="h-6 w-6" />
                            </div>
                            <span className="text-xs font-medium text-fiscal-text-muted">Altro</span>
                          </div>
                        </div>

                        {/* Recent Transactions */}
                        <div>
                          <div className="flex justify-between items-center mb-3">
                            <p className="font-bold text-fiscal-text">Ultime Spese</p>
                            <span className="text-xs text-fiscal-primary font-medium">Vedi tutte</span>
                          </div>
                          <div className="space-y-3">
                            {[
                              { name: "Spesa Settimanale", cat: "Alimentari", price: "€ 85,40", icon: "🛒", color: "bg-orange-500" },
                              { name: "Benzina", cat: "Trasporti", price: "€ 50,00", icon: "⛽", color: "bg-blue-500" },
                              { name: "Cena Fuori", cat: "Svago", price: "€ 45,00", icon: "🍕", color: "bg-purple-500" },
                              { name: "Abbonamento Palestra", cat: "Salute", price: "€ 39,90", icon: "💪", color: "bg-emerald-500" },
                            ].map((item, i) => (
                              <div key={i} className="flex items-center justify-between p-3 bg-white dark:bg-white/5 rounded-2xl border border-fiscal-border/50 shadow-sm">
                                <div className="flex items-center gap-3">
                                  <div className={`h-10 w-10 rounded-full ${item.color} text-white flex items-center justify-center font-bold text-sm`}>
                                    {item.icon}
                                  </div>
                                  <div>
                                    <p className="font-bold text-sm text-fiscal-text">{item.name}</p>
                                    <p className="text-xs text-fiscal-text-muted">{item.cat}</p>
                                  </div>
                                </div>
                                <p className="font-bold text-sm text-fiscal-text">{item.price}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </motion.div>

              {/* Glow Effects */}
              <div className="absolute top-1/2 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-fiscal-primary/20 blur-[100px] opacity-60" />
              <div className="absolute top-1/2 left-1/2 -z-10 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-fiscal-accent/20 blur-[80px] opacity-60 mix-blend-screen" />
            </div>
          </div>
        </section>

        {/* 3) Features Grid - Bento Style */}
        <section id="features" className="py-32 bg-fiscal-surface relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto mb-20">
                <h2 className="text-4xl font-bold text-fiscal-text sm:text-5xl mb-6 tracking-tight">Potente. Semplice. Tuo.</h2>
                <p className="text-xl text-fiscal-text-muted">Strumenti progettati per darti il controllo totale, senza la complessità.</p>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Icons.Wallet,
                  title: "Budget intelligente",
                  desc: "Imposta limiti di spesa per categoria e ricevi notifiche prima di sforare.",
                  colSpan: "lg:col-span-2"
                },
                {
                  icon: Icons.Bell,
                  title: "Alert anti-spesa",
                  desc: "Avvisi in tempo reale per aiutarti a bloccare gli acquisti impulsivi.",
                  colSpan: "lg:col-span-1"
                },
                {
                  icon: Icons.Target,
                  title: "Obiettivi",
                  desc: "Definisci i tuoi sogni e traccia i progressi mese dopo mese.",
                  colSpan: "lg:col-span-1"
                },
                {
                  icon: Icons.Chart,
                  title: "Report chiari",
                  desc: "Grafici semplici che ti mostrano esattamente dove finiscono i tuoi soldi.",
                  colSpan: "lg:col-span-2"
                }
              ].map((feature, idx) => (
                <FadeIn key={idx} delay={idx * 0.1} className={feature.colSpan} fullWidth={false} padding={false}>
                  <Card className="h-full p-8 hover:shadow-2xl hover:shadow-fiscal-primary/5 transition-all duration-500 border-fiscal-border/50 bg-fiscal-bg/50 backdrop-blur-sm group">
                    <div className="h-14 w-14 rounded-2xl bg-fiscal-primary/10 text-fiscal-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                      <feature.icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-fiscal-text mb-4">{feature.title}</h3>
                    <p className="text-lg text-fiscal-text-muted leading-relaxed">{feature.desc}</p>
                  </Card>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* 4) How it works - Minimal Steps */}
        <section id="how-it-works" className="py-32 bg-fiscal-bg">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center mb-24">
                <h2 className="text-4xl font-bold text-fiscal-text sm:text-5xl tracking-tight">Come funziona</h2>
              </div>
            </FadeIn>

            <div className="relative">
              {/* Connector Line (Desktop) */}
              <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-fiscal-border to-transparent opacity-50" />

              <div className="grid md:grid-cols-3 gap-16 relative">
                {[
                  { step: "01", title: "Collega", desc: "Collega il tuo conto o inserisci le spese manualmente." },
                  { step: "02", title: "Analizza", desc: "L'IA categorizza tutto e trova le spese inutili." },
                  { step: "03", title: "Risparmia", desc: "Ricevi consigli e raggiungi i tuoi obiettivi." }
                ].map((item, idx) => (
                  <FadeIn key={idx} delay={idx * 0.2} direction="up">
                    <div className="relative flex flex-col items-center text-center group">
                      <div className="h-24 w-24 rounded-full bg-fiscal-surface border-4 border-fiscal-bg flex items-center justify-center text-2xl font-bold text-fiscal-primary mb-8 z-10 shadow-lg group-hover:scale-110 transition-transform duration-500">
                        {item.step}
                      </div>
                      <h3 className="text-2xl font-bold text-fiscal-text mb-4">{item.title}</h3>
                      <p className="text-lg text-fiscal-text-muted leading-relaxed max-w-xs">{item.desc}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 5) Security - Dark & Sleek */}
        <section id="security" className="py-32 bg-[#0A0A0A] text-white overflow-hidden relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <FadeIn direction="right">
                <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white mb-8 border border-white/10 backdrop-blur-md">
                  <Icons.Shield className="h-4 w-4 mr-2" />
                  Sicurezza Bancaria
                </div>
                <h2 className="text-4xl font-bold sm:text-5xl mb-8 tracking-tight">I tuoi dati sono al sicuro. <br /><span className="text-gray-500">Davvero.</span></h2>
                <p className="text-xl text-gray-400 mb-10 leading-relaxed">
                  Utilizziamo gli stessi standard di sicurezza delle banche internazionali. I tuoi dati sono tuoi, e di nessun altro.
                </p>
                <ul className="space-y-6">
                  {[
                    "Crittografia AES-256 end-to-end",
                    "Nessuna vendita di dati a terze parti",
                    "Server sicuri in Europa (GDPR)",
                    "Accesso biometrico protetto"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center text-lg text-gray-300">
                      <div className="mr-4 flex h-6 w-6 items-center justify-center rounded-full bg-fiscal-accent text-[#0A0A0A]">
                        <Icons.Check className="h-3.5 w-3.5 stroke-[3px]" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </FadeIn>

              <FadeIn direction="left" delay={0.3} className="flex justify-center lg:justify-end">
                <div className="relative">
                  <div className="absolute inset-0 bg-fiscal-primary blur-[120px] opacity-20 rounded-full animate-pulse" />
                  <Icons.Shield className="relative h-80 w-80 text-white/5" strokeWidth={0.5} />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <Icons.Logo className="h-40 w-40 text-white opacity-90 drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]" />
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* 6) Early Access - Clean Card */}
        <section id="early-access" className="py-32 bg-fiscal-surface">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <FadeIn direction="up">
              <Card highlight className="text-center p-10 sm:p-16 border-fiscal-primary/20 shadow-2xl shadow-fiscal-primary/10 bg-gradient-to-b from-fiscal-surface to-fiscal-bg">
                <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-fiscal-primary/10 text-fiscal-primary">
                  <Icons.Zap className="h-10 w-10" />
                </div>
                <h2 className="text-4xl font-bold text-fiscal-text mb-6 tracking-tight">Inizia il tuo viaggio finanziario</h2>
                <p className="text-xl text-fiscal-text-muted mb-10 max-w-lg mx-auto">
                  Iscriviti alla lista d'attesa per ottenere l'accesso anticipato e 3 mesi di Premium gratis.
                </p>

                <form className="max-w-md mx-auto space-y-4 text-left" onSubmit={async (e) => {
                  e.preventDefault();
                  const form = e.target as HTMLFormElement;
                  const name = (form.elements.namedItem('name') as HTMLInputElement).value;
                  const email = (form.elements.namedItem('email') as HTMLInputElement).value;
                  const hp = (form.elements.namedItem('hp_field') as HTMLInputElement).value; // Honeypot
                  const privacyConsent = (form.elements.namedItem('privacy-consent') as HTMLInputElement).checked;
                  const btn = form.querySelector('button');

                  if (hp) {
                    // Se il campo honeypot è compilato, simula successo ma non fare nulla
                    alert("Grazie! Ti sei iscritto con successo.");
                    form.reset();
                    return;
                  }

                  if (!privacyConsent) {
                    setPrivacyError(true);
                    return;
                  }
                  setPrivacyError(false);

                  if (btn) {
                    btn.disabled = true;
                    btn.innerText = "Invio in corso...";
                  }

                  try {
                    const res = await fetch('/api/waitlist', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({ name, email, hp }),
                    });

                    const data = await res.json();

                    if (res.ok) {
                      alert("Grazie! Ti sei iscritto con successo.");
                      form.reset();
                    } else {
                      alert(data.error || "Qualcosa è andato storto. Riprova.");
                    }
                  } catch (error) {
                    alert("Errore di connessione.");
                  } finally {
                    if (btn) {
                      btn.disabled = false;
                      btn.innerText = "Entra in lista d'attesa";
                    }
                  }
                }}>
                  <div className="space-y-4">
                    <Input name="name" placeholder="Mario Rossi" label="Nome completo" className="h-12 text-lg" required />
                    <Input name="email" type="email" placeholder="mario@esempio.it" label="Indirizzo Email" className="h-12 text-lg" required />

                    {/* Honeypot Field (Hidden) */}
                    <div className="opacity-0 absolute top-0 left-0 h-0 w-0 overflow-hidden z-[-1]">
                      <label htmlFor="hp_field">Non compilare questo campo se sei umano</label>
                      <input type="text" id="hp_field" name="hp_field" tabIndex={-1} autoComplete="off" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 mt-4">
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="privacy-consent"
                        name="privacy-consent"
                        className={`mt-1 h-4 w-4 rounded border-fiscal-border text-fiscal-primary focus:ring-fiscal-primary cursor-pointer ${privacyError ? 'border-red-500 ring-red-500' : ''}`}
                        onChange={() => setPrivacyError(false)}
                      />
                      <label htmlFor="privacy-consent" className={`text-sm leading-tight cursor-pointer ${privacyError ? 'text-red-500' : 'text-fiscal-text-muted'}`}>
                        Ho più di 18 anni e accetto la <a href="/privacy-policy" className="text-fiscal-primary hover:underline underline-offset-4">Privacy Policy</a>.
                      </label>
                    </div>
                    {privacyError && (
                      <p className="text-xs text-red-500 font-medium ml-7">
                        Devi accettare la Privacy Policy per iscriverti.
                      </p>
                    )}
                  </div>

                  <Button type="submit" fullWidth size="lg" className="mt-6 h-14 text-lg rounded-xl shadow-lg shadow-fiscal-primary/25 hover:shadow-fiscal-primary/40 transition-all">
                    Entra in lista d'attesa
                  </Button>
                  <p className="text-sm text-center text-fiscal-text-muted mt-6">
                    Niente spam. Promesso.
                  </p>
                </form>
              </Card>
            </FadeIn>
          </div>
        </section>

        {/* 7) FAQ - Minimal Accordion */}
        <section id="faq" className="py-32 bg-fiscal-bg">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <h2 className="text-3xl font-bold text-center text-fiscal-text mb-16 tracking-tight">Domande Frequenti</h2>
              <div className="space-y-6">
                {[
                  { q: "Quando esce la prova?", a: "Stiamo lavorando duramente per rilasciare la beta pubblica entro la fine del prossimo mese. Iscriviti per essere il primo a saperlo!" },
                  { q: "Serve collegare il conto bancario?", a: "Non è obbligatorio. Puoi usare FiscalFlow inserendo le spese manualmente, ma collegando il conto (in modo sicuro e sola lettura) avrai l'analisi automatica." },
                  { q: "È gratis?", a: "La versione base sarà sempre gratuita. Offriremo un piano Premium con funzionalità avanzate di reportistica e budget illimitati." },
                  { q: "I miei dati sono al sicuro?", a: "Assolutamente sì. Usiamo crittografia a 256-bit e non vendiamo mai i tuoi dati a scopi pubblicitari." },
                  { q: "Posso cancellarmi quando voglio?", a: "Sì, puoi cancellare il tuo account e tutti i tuoi dati in qualsiasi momento direttamente dalle impostazioni dell'app." }
                ].map((faq, idx) => (
                  <Card key={idx} className="p-0 overflow-hidden border-none shadow-sm hover:shadow-md transition-shadow">
                    <details className="group">
                      <summary className="flex cursor-pointer items-center justify-between p-6 font-medium text-lg text-fiscal-text list-none">
                        {faq.q}
                        <span className="transition-transform duration-300 group-open:rotate-180">
                          <Icons.ChevronDown className="h-5 w-5 text-fiscal-text-muted" />
                        </span>
                      </summary>
                      <div className="px-6 pb-6 text-fiscal-text-muted leading-relaxed">
                        <p>{faq.a}</p>
                      </div>
                    </details>
                  </Card>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function IconBolt({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

function IconCheckCircle({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

const navLinks = ["Produkte", "Lösungen", "Ressourcen", "Über uns"];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [serviceType, setServiceType] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* ── Header ── */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-blue-500 flex items-center justify-center">
              <IconBolt className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">awatt</span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="text-slate-600">
              Login
            </Button>
            <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700 text-white">
              Demo buchen
            </Button>
          </div>
        </div>
      </header>

      {/* ── Page content ── */}
      <main className="max-w-2xl mx-auto px-4 sm:px-6 py-16">
        {!submitted ? (
          <>
            <div className="mb-10 text-center">
              <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Jetzt registrieren
              </h1>
              <p className="mt-3 text-slate-500 text-base">
                Starten Sie noch heute – unser Team meldet sich innerhalb von 24 Stunden bei Ihnen.
              </p>
            </div>

            <Card className="shadow-md border-slate-200">
              <CardHeader>
                <CardTitle className="text-lg">Ihre Angaben</CardTitle>
                <CardDescription>
                  Alle mit <span className="text-red-500">*</span> markierten Felder sind Pflichtfelder.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">
                        Vorname <span className="text-red-500">*</span>
                      </Label>
                      <Input id="firstName" name="firstName" placeholder="Max" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">
                        Nachname <span className="text-red-500">*</span>
                      </Label>
                      <Input id="lastName" name="lastName" placeholder="Mustermann" required />
                    </div>
                  </div>

                  {/* Email + Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">
                        E-Mail-Adresse <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="max@firma.de"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefonnummer</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+49 151 00000000"
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div className="space-y-2">
                    <Label htmlFor="company">
                      Firmenname <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Musterfirma GmbH"
                      required
                    />
                  </div>

                  {/* Service type */}
                  <div className="space-y-2">
                    <Label htmlFor="serviceType">
                      Art der Anmeldung <span className="text-red-500">*</span>
                    </Label>
                    <Select
                      required
                      value={serviceType}
                      onValueChange={(v) => setServiceType(v ?? "")}
                    >
                      <SelectTrigger id="serviceType" className="w-full">
                        <SelectValue placeholder="Bitte wählen…" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pv">PV-Netzanmeldung (Solar)</SelectItem>
                        <SelectItem value="wp">Wärmepumpen-Anmeldung</SelectItem>
                        <SelectItem value="wallbox">Wallbox-Anmeldung</SelectItem>
                        <SelectItem value="mehrere">Mehrere Anmeldungstypen</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Projects per month */}
                  <div className="space-y-2">
                    <Label htmlFor="volume">Projekte pro Monat (ca.)</Label>
                    <Select>
                      <SelectTrigger id="volume" className="w-full">
                        <SelectValue placeholder="Bitte wählen…" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-5">1–5 Projekte</SelectItem>
                        <SelectItem value="6-20">6–20 Projekte</SelectItem>
                        <SelectItem value="21-50">21–50 Projekte</SelectItem>
                        <SelectItem value="50+">Mehr als 50 Projekte</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message">Anmerkungen / Fragen</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Haben Sie spezielle Anforderungen oder Fragen?"
                      className="resize-none"
                      rows={4}
                    />
                  </div>

                  {/* Privacy */}
                  <div className="flex items-start gap-3">
                    <input
                      id="privacy"
                      name="privacy"
                      type="checkbox"
                      required
                      className="mt-1 h-4 w-4 rounded border-slate-300 text-indigo-600 accent-indigo-600"
                    />
                    <label htmlFor="privacy" className="text-sm text-slate-500 leading-snug">
                      Ich habe die{" "}
                      <a href="#" className="text-indigo-600 hover:underline">
                        Datenschutzerklärung
                      </a>{" "}
                      gelesen und stimme der Verarbeitung meiner Daten zu.{" "}
                      <span className="text-red-500">*</span>
                    </label>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3"
                    size="lg"
                  >
                    Registrierung absenden
                  </Button>
                </form>
              </CardContent>
            </Card>
          </>
        ) : (
          /* ── Success state ── */
          <div className="text-center py-24 flex flex-col items-center gap-5">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
              <IconCheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Vielen Dank!</h2>
            <p className="text-slate-500 max-w-sm">
              Ihre Anfrage ist bei uns eingegangen. Wir melden uns innerhalb von{" "}
              <strong>24 Stunden</strong> bei Ihnen.
            </p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => (window.location.href = "/")}
            >
              Zurück zur Startseite
            </Button>
          </div>
        )}
      </main>

      {/* ── Footer ── */}
      <footer className="border-t border-slate-100 bg-slate-50 py-10 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400">
          <span>© 2026 awatt GmbH. Alle Rechte vorbehalten.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-600 transition-colors">Impressum</a>
            <a href="#" className="hover:text-slate-600 transition-colors">Datenschutz</a>
            <a href="#" className="hover:text-slate-600 transition-colors">AGB</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

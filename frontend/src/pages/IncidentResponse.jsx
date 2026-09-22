import React from 'react';
import { PhoneCall, AlertOctagon, Clock, ShieldCheck, FileCheck, ExternalLink, ArrowRight, AlertTriangle } from 'lucide-react';

export default function IncidentResponse() {
  const steps = [
    {
      step: "01",
      title: "Disconnect & Stop All Communication",
      timeframe: "Immediate (Minute 0)",
      action: "Hang up the phone or video call. Do NOT transfer any more money. Do not attempt to negotiate or confront the cybercriminal. Immediately disconnect Wi-Fi and mobile data if an APK or remote tool was installed."
    },
    {
      step: "02",
      title: "Dial National Cybercrime Helpline 1930",
      timeframe: "Within Golden Window (Minutes 1 – 120)",
      action: "Call 1930 immediately. Keep your bank account number, debit card number, transaction ID (UTR / UPI Ref), and suspect beneficiary details ready. I4C's CFCFRS portal can freeze funds before the scammer withdraws cash."
    },
    {
      step: "03",
      title: "Notify Your Bank & Freeze Net-Banking",
      timeframe: "Within 2 Hours",
      action: "Contact your bank's 24x7 fraud prevention helpline. Request immediate blocking of compromised debit/credit cards, UPI IDs, and net-banking access. Request a formal complaint acknowledgement number."
    },
    {
      step: "04",
      title: "Preserve Digital Forensics & Evidence",
      timeframe: "Within 24 Hours",
      action: "Take high-resolution screenshots of WhatsApp chats, SMS notices, fake warrants, caller phone numbers, and bank account statement snippets. Do not delete chat histories or call logs."
    },
    {
      step: "05",
      title: "File Formal Complaint on cybercrime.gov.in",
      timeframe: "Within 24 – 48 Hours",
      action: "Visit cybercrime.gov.in, choose 'Report Cyber Crime' -> 'Financial Fraud' or 'Other Cyber Crime'. Upload preserved screenshots, transaction statements, and fill in the 1930 acknowledgement reference."
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-red-950 text-red-400 border border-red-800 text-xs font-mono">
          <AlertOctagon className="w-3.5 h-3.5" />
          <span>National Emergency Incident Response Protocol</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          What To Do If You Are Targeted by Cyber Fraud
        </h1>
        <p className="text-slate-300 text-xs sm:text-sm max-w-3xl leading-relaxed">
          Official Government of India procedural roadmap for victims of online financial fraud, extortion, or identity theft. Rapid action during the first two hours dramatically increases fund recovery probability.
        </p>
      </div>

      {/* Golden Hour Banner */}
      <div className="cyber-card rounded-2xl p-6 border border-amber-500/40 bg-gradient-to-r from-amber-950/40 via-slate-900 to-slate-900 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-amber-400 font-mono font-bold text-xs uppercase">
            <Clock className="w-4 h-4" />
            <span>The Crucial "Golden Hour" Window (First 2 Hours)</span>
          </div>
          <h3 className="text-xl font-bold text-white">
            Why Time is Your Strongest Defense
          </h3>
          <p className="text-xs text-slate-300 max-w-xl leading-relaxed">
            When cyber fraud occurs, funds are moved across multiple mule bank accounts within minutes. When you call <strong className="text-white">1930</strong> immediately, the <strong className="text-amber-300">Citizen Financial Cyber Fraud Reporting System (CFCFRS)</strong> sends an automated freeze signal directly to participating Indian banks, blocking the cash before it reaches ATMs.
          </p>
        </div>

        <div className="shrink-0 text-center sm:text-right">
          <a
            href="tel:1930"
            className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-mono font-extrabold text-sm shadow-xl shadow-red-950/50 transition-all active:scale-95"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Dial 1930 Now</span>
          </a>
          <span className="block text-[10px] text-slate-400 font-mono mt-1">Toll-Free • 24x7 Pan-India</span>
        </div>
      </div>

      {/* 5-Step Incident Protocol */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-white uppercase tracking-wider font-mono flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
          <span>5-Step Official Victim Response Protocol</span>
        </h2>

        <div className="space-y-4">
          {steps.map((s) => (
            <div
              key={s.step}
              className="bg-slate-900/50 rounded-2xl p-5 border border-slate-800 flex flex-col sm:flex-row items-start gap-4 hover:border-slate-700 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-950 border border-cyan-800 text-cyan-400 flex items-center justify-center font-mono font-extrabold text-lg shrink-0">
                {s.step}
              </div>

              <div className="space-y-1.5 flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-base font-bold text-white">
                    {s.title}
                  </h3>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-amber-400 border border-slate-700">
                    {s.timeframe}
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {s.action}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Evidence Checklist */}
      <div className="cyber-card rounded-2xl p-6 border border-slate-800 space-y-4">
        <h3 className="text-base font-bold text-white flex items-center space-x-2">
          <FileCheck className="w-5 h-5 text-emerald-400" />
          <span>Evidence Collection Checklist (Required for Police & Portal)</span>
        </h3>
        <p className="text-xs text-slate-400">
          Gather these digital artifacts before filing your complaint on <span className="font-mono text-cyan-400">cybercrime.gov.in</span>:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="bg-slate-950/60 p-3 rounded-lg border border-slate-800/80 text-slate-300">
            <strong className="text-emerald-400 block mb-1">Financial Artifacts:</strong>
            Bank account statement showing transaction date, exact time, debit amount, and 12-digit UTR/UPI reference number.
          </div>
          <div className="bg-slate-950/60 p-3 rounded-lg border border-slate-800/80 text-slate-300">
            <strong className="text-emerald-400 block mb-1">Communication Logs:</strong>
            Original SMS text messages, WhatsApp conversation exports, and screenshots of caller phone numbers.
          </div>
          <div className="bg-slate-950/60 p-3 rounded-lg border border-slate-800/80 text-slate-300">
            <strong className="text-emerald-400 block mb-1">Digital Files & URLs:</strong>
            Exact website links, APK file names (do not run them), or Telegram channel links provided by the fraudsters.
          </div>
          <div className="bg-slate-950/60 p-3 rounded-lg border border-slate-800/80 text-slate-300">
            <strong className="text-emerald-400 block mb-1">Extortion Artifacts:</strong>
            Screenshots of blackmail demands, morphed photos, or fake arrest warrants impersonating CBI/police officers.
          </div>
        </div>

        <div className="pt-2">
          <a
            href="https://cybercrime.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <span>Visit National Cyber Crime Reporting Portal (cybercrime.gov.in)</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}

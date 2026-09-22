import React from 'react';
import { 
  Shield, 
  AlertTriangle, 
  BookOpen, 
  Scale, 
  Cpu, 
  ArrowRight, 
  CheckCircle2, 
  Lock, 
  Zap, 
  Users, 
  TrendingUp, 
  FileText,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { I4C_CASES } from '../data/i4cCases';

export default function Home({ setActiveTab, setSelectedCase }) {
  const featuredCase = I4C_CASES[0]; // Digital Arrest

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="relative pt-12 pb-16 overflow-hidden">
        {/* Glow backdrop */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute top-1/3 left-1/3 w-[400px] h-[250px] bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 text-xs font-mono text-cyan-400">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span>Course Project MDC5011C • Ethical & Legal Frameworks</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight sm:leading-none">
            Responsible Cyber Innovation & <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
              Threat Intelligence Portfolio
            </span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            An academic research platform analyzing real-world cyber incidents from the 
            <strong className="text-white"> Indian Cyber Crime Coordination Centre (I4C) Cyber Digest</strong>. 
            Synthesizing technical attack flows, Indian statutory frameworks, digital ethics, and proactive citizen defense.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={() => setActiveTab('cases')}
              className="flex items-center space-x-2 px-5 py-3 rounded-xl bg-cyan-500 text-slate-950 font-bold text-sm hover:bg-cyan-400 shadow-lg shadow-cyan-500/25 transition-all"
            >
              <BookOpen className="w-4 h-4" />
              <span>Explore 8 I4C Cases</span>
            </button>
            <button
              onClick={() => setActiveTab('scam-detector')}
              className="flex items-center space-x-2 px-5 py-3 rounded-xl bg-slate-800/90 text-white font-semibold text-sm border border-slate-700 hover:border-cyan-500/50 hover:bg-slate-800 transition-all"
            >
              <AlertTriangle className="w-4 h-4 text-amber-400" />
              <span>Test "Is This a Scam?" Tool</span>
            </button>
            <button
              onClick={() => setActiveTab('security-audit')}
              className="flex items-center space-x-2 px-5 py-3 rounded-xl bg-slate-800/90 text-white font-semibold text-sm border border-slate-700 hover:border-emerald-500/50 hover:bg-slate-800 transition-all"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Cyber Hygiene Audit</span>
            </button>
          </div>
        </div>
      </section>

      {/* Intelligence Dashboard Metrics */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="cyber-card rounded-2xl p-5 border border-slate-800/80">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Research Dataset</span>
              <BookOpen className="w-4 h-4 text-cyan-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white mt-2">8 Cases</div>
            <p className="text-xs text-slate-400 mt-1">Verified I4C Cyber Digest Incidents</p>
          </div>

          <div className="cyber-card rounded-2xl p-5 border border-slate-800/80">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">Statutes Mapped</span>
              <Scale className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white mt-2">14+ Sections</div>
            <p className="text-xs text-slate-400 mt-1">IT Act 2000, BNS 2023 & DPDP Act</p>
          </div>

          <div className="cyber-card rounded-2xl p-5 border border-slate-800/80">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-amber-400 uppercase tracking-wider">Threat Modus</span>
              <TrendingUp className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white mt-2">100% Verified</div>
            <p className="text-xs text-slate-400 mt-1">Zero Hallucinated Incidents</p>
          </div>

          <div className="cyber-card rounded-2xl p-5 border border-slate-800/80">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-rose-400 uppercase tracking-wider">Defense Tools</span>
              <Zap className="w-4 h-4 text-rose-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white mt-2">3 Modules</div>
            <p className="text-xs text-slate-400 mt-1">Scam Check, Audit & Laws Matrix</p>
          </div>
        </div>
      </section>

      {/* Featured Threat Intelligence Spotlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="cyber-card rounded-2xl border border-red-500/30 overflow-hidden relative">
          <div className="bg-gradient-to-r from-red-950/40 via-slate-900 to-slate-900 p-6 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
              <span className="px-2.5 py-1 rounded bg-red-500/20 text-red-400 border border-red-500/40 text-xs font-mono font-bold uppercase tracking-wider">
                High-Impact Threat Spotlight • I4C Priority Alert
              </span>
              <span className="text-xs text-slate-400 font-mono">Case #01 • National Advisory</span>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
              {featuredCase.title}
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed mb-6 max-w-3xl">
              {featuredCase.attackMethod}
            </p>

            {/* Quick Flow Preview */}
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 text-xs font-mono text-slate-300 mb-6 bg-slate-950/60 p-3 rounded-xl border border-slate-800">
              <div className="flex items-center space-x-1.5 text-red-400">
                <span className="font-bold">1.</span>
                <span>Contraband Parcel Call</span>
              </div>
              <div className="hidden sm:block text-slate-600">→</div>
              <div className="flex items-center space-x-1.5 text-amber-400">
                <span className="font-bold">2.</span>
                <span>Fake Police Video Call</span>
              </div>
              <div className="hidden sm:block text-slate-600">→</div>
              <div className="flex items-center space-x-1.5 text-red-300">
                <span className="font-bold">3.</span>
                <span>"Digital Arrest" Fear</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-slate-800/80">
              <div className="text-xs text-slate-400">
                <strong className="text-slate-200">Legal Provisions:</strong> IT Act Sec 66D • BNS Sec 318(4) • BNS Sec 204
              </div>
              <button
                onClick={() => {
                  setSelectedCase(featuredCase);
                  setActiveTab('cases');
                }}
                className="flex items-center space-x-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <span>Read Full Intelligence Dossier</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-Case Threat Lifecycle & Research Framework */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Methodology & Synthesis</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            The Cybercrime Lifecycle Across Analyzed I4C Cases
          </h2>
          <p className="text-slate-400 text-sm">
            Analysis of 8 authentic incidents reveals a repeatable 5-stage attack chain combining social engineering, technical exploitation, and regulatory bypass.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="cyber-card rounded-xl p-4 border border-slate-800 text-center space-y-2">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 mx-auto flex items-center justify-center font-mono font-bold text-sm">
              01
            </div>
            <h3 className="font-bold text-sm text-white">Reconnaissance & Contact</h3>
            <p className="text-xs text-slate-400">
              VoIP spoofing, data breach scraping, public registry mining, and deceptive social ads.
            </p>
          </div>

          <div className="cyber-card rounded-xl p-4 border border-slate-800 text-center space-y-2">
            <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 mx-auto flex items-center justify-center font-mono font-bold text-sm">
              02
            </div>
            <h3 className="font-bold text-sm text-white">Psychological Hook</h3>
            <p className="text-xs text-slate-400">
              Fear of arrest, greed for 500% ROI, desperation for fast loans, or curiosity over utility shutoffs.
            </p>
          </div>

          <div className="cyber-card rounded-xl p-4 border border-slate-800 text-center space-y-2">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 mx-auto flex items-center justify-center font-mono font-bold text-sm">
              03
            </div>
            <h3 className="font-bold text-sm text-white">Technical Bypass</h3>
            <p className="text-xs text-slate-400">
              Sideloaded APKs, cloned silicone fingerprints, SIM Swap, and remote desktop tools.
            </p>
          </div>

          <div className="cyber-card rounded-xl p-4 border border-slate-800 text-center space-y-2">
            <div className="w-8 h-8 rounded-lg bg-rose-500/10 text-rose-400 mx-auto flex items-center justify-center font-mono font-bold text-sm">
              04
            </div>
            <h3 className="font-bold text-sm text-white">Asset Exfiltration</h3>
            <p className="text-xs text-slate-400">
              Rapid UPI transfers, IMPS splitting, and automated withdrawals via mule bank accounts.
            </p>
          </div>

          <div className="cyber-card rounded-xl p-4 border border-slate-800 text-center space-y-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 mx-auto flex items-center justify-center font-mono font-bold text-sm">
              05
            </div>
            <h3 className="font-bold text-sm text-white">Laundering & Disconnection</h3>
            <p className="text-xs text-slate-400">
              Conversion to overseas cryptocurrency wallets, hawala channels, and blocking the victim.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Navigation to Key Modules */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div 
            onClick={() => setActiveTab('scam-detector')}
            className="cyber-card rounded-2xl p-6 border border-slate-800 cursor-pointer group hover:border-amber-500/50 transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4 group-hover:scale-110 transition-transform">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2 flex items-center justify-between">
              <span>"Is This a Scam?" Tool</span>
              <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Interactive diagnostic tool that evaluates incoming calls, messages, or investment requests against I4C scam patterns and calculates an instant risk score.
            </p>
          </div>

          <div 
            onClick={() => setActiveTab('cyber-laws')}
            className="cyber-card rounded-2xl p-6 border border-slate-800 cursor-pointer group hover:border-cyan-500/50 transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
              <Scale className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2 flex items-center justify-between">
              <span>Indian Cyber Law Matrix</span>
              <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Student-friendly breakdown of IT Act 2000, Bharatiya Nyaya Sanhita 2023, and DPDP Act 2023 mapped directly to the offenses documented in the cases.
            </p>
          </div>

          <div 
            onClick={() => setActiveTab('digital-ethics')}
            className="cyber-card rounded-2xl p-6 border border-slate-800 cursor-pointer group hover:border-emerald-500/50 transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2 flex items-center justify-between">
              <span>Ethics & Responsible Tech</span>
              <ArrowRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-transform" />
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Ethical frameworks on Privacy by Design, consent integrity, AI watermarking, and guidelines for software engineers building secure digital public infrastructure.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

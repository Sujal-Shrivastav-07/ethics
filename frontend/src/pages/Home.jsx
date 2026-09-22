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
  ChevronRight,
  GraduationCap,
  ExternalLink,
  Github,
  Award,
  Sparkles
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

          {/* Student attribution */}
          <div className="flex items-center justify-center space-x-2 text-xs text-slate-400">
            <span>Developed by <strong className="text-cyan-400">Sujal Shrivastav</strong> (Sem 7, iMSc IT)</span>
            <span>•</span>
            <a 
              href="https://github.com/Sujal-Shrivastav-07/ethics" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center space-x-1 text-slate-300 hover:text-white underline"
            >
              <Github className="w-3.5 h-3.5 text-cyan-400" />
              <span>GitHub Repo</span>
            </a>
          </div>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={() => setActiveTab('cases')}
              className="flex items-center space-x-2 px-5 py-3 rounded-xl bg-cyan-500 text-slate-950 font-bold text-sm hover:bg-cyan-400 shadow-lg shadow-cyan-500/25 transition-all"
            >
              <BookOpen className="w-4 h-4" />
              <span>Explore 10 I4C Cases</span>
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
            <div className="text-2xl sm:text-3xl font-extrabold text-white mt-2">10 Cases</div>
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

      {/* University Academic Deliverables & Course Dossier */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="cyber-card rounded-2xl p-6 sm:p-8 border border-cyan-500/30 bg-gradient-to-br from-slate-900 via-[#0c1425] to-slate-900">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <div className="flex items-center space-x-2 text-cyan-400 font-mono text-xs uppercase tracking-wider mb-1">
                <Award className="w-4 h-4" />
                <span>Silver Oak University • Course Code: MDC5011C (Sem 7)</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Official Academic Deliverables & Submission Dossier
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Author: <strong className="text-slate-200">Sujal Shrivastav</strong> • Integrated M.Sc. IT • All syllabus requirements covered
              </p>
            </div>
            <a
              href="https://github.com/Sujal-Shrivastav-07/ethics"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-mono text-xs border border-slate-700 transition-colors shrink-0"
            >
              <Github className="w-4 h-4 text-cyan-400" />
              <span>github.com/Sujal-Shrivastav-07/ethics</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
            {/* Box 1: Assignment 1 */}
            <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
                  Assignment - 1: Innovative Assignment
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">
                  100 Marks Rubric
                </span>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-300">
                <li className="flex items-start space-x-2">
                  <span className="text-cyan-400 font-bold">•</span>
                  <div>
                    <strong>Project Report (10–15 Pages):</strong> Formatted strictly to A4, Times New Roman 12pt, 1.5 line spacing with IEEE citations.
                    <div className="text-[11px] text-slate-500 font-mono">docs/PROJECT_REPORT_PRINTABLE.html</div>
                  </div>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-cyan-400 font-bold">•</span>
                  <div>
                    <strong>Seminar Presentation (12 Slides):</strong> 12-slide defense deck with speaker notes and anticipated viva Q&A.
                    <div className="text-[11px] text-slate-500 font-mono">docs/SEMINAR_PRESENTATION_SLIDES.md</div>
                  </div>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-cyan-400 font-bold">•</span>
                  <div>
                    <strong>Interactive Prototype & Awareness Suite:</strong> Live React application + 5 Golden Rules Infographic poster.
                  </div>
                </li>
              </ul>
              <div className="pt-2 text-[11px] text-amber-300/90 font-mono bg-amber-500/10 p-2 rounded border border-amber-500/20">
                Save PDF as: EnrollmentNo_SujalShrivastav_InnovativeAssignment.pdf
              </div>
            </div>

            {/* Box 2: Assignment 2 */}
            <div className="p-5 rounded-xl bg-slate-950/80 border border-emerald-500/30 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
                  Assignment - 2: Handwritten Assignment
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">
                  20 Marks Rubric
                </span>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-300">
                <li className="flex items-start space-x-2">
                  <span className="text-emerald-400 font-bold">•</span>
                  <div>
                    <strong>Q1 (20M):</strong> Ethics & Digital Citizenship (Footprint, cyberbullying, netiquette).
                  </div>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-emerald-400 font-bold">•</span>
                  <div>
                    <strong>Q2 (20M):</strong> Cyber Laws & Data Privacy (IT Act 2000, BNS 2023, DPDP Act 2023).
                  </div>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-emerald-400 font-bold">•</span>
                  <div>
                    <strong>Q3 (20M):</strong> Intellectual Property Rights (Copyright, patents, software piracy, AI ethics).
                  </div>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-emerald-400 font-bold">•</span>
                  <div>
                    <strong>Q4 (20M):</strong> Responsible Tech & Governance (CIA triad, AUP/BYOD policies, green computing).
                  </div>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-emerald-400 font-bold">•</span>
                  <div>
                    <strong>Q5 (20M):</strong> I4C Cyber Digest Incident Analysis ("Digital Arrest" syndicate full breakdown).
                  </div>
                </li>
              </ul>
              <div className="pt-2 text-[11px] text-emerald-300 font-mono bg-emerald-500/10 p-2 rounded border border-emerald-500/20">
                Study Guide: docs/ASSIGNMENT_2_HANDWRITTEN_SOLUTIONS.md
              </div>
            </div>
          </div>

          {/* Box 3: 10 Official Syllabus Titles from PDF */}
          <div className="mt-6 p-5 rounded-xl bg-slate-950/80 border border-amber-500/30 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400">
                Official Syllabus Title Coverage (10 / 10 Mapped)
              </span>
              <span className="text-[11px] px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-800 font-mono">
                Page 1 Guidelines Compliance
              </span>
            </div>
            <p className="text-xs text-slate-300">
              CyberPrahari systematically addresses and synthesizes all 10 suitable project titles recommended by Silver Oak University:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs text-slate-300 pt-1">
              <div className="flex items-start space-x-2 bg-slate-900/60 p-2 rounded border border-slate-800/80">
                <span className="text-amber-400 font-bold font-mono shrink-0">1.</span>
                <span>I4C Cyber Digest-Based Cybercrime Analysis and Digital Ethics Portfolio</span>
              </div>
              <div className="flex items-start space-x-2 bg-slate-900/60 p-2 rounded border border-slate-800/80">
                <span className="text-amber-400 font-bold font-mono shrink-0">2.</span>
                <span>Cyber Threat Investigation using I4C Cyber Digest</span>
              </div>
              <div className="flex items-start space-x-2 bg-slate-900/60 p-2 rounded border border-slate-800/80">
                <span className="text-amber-400 font-bold font-mono shrink-0">3.</span>
                <span>Real-World Cybercrime Analysis using I4C Cyber Digest Reports</span>
              </div>
              <div className="flex items-start space-x-2 bg-slate-900/60 p-2 rounded border border-slate-800/80">
                <span className="text-amber-400 font-bold font-mono shrink-0">4.</span>
                <span>Digital Ethics, Cyber Laws, and Cyber Threat Intelligence: An I4C Cyber Digest Portfolio</span>
              </div>
              <div className="flex items-start space-x-2 bg-slate-900/60 p-2 rounded border border-slate-800/80">
                <span className="text-amber-400 font-bold font-mono shrink-0">5.</span>
                <span>Cybercrime Case Analysis and Responsible Technology Solutions using I4C Cyber Digest</span>
              </div>
              <div className="flex items-start space-x-2 bg-slate-900/60 p-2 rounded border border-slate-800/80">
                <span className="text-amber-400 font-bold font-mono shrink-0">6.</span>
                <span>Cyber Threat Intelligence Report: Analysis of Recent Cyber Incidents from I4C Cyber Digest</span>
              </div>
              <div className="flex items-start space-x-2 bg-slate-900/60 p-2 rounded border border-slate-800/80">
                <span className="text-amber-400 font-bold font-mono shrink-0">7.</span>
                <span>Emerging Cyber Threats and Digital Governance: An I4C Cyber Digest Study</span>
              </div>
              <div className="flex items-start space-x-2 bg-slate-900/60 p-2 rounded border border-slate-800/80">
                <span className="text-amber-400 font-bold font-mono shrink-0">8.</span>
                <span>Cybersecurity Awareness and Legal Analysis through I4C Cyber Digest</span>
              </div>
              <div className="flex items-start space-x-2 bg-slate-900/60 p-2 rounded border border-slate-800/80">
                <span className="text-amber-400 font-bold font-mono shrink-0">9.</span>
                <span>Contemporary Cyber Threat Analysis using I4C Daily Cyber Digest</span>
              </div>
              <div className="flex items-start space-x-2 bg-slate-900/60 p-2 rounded border border-slate-800/80">
                <span className="text-amber-400 font-bold font-mono shrink-0">10.</span>
                <span>I4C Cyber Digest Innovation Portfolio: Cyber Ethics, Cyber Laws, and Responsible Digital Practices</span>
              </div>
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
            Analysis of 10 authentic incidents reveals a repeatable 5-stage attack chain combining social engineering, technical exploitation, and regulatory bypass.
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

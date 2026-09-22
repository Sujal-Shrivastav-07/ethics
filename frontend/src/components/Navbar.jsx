import React, { useState } from 'react';
import { 
  Shield, 
  AlertTriangle, 
  Menu, 
  X, 
  BookOpen, 
  Scale, 
  Cpu, 
  PhoneCall, 
  CheckSquare, 
  Sparkles,
  Github,
  FileText,
  ExternalLink,
  Award,
  Download
} from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dossierOpen, setDossierOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Intelligence Hub', icon: Shield },
    { id: 'cases', label: 'I4C Case Library', icon: BookOpen },
    { id: 'scam-detector', label: 'Scam Analyzer', icon: AlertTriangle },
    { id: 'security-audit', label: 'Security Audit', icon: CheckSquare },
    { id: 'cyber-laws', label: 'Cyber Laws', icon: Scale },
    { id: 'digital-ethics', label: 'Ethics & Governance', icon: Cpu },
    { id: 'incident-response', label: 'Emergency 1930', icon: PhoneCall },
    { id: 'awareness', label: 'Awareness Posters', icon: Sparkles }
  ];

  const handleNavClick = (id) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-[#0a0f1d]/90 backdrop-blur-md border-b border-slate-800/80">
        {/* National Emergency Advisory Ticker */}
        <div className="bg-gradient-to-r from-red-950/80 via-slate-900 to-amber-950/80 border-b border-red-500/20 px-4 py-1.5 text-xs text-slate-300 flex items-center justify-between">
          <div className="flex items-center space-x-2 overflow-hidden whitespace-nowrap">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            <span className="font-semibold text-red-400 uppercase tracking-wider text-[11px]">I4C National Advisory:</span>
            <span className="text-slate-300 truncate">
              Beware of fake 'Digital Arrest' video calls by imposters posing as CBI/Customs & malicious utility APKs.
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-4 pl-4 shrink-0 text-xs">
            <span className="text-slate-400">Student: <strong className="text-cyan-300 font-semibold">Sujal Shrivastav</strong> (Sem 7)</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Cyber Helpline:</span>
            <a 
              href="tel:1930" 
              className="flex items-center space-x-1 font-mono font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30 hover:bg-amber-500/20 transition-colors"
            >
              <PhoneCall className="w-3 h-3" />
              <span>1930</span>
            </a>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div 
              className="flex items-center space-x-3 cursor-pointer group"
              onClick={() => handleNavClick('home')}
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-600 via-blue-600 to-emerald-500 p-0.5 shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
                <div className="w-full h-full bg-[#0a0f1d] rounded-[10px] flex items-center justify-center">
                  <Shield className="w-5 h-5 text-cyan-400" />
                </div>
              </div>
              <div>
                <div className="flex items-center space-x-1.5">
                  <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-white via-slate-100 to-cyan-300 bg-clip-text text-transparent">
                    CyberPrahari
                  </span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800/60 uppercase">
                    I4C Intel
                  </span>
                </div>
                <p className="text-[10px] text-slate-400 tracking-wider uppercase font-medium">
                  Threat Intelligence & Ethics Platform
                </p>
              </div>
            </div>

            {/* Desktop Nav Links */}
            <nav className="hidden xl:flex items-center space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center space-x-1.5 px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                      isActive
                        ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 shadow-sm shadow-cyan-500/10'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-cyan-400' : 'text-slate-400'}`} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>

            {/* Emergency 1930 Button, Academic Dossier, GitHub & Mobile Hamburger */}
            <div className="flex items-center space-x-2.5">
              {/* Academic Dossier Button */}
              <button
                onClick={() => setDossierOpen(true)}
                className="hidden lg:flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-cyan-950/70 text-cyan-300 border border-cyan-700/50 hover:bg-cyan-900/60 hover:border-cyan-500 transition-all shadow-sm"
                title="View Academic Deliverables, Report & Assignment-2"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Academic Dossier</span>
              </button>

              {/* GitHub Repo Button */}
              <a
                href="https://github.com/Sujal-Shrivastav-07/ethics"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-800/90 text-slate-300 border border-slate-700 hover:text-white hover:border-cyan-500/50 hover:bg-slate-700/80 transition-all"
                title="GitHub: Sujal-Shrivastav-07/ethics"
              >
                <Github className="w-3.5 h-3.5 text-cyan-400" />
                <span className="hidden sm:inline font-mono">Repo</span>
              </a>

              {/* Report Emergency Button */}
              <button
                onClick={() => handleNavClick('incident-response')}
                className="hidden sm:flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-red-600 to-amber-600 text-white shadow-md shadow-red-900/30 hover:brightness-110 active:scale-95 transition-all"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Report 1930</span>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="xl:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#0a0f1d] border-b border-slate-800 px-4 pt-2 pb-6 space-y-1 shadow-2xl animate-in slide-in-from-top-2 duration-200">
            <div className="flex items-center justify-between px-3 py-2 text-[11px] font-mono uppercase tracking-wider text-slate-400 border-b border-slate-800/60 mb-2">
              <span>Author: Sujal Shrivastav</span>
              <button
                onClick={() => { setMobileMenuOpen(false); setDossierOpen(true); }}
                className="text-cyan-400 underline font-semibold flex items-center space-x-1"
              >
                <FileText className="w-3 h-3" />
                <span>Dossier & Submissions</span>
              </button>
            </div>

            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30'
                      : 'text-slate-300 hover:bg-slate-800/60'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-cyan-400' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}

            <div className="pt-2">
              <a
                href="https://github.com/Sujal-Shrivastav-07/ethics"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center space-x-2 py-2 rounded-lg text-xs font-semibold bg-slate-800 text-slate-200 border border-slate-700"
              >
                <Github className="w-4 h-4 text-cyan-400" />
                <span>GitHub Repository (@Sujal-Shrivastav-07)</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Academic Dossier Modal */}
      {dossierOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="bg-[#0f172a] border border-cyan-500/40 rounded-2xl max-w-2xl w-full p-6 shadow-2xl space-y-5 text-slate-200 max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between border-b border-slate-800 pb-4">
              <div>
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-cyan-400" />
                  <h3 className="text-lg font-bold text-white">Course MDC5011C Academic Dossier</h3>
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  Silver Oak University • Silver Oak College of Computer Application • Semester 7 (iMSc IT)
                </p>
                <p className="text-xs text-cyan-400 font-mono mt-0.5">
                  Student: <strong>Sujal Shrivastav</strong> | GitHub: 
                  <a href="https://github.com/Sujal-Shrivastav-07" target="_blank" rel="noopener noreferrer" className="underline ml-1">
                    @Sujal-Shrivastav-07
                  </a>
                </p>
              </div>
              <button 
                onClick={() => setDossierOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Assignment 1 Section */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold flex items-center space-x-2">
                <span>Assignment - 1: Innovative Assignment (CyberPrahari)</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-950 border border-cyan-800 text-cyan-300">100 Marks</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                  <div className="font-semibold text-white">📄 Formal Project Report (10–15 Pages)</div>
                  <p className="text-slate-400 text-[11px]">A4, Times New Roman 12pt, 1.5 line spacing with IEEE citations.</p>
                  <div className="pt-1 text-[11px] text-cyan-400 font-mono">docs/PROJECT_REPORT_PRINTABLE.html</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                  <div className="font-semibold text-white">📊 Seminar Presentation (12 Slides)</div>
                  <p className="text-slate-400 text-[11px]">Comprehensive presentation with presenter notes & defense Q&A.</p>
                  <div className="pt-1 text-[11px] text-cyan-400 font-mono">docs/SEMINAR_PRESENTATION_SLIDES.md</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                  <div className="font-semibold text-white">🎨 Citizen Awareness Infographic</div>
                  <p className="text-slate-400 text-[11px]">High-resolution printable handbook & 5 Golden Rules poster.</p>
                  <div className="pt-1 text-[11px] text-cyan-400 font-mono">docs/AWARENESS_INFOGRAPHIC.html</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                  <div className="font-semibold text-white">🎙️ Faculty Viva & Demo Script</div>
                  <p className="text-slate-400 text-[11px]">Step-by-step presentation script & model viva question answers.</p>
                  <div className="pt-1 text-[11px] text-cyan-400 font-mono">docs/DEMO_SCRIPT_FACULTY.md</div>
                </div>
              </div>
            </div>

            {/* Assignment 2 Section */}
            <div className="space-y-3 pt-2 border-t border-slate-800/80">
              <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold flex items-center space-x-2">
                <span>Assignment - 2: Handwritten Assignment Solutions</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950 border border-emerald-800 text-emerald-300">20 Marks</span>
              </h4>
              <div className="p-3 rounded-xl bg-slate-900 border border-emerald-500/30 space-y-2 text-xs">
                <div className="font-semibold text-white">✍️ Complete Master Answers (Q1 to Q5)</div>
                <p className="text-slate-300 text-[11px]">
                  Exhaustive reference notes covering: Q1 (Ethics & Digital Citizenship), Q2 (Cyber Laws & IT Act), Q3 (IPR & AI Copyright), Q4 (Responsible Tech & Governance), and Q5 (I4C Digital Arrest Case Analysis).
                </p>
                <div className="flex flex-wrap gap-2 pt-1 font-mono text-[11px]">
                  <span className="bg-slate-800 px-2 py-0.5 rounded text-emerald-300">docs/ASSIGNMENT_2_HANDWRITTEN_SOLUTIONS.md</span>
                  <span className="bg-slate-800 px-2 py-0.5 rounded text-cyan-300">docs/ASSIGNMENT_2_PRINTABLE.html</span>
                </div>
              </div>
            </div>

            {/* Submission File Naming Instruction */}
            <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs">
              <strong>College Submission File Naming:</strong><br />
              <code className="font-mono text-[11px]">EnrollmentNo_SujalShrivastav_InnovativeAssignment.pdf</code>
            </div>

            <div className="flex items-center justify-between pt-2">
              <a
                href="https://github.com/Sujal-Shrivastav-07/ethics"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>Visit GitHub Repository</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              <button
                onClick={() => setDossierOpen(false)}
                className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-colors"
              >
                Close Dossier
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

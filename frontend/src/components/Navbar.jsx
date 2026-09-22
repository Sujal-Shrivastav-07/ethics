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
  ExternalLink
} from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          <div className="flex items-center space-x-2 truncate">
            <span className="flex h-2 w-2 relative shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            <span className="font-semibold text-red-400 uppercase tracking-wider text-[11px]">I4C National Advisory:</span>
            <span className="text-slate-300 truncate">
              Beware of fake 'Digital Arrest' video calls by imposters posing as CBI/Customs & malicious utility APKs.
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-4 pl-4 shrink-0 text-xs">
            <span className="text-slate-400">Lead Developer: <strong className="text-cyan-300 font-semibold">Sujal Shrivastav</strong></span>
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

            {/* GitHub Repo Button & Emergency 1930 */}
            <div className="flex items-center space-x-2.5">
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
    </>
  );
}

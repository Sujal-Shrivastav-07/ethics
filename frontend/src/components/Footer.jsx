import React from 'react';
import { Shield, ExternalLink, Heart, AlertCircle } from 'lucide-react';

export default function Footer({ setActiveTab }) {
  return (
    <footer className="bg-[#070b14] border-t border-slate-800/80 pt-12 pb-8 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-slate-800/60">
          {/* Col 1: Project Identity */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-cyan-400" />
              <span className="font-extrabold text-base text-white tracking-tight">CyberPrahari</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              An academic and citizen-centric Cyber Threat Intelligence and Digital Ethics Platform built upon authentic case analysis from the Indian Cyber Crime Coordination Centre (I4C) Cyber Digest.
            </p>
            <div className="pt-2 text-[11px] text-slate-500 font-mono">
              Course Code: MDC5011C • Sem 7<br />
              Silver Oak College of Computer Application
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-semibold text-slate-200 uppercase tracking-wider text-xs mb-3">Core Modules</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => { setActiveTab('cases'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-cyan-400 transition-colors">
                  I4C Case Intelligence Library (8 Cases)
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveTab('scam-detector'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-cyan-400 transition-colors">
                  "Is This a Scam?" Analyzer
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveTab('security-audit'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-cyan-400 transition-colors">
                  Cyber Hygiene Self-Audit Tool
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveTab('cyber-laws'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-cyan-400 transition-colors">
                  Indian Cyber Law & Legal Matrix
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveTab('digital-ethics'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-cyan-400 transition-colors">
                  Digital Ethics & Governance Framework
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Authoritative Indian Cyber Portals */}
          <div>
            <h4 className="font-semibold text-slate-200 uppercase tracking-wider text-xs mb-3">Official Authorities</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 hover:text-cyan-400 transition-colors">
                  <span>National Cyber Crime Portal</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a href="https://www.cert-in.org.in" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 hover:text-cyan-400 transition-colors">
                  <span>CERT-In (Emergency Response)</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a href="https://www.mha.gov.in" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 hover:text-cyan-400 transition-colors">
                  <span>Ministry of Home Affairs (I4C)</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a href="https://uidai.gov.in" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 hover:text-cyan-400 transition-colors">
                  <span>UIDAI Aadhaar Biometric Lock</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a href="https://www.rbi.org.in" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 hover:text-cyan-400 transition-colors">
                  <span>RBI Financial Fraud Awareness</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: National Incident Helpline & Disclaimer */}
          <div>
            <div className="bg-slate-900/90 rounded-xl p-4 border border-red-500/20 space-y-2">
              <div className="flex items-center space-x-2 text-red-400 font-semibold">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>Immediate Assistance</span>
              </div>
              <p className="text-[11px] text-slate-300">
                Victim of online financial fraud? Call National Cyber Helpline <strong className="text-amber-300 font-mono">1930</strong> within the 2-hour Golden Window.
              </p>
              <div className="pt-1">
                <a
                  href="tel:1930"
                  className="block text-center w-full py-1.5 rounded bg-red-600/80 hover:bg-red-600 text-white font-mono font-bold text-xs transition-colors"
                >
                  Dial 1930 Helpline
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Academic & Legal Disclaimer */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            Academic Project • Silver Oak University • Integrated M.Sc. IT (Sem 7) • Course: MDC5011C
          </div>
          <div className="text-center md:text-right max-w-xl">
            <strong>Disclaimer:</strong> This application is built strictly for academic analysis, threat intelligence demonstration, and public cyber awareness. It does not constitute legal counsel or official police authority.
          </div>
        </div>
      </div>
    </footer>
  );
}

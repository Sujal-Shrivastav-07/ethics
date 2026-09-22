import React, { useState } from 'react';
import { Scale, Search, BookOpen, AlertCircle, ExternalLink, Shield, FileText } from 'lucide-react';
import { CYBER_LAWS } from '../data/cyberLaws';

export default function CyberLawGuide() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLawType, setSelectedLawType] = useState('All');

  const filteredLaws = CYBER_LAWS.filter((l) => {
    const matchesSearch = 
      l.section.toLowerCase().includes(searchQuery.toLowerCase()) ||
      l.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      l.studentExplanation.toLowerCase().includes(searchQuery.toLowerCase()) ||
      l.act.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesType = 
      selectedLawType === 'All' || 
      (selectedLawType === 'IT Act' && l.act.includes('Information Technology Act')) ||
      (selectedLawType === 'BNS 2023' && l.act.includes('Bharatiya Nyaya Sanhita')) ||
      (selectedLawType === 'DPDP & RBI' && (l.act.includes('Data Protection') || l.act.includes('Reserve Bank')));

    return matchesSearch && matchesType;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-800 text-xs font-mono">
          <Scale className="w-3.5 h-3.5" />
          <span>Statutory Frameworks & Indian Cyber Jurisprudence</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          Indian Cyber Law Matrix & Penal Provisions
        </h1>
        <p className="text-slate-300 text-xs sm:text-sm max-w-3xl leading-relaxed">
          Comprehensive legal breakdown connecting criminal cyber activities identified in the I4C cases with the Information Technology Act 2000, the newly enacted Bharatiya Nyaya Sanhita 2023 (BNS), and the Digital Personal Data Protection Act 2023.
        </p>
      </div>

      {/* Official Legal Notice Banner */}
      <div className="bg-amber-950/20 border border-amber-800/40 p-4 rounded-xl flex items-start space-x-3 text-xs text-amber-200/90 leading-relaxed">
        <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
        <div>
          <strong className="text-white block mb-0.5">Mandatory Legal Disclaimer:</strong>
          This platform provides educational and research information for academic study (MDC5011C) and citizen awareness. It does not constitute formal legal counsel or advisory opinion. All statutory excerpts are referenced from official publications on <a href="https://www.indiacode.nic.in" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline font-mono">India Code</a>.
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
        <div className="relative w-full sm:max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by section (e.g. 66D, 318, DPDP) or keyword..."
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
          />
        </div>

        <div className="flex flex-wrap gap-2 w-full sm:w-auto">
          {['All', 'IT Act', 'BNS 2023', 'DPDP & RBI'].map((type) => (
            <button
              key={type}
              onClick={() => setSelectedLawType(type)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedLawType === type
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                  : 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Law Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredLaws.map((law) => (
          <div
            key={law.id}
            className="cyber-card rounded-2xl p-6 border border-slate-800 space-y-4 hover:border-cyan-500/40 transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              {/* Header tags */}
              <div className="flex items-center justify-between gap-2">
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800 font-bold">
                  {law.section}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                  {law.cognizable}
                </span>
              </div>

              <div>
                <span className="text-[11px] font-mono uppercase text-slate-400 block mb-0.5">
                  {law.act}
                </span>
                <h3 className="text-base font-bold text-white leading-snug">
                  {law.title}
                </h3>
              </div>

              {/* Student Friendly Explanation */}
              <div className="bg-slate-950/70 p-3.5 rounded-xl border border-slate-800/80 space-y-1">
                <span className="text-[11px] font-mono uppercase text-emerald-400 font-bold block">
                  Student-Friendly Explanation:
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {law.studentExplanation}
                </p>
              </div>

              {/* Statutory Text */}
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase text-slate-400 block">
                  Statutory Provision Description:
                </span>
                <p className="text-xs text-slate-400 leading-relaxed italic bg-slate-900/30 p-2 rounded-lg border border-slate-800/40">
                  "{law.description}"
                </p>
              </div>

              {/* Case linkages */}
              <div className="space-y-1 pt-1">
                <span className="text-[10px] font-mono uppercase text-slate-400 block">
                  Direct Relevance to I4C Incidents:
                </span>
                <div className="flex flex-wrap gap-1">
                  {law.relevanceToCases.map((rc, i) => (
                    <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-cyan-300 border border-slate-800">
                      {rc}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Prescribed Penalty Box */}
            <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
              <span className="text-slate-400 font-mono">Prescribed Penalty:</span>
              <span className="text-rose-300 font-mono font-bold">{law.penalty}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

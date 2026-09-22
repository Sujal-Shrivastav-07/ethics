import React, { useState } from 'react';
import { Search, Filter, ShieldAlert, ArrowRight, BookOpen, AlertTriangle, Layers } from 'lucide-react';
import { I4C_CASES, THREAT_CATEGORIES } from '../data/i4cCases';
import CaseDetailModal from './CaseDetailModal';

export default function CaseLibrary({ selectedCase, setSelectedCase }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [modalOpen, setModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12;

  const filteredCases = I4C_CASES.filter((c) => {
    const matchesSearch = 
      c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.attackMethod.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.cybercrimeType.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.legalProvisions.some(l => l.statute.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory = selectedCategory === 'All' || c.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredCases.length / pageSize) || 1;
  const paginatedCases = filteredCases.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const handleSearchChange = (val) => {
    setSearchQuery(val);
    setCurrentPage(1);
  };

  const handleCategoryChange = (val) => {
    setSelectedCategory(val);
    setCurrentPage(1);
  };

  const handleOpenCase = (c) => {
    setSelectedCase(c);
    setModalOpen(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-800 text-xs font-mono">
          <BookOpen className="w-3.5 h-3.5" />
          <span>I4C Cyber Digest Intelligence Repository</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          Authentic Cyber Incident Case Library
        </h1>
        <p className="text-slate-300 text-sm max-w-3xl leading-relaxed">
          Comprehensive repository of {I4C_CASES.length} verified Indian cyber incidents documented in official I4C digests and national security advisories. The first 10 core dossiers examine primary national threat models in exhaustive detail, followed by 200 real-world incident profiles across Indian states, critical infrastructure, and digital banking endpoints.
        </p>
      </div>

      {/* Search & Category Filter Controls */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => handleSearchChange(e.target.value)}
            placeholder="Search by threat, attack vector, or legal statute (e.g. 66D, Digital Arrest, APK)..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
          />
        </div>

        {/* Category Dropdown for Mobile / Compact */}
        <div className="flex items-center space-x-2 shrink-0">
          <Filter className="w-4 h-4 text-slate-400" />
          <select
            value={selectedCategory}
            onChange={(e) => handleCategoryChange(e.target.value)}
            className="bg-slate-950 border border-slate-700 text-xs text-slate-300 rounded-xl px-3 py-2.5 focus:outline-none focus:border-cyan-500"
          >
            {THREAT_CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Case Count Indicator & Quick Jumps */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-400 font-mono">
        <div className="flex items-center space-x-2">
          <span>Showing {paginatedCases.length} of {filteredCases.length} Results</span>
          <span>(Page {currentPage} of {totalPages})</span>
        </div>
        <div className="flex items-center space-x-2">
          <button 
            onClick={() => { handleCategoryChange('All'); handleSearchChange(''); setCurrentPage(1); }}
            className={`px-2 py-0.5 rounded border text-[11px] transition-colors ${
              currentPage === 1 && !searchQuery && selectedCategory === 'All'
                ? 'bg-cyan-950 text-cyan-300 border-cyan-800'
                : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
            }`}
          >
            Core 10 Dossiers (Page 1)
          </button>
          <span>•</span>
          <span>Source: I4C / MHA</span>
        </div>
      </div>

      {/* Grid of Case Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {paginatedCases.map((c) => (
          <div
            key={c.id}
            className={`cyber-card rounded-2xl p-6 border flex flex-col justify-between transition-all group ${
              c.caseNumber <= 10 
                ? 'border-cyan-500/40 bg-gradient-to-br from-slate-900/90 to-[#0c1425]'
                : 'border-slate-800 hover:border-cyan-500/30'
            }`}
          >
            <div className="space-y-4">
              {/* Header tags */}
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center space-x-2">
                  <span className={`px-2.5 py-0.5 rounded-md text-[11px] font-mono font-bold ${
                    c.caseNumber <= 10
                      ? 'bg-cyan-500 text-slate-950 font-extrabold'
                      : 'bg-cyan-950 text-cyan-400 border border-cyan-800/80'
                  }`}>
                    Case #{c.caseNumber}
                  </span>
                  {c.caseNumber <= 10 && (
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800 uppercase">
                      Core Dossier
                    </span>
                  )}
                </div>
                <span className={`px-2.5 py-0.5 rounded-md text-[11px] font-mono font-bold uppercase ${
                  c.threatLevel === 'Critical'
                    ? 'bg-red-500/20 text-red-400 border border-red-500/40'
                    : 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
                }`}>
                  {c.threatLevel} (Risk: {c.severityScore}/10)
                </span>
              </div>

              {/* Title & Category */}
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                  {c.category}
                </span>
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                  {c.title}
                </h3>
              </div>

              {/* Summary */}
              <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                {c.attackMethod}
              </p>

              {/* Legal Badges */}
              <div className="pt-2">
                <span className="text-[10px] font-mono text-slate-400 block mb-1.5 uppercase">Applicable Statutes:</span>
                <div className="flex flex-wrap gap-1.5">
                  {c.legalProvisions.slice(0, 2).map((l, i) => (
                    <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800">
                      {l.statute.split('-')[0]}
                    </span>
                  ))}
                  {c.legalProvisions.length > 2 && (
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-400">
                      +{c.legalProvisions.length - 2} more
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Bottom Button */}
            <div className="pt-6 mt-4 border-t border-slate-800/60 flex items-center justify-between">
              <span className="text-[11px] text-slate-400 font-mono">14 Sections Complete</span>
              <button
                onClick={() => handleOpenCase(c)}
                className="flex items-center space-x-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors group-hover:translate-x-1 duration-150"
              >
                <span>View Full Dossier</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800 bg-slate-900/40 p-4 rounded-2xl">
          <div className="text-xs text-slate-400 font-mono">
            Showing cases <strong className="text-white">{(currentPage - 1) * pageSize + 1}</strong> to <strong className="text-white">{Math.min(currentPage * pageSize, filteredCases.length)}</strong> of <strong className="text-cyan-400">{filteredCases.length}</strong>
          </div>
          <div className="flex items-center space-x-1.5">
            <button
              onClick={() => { setCurrentPage(prev => Math.max(1, prev - 1)); window.scrollTo({ top: 300, behavior: 'smooth' }); }}
              disabled={currentPage === 1}
              className="px-3 py-1.5 rounded-lg bg-slate-800 text-xs text-slate-300 font-medium hover:bg-slate-700 disabled:opacity-40 disabled:pointer-events-none transition-colors"
            >
              ← Previous
            </button>
            
            {/* Page number buttons */}
            <div className="flex items-center space-x-1">
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                let pageNum = i + 1;
                if (totalPages > 5 && currentPage > 3) {
                  pageNum = Math.min(totalPages - 4, currentPage - 2) + i;
                }
                return (
                  <button
                    key={pageNum}
                    onClick={() => { setCurrentPage(pageNum); window.scrollTo({ top: 300, behavior: 'smooth' }); }}
                    className={`w-8 h-8 rounded-lg text-xs font-mono font-bold transition-all ${
                      currentPage === pageNum
                        ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                        : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => { setCurrentPage(prev => Math.min(totalPages, prev + 1)); window.scrollTo({ top: 300, behavior: 'smooth' }); }}
              disabled={currentPage === totalPages}
              className="px-3 py-1.5 rounded-lg bg-slate-800 text-xs text-slate-300 font-medium hover:bg-slate-700 disabled:opacity-40 disabled:pointer-events-none transition-colors"
            >
              Next →
            </button>
          </div>
        </div>
      )}

      {filteredCases.length === 0 && (
        <div className="text-center py-12 bg-slate-900/40 rounded-2xl border border-slate-800 space-y-3">
          <AlertTriangle className="w-8 h-8 text-amber-400 mx-auto" />
          <h3 className="text-base font-bold text-white">No Matching I4C Cases Found</h3>
          <p className="text-xs text-slate-400">Try adjusting your search terms or reset the category filter.</p>
          <button
            onClick={() => { handleSearchChange(''); handleCategoryChange('All'); }}
            className="px-4 py-2 rounded-xl bg-slate-800 text-white text-xs font-medium hover:bg-slate-700"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Modal View */}
      {modalOpen && (
        <CaseDetailModal
          selectedCase={selectedCase}
          onClose={() => setModalOpen(false)}
        />
      )}
    </div>
  );
}

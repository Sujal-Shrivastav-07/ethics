import React, { useState } from 'react';
import { 
  CheckSquare, 
  ShieldCheck, 
  AlertCircle, 
  RefreshCw, 
  ArrowRight, 
  Lock, 
  Key, 
  Fingerprint, 
  Smartphone,
  CheckCircle2,
  XCircle
} from 'lucide-react';
import { AUDIT_QUESTIONS } from '../data/checklistData';

export default function SecurityAudit({ setActiveTab }) {
  const [completedItems, setCompletedItems] = useState([]);

  const toggleItem = (id) => {
    if (completedItems.includes(id)) {
      setCompletedItems(completedItems.filter(item => item !== id));
    } else {
      setCompletedItems([...completedItems, id]);
    }
  };

  const handleSelectAll = () => {
    setCompletedItems(AUDIT_QUESTIONS.map(q => q.id));
  };

  const handleReset = () => {
    setCompletedItems([]);
  };

  const scoreCount = completedItems.length;
  const scorePercent = Math.round((scoreCount / AUDIT_QUESTIONS.length) * 100);

  const getRating = () => {
    if (scorePercent >= 80) {
      return {
        label: "Cyber Resilient (Excellent Defense)",
        color: "text-emerald-400",
        border: "border-emerald-500/40",
        bg: "bg-emerald-950/20",
        summary: "Your digital posture effectively protects you against the majority of common I4C attack vectors including AePS cloning, APK trojans, and phishing."
      };
    }
    if (scorePercent >= 50) {
      return {
        label: "Moderate Cyber Hygiene (Action Needed)",
        color: "text-amber-400",
        border: "border-amber-500/40",
        bg: "bg-amber-950/20",
        summary: "You have basic safeguards in place, but critical gaps (such as Aadhaar biometric locking or authenticator apps) leave attack surfaces open."
      };
    }
    return {
      label: "Vulnerable Digital Footprint (High Exposure)",
      color: "text-red-400",
      border: "border-red-500/40",
      bg: "bg-red-950/20",
      summary: "You are highly exposed to active cyber fraud syndicates documented by I4C. Adopt the uncompleted practices below immediately."
    };
  };

  const rating = getRating();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800 text-xs font-mono">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Interactive Cyber Hygiene Audit</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          Personal Cyber Defense & Hygiene Audit
        </h1>
        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
          Evaluate whether your personal digital habits and device configurations align with defensive best practices against current Indian cyber threats.
        </p>
      </div>

      {/* Dynamic Score Banner */}
      <div className={`cyber-card rounded-2xl p-6 border ${rating.border} ${rating.bg} space-y-4`}>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
              Safety Checklist Completed
            </span>
            <div className="flex items-baseline space-x-2 mt-1">
              <span className="text-3xl sm:text-4xl font-extrabold text-white">
                {scoreCount} / {AUDIT_QUESTIONS.length}
              </span>
              <span className={`text-lg font-bold font-mono ${rating.color}`}>
                ({scorePercent}%)
              </span>
            </div>
            <span className={`text-xs font-semibold ${rating.color} block mt-0.5`}>
              Status: {rating.label}
            </span>
          </div>

          <div className="flex items-center space-x-3 shrink-0">
            <button
              onClick={handleSelectAll}
              className="px-3.5 py-2 rounded-xl bg-slate-800 text-xs font-medium text-slate-200 hover:bg-slate-700 transition-colors"
            >
              Check All
            </button>
            <button
              onClick={handleReset}
              className="px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs font-medium text-slate-400 hover:text-white transition-colors"
            >
              Reset
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-2.5 rounded-full bg-slate-950 overflow-hidden border border-slate-800">
          <div 
            className={`h-full transition-all duration-500 ${
              scorePercent >= 80 ? 'bg-emerald-500' : scorePercent >= 50 ? 'bg-amber-500' : 'bg-red-500'
            }`}
            style={{ width: `${scorePercent}%` }}
          ></div>
        </div>

        <p className="text-xs text-slate-300">
          {rating.summary}
        </p>
      </div>

      {/* 10 Audit Items */}
      <div className="space-y-3">
        {AUDIT_QUESTIONS.map((item, index) => {
          const isDone = completedItems.includes(item.id);
          return (
            <div
              key={item.id}
              onClick={() => toggleItem(item.id)}
              className={`p-4 rounded-xl border transition-all cursor-pointer flex items-start space-x-3.5 ${
                isDone
                  ? 'bg-emerald-950/20 border-emerald-500/50 shadow-sm shadow-emerald-500/10'
                  : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className={`w-5 h-5 rounded flex items-center justify-center mt-0.5 shrink-0 transition-colors border ${
                isDone
                  ? 'bg-emerald-500 border-emerald-500 text-slate-950 font-bold'
                  : 'border-slate-700 bg-slate-950'
              }`}>
                {isDone && <CheckCircle2 className="w-3.5 h-3.5" />}
              </div>

              <div className="space-y-1 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <span className={`text-sm font-semibold ${isDone ? 'text-emerald-200' : 'text-white'}`}>
                    {index + 1}. {item.question}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800 shrink-0">
                    {item.category}
                  </span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  <strong className="text-slate-300">Why this matters:</strong> {item.rationale}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Academic Disclaimer */}
      <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 text-[11px] text-slate-400 text-center">
        <strong>Self-Assessment Note:</strong> This interactive checklist is designed as an educational self-audit tool for digital citizens. It does not replace enterprise-grade technical penetration testing or organizational ISO 27001 audits.
      </div>
    </div>
  );
}

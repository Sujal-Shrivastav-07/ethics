import React from 'react';
import { 
  X, 
  ShieldAlert, 
  Calendar, 
  User, 
  Scale, 
  Lightbulb, 
  CheckCircle, 
  Cpu, 
  ExternalLink,
  ChevronRight,
  AlertOctagon,
  Lock,
  Layers
} from 'lucide-react';

export default function CaseDetailModal({ selectedCase, onClose }) {
  if (!selectedCase) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#0d1322] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between p-5 sm:p-6 border-b border-slate-800 bg-slate-900/60 sticky top-0 z-10">
          <div className="space-y-1.5 pr-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 text-[11px] font-mono font-bold uppercase">
                Case #{selectedCase.caseNumber} • I4C Verified
              </span>
              <span className={`px-2 py-0.5 rounded text-[11px] font-mono font-bold uppercase ${
                selectedCase.threatLevel === 'Critical' 
                  ? 'bg-red-500/20 text-red-400 border border-red-500/40' 
                  : 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
              }`}>
                {selectedCase.threatLevel} Threat (Risk: {selectedCase.severityScore}/10)
              </span>
              <span className="text-xs text-slate-400 font-mono">
                {selectedCase.category}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {selectedCase.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body - All 14 Sections */}
        <div className="overflow-y-auto p-5 sm:p-8 space-y-8 text-slate-300 text-sm">
          {/* Section 1 & 2 & 3 & 4: Meta info grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-950/60 p-4 rounded-xl border border-slate-800/80 text-xs">
            <div className="flex items-start space-x-2.5">
              <Calendar className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-200 block">2. Reported Date / Timeframe:</strong>
                <span className="text-slate-400">{selectedCase.date}</span>
              </div>
            </div>

            <div className="flex items-start space-x-2.5">
              <ExternalLink className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-200 block">3. Official Source Reference:</strong>
                <span className="text-slate-400">{selectedCase.source}</span>
              </div>
            </div>

            <div className="flex items-start space-x-2.5 sm:col-span-2">
              <User className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-200 block">4. Target Demographic / Victims:</strong>
                <span className="text-slate-400">{selectedCase.target}</span>
              </div>
            </div>
          </div>

          {/* Section 1: Incident Summary */}
          <div className="space-y-2">
            <h3 className="text-base font-bold text-white flex items-center space-x-2">
              <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 text-xs flex items-center justify-center font-mono font-bold">1</span>
              <span>Incident Summary & Context</span>
            </h3>
            <p className="text-slate-300 leading-relaxed pl-8">
              {selectedCase.attackMethod}
            </p>
          </div>

          {/* Section 5 & 6: Attack Method & Cybercrime Classification */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pl-8">
            <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800 space-y-2">
              <h4 className="font-bold text-xs uppercase tracking-wider text-slate-200 flex items-center space-x-1.5">
                <AlertOctagon className="w-4 h-4 text-rose-400" />
                <span>5. Attack / Fraud Modus Operandi</span>
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {selectedCase.attackMethod}
              </p>
            </div>

            <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800 space-y-2">
              <h4 className="font-bold text-xs uppercase tracking-wider text-slate-200 flex items-center space-x-1.5">
                <ShieldAlert className="w-4 h-4 text-amber-400" />
                <span>6. Cybercrime Classification</span>
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed font-mono">
                {selectedCase.cybercrimeType}
              </p>
            </div>
          </div>

          {/* Section 7: Attack / Fraud Flow (Step-by-Step Chain) */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-white flex items-center space-x-2">
              <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 text-xs flex items-center justify-center font-mono font-bold">7</span>
              <span>Incident Attack Execution Chain</span>
            </h3>
            <div className="pl-8 space-y-3">
              {selectedCase.attackFlow.map((flowItem) => (
                <div key={flowItem.step} className="flex items-start space-x-3 bg-slate-950/70 p-3 rounded-lg border border-slate-800/80">
                  <div className="w-6 h-6 rounded bg-cyan-950 text-cyan-400 font-mono text-xs flex items-center justify-center font-bold shrink-0 mt-0.5 border border-cyan-800/60">
                    {flowItem.step}
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wide font-bold">
                      [{flowItem.actor}]
                    </span>
                    <p className="text-xs text-slate-300">{flowItem.action}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 8: Documented Impact */}
          <div className="space-y-2">
            <h3 className="text-base font-bold text-white flex items-center space-x-2">
              <span className="w-6 h-6 rounded-full bg-rose-500/20 text-rose-400 text-xs flex items-center justify-center font-mono font-bold">8</span>
              <span>Real-World Impact (Financial, Social & Psychological)</span>
            </h3>
            <div className="pl-8 bg-rose-950/20 border border-rose-900/40 p-4 rounded-xl text-xs text-rose-200/90 leading-relaxed">
              {selectedCase.impact}
            </div>
          </div>

          {/* Section 9: Ethical Analysis */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-white flex items-center space-x-2">
              <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 text-xs flex items-center justify-center font-mono font-bold">9</span>
              <span>Ethical Critique & Governance Failures</span>
            </h3>
            <div className="pl-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {selectedCase.ethicalIssues.map((issue, idx) => (
                <div key={idx} className="bg-slate-950/60 p-3 rounded-lg border border-slate-800 flex items-start space-x-2">
                  <span className="text-emerald-400 font-bold text-xs">•</span>
                  <span className="text-xs text-slate-300">{issue}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 10: Applicable Indian Cyber Laws & Provisions */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-white flex items-center space-x-2">
              <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 text-xs flex items-center justify-center font-mono font-bold">10</span>
              <span>Applicable Indian Cyber Laws & Statutory Provisions</span>
            </h3>
            <div className="pl-8 space-y-2.5">
              {selectedCase.legalProvisions.map((law, idx) => (
                <div key={idx} className="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800 space-y-1">
                  <div className="flex items-center space-x-2 text-cyan-400 font-mono font-bold text-xs">
                    <Scale className="w-3.5 h-3.5" />
                    <span>{law.statute}</span>
                  </div>
                  <p className="text-xs text-slate-300 pl-5 leading-relaxed">
                    {law.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 11: Security Weaknesses (Technical & Human) */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-white flex items-center space-x-2">
              <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 text-xs flex items-center justify-center font-mono font-bold">11</span>
              <span>Identified Vulnerabilities & Weaknesses</span>
            </h3>
            <div className="pl-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-amber-950/15 border border-amber-800/30 p-4 rounded-xl space-y-1">
                <span className="text-[11px] font-mono text-amber-400 uppercase font-bold tracking-wider block">
                  Human / Cognitive Vulnerability
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {selectedCase.weaknesses.human}
                </p>
              </div>

              <div className="bg-cyan-950/15 border border-cyan-800/30 p-4 rounded-xl space-y-1">
                <span className="text-[11px] font-mono text-cyan-400 uppercase font-bold tracking-wider block">
                  Technical / Architectural Weakness
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {selectedCase.weaknesses.technical}
                </p>
              </div>
            </div>
          </div>

          {/* Section 12: Preventive Measures */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-white flex items-center space-x-2">
              <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 text-xs flex items-center justify-center font-mono font-bold">12</span>
              <span>Actionable Preventive Measures & Citizen Defense</span>
            </h3>
            <div className="pl-8 space-y-2">
              {selectedCase.prevention.map((item, idx) => (
                <div key={idx} className="flex items-start space-x-2.5 bg-slate-900/40 p-2.5 rounded-lg border border-slate-800">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-200">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 13: Responsible Technology Recommendations */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-white flex items-center space-x-2">
              <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 text-xs flex items-center justify-center font-mono font-bold">13</span>
              <span>Responsible Technology & Engineering Recommendations</span>
            </h3>
            <div className="pl-8 space-y-2">
              {selectedCase.recommendations.map((rec, idx) => (
                <div key={idx} className="flex items-start space-x-2.5 bg-slate-900/40 p-2.5 rounded-lg border border-slate-800">
                  <Cpu className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-200">{rec}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 14: Key Learnings */}
          <div className="space-y-3 pb-4">
            <h3 className="text-base font-bold text-white flex items-center space-x-2">
              <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 text-xs flex items-center justify-center font-mono font-bold">14</span>
              <span>Key Academic & Defense Takeaways</span>
            </h3>
            <div className="pl-8 space-y-2">
              {selectedCase.keyLearnings.map((learning, idx) => (
                <div key={idx} className="flex items-start space-x-2.5 bg-amber-950/20 p-3 rounded-lg border border-amber-900/40">
                  <Lightbulb className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-amber-100/90 font-medium">{learning}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-900/80 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-800 text-white font-medium text-xs hover:bg-slate-700 transition-colors"
          >
            Close Intelligence File
          </button>
        </div>
      </div>
    </div>
  );
}

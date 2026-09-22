import React, { useState } from 'react';
import { 
  AlertTriangle, 
  ShieldAlert, 
  CheckCircle2, 
  RefreshCw, 
  PhoneCall, 
  HelpCircle, 
  ArrowRight,
  ShieldCheck,
  AlertOctagon,
  FileWarning
} from 'lucide-react';
import { SCAM_INDICATORS } from '../data/scamRules';

export default function ScamAnalyzer({ setActiveTab }) {
  const [selectedFlags, setSelectedFlags] = useState([]);

  const toggleFlag = (id) => {
    if (selectedFlags.includes(id)) {
      setSelectedFlags(selectedFlags.filter(item => item !== id));
    } else {
      setSelectedFlags([...selectedFlags, id]);
    }
  };

  const resetAnalysis = () => {
    setSelectedFlags([]);
  };

  // Calculate Risk Score
  const totalScore = selectedFlags.reduce((acc, flagId) => {
    const indicator = SCAM_INDICATORS.find(i => i.id === flagId);
    return acc + (indicator ? indicator.weight : 0);
  }, 0);

  // Determine Risk Level
  const getRiskDetails = () => {
    if (selectedFlags.length === 0) {
      return {
        level: "Awaiting Input",
        color: "text-slate-400",
        border: "border-slate-800",
        bg: "bg-slate-900/40",
        badge: "bg-slate-800 text-slate-300",
        description: "Select the warning signs you observed in the message, phone call, or email to compute the scam threat probability."
      };
    }
    if (totalScore < 30) {
      return {
        level: "Low to Moderate Suspicion",
        color: "text-amber-400",
        border: "border-amber-500/40",
        bg: "bg-amber-950/20",
        badge: "bg-amber-500/20 text-amber-300 border border-amber-500/40",
        description: "Some unusual characteristics were observed. Exercise strict caution and independently verify the sender's identity through official public channels before taking any action."
      };
    }
    if (totalScore < 60) {
      return {
        level: "High Scam Threat Detected",
        color: "text-orange-400",
        border: "border-orange-500/50",
        bg: "bg-orange-950/25",
        badge: "bg-orange-500/20 text-orange-300 border border-orange-500/40",
        description: "Multiple high-probability cyber fraud indicators are present. Strong likelihood of an organized social engineering attempt. Do NOT click any links, do NOT download files, and do NOT send money."
      };
    }
    return {
      level: "CRITICAL SCAM DANGER: Active Cyber Fraud Attempt",
      color: "text-red-400",
      border: "border-red-500/60",
      bg: "bg-red-950/30",
      badge: "bg-red-500/30 text-red-300 border border-red-500/60 animate-pulse",
      description: "Immediate Danger! This interaction matches verified criminal syndicates documented by the I4C (e.g. Digital Arrest, APK trojan, or task fraud). Break all communication immediately and alert authorities."
    };
  };

  const risk = getRiskDetails();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-950/80 text-amber-400 border border-amber-800 text-xs font-mono">
          <AlertTriangle className="w-3.5 h-3.5" />
          <span>Interactive Citizen Defense Tool</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          "Is This a Scam?" Threat Diagnostic Engine
        </h1>
        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
          Received a suspicious WhatsApp message, video call from a 'police officer', or an urgent SMS? Answer the questions below to evaluate the attack pattern against verified I4C threat signatures.
        </p>
      </div>

      {/* Main Diagnostic Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Left 2 Cols: Checklist Questions */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <h2 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
              Observed Behavioral & Technical Red Flags
            </h2>
            <button
              onClick={resetAnalysis}
              className="flex items-center space-x-1 text-xs text-slate-400 hover:text-white transition-colors"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Reset</span>
            </button>
          </div>

          <div className="space-y-3">
            {SCAM_INDICATORS.map((indicator) => {
              const isChecked = selectedFlags.includes(indicator.id);
              return (
                <div
                  key={indicator.id}
                  onClick={() => toggleFlag(indicator.id)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer flex items-start space-x-3.5 ${
                    isChecked
                      ? 'bg-amber-950/20 border-amber-500/50 shadow-sm shadow-amber-500/10'
                      : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className={`w-5 h-5 rounded flex items-center justify-center mt-0.5 shrink-0 transition-colors border ${
                    isChecked
                      ? 'bg-amber-500 border-amber-500 text-slate-950 font-bold'
                      : 'border-slate-700 bg-slate-950'
                  }`}>
                    {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                  </div>

                  <div className="space-y-1 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className={`text-sm font-semibold ${isChecked ? 'text-amber-200' : 'text-white'}`}>
                        {indicator.label}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800">
                        {indicator.tag}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {indicator.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right 1 Col: Dynamic Diagnostic Result & Emergency Advice */}
        <div className="space-y-6 lg:sticky lg:top-24">
          <div className={`cyber-card rounded-2xl p-6 border ${risk.border} ${risk.bg} space-y-4`}>
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                Calculated Threat Level
              </span>
              <span className={`inline-block px-2.5 py-1 rounded text-xs font-mono font-bold ${risk.badge}`}>
                {risk.level}
              </span>
            </div>

            {/* Score Bar */}
            <div className="space-y-1.5 pt-2">
              <div className="flex justify-between text-xs font-mono text-slate-300">
                <span>Threat Weight Score:</span>
                <span className="font-bold">{totalScore} Points</span>
              </div>
              <div className="w-full h-2.5 rounded-full bg-slate-950 overflow-hidden border border-slate-800">
                <div 
                  className={`h-full transition-all duration-300 ${
                    totalScore < 30 ? 'bg-amber-500' : totalScore < 60 ? 'bg-orange-500' : 'bg-red-500'
                  }`}
                  style={{ width: `${Math.min(100, (totalScore / 120) * 100)}%` }}
                ></div>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              {risk.description}
            </p>

            {/* Recommended Defensive Actions */}
            <div className="pt-3 border-t border-slate-800 space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-white block">
                Immediate Defensive Protocol:
              </span>
              <ul className="text-xs text-slate-300 space-y-1.5">
                <li className="flex items-start space-x-1.5">
                  <span className="text-red-400 font-bold">•</span>
                  <span><strong>Disconnect:</strong> Stop responding immediately. Hang up video or voice calls.</span>
                </li>
                <li className="flex items-start space-x-1.5">
                  <span className="text-amber-400 font-bold">•</span>
                  <span><strong>Zero Disclosures:</strong> Never disclose OTPs, card numbers, or passwords.</span>
                </li>
                <li className="flex items-start space-x-1.5">
                  <span className="text-cyan-400 font-bold">•</span>
                  <span><strong>Independent Check:</strong> Call the organization using numbers from their official website only.</span>
                </li>
              </ul>
            </div>

            {/* Helpline CTA */}
            <div className="pt-2">
              <a
                href="tel:1930"
                className="flex items-center justify-center space-x-2 w-full py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-mono font-bold text-xs shadow-md shadow-red-900/30 transition-all"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Call National Helpline 1930</span>
              </a>
            </div>
          </div>

          {/* Educational Disclaimer */}
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 text-[11px] text-slate-400 leading-relaxed space-y-1">
            <strong className="text-slate-300 block">Educational Tool Disclaimer:</strong>
            This interactive tool evaluates inputs against empirical patterns extracted from I4C Cyber Digest bulletins. It is designed for student awareness and public cyber hygiene education, not as a guaranteed forensic audit.
          </div>
        </div>
      </div>
    </div>
  );
}

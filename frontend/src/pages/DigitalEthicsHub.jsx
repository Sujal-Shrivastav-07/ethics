import React from 'react';
import { Cpu, ShieldAlert, FileCheck, HeartHandshake, CheckCircle2, Code2, AlertTriangle, Layers } from 'lucide-react';
import { ETHICAL_PILLARS, DEVELOPER_ETHICS_CHECKLIST } from '../data/ethicsData';

export default function DigitalEthicsHub() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800 text-xs font-mono">
          <Cpu className="w-3.5 h-3.5" />
          <span>Responsible Technology Innovation & Governance</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          Digital Ethics & Responsible Technology Framework
        </h1>
        <p className="text-slate-300 text-xs sm:text-sm max-w-3xl leading-relaxed">
          Cyber threats documented by the I4C are fundamentally ethical breakdowns before they become criminal violations. This module analyzes ethical dilemmas, the duty of care towards vulnerable digital citizens, and engineering standards for building secure public systems.
        </p>
      </div>

      {/* 4 Ethical Pillars */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-white uppercase tracking-wider font-mono flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          <span>Four Foundational Pillars of Digital Ethics</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ETHICAL_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className="cyber-card rounded-2xl p-6 border border-slate-800 space-y-4 hover:border-emerald-500/40 transition-all"
            >
              <div className="space-y-1">
                <span className="text-[11px] font-mono uppercase text-emerald-400 font-bold block">
                  {pillar.tagline}
                </span>
                <h3 className="text-lg font-bold text-white">
                  {pillar.title}
                </h3>
              </div>

              <div className="bg-slate-950/60 p-3.5 rounded-xl border border-slate-800/80 space-y-1">
                <span className="text-[10px] font-mono uppercase text-slate-400 block font-bold">
                  Core Ethical Principle:
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {pillar.corePrinciple}
                </p>
              </div>

              <div className="bg-rose-950/20 p-3.5 rounded-xl border border-rose-900/30 space-y-1">
                <span className="text-[10px] font-mono uppercase text-rose-400 block font-bold">
                  How This Was Breached in I4C Incidents:
                </span>
                <p className="text-xs text-rose-200/90 leading-relaxed">
                  {pillar.caseContrast}
                </p>
              </div>

              <div className="bg-cyan-950/20 p-3.5 rounded-xl border border-cyan-900/30 space-y-1">
                <span className="text-[10px] font-mono uppercase text-cyan-400 block font-bold">
                  Responsible Technology Solution:
                </span>
                <p className="text-xs text-cyan-200/90 leading-relaxed">
                  {pillar.responsibleAction}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Developer & Systems Architecture Checklist */}
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-lg font-bold text-white uppercase tracking-wider font-mono flex items-center space-x-2">
            <Code2 className="w-5 h-5 text-cyan-400" />
            <span>Developer's Code of Ethics & Secure Defaults</span>
          </h2>
          <p className="text-xs text-slate-400">
            Actionable design guidelines for software developers and computer engineers to prevent system abuse and protect citizen privacy by design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {DEVELOPER_ETHICS_CHECKLIST.map((item, idx) => (
            <div key={idx} className="bg-slate-900/40 rounded-2xl p-5 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase">
                  {item.category}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                  Standard #{idx + 1}
                </span>
              </div>

              <h4 className="text-sm font-semibold text-white">
                {item.rule}
              </h4>

              <div className="space-y-2 text-xs pt-1">
                <div className="bg-red-950/20 border border-red-900/40 p-2.5 rounded-lg text-red-300">
                  <strong className="text-red-400 block mb-0.5 font-mono text-[10px] uppercase">Unethical / Insecure Practice:</strong>
                  {item.badPractice}
                </div>
                <div className="bg-emerald-950/20 border border-emerald-900/40 p-2.5 rounded-lg text-emerald-300">
                  <strong className="text-emerald-400 block mb-0.5 font-mono text-[10px] uppercase">Ethical Engineering Standard:</strong>
                  {item.goodPractice}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Digital Citizenship Callout */}
      <div className="cyber-card rounded-2xl p-6 sm:p-8 border border-slate-700/80 bg-gradient-to-r from-slate-950 via-slate-900 to-cyan-950/40 space-y-4">
        <h3 className="text-lg sm:text-xl font-bold text-white">
          Digital Citizenship & The Duty of Care
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          Digital citizenship is not merely having an online account; it is the moral obligation to protect one's digital footprint, respect the autonomy of fellow citizens, refuse to share unverified or harmful content, and actively defend vulnerable members of society from predatory technologies.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs">
          <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800 text-slate-300">
            <strong className="text-cyan-400 block mb-1">Verify Before Forwarding:</strong>
            Stop the viral velocity of unverified investment claims and deepfake videos.
          </div>
          <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800 text-slate-300">
            <strong className="text-emerald-400 block mb-1">Protect Peer Biometrics:</strong>
            Never publish property deeds or Aadhaar photocopies in public chat forums.
          </div>
          <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800 text-slate-300">
            <strong className="text-amber-400 block mb-1">Report Predatory Actors:</strong>
            Proactively file cyber alerts when encountering extortionate loan applications.
          </div>
        </div>
      </div>
    </div>
  );
}

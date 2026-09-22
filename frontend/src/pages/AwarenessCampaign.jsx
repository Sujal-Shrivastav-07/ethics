import React from 'react';
import { Sparkles, Printer, CheckCircle, XCircle, Shield, AlertTriangle, PhoneCall, Download } from 'lucide-react';

export default function AwarenessCampaign() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      {/* Header & Print Action */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1.5">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-800 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Creative Output • Seminar Awareness Poster Series</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Citizen Cyber Safety Infographic
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm">
            High-impact visual awareness material designed for academic demonstration and public education.
          </p>
        </div>

        <button
          onClick={handlePrint}
          className="flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/20 transition-all shrink-0"
        >
          <Printer className="w-4 h-4" />
          <span>Print / Export Poster</span>
        </button>
      </div>

      {/* Printable Master Infographic Poster */}
      <div id="printable-poster" className="bg-[#0c1220] border-2 border-cyan-500/40 rounded-3xl p-6 sm:p-10 space-y-8 shadow-2xl relative overflow-hidden">
        {/* Poster Header */}
        <div className="text-center space-y-3 border-b border-slate-800 pb-6 relative z-10">
          <div className="flex items-center justify-center space-x-2">
            <Shield className="w-8 h-8 text-cyan-400" />
            <span className="text-2xl sm:text-3xl font-black text-white tracking-wider">
              CYBERPRAHARI
            </span>
          </div>
          <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">
            NATIONAL CITIZEN CYBER DEFENSE INITIATIVE • I4C CASE STUDY
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-white max-w-xl mx-auto">
            The 5 Golden Rules to Defeat Cyber Fraud in India
          </h2>
        </div>

        {/* 5 Core Rules */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative z-10">
          <div className="bg-slate-900/80 p-4 rounded-2xl border border-slate-800 text-center space-y-2">
            <div className="w-10 h-10 rounded-full bg-cyan-500/20 text-cyan-400 font-bold text-sm mx-auto flex items-center justify-center font-mono">
              01
            </div>
            <h3 className="font-bold text-xs text-white uppercase">No "Digital Arrest"</h3>
            <p className="text-[11px] text-slate-300">
              Indian police, CBI, or courts NEVER arrest citizens or conduct interrogations over Skype/WhatsApp video calls.
            </p>
          </div>

          <div className="bg-slate-900/80 p-4 rounded-2xl border border-slate-800 text-center space-y-2">
            <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-sm mx-auto flex items-center justify-center font-mono">
              02
            </div>
            <h3 className="font-bold text-xs text-white uppercase">Lock Biometrics</h3>
            <p className="text-[11px] text-slate-300">
              Lock your Aadhaar biometrics via mAadhaar app to eliminate AePS cloned silicone fingerprint theft completely.
            </p>
          </div>

          <div className="bg-slate-900/80 p-4 rounded-2xl border border-slate-800 text-center space-y-2">
            <div className="w-10 h-10 rounded-full bg-amber-500/20 text-amber-400 font-bold text-sm mx-auto flex items-center justify-center font-mono">
              03
            </div>
            <h3 className="font-bold text-xs text-white uppercase">Zero APK Installs</h3>
            <p className="text-[11px] text-slate-300">
              Never install APK files sent on WhatsApp for "bill updates" or remote tools like AnyDesk/QuickSupport.
            </p>
          </div>

          <div className="bg-slate-900/80 p-4 rounded-2xl border border-slate-800 text-center space-y-2">
            <div className="w-10 h-10 rounded-full bg-rose-500/20 text-rose-400 font-bold text-sm mx-auto flex items-center justify-center font-mono">
              04
            </div>
            <h3 className="font-bold text-xs text-white uppercase">No Prepaid Jobs</h3>
            <p className="text-[11px] text-slate-300">
              Genuine jobs never demand money or "crypto task deposits" to release salaries or earnings.
            </p>
          </div>

          <div className="bg-slate-900/80 p-4 rounded-2xl border border-slate-800 text-center space-y-2">
            <div className="w-10 h-10 rounded-full bg-red-500/20 text-red-400 font-bold text-sm mx-auto flex items-center justify-center font-mono">
              05
            </div>
            <h3 className="font-bold text-xs text-white uppercase">Dial 1930 Fast</h3>
            <p className="text-[11px] text-slate-300">
              Report financial fraud within 2 hours to freeze stolen money across banking channels automatically.
            </p>
          </div>
        </div>

        {/* Do's and Don'ts Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10 pt-4">
          {/* Do's */}
          <div className="bg-emerald-950/20 border border-emerald-500/30 p-5 rounded-2xl space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-emerald-400 flex items-center space-x-2">
              <CheckCircle className="w-4 h-4" />
              <span>Cyber Safety Do's</span>
            </h4>
            <ul className="text-xs text-emerald-100/90 space-y-2">
              <li className="flex items-start space-x-2">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>Verify broker and advisor credentials exclusively on sebi.gov.in.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>Establish a confidential family "Safe Word" to verify AI cloned voice calls.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>Use authenticator apps instead of SMS OTPs where supported.</span>
              </li>
            </ul>
          </div>

          {/* Don'ts */}
          <div className="bg-rose-950/20 border border-rose-500/30 p-5 rounded-2xl space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-rose-400 flex items-center space-x-2">
              <XCircle className="w-4 h-4" />
              <span>Cyber Safety Don'ts</span>
            </h4>
            <ul className="text-xs text-rose-100/90 space-y-2">
              <li className="flex items-start space-x-2">
                <span className="text-rose-400 font-bold">✗</span>
                <span>Never share OTP, UPI PIN, or Net-Banking passwords with anyone.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-rose-400 font-bold">✗</span>
                <span>Never grant Contacts and Gallery permissions to instant loan utilities.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-rose-400 font-bold">✗</span>
                <span>Never transfer funds to "Safe Verification Accounts" claiming police backing.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Poster Footer with Helpline */}
        <div className="bg-slate-950/90 p-4 rounded-2xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left relative z-10">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-red-600 text-white flex items-center justify-center font-bold font-mono">
              1930
            </div>
            <div>
              <span className="text-white font-bold text-xs block">National Cyber Crime Reporting Helpline</span>
              <span className="text-slate-400 text-[11px] font-mono">Toll-Free 24x7 • Ministry of Home Affairs (MHA / I4C)</span>
            </div>
          </div>

          <div className="text-[11px] text-slate-400 font-mono">
            Portal: <span className="text-cyan-400 font-bold">cybercrime.gov.in</span> • National Citizen Defense Initiative
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CaseLibrary from './pages/CaseLibrary';
import ScamAnalyzer from './pages/ScamAnalyzer';
import SecurityAudit from './pages/SecurityAudit';
import CyberLawGuide from './pages/CyberLawGuide';
import DigitalEthicsHub from './pages/DigitalEthicsHub';
import IncidentResponse from './pages/IncidentResponse';
import AwarenessCampaign from './pages/AwarenessCampaign';
import { I4C_CASES } from './data/i4cCases';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedCase, setSelectedCase] = useState(I4C_CASES[0]);

  const renderActivePage = () => {
    switch (activeTab) {
      case 'home':
        return <Home setActiveTab={setActiveTab} setSelectedCase={setSelectedCase} />;
      case 'cases':
        return <CaseLibrary selectedCase={selectedCase} setSelectedCase={setSelectedCase} />;
      case 'scam-detector':
        return <ScamAnalyzer setActiveTab={setActiveTab} />;
      case 'security-audit':
        return <SecurityAudit setActiveTab={setActiveTab} />;
      case 'cyber-laws':
        return <CyberLawGuide />;
      case 'digital-ethics':
        return <DigitalEthicsHub />;
      case 'incident-response':
        return <IncidentResponse />;
      case 'awareness':
        return <AwarenessCampaign />;
      default:
        return <Home setActiveTab={setActiveTab} setSelectedCase={setSelectedCase} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0f1d] text-slate-100 selection:bg-cyan-500 selection:text-black">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-1">
        {renderActivePage()}
      </main>
      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}

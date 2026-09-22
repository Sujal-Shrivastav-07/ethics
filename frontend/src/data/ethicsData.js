/**
 * CyberPrahari - Digital Ethics, Governance & Responsible Technology Framework
 * Structured for academic critique and student comprehension.
 */

export const ETHICAL_PILLARS = [
  {
    id: "privacy-by-design",
    title: "Privacy by Design & Default",
    icon: "ShieldAlert",
    tagline: "Security and data protection embedded from the first line of code",
    corePrinciple: "Systems must never treat user privacy as an optional setting. Data minimization, end-to-end encryption, and limited session lifetimes must be architectural defaults.",
    caseContrast: "Violated in Case 5 (Loan Apps requesting blanket storage and contact access) and Case 2 (Land registry departments publishing unredacted biometric thumbprints online).",
    responsibleAction: "Engineers must implement granular permissions (Android Scoped Storage) and redact PII/biometrics automatically using computer vision before public records are indexed."
  },
  {
    id: "consent-integrity",
    title: "Genuine & Informed Consent",
    icon: "FileCheck",
    tagline: "Consent must be explicit, revocable, and free from dark patterns",
    corePrinciple: "Forced consent, pre-ticked check-boxes, and burying surveillance clauses inside 50-page Terms of Service violate ethical digital autonomy.",
    caseContrast: "Demonstrated in Case 3 (Telegram tasks using deceptive contracts) and Case 4 (Rogue trading apps tricking users into signing away fund custody).",
    responsibleAction: "Provide concise, multi-lingual 'Nutrition Labels for Privacy' explaining in 3 bullet points exactly what data is read, stored, or shared."
  },
  {
    id: "vulnerable-protection",
    title: "Protection of Vulnerable Digital Citizens",
    icon: "HeartHandshake",
    tagline: "Safeguarding senior citizens, low-income earners, and novice internet users",
    corePrinciple: "Technology democratization has brought millions of first-time internet users online who lack defensive cyber literacy. Platforms have a moral duty to provide cognitive safety nets.",
    caseContrast: "Directly exploited in Case 1 (Digital Arrest targeting retired seniors who revere state authority) and Case 5 (distressed citizens driven to suicide by predatory debt harassment).",
    responsibleAction: "Financial apps must implement cognitive speed-bumps, voice warnings in vernacular languages, and delayed execution for unusual high-volume transfers initiated by senior demographics."
  },
  {
    id: "algorithmic-transparency",
    title: "Algorithmic Integrity & Anti-Deception",
    icon: "Cpu",
    tagline: "Prohibiting simulated reality and manipulated social proof",
    corePrinciple: "Simulating human identities, fabricating financial profits on synthetic software screens, and deploying bot swarms to manufacture fake peer consensus is deeply unethical.",
    caseContrast: "Core mechanic of Case 3 (paid bot shills in Telegram groups), Case 4 (simulated trading charts), and Case 8 (generative AI voice and face cloning).",
    responsibleAction: "Enforce cryptographic content authenticity standards (C2PA watermarking) and legal liability for distributing deceptive synthetic audiovisual media without clear disclosure."
  }
];

export const DEVELOPER_ETHICS_CHECKLIST = [
  {
    category: "Data Minimization",
    rule: "Collect only what is strictly required for the core business function.",
    badPractice: "A calculator or loan app requesting READ_CONTACTS or ACCESS_FINE_LOCATION.",
    goodPractice: "Zero third-party SDK contact access; utilizing Android Photo Picker for one-time selection without gallery permissions."
  },
  {
    category: "Liveness & Biometrics",
    rule: "Never treat a static biometric image as an immutable secret password.",
    badPractice: "Accepting binary fingerprint matches from flat optical scanners without blood flow or thermal checks.",
    goodPractice: "Enforce 3D structured-light liveness detection and allow users to cryptographically lock their biometric identity tokens."
  },
  {
    category: "Anti-Screen-Scraping",
    rule: "Shield sensitive banking screens from unauthorized remote tools.",
    badPractice: "Allowing financial apps to run over active AnyDesk or TeamViewer screen-mirroring sessions.",
    goodPractice: "Enable FLAG_SECURE on all Android activities containing payment details, rendering the screen completely blank to remote viewers."
  },
  {
    category: "Velocity & Cooling-off Safeguards",
    rule: "Introduce friction during high-risk state changes.",
    badPractice: "Immediate high-value RTGS/IMPS transfers to newly added unknown beneficiaries.",
    goodPractice: "Mandatory 4-hour cooling-off window with SMS and interactive voice call confirmation for new beneficiaries added after SIM swap events."
  }
];

/**
 * CyberPrahari - Indian Cyber Law & Regulatory Framework Database
 * Verified against India Code (indiacode.nic.in), Ministry of Law & Justice, MeitY, and RBI publications.
 */

export const CYBER_LAWS = [
  {
    id: "it-sec-66d",
    act: "Information Technology Act, 2000",
    section: "Section 66D",
    title: "Punishment for Cheating by Personation using Computer Resource",
    description: "Whoever, by means of any communication device or computer resource, cheats by personation, shall be punished with imprisonment of either description for a term which may extend to three years and shall also be liable to fine which may extend to one lakh rupees.",
    studentExplanation: "If someone creates a fake identity on WhatsApp, Skype, or email—such as pretending to be a CBI officer, bank official, or recruiter—to trick you and take your money, they are charged under Section 66D.",
    relevanceToCases: ["Case 1: Digital Arrest Extortion", "Case 3: Telegram Task Fraud", "Case 7: Electricity Bill Phishing", "Case 8: Deepfake Impersonation"],
    category: "Impersonation & Fraud",
    penalty: "Up to 3 years imprisonment + fine up to ₹1,00,000",
    cognizable: "Cognizable and Bailable"
  },
  {
    id: "it-sec-66c",
    act: "Information Technology Act, 2000",
    section: "Section 66C",
    title: "Punishment for Identity Theft",
    description: "Whoever, fraudulently or dishonestly, makes use of the electronic signature, password, or any other unique identification feature of any other person, shall be punished with imprisonment of either description for a term which may extend to three years and shall also be liable to fine which may extend to one lakh rupees.",
    studentExplanation: "Using someone else's biometric fingerprint, Aadhaar number, banking password, OTP, or synthetic face without permission is considered digital identity theft.",
    relevanceToCases: ["Case 2: AePS Biometric Spoofing", "Case 6: SIM Swap Fraud", "Case 8: AI Voice & Face Cloning"],
    category: "Identity Theft",
    penalty: "Up to 3 years imprisonment + fine up to ₹1,00,000",
    cognizable: "Cognizable and Bailable"
  },
  {
    id: "it-sec-66e",
    act: "Information Technology Act, 2000",
    section: "Section 66E",
    title: "Punishment for Violation of Privacy",
    description: "Whoever, intentionally or knowingly captures, publishes, or transmits the image of a private area of any person without his or her consent, under circumstances violating the privacy of that person, shall be punished with imprisonment which may extend to three years or with fine not exceeding two lakh rupees, or with both.",
    studentExplanation: "Capturing, stealing, or distributing intimate photographs, private gallery pictures, or non-consensually morphing images is a direct violation of digital privacy.",
    relevanceToCases: ["Case 5: Predatory Loan App Photo Blackmail"],
    category: "Privacy Violation",
    penalty: "Up to 3 years imprisonment or fine up to ₹2,00,000, or both",
    cognizable: "Cognizable and Bailable"
  },
  {
    id: "it-sec-43-66",
    act: "Information Technology Act, 2000",
    section: "Section 43 read with Section 66",
    title: "Computer-Related Offences (Hacking, Malware, Unauthorized Access)",
    description: "If any person without permission of the owner damages, copies, extracts data, introduces computer contaminants, or disrupts access to any computer system dishonestly or fraudulently, they are liable for criminal punishment under Section 66.",
    studentExplanation: "Installing hidden malware, RAT trojans, remote screen-sharing tools like AnyDesk to control someone else's phone, or stealing database records is criminal hacking.",
    relevanceToCases: ["Case 2: Land Registry Data Extraction", "Case 7: Electricity Bill Remote Access APK"],
    category: "Hacking & Malware",
    penalty: "Imprisonment up to 3 years or fine up to ₹5,00,000, or both",
    cognizable: "Cognizable and Bailable"
  },
  {
    id: "bns-sec-318",
    act: "Bharatiya Nyaya Sanhita, 2023 (BNS)",
    section: "Section 318(4)",
    title: "Cheating and Dishonestly Inducing Delivery of Property (Formerly IPC 420)",
    description: "Whoever cheats and thereby dishonestly induces the person deceived to deliver any property to any person, or to make, alter or destroy the whole or any part of a valuable security, shall be punished with imprisonment of either description for a term which may extend to seven years, and shall also be liable to fine.",
    studentExplanation: "The fundamental Indian penal provision for financial fraud. When a cybercriminal tricks you into transferring money to a mule account using false promises or fake emergencies, they are booked under BNS 318(4).",
    relevanceToCases: ["All Cases (Core Financial Fraud Provision)"],
    category: "Financial Cheating",
    penalty: "Rigorous imprisonment up to 7 years + fine",
    cognizable: "Cognizable and Non-Bailable"
  },
  {
    id: "bns-sec-308",
    act: "Bharatiya Nyaya Sanhita, 2023 (BNS)",
    section: "Section 308",
    title: "Extortion (Formerly IPC 383/384)",
    description: "Whoever intentionally puts any person in fear of any injury to that person, or to any other, and thereby dishonestly induces the person so put in fear to deliver to any person any property or valuable security, commits extortion.",
    studentExplanation: "Demanding money by threatening to publish morphed photos, send goons to a house, or have someone arrested under fake criminal warrants constitutes criminal extortion.",
    relevanceToCases: ["Case 1: Digital Arrest Extortion", "Case 5: Loan App Blackmail"],
    category: "Extortion & Blackmail",
    penalty: "Imprisonment up to 3 years, or fine, or both (can extend to 7-10 years depending on severity)",
    cognizable: "Cognizable and Non-Bailable"
  },
  {
    id: "dpdp-act-2023",
    act: "Digital Personal Data Protection Act, 2023",
    section: "Sections 6, 8, and Schedule Penalties",
    title: "Obligations of Data Fiduciaries & Citizen Consent Rights",
    description: "Requires data fiduciaries to process personal data strictly for specified purposes with explicit, informed consent. Enforces purpose limitation, data minimization, and protection against data breaches, backed by heavy financial penalties.",
    studentExplanation: "Companies, apps, and government portals cannot leak your thumbprints, share your phone contacts with third-party recovery agents, or use your photos to train AI models without explicit, transparent consent.",
    relevanceToCases: ["Case 2: Public Land Registry Biometric Leaks", "Case 5: Loan App Contact Scraping", "Case 8: AI Deepfake Scraping"],
    category: "Data Privacy & Governance",
    penalty: "Financial penalties up to ₹250 Crores per violation by Data Protection Board of India",
    cognizable: "Civil / Regulatory Adjudication"
  },
  {
    id: "rbi-circular-2023",
    act: "Reserve Bank of India (RBI) Directives",
    section: "Digital Lending Guidelines & Zero-Liability Circular",
    title: "Customer Protection: Limiting Liability of Customers in Unauthorized Electronic Banking Transactions",
    description: "Mandates that if an unauthorized transaction occurs due to third-party breach or negligence not attributable to the customer, and the customer notifies the bank within 3 working days, the customer's liability is zero.",
    studentExplanation: "If cybercriminals steal money from your account and you report it immediately to your bank and helpline 1930 within the Golden Window, RBI directives protect you from absorbing the entire financial loss.",
    relevanceToCases: ["Case 1: Digital Arrest", "Case 2: AePS Biometric Fraud", "Case 6: SIM Swap"],
    category: "Financial Consumer Protection",
    penalty: "Mandatory bank compensation and account freeze directives",
    cognizable: "Regulatory Enforcement"
  }
];

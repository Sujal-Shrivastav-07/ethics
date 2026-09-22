/**
 * CyberPrahari - Scam Risk Diagnostic Logic & Rule Engine
 */

export const SCAM_INDICATORS = [
  {
    id: "urgency_threat",
    label: "Extreme Urgency & Threats of Arrest or Service Cutoff",
    description: "Caller/sender claims you will be arrested in 1 hour, power cut tonight at 9:30 PM, or SIM deactivated unless you act immediately.",
    weight: 25,
    tag: "Psychological Coercion"
  },
  {
    id: "digital_arrest",
    label: "Video Call Claiming 'Digital Arrest' or Interrogation",
    description: "Persons claiming to be CBI, ED, Mumbai Police, or Customs demanding you remain on Skype/WhatsApp video call and show your surroundings.",
    weight: 35,
    tag: "Illegal Confinement Fiction"
  },
  {
    id: "otp_remote_access",
    label: "Request for OTP, UPI PIN, or Screen Sharing App",
    description: "Caller asks for an OTP, tells you to enter your UPI PIN to 'receive money', or requests installation of AnyDesk, QuickSupport, or RustDesk.",
    weight: 35,
    tag: "Credential & Device Hijack"
  },
  {
    id: "guaranteed_returns",
    label: "Unrealistic High Returns or 'VIP Institutional Trading'",
    description: "Promising 200% to 500% profits on IPOs, crypto doubling, or private WhatsApp groups managed by a self-proclaimed 'Professor'.",
    weight: 30,
    tag: "Securities Fraud"
  },
  {
    id: "prepaid_tasks",
    label: "Prepaid Work-From-Home or YouTube 'Like' Tasks",
    description: "Offered ₹2,000/day for liking videos or rating hotels, but required to deposit money into a 'VIP crypto tier' to release your earnings.",
    weight: 30,
    tag: "Ponzi Task Trap"
  },
  {
    id: "sideload_apk",
    label: "Request to Download Unknown APK File via WhatsApp/Telegram",
    description: "Sent an Android APK file via chat claiming it is an update, bill payment utility, or loan approval application.",
    weight: 30,
    tag: "Malware & Trojan Delivery"
  },
  {
    id: "mule_account",
    label: "Demands Transfer to a 'Safe Government Verification Account'",
    description: "Told that your funds must be temporarily transferred to a specific RBI/police verification bank account to prove your innocence.",
    weight: 35,
    tag: "Direct Financial Theft"
  },
  {
    id: "unverified_personal_number",
    label: "Official Notification Sent from a Regular 10-Digit Mobile Number",
    description: "Bank or electricity disconnection notices arriving from personal mobile numbers (+91-98xxxxxx) instead of official alpha headers (e.g., VM-HDFCBK, VK-BESCOM).",
    weight: 20,
    tag: "Spoofed Communications"
  }
];

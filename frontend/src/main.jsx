/**
 * CyberPrahari - National Cyber Threat Intelligence & Digital Ethics Platform
 * Course: Ethical and Legal Frameworks for Digital Systems (MDC5011C)
 * Author: Sujal Shrivastav (Integrated M.Sc. IT, Semester 7)
 * GitHub Profile: https://github.com/Sujal-Shrivastav-07
 * Official Repository: https://github.com/Sujal-Shrivastav-07/ethics
 * Copyright (c) 2026 Sujal Shrivastav. All Rights Reserved.
 * Strict Prohibition Against Unauthorized Mirroring, Forking, or Plagiarism.
 */

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Watermark runtime console log
console.log(
  "%c🛡️ CyberPrahari | National Cyber Threat Intelligence Platform\n%cAuthor: Sujal Shrivastav (Sem 7, iMSc IT)\nGitHub: https://github.com/Sujal-Shrivastav-07/ethics\nCopyright (c) 2026 Sujal Shrivastav. All Rights Reserved.",
  "color: #06b6d4; font-size: 14px; font-weight: bold;",
  "color: #94a3b8; font-size: 11px;"
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

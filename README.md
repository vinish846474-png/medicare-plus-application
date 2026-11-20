# MEDICARE PLUS — Enterprise Hospital Management System & Patient Access Governance Portal

A modern, clinical-grade Hospital Management System (HMS) web application with frosted glassmorphism, floating & glowing 3D-depth medical plus symbols, **dual-line real-time ECG/EKG heartbeat waveforms (Lead II & Lead V5 synchronized twin-traces)** on an HTML5 canvas background, a **Sidebar Navigation Menu**, a comprehensive **Patient Profile Access & Upgrade Center**, a **Digital Smart Health ID Card**, and an active **Persistent Demo Database Engine** in a pristine, high-contrast **Light Clinical Theme**.

---

## 🌟 Key Features

### 1. **Sidebar Navigation Menu (Patient Dashboard)**
- **Docked Left Sidebar**: Positioned cleanly alongside the clinical dashboard with glassmorphism blur and subtle clinical shadows.
- **Mobile Responsive Drawer**: On tablets and mobile viewports, smoothly toggles via a dedicated hamburger button with a darkened backdrop overlay.
- **Patient Mini Profile Card**: Displays current patient avatar initials, name, medical record ID (#PT-90482), verified outpatient status chip, and a 1-click shortcut to access the profile upgrade tools.
- **Clinical Navigation Group**:
  - 📊 **Clinical Overview**: Returns to the main clinical dashboard.
  - 🩺 **Specialist Booking**: Smooth-scrolls with an animated highlight pulse to the Doctor Appointment Bar.
  - 📅 **My Consultations**: Quick-scrolls to upcoming appointments with live badge counter.
  - 💊 **Medications & Rx**: Direct-scrolls to active prescriptions and refill orders.
  - 🧪 **Diagnostic Reports**: Direct-scrolls to lab and imaging results.
  - 👨‍⚕️ **Clinical Care Team**: Navigates to assigned attending physicians and coordinator nurses.
- **Patient Tools & Upgrade Group**:
  - 👤 **My Profile & Upgrade**: Opens the full interactive EHR profile management center.
  - 🪪 **Digital Medical ID Card**: Opens the high-tech smart health card preview.
  - 💾 **Demo Database Console**: Opens the live database inspector and data testing suite.
  - 📷 **Tablet AI Scanner & Specs**: Dedicated optical vision medicine analyzer with live camera access, file upload, indication analysis, disease cure mapping, dosage evaluation, and Demo DB sync.
- **Sidebar Footer**: Displays real-time database sync status (`● Demo DB: Active & Synced`) and rapid 24/7 hotline dispatch.

### 2. **Patient Profile Access & Upgrade Center**
- **EHR Verification & Completeness Bar**: Dynamic progress indicator (96% Completeness) reflecting verified clinical identity.
- **Personal Demographics & Contact**:
  - Full legal name with instant reflection across top navbar, hero banner, sidebar card, and digital ID card.
  - Date of birth, auto-synchronized age, and biological gender selector.
  - Interactive **Blood Group Selector** (O+, O-, A+, A-, B+, B-, AB+, AB-) with instant crimson badge styling.
  - Email, verified telephone number, and primary residential address.
- **Designated Emergency Contact**:
  - Contact full name, relationship (Spouse, Parent, Child, Sibling, Legal Guardian), and emergency phone number for paramedic dispatch.
- **Hospital Care Unit & Clinical Medical Flags**:
  - Primary Attending Doctor assignment (Dr. Marcus Vance, Dr. Elena Rostova, Dr. David Chen, Dr. Sarah Al-Mansoor).
  - Assigned Care Pavilion and suite room number.
  - Interactive **Documented Allergy Tags** with 1-click addition and removal (e.g. *Penicillin*, *Sulfa Drugs*, *Latex*).
  - Chronic diagnoses & clinical history notes.
  - Registered Organ & Tissue Donor toggle switch.
- **Health Insurance Policy & Coverage Plan**:
  - Carrier / Payer (Aetna, BlueCross BlueShield, Cigna, Medicare Advantage, UnitedHealthcare).
  - Policy / Member ID and Group Plan Number.
  - Coverage tier (Premier Gold PPO, Platinum VIP, Standard Silver, Senior Complete) and expiration date.
- **Security & Portal Passkey Upgrade**:
  - 4-digit biometric passkey PIN.
  - Two-Factor SMS verification toggle.
- **Real-Time Persistence & Audio Feedback**:
  - Clicking **"Save & Upgrade Profile"** commits changes directly to the persistent demo database, triggers a medical audio chime, issues a confirmation toast, and updates all UI displays simultaneously.
  - **"Reset Demo"** button instantly restores standard demo patient credentials.

### 3. **Digital Smart Health ID Card**
- **Medical Smart Card Aesthetic**: Formatted like a high-tech hospital health passport with holographic sheen, security chip graphic, and HIPAA Level-4 compliance insignia.
- **Emergency Triage QR Matrix**: Embedded SVG QR code simulation for rapid ER check-in.
- **Live Metadata Sync**: Real-time display of patient name, ID, DOB, gender, blood group in a highlighted emergency red tag, primary physician, emergency contact, documented allergies, and insurance policy.
- **Print & Export**: Built-in 1-click "Print ID Card" button calling `window.print()` for physical card generation.

### 4. **Persistent Demo Database Engine (`DemoDB`)**
- **HTML5 Web Storage Engine**: Backed by `localStorage` under key `medicare_plus_database_v3`.
- **Pre-Seeded Clinical Dataset**:
  - **Master Patients Index**: 5 seeded patients (Sarah Jenkins, Robert Miller, Amanda Brooks, David Zimmerman, Linda Gomez) with complete demographics, clinical profiles, insurance, and access control states.
  - **Appointments Table**: Pre-scheduled consultations with doctors, consultation modes (In-Clinic vs Telehealth), and status.
  - **Prescriptions Table**: Active medications with dosage, frequency, days left, and refills remaining.
  - **Diagnostic Reports Table**: Laboratory and echocardiogram results with verified findings.
  - **Audit Logs Table**: Full security audit trail tracking logins, profile upgrades, passkey resets, and admin access changes.
- **Interactive Database Console Panel**:
  - Live metric counters: Total Patients, Consultations, Active Prescriptions, Lab Reports, Audit Logs, and Storage Footprint (KB).
  - **Export Full Database (JSON)**: 1-click dynamic download of the entire database as a formatted `.json` file.
  - **Inject Test Appointment**: Instantly adds a simulated consultation to prove real-time DB reactivity without page reloads.
  - **Factory Reset Demo Database**: Restores the database to clean pristine seed state with alert confirmation.
  - **Live JSON Inspector**: Tabbed code viewer displaying live JSON for *Current Patient*, *Appointments*, *Prescriptions*, *Audit Log*, or *Full DB*.

### 5. **Doctor Profile Photos & Interactive Reference Image Inspector**
- **High-Definition Specialist Headshots**: Ultra-crisp, professional hospital portrait photographs generated and stored locally in `assets/` for all board-certified doctors:
  - **Dr. Marcus Vance, MD, FACC** (`assets/dr_marcus_vance.jpg`) — Head of Cardiology & Vascular Medicine
  - **Dr. Elena Rostova, PhD, ABSM** (`assets/dr_elena_rostova.jpg`) — Director of Neurology & Sleep Medicine
  - **Dr. David Chen, MD, FACE** (`assets/dr_david_chen.jpg`) — Chief Endocrinologist & Diabetologist
  - **Dr. Sarah Al-Mansoor, MD, FACP** (`assets/dr_sarah_al_mansoor.jpg`) — Lead Diagnostician & Inpatient Medical Oversight
- **Click-to-Inspect Reference Modal**: Clicking any doctor's profile picture or **"Reference"** button opens a high-resolution reference image viewer featuring:
  - Crisp full-length clinical portrait photography with "Board-Certified" verification badge and "Active Specialist" glowing indicator.
  - State Medical Faculty ID reference badge (`#MED-FAC-8821`).
  - Key clinical performance KPIs: Years of Clinical Practice, Verified Patient Satisfaction Rating (4.9/5.0), and Total Procedures / Cases Treated.
  - Verified medical school degrees (Harvard, Johns Hopkins, Mayo Clinic, Oxford) and medical college fellowships (FACC, ABSM, FACE, FACP).
  - Hospital campus placement (Pavilion East, Neuro Wing, Metabolic Center, Diagnostic Suite), consultation languages, and available today slot pills.
  - **"Export Credentials PDF"** and 1-click **"Book Consultation"** direct transfer.
- **Unified Doctor Imagery Across the Entire Application**:
  - Specialist Roster Cards with zoom inspection hints and real-time online status indicators.
  - Upcoming Consultations & Appointments list with doctor headshots.
  - Assigned Clinical Care Team panel with attending physician portraits.
  - Outpatient Consultation Booking Modal with active doctor preview portrait and instant change doctor syncing.

### 7. **Admin Appointment Booking Pipeline & Accept/Decline Governance**
- **Real-Time Booking Pipeline**: Whenever a patient books a consultation in the Patient Portal, the appointment request is immediately captured in `DemoDB` and propagated into the Admin Portal in real time.
- **Detailed Patient Booking Information**:
  - Full Patient Profile (Name, ID `#PT-...`, blood group emergency pill, email, phone).
  - Target Specialist (Headshot photo, Doctor name, Clinical department).
  - Appointment Schedule (Date, Time, In-Clinic vs Telehealth mode).
  - **Patient Request Message / Symptoms**: Direct clinical notes and symptoms provided by the patient upon scheduling.
  - Live status tracking (`⏳ Pending Approval`, `✅ Accepted`, `❌ Declined`).
- **Accept and Decline Access Controls**:
  - **Accept Button**: Approves the appointment, updates status to `Accepted`, generates confirmation toast, records audit log in `DemoDB`, and dispatches a rich doctor notification directly to the patient's profile.
  - **Decline Button**: Rejects the consultation request, updates status to `Declined`, logs administrative decision, and notifies the patient with reschedule guidance.
- **Delegated Doctor Profile Login Gateway**:
  - Switcher bar located at the top of the Admin Portal allowing the administrator to **Login as any of the 4 certified hospital doctors** with 1 click:
    - **Dr. Marcus Vance, MD** (Cardiology)
    - **Dr. Elena Rostova, PhD** (Neurology)
    - **Dr. David Chen, MD** (Endocrinology)
    - **Dr. Sarah Al-Mansoor, MD** (Internal Medicine)
  - Dedicated **Doctor Clinical Workspace**:
    - Displays doctor's high-resolution portrait, department, clinic room, and board credentials.
    - **Doctor's Incoming Patient Request Messages Inbox**: Displays individual consultation request messages directed specifically to this specialist.
    - Doctors have direct **Accept**, **Decline**, and **"Send Direct Patient Message"** action buttons with simulated HIPAA-secure chat dispatch.
    - Full today's consultation schedule and patient arrival check-in buttons.
    - 1-click **"Return to Master Admin Console"** shortcut.

### 8. **Patient Profile Doctor Decision Notifications & Live Appointment Synchronization**
- **Instant Decision Alerts with Doctor Profile**:
  - When a doctor or admin accepts an appointment, a prominent alert banner appears in both the **Patient Overview Dashboard** and the **Patient Profile Center**.
  - Includes the doctor's verified portrait photo, specialty, consultation room, and the confirmation notice:
    > *"The appointment is successfully appointed! Dr. [Doctor Name] has accepted and confirmed your consultation on [Date] at [Time]."*
  - Includes 1-click **"Check-in Online"** action, **"View Doctor Profile"** modal trigger, and dismiss button.
  - If declined, displays a polite reschedule notice with a 1-click button to jump directly to the doctor roster to select an alternate slot.
- **Top Navbar Notification Bell & Floating Dropdown**:
  - Interactive notification bell with a dynamic unread counter badge.
  - Clicking opens a high-tech dropdown menu listing all doctor decision messages with doctor headshots, timestamps, and direct profile links.
  - "Mark All as Read" button clears badge counter and updates status in `DemoDB`.
- **Live Upcoming Consultations Status Synchronization**:
  - Patient's "Upcoming Consultations & Appointments" card automatically synchronizes with `DemoDB`.
  - Reflects real-time tags: `✅ Successfully Appointed`, `⏳ Pending Approval`, or `❌ Declined by Doctor`.
  - Displays doctor headshot, appointment mode, patient reason, and administrative/doctor clinical notes.

### 9. **Tablet AI Scanner & Medicine Specification Tool**
- **Optical Tablet Capture Viewport (Live Camera Access)**:
  - Connects to device webcams or mobile cameras via the modern WebRTC `navigator.mediaDevices.getUserMedia` API.
  - Optical targeting reticle with corner brackets, millimeter center crosshairs, live HUD telemetry chips (`1080P OPTICAL`), and an animated high-tech cyan/teal laser sweep line.
  - Controls: **"Open Camera Stream"**, **"Capture & Analyze Tablet"**, and **"Stop Camera"**.
- **Multi-Format Image Upload & Drag-and-Drop Zone**:
  - Direct file picker and drag-and-drop dropzone for tablet images, blister packs, or prescription packaging (PNG, JPG, WEBP).
- **1-Click Clinical Reference Sample Tablets**:
  - Instant evaluation buttons for 6 core hospital pharmaceuticals:
    1. **Metoprolol Tartrate 25mg** (Pink round biconvex • Lopressor®)
    2. **Atorvastatin Calcium 20mg** (White oval biconvex • Lipitor®)
    3. **Amoxicillin Trihydrate 500mg** (Maroon/gold oblong capsule • Amoxil®)
    4. **Metformin HCl 500mg** (White crystalline scored round • Glucophage®)
    5. **Lisinopril 10mg** (Yellow scored round • Prinivil®)
    6. **Azithromycin 250mg** (Rose film-coated oval • Z-Pak®)
- **Deep Clinical Pharmacology Analysis**:
  - **What the Tablet is Used For**: Detailed physiological mechanism of action (e.g. Beta-1 receptor blockade, HMG-CoA reductase inhibition, bacterial PBP cell wall lysis, hepatic gluconeogenesis suppression, ACE inhibition).
  - **Diseases Cured or Treated**: Clear clinical condition cards with severity classifications (e.g. Essential Hypertension, Angina Pectoris, Post-MI Prophylaxis, Dyslipidemia, Acute Otitis Media, Strep Throat, Type 2 Diabetes).
  - **Analyzed Dosage & Clinical Regimen**: Detected tablet strength, recommended adult dosing schedule, maximum daily limits, food intake guidelines, and safety warnings/precautions.
- **Direct Demo Database Synchronization**:
  - **"Save & Add to Patient Prescriptions (Demo DB)"** action button.
  - Instantly commits the scanned medication to `DemoDB.data.prescriptions` for Sarah Jenkins (`#PT-90482`), increments the sidebar active medication counter, dynamically refreshes the Overview medications grid, and logs a verified security audit trail in `DemoDB.data.auditLogs`.
- **Searchable Medicine Specification Library & Pharmacopeia**:
  - Full pharmaceutical reference tool with search and category filters (Cardiology, Lipidology, Antibiotics, Endocrinology).
  - Displays molecular formulas, molecular weights, bioavailability, half-life (t1/2), peak plasma time (Tmax), excretion pathways, and FDA pregnancy safety categories.

### 10. **Ultra-Realistic Medical Aesthetic & Ambient Canvas (Light Theme)**
- **Synchronized Double-Line ECG / EKG Waveform**: Dual-channel electrocardiogram (Lead II in clinical sky cyan + Lead V5 in hospital mint/teal) sweeping across the screen simultaneously on light clinical telemetry chart grid paper with millimeter crosshairs and voltage calibrations.
- **Dynamic Cardiac Lead Cursors & QRS Shockwaves**: Real-time cursor tips with concentric cardiac shockwave rings that expand outwards upon each ventricular QRS heartbeat peak.
- **Floating & Glowing 3D-Depth Medical Plus Symbols**: Layered 3D-depth medical crosses that float smoothly, pulse with clinical light, and respond to mouse parallax.
- **Pristine White Acrylic Glassmorphism**: Translucent panels (`backdrop-filter: blur(24px)`), precision borders, and soft clinical shadows in a clean, legible light theme.

### 6. **Executive Login Portal & Admin Access Governance**
- **Dual-Portal Login Card**: Centered light modal with instant tab switching between **Patient Portal** and **System Admin Portal**.
- **1-Click Quick Demo Fill**: Instant buttons for **✨ Patient** (`sarah.jenkins@medicareplus.org`) and **🛡️ Admin** (`admin@medicareplus.org`).
- **Admin Access Governance**: System administrators can toggle patient access between `Active` and `Suspended` in real-time. If suspended, the patient portal immediately blocks entry with an administrative restriction notice.
- **Granular Privilege Matrix & Passkey Resets**: Configure EHR viewing, Telehealth, Lab downloads, and Rx refill permissions per patient, persisted in `DemoDB`.

### 7. **Medicare Clinical AI Assistant (Automated Backend Data Generation & Clinical Pharmacopeia)**
- **Dedicated Sidebar Menu & Topbar Quick Launch Buttons**:
  - Prominently placed in the sidebar menu list under **CLINICAL NAVIGATION** (`Clinical AI Assistant` with `AI COPILOT` badge) and under **PATIENT TOOLS & UPGRADE** (`AI Doubt Clarifier` with `PATIENT AI` badge).
  - Quick launch button located in the top navigation bar (`🤖 AI Assistant` with a pulsing live status dot).
  - 1-click clinical doubt banner in the Patient Overview Dashboard (`Have Doubts About Your Medications, Dosages, or Symptoms?`).
- **Automated Backend Clinical Data Generation**:
  - Whenever the patient asks a medical question or clicks a doubt prompt requiring medication, the AI Assistant **automatically generates real backend prescription data** in `DemoDB.data.prescriptions`.
  - Assigns unique Rx IDs (e.g. `#RX-AI-3829`), calculates duration days, total days, refills remaining, and logs the indication and NDC code.
  - Automatically persists to HTML5 `localStorage` under `medicare_plus_database_v3`.
  - Automatically triggers `renderPatientMedicationsList()` and `updateSidebarCounters()`, instantly reflecting in the Patient Medications grid and incrementing the active prescription count badge.
  - Generates an official HIPAA security audit trail entry in `DemoDB.data.auditLogs`.
  - Plays a clinical confirmation audio chime (`MedicalAudio.playChime('success')`) and displays a success toast.
- **Auto-Generate Backend Data & Sync Toggle**:
  - Interactive switch toggle located directly in the AI Assistant header (`#toggle-ai-backend-autosync`).
  - Enabled by default for seamless auto-generation; can be toggled off to switch to **Manual 1-Click Sync** fallback mode.
- **100% Clinically Verified Pharmacopeia Engine (Error-Free Prescriptions)**:
  - Maps common clinical queries and diseases to accurate first-line FDA/WHO recommended treatments:
    1. **Fever & Body Aches**: *Acetaminophen (Paracetamol) 500mg* (Safe for hypertensive patients, avoids NSAID renal vasoconstriction).
    2. **Acute Migraine & Tension Headache**: *Ibuprofen 400mg* (with sumatriptan 50mg neurology alternative notes and gastric food rules).
    3. **GERD & Acid Reflux / Heartburn**: *Omeprazole Delayed-Release 20mg* (First-line PPI, 30-60 min before breakfast).
    4. **Bacterial Throat Infection / Pharyngitis**: *Azithromycin 250mg Z-Pak* (Macrolide antibiotic, 100% safe for penicillin/sulfa allergies).
    5. **Essential Hypertension**: *Lisinopril 10mg* (ACE inhibitor, once daily morning arterial control, postural dizziness guidance).
    6. **Type 2 Diabetes**: *Metformin Extended-Release 500mg* (Biguanide, taken with meals to prevent GI distress, fasting target 70-99 mg/dL).
    7. **Urinary Tract Infection (UTI)**: *Nitrofurantoin Monohydrate/Macrocrystals (Macrobid) 100mg* (Sulfa/penicillin-free urinary antibacterial).
    8. **Seasonal Allergies & Hives**: *Cetirizine HCl 10mg* (2nd-generation non-drowsy peripheral H1 receptor blocker).
    9. **Osteoarthritis & Joint Inflammation**: *Naproxen Sodium 220mg* (Long-acting 8-12 hour NSAID taken with food).
    10. **Acute Cough & Bronchial Congestion**: *Dextromethorphan HBr 30mg / Guaifenesin 600mg* (Dual-action antitussive and expectorant).
    11. **Hyperlipidemia / High Cholesterol**: *Atorvastatin Calcium 20mg* (HMG-CoA reductase inhibitor, taken at bedtime).
    12. **Insomnia & Sleep Disturbance**: *Melatonin 3mg* (AASM first-line chronotherapeutic pineal hormone analogue).
- **Allergy Safety Guardian (Anaphylaxis Prevention)**:
  - Continuously cross-references patient Sarah Jenkins' EHR allergies (`DemoDB.data.patients[0].allergies`: `["Penicillin", "Sulfa Drugs", "Latex"]`).
  - Prohibits contraindicated medications (Amoxicillin, Augmentin, Ampicillin, Bactrim) and selects verified non-cross-reactive alternatives, explicitly printing clinical clearance badges (*🛡️ ALLERGY PROTECTED*).
- **Interactive AI Prescription Cards**:
  - Embedded inside AI response bubbles with verified clinical badges, NDC codes, drug name, strength, food rules, and class.
  - Features real-time status: `✅ DemoDB Backend Auto-Generated (Rx ID: #RX-AI-XXXX)` with a direct `[ 📋 View in Medications Table ]` navigation button.
- **Acute Emergency Red-Flag Triage**:
  - Instantly recognizes emergency symptoms (crushing chest pain, shortness of breath, sudden numbness, fainting) and triggers Level-1 Trauma alert guidance with Emergency SOS instructions.

---

## 🚀 How to Run

### Method 1: Instant Direct Launch (No installation required)
Simply double-click `index.html` in your file explorer or open it in any modern web browser:
- [index.html](file:///c:/Users/ELCOT/OneDrive/Documents/Hospital%20management/index.html)

### Method 2: Local HTTP Server (Optional)
If you prefer running via a local web server:

**Using Node.js:**
```bash
node server.js
```
Then visit `http://localhost:3000` in your browser.

---

## 🔑 Demo Credentials

| Role | Username / ID | Password | Access Scope |
| :--- | :--- | :--- | :--- |
| **Patient (Default)** | `sarah.jenkins@medicareplus.org` or `#PT-90482` | `PatientSecure#2026` | Health summary, appointment booking, lab reports, prescriptions, profile upgrade, digital health card |
| **System Administrator** | `admin@medicareplus.org` or `#ADM-001` | `AdminMaster#2026` | Master Patient Directory, account activation/suspension, passkey resets, HIPAA audit logs, emergency lockdown |

*Tip: You can click the **"✨ Patient"** or **"🛡️ Admin"** quick-fill buttons on the login screen to fill in credentials automatically!*

---

## 📁 File Structure

```
Hospital management/
│
├── index.html                   # Semantic HTML5 Application (Executive Login, Sidebar Menu, Patient Dashboard, Profile Upgrade Center, Health Card, Database Console, Admin Portal)
├── README.md                    # Comprehensive project documentation & guide
├── server.js                    # Lightweight local static HTTP server (Port 3000)
├── css/
│   └── style.css                # Clinical light design system, sidebar layout, profile editor, smart card, database console, glassmorphism, responsive queries
└── js/
    ├── background-particles.js  # Canvas engine for DOUBLE-LINE ECG heartbeat waves & glowing medical pluses
    └── app.js                   # Application state, persistent DemoDB engine, sidebar navigation, profile upgrade logic, health card renderer & database console
```

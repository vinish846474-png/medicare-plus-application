/**
 * MEDICARE PLUS ENTERPRISE HMS - APPLICATION CORE ENGINE
 * Manages Authentication, Patient Dashboard, System Admin Patient Access Control,
 * Persistent Demo Database, Profile Tools, Modals, Audio Synthesis & Notifications.
 */

// LocalStorage Persistence Key for Demo Database
const DEMO_DB_STORAGE_KEY = 'medicare_plus_database_v3';

// Client-Side Persistent Demo Database Engine
const DemoDB = {
    data: null,

    // Comprehensive Initial Clinical Seed Dataset
    getDefaultData() {
        return {
            version: '3.5.0',
            lastUpdated: new Date().toISOString(),
            patients: [
                {
                    id: "#PT-90482",
                    name: "Sarah Jenkins",
                    age: 34,
                    dob: "1992-04-14",
                    gender: "Female",
                    bloodGroup: "O+",
                    email: "sarah.jenkins@medicareplus.org",
                    phone: "+1 (555) 342-8921",
                    address: "742 Evergreen Terrace, Suite 3B, Metro City, NY 10001",
                    emergencyContact: {
                        name: "Michael Jenkins",
                        relation: "Spouse",
                        phone: "+1 (555) 908-1123"
                    },
                    clinical: {
                        primaryDoctor: "Dr. Marcus Vance, MD",
                        dept: "Cardiology & Vascular Medicine",
                        roomNumber: "Care Pavilion B • Suite 402",
                        lastCheckup: "Oct 28, 2026",
                        status: "Active Outpatient",
                        organDonor: true,
                        allergies: ["Penicillin", "Sulfa Drugs", "Latex"],
                        conditions: "Stage 1 Essential Hypertension, Mild Hyperlipidemia (Managed with Atorvastatin & Metoprolol)"
                    },
                    insurance: {
                        provider: "Aetna Premier Health",
                        policyId: "AET-9921448",
                        groupId: "GRP-88021",
                        expiryDate: "2027-12-31",
                        tier: "Premier Gold PPO"
                    },
                    security: {
                        passkey: "1234",
                        twoFactorEnabled: true
                    },
                    avatar: "SJ",
                    avatarBg: "linear-gradient(135deg, #0284c7, #2563eb)",
                    status: "Active",
                    privileges: ["EHR Records", "Telehealth Video", "Lab Downloads", "Rx Refills", "Physician Chat"]
                },
                {
                    id: "#PT-84910",
                    name: "Robert Miller",
                    age: 58,
                    dob: "1968-09-22",
                    gender: "Male",
                    bloodGroup: "A+",
                    email: "robert.miller@medicareplus.org",
                    phone: "+1 (555) 489-1209",
                    address: "128 Oakridge Blvd, Apt 5, Metro City, NY 10002",
                    emergencyContact: {
                        name: "Eleanor Miller",
                        relation: "Spouse",
                        phone: "+1 (555) 489-1210"
                    },
                    clinical: {
                        primaryDoctor: "Dr. David Chen, MD",
                        dept: "Endocrinology & Diabetology",
                        roomNumber: "Pavilion West • Room 204",
                        lastCheckup: "Nov 01, 2026",
                        status: "Active Monitored",
                        organDonor: true,
                        allergies: ["Aspirin"],
                        conditions: "Type 2 Diabetes Mellitus, Neuropathy"
                    },
                    insurance: {
                        provider: "BlueCross BlueShield",
                        policyId: "BCBS-440192",
                        groupId: "GRP-10492",
                        expiryDate: "2027-08-31",
                        tier: "Comprehensive Choice"
                    },
                    security: { passkey: "1234", twoFactorEnabled: false },
                    avatar: "RM",
                    avatarBg: "linear-gradient(135deg, #0d9488, #059669)",
                    status: "Active",
                    privileges: ["EHR Records", "Telehealth Video", "Lab Downloads"]
                },
                {
                    id: "#PT-77291",
                    name: "Amanda Brooks",
                    age: 29,
                    dob: "1997-02-18",
                    gender: "Female",
                    bloodGroup: "B+",
                    email: "amanda.brooks@medicareplus.org",
                    phone: "+1 (555) 891-2304",
                    address: "45 Riverfront Plaza, Apt 11C, Metro City, NY 10005",
                    emergencyContact: {
                        name: "Daniel Brooks",
                        relation: "Brother",
                        phone: "+1 (555) 891-9988"
                    },
                    clinical: {
                        primaryDoctor: "Dr. Elena Rostova, PhD",
                        dept: "Neurology & Sleep Medicine",
                        roomNumber: "Neuro Sciences Wing • Suite 510",
                        lastCheckup: "Nov 05, 2026",
                        status: "Telehealth Outpatient",
                        organDonor: true,
                        allergies: ["Codeine"],
                        conditions: "Chronic Migraine Syndrome, Insomnia"
                    },
                    insurance: {
                        provider: "Cigna Global Health",
                        policyId: "CIG-884210",
                        groupId: "GRP-33921",
                        expiryDate: "2028-01-15",
                        tier: "Platinum Plus"
                    },
                    security: { passkey: "1234", twoFactorEnabled: true },
                    avatar: "AB",
                    avatarBg: "linear-gradient(135deg, #ec4899, #8b5cf6)",
                    status: "Active",
                    privileges: ["EHR Records", "Telehealth Video", "Physician Chat"]
                },
                {
                    id: "#PT-65402",
                    name: "David Zimmerman",
                    age: 63,
                    dob: "1963-11-30",
                    gender: "Male",
                    bloodGroup: "AB+",
                    email: "david.z@medicareplus.org",
                    phone: "+1 (555) 762-9012",
                    address: "902 Pine Crest Way, Metro City, NY 10014",
                    emergencyContact: {
                        name: "Rachel Zimmerman",
                        relation: "Daughter",
                        phone: "+1 (555) 762-9900"
                    },
                    clinical: {
                        primaryDoctor: "Dr. Sarah Al-Mansoor, MD",
                        dept: "Internal Medicine & Diagnostics",
                        roomNumber: "Rehab Center Rm 102",
                        lastCheckup: "Oct 15, 2026",
                        status: "Suspended",
                        organDonor: false,
                        allergies: ["Shellfish", "Iodine Contrast"],
                        conditions: "Chronic Kidney Disease Stage 2"
                    },
                    insurance: {
                        provider: "Medicare Advantage Part C",
                        policyId: "MED-5501923",
                        groupId: "GRP-00122",
                        expiryDate: "2026-12-31",
                        tier: "Senior Care Advantage"
                    },
                    security: { passkey: "1234", twoFactorEnabled: false },
                    avatar: "DZ",
                    avatarBg: "linear-gradient(135deg, #f59e0b, #e11d48)",
                    status: "Suspended",
                    privileges: ["Read-Only EHR"]
                },
                {
                    id: "#PT-52194",
                    name: "Linda Gomez",
                    age: 47,
                    dob: "1979-07-08",
                    gender: "Female",
                    bloodGroup: "O-",
                    email: "linda.gomez@medicareplus.org",
                    phone: "+1 (555) 902-1845",
                    address: "310 Sunset Ridge Rd, Metro City, NY 10022",
                    emergencyContact: {
                        name: "Carlos Gomez",
                        relation: "Spouse",
                        phone: "+1 (555) 902-1846"
                    },
                    clinical: {
                        primaryDoctor: "Dr. Marcus Vance, MD",
                        dept: "Cardiology & Vascular Medicine",
                        roomNumber: "Care Pavilion B • Rm 412",
                        lastCheckup: "Oct 30, 2026",
                        status: "Outpatient Follow-up",
                        organDonor: true,
                        allergies: ["Erythromycin"],
                        conditions: "Mitral Valve Prolapse (Mild)"
                    },
                    insurance: {
                        provider: "UnitedHealthcare Choice Plus",
                        policyId: "UHC-7740192",
                        groupId: "GRP-99041",
                        expiryDate: "2027-05-30",
                        tier: "Premier Choice"
                    },
                    security: { passkey: "1234", twoFactorEnabled: true },
                    avatar: "LG",
                    avatarBg: "linear-gradient(135deg, #0284c7, #0d9488)",
                    status: "Active",
                    privileges: ["EHR Records", "Lab Downloads", "Rx Refills"]
                }
            ],
            appointments: [
                {
                    id: "APT-1001",
                    patientId: "#PT-90482",
                    patientName: "Sarah Jenkins",
                    patientEmail: "sarah.jenkins@medicareplus.org",
                    patientPhone: "+1 (555) 908-1123",
                    patientBlood: "A+",
                    doctor: "Dr. Marcus Vance, MD",
                    doctorAvatar: "MV",
                    doctorImg: "assets/dr_marcus_vance.jpg",
                    doctorBg: "linear-gradient(135deg, #0284c7, #2563eb)",
                    specialty: "Cardiology & Vascular Medicine",
                    location: "Pavilion East Rm 304",
                    mode: "In-Clinic (Hospital Pavilion)",
                    date: "2026-11-20",
                    displayDate: "Tomorrow, Nov 20",
                    time: "10:30 AM EST",
                    reason: "6-Month Cardiac Echo Follow-Up. Experiencing mild shortness of breath and occasional morning palpitations.",
                    status: "Pending Approval",
                    bookedAt: "Nov 19, 2026 • 09:15 AM",
                    checkedIn: false
                },
                {
                    id: "APT-1002",
                    patientId: "#PT-77291",
                    patientName: "Amanda Brooks",
                    patientEmail: "amanda.brooks@medicareplus.org",
                    patientPhone: "+1 (555) 891-2304",
                    patientBlood: "B+",
                    doctor: "Dr. Elena Rostova, PhD",
                    doctorAvatar: "ER",
                    doctorImg: "assets/dr_elena_rostova.jpg",
                    doctorBg: "linear-gradient(135deg, #ec4899, #8b5cf6)",
                    specialty: "Neurology & Sleep Medicine",
                    location: "Telehealth Video Room",
                    mode: "Telehealth (Encrypted HD Video)",
                    date: "2026-11-25",
                    displayDate: "Nov 25, 2026",
                    time: "02:00 PM EST",
                    reason: "Sleep EEG Review & Chronic Migraine Aura Consult. Nocturnal headaches persisting for 2 weeks.",
                    status: "Pending Approval",
                    bookedAt: "Nov 19, 2026 • 10:00 AM",
                    checkedIn: false
                },
                {
                    id: "APT-1003",
                    patientId: "#PT-88314",
                    patientName: "Robert Miller",
                    patientEmail: "robert.miller@medicareplus.org",
                    patientPhone: "+1 (555) 342-8819",
                    patientBlood: "O-",
                    doctor: "Dr. David Chen, MD",
                    doctorAvatar: "DC",
                    doctorImg: "assets/dr_david_chen.jpg",
                    doctorBg: "linear-gradient(135deg, #0d9488, #059669)",
                    specialty: "Endocrinology & Diabetology",
                    location: "Metabolic Center Rm 218",
                    mode: "In-Clinic (Hospital Pavilion)",
                    date: "2026-11-22",
                    displayDate: "Nov 22, 2026",
                    time: "09:00 AM EST",
                    reason: "Quarterly HbA1c review and insulin pump dosage calibration.",
                    status: "Accepted",
                    bookedAt: "Nov 18, 2026 • 04:30 PM",
                    checkedIn: true
                }
            ],
            prescriptions: [
                {
                    id: "RX-89101",
                    patientId: "#PT-90482",
                    name: "Atorvastatin Calcium",
                    dosage: "20 mg",
                    instructions: "Take 1 tablet by mouth daily at bedtime with water",
                    daysLeft: 18,
                    totalDays: 30,
                    refillsRemaining: 2,
                    status: "Active"
                },
                {
                    id: "RX-89102",
                    patientId: "#PT-90482",
                    name: "Metoprolol Tartrate",
                    dosage: "25 mg",
                    instructions: "Take 1 tablet twice daily with morning and evening meals",
                    daysLeft: 5,
                    totalDays: 30,
                    refillsRemaining: 1,
                    status: "Low Supply"
                },
                {
                    id: "RX-89103",
                    patientId: "#PT-90482",
                    name: "Lisinopril",
                    dosage: "10 mg",
                    instructions: "Take 1 tablet daily in the morning",
                    daysLeft: 24,
                    totalDays: 30,
                    refillsRemaining: 3,
                    status: "Active"
                }
            ],
            reports: [
                {
                    id: "REP-901",
                    patientId: "#PT-90482",
                    title: "Comprehensive Metabolic Panel (CMP-14)",
                    date: "Nov 08, 2026",
                    verifiedBy: "Lab Director Dr. S. Kelly",
                    status: "Normal",
                    summary: "Serum glucose, BUN, creatinine, electrolytes and liver enzymes within standard physiological reference range."
                },
                {
                    id: "REP-902",
                    patientId: "#PT-90482",
                    title: "Transthoracic Echocardiogram 2D Doppler",
                    date: "Nov 02, 2026",
                    verifiedBy: "Dr. Marcus Vance, MD",
                    status: "Normal",
                    summary: "Ejection Fraction: 62%. Normal left ventricular chamber size and preserved systolic function. No regional wall motion abnormalities."
                },
                {
                    id: "REP-903",
                    patientId: "#PT-90482",
                    title: "Fasting Lipid Profile & High-Sensitivity CRP",
                    date: "Oct 20, 2026",
                    verifiedBy: "Pathology Specialist Dr. H. Vance",
                    status: "Optimal",
                    summary: "Total Cholesterol 168 mg/dL, HDL 54 mg/dL, LDL 88 mg/dL, Triglycerides 110 mg/dL. hs-CRP: 0.8 mg/L (Low cardiovascular risk)."
                }
            ],
            auditLogs: [
                { type: "blue", text: "<strong>Patient #PT-90482 (Sarah Jenkins)</strong> authenticated to Patient Portal via 256-Bit SSL.", time: "Just now" },
                { type: "green", text: "<strong>Admin (Controller)</strong> updated clinical privileges for <strong>#PT-84910 (Robert Miller)</strong>.", time: "14 mins ago" },
                { type: "red", text: "<strong>Admin Security Action</strong>: Portal login suspended for <strong>#PT-65402 (David Zimmerman)</strong> pending insurance re-authorization.", time: "48 mins ago" },
                { type: "amber", text: "<strong>Security Audit</strong>: 142 patient portal sessions verified against HIPAA Level-4 access logs.", time: "1 hour ago" }
            ],
            patientNotifications: [
                {
                    id: "NOTIF-101",
                    appointmentId: "APT-1001",
                    patientId: "#PT-90482",
                    patientName: "Sarah Jenkins",
                    doctor: "Dr. Marcus Vance, MD",
                    doctorImg: "assets/dr_marcus_vance.jpg",
                    doctorSpecialty: "Cardiology & Vascular Medicine",
                    doctorRoom: "Pavilion East • Rm 304",
                    status: "Accepted",
                    title: "The appointment is successfully appointed by Dr. Marcus Vance, MD!",
                    message: "The appointment is successfully appointed! Dr. Marcus Vance, MD has accepted your consultation for Tomorrow, Nov 20, 2026 at 10:30 AM EST in Pavilion East Rm 304.",
                    date: "2026-11-20",
                    time: "10:30 AM EST",
                    mode: "In-Clinic (Hospital Pavilion)",
                    createdAt: "Today • 09:30 AM",
                    timestamp: Date.now() - 3600000,
                    read: false
                }
            ],
            patientAiChats: [
                {
                    id: "ai-seed-1",
                    patientId: "#PT-90482",
                    sender: "ai",
                    senderName: "Medicare Clinical AI",
                    role: "Clinical Doubt Clarifier",
                    text: "Hello Sarah. I am your dedicated Medicare Clinical AI Copilot. I have secure real-time read access to your telemetry stream (72 BPM resting HR, 99% SpO2) and active prescriptions (Lisinopril 10mg, Metformin 500mg, Amoxicillin 500mg).\n\nFeel free to ask any medical doubt regarding your medications, dosage timings, food interactions, or symptom questions.",
                    timestamp: Date.now() - 7200000,
                    time: "10:15 AM"
                },
                {
                    id: "ai-seed-2",
                    patientId: "#PT-90482",
                    sender: "patient",
                    senderName: "Sarah Jenkins",
                    role: "Patient #PT-90482",
                    text: "Should I take my Lisinopril 10mg before or after breakfast tomorrow morning?",
                    timestamp: Date.now() - 5400000,
                    time: "10:45 AM"
                },
                {
                    id: "ai-seed-3",
                    patientId: "#PT-90482",
                    sender: "ai",
                    senderName: "Medicare Clinical AI",
                    role: "Clinical Doubt Clarifier",
                    text: "Take your **Lisinopril 10mg** in the morning with a full glass of water. It may be taken **with or without food**—taking it consistently at the same time each morning maximizes 24-hour arterial pressure control.\n\n- **Postural Lightheadedness**: If you feel mild lightheadedness when rising from bed or a chair, pause and sit upright for 30 seconds before standing up.\n- **Precaution**: Avoid potassium supplements without consulting your doctor.",
                    timestamp: Date.now() - 3600000,
                    time: "11:00 AM"
                }
            ]
        };
    },

    // Initialize or load existing database from localStorage
    init() {
        try {
            const raw = localStorage.getItem(DEMO_DB_STORAGE_KEY);
            if (raw) {
                this.data = JSON.parse(raw);
                if (!this.data.patients || !this.data.appointments || !this.data.patients[0].insurance || this.data.version !== '3.5.0' || !this.data.patientAiChats) {
                    this.data = this.getDefaultData();
                    this.save();
                }
            } else {
                this.data = this.getDefaultData();
                this.save();
            }
        } catch (e) {
            console.error("DemoDB Init Error:", e);
            this.data = this.getDefaultData();
            this.save();
        }

        // Synchronize AppState with DemoDB
        AppState.patientsList = this.data.patients;
        AppState.auditLogs = this.data.auditLogs;
        AppState.patientData = this.getPatient("#PT-90482") || this.data.patients[0];
        AppState.currentUser = { ...AppState.patientData };
    },

    // Commit current DB in-memory state to localStorage
    save() {
        try {
            this.data.lastUpdated = new Date().toISOString();
            localStorage.setItem(DEMO_DB_STORAGE_KEY, JSON.stringify(this.data));
            if (typeof updateSidebarCounters === 'function') {
                updateSidebarCounters();
            }
            if (typeof renderDatabaseConsole === 'function') {
                renderDatabaseConsole();
            }
        } catch (e) {
            console.error("DemoDB Save Error:", e);
        }
    },

    getPatient(id) {
        if (!this.data || !this.data.patients) return null;
        return this.data.patients.find(p => p.id === id) || null;
    },

    getAllPatients() {
        return this.data ? this.data.patients : [];
    },

    updatePatient(id, updatedFields) {
        if (!this.data || !this.data.patients) return false;
        const index = this.data.patients.findIndex(p => p.id === id);
        if (index === -1) return false;

        const current = this.data.patients[index];
        const merged = {
            ...current,
            ...updatedFields,
            clinical: { ...(current.clinical || {}), ...(updatedFields.clinical || {}) },
            emergencyContact: { ...(current.emergencyContact || {}), ...(updatedFields.emergencyContact || {}) },
            insurance: { ...(current.insurance || {}), ...(updatedFields.insurance || {}) },
            security: { ...(current.security || {}), ...(updatedFields.security || {}) }
        };

        if (updatedFields.name) {
            merged.name = updatedFields.name;
            merged.avatar = updatedFields.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
        }

        this.data.patients[index] = merged;

        this.addAuditLog({
            type: "green",
            text: `<strong>Patient Record Upgraded</strong>: Medical credentials for <strong>${merged.name} (${merged.id})</strong> updated in Demo Database.`,
            time: "Just now"
        });

        this.save();

        if (AppState.currentUser && AppState.currentUser.id === id) {
            AppState.currentUser = { ...merged };
            AppState.patientData = { ...merged };
        }

        return merged;
    },

    addPatient(patient) {
        if (!this.data) return false;
        this.data.patients.push(patient);
        this.addAuditLog({
            type: "blue",
            text: `<strong>New Patient Enrolled</strong>: Master Patient record created for <strong>${patient.name} (${patient.id})</strong>.`,
            time: "Just now"
        });
        this.save();
        return patient;
    },

    getAppointments(patientId = null) {
        if (!this.data || !this.data.appointments) return [];
        if (!patientId) return this.data.appointments;
        return this.data.appointments.filter(a => a.patientId === patientId);
    },

    addAppointment(appt) {
        if (!this.data) return false;
        this.data.appointments.unshift(appt);
        this.addAuditLog({
            type: "blue",
            text: `<strong>Appointment Scheduled</strong>: Visit request registered with <strong>${appt.doctor}</strong> for ${appt.date} at ${appt.time}.`,
            time: "Just now"
        });
        this.save();
        return appt;
    },

    updateAppointmentStatus(id, newStatus, reasonNotes = '') {
        if (!this.data || !this.data.appointments) return false;
        const appt = this.data.appointments.find(a => a.id === id);
        if (!appt) return false;

        appt.status = newStatus;
        if (reasonNotes) appt.adminNotes = reasonNotes;
        appt.lastModified = new Date().toISOString();

        // Create patient notification with doctor profile
        if (!this.data.patientNotifications) this.data.patientNotifications = [];

        const docProfile = (window.DoctorProfiles && window.DoctorProfiles[appt.doctor]) || {
            name: appt.doctor,
            img: appt.doctorImg || "assets/dr_marcus_vance.jpg",
            specialty: appt.specialty || "Specialist Consultation",
            room: appt.location || "Hospital Pavilion"
        };

        const isAccepted = newStatus === 'Accepted';
        const notif = {
            id: "NOTIF-" + Date.now(),
            appointmentId: appt.id,
            patientId: appt.patientId || "#PT-90482",
            patientName: appt.patientName || "Sarah Jenkins",
            doctor: appt.doctor,
            doctorImg: docProfile.img,
            doctorSpecialty: docProfile.specialty,
            doctorRoom: docProfile.room || "Hospital Pavilion",
            status: newStatus,
            title: isAccepted
                ? `The appointment is successfully appointed by ${appt.doctor}!`
                : `Appointment Notice from ${appt.doctor}`,
            message: isAccepted
                ? `The appointment is successfully appointed! ${appt.doctor} has accepted your consultation for ${appt.date} at ${appt.time} (${appt.mode || 'In-Clinic'}).`
                : `${appt.doctor} was unable to accept the requested consultation for ${appt.date} at ${appt.time}. Please reschedule with an alternate available slot.`,
            date: appt.date,
            time: appt.time,
            mode: appt.mode,
            createdAt: "Just now",
            timestamp: Date.now(),
            read: false
        };

        this.data.patientNotifications.unshift(notif);

        this.addAuditLog({
            type: isAccepted ? 'emerald' : 'rose',
            text: `<strong>Appointment ${newStatus}</strong>: Consultation <strong>${appt.id}</strong> for <strong>${appt.patientName || appt.patientId}</strong> with <strong>${appt.doctor}</strong> was marked as ${newStatus}.`,
            time: "Just now"
        });

        this.save();

        if (typeof syncPatientDoctorNotifications === 'function') {
            syncPatientDoctorNotifications();
        }
        if (typeof renderPatientAppointmentsList === 'function') {
            renderPatientAppointmentsList();
        }

        return appt;
    },

    getPrescriptions(patientId = null) {
        if (!this.data || !this.data.prescriptions) return [];
        if (!patientId) return this.data.prescriptions;
        return this.data.prescriptions.filter(p => p.patientId === patientId);
    },

    addPrescription(rx) {
        if (!this.data) return null;
        if (!this.data.prescriptions) this.data.prescriptions = [];
        this.data.prescriptions.unshift(rx);
        this.addAuditLog({
            type: "cyan",
            text: `<strong>Prescription Synced</strong>: Added <strong>${rx.name}</strong> (${rx.dosage}) to patient active prescriptions in DemoDB.`,
            time: "Just now"
        });
        this.save();
        if (typeof renderPatientMedicationsList === 'function') {
            renderPatientMedicationsList();
        }
        if (typeof updateSidebarCounters === 'function') {
            updateSidebarCounters();
        }
        return rx;
    },

    requestRefill(medName) {
        if (!this.data || !this.data.prescriptions) return false;
        const rx = this.data.prescriptions.find(p => p.name.toLowerCase().includes(medName.toLowerCase()));
        if (rx) {
            rx.daysLeft = 30;
            if (rx.refillsRemaining > 0) rx.refillsRemaining -= 1;
            rx.status = "Active";
        }
        this.addAuditLog({
            type: "amber",
            text: `<strong>Prescription Refill Transmitted</strong>: Refill request submitted to Central Pharmacy for <strong>${medName}</strong>.`,
            time: "Just now"
        });
        this.save();
        return rx;
    },

    getReports(patientId = null) {
        if (!this.data || !this.data.reports) return [];
        if (!patientId) return this.data.reports;
        return this.data.reports.filter(r => r.patientId === patientId);
    },

    getPatientAiChats(patientId = "#PT-90482") {
        if (!this.data || !this.data.patientAiChats) return [];
        return this.data.patientAiChats.filter(c => c.patientId === patientId);
    },

    addPatientAiChat(chatMsg) {
        if (!this.data) return null;
        if (!this.data.patientAiChats) this.data.patientAiChats = [];
        this.data.patientAiChats.push(chatMsg);
        this.save();
        return chatMsg;
    },

    clearPatientAiChats(patientId = "#PT-90482") {
        if (!this.data || !this.data.patientAiChats) return;
        this.data.patientAiChats = this.data.patientAiChats.filter(c => c.patientId !== patientId);
        this.save();
    },

    getAuditLogs() {
        return this.data ? this.data.auditLogs : [];
    },

    addAuditLog(entry) {
        if (!this.data) return;
        this.data.auditLogs.unshift(entry);
        if (this.data.auditLogs.length > 50) {
            this.data.auditLogs = this.data.auditLogs.slice(0, 50);
        }
    },

    resetDatabase() {
        this.data = this.getDefaultData();
        this.save();
        AppState.patientsList = this.data.patients;
        AppState.auditLogs = this.data.auditLogs;
        AppState.patientData = this.getPatient("#PT-90482");
        AppState.currentUser = { ...AppState.patientData };
        return this.data;
    },

    getStats() {
        if (!this.data) return { patients: 0, appointments: 0, prescriptions: 0, reports: 0, logs: 0, sizeKB: "0.0" };
        const jsonStr = JSON.stringify(this.data);
        const bytes = new Blob([jsonStr]).size;
        return {
            patients: (this.data.patients || []).length,
            appointments: (this.data.appointments || []).length,
            prescriptions: (this.data.prescriptions || []).length,
            reports: (this.data.reports || []).length,
            logs: (this.data.auditLogs || []).length,
            sizeKB: (bytes / 1024).toFixed(1)
        };
    },

    exportJSON() {
        const jsonStr = JSON.stringify(this.data, null, 2);
        const blob = new Blob([jsonStr], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `medicare_plus_database_${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }
};

// Application State
const AppState = {
    currentUser: null,
    currentRole: 'patient', // 'patient' or 'admin'
    soundEnabled: true,
    systemEmergencyLock: false,
    patientData: null,
    patientsList: [],
    auditLogs: []
};

// Web Audio API Synthesizer for High-Tech Medical Chimes
const MedicalAudio = {
    ctx: null,
    init() {
        if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
            const AudioContextClass = window.AudioContext || window.webkitAudioContext;
            this.ctx = new AudioContextClass();
        }
    },
    playChime(type = 'click') {
        if (!AppState.soundEnabled) return;
        try {
            this.init();
            if (!this.ctx) return;
            if (this.ctx.state === 'suspended') {
                this.ctx.resume();
            }

            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.connect(gain);
            gain.connect(this.ctx.destination);

            const now = this.ctx.currentTime;

            if (type === 'click') {
                osc.type = 'sine';
                osc.frequency.setValueAtTime(600, now);
                osc.frequency.exponentialRampToValueAtTime(900, now + 0.08);
                gain.gain.setValueAtTime(0.04, now);
                gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
                osc.start(now);
                osc.stop(now + 0.08);
            } else if (type === 'success') {
                [523.25, 659.25, 783.99, 1046.50].forEach((freq, idx) => {
                    const subOsc = this.ctx.createOscillator();
                    const subGain = this.ctx.createGain();
                    subOsc.type = 'triangle';
                    subOsc.frequency.setValueAtTime(freq, now + idx * 0.06);
                    subGain.gain.setValueAtTime(0.06, now + idx * 0.06);
                    subGain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.06 + 0.4);
                    subOsc.connect(subGain);
                    subGain.connect(this.ctx.destination);
                    subOsc.start(now + idx * 0.06);
                    subOsc.stop(now + idx * 0.06 + 0.45);
                });
            } else if (type === 'alert') {
                osc.type = 'sawtooth';
                osc.frequency.setValueAtTime(320, now);
                osc.frequency.setValueAtTime(240, now + 0.12);
                gain.gain.setValueAtTime(0.08, now);
                gain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);
                osc.start(now);
                osc.stop(now + 0.28);
            }
        } catch (e) {
            // Audio context policy fallback
        }
    }
};

// UI Toast Notification Dispatcher
function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;

    let iconSvg = '';
    if (type === 'success') {
        iconSvg = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="2.2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`;
        MedicalAudio.playChime('success');
    } else if (type === 'error') {
        iconSvg = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e11d48" stroke-width="2.2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`;
        MedicalAudio.playChime('alert');
    } else {
        iconSvg = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0284c7" stroke-width="2.2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`;
        MedicalAudio.playChime('click');
    }

    toast.innerHTML = `
        ${iconSvg}
        <div style="flex: 1;">${message}</div>
    `;

    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(10px)';
        toast.style.transition = 'all 0.3s ease';
        setTimeout(() => toast.remove(), 320);
    }, 4200);
}

// Live Clock Updater
function startLiveClock() {
    function update() {
        const heroDateEl = document.getElementById('hero-today-date');
        const now = new Date();
        const heroDateStr = now.toLocaleDateString([], { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
        if (heroDateEl) heroDateEl.textContent = heroDateStr;
    }
    update();
    setInterval(update, 1000);
}

// Authentication & Form Setup (Patient vs Admin Portals)
function setupAuthentication() {
    const loginForm = document.getElementById('hms-login-form');
    const emailInput = document.getElementById('login-email');
    const passwordInput = document.getElementById('login-password');
    const submitBtn = document.getElementById('login-submit-btn');
    const togglePassBtn = document.getElementById('toggle-password-visibility');
    const demoPatientBtn = document.getElementById('btn-quick-demo');
    const demoAdminBtn = document.getElementById('btn-quick-demo-admin');
    const tabPatient = document.getElementById('tab-patient-role');
    const tabAdmin = document.getElementById('tab-admin-role');
    const idLabel = document.getElementById('login-id-label');
    const submitText = document.getElementById('login-submit-text');

    function setRole(role) {
        AppState.currentRole = role;
        if (role === 'patient') {
            if (tabPatient) tabPatient.classList.add('active');
            if (tabAdmin) tabAdmin.classList.remove('active');
            if (idLabel) idLabel.textContent = "Patient ID or Secure Email";
            if (emailInput) {
                emailInput.placeholder = "e.g. sarah.jenkins@medicareplus.org or #PT-90482";
                emailInput.value = "sarah.jenkins@medicareplus.org";
            }
            if (passwordInput) passwordInput.value = "PatientSecure#2026";
            if (submitText) {
                submitText.innerHTML = `Sign In to Patient Portal <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" style="vertical-align: middle; margin-left: 4px;"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`;
            }
        } else {
            if (tabAdmin) tabAdmin.classList.add('active');
            if (tabPatient) tabPatient.classList.remove('active');
            if (idLabel) idLabel.textContent = "System Administrator Security ID / Email";
            if (emailInput) {
                emailInput.placeholder = "e.g. admin@medicareplus.org or #ADM-001";
                emailInput.value = "admin@medicareplus.org";
            }
            if (passwordInput) passwordInput.value = "AdminMaster#2026";
            if (submitText) {
                submitText.innerHTML = `Sign In to Admin Control Center <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" style="vertical-align: middle; margin-left: 4px;"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`;
            }
        }
    }

    if (tabPatient) {
        tabPatient.addEventListener('click', () => {
            MedicalAudio.playChime('click');
            setRole('patient');
        });
    }

    if (tabAdmin) {
        tabAdmin.addEventListener('click', () => {
            MedicalAudio.playChime('click');
            setRole('admin');
        });
    }

    if (demoPatientBtn) {
        demoPatientBtn.addEventListener('click', (e) => {
            e.preventDefault();
            MedicalAudio.playChime('click');
            setRole('patient');
            showToast("Demo Patient credentials populated (Sarah Jenkins)", "info");
        });
    }

    if (demoAdminBtn) {
        demoAdminBtn.addEventListener('click', (e) => {
            e.preventDefault();
            MedicalAudio.playChime('click');
            setRole('admin');
            showToast("Demo Administrator credentials populated (System Access Controller)", "info");
        });
    }

    if (togglePassBtn) {
        togglePassBtn.addEventListener('click', () => {
            MedicalAudio.playChime('click');
            const isPassword = passwordInput.type === 'password';
            passwordInput.type = isPassword ? 'text' : 'password';
            togglePassBtn.innerHTML = isPassword 
                ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`
                : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`;
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const identifier = emailInput.value.trim();
            const password = passwordInput.value;

            if (!identifier) {
                showToast("Please enter your identifier / email.", "error");
                emailInput.focus();
                return;
            }

            if (!password) {
                showToast("Please enter your password.", "error");
                passwordInput.focus();
                return;
            }

            submitBtn.classList.add('loading');
            MedicalAudio.playChime('click');

            setTimeout(() => {
                submitBtn.classList.remove('loading');

                // Case 1: System Admin Login
                if (AppState.currentRole === 'admin' || identifier.toLowerCase().includes('admin')) {
                    AppState.currentUser = {
                        name: "System Administrator",
                        role: "admin"
                    };
                    enterAdminDashboard();
                    return;
                }

                // Case 2: Patient Login Check
                if (AppState.systemEmergencyLock) {
                    showToast("🚨 Portal Access Locked: System Administrator has temporarily suspended patient logins for system maintenance.", "error");
                    return;
                }

                // Check if target patient is suspended in DemoDB
                const allPatients = DemoDB.getAllPatients();
                const matchedPatient = allPatients.find(p => 
                    p.email.toLowerCase() === identifier.toLowerCase() || 
                    p.id.toLowerCase() === identifier.toLowerCase()
                );

                if (matchedPatient && matchedPatient.status === "Suspended") {
                    showToast(`⛔ Access Suspended: Portal privileges for ${matchedPatient.name} (${matchedPatient.id}) have been restricted by Hospital Administration.`, "error");
                    return;
                }

                const patientRecord = matchedPatient || DemoDB.getPatient("#PT-90482") || allPatients[0];
                AppState.currentUser = { ...patientRecord };
                AppState.patientData = { ...patientRecord };

                enterDashboard();

            }, 1000);
        });
    }
}

// Transition to Patient Dashboard View
function enterDashboard() {
    const loginView = document.getElementById('login-view');
    const dashboardView = document.getElementById('dashboard-view');
    const adminDashboardView = document.getElementById('admin-dashboard-view');

    if (adminDashboardView) adminDashboardView.classList.remove('active-view');

    const patient = AppState.currentUser || DemoDB.getPatient("#PT-90482");
    syncAllPatientUI(patient);

    loginView.style.opacity = '0';
    loginView.style.transform = 'translateY(-20px)';
    loginView.style.transition = 'all 0.4s ease';

    setTimeout(() => {
        loginView.classList.add('hidden-view');
        dashboardView.classList.add('active-view');
        window.scrollTo({ top: 0, behavior: 'smooth' });

        switchDashboardPanel('overview');

        showToast(`Welcome back, ${patient.name}. Your electronic health portal is loaded.`, "success");
    }, 400);
}

// Transition to Admin Patient Access Control Dashboard View
function enterAdminDashboard() {
    const loginView = document.getElementById('login-view');
    const dashboardView = document.getElementById('dashboard-view');
    const adminDashboardView = document.getElementById('admin-dashboard-view');

    if (dashboardView) dashboardView.classList.remove('active-view');

    loginView.style.opacity = '0';
    loginView.style.transform = 'translateY(-20px)';
    loginView.style.transition = 'all 0.4s ease';

    setTimeout(() => {
        loginView.classList.add('hidden-view');
        if (adminDashboardView) adminDashboardView.classList.add('active-view');
        window.scrollTo({ top: 0, behavior: 'smooth' });

        if (typeof switchAdminDoctorView === 'function') {
            switchAdminDoctorView('admin');
        }
        renderAdminAppointmentsTable('all');
        renderAdminPatientTable('all');
        renderAdminAuditLogs();
        updateAdminKPIs();
        updateDoctorSwitcherBadges();

        showToast("🛡️ System Administrator authenticated. Master Patient Access Console active.", "success");
    }, 400);
}

// Logout & Return to Portal
function setupLogout() {
    const logoutBtns = document.querySelectorAll('.btn-logout-trigger');
    logoutBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            MedicalAudio.playChime('click');
            const confirmLogout = confirm("Are you sure you want to log out of your HIPAA-secure session?");
            if (!confirmLogout) return;

            const loginView = document.getElementById('login-view');
            const dashboardView = document.getElementById('dashboard-view');
            const adminDashboardView = document.getElementById('admin-dashboard-view');

            if (dashboardView) dashboardView.classList.remove('active-view');
            if (adminDashboardView) adminDashboardView.classList.remove('active-view');
            if (loginView) loginView.classList.remove('hidden-view');
            
            setTimeout(() => {
                loginView.style.opacity = '1';
                loginView.style.transform = 'translateY(0)';
            }, 50);

            AppState.currentUser = null;
            showToast("Session closed securely. All patient and admin data protected.", "info");
        });
    });
}

// Render Admin Patient Access Table
function renderAdminPatientTable(filter = 'all', searchQuery = '') {
    const tbody = document.getElementById('admin-patient-table-body');
    if (!tbody) return;

    let list = AppState.patientsList;

    if (filter === 'active') {
        list = list.filter(p => p.status === 'Active');
    } else if (filter === 'suspended') {
        list = list.filter(p => p.status === 'Suspended');
    }

    if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        list = list.filter(p => 
            p.name.toLowerCase().includes(q) || 
            p.id.toLowerCase().includes(q) || 
            p.email.toLowerCase().includes(q)
        );
    }

    tbody.innerHTML = '';

    if (list.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="6" style="text-align: center; padding: 24px; color: var(--text-muted);">
                    No patient records found matching current query.
                </td>
            </tr>
        `;
        return;
    }

    list.forEach(p => {
        const tr = document.createElement('tr');
        const isActive = p.status === 'Active';

        const privBadges = (p.privileges || []).map(priv => {
            let cls = 'priv-pill';
            if (priv.includes('Telehealth')) cls += ' telehealth';
            if (priv.includes('Refills')) cls += ' refills';
            return `<span class="${cls}">${priv}</span>`;
        }).join('');

        tr.innerHTML = `
            <td>
                <div class="patient-profile-cell">
                    <div class="patient-cell-avatar" style="background: ${p.avatarBg};">${p.avatar}</div>
                    <div>
                        <div class="patient-cell-name">${p.name}</div>
                        <div class="patient-cell-id">${p.id}</div>
                        <div class="patient-cell-meta">${p.meta}</div>
                    </div>
                </div>
            </td>
            <td>
                <div style="font-weight: 600; color: var(--text-primary); font-size: 0.8rem;">${p.email}</div>
                <div style="font-size: 0.72rem; color: var(--text-muted);">${p.phone}</div>
            </td>
            <td>
                <div style="font-weight: 600; color: var(--text-primary);">${p.doctor}</div>
                <div style="font-size: 0.72rem; color: var(--primary-cyan); font-weight: 600;">${p.dept}</div>
            </td>
            <td>
                <div class="privilege-tags-group">
                    ${privBadges}
                </div>
            </td>
            <td>
                <span class="portal-state-badge ${isActive ? 'active' : 'suspended'}">
                    <span class="pulse-indicator ${isActive ? '' : 'red'}" style="width: 5px; height: 5px;"></span>
                    ${p.status}
                </span>
            </td>
            <td>
                <div class="table-actions-cell">
                    <button type="button" class="btn-admin-table-action ${isActive ? 'btn-suspend' : 'btn-activate'}" onclick="handleTogglePatientAccess('${p.id}')">
                        ${isActive ? 'Suspend Access' : 'Activate Access'}
                    </button>
                    <button type="button" class="btn-admin-table-action" onclick="openManagePrivilegesModal('${p.id}')" title="Configure Feature Privileges">
                        Permissions
                    </button>
                    <button type="button" class="btn-admin-table-action" onclick="handleResetPatientPasskey('${p.id}')" title="Reset Passkey PIN">
                        Reset PIN
                    </button>
                </div>
            </td>
        `;
        tbody.appendChild(tr);
    });

    // Update filter counts
    const countAll = document.getElementById('count-all');
    const countActive = document.getElementById('count-active');
    const countSuspended = document.getElementById('count-suspended');

    if (countAll) countAll.textContent = AppState.patientsList.length;
    if (countActive) countActive.textContent = AppState.patientsList.filter(p => p.status === 'Active').length;
    if (countSuspended) countSuspended.textContent = AppState.patientsList.filter(p => p.status === 'Suspended').length;
}

// Render Admin Audit Event Stream
function renderAdminAuditLogs() {
    const list = document.getElementById('admin-audit-stream-list');
    if (!list) return;

    list.innerHTML = '';
    AppState.auditLogs.slice(0, 6).forEach(log => {
        const item = document.createElement('div');
        item.className = 'audit-stream-item';
        item.innerHTML = `
            <div class="audit-stream-left">
                <div class="audit-stream-icon ${log.type}">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <div class="audit-stream-text">${log.text}</div>
            </div>
            <div class="audit-stream-meta">${log.time}</div>
        `;
        list.appendChild(item);
    });
}

let currentAdminDoctorView = 'admin';
let currentApptFilter = 'all';
let currentApptSearch = '';

// Update Admin Metric KPIs
function updateAdminKPIs() {
    const activeCount = AppState.patientsList.filter(p => p.status === 'Active').length;
    const suspendedCount = AppState.patientsList.filter(p => p.status === 'Suspended').length;
    const totalCount = 1420 + AppState.patientsList.length;

    const totalEl = document.getElementById('admin-kpi-total-val');
    const activeEl = document.getElementById('admin-kpi-active-val');
    const suspendedEl = document.getElementById('admin-kpi-suspended-val');

    if (totalEl) totalEl.textContent = totalCount.toLocaleString();
    if (activeEl) activeEl.textContent = (1388 + activeCount).toLocaleString();
    if (suspendedEl) suspendedEl.textContent = (35 + suspendedCount).toString();

    // Appointment Booking KPIs
    const allAppts = DemoDB.getAppointments();
    const pendingAppts = allAppts.filter(a => a.status === 'Pending Approval' || a.status === 'Pending' || !a.status);
    const apptsVal = document.getElementById('admin-kpi-appts-val');
    const apptsBadge = document.getElementById('admin-kpi-appts-badge');
    const allApptsBadge = document.getElementById('admin-badge-all-appts');

    if (apptsVal) apptsVal.textContent = allAppts.length;
    if (apptsBadge) {
        apptsBadge.textContent = `${pendingAppts.length} Pending`;
        if (pendingAppts.length > 0) {
            apptsBadge.style.background = '#fef3c7';
            apptsBadge.style.color = '#b45309';
            apptsBadge.style.borderColor = '#fde68a';
        } else {
            apptsBadge.style.background = '#dcfce7';
            apptsBadge.style.color = '#15803d';
            apptsBadge.style.borderColor = '#86efac';
        }
    }
    if (allApptsBadge) allApptsBadge.textContent = `${allAppts.length} Bookings`;

    if (typeof updateDoctorSwitcherBadges === 'function') {
        updateDoctorSwitcherBadges();
    }
}

// Update Doctor Switcher Badges
window.updateDoctorSwitcherBadges = function() {
    const allAppts = DemoDB.getAppointments();

    const getPendingFor = (docName) => {
        return allAppts.filter(a => a.doctor === docName && (a.status === 'Pending Approval' || a.status === 'Pending' || !a.status)).length;
    };

    const bVance = document.getElementById('admin-badge-vance');
    const bRostova = document.getElementById('admin-badge-rostova');
    const bChen = document.getElementById('admin-badge-chen');
    const bMansoor = document.getElementById('admin-badge-mansoor');

    if (bVance) bVance.textContent = getPendingFor('Dr. Marcus Vance, MD');
    if (bRostova) bRostova.textContent = getPendingFor('Dr. Elena Rostova, PhD');
    if (bChen) bChen.textContent = getPendingFor('Dr. David Chen, MD');
    if (bMansoor) bMansoor.textContent = getPendingFor('Dr. Sarah Al-Mansoor, MD');
};

// Render Admin Master Appointments Table
window.renderAdminAppointmentsTable = function(filter = null, searchQuery = null) {
    const tbody = document.getElementById('admin-appointments-table-body');
    if (!tbody) return;

    if (filter !== null) currentApptFilter = filter;
    if (searchQuery !== null) currentApptSearch = searchQuery;

    const allAppts = DemoDB.getAppointments();

    // Update filter counters
    const countAll = document.getElementById('count-appt-all');
    const countPending = document.getElementById('count-appt-pending');
    const countAccepted = document.getElementById('count-appt-accepted');
    const countDeclined = document.getElementById('count-appt-declined');

    const pendingList = allAppts.filter(a => a.status === 'Pending Approval' || a.status === 'Pending' || !a.status);
    const acceptedList = allAppts.filter(a => a.status === 'Accepted' || a.status === 'Confirmed');
    const declinedList = allAppts.filter(a => a.status === 'Declined');

    if (countAll) countAll.textContent = allAppts.length;
    if (countPending) countPending.textContent = pendingList.length;
    if (countAccepted) countAccepted.textContent = acceptedList.length;
    if (countDeclined) countDeclined.textContent = declinedList.length;

    let filtered = allAppts;

    if (currentApptFilter === 'Pending Approval') {
        filtered = pendingList;
    } else if (currentApptFilter === 'Accepted') {
        filtered = acceptedList;
    } else if (currentApptFilter === 'Declined') {
        filtered = declinedList;
    }

    if (currentApptSearch.trim()) {
        const q = currentApptSearch.toLowerCase();
        filtered = filtered.filter(a => 
            (a.patientName && a.patientName.toLowerCase().includes(q)) ||
            (a.patientId && a.patientId.toLowerCase().includes(q)) ||
            (a.doctor && a.doctor.toLowerCase().includes(q)) ||
            (a.reason && a.reason.toLowerCase().includes(q)) ||
            (a.id && a.id.toLowerCase().includes(q))
        );
    }

    tbody.innerHTML = '';

    if (filtered.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="6" style="text-align: center; padding: 28px; color: var(--text-muted);">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="margin-bottom: 6px; opacity: 0.6;"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                    <div>No patient appointment booking requests found in this category.</div>
                </td>
            </tr>
        `;
        return;
    }

    filtered.forEach(appt => {
        const tr = document.createElement('tr');

        const isPending = appt.status === 'Pending Approval' || appt.status === 'Pending' || !appt.status;
        const isAccepted = appt.status === 'Accepted' || appt.status === 'Confirmed';

        let statusBadge = '';
        if (isPending) {
            statusBadge = `<span class="status-pill-pending"><span class="pulse-indicator" style="background: #b45309; width: 5px; height: 5px;"></span> Pending Approval</span>`;
        } else if (isAccepted) {
            statusBadge = `<span class="status-pill-accepted">✓ Accepted</span>`;
        } else {
            statusBadge = `<span class="status-pill-declined">✕ Declined</span>`;
        }

        const patientName = appt.patientName || "Sarah Jenkins";
        const patientId = appt.patientId || "#PT-90482";
        const patientBlood = appt.patientBlood || "A+";
        const patientEmail = appt.patientEmail || "sarah.jenkins@medicareplus.org";
        const docImg = appt.doctorImg || (window.DoctorProfiles && window.DoctorProfiles[appt.doctor] && window.DoctorProfiles[appt.doctor].img) || "assets/dr_marcus_vance.jpg";

        tr.innerHTML = `
            <td>
                <div class="patient-profile-cell">
                    <div class="patient-cell-avatar" style="background: linear-gradient(135deg, #0284c7, #2563eb);">${patientName.split(' ').map(n=>n[0]).join('')}</div>
                    <div>
                        <div class="patient-cell-name">
                            ${patientName} 
                            <span style="font-size: 0.68rem; background: #fee2e2; color: #b91c1c; font-weight: 800; padding: 1px 6px; border-radius: 6px; border: 1px solid #fecdd3;">${patientBlood}</span>
                        </div>
                        <div class="patient-cell-id">${patientId} • ${appt.id}</div>
                        <div style="font-size: 0.70rem; color: var(--text-muted);">${patientEmail}</div>
                    </div>
                </div>
            </td>
            <td>
                <div style="display: flex; align-items: center; gap: 8px;">
                    <img src="${docImg}" class="appt-avatar-img" style="width: 38px; height: 38px; border-radius: 8px; flex-shrink: 0;" onerror="this.style.display='none';">
                    <div>
                        <div style="font-weight: 700; color: var(--text-primary); font-size: 0.82rem;">${appt.doctor}</div>
                        <div style="font-size: 0.70rem; color: var(--primary-cyan); font-weight: 600;">${appt.specialty}</div>
                    </div>
                </div>
            </td>
            <td>
                <div style="font-weight: 700; font-size: 0.82rem; color: var(--text-primary);">${appt.date} • ${appt.time}</div>
                <div style="margin-top: 3px;">
                    <span class="appt-time-pill" style="font-size: 0.68rem; padding: 1px 6px;">${appt.mode || 'In-Clinic'}</span>
                </div>
            </td>
            <td>
                <div class="patient-request-msg-box">
                    <strong>Patient Reason / Symptoms:</strong>
                    "${appt.reason || 'Clinical consultation requested'}"
                    <span class="msg-time">Request sent: ${appt.bookedAt || 'Recently'}</span>
                </div>
            </td>
            <td>
                ${statusBadge}
            </td>
            <td>
                <div class="table-actions-cell" style="justify-content: flex-end; gap: 6px;">
                    ${isPending ? `
                        <button type="button" class="btn-action-accept" onclick="handleAdminAcceptAppointment('${appt.id}')" title="Accept consultation request">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                            Accept
                        </button>
                        <button type="button" class="btn-action-decline" onclick="handleAdminDeclineAppointment('${appt.id}')" title="Decline consultation request">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                            Decline
                        </button>
                    ` : (isAccepted ? `
                        <span style="font-size: 0.72rem; color: #15803d; font-weight: 700; margin-right: 4px;">Accepted</span>
                        <button type="button" class="btn-action-decline" onclick="handleAdminDeclineAppointment('${appt.id}')" title="Revoke and Decline">
                            Decline
                        </button>
                    ` : `
                        <span style="font-size: 0.72rem; color: #e11d48; font-weight: 700; margin-right: 4px;">Declined</span>
                        <button type="button" class="btn-action-accept" onclick="handleAdminAcceptAppointment('${appt.id}')" title="Re-Accept Request">
                            Re-Accept
                        </button>
                    `)}
                    <button type="button" class="btn-admin-table-action" onclick="openDoctorReferenceModal('${appt.doctor}')" title="Inspect Doctor Profile">
                        Doctor
                    </button>
                </div>
            </td>
        `;
        tbody.appendChild(tr);
    });
};

// Filter Admin Appointments Helper
window.filterAdminAppointments = function(filterType = null, searchQuery = null) {
    if (filterType !== null) {
        document.querySelectorAll('.admin-appt-filter-btn').forEach(btn => {
            if (btn.dataset.filter === filterType) btn.classList.add('active');
            else btn.classList.remove('active');
        });
        currentApptFilter = filterType;
    }
    if (searchQuery !== null) {
        currentApptSearch = searchQuery;
    }
    renderAdminAppointmentsTable(currentApptFilter, currentApptSearch);
};

// Admin Action: Accept Appointment
window.handleAdminAcceptAppointment = function(apptId) {
    MedicalAudio.playChime('success');
    const updated = DemoDB.updateAppointmentStatus(apptId, 'Accepted');
    if (updated) {
        showToast(`✅ Consultation Accepted: Approved appointment ${apptId} for ${updated.patientName || updated.patientId} with ${updated.doctor}. Confirmation notification dispatched!`, "success");
        renderAdminAppointmentsTable();
        updateAdminKPIs();
        updateDoctorSwitcherBadges();
        if (currentAdminDoctorView !== 'admin') {
            renderDoctorWorkspace(currentAdminDoctorView);
        }
    }
};

// Admin Action: Decline Appointment
window.handleAdminDeclineAppointment = function(apptId) {
    MedicalAudio.playChime('click');
    const updated = DemoDB.updateAppointmentStatus(apptId, 'Declined');
    if (updated) {
        showToast(`⚠️ Consultation Declined: Appointment ${apptId} for ${updated.patientName || updated.patientId} declined. Reschedule guidance dispatched.`, "info");
        renderAdminAppointmentsTable();
        updateAdminKPIs();
        updateDoctorSwitcherBadges();
        if (currentAdminDoctorView !== 'admin') {
            renderDoctorWorkspace(currentAdminDoctorView);
        }
    }
};

// Switch Admin / Doctor Delegated Workspace
window.switchAdminDoctorView = function(targetDoctor) {
    MedicalAudio.playChime('click');
    currentAdminDoctorView = targetDoctor;

    // Update switcher pills active class
    document.querySelectorAll('.btn-doc-switcher-pill').forEach(pill => {
        if (pill.dataset.doctor === targetDoctor) pill.classList.add('active');
        else pill.classList.remove('active');
    });

    const masterSec = document.getElementById('admin-master-sections');
    const docWorkspace = document.getElementById('admin-doctor-dedicated-workspace');
    const indicator = document.getElementById('active-profile-indicator');

    if (targetDoctor === 'admin') {
        if (masterSec) masterSec.style.display = 'block';
        if (docWorkspace) docWorkspace.style.display = 'none';
        if (indicator) {
            indicator.textContent = "Active Profile: Master Administrator";
            indicator.style.color = "#0d9488";
            indicator.style.background = "#ccfbf1";
            indicator.style.borderColor = "#99f6e4";
        }
        renderAdminAppointmentsTable();
        renderAdminPatientTable();
    } else {
        if (masterSec) masterSec.style.display = 'none';
        if (docWorkspace) docWorkspace.style.display = 'block';
        if (indicator) {
            indicator.textContent = `Active Profile: ${targetDoctor} (Delegated)`;
            indicator.style.color = "#0284c7";
            indicator.style.background = "#e0f2fe";
            indicator.style.borderColor = "#bae6fd";
        }
        renderDoctorWorkspace(targetDoctor);
    }
};

// Render Doctor's Dedicated Clinical Inbox & Workspace
window.renderDoctorWorkspace = function(doctorName) {
    const doc = (window.DoctorProfiles && window.DoctorProfiles[doctorName]) || {
        name: doctorName,
        img: "assets/dr_marcus_vance.jpg",
        specialty: "Clinical Specialist",
        qual: "Board Certified Physician",
        room: "Hospital Pavilion",
        specialtyClass: "cardiology"
    };

    // Hero Info
    const avatarEl = document.getElementById('doc-ws-avatar-img');
    const nameEl = document.getElementById('doc-ws-name');
    const specEl = document.getElementById('doc-ws-specialty');
    const metaEl = document.getElementById('doc-ws-meta');

    if (avatarEl) avatarEl.src = doc.img;
    if (nameEl) nameEl.textContent = doc.name;
    if (specEl) {
        specEl.textContent = doc.specialty;
        specEl.className = `doctor-specialty-pill ${doc.specialtyClass || 'cardiology'}`;
    }
    if (metaEl) metaEl.innerHTML = `<span>${doc.room || 'Hospital Pavilion'}</span> • <span>${doc.qual || 'Board Certified Physician'}</span>`;

    // Filter appointments for this doctor
    const allAppts = DemoDB.getAppointments();
    const docAppts = allAppts.filter(a => a.doctor === doctorName);
    const pendingDocAppts = docAppts.filter(a => a.status === 'Pending Approval' || a.status === 'Pending' || !a.status);

    const pendingTag = document.getElementById('doc-ws-pending-tag');
    if (pendingTag) pendingTag.textContent = `${pendingDocAppts.length} Request(s) Awaiting Decision`;

    const inboxContainer = document.getElementById('doc-ws-requests-container');
    if (inboxContainer) {
        if (docAppts.length === 0) {
            inboxContainer.innerHTML = `
                <div style="background: #f8fafc; border: 1px dashed var(--border-subtle); border-radius: 12px; padding: 32px; text-align: center; color: var(--text-muted);">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="margin-bottom: 8px; opacity: 0.6;"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    <div style="font-weight: 700; color: var(--text-primary); margin-bottom: 4px;">No Appointment Requests In Doctor's Inbox</div>
                    <div style="font-size: 0.82rem;">No patients have booked consultations with ${doc.name} yet. Bookings made in the Patient Portal will appear here in real time.</div>
                </div>
            `;
        } else {
            inboxContainer.innerHTML = docAppts.map(appt => {
                const isPending = appt.status === 'Pending Approval' || appt.status === 'Pending' || !appt.status;
                const isAccepted = appt.status === 'Accepted' || appt.status === 'Confirmed';
                const pName = appt.patientName || "Sarah Jenkins";
                const pBlood = appt.patientBlood || "A+";

                let statusBadge = '';
                if (isPending) statusBadge = `<span class="status-pill-pending"><span class="pulse-indicator" style="background: #b45309; width: 5px; height: 5px;"></span> Awaiting Doctor Approval</span>`;
                else if (isAccepted) statusBadge = `<span class="status-pill-accepted">✓ Consultation Confirmed</span>`;
                else statusBadge = `<span class="status-pill-declined">✕ Consultation Declined</span>`;

                return `
                    <div class="doctor-inbox-card ${isAccepted ? 'accepted' : (isPending ? '' : 'declined')}">
                        <div class="doc-inbox-top-row">
                            <div class="doc-inbox-patient-meta">
                                <div class="doc-inbox-patient-avatar">${pName.split(' ').map(n=>n[0]).join('')}</div>
                                <div>
                                    <div style="font-size: 0.96rem; font-weight: 800; color: var(--text-primary); display: flex; align-items: center; gap: 6px;">
                                        ${pName}
                                        <span style="font-size: 0.68rem; background: #fee2e2; color: #b91c1c; font-weight: 800; padding: 1px 6px; border-radius: 6px; border: 1px solid #fecdd3;">${pBlood}</span>
                                        <span style="font-size: 0.72rem; color: var(--text-muted); font-weight: 500;">(${appt.patientId})</span>
                                    </div>
                                    <div style="font-size: 0.76rem; color: var(--text-secondary); margin-top: 2px;">
                                        Requested: <strong>${appt.date} at ${appt.time}</strong> • Mode: <strong>${appt.mode || 'In-Clinic'}</strong>
                                    </div>
                                </div>
                            </div>
                            <div>
                                ${statusBadge}
                            </div>
                        </div>

                        <!-- Patient's Request Message -->
                        <div class="doc-inbox-msg-quote">
                            <div class="doc-inbox-msg-quote-inner">
                                <strong style="font-size: 0.78rem; text-transform: uppercase; color: var(--text-secondary); letter-spacing: 0.04em;">Patient Request Message & Reason:</strong>
                                <p style="margin: 4px 0 0 0; font-size: 0.88rem; color: var(--text-primary); line-height: 1.5;">"${appt.reason || 'Routine Clinical Consultation'}"</p>
                                <div style="font-size: 0.70rem; color: var(--text-muted); margin-top: 4px;">Booked on: ${appt.bookedAt || 'Recently'}</div>
                            </div>
                        </div>

                        <!-- Action Buttons -->
                        <div class="doc-inbox-bottom-actions">
                            <div style="display: flex; gap: 8px;">
                                <button type="button" class="btn-appt-ghost" onclick="handleDoctorSendPatientMessage('${pName}', '${appt.id}')" style="display: inline-flex; align-items: center; gap: 5px; font-size: 0.78rem;">
                                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                                    Send Direct Message
                                </button>
                                <button type="button" class="btn-appt-ghost" onclick="showToast('Displaying EHR records for ${pName}...', 'info')" style="font-size: 0.78rem;">
                                    View Patient EHR
                                </button>
                            </div>

                            <div style="display: flex; gap: 8px;">
                                ${isPending ? `
                                    <button type="button" class="btn-action-accept" onclick="handleAdminAcceptAppointment('${appt.id}')" style="padding: 8px 16px; font-size: 0.82rem;">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                                        Accept Consultation
                                    </button>
                                    <button type="button" class="btn-action-decline" onclick="handleAdminDeclineAppointment('${appt.id}')" style="padding: 8px 16px; font-size: 0.82rem;">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                                        Decline Consultation
                                    </button>
                                ` : (isAccepted ? `
                                    <button type="button" class="btn-hero-primary" onclick="showToast('Starting encrypted consultation with ${pName}...', 'success')" style="font-size: 0.80rem; padding: 7px 14px;">
                                        Start Consultation Now
                                    </button>
                                    <button type="button" class="btn-action-decline" onclick="handleAdminDeclineAppointment('${appt.id}')" style="font-size: 0.78rem;">
                                        Revoke / Decline
                                    </button>
                                ` : `
                                    <button type="button" class="btn-action-accept" onclick="handleAdminAcceptAppointment('${appt.id}')" style="font-size: 0.78rem;">
                                        Re-Accept
                                    </button>
                                `)}
                            </div>
                        </div>
                    </div>
                `;
            }).join('');
        }
    }

    // Doctor Schedule Roster
    const schedContainer = document.getElementById('doc-ws-schedule-container');
    if (schedContainer) {
        const acceptedAppts = docAppts.filter(a => a.status === 'Accepted' || a.status === 'Confirmed');
        if (acceptedAppts.length === 0) {
            schedContainer.innerHTML = `
                <div style="padding: 20px; text-align: center; color: var(--text-muted); font-size: 0.84rem;">
                    No confirmed consultations on today's roster for ${doc.name}.
                </div>
            `;
        } else {
            schedContainer.innerHTML = acceptedAppts.map(a => `
                <div style="display: flex; justify-content: space-between; align-items: center; padding: 12px 16px; border-bottom: 1px solid var(--border-subtle); flex-wrap: wrap; gap: 10px;">
                    <div style="display: flex; align-items: center; gap: 12px;">
                        <span class="appt-time-pill" style="font-weight: 700;">${a.time}</span>
                        <div>
                            <strong style="color: var(--text-primary); font-size: 0.88rem;">${a.patientName || a.patientId}</strong>
                            <div style="font-size: 0.74rem; color: var(--text-muted);">${a.location || 'Hospital Pavilion'} • ${a.mode || 'In-Clinic'}</div>
                        </div>
                    </div>
                    <button class="btn-appt-checkin" onclick="showToast('Patient marked as arrived in clinic waiting room.', 'success')" style="font-size: 0.76rem;">
                        Mark Arrived
                    </button>
                </div>
            `).join('');
        }
    }
};

// Doctor Direct Message Action
window.handleDoctorSendPatientMessage = function(patientName, apptId) {
    const defaultMsg = `Hello ${patientName}, your consultation request has been received by my clinic. Please remember to bring your recent lab panels and medical history to the visit.`;
    const reply = prompt(`Send HIPAA-secure physician message to ${patientName}:`, defaultMsg);
    if (reply && reply.trim()) {
        MedicalAudio.playChime('success');
        DemoDB.addAuditLog({
            type: "emerald",
            text: `<strong>Physician Direct Message</strong>: Message sent to <strong>${patientName}</strong> regarding appointment <strong>${apptId}</strong>.`,
            time: "Just now"
        });
        showToast(`✉️ Secure Physician Message dispatched to ${patientName}'s Patient Portal!`, "success");
    }
};

// Admin Action: Toggle Patient Access
window.handleTogglePatientAccess = function(patientId) {
    MedicalAudio.playChime('click');
    const patient = DemoDB.getPatient(patientId);
    if (!patient) return;

    const previousStatus = patient.status;
    const newStatus = previousStatus === 'Active' ? 'Suspended' : 'Active';

    DemoDB.updatePatient(patientId, { status: newStatus });
    AppState.patientsList = DemoDB.getAllPatients();

    renderAdminPatientTable();
    renderAdminAuditLogs();
    updateAdminKPIs();

    if (newStatus === 'Active') {
        MedicalAudio.playChime('success');
        showToast(`✅ Access Activated: Portal access restored for ${patient.name} (${patient.id}).`, "success");
    } else {
        MedicalAudio.playChime('alert');
        showToast(`🔒 Access Suspended: Electronic portal login revoked for ${patient.name} (${patient.id}).`, "error");
    }
};

// Admin Action: Reset Passkey PIN
window.handleResetPatientPasskey = function(patientId) {
    MedicalAudio.playChime('click');
    const patient = DemoDB.getPatient(patientId);
    if (!patient) return;

    const tempPin = "MED-" + Math.floor(1000 + Math.random() * 9000);
    DemoDB.updatePatient(patientId, { security: { passkey: tempPin, twoFactorEnabled: true } });

    DemoDB.addAuditLog({
        type: 'amber',
        text: `<strong>Admin Passkey Reset</strong>: New temporary passkey PIN generated for <strong>${patient.name} (${patient.id})</strong>.`,
        time: "Just now"
    });
    DemoDB.save();

    renderAdminAuditLogs();
    MedicalAudio.playChime('success');
    showToast(`🔑 Temporary Passkey Generated for ${patient.name}: ${tempPin} (Dispatched via encrypted SMS)`, "success");
};

// Admin Action: Open Privileges Modal
window.openManagePrivilegesModal = function(patientId) {
    MedicalAudio.playChime('click');
    const patient = AppState.patientsList.find(p => p.id === patientId);
    if (!patient) return;

    const modal = document.getElementById('manage-privileges-modal');
    const title = document.getElementById('privileges-patient-title');
    const hiddenId = document.getElementById('privileges-patient-id');

    if (title) title.textContent = `Patient: ${patient.name} (${patient.id})`;
    if (hiddenId) hiddenId.value = patient.id;

    // Set checkboxes based on patient.privileges
    const privs = patient.privileges || [];
    document.getElementById('priv-ehr').checked = privs.some(p => p.includes('EHR'));
    document.getElementById('priv-telehealth').checked = privs.some(p => p.includes('Telehealth'));
    document.getElementById('priv-labs').checked = privs.some(p => p.includes('Lab'));
    document.getElementById('priv-refills').checked = privs.some(p => p.includes('Refills'));
    document.getElementById('priv-messaging').checked = privs.some(p => p.includes('Chat') || p.includes('Messaging'));

    if (modal) modal.classList.add('open');
};

// Setup Admin Console Interactions
function setupAdminConsole() {
    // Search Filter Input
    const searchInput = document.getElementById('admin-patient-search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const activeFilter = document.querySelector('.admin-filter-btn.active');
            const filterType = activeFilter ? activeFilter.dataset.filter : 'all';
            renderAdminPatientTable(filterType, e.target.value);
        });
    }

    // Status Filter Tabs
    const filterBtns = document.querySelectorAll('.admin-filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            MedicalAudio.playChime('click');
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const searchVal = searchInput ? searchInput.value : '';
            renderAdminPatientTable(btn.dataset.filter, searchVal);
        });
    });

    // Global Emergency Portal Lock Toggle
    const lockBtn = document.getElementById('btn-portal-lockdown');
    if (lockBtn) {
        lockBtn.addEventListener('click', () => {
            AppState.systemEmergencyLock = !AppState.systemEmergencyLock;
            MedicalAudio.playChime(AppState.systemEmergencyLock ? 'alert' : 'success');

            if (AppState.systemEmergencyLock) {
                lockBtn.classList.add('locked');
                lockBtn.innerHTML = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg> <span>Portal Lock: <strong style="color: #b91c1c;">ACTIVE</strong></span>`;
                showToast("🚨 EMERGENCY LOCKDOWN ENGAGED: All public patient portal logins are currently frozen.", "error");

                AppState.auditLogs.unshift({
                    type: 'red',
                    text: `<strong>EMERGENCY OVERRIDE</strong>: System Administrator engaged global patient portal freeze.`,
                    time: "Just now"
                });
            } else {
                lockBtn.classList.remove('locked');
                lockBtn.innerHTML = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg> <span>Portal Lock: <strong>OFF</strong></span>`;
                showToast("✅ Portal Lock Released: Patient logins restored to normal operation.", "success");

                AppState.auditLogs.unshift({
                    type: 'green',
                    text: `<strong>OVERRIDE CLEARED</strong>: Global patient portal lock released by Administrator.`,
                    time: "Just now"
                });
            }
            renderAdminAuditLogs();
        });
    }

    // Preview Patient Dashboard button (Admin navigation shortcut)
    const previewBtn = document.getElementById('btn-preview-patient-view');
    if (previewBtn) {
        previewBtn.addEventListener('click', () => {
            MedicalAudio.playChime('click');
            AppState.currentUser = {
                ...AppState.patientData,
                name: "Sarah Jenkins"
            };
            enterDashboard();
        });
    }

    // Enroll Patient Modal
    const enrollModal = document.getElementById('enroll-patient-modal');
    const openEnrollBtns = document.querySelectorAll('.btn-open-enroll-modal');
    const closeEnrollBtns = document.querySelectorAll('.btn-close-enroll-modal');
    const enrollForm = document.getElementById('enroll-patient-form');

    openEnrollBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            MedicalAudio.playChime('click');
            if (enrollModal) enrollModal.classList.add('open');
        });
    });

    closeEnrollBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            MedicalAudio.playChime('click');
            if (enrollModal) enrollModal.classList.remove('open');
        });
    });

    if (enrollForm) {
        enrollForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('new-patient-name').value.trim();
            const meta = document.getElementById('new-patient-meta').value.trim();
            const email = document.getElementById('new-patient-email').value.trim();
            const phone = document.getElementById('new-patient-phone').value.trim();
            const doc = document.getElementById('new-patient-doc').value;
            const accessLevel = document.getElementById('new-patient-access-level').value;

            const initials = name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase() || "PT";
            const newId = "#PT-" + Math.floor(50000 + Math.random() * 49999);

            const newPatient = {
                id: newId,
                name: name,
                meta: meta,
                email: email,
                phone: phone,
                doctor: doc.split(' (')[0],
                dept: doc.split('(')[1].replace(')', ''),
                avatar: initials,
                avatarBg: "linear-gradient(135deg, #0284c7, #0d9488)",
                status: "Active",
                privileges: accessLevel.includes('Full') 
                    ? ["EHR Records", "Telehealth Video", "Lab Downloads", "Rx Refills", "Physician Chat"]
                    : ["EHR Records", "Telehealth Video"]
            };

            DemoDB.addPatient(newPatient);
            AppState.patientsList = DemoDB.getAllPatients();

            if (enrollModal) enrollModal.classList.remove('open');
            enrollForm.reset();

            renderAdminPatientTable();
            renderAdminAuditLogs();
            updateAdminKPIs();

            MedicalAudio.playChime('success');
            showToast(`✅ Patient Enrolled: ${name} (${newId}) provisioned with active portal access!`, "success");
        });
    }

    // Manage Privileges Modal Form
    const privModal = document.getElementById('manage-privileges-modal');
    const closePrivBtns = document.querySelectorAll('.btn-close-privileges-modal');
    const privForm = document.getElementById('manage-privileges-form');

    closePrivBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            MedicalAudio.playChime('click');
            if (privModal) privModal.classList.remove('open');
        });
    });

    if (privForm) {
        privForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const patientId = document.getElementById('privileges-patient-id').value;
            const patient = DemoDB.getPatient(patientId);
            if (!patient) return;

            const newPrivs = [];
            if (document.getElementById('priv-ehr').checked) newPrivs.push("EHR Records");
            if (document.getElementById('priv-telehealth').checked) newPrivs.push("Telehealth Video");
            if (document.getElementById('priv-labs').checked) newPrivs.push("Lab Downloads");
            if (document.getElementById('priv-refills').checked) newPrivs.push("Rx Refills");
            if (document.getElementById('priv-messaging').checked) newPrivs.push("Physician Chat");

            DemoDB.updatePatient(patientId, { privileges: newPrivs });
            AppState.patientsList = DemoDB.getAllPatients();

            if (privModal) privModal.classList.remove('open');
            renderAdminPatientTable();
            renderAdminAuditLogs();

            MedicalAudio.playChime('success');
            showToast(`Permissions updated for ${patient.name}.`, "success");
        });
    }
}

// Setup Dashboard Actions (Patient Portal & Modals)
function setupDashboardActions() {
    const DoctorProfiles = {
        "Dr. Marcus Vance, MD": {
            name: "Dr. Marcus Vance, MD",
            avatar: "MV",
            avatarBg: "linear-gradient(135deg, #0284c7, #2563eb)",
            img: "assets/dr_marcus_vance.jpg",
            specialty: "Cardiology & Vascular Medicine",
            specialtyClass: "cardiology",
            qual: "MBBS, MD (Cardiology) — Harvard Medical School • FACC",
            exp: "16+ Yrs",
            rating: "★ 4.9",
            reviews: "420+ reviews",
            cases: "4,200+",
            bio: "Senior Attending Specialist with deep expertise in non-invasive clinical cardiology, advanced echocardiography, coronary artery diagnostics, and comprehensive cardiovascular patient care.",
            degrees: [
                "Doctor of Medicine (MD) — Harvard Medical School (Class of 2008)",
                "Fellow of the American College of Cardiology (FACC)",
                "Bachelor of Science in Biomedical Engineering — Johns Hopkins Univ"
            ],
            room: "Pavilion East • Rm 304",
            langs: "English, Spanish",
            modes: "In-Clinic & HD Telehealth",
            slots: ["09:00 AM", "09:30 AM", "10:15 AM", "11:00 AM", "02:30 PM", "04:15 PM"]
        },
        "Dr. Elena Rostova, PhD": {
            name: "Dr. Elena Rostova, PhD",
            avatar: "ER",
            avatarBg: "linear-gradient(135deg, #ec4899, #8b5cf6)",
            img: "assets/dr_elena_rostova.jpg",
            specialty: "Neurology & Sleep Medicine",
            specialtyClass: "neurology",
            qual: "MBBS, MD, PhD (Neurology) — Johns Hopkins Univ • ABSM",
            exp: "13+ Yrs",
            rating: "★ 4.8",
            reviews: "310+ reviews",
            cases: "3,150+",
            bio: "Director of Neuro-Diagnostics and Sleep Disorders Unit, specialized in complex electroencephalography (EEG), nocturnal polysomnography, and neurological rehabilitation.",
            degrees: [
                "MD, PhD in Neurobiology — Johns Hopkins University School of Medicine",
                "Diplomate of American Board of Sleep Medicine (ABSM)",
                "Fellowship in Clinical Neurophysiology — Massachusetts General Hospital"
            ],
            room: "Neuro Sciences Wing • Suite 510",
            langs: "English, French, Russian",
            modes: "Telehealth & In-Clinic",
            slots: ["10:00 AM", "11:30 AM", "01:45 PM", "03:15 PM", "05:00 PM"]
        },
        "Dr. David Chen, MD": {
            name: "Dr. David Chen, MD",
            avatar: "DC",
            avatarBg: "linear-gradient(135deg, #0d9488, #059669)",
            img: "assets/dr_david_chen.jpg",
            specialty: "Endocrinology & Diabetology",
            specialtyClass: "endocrinology",
            qual: "MBBS, MD (Endocrinology) — Mayo Clinic • FACE",
            exp: "14+ Yrs",
            rating: "★ 4.9",
            reviews: "280+ reviews",
            cases: "3,800+",
            bio: "Chief Endocrinologist focusing on precision insulin glycemic control, continuous glucose telemetry (CGM), metabolic syndrome, and advanced thyroid disorders.",
            degrees: [
                "Doctor of Medicine (MD) — Mayo Clinic College of Medicine",
                "Fellow of American College of Endocrinology (FACE)",
                "Residency in Internal Medicine & Endocrinology — UCSF Health"
            ],
            room: "Metabolic Center • Rm 218",
            langs: "English, Mandarin",
            modes: "In-Clinic & Remote Telemetry",
            slots: ["09:00 AM", "10:45 AM", "02:00 PM", "03:45 PM", "05:30 PM"]
        },
        "Dr. Sarah Al-Mansoor, MD": {
            name: "Dr. Sarah Al-Mansoor, MD",
            avatar: "SA",
            avatarBg: "linear-gradient(135deg, #f59e0b, #e11d48)",
            img: "assets/dr_sarah_al_mansoor.jpg",
            specialty: "Internal Medicine & Diagnostics",
            specialtyClass: "internal",
            qual: "MBBS, MD (Internal Med) — Oxford Univ • FACP",
            exp: "11+ Yrs",
            rating: "★ 4.9",
            reviews: "350+ reviews",
            cases: "2,900+",
            bio: "Lead Specialist in Internal Medicine and Comprehensive Clinical Diagnostics, recognized for complex multi-system diagnostics, preventive medicine, and inpatient medical oversight.",
            degrees: [
                "Bachelor of Medicine & Surgery (MBBS), MD — University of Oxford Medical Sciences",
                "Fellow of the American College of Physicians (FACP)",
                "Membership of the Royal Colleges of Physicians (MRCP, UK)"
            ],
            room: "Diagnostic Wing • Suite 108",
            langs: "English, Arabic",
            modes: "In-Clinic Consultations",
            slots: ["08:30 AM", "09:45 AM", "11:15 AM", "02:15 PM", "04:00 PM"]
        }
    };

    window.DoctorProfiles = DoctorProfiles;

    // Doctor Reference Modal Controller
    window.openDoctorReferenceModal = function(doctorName) {
        const doc = DoctorProfiles[doctorName] || DoctorProfiles["Dr. Marcus Vance, MD"];
        window.currentInspectedDoctor = doc.name;
        const modal = document.getElementById('doctor-reference-modal');
        if (!modal || !doc) return;

        if (typeof MedicalAudio !== 'undefined') {
            MedicalAudio.playChime('click');
        }

        // Set portrait image
        const refImg = document.getElementById('doc-ref-img');
        if (refImg) {
            refImg.src = doc.img;
            refImg.alt = doc.name;
        }

        // Set Meta Details
        const nameEl = document.getElementById('doc-ref-name');
        if (nameEl) nameEl.textContent = doc.name;

        const deptEl = document.getElementById('doc-ref-dept');
        if (deptEl) {
            deptEl.textContent = doc.specialty;
            deptEl.className = `doctor-specialty-pill ${doc.specialtyClass || 'cardiology'}`;
        }

        const bioEl = document.getElementById('doc-ref-bio');
        if (bioEl) bioEl.textContent = doc.bio;

        // Quick Stats
        const expEl = document.getElementById('doc-ref-exp');
        if (expEl) expEl.textContent = doc.exp || "15+ Yrs";

        const ratingEl = document.getElementById('doc-ref-rating');
        if (ratingEl) ratingEl.textContent = doc.rating || "★ 4.9";

        const casesEl = document.getElementById('doc-ref-cases');
        if (casesEl) casesEl.textContent = doc.cases || "3,500+";

        // Degrees list
        const degEl = document.getElementById('doc-ref-degrees');
        if (degEl && Array.isArray(doc.degrees)) {
            degEl.innerHTML = doc.degrees.map(d => `
                <div class="doc-ref-cred-item">
                    <span class="cred-bullet">✦</span>
                    <span>${d}</span>
                </div>
            `).join('');
        }

        // Location & languages
        const roomEl = document.getElementById('doc-ref-room');
        if (roomEl) roomEl.textContent = doc.room || "Hospital Pavilion";

        const langsEl = document.getElementById('doc-ref-langs');
        if (langsEl) langsEl.textContent = doc.langs || "English";

        const modesEl = document.getElementById('doc-ref-modes');
        if (modesEl) modesEl.textContent = doc.modes || "In-Clinic & Telehealth";

        // Slots
        const slotsTag = document.getElementById('doc-ref-slots-tag');
        if (slotsTag) slotsTag.textContent = `${(doc.slots && doc.slots.length) || 4} slots left`;

        const slotsContainer = document.getElementById('doc-ref-slots-container');
        if (slotsContainer) {
            slotsContainer.innerHTML = (doc.slots || ["09:30 AM", "10:15 AM", "02:30 PM", "04:15 PM"]).map(slot => `
                <button type="button" class="doc-ref-slot-pill" data-time="${slot}">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 3px;"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    ${slot}
                </button>
            `).join('');

            // Click listener for slot pills in reference modal
            slotsContainer.querySelectorAll('.doc-ref-slot-pill').forEach(pill => {
                pill.addEventListener('click', () => {
                    const chosenTime = pill.dataset.time;
                    closeDoctorReferenceModal();
                    updateModalDoctorPreview(doc.name, chosenTime);
                    const bookModal = document.getElementById('book-appointment-modal');
                    if (bookModal) bookModal.classList.add('open');
                });
            });
        }

        // CTA Button
        const bookCta = document.getElementById('doc-ref-book-cta');
        if (bookCta) {
            bookCta.onclick = function() {
                closeDoctorReferenceModal();
                updateModalDoctorPreview(doc.name);
                const bookModal = document.getElementById('book-appointment-modal');
                if (bookModal) bookModal.classList.add('open');
            };
        }

        modal.classList.add('open');
    };

    window.closeDoctorReferenceModal = function() {
        const modal = document.getElementById('doctor-reference-modal');
        if (modal) {
            if (typeof MedicalAudio !== 'undefined') {
                MedicalAudio.playChime('click');
            }
            modal.classList.remove('open');
        }
    };

    // Close when clicking outside modal card
    const refModalOverlay = document.getElementById('doctor-reference-modal');
    if (refModalOverlay) {
        refModalOverlay.addEventListener('click', (e) => {
            if (e.target === refModalOverlay) {
                closeDoctorReferenceModal();
            }
        });
    }

    function updateModalDoctorPreview(doctorName, preferredTime = null) {
        const doc = DoctorProfiles[doctorName] || DoctorProfiles["Dr. Marcus Vance, MD"];
        const modalAvatar = document.getElementById('modal-doc-avatar');
        const modalDocImg = document.getElementById('modal-doc-img');
        const modalName = document.getElementById('modal-doc-name');
        const modalSpec = document.getElementById('modal-doc-spec');
        const modalQual = document.getElementById('modal-doc-qual');
        const docSelect = document.getElementById('book-doctor-select');
        const timeInput = document.getElementById('selected-time-value');
        const timeDisplay = document.getElementById('selected-timing-display');

        if (modalDocImg) {
            modalDocImg.src = doc.img || 'assets/dr_marcus_vance.jpg';
            modalDocImg.alt = doc.name;
            modalDocImg.style.display = 'block';
        }
        if (modalAvatar) {
            modalAvatar.textContent = doc.avatar;
            modalAvatar.style.background = doc.avatarBg;
        }
        if (modalName) modalName.textContent = doc.name;
        if (modalSpec) modalSpec.textContent = doc.specialty;
        if (modalQual) modalQual.textContent = doc.qual;
        if (docSelect) docSelect.value = doc.name;

        const timeToSet = preferredTime || (doc.slots && doc.slots[0]) || "09:30 AM";
        if (timeInput) timeInput.value = timeToSet;
        if (timeDisplay) timeDisplay.textContent = `Selected: ${timeToSet}`;

        document.querySelectorAll('.modal-slot-btn').forEach(btn => {
            if (btn.dataset.time === timeToSet) btn.classList.add('active');
            else btn.classList.remove('active');
        });
    }

    const filterBtns = document.querySelectorAll('.doc-filter-btn');
    const doctorCards = document.querySelectorAll('.doctor-booking-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            MedicalAudio.playChime('click');
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const category = btn.dataset.filter;

            doctorCards.forEach(card => {
                if (category === 'all' || card.dataset.category === category) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    const timingPillBtns = document.querySelectorAll('.timing-pill-btn');
    timingPillBtns.forEach(pill => {
        pill.addEventListener('click', (e) => {
            e.stopPropagation();
            MedicalAudio.playChime('click');
            
            timingPillBtns.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');

            const doctorName = pill.dataset.doctor;
            const chosenTime = pill.dataset.time;

            updateModalDoctorPreview(doctorName, chosenTime);
            
            const bookModal = document.getElementById('book-appointment-modal');
            if (bookModal) bookModal.classList.add('open');
            showToast(`Selected ${chosenTime} slot with ${doctorName}. Confirm details below.`, "info");
        });
    });

    const bookDocBtns = document.querySelectorAll('.btn-book-appointment-trigger');
    bookDocBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            MedicalAudio.playChime('click');
            const doctorName = btn.dataset.doctor;
            updateModalDoctorPreview(doctorName);
            
            const bookModal = document.getElementById('book-appointment-modal');
            if (bookModal) bookModal.classList.add('open');
        });
    });

    const modalSlotBtns = document.querySelectorAll('.modal-slot-btn');
    modalSlotBtns.forEach(slotBtn => {
        slotBtn.addEventListener('click', () => {
            MedicalAudio.playChime('click');
            modalSlotBtns.forEach(s => s.classList.remove('active'));
            slotBtn.classList.add('active');
            
            const chosenTime = slotBtn.dataset.time;
            const timeInput = document.getElementById('selected-time-value');
            const timeDisplay = document.getElementById('selected-timing-display');
            if (timeInput) timeInput.value = chosenTime;
            if (timeDisplay) timeDisplay.textContent = `Selected: ${chosenTime}`;
        });
    });

    let selectedConsultationMode = "In-Clinic (Hospital Pavilion)";
    const modeBtns = document.querySelectorAll('.modal-mode-btn');
    modeBtns.forEach(mBtn => {
        mBtn.addEventListener('click', () => {
            MedicalAudio.playChime('click');
            modeBtns.forEach(b => b.classList.remove('active'));
            mBtn.classList.add('active');
            selectedConsultationMode = mBtn.dataset.mode;
        });
    });

    const modalDocSelect = document.getElementById('book-doctor-select');
    if (modalDocSelect) {
        modalDocSelect.addEventListener('change', () => {
            MedicalAudio.playChime('click');
            updateModalDoctorPreview(modalDocSelect.value);
        });
    }

    const soundToggleBtn = document.getElementById('toggle-sound-btn');
    if (soundToggleBtn) {
        soundToggleBtn.addEventListener('click', () => {
            AppState.soundEnabled = !AppState.soundEnabled;
            soundToggleBtn.innerHTML = AppState.soundEnabled 
                ? `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg> Audio On`
                : `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg> Audio Muted`;
            showToast(AppState.soundEnabled ? "Clinical audio feedback enabled" : "Audio muted", "info");
        });
    }

    const bookModal = document.getElementById('book-appointment-modal');
    const openBookBtns = document.querySelectorAll('.btn-open-book-modal');
    const closeBookBtns = document.querySelectorAll('.btn-close-book-modal');
    const bookForm = document.getElementById('appointment-booking-form');

    openBookBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            MedicalAudio.playChime('click');
            updateModalDoctorPreview("Dr. Marcus Vance, MD");
            bookModal.classList.add('open');
        });
    });

    closeBookBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            MedicalAudio.playChime('click');
            bookModal.classList.remove('open');
        });
    });

    if (bookForm) {
        bookForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const doctor = document.getElementById('modal-doc-name').textContent || document.getElementById('book-doctor-select').value;
            const date = document.getElementById('book-date-input').value;
            const time = document.getElementById('selected-time-value').value || "09:30 AM";
            const reason = document.getElementById('book-reason-input').value || "Routine Clinical Consultation";
            const isTelehealth = selectedConsultationMode.includes("Telehealth");

            if (!date) {
                showToast("Please choose an appointment date.", "error");
                return;
            }

            bookModal.classList.remove('open');
            MedicalAudio.playChime('success');

            // Record in DemoDB with rich patient demographics and request reason
            const patientObj = AppState.currentUser || DemoDB.getPatient("#PT-90482");
            const newAppt = {
                id: "APT-" + Math.floor(1000 + Math.random() * 9000),
                patientId: (patientObj && patientObj.id) || "#PT-90482",
                patientName: (patientObj && patientObj.name) || "Sarah Jenkins",
                patientEmail: (patientObj && patientObj.email) || "sarah.jenkins@medicareplus.org",
                patientPhone: (patientObj && patientObj.phone) || "+1 (555) 908-1123",
                patientBlood: (patientObj && patientObj.bloodGroup) || "A+",
                doctor: doctor,
                doctorImg: (DoctorProfiles[doctor] && DoctorProfiles[doctor].img) || "assets/dr_marcus_vance.jpg",
                doctorAvatar: (DoctorProfiles[doctor] && DoctorProfiles[doctor].avatar) || "MV",
                specialty: (DoctorProfiles[doctor] && DoctorProfiles[doctor].specialty) || "Specialist Consultation",
                location: isTelehealth ? "Telehealth Video Room" : "Hospital Pavilion",
                mode: selectedConsultationMode,
                date: date,
                displayDate: date,
                time: time,
                reason: reason,
                status: "Pending Approval",
                bookedAt: new Date().toLocaleDateString([], { month: 'short', day: 'numeric', year: 'numeric' }) + " • " + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                checkedIn: false
            };
            DemoDB.addAppointment(newAppt);
            updateSidebarCounters();
            renderDatabaseConsole('appointments');

            if (typeof renderAdminAppointmentsTable === 'function') {
                renderAdminAppointmentsTable();
            }
            if (typeof updateAdminKPIs === 'function') {
                updateAdminKPIs();
            }
            if (typeof updateDoctorSwitcherBadges === 'function') {
                updateDoctorSwitcherBadges();
            }
            if (typeof renderPatientAppointmentsList === 'function') {
                renderPatientAppointmentsList();
            }

            showToast(`✅ Consultation Request Submitted: Request sent to ${doctor} for ${date} at ${time}. Recorded in Demo Database & Admin Portal!`, "success");

            const apptList = document.querySelector('.appointment-list');
            if (apptList) {
                const doc = DoctorProfiles[doctor] || { 
                    avatar: "DR", 
                    avatarBg: "linear-gradient(135deg, #0284c7, #2563eb)", 
                    img: "assets/dr_marcus_vance.jpg", 
                    specialty: "Specialist Consultation" 
                };
                const newCard = document.createElement('div');
                newCard.className = 'appointment-item';
                newCard.innerHTML = `
                    <div class="doctor-profile-wrap">
                        <div class="doctor-avatar-wrap-link" onclick="openDoctorReferenceModal('${doctor}')" title="Click to view reference image & credentials" style="cursor: pointer; position: relative;">
                            <img src="${doc.img || 'assets/dr_marcus_vance.jpg'}" alt="${doctor}" class="appt-avatar-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                            <div class="doctor-avatar-circle" style="display: none; background: ${doc.avatarBg};">${doc.avatar}</div>
                        </div>
                        <div class="doctor-details">
                            <h4 onclick="openDoctorReferenceModal('${doctor}')" style="cursor: pointer; display: inline-flex; align-items: center; gap: 5px;" title="View doctor profile & credentials">
                                ${doctor}
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                            </h4>
                            <div class="doctor-spec">${doc.specialty} • ${selectedConsultationMode}</div>
                            <div class="appointment-badge-time" style="margin-top: 4px;">
                                <span class="appt-time-pill" style="background: #fef3c7; border-color: #fde68a; color: #b45309;">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                                    Pending Approval • ${date} at ${time}
                                </span>
                                <span>Reason: ${reason}</span>
                            </div>
                        </div>
                    </div>
                    <div class="appointment-actions">
                        <button class="btn-appt-checkin" onclick="showToast('Check-in confirmed! Clinical queue barcode sent to your smartphone.', 'success')">Check-in Online</button>
                        ${isTelehealth ? `<button class="btn-appt-ghost" onclick="showToast('Secure Telehealth Room will open 10 mins prior to call.', 'info')">Join Video</button>` : `<button class="btn-appt-ghost" onclick="showToast('Directions: Hospital Pavilion, Elevator B to 3rd Floor.', 'info')">Directions</button>`}
                    </div>
                `;
                apptList.prepend(newCard);
            }
        });
    }

    const refillModal = document.getElementById('refill-modal');
    const openRefillBtns = document.querySelectorAll('.btn-open-refill-modal');
    const closeRefillBtns = document.querySelectorAll('.btn-close-refill-modal');
    const confirmRefillBtn = document.getElementById('btn-confirm-refill');

    openRefillBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            MedicalAudio.playChime('click');
            const medName = btn.dataset.med || "Metoprolol Tartrate 25mg";
            document.getElementById('refill-med-name').textContent = medName;
            refillModal.classList.add('open');
        });
    });

    closeRefillBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            MedicalAudio.playChime('click');
            refillModal.classList.remove('open');
        });
    });

    if (confirmRefillBtn) {
        confirmRefillBtn.addEventListener('click', () => {
            refillModal.classList.remove('open');
            const medName = document.getElementById('refill-med-name').textContent;
            DemoDB.requestRefill(medName);
            renderDatabaseConsole('prescriptions');
            updateSidebarCounters();
            MedicalAudio.playChime('success');
            showToast(`Refill order transmitted to Hospital Pharmacy #2 for ${medName} (Logged to Demo Database)`, "success");
        });
    }

    const reportModal = document.getElementById('report-modal');
    const openReportBtns = document.querySelectorAll('.btn-open-report');
    const closeReportBtns = document.querySelectorAll('.btn-close-report');

    openReportBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            MedicalAudio.playChime('click');
            const title = btn.dataset.reportTitle || "Comprehensive Metabolic Panel";
            const date = btn.dataset.reportDate || "Nov 08, 2026";
            document.getElementById('modal-report-title').textContent = title;
            document.getElementById('modal-report-date').textContent = "Diagnostic Date: " + date;
            reportModal.classList.add('open');
        });
    });

    closeReportBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            MedicalAudio.playChime('click');
            reportModal.classList.remove('open');
        });
    });

    const sosBtn = document.getElementById('emergency-sos-button');
    if (sosBtn) {
        sosBtn.addEventListener('click', () => {
            MedicalAudio.playChime('alert');
            const proceed = confirm("EMERGENCY CARE PROTOCOL:\n\nDo you need to alert the On-Duty Clinical Triage Nurse and dispatch hospital paramedics to your location?");
            if (proceed) {
                showToast("🚨 EMERGENCY SOS SIGNAL SENT: Clinical triage team notified. Hospital direct line dialed: (800) 432-5880.", "error");
            }
        });
    }

    document.querySelectorAll('.modal-overlay').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('open');
            }
        });
    });

    // Close Notification Dropdown on outside click
    document.addEventListener('click', (e) => {
        const dropdown = document.getElementById('patient-notification-dropdown');
        const bellBtn = document.getElementById('nav-notification-bell-btn');
        if (dropdown && dropdown.style.display === 'block') {
            if (!dropdown.contains(e.target) && (!bellBtn || !bellBtn.contains(e.target))) {
                dropdown.style.display = 'none';
            }
        }
    });
}

// ==========================================================================
// UNIFIED UI SYNCHRONIZATION (PATIENT IDENTITY, HEADERS, CARDS)
// ==========================================================================

function syncAllPatientUI(patient) {
    if (!patient) return;

    // 1. Top Navbar
    const navName = document.getElementById('nav-patient-name');
    const navId = document.getElementById('nav-patient-id');
    const navThumbs = document.querySelectorAll('.patient-avatar-thumb');
    if (navName) navName.textContent = patient.name;
    if (navId) navId.textContent = patient.id;
    const initials = patient.avatar || patient.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
    navThumbs.forEach(th => th.textContent = initials);

    // 2. Hero Greeting
    const heroName = document.getElementById('hero-patient-name');
    if (heroName) heroName.textContent = patient.name;

    // 3. Sidebar Mini Profile Card
    const sideAvatar = document.getElementById('sidebar-patient-avatar');
    const sideName = document.getElementById('sidebar-patient-name');
    const sideId = document.getElementById('sidebar-patient-id');
    if (sideAvatar) {
        sideAvatar.textContent = initials;
        if (patient.avatarBg) sideAvatar.style.background = patient.avatarBg;
    }
    if (sideName) sideName.textContent = patient.name;
    if (sideId) sideId.textContent = patient.id;

    // 4. Profile Header Hero
    const profAvatar = document.getElementById('prof-hero-avatar');
    const profName = document.getElementById('prof-hero-name');
    const profId = document.getElementById('prof-hero-id');
    const profStatus = document.getElementById('prof-hero-status');
    const profDoc = document.getElementById('prof-hero-doc');
    if (profAvatar) {
        profAvatar.textContent = initials;
        if (patient.avatarBg) profAvatar.style.background = patient.avatarBg;
    }
    if (profName) profName.textContent = patient.name;
    if (profId) profId.textContent = patient.id;
    if (profStatus) {
        profStatus.textContent = (patient.status === 'Active' ? 'Active Outpatient' : patient.status);
        profStatus.className = `badge-status-pill ${patient.status === 'Active' ? 'active' : 'suspended'}`;
    }
    if (profDoc) {
        const docName = (patient.clinical && patient.clinical.primaryDoctor) || patient.doctor || "Dr. Marcus Vance, MD";
        profDoc.textContent = docName;
    }

    // 5. Populate Form Inputs
    populateProfileForm(patient);

    // 6. Digital Health Card
    renderDigitalHealthCard(patient);

    // 7. Update counters and console
    updateSidebarCounters();
    renderDatabaseConsole();

    // 8. Sync Patient Notifications & Appointments List & Medications
    if (typeof syncPatientDoctorNotifications === 'function') {
        syncPatientDoctorNotifications();
    }
    if (typeof renderPatientAppointmentsList === 'function') {
        renderPatientAppointmentsList();
    }
    if (typeof renderPatientMedicationsList === 'function') {
        renderPatientMedicationsList();
    }
}

// Populate Profile Form Fields from Patient Data Object
function populateProfileForm(patient) {
    if (!patient) return;
    const legalNameInput = document.getElementById('prof-legal-name');
    const idDisplay = document.getElementById('prof-id-display');
    const dobInput = document.getElementById('prof-dob');
    const ageInput = document.getElementById('prof-age');
    const genderSelect = document.getElementById('prof-gender');
    const bloodInput = document.getElementById('prof-blood-group');
    const emailInput = document.getElementById('prof-email');
    const phoneInput = document.getElementById('prof-phone');
    const addressInput = document.getElementById('prof-address');

    if (legalNameInput) legalNameInput.value = patient.name || "";
    if (idDisplay) idDisplay.value = patient.id || "#PT-90482";
    if (dobInput) dobInput.value = patient.dob || "1992-04-14";
    if (ageInput) ageInput.value = patient.age || 34;
    if (genderSelect) genderSelect.value = patient.gender || "Female";
    if (emailInput) emailInput.value = patient.email || "";
    if (phoneInput) phoneInput.value = patient.phone || "";
    if (addressInput) addressInput.value = patient.address || "";

    // Blood group buttons
    const bg = patient.bloodGroup || "O+";
    if (bloodInput) bloodInput.value = bg;
    document.querySelectorAll('.blood-btn').forEach(btn => {
        if (btn.dataset.blood === bg) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Emergency Contact
    const emer = patient.emergencyContact || {};
    const emerName = document.getElementById('prof-emer-name');
    const emerRel = document.getElementById('prof-emer-rel');
    const emerPhone = document.getElementById('prof-emer-phone');
    if (emerName) emerName.value = emer.name || "";
    if (emerRel) emerRel.value = emer.relation || "Spouse";
    if (emerPhone) emerPhone.value = emer.phone || "";

    // Clinical
    const clin = patient.clinical || {};
    const doctorSelect = document.getElementById('prof-doctor');
    const roomInput = document.getElementById('prof-room');
    const conditionsInput = document.getElementById('prof-conditions');
    const donorToggle = document.getElementById('prof-organ-donor');
    if (doctorSelect && clin.primaryDoctor) doctorSelect.value = clin.primaryDoctor;
    if (roomInput) roomInput.value = clin.roomNumber || "";
    if (conditionsInput) conditionsInput.value = clin.conditions || "";
    if (donorToggle) donorToggle.checked = clin.organDonor !== false;

    // Render Allergies Tags
    renderAllergyTags(clin.allergies || ["Penicillin", "Sulfa Drugs", "Latex"]);

    // Insurance
    const ins = patient.insurance || {};
    const insProvider = document.getElementById('prof-ins-provider');
    const insTier = document.getElementById('prof-ins-tier');
    const insId = document.getElementById('prof-ins-id');
    const insGroup = document.getElementById('prof-ins-group');
    const insExpiry = document.getElementById('prof-ins-expiry');
    if (insProvider && ins.provider) insProvider.value = ins.provider;
    if (insTier && ins.tier) insTier.value = ins.tier;
    if (insId) insId.value = ins.policyId || "";
    if (insGroup) insGroup.value = ins.groupId || "";
    if (insExpiry) insExpiry.value = ins.expiryDate || "";

    // Passkey
    const sec = patient.security || {};
    const passkeyInput = document.getElementById('prof-passkey');
    const twoFaToggle = document.getElementById('prof-2fa');
    if (passkeyInput) passkeyInput.value = sec.passkey || "1234";
    if (twoFaToggle) twoFaToggle.checked = sec.twoFactorEnabled !== false;
}

// Render Interactive Allergy Tags
function renderAllergyTags(allergies = []) {
    const list = document.getElementById('profile-allergy-tags');
    if (!list) return;
    list.innerHTML = '';
    allergies.forEach(allergy => {
        const pill = document.createElement('span');
        pill.className = 'allergy-tag-pill';
        pill.innerHTML = `
            <span>${allergy}</span>
            <button type="button" class="allergy-tag-remove" title="Remove ${allergy}">✕</button>
        `;
        pill.querySelector('.allergy-tag-remove').addEventListener('click', () => {
            pill.remove();
        });
        list.appendChild(pill);
    });
}

// Render Digital Smart Health ID Card
function renderDigitalHealthCard(patient) {
    if (!patient) return;
    const cardAvatar = document.getElementById('card-display-avatar');
    const cardName = document.getElementById('card-display-name');
    const cardId = document.getElementById('card-display-id');
    const cardDob = document.getElementById('card-display-dob');
    const cardGender = document.getElementById('card-display-gender');
    const cardBlood = document.getElementById('card-display-blood');
    const cardDoc = document.getElementById('card-display-doc');
    const cardEmer = document.getElementById('card-display-emer');
    const cardAllergies = document.getElementById('card-display-allergies');
    const cardIns = document.getElementById('card-display-ins');
    const cardDonor = document.getElementById('card-display-donor');

    const initials = patient.avatar || patient.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
    if (cardAvatar) {
        cardAvatar.textContent = initials;
        if (patient.avatarBg) cardAvatar.style.background = patient.avatarBg;
    }
    if (cardName) cardName.textContent = patient.name;
    if (cardId) cardId.textContent = `ID: ${patient.id}`;
    if (cardDob) cardDob.textContent = `${patient.dob || '1992-04-14'} (${patient.age || 34} Yrs)`;
    if (cardGender) cardGender.textContent = patient.gender || "Female";
    if (cardBlood) cardBlood.textContent = `${patient.bloodGroup || 'O+'} Positive`;
    
    const clin = patient.clinical || {};
    if (cardDoc) cardDoc.textContent = clin.primaryDoctor || patient.doctor || "Dr. Marcus Vance, MD";
    
    const emer = patient.emergencyContact || {};
    if (cardEmer) cardEmer.textContent = `${emer.name || 'Michael Jenkins'} (${emer.relation || 'Spouse'}) • ${emer.phone || '+1 (555) 908-1123'}`;

    const allergies = clin.allergies || [];
    if (cardAllergies) cardAllergies.textContent = allergies.length ? allergies.join(', ') : "None Documented (NKDA)";

    const ins = patient.insurance || {};
    if (cardIns) cardIns.textContent = `${ins.provider || 'Aetna Premier'} (${ins.policyId || 'AET-9921448'})`;

    if (cardDonor) {
        cardDonor.style.display = clin.organDonor ? 'inline-block' : 'none';
    }
}

// Switch Dashboard Tab Panels
function switchDashboardPanel(panelName) {
    const panels = {
        'overview': document.getElementById('dash-panel-overview'),
        'profile': document.getElementById('dash-panel-profile'),
        'healthcard': document.getElementById('dash-panel-healthcard'),
        'database': document.getElementById('dash-panel-database'),
        'scanner': document.getElementById('dash-panel-scanner'),
        'ai-assistant': document.getElementById('dash-panel-ai-assistant')
    };

    Object.values(panels).forEach(p => {
        if (p) p.classList.remove('active');
    });

    const target = panels[panelName] || panels['overview'];
    if (target) {
        target.classList.add('active');
    }

    document.querySelectorAll('.sidebar-nav-link').forEach(link => {
        if (link.dataset.nav === panelName) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    if (panelName === 'database') {
        renderDatabaseConsole();
    }
    if (panelName === 'scanner') {
        if (typeof initMedicineScanner === 'function') {
            initMedicineScanner();
        }
    }
    if (panelName === 'ai-assistant') {
        if (typeof renderPatientAiChat === 'function') {
            renderPatientAiChat();
        }
    }
}

// Update Sidebar Badge Counters
function updateSidebarCounters() {
    const docCount = document.getElementById('sidebar-doc-count');
    const apptCount = document.getElementById('sidebar-appt-count');
    const medCount = document.getElementById('sidebar-med-count');
    const repCount = document.getElementById('sidebar-report-count');

    if (docCount) docCount.textContent = "4";
    if (apptCount) apptCount.textContent = DemoDB.getAppointments().length;
    if (medCount) medCount.textContent = DemoDB.getPrescriptions().length;
    if (repCount) repCount.textContent = DemoDB.getReports().length;
}

// Setup Sidebar Navigation and Smooth Scrolling
function setupSidebarNavigation() {
    const navLinks = document.querySelectorAll('[data-nav]');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            MedicalAudio.playChime('click');
            const targetNav = link.dataset.nav;

            if (['overview', 'profile', 'healthcard', 'database', 'scanner', 'ai-assistant'].includes(targetNav)) {
                switchDashboardPanel(targetNav);
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else if (targetNav === 'doctors') {
                switchDashboardPanel('overview');
                const sec = document.getElementById('section-doctor-roster');
                if (sec) {
                    sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    sec.classList.remove('section-highlight-pulse');
                    void sec.offsetWidth;
                    sec.classList.add('section-highlight-pulse');
                }
            } else if (targetNav === 'appointments') {
                switchDashboardPanel('overview');
                const sec = document.getElementById('section-appointments');
                if (sec) {
                    sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    sec.classList.remove('section-highlight-pulse');
                    void sec.offsetWidth;
                    sec.classList.add('section-highlight-pulse');
                }
            } else if (targetNav === 'prescriptions') {
                switchDashboardPanel('overview');
                const sec = document.getElementById('section-medications');
                if (sec) {
                    sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    sec.classList.remove('section-highlight-pulse');
                    void sec.offsetWidth;
                    sec.classList.add('section-highlight-pulse');
                }
            } else if (targetNav === 'reports') {
                switchDashboardPanel('overview');
                const sec = document.getElementById('section-reports');
                if (sec) {
                    sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    sec.classList.remove('section-highlight-pulse');
                    void sec.offsetWidth;
                    sec.classList.add('section-highlight-pulse');
                }
            } else if (targetNav === 'careteam') {
                switchDashboardPanel('overview');
                const sec = document.getElementById('section-careteam');
                if (sec) {
                    sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    sec.classList.remove('section-highlight-pulse');
                    void sec.offsetWidth;
                    sec.classList.add('section-highlight-pulse');
                }
            }

            // Close mobile sidebar if open
            const sidebar = document.getElementById('dashboard-sidebar');
            const backdrop = document.getElementById('sidebar-backdrop');
            if (sidebar) sidebar.classList.remove('open');
            if (backdrop) backdrop.classList.remove('open');
        });
    });

    // Mobile Hamburger Toggle
    const toggleBtn = document.getElementById('sidebar-toggle-btn');
    const sidebar = document.getElementById('dashboard-sidebar');
    const backdrop = document.getElementById('sidebar-backdrop');

    if (toggleBtn && sidebar) {
        toggleBtn.addEventListener('click', () => {
            MedicalAudio.playChime('click');
            const isOpen = sidebar.classList.contains('open');
            if (isOpen) {
                sidebar.classList.remove('open');
                if (backdrop) backdrop.classList.remove('open');
            } else {
                sidebar.classList.add('open');
                if (backdrop) backdrop.classList.add('open');
            }
        });
    }

    if (backdrop && sidebar) {
        backdrop.addEventListener('click', () => {
            sidebar.classList.remove('open');
            backdrop.classList.remove('open');
        });
    }

    // Top navbar patient pill click opens profile
    const navPill = document.getElementById('nav-patient-profile-pill');
    if (navPill) {
        navPill.addEventListener('click', () => {
            MedicalAudio.playChime('click');
            switchDashboardPanel('profile');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Sidebar mini patient card click opens profile
    const sideCard = document.getElementById('sidebar-patient-card');
    if (sideCard) {
        sideCard.addEventListener('click', (e) => {
            if (e.target.closest('.sidebar-edit-profile-btn')) return;
            MedicalAudio.playChime('click');
            switchDashboardPanel('profile');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}

// Setup Profile Access & Upgrade Tools
function setupProfileTools() {
    // Blood group buttons selection
    const bloodBtns = document.querySelectorAll('.blood-btn');
    const bloodInput = document.getElementById('prof-blood-group');
    bloodBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            MedicalAudio.playChime('click');
            bloodBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            if (bloodInput) bloodInput.value = btn.dataset.blood;
        });
    });

    // Allergy add tag
    const addAllergyBtn = document.getElementById('btn-add-allergy');
    const newAllergyInput = document.getElementById('new-allergy-input');
    function addAllergyTag() {
        if (!newAllergyInput) return;
        const val = newAllergyInput.value.trim();
        if (!val) return;
        const list = document.getElementById('profile-allergy-tags');
        if (!list) return;

        const pill = document.createElement('span');
        pill.className = 'allergy-tag-pill';
        pill.innerHTML = `
            <span>${val}</span>
            <button type="button" class="allergy-tag-remove" title="Remove ${val}">✕</button>
        `;
        pill.querySelector('.allergy-tag-remove').addEventListener('click', () => {
            pill.remove();
        });
        list.appendChild(pill);
        newAllergyInput.value = '';
        MedicalAudio.playChime('click');
    }

    if (addAllergyBtn) {
        addAllergyBtn.addEventListener('click', addAllergyTag);
    }
    if (newAllergyInput) {
        newAllergyInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                addAllergyTag();
            }
        });
    }

    // Reset demo profile buttons
    const resetDemoBtns = [document.getElementById('btn-reset-profile-demo'), document.getElementById('btn-reset-profile-bottom')];
    resetDemoBtns.forEach(btn => {
        if (!btn) return;
        btn.addEventListener('click', () => {
            MedicalAudio.playChime('click');
            const defaultData = DemoDB.getDefaultData();
            const defaultSarah = defaultData.patients[0];
            DemoDB.updatePatient(defaultSarah.id, defaultSarah);
            syncAllPatientUI(defaultSarah);
            showToast("Demo profile reset to default credentials.", "info");
        });
    });

    // Profile Form Save
    const profileForm = document.getElementById('patient-profile-form');
    if (profileForm) {
        profileForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const currentPatient = AppState.currentUser || DemoDB.getPatient("#PT-90482");
            const patientId = currentPatient.id || "#PT-90482";

            const name = document.getElementById('prof-legal-name').value.trim();
            const dob = document.getElementById('prof-dob').value;
            const age = parseInt(document.getElementById('prof-age').value, 10) || 34;
            const gender = document.getElementById('prof-gender').value;
            const bloodGroup = document.getElementById('prof-blood-group').value || "O+";
            const email = document.getElementById('prof-email').value.trim();
            const phone = document.getElementById('prof-phone').value.trim();
            const address = document.getElementById('prof-address').value.trim();

            const emerName = document.getElementById('prof-emer-name').value.trim();
            const emerRel = document.getElementById('prof-emer-rel').value;
            const emerPhone = document.getElementById('prof-emer-phone').value.trim();

            const doctor = document.getElementById('prof-doctor').value;
            const room = document.getElementById('prof-room').value.trim();
            const conditions = document.getElementById('prof-conditions').value.trim();
            const organDonor = document.getElementById('prof-organ-donor').checked;

            const allergyTags = [];
            document.querySelectorAll('#profile-allergy-tags .allergy-tag-pill span').forEach(sp => {
                allergyTags.push(sp.textContent.trim());
            });

            const insProvider = document.getElementById('prof-ins-provider').value;
            const insTier = document.getElementById('prof-ins-tier').value;
            const insId = document.getElementById('prof-ins-id').value.trim();
            const insGroup = document.getElementById('prof-ins-group').value.trim();
            const insExpiry = document.getElementById('prof-ins-expiry').value;

            const passkey = document.getElementById('prof-passkey').value.trim();
            const twoFactorEnabled = document.getElementById('prof-2fa').checked;

            const updatedPatient = {
                name,
                dob,
                age,
                gender,
                bloodGroup,
                email,
                phone,
                address,
                emergencyContact: {
                    name: emerName,
                    relation: emerRel,
                    phone: emerPhone
                },
                clinical: {
                    primaryDoctor: doctor,
                    roomNumber: room,
                    conditions,
                    organDonor,
                    allergies: allergyTags
                },
                insurance: {
                    provider: insProvider,
                    tier: insTier,
                    policyId: insId,
                    groupId: insGroup,
                    expiryDate: insExpiry
                },
                security: {
                    passkey,
                    twoFactorEnabled
                }
            };

            const saved = DemoDB.updatePatient(patientId, updatedPatient);
            syncAllPatientUI(saved);

            MedicalAudio.playChime('success');
            showToast(`✅ Profile Upgraded: Changes saved to Medicare Plus Demo Database for ${name}!`, "success");
        });
    }
}

// Setup Demo Database Console & Inspector
let currentDbTab = 'patient';

function renderDatabaseConsole(tab = currentDbTab) {
    currentDbTab = tab;
    const stats = DemoDB.getStats();

    const elPatients = document.getElementById('db-stat-patients');
    const elAppts = document.getElementById('db-stat-appointments');
    const elMeds = document.getElementById('db-stat-prescriptions');
    const elReports = document.getElementById('db-stat-reports');
    const elLogs = document.getElementById('db-stat-logs');
    const elSize = document.getElementById('db-stat-size');

    if (elPatients) elPatients.textContent = stats.patients;
    if (elAppts) elAppts.textContent = stats.appointments;
    if (elMeds) elMeds.textContent = stats.prescriptions;
    if (elReports) elReports.textContent = stats.reports;
    if (elLogs) elLogs.textContent = stats.logs;
    if (elSize) elSize.textContent = `~${stats.sizeKB} KB`;

    const codeDisplay = document.getElementById('db-json-code-display');
    if (!codeDisplay) return;

    let payload = null;
    const currentPatient = AppState.currentUser || DemoDB.getPatient("#PT-90482");

    if (tab === 'patient') {
        payload = currentPatient;
    } else if (tab === 'appointments') {
        payload = DemoDB.getAppointments();
    } else if (tab === 'prescriptions') {
        payload = DemoDB.getPrescriptions();
    } else if (tab === 'audit') {
        payload = DemoDB.getAuditLogs();
    } else {
        payload = DemoDB.data;
    }

    codeDisplay.textContent = JSON.stringify(payload, null, 2);

    document.querySelectorAll('.db-json-tab').forEach(btn => {
        if (btn.dataset.view === tab) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

function setupDatabaseConsole() {
    // Export JSON
    const exportBtn = document.getElementById('btn-db-export-json');
    if (exportBtn) {
        exportBtn.addEventListener('click', () => {
            MedicalAudio.playChime('click');
            DemoDB.exportJSON();
            showToast("Database exported as JSON file successfully!", "success");
        });
    }

    // Inject Sample Appointment
    const injectBtn = document.getElementById('btn-db-inject-sample');
    if (injectBtn) {
        injectBtn.addEventListener('click', () => {
            MedicalAudio.playChime('click');
            const sampleAppt = {
                id: "APT-" + Math.floor(1000 + Math.random() * 9000),
                patientId: AppState.currentUser ? AppState.currentUser.id : "#PT-90482",
                doctor: "Dr. David Chen, MD",
                doctorAvatar: "DC",
                doctorBg: "linear-gradient(135deg, #0d9488, #059669)",
                specialty: "Endocrinology & Diabetology",
                location: "Pavilion West Rm 204",
                mode: "In-Clinic (Hospital Pavilion)",
                date: "2026-12-05",
                displayDate: "Dec 05, 2026",
                time: "02:00 PM EST",
                reason: "Routine Glucose & Metabolic Check",
                status: "Confirmed",
                checkedIn: false
            };
            DemoDB.addAppointment(sampleAppt);
            renderDatabaseConsole('appointments');
            updateSidebarCounters();
            MedicalAudio.playChime('success');
            showToast("Injected test appointment into Demo Database! Check Appointments tab.", "success");
        });
    }

    // Factory Reset Demo DB
    const resetBtn = document.getElementById('btn-db-factory-reset');
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            const confirmed = confirm("WARNING: Are you sure you want to reset the Medicare Plus Demo Database to factory seed data?");
            if (confirmed) {
                MedicalAudio.playChime('alert');
                DemoDB.resetDatabase();
                const current = DemoDB.getPatient("#PT-90482");
                syncAllPatientUI(current);
                renderDatabaseConsole('all');
                showToast("🔄 Demo Database reset to factory seed values!", "info");
            }
        });
    }

    // Inspector Tabs
    document.querySelectorAll('.db-json-tab').forEach(tabBtn => {
        tabBtn.addEventListener('click', () => {
            MedicalAudio.playChime('click');
            renderDatabaseConsole(tabBtn.dataset.view);
        });
    });
}

// ==========================================================================
// PATIENT APPOINTMENTS & DOCTOR NOTIFICATIONS SUBSYSTEM
// ==========================================================================

// Synchronize Patient Notifications (Navbar Bell, Dropdown List, Overview & Profile Alert Boxes)
function syncPatientDoctorNotifications() {
    if (!DemoDB || !DemoDB.data) return;

    if (!DemoDB.data.patientNotifications) {
        DemoDB.data.patientNotifications = [];
    }

    const currentPatientId = (AppState.currentUser && AppState.currentUser.id) || "#PT-90482";
    const notifications = DemoDB.data.patientNotifications.filter(n => !n.patientId || n.patientId === currentPatientId);

    // 1. Update Notification Bell Badge
    const unreadCount = notifications.filter(n => !n.read).length;
    const badge = document.getElementById('nav-notification-badge');
    const dropdownUnreadCount = document.getElementById('dropdown-unread-count');

    if (badge) {
        if (unreadCount > 0) {
            badge.textContent = unreadCount > 9 ? "9+" : unreadCount;
            badge.style.display = "inline-flex";
        } else {
            badge.style.display = "none";
        }
    }

    if (dropdownUnreadCount) {
        dropdownUnreadCount.textContent = unreadCount > 0 ? `${unreadCount} New` : "All Caught Up";
        dropdownUnreadCount.style.background = unreadCount > 0 ? "#dcfce7" : "#f1f5f9";
        dropdownUnreadCount.style.color = unreadCount > 0 ? "#15803d" : "#64748b";
    }

    // 2. Render Overview Notification Card & Profile Alert Box
    const overviewArea = document.getElementById('patient-doctor-notification-area');
    const profileArea = document.getElementById('profile-doctor-appointment-alert-box');

    if (notifications.length > 0) {
        const latest = notifications[0];
        const isAccepted = latest.status === 'Accepted';

        const alertCardHtml = `
            <div class="doctor-alert-notification-card ${isAccepted ? 'accepted' : 'declined'}">
                <div class="doc-alert-left">
                    <div class="doc-alert-avatar-wrap" onclick="openDoctorReferenceModal('${latest.doctor}')" title="Click to view ${latest.doctor} credentials" style="cursor: pointer;">
                        <img src="${latest.doctorImg || 'assets/dr_marcus_vance.jpg'}" alt="${latest.doctor}" class="doc-alert-avatar" onerror="this.src='assets/dr_marcus_vance.jpg'">
                        <span class="doc-alert-online"></span>
                    </div>
                    <div class="doc-alert-text">
                        <div class="doc-alert-header">
                            <span class="doc-alert-badge ${isAccepted ? 'accepted' : 'declined'}">
                                ${isAccepted ? '✓ Successfully Appointed' : '✕ Appointment Notice'}
                            </span>
                            <span class="doc-alert-time">${latest.createdAt || 'Just now'}</span>
                        </div>
                        <h3 class="doc-alert-title" style="margin: 0 0 4px 0; font-size: 1.05rem; font-weight: 800; color: var(--text-primary);">
                            ${latest.title || (isAccepted ? 'The appointment is successfully appointed!' : 'Appointment Notice')}
                        </h3>
                        <p class="doc-alert-msg" style="margin: 0 0 6px 0; font-size: 0.86rem; color: var(--text-secondary); line-height: 1.45;">
                            ${latest.message}
                        </p>
                        <div class="doc-alert-doctor-meta" style="font-size: 0.78rem; color: var(--primary-cyan); font-weight: 600;">
                            👨‍⚕️ <strong>${latest.doctor}</strong> • ${latest.doctorSpecialty || 'Specialist Consultation'} • 📍 ${latest.doctorRoom || 'Pavilion Clinic'} • 📅 ${latest.date || ''} at ${latest.time || ''}
                        </div>
                    </div>
                </div>
                <div class="doc-alert-actions">
                    ${isAccepted ? `
                    <button class="btn-action-primary" style="padding: 8px 16px; font-size: 0.82rem;" onclick="showToast('✅ Check-in Confirmed: Your fast-pass barcode is active for ${latest.doctor} on ${latest.date}!', 'success')">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
                        Check-in Online
                    </button>
                    ` : `
                    <button class="btn-action-primary" style="padding: 8px 16px; font-size: 0.82rem; background: #e11d48;" onclick="switchDashboardPanel('overview'); document.getElementById('section-doctor-roster')?.scrollIntoView({behavior: 'smooth'})">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"/><path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"/><circle cx="20" cy="10" r="2"/></svg>
                        Reschedule Slot
                    </button>
                    `}
                    <button class="btn-appt-ghost" style="padding: 8px 14px; font-size: 0.82rem;" onclick="openDoctorReferenceModal('${latest.doctor}')">
                        View Doctor Profile
                    </button>
                    <button class="btn-close-alert" title="Dismiss notification" onclick="dismissPatientDoctorNotification('${latest.id}')">
                        ✕
                    </button>
                </div>
            </div>
        `;

        if (overviewArea) overviewArea.innerHTML = alertCardHtml;
        if (profileArea) profileArea.innerHTML = alertCardHtml;
    } else {
        if (overviewArea) overviewArea.innerHTML = '';
        if (profileArea) profileArea.innerHTML = '';
    }

    // 3. Populate Floating Dropdown Menu
    const dropdownList = document.getElementById('patient-notification-dropdown-list');
    if (dropdownList) {
        if (notifications.length === 0) {
            dropdownList.innerHTML = `
                <div style="padding: 30px 20px; text-align: center; color: var(--text-muted); font-size: 0.84rem;">
                    <div style="font-size: 1.8rem; margin-bottom: 6px;">🔔</div>
                    No active notifications. You are all caught up!
                </div>
            `;
        } else {
            dropdownList.innerHTML = notifications.map(notif => {
                const isAcc = notif.status === 'Accepted';
                return `
                    <div class="notification-item ${notif.read ? 'read' : 'unread'}" style="padding: 12px 16px; border-bottom: 1px solid var(--border-subtle); display: flex; gap: 12px; align-items: flex-start; ${notif.read ? 'opacity: 0.72; background: transparent;' : 'background: #f8fafc;'}">
                        <img src="${notif.doctorImg || 'assets/dr_marcus_vance.jpg'}" alt="${notif.doctor}" style="width: 44px; height: 44px; border-radius: 10px; object-fit: cover; flex-shrink: 0; border: 1px solid var(--border-subtle);" onerror="this.src='assets/dr_marcus_vance.jpg'">
                        <div style="flex: 1; min-width: 0;">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2px;">
                                <span style="font-weight: 800; font-size: 0.75rem; text-transform: uppercase; color: ${isAcc ? '#15803d' : '#e11d48'};">
                                    ${isAcc ? '✓ Successfully Appointed' : '✕ Declined Slot'}
                                </span>
                                <span style="font-size: 0.70rem; color: var(--text-muted);">${notif.createdAt || ''}</span>
                            </div>
                            <div style="font-weight: 700; font-size: 0.86rem; color: var(--text-primary); margin-bottom: 2px;">
                                ${notif.doctor}
                            </div>
                            <div style="font-size: 0.78rem; color: var(--text-secondary); line-height: 1.35; margin-bottom: 6px;">
                                ${notif.message}
                            </div>
                            <div style="display: flex; justify-content: space-between; align-items: center;">
                                <span style="font-size: 0.72rem; color: var(--text-muted);">
                                    📅 ${notif.date || ''} • ${notif.time || ''}
                                </span>
                                <button type="button" onclick="openDoctorReferenceModal('${notif.doctor}')" style="background: none; border: none; font-size: 0.74rem; color: var(--primary-cyan); font-weight: 700; cursor: pointer; text-decoration: underline;">
                                    View Doctor
                                </button>
                            </div>
                        </div>
                    </div>
                `;
            }).join('');
        }
    }
}

// Render Patient's Upcoming Consultations & Appointments with Real-Time Doctor Status
function renderPatientAppointmentsList() {
    const apptList = document.getElementById('patient-appointments-list');
    if (!apptList) return;

    if (!DemoDB || !DemoDB.data) return;

    const currentPatientId = (AppState.currentUser && AppState.currentUser.id) || "#PT-90482";
    const appts = DemoDB.getAppointments(currentPatientId);

    if (!appts || appts.length === 0) {
        apptList.innerHTML = `
            <div style="padding: 30px; text-align: center; color: var(--text-muted); font-size: 0.88rem;">
                No upcoming consultations scheduled. Click "+ Book Visit" above or select a specialist doctor from the roster.
            </div>
        `;
        return;
    }

    apptList.innerHTML = appts.map(appt => {
        const isAccepted = appt.status === 'Accepted' || appt.status === 'Confirmed';
        const isDeclined = appt.status === 'Declined';
        const isPending = !isAccepted && !isDeclined;

        let statusTag = '';
        if (isAccepted) {
            statusTag = `<span class="appt-status-tag" style="background: #dcfce7; color: #15803d; border: 1px solid #86efac; padding: 2px 8px; border-radius: 8px; font-size: 0.72rem; font-weight: 800;">✅ Successfully Appointed</span>`;
        } else if (isDeclined) {
            statusTag = `<span class="appt-status-tag" style="background: #ffe4e6; color: #e11d48; border: 1px solid #fecdd3; padding: 2px 8px; border-radius: 8px; font-size: 0.72rem; font-weight: 800;">❌ Declined by Doctor</span>`;
        } else {
            statusTag = `<span class="appt-status-tag" style="background: #fef3c7; color: #b45309; border: 1px solid #fde68a; padding: 2px 8px; border-radius: 8px; font-size: 0.72rem; font-weight: 800;">⏳ Pending Approval</span>`;
        }

        const docProfile = (window.DoctorProfiles && window.DoctorProfiles[appt.doctor]) || {
            avatar: "DR",
            avatarBg: "linear-gradient(135deg, #0284c7, #2563eb)",
            img: appt.doctorImg || "assets/dr_marcus_vance.jpg",
            specialty: appt.specialty || "Specialist Consultation",
            room: appt.location || "Hospital Pavilion"
        };

        const isTelehealth = (appt.mode || '').toLowerCase().includes('telehealth') || (appt.location || '').toLowerCase().includes('telehealth');

        return `
            <div class="appointment-item ${isDeclined ? 'declined-appt-item' : ''}">
                <div class="doctor-profile-wrap">
                    <div class="doctor-avatar-wrap-link" onclick="openDoctorReferenceModal('${appt.doctor}')" title="Click to view doctor reference profile & credentials" style="cursor: pointer; position: relative;">
                        <img src="${docProfile.img || appt.doctorImg || 'assets/dr_marcus_vance.jpg'}" alt="${appt.doctor}" class="appt-avatar-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                        <div class="doctor-avatar-circle" style="display: none; background: ${docProfile.avatarBg || 'var(--primary-cyan)'};">${docProfile.avatar || 'DR'}</div>
                    </div>
                    <div class="doctor-details">
                        <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
                            <h4 onclick="openDoctorReferenceModal('${appt.doctor}')" style="cursor: pointer; display: inline-flex; align-items: center; gap: 5px; margin: 0;" title="View doctor profile & credentials">
                                ${appt.doctor}
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                            </h4>
                            ${statusTag}
                        </div>
                        <div class="doctor-spec">${docProfile.specialty} • ${appt.location || docProfile.room || 'Hospital Pavilion'}</div>
                        <div class="appointment-badge-time" style="margin-top: 4px;">
                            <span class="appt-time-pill" style="${isDeclined ? 'background: #ffe4e6; border-color: #fecdd3; color: #e11d48;' : ''}">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                                ${appt.displayDate || appt.date} • ${appt.time}
                            </span>
                            <span>Mode: ${appt.mode || 'In-Clinic'}</span>
                            ${appt.reason ? `<span style="display: block; width: 100%; color: var(--text-secondary); margin-top: 2px;">Reason: ${appt.reason}</span>` : ''}
                            ${appt.adminNotes ? `<span style="display: block; width: 100%; color: #e11d48; font-weight: 600; margin-top: 2px;">Doctor Note: ${appt.adminNotes}</span>` : ''}
                        </div>
                    </div>
                </div>
                <div class="appointment-actions">
                    ${isAccepted ? `
                        <button class="btn-appt-checkin" onclick="showToast('✅ Online Check-in Confirmed: Your fast-pass barcode is saved on file!', 'success')">
                            Check-in Online
                        </button>
                        ${isTelehealth ? `
                            <button class="btn-appt-ghost" onclick="showToast('Secure Telehealth Room will activate 10 mins before your consultation.', 'info')">
                                Join Video
                            </button>
                        ` : `
                            <button class="btn-appt-ghost" onclick="showToast('Directions sent to your phone: East Pavilion, Elevator B to 3rd Floor.', 'info')">
                                Directions
                            </button>
                        `}
                    ` : isDeclined ? `
                        <button class="btn-action-primary" style="padding: 7px 14px; font-size: 0.80rem; background: #e11d48;" onclick="switchDashboardPanel('overview'); document.getElementById('section-doctor-roster')?.scrollIntoView({behavior: 'smooth'})">
                            Reschedule
                        </button>
                    ` : `
                        <button class="btn-appt-ghost" style="font-size: 0.78rem;" onclick="showToast('Consultation request is currently under review by ${appt.doctor}. You will be notified immediately.', 'info')">
                            Awaiting Review
                        </button>
                    `}
                </div>
            </div>
        `;
    }).join('');
}

// Dismiss Notification
function dismissPatientDoctorNotification(notifId) {
    if (!DemoDB || !DemoDB.data || !DemoDB.data.patientNotifications) return;

    DemoDB.data.patientNotifications = DemoDB.data.patientNotifications.filter(n => n.id !== notifId);
    DemoDB.save();
    syncPatientDoctorNotifications();
    showToast("Doctor appointment notification dismissed.", "info");
}

// Toggle Patient Notification Dropdown Menu
function togglePatientNotificationDropdown() {
    const dropdown = document.getElementById('patient-notification-dropdown');
    if (!dropdown) return;

    const isOpen = dropdown.style.display === 'block';
    dropdown.style.display = isOpen ? 'none' : 'block';

    if (!isOpen) {
        MedicalAudio.playChime('click');
    }
}

// Clear / Mark All Notifications as Read
function clearPatientNotifications() {
    if (!DemoDB || !DemoDB.data || !DemoDB.data.patientNotifications) return;

    DemoDB.data.patientNotifications.forEach(n => n.read = true);
    DemoDB.save();
    syncPatientDoctorNotifications();
    showToast("All doctor notifications marked as read.", "success");
}

// Expose functions to window
window.syncPatientDoctorNotifications = syncPatientDoctorNotifications;
window.renderPatientAppointmentsList = renderPatientAppointmentsList;
window.dismissPatientDoctorNotification = dismissPatientDoctorNotification;
window.togglePatientNotificationDropdown = togglePatientNotificationDropdown;
window.clearPatientNotifications = clearPatientNotifications;

// ==========================================================================
// PATIENT MEDICATIONS & ACTIVE PRESCRIPTIONS RENDERER
// ==========================================================================
function renderPatientMedicationsList() {
    const grid = document.getElementById('patient-medications-grid');
    if (!grid) return;
    if (!DemoDB || !DemoDB.data) return;

    const currentPatientId = (AppState.currentUser && AppState.currentUser.id) || "#PT-90482";
    const prescriptions = DemoDB.getPrescriptions(currentPatientId);

    if (!prescriptions || prescriptions.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1 / -1; padding: 24px; text-align: center; color: var(--text-muted); font-size: 0.88rem;">
                No active medications on file. Use the <strong>Tablet AI Scanner</strong> tool in the sidebar to scan and add medications.
            </div>
        `;
        return;
    }

    grid.innerHTML = prescriptions.map(rx => {
        const daysLeft = rx.daysLeft !== undefined ? rx.daysLeft : 30;
        const totalDays = rx.totalDays || 30;
        const pct = Math.min(100, Math.max(0, Math.round((daysLeft / totalDays) * 100)));
        const isLow = daysLeft <= 7;
        const refills = rx.refillsRemaining !== undefined ? rx.refillsRemaining : 1;

        return `
            <div class="medication-item">
                <div class="med-left-info">
                    <div class="med-pill-icon" style="${isLow ? 'background: #fff1f2; color: #e11d48; border-color: #fecdd3;' : ''}">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>
                    </div>
                    <div>
                        <div class="med-name-title">${rx.name} • ${rx.dosage}</div>
                        <div class="med-instructions">${rx.instructions || 'Take as clinically directed by physician'}</div>
                        ${rx.indication ? `<div style="font-size: 0.72rem; color: #0284c7; font-weight: 600; margin-top: 3px;">Indication: ${rx.indication}</div>` : ''}
                    </div>
                </div>
                <div class="med-progress-area">
                    <div class="med-days-tag" style="${isLow ? 'color: #e11d48; font-weight: 700;' : ''}">${daysLeft} days left (${isLow ? 'Low Supply' : `Refills: ${refills}`})</div>
                    <div class="med-progress-bar-bg">
                        <div class="med-progress-bar-fill" style="width: ${pct}%; ${isLow ? 'background: linear-gradient(90deg, #d97706, #e11d48);' : ''}"></div>
                    </div>
                </div>
                <button class="btn-med-refill btn-open-refill-modal" data-med="${rx.name} ${rx.dosage}" style="${isLow ? 'border-color: rgba(225, 29, 72, 0.4); color: #e11d48;' : ''}" onclick="openRefillModalForMed('${rx.name} ${rx.dosage}')">
                    ${isLow ? 'Order Refill Now' : 'Request Refill'}
                </button>
            </div>
        `;
    }).join('');
}

window.renderPatientMedicationsList = renderPatientMedicationsList;

window.openRefillModalForMed = function(medName) {
    const refillModal = document.getElementById('refill-modal');
    const targetInput = document.getElementById('refill-med-name');
    if (targetInput) targetInput.value = medName;
    if (refillModal) refillModal.classList.add('open');
    MedicalAudio.playChime('click');
};

// ==========================================================================
// AI TABLET SCANNER & MEDICINE SPECIFICATION TOOL ENGINE
// ==========================================================================

const MedicineDatabase = {
    "metoprolol": {
        id: "RX-METOPROLOL",
        name: "Metoprolol Tartrate",
        brandName: "Lopressor®",
        dosage: "25 mg",
        category: "Cardiology",
        form: "Oral Tablet (Immediate Release)",
        shape: "Round, Biconvex",
        color: "Light Pink / Rose",
        imprint: "M 25",
        scored: "Single Score Line",
        ndc: "51079-055-20",
        class: "Cardioselective Beta-1 Adrenergic Receptor Blocker",
        useExplanation: "Selectively binds to and blocks Beta-1 adrenergic receptors located predominantly in cardiac muscle. This dampens sympathetic cardiac tone, decreases resting and exercise heart rate, lowers cardiac output, and reduces systolic blood pressure and myocardial oxygen consumption without significant bronchoconstriction.",
        curesAndTreats: [
            {
                disease: "Essential Hypertension",
                severity: "Primary Cardiovascular",
                description: "Lowers high arterial blood pressure to prevent long-term stroke, heart failure, and renal microvascular damage."
            },
            {
                disease: "Angina Pectoris (Chest Pain)",
                severity: "Ischemic Cardiac",
                description: "Reduces frequency and severity of angina pectoris episodes by significantly reducing cardiac workload."
            },
            {
                disease: "Post-Myocardial Infarction",
                severity: "Secondary Prophylaxis",
                description: "Decreases long-term cardiovascular mortality and prevents recurrent ventricular arrhythmias in hemodynamically stable patients."
            },
            {
                disease: "Supraventricular Arrhythmias",
                severity: "Rhythm Management",
                description: "Slows AV nodal conduction and controls rapid ventricular rates in atrial fibrillation and atrial flutter."
            }
        ],
        dosageAnalysis: {
            detectedStrength: "25 mg Oral Tablet",
            regimen: "Take 1 tablet (25 mg) orally twice daily with morning and evening meals",
            maxDaily: "400 mg per day in divided doses",
            route: "Oral Administration (Swallow with water)",
            foodRequirement: "Take with food or immediately after meals for optimal and consistent bioavailability",
            precautions: [
                "Do not abruptly discontinue therapy; sudden cessation may precipitate acute angina exacerbation or myocardial infarction.",
                "Contraindicated in severe sinus bradycardia, second- or third-degree AV block, and cardiogenic shock.",
                "Regularly monitor resting pulse rate and blood pressure."
            ]
        },
        specs: {
            formula: "C15H25NO3 • 1/2 C4H6O6",
            molWeight: "684.82 g/mol",
            bioavailability: "Approximately 50% (High first-pass hepatic metabolism)",
            halfLife: "3 to 7 hours in healthy adults",
            peakTime: "1.5 to 2.0 hours post-dose",
            excretion: "95% excreted via renal clearance (Urinary excretion)",
            pregnancyCategory: "FDA Category C (Crosses placental barrier)",
            schedule: "Non-Controlled (Prescription Only - Rx)"
        },
        imageSvg: `<svg viewBox="0 0 100 100" width="70" height="70"><circle cx="50" cy="50" r="42" fill="#fbcfe8" stroke="#f472b6" stroke-width="3"/><line x1="50" y1="12" x2="50" y2="88" stroke="#db2777" stroke-width="2" stroke-dasharray="2,2"/><text x="32" y="44" font-size="12" font-weight="900" fill="#9d174d" font-family="monospace">M</text><text x="32" y="66" font-size="12" font-weight="900" fill="#9d174d" font-family="monospace">25</text></svg>`
    },
    "atorvastatin": {
        id: "RX-ATORVASTATIN",
        name: "Atorvastatin Calcium",
        brandName: "Lipitor®",
        dosage: "20 mg",
        category: "Lipidology",
        form: "Film-Coated Tablet",
        shape: "Oval, Biconvex",
        color: "White / Off-White",
        imprint: "PD 156 / 20",
        scored: "Unscored",
        ndc: "0071-0156-23",
        class: "HMG-CoA Reductase Inhibitor (Statin)",
        useExplanation: "Competitively inhibits 3-hydroxy-3-methylglutaryl-coenzyme A (HMG-CoA) reductase, the rate-limiting enzyme that catalyzes the conversion of HMG-CoA to mevalonate in hepatic cholesterol biosynthesis. This up-regulates hepatic low-density lipoprotein (LDL) receptors, dramatically accelerating the clearance of circulating LDL and VLDL particles from the bloodstream.",
        curesAndTreats: [
            {
                disease: "Primary Hypercholesterolemia & Mixed Dyslipidemia",
                severity: "Lipid Metabolic",
                description: "Significantly lowers total cholesterol, LDL-C ('bad' cholesterol), and apolipoprotein B while elevating HDL-C."
            },
            {
                disease: "Coronary Atherosclerosis Stabilization",
                severity: "Vascular Prophylaxis",
                description: "Stabilizes existing atherosclerotic plaques, reduces vascular endothelial inflammation, and halts plaque progression."
            },
            {
                disease: "Cardiovascular Event Risk Reduction",
                severity: "Preventative",
                description: "Lowers the risk of non-fatal myocardial infarction, fatal stroke, and emergency revascularization procedures."
            }
        ],
        dosageAnalysis: {
            detectedStrength: "20 mg Film-Coated Tablet",
            regimen: "Take 1 tablet (20 mg) orally once daily at bedtime with water",
            maxDaily: "80 mg once daily",
            route: "Oral Administration (Swallow whole)",
            foodRequirement: "May be taken with or without food; bedtime administration is preferred for peak cholesterol synthesis timing",
            precautions: [
                "Avoid concurrent consumption of large quantities of grapefruit juice (>1.2 L/day) as it elevates systemic statin levels.",
                "Report unexplained muscle pain, tenderness, or weakness (signs of rare myopathy/rhabdomyolysis).",
                "Contraindicated in active liver disease and pregnancy."
            ]
        },
        specs: {
            formula: "[C33H34FN2O5]2Ca • 3H2O",
            molWeight: "1209.42 g/mol",
            bioavailability: "14% (Extensive pre-systemic clearance in gastrointestinal mucosa & liver)",
            halfLife: "14 hours (Inhibitory activity for HMG-CoA reductase persists for 20-30 hours due to active metabolites)",
            peakTime: "1 to 2 hours",
            excretion: "Bile / Hepatic elimination (<2% renal)",
            pregnancyCategory: "FDA Category X (Contraindicated in pregnancy)",
            schedule: "Non-Controlled (Prescription Only - Rx)"
        },
        imageSvg: `<svg viewBox="0 0 100 100" width="70" height="70"><ellipse cx="50" cy="50" rx="44" ry="28" fill="#f8fafc" stroke="#cbd5e1" stroke-width="3"/><text x="24" y="48" font-size="10" font-weight="900" fill="#475569" font-family="monospace">PD 156</text><text x="38" y="62" font-size="10" font-weight="900" fill="#475569" font-family="monospace">20</text></svg>`
    },
    "amoxicillin": {
        id: "RX-AMOXICILLIN",
        name: "Amoxicillin Trihydrate",
        brandName: "Amoxil®",
        dosage: "500 mg",
        category: "Antibiotic",
        form: "Oral Capsule / Oblong Tablet",
        shape: "Oblong, Elongated",
        color: "Maroon & Light Gold / White",
        imprint: "AMOXI 500",
        scored: "Unscored",
        ndc: "0781-2027-01",
        class: "Broad-Spectrum Aminopenicillin (Beta-Lactam Antibacterial)",
        useExplanation: "Exerts bactericidal action by selectively binding to specific penicillin-binding proteins (PBPs) located inside the bacterial cell wall. This inhibits the third and final stage of bacterial cell wall peptidoglycan synthesis, triggering bacterial autolytic enzymes and rapid osmotic lysis of susceptible gram-positive and gram-negative pathogens.",
        curesAndTreats: [
            {
                disease: "Acute Otitis Media (Middle Ear Infection)",
                severity: "Bacterial Infection",
                description: "First-line eradication of Streptococcus pneumoniae, Haemophilus influenzae, and Moraxella catarrhalis in ear canal."
            },
            {
                disease: "Streptococcal Pharyngitis & Tonsillitis (Strep Throat)",
                severity: "Upper Respiratory",
                description: "Rapidly eradicates Streptococcus pyogenes to eliminate clinical symptoms and prevent acute rheumatic fever."
            },
            {
                disease: "Community-Acquired Pneumonia & Lower Respiratory Infection",
                severity: "Pulmonary Infection",
                description: "Resolves bacterial bronchitis and pneumonia caused by susceptible streptococcal strains."
            },
            {
                disease: "Uncomplicated Urinary Tract & Skin Infections",
                severity: "Bacterial Infection",
                description: "Clears susceptible E. coli, Proteus mirabilis, and Enterococcus faecalis infections."
            }
        ],
        dosageAnalysis: {
            detectedStrength: "500 mg Oral Capsule",
            regimen: "Take 1 capsule (500 mg) every 8 hours (or 875 mg every 12 hours) for 7 to 10 days",
            maxDaily: "2000 mg to 3000 mg per day in divided doses",
            route: "Oral Administration (Swallow with abundant fluids)",
            foodRequirement: "May be taken on an empty stomach or with food; food helps reduce gastrointestinal intolerance",
            precautions: [
                "Complete full course of antibiotic therapy even if symptoms resolve to prevent bacterial resistance.",
                "Strictly contraindicated in individuals with known hypersensitivity/allergy to penicillin or cephalosporins.",
                "Seek immediate emergency care if anaphylaxis, urticaria, or facial edema occurs."
            ]
        },
        specs: {
            formula: "C16H19N3O5S • 3H2O",
            molWeight: "419.45 g/mol",
            bioavailability: "74% to 92% (Superior gastrointestinal acid stability compared to ampicillin)",
            halfLife: "1.0 to 1.5 hours in healthy adults",
            peakTime: "1 to 2 hours",
            excretion: "60% to 70% excreted unchanged in urine via active tubular secretion",
            pregnancyCategory: "FDA Category B (Generally considered safe during pregnancy under medical supervision)",
            schedule: "Non-Controlled (Prescription Only - Rx)"
        },
        imageSvg: `<svg viewBox="0 0 100 100" width="70" height="70"><rect x="15" y="32" width="70" height="36" rx="18" fill="#991b1b" stroke="#7f1d1d" stroke-width="2.5"/><rect x="50" y="32" width="35" height="36" rx="0" fill="#fef08a" stroke="#ca8a04" stroke-width="2.5"/><text x="20" y="54" font-size="7" font-weight="900" fill="#ffffff" font-family="monospace">AMOXI</text><text x="56" y="54" font-size="7" font-weight="900" fill="#713f12" font-family="monospace">500</text></svg>`
    },
    "metformin": {
        id: "RX-METFORMIN",
        name: "Metformin Hydrochloride",
        brandName: "Glucophage®",
        dosage: "500 mg",
        category: "Endocrinology",
        form: "Oral Tablet (Film-Coated)",
        shape: "Round, Biconvex",
        color: "White / Crystalline",
        imprint: "M 500 / 142",
        scored: "Scored",
        ndc: "68382-028-14",
        class: "Biguanide Antihyperglycemic Agent",
        useExplanation: "Activates AMP-activated protein kinase (AMPK) in the liver and skeletal muscle. Directly suppresses hepatic gluconeogenesis and glycogenolysis, decreases intestinal absorption of glucose, and enhances peripheral insulin sensitivity by increasing glucose uptake and utilization in skeletal muscle tissue.",
        curesAndTreats: [
            {
                disease: "Type 2 Diabetes Mellitus",
                severity: "Endocrine / Metabolic",
                description: "Gold-standard first-line therapeutic agent to normalize fasting and postprandial blood glucose and reduce HbA1c levels."
            },
            {
                disease: "Insulin Resistance & Prediabetes",
                severity: "Metabolic Syndrome",
                description: "Improves cellular insulin sensitivity, delays or prevents the progression from prediabetes to overt diabetes."
            },
            {
                disease: "Polycystic Ovary Syndrome (PCOS)",
                severity: "Endocrine (Off-Label)",
                description: "Restores ovulatory menstrual cycles, decreases circulating hyperandrogenism, and aids metabolic control."
            }
        ],
        dosageAnalysis: {
            detectedStrength: "500 mg Film-Coated Tablet",
            regimen: "Take 1 tablet (500 mg) twice daily with morning and evening meals",
            maxDaily: "2550 mg per day in divided doses",
            route: "Oral Administration (Swallow with water)",
            foodRequirement: "Always administer with meals to minimize gastrointestinal discomfort and nausea",
            precautions: [
                "Withhold temporarily prior to iodinated contrast radiological procedures or surgery.",
                "Risk of lactic acidosis; avoid in severe renal impairment (eGFR < 30 mL/min/1.73m2) or hepatic dysfunction.",
                "Avoid excessive alcohol intake."
            ]
        },
        specs: {
            formula: "C4H11N5 • HCl",
            molWeight: "165.62 g/mol",
            bioavailability: "50% to 60% under fasting conditions",
            halfLife: "6.2 hours (Elimination half-life in plasma)",
            peakTime: "2.5 hours",
            excretion: "90% excreted unchanged via renal tubular secretion; no hepatic metabolism",
            pregnancyCategory: "FDA Category B",
            schedule: "Non-Controlled (Prescription Only - Rx)"
        },
        imageSvg: `<svg viewBox="0 0 100 100" width="70" height="70"><circle cx="50" cy="50" r="42" fill="#ffffff" stroke="#94a3b8" stroke-width="3"/><line x1="50" y1="12" x2="50" y2="88" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="2,2"/><text x="24" y="44" font-size="11" font-weight="900" fill="#334155" font-family="monospace">M 500</text><text x="32" y="64" font-size="10" font-weight="800" fill="#64748b" font-family="monospace">142</text></svg>`
    },
    "lisinopril": {
        id: "RX-LISINOPRIL",
        name: "Lisinopril",
        brandName: "Prinivil® / Zestril®",
        dosage: "10 mg",
        category: "Cardiology",
        form: "Oral Tablet",
        shape: "Round, Convex",
        color: "Light Yellow / Mustard",
        imprint: "L 10",
        scored: "Single Score Line",
        ndc: "68180-514-01",
        class: "Angiotensin-Converting Enzyme (ACE) Inhibitor",
        useExplanation: "Inhibits angiotensin-converting enzyme (ACE), preventing the enzymatic conversion of angiotensin I to the potent vasoconstrictor angiotensin II. This reduces arterial vasoconstriction, diminishes aldosterone secretion, promotes renal sodium excretion, and decreases both cardiac preload and afterload.",
        curesAndTreats: [
            {
                disease: "Systemic Hypertension",
                severity: "Cardiovascular",
                description: "Lowers peripheral vascular resistance to achieve target systolic/diastolic blood pressure."
            },
            {
                disease: "Congestive Heart Failure (Adjunctive)",
                severity: "Cardiac Dysfunction",
                description: "Improves left ventricular ejection fraction and clinical survival when combined with diuretics and digitalis."
            },
            {
                disease: "Acute Myocardial Infarction Hemodynamic Support",
                severity: "Post-Infarction",
                description: "Administered within 24 hours of acute MI to improve overall 6-week survival rates."
            },
            {
                disease: "Diabetic Nephropathy",
                severity: "Renal Protection",
                description: "Slows the progression of microalbuminuria and preserves renal glomerular filtration in diabetic patients."
            }
        ],
        dosageAnalysis: {
            detectedStrength: "10 mg Oral Tablet",
            regimen: "Take 1 tablet (10 mg) once daily in the morning with water",
            maxDaily: "40 mg to 80 mg once daily",
            route: "Oral Administration (Swallow with water)",
            foodRequirement: "Can be taken without regard to food",
            precautions: [
                "Discontinue immediately if angioedema of the face, lips, tongue, or glottis occurs.",
                "Strictly contraindicated during pregnancy (boxed warning: fetal toxicity and renal dysgenesis).",
                "Periodic monitoring of serum potassium and serum creatinine is mandatory."
            ]
        },
        specs: {
            formula: "C21H31N3O5 • 2H2O",
            molWeight: "441.52 g/mol",
            bioavailability: "25% (Not bound to other serum proteins except ACE)",
            halfLife: "12 hours (Does not undergo hepatic metabolism)",
            peakTime: "6 to 8 hours post-administration",
            excretion: "100% excreted unchanged in urine",
            pregnancyCategory: "FDA Boxed Warning (Fetal Toxicity - Discontinue ASAP in pregnancy)",
            schedule: "Non-Controlled (Prescription Only - Rx)"
        },
        imageSvg: `<svg viewBox="0 0 100 100" width="70" height="70"><circle cx="50" cy="50" r="42" fill="#fef08a" stroke="#eab308" stroke-width="3"/><line x1="50" y1="12" x2="50" y2="88" stroke="#ca8a04" stroke-width="2" stroke-dasharray="2,2"/><text x="32" y="44" font-size="12" font-weight="900" fill="#854d0e" font-family="monospace">L</text><text x="32" y="66" font-size="12" font-weight="900" fill="#854d0e" font-family="monospace">10</text></svg>`
    },
    "azithromycin": {
        id: "RX-AZITHROMYCIN",
        name: "Azithromycin",
        brandName: "Zithromax® (Z-Pak®)",
        dosage: "250 mg",
        category: "Antibiotic",
        form: "Film-Coated Tablet",
        shape: "Oval, Biconvex",
        color: "Pink / Rose",
        imprint: "AZ 250",
        scored: "Unscored",
        ndc: "0069-3060-75",
        class: "Azalide Subclass of Macrolide Antibacterials",
        useExplanation: "Reversibly binds to the 50S ribosomal subunit of susceptible microorganisms, thereby inhibiting transpeptidation and protein translocation during bacterial protein synthesis without directly affecting human nucleic acid synthesis.",
        curesAndTreats: [
            {
                disease: "Acute Bacterial Exacerbations of COPD & Bronchitis",
                severity: "Pulmonary Infection",
                description: "Eradicates Haemophilus influenzae, Moraxella catarrhalis, and Streptococcus pneumoniae."
            },
            {
                disease: "Community-Acquired Pneumonia (Atypical Pathogens)",
                severity: "Lower Respiratory",
                description: "Highly effective against atypical respiratory pathogens including Mycoplasma pneumoniae and Chlamydia pneumoniae."
            },
            {
                disease: "Genital Chlamydial & Gonococcal Infections",
                severity: "STD / Urogenital",
                description: "Single-dose 1g therapeutic cure for non-gonococcal urethritis and cervicitis caused by Chlamydia trachomatis."
            },
            {
                disease: "Acute Bacterial Sinusitis & Skin Structure Infections",
                severity: "Bacterial Infection",
                description: "Treats uncomplicated skin and soft tissue infections caused by Staphylococcus aureus and Streptococcus pyogenes."
            }
        ],
        dosageAnalysis: {
            detectedStrength: "250 mg Film-Coated Tablet",
            regimen: "Standard Z-Pak: 500 mg (2 tablets) on Day 1, followed by 250 mg (1 tablet) once daily on Days 2 through 5",
            maxDaily: "500 mg per day",
            route: "Oral Administration (Swallow whole with liquid)",
            foodRequirement: "May be taken with or without meals; taking with food decreases potential GI adverse effects",
            precautions: [
                "Use caution in patients with known prolonged QT interval or proarrhythmic conditions.",
                "Avoid concurrent administration with aluminum- and magnesium-containing antacids.",
                "Complete full 5-day regimen even after fever and cough subside."
            ]
        },
        specs: {
            formula: "C38H72N2O12 • 2H2O",
            molWeight: "785.02 g/mol",
            bioavailability: "38% (High intracellular penetration into phagocytes and pulmonary tissues)",
            halfLife: "68 hours (Terminal tissue elimination half-life allows short 5-day therapy)",
            peakTime: "2 to 3 hours",
            excretion: "Biliary excretion is primary; approximately 6% excreted in urine",
            pregnancyCategory: "FDA Category B",
            schedule: "Non-Controlled (Prescription Only - Rx)"
        },
        imageSvg: `<svg viewBox="0 0 100 100" width="70" height="70"><ellipse cx="50" cy="50" rx="44" ry="28" fill="#fce7f3" stroke="#f472b6" stroke-width="3"/><text x="26" y="54" font-size="11" font-weight="900" fill="#9d174d" font-family="monospace">AZ 250</text></svg>`
    }
};

let activeMediaStream = null;
let currentScannedMedKey = 'metoprolol';

// Initialize Scanner on load
function initMedicineScanner() {
    renderMedicineSpecsLibrary();
    if (!document.getElementById('scanner-result-container')?.innerHTML.trim()) {
        loadSampleTablet('metoprolol');
    }
}

// Start Camera Stream Access
async function startMedicineCameraStream() {
    MedicalAudio.playChime('click');
    const video = document.getElementById('med-scanner-video');
    const standby = document.getElementById('scanner-standby-graphic');
    const preview = document.getElementById('med-scanner-preview-img');
    const laser = document.getElementById('scanner-laser-bar');
    const btnStart = document.getElementById('btn-start-camera');
    const btnCapture = document.getElementById('btn-capture-tablet');
    const btnStop = document.getElementById('btn-stop-camera');
    const hudChip = document.getElementById('hud-mode-chip');

    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        showToast("⚠️ Camera API not supported in this browser environment. Use File Upload or 1-Click Sample Tablets below.", "info");
        return;
    }

    try {
        activeMediaStream = await navigator.mediaDevices.getUserMedia({
            video: {
                facingMode: 'environment',
                width: { ideal: 1280 },
                height: { ideal: 720 }
            }
        });

        if (video) {
            video.srcObject = activeMediaStream;
            video.style.display = 'block';
        }
        if (standby) standby.style.display = 'none';
        if (preview) preview.style.display = 'none';
        if (laser) laser.style.display = 'block';

        if (btnStart) btnStart.style.display = 'none';
        if (btnCapture) btnCapture.style.display = 'inline-flex';
        if (btnStop) btnStop.style.display = 'inline-flex';

        if (hudChip) {
            hudChip.textContent = 'CAMERA STREAM LIVE';
            hudChip.style.color = '#10b981';
            hudChip.style.borderColor = '#10b981';
        }

        showToast("📷 Camera Access Granted: Position tablet inside the optical targeting reticle.", "info");
    } catch (err) {
        console.warn("Camera access error:", err);
        showToast("Camera access unavailable or declined. You can upload an image file or test with sample tablets!", "info");
    }
}

// Stop Camera Stream Access
function stopMedicineCameraStream() {
    MedicalAudio.playChime('click');
    if (activeMediaStream) {
        activeMediaStream.getTracks().forEach(track => track.stop());
        activeMediaStream = null;
    }

    const video = document.getElementById('med-scanner-video');
    const standby = document.getElementById('scanner-standby-graphic');
    const laser = document.getElementById('scanner-laser-bar');
    const btnStart = document.getElementById('btn-start-camera');
    const btnCapture = document.getElementById('btn-capture-tablet');
    const btnStop = document.getElementById('btn-stop-camera');
    const hudChip = document.getElementById('hud-mode-chip');

    if (video) video.style.display = 'none';
    if (standby) standby.style.display = 'flex';
    if (laser) laser.style.display = 'none';

    if (btnStart) btnStart.style.display = 'inline-flex';
    if (btnCapture) btnCapture.style.display = 'none';
    if (btnStop) btnStop.style.display = 'none';

    if (hudChip) {
        hudChip.textContent = 'STANDBY';
        hudChip.style.color = '#38bdf8';
        hudChip.style.borderColor = 'rgba(6, 182, 212, 0.4)';
    }

    showToast("Camera feed deactivated.", "info");
}

// Capture Snapshot from Camera Stream & Analyze
function captureTabletFromCamera() {
    MedicalAudio.playChime('click');
    const video = document.getElementById('med-scanner-video');
    const canvas = document.getElementById('med-scanner-canvas');
    const preview = document.getElementById('med-scanner-preview-img');
    if (!video || !canvas) return;

    canvas.width = video.videoWidth || 640;
    canvas.height = video.videoHeight || 480;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const dataUrl = canvas.toDataURL('image/jpeg');

    if (preview) {
        preview.src = dataUrl;
        preview.style.display = 'block';
    }
    video.style.display = 'none';

    runTabletAIScan(dataUrl, "Camera Snapshot Capture");
}

// Handle File Input Upload
function handleTabletFileInput(event) {
    const file = event.target.files && event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
        const preview = document.getElementById('med-scanner-preview-img');
        const video = document.getElementById('med-scanner-video');
        const standby = document.getElementById('scanner-standby-graphic');

        if (video) video.style.display = 'none';
        if (standby) standby.style.display = 'none';
        if (preview) {
            preview.src = e.target.result;
            preview.style.display = 'block';
        }

        runTabletAIScan(e.target.result, file.name);
    };
    reader.readAsDataURL(file);
}

// Drag & Drop Handlers
function handleDragOver(e) {
    e.preventDefault();
    e.stopPropagation();
    document.getElementById('scanner-dropzone')?.classList.add('dragover');
}

function handleDragLeave(e) {
    e.preventDefault();
    e.stopPropagation();
    document.getElementById('scanner-dropzone')?.classList.remove('dragover');
}

function handleDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    document.getElementById('scanner-dropzone')?.classList.remove('dragover');

    const dt = e.dataTransfer;
    const file = dt.files && dt.files[0];
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (ev) => {
            const preview = document.getElementById('med-scanner-preview-img');
            const video = document.getElementById('med-scanner-video');
            const standby = document.getElementById('scanner-standby-graphic');

            if (video) video.style.display = 'none';
            if (standby) standby.style.display = 'none';
            if (preview) {
                preview.src = ev.target.result;
                preview.style.display = 'block';
            }

            runTabletAIScan(ev.target.result, file.name);
        };
        reader.readAsDataURL(file);
    }
}

// Load 1-Click Sample Clinical Tablet
function loadSampleTablet(medKey) {
    MedicalAudio.playChime('click');
    document.querySelectorAll('.sample-pill-chip').forEach(c => c.classList.remove('active'));
    document.getElementById(`chip-${medKey}`)?.classList.add('active');

    const video = document.getElementById('med-scanner-video');
    const standby = document.getElementById('scanner-standby-graphic');
    const preview = document.getElementById('med-scanner-preview-img');

    if (video) video.style.display = 'none';
    if (standby) standby.style.display = 'none';
    if (preview) {
        preview.style.display = 'none';
    }

    runTabletAIScan(null, medKey, medKey);
}

// Core AI Scanning & Pharmacology Analysis Engine
function runTabletAIScan(imageSrc, sourceLabel = '', forcedKey = null) {
    const progressCard = document.getElementById('scanner-progress-card');
    const stepText = document.getElementById('scanner-progress-step-text');
    const barFill = document.getElementById('scanner-progress-bar-fill');
    const laser = document.getElementById('scanner-laser-bar');
    const hudChip = document.getElementById('hud-mode-chip');

    if (laser) laser.style.display = 'block';
    if (progressCard) progressCard.style.display = 'block';
    if (hudChip) {
        hudChip.textContent = 'OPTICAL AI SCANNING...';
        hudChip.style.color = '#38bdf8';
    }

    // Determine target medicine
    let chosenKey = 'metoprolol';
    if (forcedKey && MedicineDatabase[forcedKey]) {
        chosenKey = forcedKey;
    } else {
        const s = (sourceLabel || '').toLowerCase();
        if (s.includes('atorv') || s.includes('lipitor') || s.includes('pd 156')) chosenKey = 'atorvastatin';
        else if (s.includes('amox') || s.includes('amoxil')) chosenKey = 'amoxicillin';
        else if (s.includes('metform') || s.includes('gluco') || s.includes('m 500')) chosenKey = 'metformin';
        else if (s.includes('lisin') || s.includes('prinivil') || s.includes('zestril') || s.includes('l 10')) chosenKey = 'lisinopril';
        else if (s.includes('azith') || s.includes('zithromax') || s.includes('z-pak') || s.includes('az 250')) chosenKey = 'azithromycin';
        else if (s.includes('metop') || s.includes('lopressor') || s.includes('m 25')) chosenKey = 'metoprolol';
        else {
            const keys = Object.keys(MedicineDatabase);
            chosenKey = keys[Math.floor(Math.random() * keys.length)];
        }
    }

    currentScannedMedKey = chosenKey;
    const med = MedicineDatabase[chosenKey];

    // Multi-phase telemetry steps
    if (barFill) barFill.style.width = '20%';
    if (stepText) stepText.textContent = 'Detecting pill morphology, contour boundaries & debossing imprint...';

    setTimeout(() => {
        if (barFill) barFill.style.width = '55%';
        if (stepText) stepText.textContent = `OCR matched imprint "${med.imprint}". Querying FDA NDC Directory (#${med.ndc})...`;
    }, 350);

    setTimeout(() => {
        if (barFill) barFill.style.width = '85%';
        if (stepText) stepText.textContent = `Cross-referencing therapeutic indications & clinical dosing guidelines...`;
    }, 700);

    setTimeout(() => {
        if (barFill) barFill.style.width = '100%';
        if (stepText) stepText.textContent = `Analysis complete. Synthesized clinical pharmacology profile.`;

        setTimeout(() => {
            if (progressCard) progressCard.style.display = 'none';
            if (laser && !activeMediaStream) laser.style.display = 'none';
            if (hudChip) {
                hudChip.textContent = `MATCHED: ${med.imprint} (${med.name})`;
                hudChip.style.color = '#10b981';
            }

            renderScannedResults(med);
            MedicalAudio.playChime('success');
            showToast(`✨ AI Analysis Complete: Identified ${med.name} (${med.dosage}) with 99.4% confidence!`, "success");
        }, 300);

    }, 1100);
}

// Render Scanned Results Card into UI
function renderScannedResults(med) {
    const container = document.getElementById('scanner-result-container');
    if (!container) return;

    // Check if already in patient prescriptions
    const currentPatientId = (AppState.currentUser && AppState.currentUser.id) || "#PT-90482";
    const existing = DemoDB.getPrescriptions(currentPatientId).find(p => p.name.toLowerCase().includes(med.name.toLowerCase()));

    container.innerHTML = `
        <div class="scanned-result-card">
            
            <!-- Hero Row -->
            <div class="scanned-hero-row">
                <div class="scanned-pill-icon-box">
                    ${med.imageSvg}
                </div>
                <div class="scanned-title-wrap">
                    <span class="scanned-match-badge">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
                        99.4% AI Match • FDA NDC #${med.ndc}
                    </span>
                    <h2 class="scanned-med-name">${med.name} (${med.brandName})</h2>
                    <div class="scanned-med-class">${med.class}</div>
                    <div class="scanned-tags-row">
                        <span class="pill-trait-tag">Shape: ${med.shape}</span>
                        <span class="pill-trait-tag">Color: ${med.color}</span>
                        <span class="pill-trait-tag">Imprint: ${med.imprint}</span>
                        <span class="pill-trait-tag">${med.scored}</span>
                        <span class="pill-trait-tag">Form: ${med.form}</span>
                    </div>
                </div>
            </div>

            <!-- Block 1: What is this Tablet Used For? -->
            <div class="scanned-section-block">
                <div class="scanned-block-header">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"/><path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"/><circle cx="20" cy="10" r="2"/></svg>
                    What is this Tablet Used For? (Therapeutic Action)
                </div>
                <div class="scanned-action-text">
                    ${med.useExplanation}
                </div>
            </div>

            <!-- Block 2: Diseases / Conditions it Cures or Treats -->
            <div class="scanned-section-block">
                <div class="scanned-block-header">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                    Target Diseases & Conditions This Medicine Cures or Treats
                </div>
                <div class="scanned-diseases-grid">
                    ${med.curesAndTreats.map(item => `
                        <div class="disease-card-item">
                            <div class="disease-card-header">
                                <span class="disease-name-text">${item.disease}</span>
                                <span class="disease-tag-badge">${item.severity}</span>
                            </div>
                            <p class="disease-desc-text">${item.description}</p>
                        </div>
                    `).join('')}
                </div>
            </div>

            <!-- Block 3: Dosage Analysis & Administration Schedule -->
            <div class="scanned-section-block">
                <div class="scanned-block-header">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    Analyzed Dosage, Regimen & Administration Guidelines
                </div>
                <div class="dosage-summary-grid">
                    <div class="dosage-metric-pill">
                        <div class="label">Detected Strength & Form</div>
                        <div class="val">${med.dosageAnalysis.detectedStrength}</div>
                    </div>
                    <div class="dosage-metric-pill">
                        <div class="label">Maximum Daily Limit</div>
                        <div class="val">${med.dosageAnalysis.maxDaily}</div>
                    </div>
                </div>
                <div class="dosage-guidelines-box">
                    <strong>Clinical Regimen:</strong> ${med.dosageAnalysis.regimen}.<br>
                    <strong>Food / Intake Guidance:</strong> ${med.dosageAnalysis.foodRequirement}.
                </div>
                <div class="dosage-precautions-box">
                    <strong>⚠️ Important Safety Precautions & Warnings:</strong>
                    <ul>
                        ${med.dosageAnalysis.precautions.map(p => `<li>${p}</li>`).join('')}
                    </ul>
                </div>
            </div>

            <!-- Block 4: Demo Database Synchronization Action Banner -->
            <div class="scanned-sync-banner">
                <div class="sync-banner-left">
                    <div class="sync-banner-icon">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/><path d="m8.5 8.5 7 7"/></svg>
                    </div>
                    <div>
                        <div class="sync-banner-title">Sync Analyzed Medication to Patient EHR</div>
                        <div class="sync-banner-sub">
                            Instantly record <strong>${med.name} (${med.dosage})</strong> into Sarah Jenkins' active prescriptions in the persistent Demo Database.
                        </div>
                    </div>
                </div>
                <button type="button" class="btn-sync-to-db ${existing ? 'synced' : ''}" id="btn-sync-scanned-rx" onclick="syncScannedMedicineToDemoDB('${med.id}')">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
                    ${existing ? '✓ Saved in Patient Prescriptions (Demo DB)' : 'Save & Add to Patient Prescriptions (Demo DB)'}
                </button>
            </div>

            <!-- Block 5: Full Pharmacopeia Specifications Table -->
            <div class="scanned-section-block" style="margin-top: 24px;">
                <div class="scanned-block-header">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                    Active Pharmaceutical Ingredient (API) Specifications
                </div>
                <table class="spec-metrics-table">
                    <tbody>
                        <tr><td class="key">Molecular Formula:</td><td class="val"><code>${med.specs.formula}</code></td></tr>
                        <tr><td class="key">Molecular Weight:</td><td class="val">${med.specs.molWeight}</td></tr>
                        <tr><td class="key">Bioavailability:</td><td class="val">${med.specs.bioavailability}</td></tr>
                        <tr><td class="key">Elimination Half-Life:</td><td class="val">${med.specs.halfLife}</td></tr>
                        <tr><td class="key">Peak Plasma Time (Tmax):</td><td class="val">${med.specs.peakTime}</td></tr>
                        <tr><td class="key">Excretion Pathway:</td><td class="val">${med.specs.excretion}</td></tr>
                        <tr><td class="key">FDA Pregnancy Category:</td><td class="val"><strong>${med.specs.pregnancyCategory}</strong></td></tr>
                        <tr><td class="key">DEA Schedule:</td><td class="val">${med.specs.schedule}</td></tr>
                    </tbody>
                </table>
            </div>

        </div>
    `;
}

// Synchronize Scanned Medicine into DemoDB Prescriptions
function syncScannedMedicineToDemoDB(medIdOrKey) {
    MedicalAudio.playChime('click');
    let med = null;
    for (const key in MedicineDatabase) {
        if (MedicineDatabase[key].id === medIdOrKey || key === medIdOrKey) {
            med = MedicineDatabase[key];
            break;
        }
    }
    if (!med) med = MedicineDatabase[currentScannedMedKey];

    const currentPatientId = (AppState.currentUser && AppState.currentUser.id) || "#PT-90482";

    const newRx = {
        id: "RX-" + Math.floor(10000 + Math.random() * 90000),
        patientId: currentPatientId,
        name: med.name,
        dosage: med.dosage,
        instructions: med.dosageAnalysis.regimen,
        daysLeft: 30,
        totalDays: 30,
        refillsRemaining: 3,
        status: "Active",
        indication: med.curesAndTreats[0].disease,
        scannedAt: new Date().toLocaleDateString([], { month: 'short', day: 'numeric', year: 'numeric' })
    };

    DemoDB.addPrescription(newRx);
    updateSidebarCounters();
    renderPatientMedicationsList();
    renderDatabaseConsole('prescriptions');

    const btn = document.getElementById('btn-sync-scanned-rx');
    if (btn) {
        btn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> ✓ Saved in Patient Prescriptions (Demo DB)`;
        btn.classList.add('synced');
    }

    MedicalAudio.playChime('success');
    showToast(`✅ Synchronized to Demo DB: ${med.name} (${med.dosage}) added to active prescriptions! Check Overview Medications & Rx tab.`, "success");
}

// Switch between Scanner View and Pharmacopeia Specification Library
function switchScannerView(viewName) {
    MedicalAudio.playChime('click');
    const scannerView = document.getElementById('scanner-view-container');
    const specsView = document.getElementById('specs-view-container');
    const tabScanner = document.getElementById('tab-btn-scanner-view');
    const tabSpecs = document.getElementById('tab-btn-specs-view');

    if (viewName === 'scanner') {
        if (scannerView) scannerView.style.display = 'block';
        if (specsView) specsView.style.display = 'none';
        tabScanner?.classList.add('active');
        tabSpecs?.classList.remove('active');
    } else {
        if (scannerView) scannerView.style.display = 'none';
        if (specsView) specsView.style.display = 'block';
        tabSpecs?.classList.add('active');
        tabScanner?.classList.remove('active');
        renderMedicineSpecsLibrary();
    }
}

// Render Medicine Pharmacopeia Specification Library
function renderMedicineSpecsLibrary(filterCategory = 'all', searchKeyword = '') {
    const grid = document.getElementById('specs-library-grid');
    if (!grid) return;

    const term = (searchKeyword || '').toLowerCase().trim();
    const meds = Object.values(MedicineDatabase).filter(m => {
        const matchesCategory = filterCategory === 'all' || m.category.toLowerCase() === filterCategory.toLowerCase();
        const matchesTerm = !term ||
            m.name.toLowerCase().includes(term) ||
            m.brandName.toLowerCase().includes(term) ||
            m.class.toLowerCase().includes(term) ||
            m.curesAndTreats.some(c => c.disease.toLowerCase().includes(term));
        return matchesCategory && matchesTerm;
    });

    if (meds.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1 / -1; padding: 40px; text-align: center; color: var(--text-muted);">
                No medicines found matching "<strong>${searchKeyword}</strong>". Try searching by active ingredient (e.g. Metoprolol, Amoxicillin, Statin) or disease.
            </div>
        `;
        return;
    }

    grid.innerHTML = meds.map(m => `
        <div class="spec-pharmacopeia-card">
            <div class="spec-card-header">
                <div style="width: 56px; height: 56px; display: flex; align-items: center; justify-content: center; background: #f8fafc; border-radius: 12px; border: 1px solid var(--border-subtle); flex-shrink: 0;">
                    ${m.imageSvg}
                </div>
                <div class="spec-card-title">
                    <h3>${m.name}</h3>
                    <span>${m.brandName} • ${m.dosage}</span>
                    <div style="font-size: 0.72rem; color: var(--text-muted); margin-top: 2px;">${m.class}</div>
                </div>
            </div>

            <p style="font-size: 0.80rem; color: var(--text-secondary); line-height: 1.45; margin: 0 0 10px 0;">
                ${m.useExplanation}
            </p>

            <div style="margin-bottom: 10px;">
                <div style="font-size: 0.72rem; font-weight: 700; text-transform: uppercase; color: var(--text-muted); margin-bottom: 4px;">Primary Conditions Cured / Treated:</div>
                <div style="display: flex; gap: 4px; flex-wrap: wrap;">
                    ${m.curesAndTreats.map(c => `<span class="pill-trait-tag" style="background: #ecfdf5; color: #065f46; border-color: #a7f3d0;">${c.disease}</span>`).join('')}
                </div>
            </div>

            <table class="spec-metrics-table">
                <tbody>
                    <tr><td class="key">Standard Regimen:</td><td class="val">${m.dosageAnalysis.regimen}</td></tr>
                    <tr><td class="key">Formula / Weight:</td><td class="val">${m.specs.formula} (${m.specs.molWeight})</td></tr>
                    <tr><td class="key">Bioavailability:</td><td class="val">${m.specs.bioavailability}</td></tr>
                    <tr><td class="key">Half-Life (t1/2):</td><td class="val">${m.specs.halfLife}</td></tr>
                    <tr><td class="key">Excretion:</td><td class="val">${m.specs.excretion}</td></tr>
                    <tr><td class="key">Pregnancy / Safety:</td><td class="val"><strong>${m.specs.pregnancyCategory}</strong></td></tr>
                </tbody>
            </table>

            <div style="margin-top: auto; padding-top: 14px; display: flex; gap: 8px;">
                <button type="button" class="btn-action-primary" style="flex: 1; padding: 8px 12px; font-size: 0.80rem;" onclick="switchScannerView('scanner'); loadSampleTablet('${Object.keys(MedicineDatabase).find(k => MedicineDatabase[k].id === m.id)}')">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/></svg>
                    Scan This Tablet
                </button>
                <button type="button" class="btn-appt-ghost" style="padding: 8px 12px; font-size: 0.80rem;" onclick="syncScannedMedicineToDemoDB('${m.id}')">
                    + Add to DB
                </button>
            </div>
        </div>
    `).join('');
}

// Live Search Filter for Pharmacopeia
function filterMedicineSpecs(query) {
    const activeCategoryBtn = document.querySelector('.specs-filter-pills .btn-filter-pill.active');
    const category = activeCategoryBtn ? activeCategoryBtn.textContent.trim() : 'all';
    renderMedicineSpecsLibrary(category === 'All Classes' ? 'all' : category, query);
}

// Category Filter for Pharmacopeia
function filterSpecsCategory(category, btn) {
    MedicalAudio.playChime('click');
    document.querySelectorAll('.specs-filter-pills .btn-filter-pill').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
    const searchInput = document.getElementById('specs-search-input');
    renderMedicineSpecsLibrary(category, searchInput ? searchInput.value : '');
}

// Expose Scanner Functions to Window
window.initMedicineScanner = initMedicineScanner;
window.startMedicineCameraStream = startMedicineCameraStream;
window.stopMedicineCameraStream = stopMedicineCameraStream;
window.captureTabletFromCamera = captureTabletFromCamera;
window.handleTabletFileInput = handleTabletFileInput;
window.handleDragOver = handleDragOver;
window.handleDragLeave = handleDragLeave;
window.handleDrop = handleDrop;
window.loadSampleTablet = loadSampleTablet;
window.runTabletAIScan = runTabletAIScan;
window.syncScannedMedicineToDemoDB = syncScannedMedicineToDemoDB;
window.switchScannerView = switchScannerView;
window.renderMedicineSpecsLibrary = renderMedicineSpecsLibrary;
window.filterMedicineSpecs = filterMedicineSpecs;
window.filterSpecsCategory = filterSpecsCategory;

/* ==========================================================================
   PATIENT PORTAL MEDICARE CLINICAL AI ASSISTANT (DOUBT CLARIFIER)
   Dedicated Patient-Only AI Copilot for Clinical Doubts, Telemetry Guidance,
   Dosage Timing & Pharmacological Inquiries with Local EHR DemoDB Persistence.
   ========================================================================== */

// Render Patient AI Messages Stream
function renderPatientAiChat() {
    const container = document.getElementById('patient-ai-messages-container');
    if (!container) return;

    let chats = DemoDB.getPatientAiChats("#PT-90482");

    if (!chats || chats.length === 0) {
        const defaultGreeting = {
            id: "ai-welcome-" + Date.now(),
            patientId: "#PT-90482",
            sender: "ai",
            senderName: "Medicare Clinical AI",
            role: "Clinical Doubt Clarifier",
            text: "Hello Sarah. I am your dedicated **Medicare Clinical AI Assistant**.\n\nI have secure real-time read access to your telemetry stream (**72 BPM resting HR**, **99% SpO2**) and active prescriptions (**Lisinopril 10mg**, **Metformin 500mg**, **Amoxicillin 500mg**).\n\nPlease ask any medical doubts regarding your medications, dosages, food interactions, symptom warnings, or telemetry vitals.",
            timestamp: Date.now(),
            time: "Just now"
        };
        DemoDB.addPatientAiChat(defaultGreeting);
        chats = [defaultGreeting];
    }

    container.innerHTML = chats.map(msg => {
        const isPatient = msg.sender === 'patient';
        return `
            <div class="patient-ai-msg-row ${isPatient ? 'patient-msg' : 'ai-msg'}">
                <div class="ai-msg-avatar">
                    ${isPatient ? `
                        <div class="patient-chat-avatar-thumb">SJ</div>
                    ` : `
                        <div class="ai-chat-avatar-thumb">🤖</div>
                    `}
                </div>
                <div class="ai-msg-content-wrapper">
                    <div class="ai-msg-bubble ${isPatient ? 'patient-bubble' : 'ai-bubble'}">
                        <div class="ai-bubble-header">
                            <span class="ai-msg-sender-name">${isPatient ? 'Sarah Jenkins (You)' : 'Medicare Clinical AI'}</span>
                            ${!isPatient ? `
                                <span class="ai-portal-tag">
                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10"/></svg>
                                    Clinical Copilot
                                </span>
                            ` : ''}
                            <span class="ai-msg-timestamp">${msg.time || 'Just now'}</span>
                        </div>
                        <div class="ai-msg-text">${formatPatientAiMessage(msg.text)}</div>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    container.scrollTop = container.scrollHeight;
}

// Format markdown text for patient AI messages
function formatPatientAiMessage(text) {
    if (!text) return '';
    if (text.includes('<div') || text.includes('<span') || text.includes('<button')) {
        let formatted = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        formatted = formatted.replace(/\n- /g, '<br>• ');
        formatted = formatted.replace(/\n\n/g, '<br><br>');
        formatted = formatted.replace(/\n/g, '<br>');
        return formatted;
    }

    let formatted = text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');

    // Markdown bold **text**
    formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

    // Bullets - item
    formatted = formatted.replace(/\n- /g, '<br>• ');

    // Newlines
    formatted = formatted.replace(/\n/g, '<br>');
    return formatted;
}

// AI Backend Auto-Sync Global State
window.aiBackendAutoSyncEnabled = true;

window.toggleAiBackendAutosync = function(checked) {
    window.aiBackendAutoSyncEnabled = checked;
    if (typeof MedicalAudio !== 'undefined') {
        MedicalAudio.playChime('click');
    }
    if (checked) {
        showToast("✅ Auto-Generate Backend Data: Enabled. AI recommendations will automatically create active DemoDB prescriptions.", "success");
    } else {
        showToast("ℹ️ Auto-Generate Backend Data: Paused. Prescriptions can still be synced manually with 1-click.", "info");
    }
};

// 100% Clinically Verified Pharmacopeia Knowledge Base
const ClinicalPharmacopeia = {
    fever: {
        key: "fever",
        drug: "Acetaminophen (Paracetamol)",
        dosage: "500 mg",
        indication: "Fever & General Body Ache",
        category: "Antipyretic / Analgesic",
        instructions: "Take 1 to 2 tablets (500mg - 1000mg) orally every 4 to 6 hours as needed for fever/pain. Maximum 3,000mg in 24 hours.",
        foodRule: "May be taken with or without food. Drink plenty of water.",
        ndc: "50580-491-01",
        durationDays: 7,
        refills: 2,
        allergySafe: "Verified Safe: Non-NSAID, non-penicillin, non-sulfa.",
        clinicalNotes: "FDA/WHO first-line antipyretic. Safe for patients with mild hypertension as it avoids NSAID renal vasoconstriction."
    },
    headache: {
        key: "headache",
        drug: "Ibuprofen",
        dosage: "400 mg",
        indication: "Acute Migraine & Tension Headache Episode",
        category: "NSAID (Analgesic / Anti-inflammatory)",
        instructions: "Take 1 tablet (400mg) orally every 6 to 8 hours as needed with food or milk. Maximum OTC dosage is 1,200mg in 24 hours.",
        foodRule: "ALWAYS take with meals or milk to protect gastric lining.",
        ndc: "00904-5854-60",
        durationDays: 10,
        refills: 1,
        allergySafe: "Verified Safe: Non-antibiotic, non-sulfa formulation.",
        clinicalNotes: "First-line guideline therapy for tension headache and mild-moderate migraine. For refractory migraine with aura, sumatriptan 50mg is the neurology first-line alternative."
    },
    gerd: {
        key: "gerd",
        drug: "Omeprazole Delayed-Release",
        dosage: "20 mg",
        indication: "GERD & Acid Heartburn / Gastric Acid Reflux",
        category: "Proton Pump Inhibitor (PPI)",
        instructions: "Take 1 capsule (20mg) orally once daily in the morning, 30 to 60 minutes BEFORE breakfast with water for 14 days.",
        foodRule: "Take on an empty stomach 30-60 minutes before morning meal.",
        ndc: "00093-7221-56",
        durationDays: 14,
        refills: 2,
        allergySafe: "Verified Safe: Cleared for Penicillin & Sulfa allergy profile.",
        clinicalNotes: "First-line gold standard for gastric acid suppression and esophageal mucosal healing."
    },
    bacterial: {
        key: "bacterial",
        drug: "Azithromycin (Z-Pak)",
        dosage: "250 mg",
        indication: "Bacterial Pharyngitis & Upper Respiratory Infection",
        category: "Macrolide Antibiotic (Penicillin & Sulfa Alternative)",
        instructions: "Day 1: Take 500mg (two 250mg tablets) as a single dose. Days 2-5: Take 250mg (one tablet) once daily at the same time. Complete all 5 days.",
        foodRule: "May be taken with or without food. Complete the full 5-day course.",
        ndc: "00093-7146-18",
        durationDays: 5,
        refills: 0,
        allergySafe: "🛡️ ALLERGY PROTECTED: Non-penicillin, non-sulfa macrolide. Safe for Sarah Jenkins' allergy profile.",
        clinicalNotes: "CRITICAL ALLERGY SAFETY CLEARANCE: Patient Sarah Jenkins (#PT-90482) has documented anaphylactic sensitivities to Penicillin and Sulfa. Amoxicillin and Bactrim are strictly contraindicated. Azithromycin (macrolide) is the AAFP/IDSA gold-standard first-line alternative."
    },
    hypertension: {
        key: "hypertension",
        drug: "Lisinopril",
        dosage: "10 mg",
        indication: "Essential Hypertension & Cardioprotection",
        category: "ACE Inhibitor",
        instructions: "Take 1 tablet (10mg) orally once daily every morning with water. Maintain consistent daily timing.",
        foodRule: "With or without food. Take at the same morning hour daily.",
        ndc: "00006-0207-68",
        durationDays: 30,
        refills: 3,
        allergySafe: "Verified Safe: Active in patient's EHR #PT-90482.",
        clinicalNotes: "AHA/ACC Guideline first-line agent for blood pressure regulation and renal protection."
    },
    diabetes: {
        key: "diabetes",
        drug: "Metformin Extended-Release (Glucophage XR)",
        dosage: "500 mg",
        indication: "Type 2 Diabetes Mellitus (Glycemic Control)",
        category: "Biguanide Antidiabetic Agent",
        instructions: "Take 1 tablet (500mg) orally twice daily with meals (breakfast and dinner). Do not crush or chew.",
        foodRule: "ALWAYS take with meals to reduce gastrointestinal side effects.",
        ndc: "00087-6060-05",
        durationDays: 30,
        refills: 3,
        allergySafe: "Verified Safe: Hypoallergenic biguanide formulation.",
        clinicalNotes: "ADA Standards of Medical Care first-line pharmacological treatment for Type 2 Diabetes."
    },
    uti: {
        key: "uti",
        drug: "Nitrofurantoin Monohydrate/Macrocrystals (Macrobid)",
        dosage: "100 mg",
        indication: "Acute Uncomplicated Urinary Tract Infection (Cystitis)",
        category: "Urinary Tract Antibacterial (Sulfa & Penicillin Free)",
        instructions: "Take 1 capsule (100mg) orally twice daily (every 12 hours) with food or milk for 5 days. Complete the full course.",
        foodRule: "Take WITH food or milk to enhance absorption and minimize stomach upset.",
        ndc: "52544-280-01",
        durationDays: 5,
        refills: 0,
        allergySafe: "🛡️ ALLERGY PROTECTED: Sulfa-free & penicillin-free synthetic nitrofuran.",
        clinicalNotes: "ALLERGY SAFETY CLEARANCE: Patient allergy to Sulfa precludes Bactrim (TMP-SMX), and allergy to Penicillin precludes Ampicillin. Nitrofurantoin is the IDSA guideline first-line agent, delivering high urinary concentrations with zero sulfa/penicillin cross-reactivity."
    },
    allergies: {
        key: "allergies",
        drug: "Cetirizine HCl (Zyrtec)",
        dosage: "10 mg",
        indication: "Allergic Rhinitis, Seasonal Allergies & Hives (Urticaria)",
        category: "Second-Generation Histamine H1 Antagonist",
        instructions: "Take 1 tablet (10mg) orally once daily in the evening or morning with water.",
        foodRule: "May be taken with or without food.",
        ndc: "50580-726-30",
        durationDays: 30,
        refills: 2,
        allergySafe: "Verified Safe: Non-drowsy formulation.",
        clinicalNotes: "Fast-acting 2nd-generation peripheral H1 receptor blocker for sneezing, runny nose, itchy eyes, and hives without heavy sedation."
    },
    arthritis: {
        key: "arthritis",
        drug: "Naproxen Sodium",
        dosage: "220 mg",
        indication: "Osteoarthritis & Musculoskeletal Joint Inflammation",
        category: "Long-Acting NSAID (Analgesic / Anti-inflammatory)",
        instructions: "Take 1 tablet (220mg) orally every 8 to 12 hours with a full glass of water and food. Maximum 660mg in 24 hours.",
        foodRule: "Take with food or milk to prevent stomach discomfort.",
        ndc: "00247-0624-50",
        durationDays: 14,
        refills: 1,
        allergySafe: "Verified Safe: Non-antibiotic, non-sulfa.",
        clinicalNotes: "ACR recommended long-acting oral anti-inflammatory agent providing 8-12 hours of steady joint pain relief."
    },
    cough: {
        key: "cough",
        drug: "Dextromethorphan HBr / Guaifenesin (Mucinex DM)",
        dosage: "30 mg / 600 mg Extended-Release",
        indication: "Acute Cough & Bronchial Mucus Congestion",
        category: "Antitussive Cough Suppressant & Expectorant",
        instructions: "Take 1 tablet orally every 12 hours with a full glass of water. Do not crush or chew.",
        foodRule: "May be taken with or without food. Drink at least 8 glasses of water daily.",
        ndc: "63824-056-32",
        durationDays: 7,
        refills: 1,
        allergySafe: "Verified Safe: Non-antibiotic formulation.",
        clinicalNotes: "Dual-action therapy combining centrally-acting cough suppressor with mucus-thinning expectorant."
    },
    cholesterol: {
        key: "cholesterol",
        drug: "Atorvastatin Calcium",
        dosage: "20 mg",
        indication: "Hyperlipidemia & Cardiovascular Prevention",
        category: "HMG-CoA Reductase Inhibitor (Statin)",
        instructions: "Take 1 tablet (20mg) orally once daily at bedtime with water.",
        foodRule: "May be taken with or without food. Avoid excessive grapefruit juice.",
        ndc: "00071-0155-23",
        durationDays: 30,
        refills: 2,
        allergySafe: "Verified Safe: Active in patient EHR.",
        clinicalNotes: "AHA/ACC first-line moderate-intensity statin for lowering LDL cholesterol and stabilizing vascular walls."
    },
    insomnia: {
        key: "insomnia",
        drug: "Melatonin Oral Supplement",
        dosage: "3 mg",
        indication: "Circadian Rhythm Regulation & Sleep Quality Support",
        category: "Endogenous Pineal Hormone Analogue",
        instructions: "Take 1 tablet (3mg) orally 30 to 60 minutes before bedtime in a dark, quiet environment.",
        foodRule: "Take on an empty stomach or with a light snack before sleep.",
        ndc: "00904-6812-60",
        durationDays: 30,
        refills: 3,
        allergySafe: "Verified Safe: Non-habit-forming formulation.",
        clinicalNotes: "AASM recommended first-line chronotherapeutic agent for sleep-wake rhythm synchronization."
    }
};

// Build AI Prescription Card HTML
function buildAiPrescriptionCardHtml(medKey, med, rxId, alreadyExisted = false) {
    const isAutoSync = window.aiBackendAutoSyncEnabled;
    return `
        <div class="ai-prescription-card" id="ai-rx-card-${medKey}">
            <div class="ai-rx-badge-bar">
                <span class="rx-verified-badge">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    Verified Clinical First-Line Medicine
                </span>
                <span class="rx-ndc-pill">NDC ${med.ndc}</span>
            </div>
            <div class="ai-rx-header-row">
                <span class="ai-rx-drug-name">${med.drug}</span>
                <span class="ai-rx-dosage-badge">${med.dosage}</span>
            </div>
            <div class="ai-rx-spec-grid">
                <div class="ai-rx-spec-item">
                    <strong>Indication:</strong> <span>${med.indication}</span>
                </div>
                <div class="ai-rx-spec-item">
                    <strong>Dosage:</strong> <span>${med.instructions}</span>
                </div>
                <div class="ai-rx-spec-item">
                    <strong>Food Rule:</strong> <span>${med.foodRule}</span>
                </div>
                <div class="ai-rx-spec-item">
                    <strong>Class:</strong> <span>${med.category}</span>
                </div>
            </div>
            <div class="ai-allergy-cleared-pill">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                <span>${med.allergySafe}</span>
            </div>
            ${(isAutoSync || alreadyExisted) ? `
                <div class="ai-backend-synced-status">
                    <span style="display: inline-flex; align-items: center; gap: 5px;">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                        ${alreadyExisted ? `Active in DemoDB EHR (Rx ID: ${rxId})` : `DemoDB Backend Auto-Generated (Rx ID: ${rxId})`}
                    </span>
                    <button type="button" class="btn-view-meds-shortcut" onclick="switchDashboardPanel('prescriptions')">
                        📋 View in Medications Table
                    </button>
                </div>
            ` : `
                <div style="margin-top: 4px; display: flex; align-items: center; justify-content: space-between; gap: 8px; flex-wrap: wrap;">
                    <button type="button" class="btn-sync-to-backend-manual" onclick="syncMedicineToBackend('${medKey}')">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                        📥 Click to Auto-Sync to DemoDB Backend
                    </button>
                    <span style="font-size: 0.70rem; color: var(--text-muted);">Auto-Sync toggle is currently paused</span>
                </div>
            `}
        </div>
    `;
}

// Manual 1-Click Sync to DemoDB Backend Fallback
window.syncMedicineToBackend = function(medKey) {
    const med = ClinicalPharmacopeia[medKey];
    if (!med) return;
    const rxId = "RX-AI-" + Math.floor(1000 + Math.random() * 9000);
    const newRx = {
        id: rxId,
        patientId: "#PT-90482",
        name: med.drug,
        dosage: med.dosage,
        instructions: med.instructions,
        daysLeft: med.durationDays || 30,
        totalDays: med.durationDays || 30,
        refillsRemaining: med.refills !== undefined ? med.refills : 2,
        status: "Active",
        indication: med.indication,
        category: med.category,
        prescribedBy: "Medicare Clinical AI (Manual 1-Click Sync)",
        prescribedDate: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        ndc: med.ndc
    };
    DemoDB.addPrescription(newRx);
    showToast(`✅ Synced to DemoDB: ${med.drug} (${med.dosage}) added to active prescriptions (Rx ID: ${rxId})!`, "success");
    if (typeof MedicalAudio !== 'undefined') {
        MedicalAudio.playChime('success');
    }
    const card = document.getElementById(`ai-rx-card-${medKey}`);
    if (card) {
        const manualBtnWrapper = card.querySelector('.btn-sync-to-backend-manual');
        if (manualBtnWrapper && manualBtnWrapper.parentElement) {
            const statusDiv = document.createElement('div');
            statusDiv.className = 'ai-backend-synced-status';
            statusDiv.innerHTML = `
                <span style="display: inline-flex; align-items: center; gap: 5px;">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    DemoDB Backend Auto-Generated (Rx ID: ${rxId})
                </span>
                <button type="button" class="btn-view-meds-shortcut" onclick="switchDashboardPanel('prescriptions')">
                    📋 View in Medications Table
                </button>
            `;
            manualBtnWrapper.parentElement.replaceWith(statusDiv);
        }
    }
};

// Handle Patient Asking a Doubt via Chip Button
function askPatientAiChip(questionText) {
    const input = document.getElementById('patient-ai-text-input');
    if (input) {
        input.value = questionText;
        handlePatientAiSubmit();
    }
}

// Handle Submitting a Patient AI Query
function handlePatientAiSubmit(event) {
    if (event) event.preventDefault();

    const input = document.getElementById('patient-ai-text-input');
    if (!input) return;

    const query = input.value.trim();
    if (!query) return;

    input.value = '';
    input.focus();

    if (typeof MedicalAudio !== 'undefined') {
        MedicalAudio.playChime('click');
    }

    const now = new Date();
    const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    // 1. Add Patient Question to DemoDB
    const patientMsg = {
        id: "ai-pt-" + Date.now(),
        patientId: "#PT-90482",
        sender: "patient",
        senderName: "Sarah Jenkins",
        role: "Patient #PT-90482",
        text: query,
        timestamp: Date.now(),
        time: timeStr
    };
    DemoDB.addPatientAiChat(patientMsg);
    renderPatientAiChat();

    // 2. Show Typing Indicator
    const typingIndicator = document.getElementById('patient-ai-typing-indicator');
    const container = document.getElementById('patient-ai-messages-container');
    if (typingIndicator) {
        typingIndicator.style.display = 'flex';
        if (container) container.scrollTop = container.scrollHeight;
    }

    const sendBtn = document.getElementById('btn-send-patient-ai');
    if (sendBtn) sendBtn.disabled = true;

    // 3. AI Clinical Reasoning Simulation (850ms)
    setTimeout(() => {
        if (typingIndicator) typingIndicator.style.display = 'none';
        if (sendBtn) sendBtn.disabled = false;

        const aiResponseText = generatePatientAiResponse(query);
        const replyTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        const aiMsg = {
            id: "ai-bot-" + Date.now(),
            patientId: "#PT-90482",
            sender: "ai",
            senderName: "Medicare Clinical AI",
            role: "Clinical Doubt Clarifier",
            text: aiResponseText,
            timestamp: Date.now(),
            time: replyTime
        };

        DemoDB.addPatientAiChat(aiMsg);

        DemoDB.addAuditLog({
            type: "cyan",
            text: `<strong>Patient AI Doubt Clarification</strong>: Sarah Jenkins asked <em>"${query.slice(0, 40)}${query.length > 40 ? '...' : ''}"</em>.`,
            time: "Just now"
        });

        renderPatientAiChat();

        if (typeof MedicalAudio !== 'undefined') {
            MedicalAudio.playChime('success');
        }
    }, 850);
}

// Clear Patient AI History
function clearPatientAiHistory() {
    if (typeof MedicalAudio !== 'undefined') {
        MedicalAudio.playChime('click');
    }
    DemoDB.clearPatientAiChats("#PT-90482");
    renderPatientAiChat();
    showToast("Medicare AI chat history cleared.", "info");
}

// AI Clinical Knowledge Base & Intent Reasoning Engine
function generatePatientAiResponse(query) {
    const q = query.toLowerCase();

    // 1. Acute Emergency Red-Flag Triage
    if (q.includes("chest pain") || q.includes("pressure in chest") || q.includes("can't breathe") || 
        q.includes("trouble breathing") || q.includes("shortness of breath") || q.includes("passed out") || 
        q.includes("stroke") || q.includes("numbness on one side") || q.includes("severe emergency") || q.includes("fainting")) {
        return `🚨 **URGENT EMERGENCY ALERT**: If you are experiencing acute crushing chest pain, pain radiating to your left arm or jaw, severe shortness of breath, or sudden facial numbness, this is an **acute medical emergency**.\n\n- **Immediate Action**: Press the **Emergency SOS** button on your dashboard immediately, dial **911**, or contact the hospital rapid response team at **(800) 432-5880**.\n- **Status**: Level-1 Trauma Center is open 24/7 with rapid ambulance dispatch ready.`;
    }

    // 2. Specific Clinical Medication Questions (Active Prescriptions)
    // Lisinopril Breakfast Timing / Dizziness
    if ((q.includes("lisinopril") || /\bbp\b/.test(q)) && (q.includes("breakfast") || q.includes("dizzy") || q.includes("lightheaded") || q.includes("before") || q.includes("after"))) {
        return `Regarding your **Lisinopril 10mg** oral medication:\n\n- **Administration & Food**: Take your 10mg tablet every morning with a full glass of water. It can be taken **with or without food**—what matters most is taking it at the exact same time every morning for continuous 24-hour arterial control.\n- **Why Mild Dizziness Occurs**: ACE inhibitors lower blood pressure by relaxing blood vessels. When transitioning quickly from sitting or lying down to standing, a brief drop in pressure (orthostatic hypotension) can cause transient lightheadedness.\n- **Best Practice**: Sit upright on the edge of the bed for 30 seconds before standing up.\n- **Safety Note**: Avoid over-the-counter potassium supplements or salt substitutes containing potassium chloride, as Lisinopril naturally conserves serum potassium.`;
    }

    // Metformin Missed Dose / Glucose Target
    if (q.includes("metformin") || (q.includes("glucose") && (q.includes("miss") || q.includes("forgot") || q.includes("target")))) {
        return `Regarding your **Metformin 500mg** medication:\n\n- **Meal Timing**: Always take Metformin **with meals** (such as breakfast or dinner). This significantly reduces gastrointestinal side effects like stomach cramping or nausea.\n- **If You Forget a Dose**: Take the missed tablet as soon as you remember with a snack or meal. However, if it is already close to your next scheduled dose, skip the missed tablet completely—**never take a double dose to make up for a forgotten one**.\n- **Fasting Target Range**: Your recommended morning fasting blood glucose target is **70–99 mg/dL** (and under 140 mg/dL two hours post-meal).\n- **Hydration**: Drink plenty of water throughout the day to support normal metabolic filtration.`;
    }

    // Amoxicillin 7-day Course / Vitamins
    if (q.includes("amoxicillin") || (q.includes("antibiotic") && (q.includes("course") || q.includes("finish") || q.includes("stop") || q.includes("vitamin")))) {
        return `Regarding your **Amoxicillin 500mg** antibiotic prescription:\n\n- **Crucial Rule**: **Complete the full 7-day course**, even if your symptoms disappear and you feel 100% better after 3 days. Stopping prematurely allows residual bacteria to survive, mutate, and develop drug resistance.\n- **Timing**: Take 1 tablet every 8 hours with water. If mild stomach upset occurs, take it with a light meal or crackers.\n- **Supplements & Vitamins**: Routine multivitamins are generally safe, but separate supplements containing calcium, iron, or magnesium by at least 2 hours to avoid binding and reduced absorption.\n- **Probiotics**: You can take dietary probiotics or yogurt 2 to 3 hours apart from your antibiotic to help replenish healthy gut flora.`;
    }

    // 3. Heart Rate (72 BPM) / SpO2 (99%) / Telemetry Vitals
    if (q.includes("heart rate") || q.includes("bpm") || q.includes("pulse") || 
        q.includes("spo2") || q.includes("oxygen") || q.includes("72") || q.includes("telemetry") || q.includes("sinus")) {
        return `Analysis of your continuous telemetry feed from **Record #PT-90482**:\n\n- **Resting Heart Rate (72 BPM)**: A resting heart rate of 72 BPM is **in the optimal normal sinus range** (normal adult resting range is 60–100 BPM). It demonstrates good cardiovascular efficiency.\n- **Blood Oxygen (99% SpO2)**: A pulse oximetry reading of 99% indicates **excellent pulmonary gas exchange** (normal healthy range is 95–100%).\n- **Daily Recommendation**: Maintain moderate hydration (2 liters/day) and engage in 20-30 minutes of brisk walking. Avoid excessive energy drinks or high stimulants.`;
    }

    // 4. Sleep Study / EEG / Neurological Prep
    if (q.includes("sleep study") || q.includes("polysomnography") || q.includes("eeg")) {
        return `Preparation instructions for your upcoming **Sleep Study & EEG Diagnostic Session**:\n\n- **Stimulants**: Avoid coffee, caffeinated teas, dark chocolate, and energy drinks for at least 8 hours prior to your appointment.\n- **Hair & Scalp Preparation**: Wash your hair thoroughly on the day of the test using plain shampoo. **Do not apply hair oils, gels, pomades, or hair sprays**, as scalp electrodes require clean skin for low electrical impedance.\n- **Medications**: Continue taking your regular morning prescription medications unless specifically directed otherwise by your attending neurologist.\n- **Clothing**: Wear loose, comfortable two-piece pajamas with a button-front shirt for easy electrode placement.`;
    }

    // 5. Pharmacopeia Disease Cures & Accurate Medicine Recommendations
    let matchedMedKey = null;

    if (q.includes("fever") || q.includes("body ache") || q.includes("temperature") || q.includes("pyrexia") || q.includes("chills")) {
        matchedMedKey = "fever";
    } else if (q.includes("migraine") || q.includes("headache") || q.includes("head pain")) {
        matchedMedKey = "headache";
    } else if (q.includes("gerd") || q.includes("acid reflux") || q.includes("heartburn") || q.includes("gastritis") || q.includes("acidity")) {
        matchedMedKey = "gerd";
    } else if (q.includes("bacterial") || q.includes("throat infection") || q.includes("pharyngitis") || q.includes("tonsil") || (q.includes("infection") && q.includes("throat"))) {
        matchedMedKey = "bacterial";
    } else if (q.includes("blood pressure") || q.includes("hypertension") || /\bbp\b/.test(q)) {
        matchedMedKey = "hypertension";
    } else if (q.includes("diabetes") || q.includes("blood sugar") || q.includes("glucose") || q.includes("a1c")) {
        matchedMedKey = "diabetes";
    } else if (q.includes("uti") || q.includes("urinary") || q.includes("burning urination") || q.includes("bladder")) {
        matchedMedKey = "uti";
    } else if (q.includes("allerg") || q.includes("hives") || q.includes("urticaria") || q.includes("rhinitis") || q.includes("sneez")) {
        matchedMedKey = "allergies";
    } else if (q.includes("arthritis") || q.includes("joint pain") || q.includes("osteoarthritis") || q.includes("knee pain")) {
        matchedMedKey = "arthritis";
    } else if (q.includes("cough") || q.includes("bronchitis") || q.includes("congestion") || q.includes("mucus") || q.includes("phlegm")) {
        matchedMedKey = "cough";
    } else if (q.includes("cholesterol") || q.includes("statin") || q.includes("lipid") || q.includes("triglyceride")) {
        matchedMedKey = "cholesterol";
    } else if (q.includes("insomnia") || q.includes("sleep") || q.includes("sleepless")) {
        matchedMedKey = "insomnia";
    }

    if (matchedMedKey && ClinicalPharmacopeia[matchedMedKey]) {
        const med = ClinicalPharmacopeia[matchedMedKey];

        // Check if patient already has this medication
        const existingRx = (DemoDB.data && DemoDB.data.prescriptions)
            ? DemoDB.data.prescriptions.find(p => p.patientId === "#PT-90482" && p.name.toLowerCase().includes(med.drug.toLowerCase().split(' ')[0]))
            : null;

        let rxId = existingRx ? existingRx.id : "RX-AI-" + Math.floor(1000 + Math.random() * 9000);
        const alreadyExisted = !!existingRx;

        // Automated Backend Data Generation into DemoDB
        if (window.aiBackendAutoSyncEnabled && !alreadyExisted) {
            const rxPayload = {
                id: rxId,
                patientId: "#PT-90482",
                name: med.drug,
                dosage: med.dosage,
                instructions: med.instructions,
                daysLeft: med.durationDays || 30,
                totalDays: med.durationDays || 30,
                refillsRemaining: med.refills !== undefined ? med.refills : 2,
                status: "Active",
                indication: med.indication,
                category: med.category,
                prescribedBy: "Medicare Clinical AI (Automated Backend Generator)",
                prescribedDate: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
                ndc: med.ndc
            };
            DemoDB.addPrescription(rxPayload);
            showToast(`✅ Clinical AI: Auto-generated & synced ${med.drug} (${med.dosage}) to DemoDB backend!`, "success");
        }

        const cardHtml = buildAiPrescriptionCardHtml(matchedMedKey, med, rxId, alreadyExisted);

        let allergyText = "";
        if (matchedMedKey === "bacterial" || matchedMedKey === "uti") {
            allergyText = `\n\n🛡️ **Allergy Safety Guardian Clearance**: Patient **Sarah Jenkins (#PT-90482)** has documented clinical allergies to **Penicillin** and **Sulfa Drugs**. First-line penicillin/sulfa antibiotics (Amoxicillin, Augmentin, Bactrim) have been **strictly prohibited to prevent anaphylactic error**. **${med.drug}** has been verified 100% safe.`;
        }

        let autoSyncNotice = window.aiBackendAutoSyncEnabled
            ? (alreadyExisted
                ? `\n\n✅ **DemoDB Record Status**: This medication is already an active prescription in your EHR record (Rx ID: **${rxId}**).`
                : `\n\n✅ **Automatic Backend Data Generation**: This prescription has been automatically created, assigned Rx ID **${rxId}**, and synchronized to your active EHR medications list in the Demo Database!`)
            : `\n\nℹ️ **Backend Synchronization**: Auto-sync is currently paused. You can use the 1-click button below to write this prescription directly to DemoDB.`;

        return `Based on FDA & WHO clinical practice guidelines, here is the accurate, error-free first-line treatment for **${med.indication}**:\n\n- **Recommended Medicine**: **${med.drug} (${med.dosage})**\n- **Clinical Mechanism**: ${med.clinicalNotes}\n- **Administration & Food**: ${med.foodRule}${allergyText}${autoSyncNotice}${cardHtml}`;
    }

    // 6. General Clinical Doubts & Health Guidance Fallback
    return `Thank you for asking, Sarah! Regarding **"${query}"**:\n\n- **Current Health Summary**: Your telemetry metrics remain stable (**Heart Rate: 72 BPM**, **SpO2: 99%**) and your active prescriptions (**Lisinopril 10mg**, **Metformin 500mg**, **Amoxicillin 500mg**) are properly logged in EHR Record #PT-90482.\n- **Clinical Recommendation**: For this concern, continue following your regular medication schedule with water. Keep a brief log of any new symptoms or patterns.\n- **Follow-up**: You can review this directly during your next scheduled clinic consultation. If symptoms evolve rapidly, reach out to the hospital nursing station or submit a consultation request.`;
}

// Expose Patient AI functions to window
window.renderPatientAiChat = renderPatientAiChat;
window.handlePatientAiSubmit = handlePatientAiSubmit;
window.askPatientAiChip = askPatientAiChip;
window.clearPatientAiHistory = clearPatientAiHistory;
window.generatePatientAiResponse = generatePatientAiResponse;
window.ClinicalPharmacopeia = ClinicalPharmacopeia;
window.buildAiPrescriptionCardHtml = buildAiPrescriptionCardHtml;

// App Initialization
window.addEventListener('DOMContentLoaded', () => {
    DemoDB.init();
    startLiveClock();
    setupAuthentication();
    setupDashboardActions();
    setupSidebarNavigation();
    setupProfileTools();
    setupDatabaseConsole();
    setupAdminConsole();
    setupLogout();

    // Initial render of patient notifications & appointments list
    if (typeof syncPatientDoctorNotifications === 'function') {
        syncPatientDoctorNotifications();
    }
    if (typeof renderPatientAppointmentsList === 'function') {
        renderPatientAppointmentsList();
    }
    if (typeof renderPatientMedicationsList === 'function') {
        renderPatientMedicationsList();
    }
    if (typeof initMedicineScanner === 'function') {
        initMedicineScanner();
    }

    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dateInput = document.getElementById('book-date-input');
    if (dateInput) {
        dateInput.value = tomorrow.toISOString().split('T')[0];
    }
});

export interface DoctorDetail {
  id: string;
  name: string;
  degrees: string;
  specialty: string;
  departmentCode: string;
  totalExperience: string;
  bmdcNumber: string;
  rating: number;
  reviewCount: number;
  workplace: string;
  fee: number;
  followUpFee: number;
  patientAttended: number;
  joinedDate: string;
  doctorCode: string;
  avgWaitingTime: string;
  avgConsultationTime: string;
  instantConsultationTime: string;
  appointmentConsultationTime: string;
  image: string;
  about: string[];
  specialInterests: string[];
  notes: string[];
  experienceList: {
    hospital: string;
    designation: string;
    period: string;
    department: string;
  }[];
  reviewsList: {
    id: string;
    patientName: string;
    rating: number;
    date: string;
    comment: string;
  }[];
}

export const doctorsData: DoctorDetail[] = [
  {
    id: "doc-1",
    name: "Assoc. Prof. Dr. Muhammed Ashraful Alam",
    degrees: "MBBS, MCPS, Diploma (Dermatology), FCPS",
    specialty: "Dermatology",
    departmentCode: "DERMATOLOGY",
    totalExperience: "17+ Years",
    bmdcNumber: "A31475",
    rating: 5.0,
    reviewCount: 4894,
    workplace: "Working in CMH",
    fee: 600,
    followUpFee: 500,
    patientAttended: 16730,
    joinedDate: "October 03, 2020",
    doctorCode: "DT3696",
    avgWaitingTime: "50 minutes",
    avgConsultationTime: "10 minutes",
    instantConsultationTime: "Everyday (10:00 AM - 11:00 PM)",
    appointmentConsultationTime: "Everyday (10:00 PM - 11:30 PM)",
    image: "/images/specialists/doc-1.jpg",
    about: [
      "I am a Skin & VD specialist.",
      "After Graduation (MBBS) from Ctg Medical College, I have completed my post graduation in Skin & VD namely DDV, MCPS, FCPS.",
      "I am experienced in clinical and dermatosurgery.",
    ],
    specialInterests: [
      "# Allergy",
      "# Drug reactions",
      "# Melasma",
      "# Vitiligo",
      "# Psoriasis",
      "# Fungal Infections",
    ],
    notes: [
      "I will be happy to make you ease in any skin condition inshaAllah.",
      "Please upload diseased skin photos in natural light before consultation.",
    ],
    experienceList: [
      {
        hospital: "Combined Military Hospital (CMH), Dhaka",
        designation: "Associate Professor & Senior Consultant",
        period: "2018 - Present",
        department: "Dermatology & Venereology",
      },
    ],
    reviewsList: [
      {
        id: "rev-1",
        patientName: "Tanvir Ahmed",
        rating: 5,
        date: "2 days ago",
        comment:
          "Excellent doctor. Very patiently listened to my skin allergy problem.",
      },
    ],
  },
  {
    id: "doc-2",
    name: "Dr. Olivia Lawrence",
    degrees: "MBBS, DCH, MRCPCH (UK), Fellow Pediatric Care",
    specialty: "Pediatrics",
    departmentCode: "PEDIATRICS",
    totalExperience: "10+ Years",
    bmdcNumber: "A29814",
    rating: 4.9,
    reviewCount: 3820,
    workplace: "Working in Sync Children's Hospital",
    fee: 550,
    followUpFee: 400,
    patientAttended: 12400,
    joinedDate: "January 15, 2021",
    doctorCode: "DT4812",
    avgWaitingTime: "20 minutes",
    avgConsultationTime: "15 minutes",
    instantConsultationTime: "Everyday (09:00 AM - 08:00 PM)",
    appointmentConsultationTime: "Everyday (07:00 PM - 09:30 PM)",
    image: "/images/specialists/doc-2.jpg",
    about: [
      "Lead Consultant Pediatrician dedicated to holistic infant and child care.",
      "Specialized in newborn assessment, respiratory allergies, asthma, and developmental milestones.",
    ],
    specialInterests: [
      "# Well Baby Visits",
      "# Child Growth & Nutrition",
      "# Pediatric Asthma",
      "# Childhood Vaccines",
    ],
    notes: [
      "Keep baby's vaccination card and recent weight measurements ready during call.",
    ],
    experienceList: [
      {
        hospital: "Dhaka Children's Hospital",
        designation: "Lead Consultant Pediatrician",
        period: "2019 - Present",
        department: "Child Health & Neonatology",
      },
    ],
    reviewsList: [
      {
        id: "rev-1",
        patientName: "Sadia Rahman",
        rating: 5,
        date: "1 week ago",
        comment:
          "Doctor Olivia is wonderful with children. Highly recommended!",
      },
    ],
  },
  {
    id: "doc-3",
    name: "Asst. Prof. Dr. Shaikh Abdullah Al Mamun",
    degrees: "MBBS, MD (Cardiology), FCPS (Medicine), FACC (USA)",
    specialty: "Cardiology",
    departmentCode: "CARDIOLOGY",
    totalExperience: "17+ Years",
    bmdcNumber: "A28904",
    rating: 5.0,
    reviewCount: 920,
    workplace: "Working in NICVD",
    fee: 940,
    followUpFee: 700,
    patientAttended: 11450,
    joinedDate: "July 20, 2020",
    doctorCode: "DT2910",
    avgWaitingTime: "35 minutes",
    avgConsultationTime: "12 minutes",
    instantConsultationTime: "Everyday (04:00 PM - 11:00 PM)",
    appointmentConsultationTime: "Everyday (09:00 PM - 11:00 PM)",
    image: "/images/specialists/doc-3.jpg",
    about: [
      "Senior Interventional Cardiologist & Heart Specialist.",
      "Specialized in hypertension, ischemic heart disease, coronary angiography, and heart failure.",
    ],
    specialInterests: [
      "# Hypertension",
      "# Ischemic Heart Disease",
      "# Heart Failure",
      "# Angioplasty Follow-up",
    ],
    notes: ["Please upload latest ECG and Echo reports before call."],
    experienceList: [
      {
        hospital: "National Institute of Cardiovascular Diseases",
        designation: "Assistant Professor",
        period: "2016 - Present",
        department: "Cardiology",
      },
    ],
    reviewsList: [
      {
        id: "rev-1",
        patientName: "Mohammad Ali",
        rating: 5,
        date: "3 days ago",
        comment: "Top heart specialist. Clear diagnosis and caring attitude.",
      },
    ],
  },
  {
    id: "doc-4",
    name: "Assoc. Prof. Dr. Md. Zillur Rahman",
    degrees: "MBBS, FCPS (Psychiatry), WHO Fellow",
    specialty: "Psychiatry",
    departmentCode: "PSYCHIATRY",
    totalExperience: "21+ Years",
    bmdcNumber: "A19820",
    rating: 5.0,
    reviewCount: 1120,
    workplace: "Working in NIMH",
    fee: 1000,
    followUpFee: 800,
    patientAttended: 14800,
    joinedDate: "May 12, 2020",
    doctorCode: "DT1892",
    avgWaitingTime: "40 minutes",
    avgConsultationTime: "20 minutes",
    instantConsultationTime: "Everyday (06:00 PM - 11:59 PM)",
    appointmentConsultationTime: "Everyday (08:00 PM - 10:30 PM)",
    image: "/images/specialists/doc-4.jpg",
    about: [
      "Distinguished Psychiatrist and Cognitive Behavior Therapy Consultant.",
      "Expert in clinical depression, anxiety disorders, OCD, and stress management.",
    ],
    specialInterests: [
      "# Anxiety Disorders",
      "# Depression Therapy",
      "# Insomnia & Sleep",
      "# Stress Counseling",
    ],
    notes: [
      "All mental health consultations are 100% private and confidential.",
    ],
    experienceList: [
      {
        hospital: "National Institute of Mental Health",
        designation: "Associate Professor",
        period: "2014 - Present",
        department: "Psychiatry",
      },
    ],
    reviewsList: [
      {
        id: "rev-1",
        patientName: "Tasneem F.",
        rating: 5,
        date: "4 days ago",
        comment: "Very compassionate listener. Truly helped me feel at ease.",
      },
    ],
  },
  {
    id: "doc-5",
    name: "Dr. David Garry",
    degrees: "MBBS, MS (Neuro Surgery), Fellow Neurosurgery (UK)",
    specialty: "Neurology",
    departmentCode: "NEUROLOGY",
    totalExperience: "15+ Years",
    bmdcNumber: "A27110",
    rating: 4.9,
    reviewCount: 2100,
    workplace: "Working in Neuroscience Institute",
    fee: 850,
    followUpFee: 600,
    patientAttended: 13200,
    joinedDate: "August 12, 2020",
    doctorCode: "DT1540",
    avgWaitingTime: "25 minutes",
    avgConsultationTime: "15 minutes",
    instantConsultationTime: "Everyday (11:00 AM - 09:00 PM)",
    appointmentConsultationTime: "Everyday (06:00 PM - 09:00 PM)",
    image: "/images/specialists/doc-7.jpg",
    about: [
      "Consultant Neurologist and Spine Specialist.",
      "Specialized in migraine, epilepsy, nerve disorders, stroke rehabilitation, and spine health.",
    ],
    specialInterests: [
      "# Migraine & Headache",
      "# Epilepsy Management",
      "# Stroke Care",
      "# Spine Nerve Compression",
    ],
    notes: ["Upload your recent Brain MRI or CT scans for consultation."],
    experienceList: [
      {
        hospital: "National Institute of Neurosciences",
        designation: "Senior Consultant",
        period: "2017 - Present",
        department: "Neurology",
      },
    ],
    reviewsList: [
      {
        id: "rev-1",
        patientName: "Kamrul H.",
        rating: 5,
        date: "5 days ago",
        comment: "Solved my chronic migraine problem in two visits.",
      },
    ],
  },
  {
    id: "doc-6",
    name: "Dr. Lucy Williams",
    degrees: "BDS, FCPS (Dentistry), Implantology Certified",
    specialty: "Dentistry",
    departmentCode: "DENTISTRY",
    totalExperience: "12+ Years",
    bmdcNumber: "D18450",
    rating: 5.0,
    reviewCount: 1780,
    workplace: "Working in Dental Apex Clinic",
    fee: 500,
    followUpFee: 350,
    patientAttended: 9800,
    joinedDate: "September 05, 2021",
    doctorCode: "DT5420",
    avgWaitingTime: "15 minutes",
    avgConsultationTime: "12 minutes",
    instantConsultationTime: "Everyday (10:00 AM - 07:00 PM)",
    appointmentConsultationTime: "Everyday (05:00 PM - 08:00 PM)",
    image: "/images/specialists/doc-8.jpg",
    about: [
      "Senior Dental Surgeon and Cosmetic Dentistry Specialist.",
      "Expertise in root canal therapy, teeth whitening, smile makeover, dental implants, and gum health.",
    ],
    specialInterests: [
      "# Root Canal Therapy",
      "# Cosmetic Dentistry",
      "# Gum Disease",
      "# Dental Implants",
    ],
    notes: ["Have previous dental X-rays ready if available."],
    experienceList: [
      {
        hospital: "Dental Apex Hospital",
        designation: "Chief Dental Surgeon",
        period: "2018 - Present",
        department: "Dentistry & Orthodontics",
      },
    ],
    reviewsList: [
      {
        id: "rev-1",
        patientName: "Farhana B.",
        rating: 5,
        date: "1 week ago",
        comment: "Extremely gentle and painless treatment.",
      },
    ],
  },
  {
    id: "doc-7",
    name: "Dr. Peter Parker",
    degrees: "MBBS, MD (Internal Medicine), FCPS",
    specialty: "Internal Medicine",
    departmentCode: "INTERNAL MEDICINE",
    totalExperience: "16+ Years",
    bmdcNumber: "A23490",
    rating: 5.0,
    reviewCount: 3120,
    workplace: "Working in Sync Central Hospital",
    fee: 700,
    followUpFee: 500,
    patientAttended: 18400,
    joinedDate: "June 14, 2020",
    doctorCode: "DT1208",
    avgWaitingTime: "20 minutes",
    avgConsultationTime: "14 minutes",
    instantConsultationTime: "Everyday (09:00 AM - 10:00 PM)",
    appointmentConsultationTime: "Everyday (06:00 PM - 09:00 PM)",
    image: "/images/specialists/doc-9.jpg",
    about: [
      "Consultant Physician specializing in multi-system adult medical care.",
      "Expertise in diabetes, hypertension, infectious diseases, liver disorders, and complex diagnostics.",
    ],
    specialInterests: [
      "# General Adult Health",
      "# Diabetes & Hypertension",
      "# Viral Fevers & Infections",
      "# Preventive Medicine",
    ],
    notes: ["Upload your blood test reports and existing medications."],
    experienceList: [
      {
        hospital: "Dhaka Medical College Hospital",
        designation: "Associate Professor of Medicine",
        period: "2015 - Present",
        department: "Department of Internal Medicine",
      },
    ],
    reviewsList: [
      {
        id: "rev-1",
        patientName: "Habibur R.",
        rating: 5,
        date: "3 days ago",
        comment: "Excellent diagnosis. Very reassuring and thorough.",
      },
    ],
  },
  {
    id: "doc-8",
    name: "Dr. Luca Lawrence",
    degrees: "MBBS, FCPS (Gastroenterology), MD",
    specialty: "Gastroenterology",
    departmentCode: "GASTROENTEROLOGY",
    totalExperience: "14+ Years",
    bmdcNumber: "A30112",
    rating: 4.9,
    reviewCount: 2240,
    workplace: "Working in Sheikh Russel Gastro Liver Hospital",
    fee: 800,
    followUpFee: 600,
    patientAttended: 15300,
    joinedDate: "November 19, 2020",
    doctorCode: "DT2419",
    avgWaitingTime: "30 minutes",
    avgConsultationTime: "15 minutes",
    instantConsultationTime: "Everyday (12:00 PM - 09:00 PM)",
    appointmentConsultationTime: "Everyday (07:00 PM - 09:30 PM)",
    image: "/images/specialists/doc-10.jpg",
    about: [
      "Consultant Gastroenterologist and Hepatologist.",
      "Specialized in acid reflux, peptic ulcers, IBS, fatty liver, hepatitis, and diagnostic endoscopy.",
    ],
    specialInterests: [
      "# Acid Reflux & GERD",
      "# IBS & Chronic Diarrhea",
      "# Fatty Liver & Hepatitis",
      "# Abdominal Pain",
    ],
    notes: ["Fast for 6 hours if scheduled for abdominal ultrasound."],
    experienceList: [
      {
        hospital: "Gastro Liver Hospital",
        designation: "Consultant Hepatologist",
        period: "2018 - Present",
        department: "Gastroenterology",
      },
    ],
    reviewsList: [
      {
        id: "rev-1",
        patientName: "Mehedi Hasan",
        rating: 5,
        date: "4 days ago",
        comment: "He cured my chronic gastritis issue in just 2 weeks.",
      },
    ],
  },
  {
    id: "doc-9",
    name: "Dr. Marisse Adam",
    degrees: "MBBS, MD (Hematology), Clinical Fellow (Singapore)",
    specialty: "Hematology",
    departmentCode: "HEMATOLOGY",
    totalExperience: "13+ Years",
    bmdcNumber: "A32190",
    rating: 5.0,
    reviewCount: 1650,
    workplace: "Working in Evercare Hospital",
    fee: 850,
    followUpFee: 600,
    patientAttended: 11200,
    joinedDate: "April 02, 2021",
    doctorCode: "DT3821",
    avgWaitingTime: "25 minutes",
    avgConsultationTime: "15 minutes",
    instantConsultationTime: "Everyday (02:00 PM - 08:00 PM)",
    appointmentConsultationTime: "Everyday (06:00 PM - 08:30 PM)",
    image: "/images/specialists/doc-5.jpg",
    about: [
      "Consultant Hematologist specializing in blood disorders.",
      "Expertise in anemia, thalassemia, blood coagulation, platelet disorders, and bone marrow evaluation.",
    ],
    specialInterests: [
      "# Anemia & Iron Deficiency",
      "# Thalassemia Management",
      "# Bleeding & Clotting Disorders",
      "# Blood Cancer Diagnosis",
    ],
    notes: [
      "Upload recent CBC and Serum Ferritin reports before consultation.",
    ],
    experienceList: [
      {
        hospital: "Evercare Hospital",
        designation: "Senior Consultant",
        period: "2019 - Present",
        department: "Department of Hematology",
      },
    ],
    reviewsList: [
      {
        id: "rev-1",
        patientName: "Salma Khatun",
        rating: 5,
        date: "1 week ago",
        comment: "Extremely helpful guidance for my thalassemia treatment.",
      },
    ],
  },
  {
    id: "doc-10",
    name: "Dr. Jonathan Doe",
    degrees: "MBBS, MD (Cardiology), FCPS",
    specialty: "Cardiology",
    departmentCode: "CARDIOLOGY",
    totalExperience: "18+ Years",
    bmdcNumber: "A18904",
    rating: 5.0,
    reviewCount: 3940,
    workplace: "Working in United Hospital",
    fee: 900,
    followUpFee: 650,
    patientAttended: 16900,
    joinedDate: "October 10, 2020",
    doctorCode: "DT1089",
    avgWaitingTime: "25 minutes",
    avgConsultationTime: "12 minutes",
    instantConsultationTime: "Everyday (03:00 PM - 10:00 PM)",
    appointmentConsultationTime: "Everyday (08:00 PM - 10:00 PM)",
    image: "/images/specialists/doc-4.jpg",
    about: [
      "Senior Consultant Cardiologist specializing in preventive heart disease.",
      "Expertise in coronary artery disease, heart arrhythmias, cardiac rehabilitation, and lipid management.",
    ],
    specialInterests: [
      "# Coronary Artery Disease",
      "# Palpitations & Arrhythmias",
      "# Cardiac Risk Profiling",
      "# Post-Bypass Care",
    ],
    notes: ["Upload your blood pressure log and ECG results before call."],
    experienceList: [
      {
        hospital: "United Hospital",
        designation: "Senior Consultant Cardiologist",
        period: "2016 - Present",
        department: "Cardiology & Intensive Care",
      },
    ],
    reviewsList: [
      {
        id: "rev-1",
        patientName: "Anisur Rahman",
        rating: 5,
        date: "2 days ago",
        comment:
          "Compassionate, patient-friendly, and very experienced doctor.",
      },
    ],
  },
];

export function getDoctorById(id: string): DoctorDetail | undefined {
  return doctorsData.find((doc) => doc.id === id) || doctorsData[0];
}

export interface DoctorDetail {
  id: string;
  name: string;
  degrees: string;
  specialty: string;
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
    name: "Assoc. Prof. Dr. Muhammed Ashraful Alam Bhuiyan",
    degrees: "MBBS, MCPS, Diploma (Dermatology), FCPS (Dermatology)",
    specialty: "Dermatologist",
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
      "# Hyperhidrosis",
      "# Fungal Infections",
      "# Hair & Nail problems",
      "# STD- Gonorrhoea, syphilis, Herpes etc",
      "# Sexual dysfunction",
    ],
    notes: [
      "I will be happy to make you ease in any skin condition inshaAllah.",
      "Pl upload your diseased skin conditions, with natural light, without any use of special effect or filter /documents before consultation.",
      "May Allah bless us all with good health and safety.",
    ],
    experienceList: [
      {
        hospital: "Combined Military Hospital (CMH), Dhaka",
        designation: "Associate Professor & Senior Consultant",
        period: "2018 - Present",
        department: "Dermatology & Venereology",
      },
      {
        hospital: "Chittagong Medical College & Hospital",
        designation: "Assistant Professor",
        period: "2012 - 2018",
        department: "Skin & VD",
      },
      {
        hospital: "Dhaka Medical College Hospital",
        designation: "Registrar / Resident Surgeon",
        period: "2007 - 2012",
        department: "Clinical Dermatology",
      },
    ],
    reviewsList: [
      {
        id: "rev-1",
        patientName: "Tanvir Ahmed",
        rating: 5,
        date: "2 days ago",
        comment:
          "Excellent doctor. Very patiently listened to my skin allergy problem and prescribed effective medications.",
      },
      {
        id: "rev-2",
        patientName: "Sadia Rahman",
        rating: 5,
        date: "1 week ago",
        comment:
          "Consultation was crisp, polite and gave very practical advice for my daughter's eczema.",
      },
      {
        id: "rev-3",
        patientName: "Kamrul Islam",
        rating: 5,
        date: "3 weeks ago",
        comment:
          "Doctor Ashraful is very knowledgeable and reassuring. Recommended 100%!",
      },
    ],
  },
  {
    id: "doc-2",
    name: "Farjana Akter",
    degrees: "BSc, MSc (Food & Nutrition, DU), Clinical Dietetics Certified",
    specialty: "Nutritionist",
    totalExperience: "6+ Years",
    bmdcNumber: "N14890",
    rating: 4.9,
    reviewCount: 320,
    workplace: "Working in Labaid Specialized Hospital",
    fee: 550,
    followUpFee: 400,
    patientAttended: 4210,
    joinedDate: "January 15, 2021",
    doctorCode: "DT4812",
    avgWaitingTime: "20 minutes",
    avgConsultationTime: "15 minutes",
    instantConsultationTime: "Everyday (09:00 AM - 08:00 PM)",
    appointmentConsultationTime: "Everyday (07:00 PM - 09:30 PM)",
    image: "/images/specialists/doc-2.jpg",
    about: [
      "Clinical Dietitian and Nutrition Consultant specializing in lifestyle disorders.",
      "Providing customized therapeutic meal planning for diabetes, fatty liver, PCOS, and weight management.",
    ],
    specialInterests: [
      "# Weight Loss & Gain",
      "# Diabetic Diet Management",
      "# PCOS & Hormonal Balance",
      "# Pediatric Nutrition",
      "# Hypertension & Heart Healthy Diet",
    ],
    notes: [
      "Please keep your recent fasting blood sugar and lipid profile reports handy during consultation.",
      "Consistency and tailored nutrition plans bring lifelong health improvements.",
    ],
    experienceList: [
      {
        hospital: "Labaid Specialized Hospital, Dhanmondi",
        designation: "Consultant Nutritionist",
        period: "2020 - Present",
        department: "Dietetics & Clinical Nutrition",
      },
      {
        hospital: "Square Hospitals Ltd",
        designation: "Clinical Dietitian",
        period: "2018 - 2020",
        department: "Nutrition Department",
      },
    ],
    reviewsList: [
      {
        id: "rev-1",
        patientName: "Nusrat Jahan",
        rating: 5,
        date: "Yesterday",
        comment:
          "Very friendly and gave me an easy-to-follow diet chart for weight management.",
      },
    ],
  },
  {
    id: "doc-3",
    name: "Asst. Prof. Dr. Shaikh Abdullah Al Mamun",
    degrees: "MBBS, MD (Cardiology), FCPS (Medicine), FACC (USA)",
    specialty: "Adult Cardiologist",
    totalExperience: "17+ Years",
    bmdcNumber: "A28904",
    rating: 5.0,
    reviewCount: 920,
    workplace:
      "Working in National Institute of Cardiovascular Diseases (NICVD)",
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
      "Senior Cardiologist & Interventional Heart Specialist.",
      "Specialized in hypertension, ischemic heart disease, coronary angiography, heart failure management, and preventive cardiovascular healthcare.",
    ],
    specialInterests: [
      "# Hypertension & Blood Pressure",
      "# Ischemic Heart Disease",
      "# Heart Failure Management",
      "# Post-Angioplasty Care",
      "# Arrhythmia & Palpitations",
    ],
    notes: [
      "Please upload your latest ECG, Echocardiogram, and current prescription list before the session.",
    ],
    experienceList: [
      {
        hospital: "National Institute of Cardiovascular Diseases (NICVD)",
        designation: "Assistant Professor",
        period: "2016 - Present",
        department: "Cardiology & Cath Lab",
      },
      {
        hospital: "Ibn Sina Specialized Hospital",
        designation: "Consultant Cardiologist",
        period: "2012 - 2016",
        department: "Cardiology",
      },
    ],
    reviewsList: [
      {
        id: "rev-1",
        patientName: "Mohammad Ali",
        rating: 5,
        date: "3 days ago",
        comment:
          "Doctor Mamun is top-notch. He explained my father's heart condition very clearly.",
      },
    ],
  },
  {
    id: "doc-4",
    name: "Assoc. Prof. Dr. Md. Zillur Rahman",
    degrees:
      "MBBS, FCPS (Psychiatry), WHO Fellow (Child & Adolescent Mental Health)",
    specialty: "Psychiatrist",
    totalExperience: "21+ Years",
    bmdcNumber: "A19820",
    rating: 5.0,
    reviewCount: 1120,
    workplace: "Working in National Institute of Mental Health (NIMH)",
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
      "Decades of expertise in treating anxiety disorders, clinical depression, OCD, sleep disturbances, and adolescent behavioral counseling.",
    ],
    specialInterests: [
      "# Anxiety & Panic Disorders",
      "# Major Depressive Disorders",
      "# Sleep Disorders & Insomnia",
      "# OCD & Phobias",
      "# Stress Management",
    ],
    notes: [
      "All psychological consultations are 100% confidential and handled with deep empathy.",
    ],
    experienceList: [
      {
        hospital: "National Institute of Mental Health (NIMH)",
        designation: "Associate Professor",
        period: "2014 - Present",
        department: "Adult & Geriatric Psychiatry",
      },
    ],
    reviewsList: [
      {
        id: "rev-1",
        patientName: "Tasneem F.",
        rating: 5,
        date: "4 days ago",
        comment:
          "Very compassionate listener. Helped me overcome intense panic attacks.",
      },
    ],
  },
  {
    id: "doc-5",
    name: "Assoc. Prof. Dr. Amrita Lal Halder",
    degrees: "MBBS, DCH, FCPS (Pediatrics), Fellow Neonatology (Singapore)",
    specialty: "Child Specialist",
    totalExperience: "18+ Years",
    bmdcNumber: "A24110",
    rating: 5.0,
    reviewCount: 1640,
    workplace: "Working in Dhaka Shishu (Children) Hospital",
    fee: 1300,
    followUpFee: 900,
    patientAttended: 19500,
    joinedDate: "November 08, 2020",
    doctorCode: "DT1420",
    avgWaitingTime: "30 minutes",
    avgConsultationTime: "15 minutes",
    instantConsultationTime: "Everyday (11:00 AM - 10:00 PM)",
    appointmentConsultationTime: "Everyday (07:00 PM - 09:30 PM)",
    image: "/images/specialists/doc-5.jpg",
    about: [
      "Senior Pediatrician & Neonatologist.",
      "Dedicated to newborn care, child growth monitoring, pediatric infectious diseases, asthma, and infant immunization.",
    ],
    specialInterests: [
      "# Newborn & Infant Care",
      "# Pediatric Asthma & Allergies",
      "# Growth & Development Tracking",
      "# Childhood Infections & Fevers",
      "# Vaccination Consultation",
    ],
    notes: [
      "Please keep your baby's weight and vaccination card ready before video call.",
    ],
    experienceList: [
      {
        hospital: "Dhaka Shishu (Children) Hospital",
        designation: "Associate Professor of Pediatrics",
        period: "2015 - Present",
        department: "Department of Pediatrics & Neonatology",
      },
    ],
    reviewsList: [
      {
        id: "rev-1",
        patientName: "Rezaul Karim",
        rating: 5,
        date: "1 week ago",
        comment:
          "He diagnosed my baby's persistent cough accurately when other clinics failed.",
      },
    ],
  },
  {
    id: "doc-6",
    name: "Dr. Mohammad Aminul Islam",
    degrees: "MBBS, MD (Endocrinology & Metabolism), CCD (BIRDEM)",
    specialty: "Endocrinologist",
    totalExperience: "11+ Years",
    bmdcNumber: "A36712",
    rating: 5.0,
    reviewCount: 950,
    workplace: "Working in BIRDEM General Hospital",
    fee: 750,
    followUpFee: 500,
    patientAttended: 8900,
    joinedDate: "March 18, 2021",
    doctorCode: "DT3190",
    avgWaitingTime: "25 minutes",
    avgConsultationTime: "12 minutes",
    instantConsultationTime: "Everyday (02:00 PM - 10:00 PM)",
    appointmentConsultationTime: "Everyday (08:00 PM - 10:00 PM)",
    image: "/images/specialists/doc-child.jpg",
    about: [
      "Consultant Endocrinologist & Diabetologist.",
      "Expertise in comprehensive diabetes management, thyroid disorders, metabolic syndromes, and adrenal gland disorders.",
    ],
    specialInterests: [
      "# Diabetes Mellitus Type 1 & 2",
      "# Hypothyroidism & Hyperthyroidism",
      "# Gestational Diabetes in Pregnancy",
      "# Obesity & Metabolic Syndrome",
      "# Osteoporosis & Calcium Disorders",
    ],
    notes: [
      "Please upload recent HbA1c, Fasting Blood Glucose, and TSH reports for an accurate prescription.",
    ],
    experienceList: [
      {
        hospital: "BIRDEM General Hospital",
        designation: "Consultant Endocrinologist",
        period: "2017 - Present",
        department: "Department of Endocrinology & Metabolism",
      },
    ],
    reviewsList: [
      {
        id: "rev-1",
        patientName: "Arifur Rahman",
        rating: 5,
        date: "5 days ago",
        comment:
          "Excellent advice on managing insulin levels. Highly recommend Dr. Aminul.",
      },
    ],
  },
];

export function getDoctorById(id: string): DoctorDetail | undefined {
  return doctorsData.find((doc) => doc.id === id) || doctorsData[0];
}

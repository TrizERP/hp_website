import Header from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/footer/Footer";
import * as React from "react";
import PricingCard from "./PricingCard";

const pricingData = {
  ERP: [
  {
    title: "Essential ERP",
    price: "25000",
    features: [
      "Admission Management",
      "Administrative & Management Solutions",
      "Finance & Operations",
      "Safety and Security Solutions",
      "Academic and exam management",
      "Student Services Solutions",
      "Quality & process improvement",
      "Analytics and Reporting Tools",
      "Engagement and Communication Tools",
      
    ],
    featuresDescription: {
      "Admission Management": `
        <ul class="list-disc pl-5">
          <li>Admission Management</li>
          <li class="pt-1">Inquiry management, Registration, confirmation</li>
        </ul>
      `,
      "Administrative & Management Solutions": `
        <ul class="list-disc pl-5">
          <li>User/Teacher Management</li>
        </ul>
      `,
      "Finance & Operations": `
         <ul class="list-disc pl-5">
          <li>Fees collection </li>
          
        </ul>
      `,
      "Safety and Security Solutions": `
         <ul class="list-disc pl-5">
          <li></li>
        </ul>
      `,
      "Academic and exam management": `
         <ul class="list-disc pl-5">
            <li>Exam management</li>
            <li class="pt-1">Result/Report Card</li>
            <li class="pt-1">Time table generation</li>
            <li class="pt-1">Assign class teacher</li>
        </ul>
      `,
       "Student Services Solutions":`
        <ul class="list-disc pl-5">
          <li>Student academic profile</li>
          <li class="pt-1">Student Attendance</li>
         <li class="pt-1">Certificate management</li>
        </ul>
       `,
       "Quality & process improvement":`
         <ul class="list-disc pl-5">
          <li>Rollover Management</li>
        </ul>
       `,
      "Analytics and Reporting Tools":`
        <ul class="list-disc pl-5">
          <li>Data Import/Export	"</li>
        </ul>
      `,
      "Engagement and Communication Tools":`
        <ul class="list-disc pl-5">
          <li>Communication Solutions</li>
          <li class="pt-1">Email, SMS</li>
          <li class="pt-1">Circulars & Notifications</li>
        </ul>
      `,
    },
    buttonColor: "sky-500",
    borderColor: "sky-500"
  },
  {
    title: " Advanced  ERP",
    price: "50000",
    recommended: true,
    Prerequisite: "Essential ERP+",
    features: [
      "Admission Management",
      "Administrative & Management Solutions",
      "Finance & Operations",
      "Safety and Security Solutions",
      "Academic and exam management",
      "Student Services Solutions",
      "Quality & process improvement",
      "Analytics and Reporting Tools",
      "Engagement and Communication Tools",
      
    ],
    featuresDescription: {
      "Admission Management": `
        <ul class="list-disc pl-5">
          <li>Education CRM</li>
          <li class="pt-1">Student admission marketing</li>
          <li class="pt-1">Student Admission sales management</li>
          <li class="pt-1">Online admission management</li>
          <li class="pt-1">Automated roll number</li> 
        </ul>
      `,
      "Administrative & Management Solutions": `
        <ul class="list-disc pl-5">
          <li>User/Teacher Management</li>
          <li class="pt-1">Front desk management</li>
          <li class="pt-1">Inward-Outward (Digital Records)</li>
          <li class="pt-1">Complain management</li>
          <li class="pt-1">Inventory & Store Management</li>
          <li class="pt-1">Hostel Management</li>
          <li class="pt-1">Task Management</li>
        </ul>
      `,
      "Finance & Operations": `
         <ul class="list-disc pl-5">
          <li>Fees collection online/offline</li>
          <li class="pt-1">NACH Fees</li>
          <li class="pt-1">Imprest deposit</li>
          <li class="pt-1">Payment gateway (UPI)</li>
          <li class="pt-1">Petty Cash management</li>
          <li class="pt-1">Fees Reconciliation</li>
        </ul>
      `,
      "Safety and Security Solutions": `
         <ul class="list-disc pl-5">
          <li>Visitor Management</li>
          <li class="pt-1">Sudent Pick up/drop</li>
          <li class="pt-1">Consent Management</li>
          <li class="pt-1">Transport Management</li>
        </ul>
      `,
      "Academic and exam management": `
         <ul class="list-disc pl-5">
            <li>Exam management</li>
            <li class="pt-1">Result/Report Card</li>
            <li class="pt-1">Holistic Progressive Card</li>
            <li class="pt-1">Assign class teacher</li>
            <li class="pt-1">Teacher transfer utility</li>
            <li class="pt-1">Proxy Management</li>
            <li class="pt-1">Teacher Diary</li>
        </ul>
      `,
       "Student Services Solutions":`
  <ul class="list-disc pl-5">
    <li>Student academic profile</li>
    <li class="pt-1">Student Attendance</li>
    <li class="pt-1">Certificate management</li>
    <li class="pt-1">Student Medical records</li>
    <li class="pt-1">Student Certificate</li>
    <li class="pt-1">Transport Management</li>
    <li class="pt-1">Student request</li>
    <li class="pt-1">I-Card (student/teacher)</li>
    <li class="pt-1">Parent-Teacher Meeting</li>
    <li class="pt-1">Discipline Tracking</li>
    <li class="pt-1">Library Management</li>
    <li class="pt-1">Book Circulation</li>
    <li class="pt-1">Quick Book Return</li>
    <li class="pt-1">Book Renewal</li>
    <li class="pt-1">Member wise Fine Detail</li>
    <li class="pt-1">Barcode Generation</li>
    <li class="pt-1 pb-1">Add Virtual Resource Master</li>
  </ul>
`,

      "Quality & process improvement":`
  <ul class="list-disc pl-5">
    <li>Rollover Management</li>
    <li class="pt-1">CBSE Compliance</li>
    <li class="pt-1">State Govt Compliance</li>
    <li class="pt-1">Central Govt Compliance</li>
    <li class="pt-1">SQAA</li>
    <li class="pt-1">Template Library</li>
  </ul>
`,

     "Analytics and Reporting Tools":`
  <ul class="list-disc pl-5">
    <li>Data Import/Export</li>
    <li class="pt-1">Analytics Reports</li>
    <li class="pt-1">Graphical Reports</li>
    <li class="pt-1">Performance Reports</li>
    <li class="pt-1">Stakeholder wise Dashboard</li>
  </ul>
`,
     "Engagement and Communication Tools":`
  <ul class="list-disc pl-5">
    <li>Communication Solutions</li>
    <li class="pt-1">Dynamic forms & Fields</li>
    <li class="pt-1">PTM (Parent-Teacher Meetings)</li>
    <li class="pt-1">Circulars & Notifications</li>
    <li class="pt-1">Teacher Diary</li>
    <li class="pt-1">Email, SMS</li>
  </ul>
`,
    },
    buttonColor: "sky-500",
    borderColor: "sky-500"
  },
  {
    title: "Next gen ERP",
    price: "75000",
    bestValue: true,
    Prerequisite: " Advanced ERP+",
    features: [
      "Admission Management",
      "Administrative & Management Solutions",
      "Finance & Operations",
      "Safety and Security Solutions",
      "Academic and exam management",
      "Student Services Solutions",
      "Quality & process improvement",
      "Analytics and Reporting Tools",
      "Engagement and Communication Tools",
      "Education AI"
    ],
    featuresDescription: {
     "Admission Management": `
        <ul class="list-disc pl-5">
          <li>Education CRM</li>
          <li class="pt-1">Student admission marketing</li>
          <li class="pt-1">Student Admission sales management</li>
          <li class="pt-1">Online admission with exam management</li>
          <li class="pt-1">Automated roll number</li> 
        </ul>
      `,
      "Administrative & Management Solutions": `
        <ul class="list-disc pl-5">
          <li>User/Teacher Management</li>
          <li class="pt-1">Front desk management</li>
          <li class="pt-1">Inward-Outward (Digital Records)</li>
          <li class="pt-1">Complain management</li>
          <li class="pt-1">Inventory & Store Management</li>
          <li class="pt-1">Hostel Management</li>
          <li class="pt-1">Task Management</li>
        </ul>
      `,
      "Finance & Operations": `
         <ul class="list-disc pl-5">
          <li>Fees collection online/offline</li>
          <li class="pt-1">NACH Fees</li>
          <li class="pt-1">Imprest deposit</li>
          <li class="pt-1">Payment gateway (UPI)</li>
          <li class="pt-1">Petty Cash management</li>
          <li class="pt-1">Fees Reconciliation</li>
        </ul>
      `,
      "Safety and Security Solutions": `
         <ul class="list-disc pl-5">
          <li>Visitor Management</li>
          <li class="pt-1">Sudent Pick up/drop</li>
          <li class="pt-1">Consent Management</li>
          <li class="pt-1">Transport Management</li>
        </ul>
      `,
      "Academic and exam management": `
         <ul class="list-disc pl-5">
            <li>Exam management</li>
            <li class="pt-1">Result/Report Card</li>
            <li class="pt-1">Holistic Progressive Card</li>
            <li class="pt-1">Assign class teacher</li>
            <li class="pt-1">Teacher transfer utility</li>
            <li class="pt-1">Proxy Management</li>
            <li class="pt-1">Teacher Diary</li>
        </ul>
      `,
       "Student Services Solutions":`
  <ul class="list-disc pl-5">
    <li>Student academic profile</li>
    <li class="pt-1">Student Attendance</li>
    <li class="pt-1">Certificate management</li>
    <li class="pt-1">Student Medical records</li>
    <li class="pt-1">Student Certificate</li>
    <li class="pt-1">Transport Management</li>
    <li class="pt-1">Student request</li>
    <li class="pt-1">I-Card (student/teacher)</li>
    <li class="pt-1">Parent-Teacher Meeting</li>
    <li class="pt-1">Discipline Tracking</li>
    <li class="pt-1">Library Management</li>
    <li class="pt-1">Book Circulation</li>
    <li class="pt-1">Quick Book Return</li>
    <li class="pt-1">Book Renewal</li>
    <li class="pt-1">Member wise Fine Detail</li>
    <li class="pt-1">Barcode Generation</li>
    <li class="pt-1 pb-1">Add Virtual Resource Master</li>
    <li class="pt-1 pb-1">Library virtual content</li>
  </ul>
`,
"Quality & process improvement":`
<ul class="list-disc pl-5">
  <li>Rollover Management</li>
  <li class="pt-1">CBSE Compliance</li>
  <li class="pt-1">State Govt Compliance</li>
  <li class="pt-1">Central Govt Compliance</li>
  <li class="pt-1">SQAA</li>
   <li class="pt-1">Template Library</li>
    <li class="pt-1">Nomenclature change</li>
</ul>
`,

   "Analytics and Reporting Tools":`
<ul class="list-disc pl-5">
  <li>Data Import/Export</li>
  <li class="pt-1">Analytics Reports</li>
  <li class="pt-1">Graphical Reports</li>
  <li class="pt-1">Performance Reports</li>
  <li class="pt-1">Stakeholder wise Dashboard</li>
</ul>
`,
   "Engagement and Communication Tools":`
<ul class="list-disc pl-5">
  <li>Communication Solutions</li>
  <li class="pt-1">Dynamic forms & Fields</li>
  <li class="pt-1">PTM (Parent-Teacher Meetings)</li>
  <li class="pt-1">Circulars & Notifications</li>
  <li class="pt-1">Teacher Diary</li>
  <li class="pt-1">Email, SMS</li>
  <li class="pt-1">Whatsapp</li>
</ul>
`,
      "Education AI":`
  <ul class="list-disc pl-5">
    <li>AI driven time table</li>
    <li class="pt-1">AI driven fees predictions</li>
    <li class="pt-1">Chat-Bot</li>
  </ul>
`,

    },
    buttonColor: "green-600",
    borderColor: "green-600"
  },
],
LMS: [
  {
    title: "Essential LMS",
    price: "20000",
    features: [
      "Teach & Learn",
      "Test & Assessment",
      "Engagement",
      "LMSanalytics"
    ],
    featuresDescription: {
      "Teach & Learn": `
        <ul class="list-disc pl-5">
          <li>Create Courses & Content</li>
          <li class="pt-1">Create Standard/Subjects</li>
          <li class="pt-1">Add new Chapter/topic/sub topic</li>
          <li class="pt-1">map & allign Skill, Blooms, LO, PO, CO</li>
          <li class="pt-1">Flash Card</li>
          <li class="pt-1">Add Question Answer/create question bank</li>
          <li class="pt-1">Manage Student Homework,</li>
          <li class="pt-1">Notification, Chat, Messages</li>
          <li class="pt-1">Extra carriculam learning Like SEL, STEM, vocational training</li>
          <li class="pt-1">Sports courses creation</li>
          <li class="pt-1">Teacher dairys</li>
        </ul>
      `,
      "Test & Assessment": `
        <ul class="list-disc pl-5">
          <li>Home work/assignment management</li>
          <li class="pt-1">Question bank/Questions papaer solutions</li>
        </ul>
      `,
      "Engagement": `
        <ul class="list-disc pl-5">
          <li>Leader board gamification</li>
          <li class="pt-1">Student Eportfolio</li>
        </ul>
      `,
      "LMSanalytics": `
        <ul class="list-disc pl-5">
          <li>LMS report</li>
        </ul>
      `,
    },
    buttonColor: "sky-500",
    borderColor: "sky-500"
  },
  {
    title: "  Advanced LMS",
    price: "40000",
    recommended: true,
    Prerequisite: "Essential LMS+",
    features: [
      "Teach & Learn",
      "Carriculam management",
      "content library",
      "Test & Assessment",
      "Engagement",
      "LMSanalytics"
    ],
    featuresDescription: {
      "Teach & Learn": `
        <ul class="list-disc pl-5">
          <li>Create Courses & Content</li>
          <li class="pt-1">Create Standard/Subjects</li>
          <li class="pt-1">Add new Chapter/topic/sub topic</li>
          <li class="pt-1">map & allign Skill, Blooms, LO, PO, CO</li>
          <li class="pt-1">Flash Card</li>
          <li class="pt-1">Add Question Answer/create question bank</li>
          <li class="pt-1">Manage Student Homework,</li>
          <li class="pt-1">Notification, Chat, Messages</li>
          <li class="pt-1">Extra carriculam learning Like SEL, STEM, vocational training</li>
          <li class="pt-1">Sports courses creation</li>
          <li class="pt-1">Teacher dairys</li>
        </ul>
      `,
      "Carriculam management": `
        <ul class="list-disc pl-5">
          <li>Carriculam planning with content</li>
          <li class="pt-1">Syllabus management</li>
          <li class="pt-1">Day wise lesson plan</li>
        </ul>
      `,
      "content library": `
        <ul class="list-disc pl-5">
          <li>6 to 12 Std Digital content with teacher taining resource</li>
          <li class="pt-1">1 to 12 Std Social emotional learning content with CASEL framework</li>
          <li class="pt-1">1 to 12 Std Vocational training content </li>
          <li class="pt-1">1 to 12 Std Softskill content  </li>
          <li class="pt-1">1 to 12 Std sports content </li>
          
        </ul>
      `,
      "Test & Assessment": `
        <ul class="list-disc pl-5">
          <li>Home work/assignment management</li>
          <li class="pt-1">Assignmenet anotation</li>
          <li class="pt-1">Question bank with 5lacks questiona with wider level catagarizationquestions papaer solutions with</li>
          <li class="pt-1">Virtual classroom </li>
          </ul>
      `,
      "Engagement": `
        <ul class="list-disc pl-5">
          <li>Leader board gamification</li>
          <li class="pt-1">Student Eportfolio</li>
          <li class="pt-1">Social coloborative learning</li>
        </ul>
      `,
      "LMSanalytics": `
        <ul class="list-disc pl-5">
          <li>LMS report</li>
          <li class="pt-1">Teacher analysis reports</li>
          <li class="pt-1">Student Analysis Report</li>
        </ul>
      `,
    },
    buttonColor: "sky-500",
    borderColor: "sky-500"
  },
  {
    title: "Next gen LMS",
    price: "60000",
    bestValue: true,
    Prerequisite: "Advanced LMS+",
    features: [
      "Teach & Learn",
      "Carriculam management",
      "content library",
      "Test & Assessment",
      "Engagement",
      "LMSanalytics"
    ],
    featuresDescription: {
      "Teach & Learn": `
        <ul class="list-disc pl-5">
          <li>Create Courses & Content</li>
          <li class="pt-1">Create Standard/Subjects</li>
          <li class="pt-1">Add new Chapter/topic/sub topic</li>
          <li class="pt-1">map & allign Skill, Blooms, LO, PO, CO</li>
          <li class="pt-1">Flash Card</li>
          <li class="pt-1">Add Question Answer/create question bank</li>
          <li class="pt-1">Manage Student Homework,</li>
          <li class="pt-1">Notification, Chat, Messages</li>
          <li class="pt-1">Extra carriculam learning Like SEL, STEM, vocational training</li>
          <li class="pt-1">Sports courses creation</li>
          <li class="pt-1">Teacher dairys</li>
        </ul>
      `,
      "Carriculam management": `
        <ul class="list-disc pl-5">
          <li>Carriculam planning with content</li>
          <li class="pt-1">Syllabus management</li>
          <li class="pt-1">Day wise lesson plan</li>
        </ul>
      `,
      "content library": `
        <ul class="list-disc pl-5">
          <li>6 to 12 Std Digital content with teacher taining resource</li>
          <li class="pt-1">1 to 12 Std Social emotional learning content with CASEL framework</li>
          <li class="pt-1">1 to 12 Std Vocational training content </li>
          <li class="pt-1">1 to 12 Std Softskill content  </li>
          <li class="pt-1">1 to 12 Std sports content </li>
          
        </ul>
      `,
      "Test & Assessment": `
        <ul class="list-disc pl-5">
          <li>Home work/assignment management</li>
          <li class="pt-1">Assignmenet anotation</li>
          <li class="pt-1">Question bank with 5lacks questiona with wider level catagarizationquestions papaer solutions with</li>
          <li class="pt-1">AI driven PAL solutions </li>
          <li class="pt-1">Virtual classroom </li>
          </ul>
      `,
      "Engagement": `
        <ul class="list-disc pl-5">
          <li>Leader board gamification</li>
          <li class="pt-1">Student Eportfolio</li>
          <li class="pt-1">Social coloborative learning</li>
        </ul>
      `,
      "LMSanalytics": `
        <ul class="list-disc pl-5">
          <li>LMS report</li>
          <li class="pt-1">Teacher analysis reports</li>
          <li class="pt-1">Student Analysis Report</li>
        </ul>
      `,
    },
    buttonColor: "green-600",
    borderColor: "green-600"
  },
],
CareerCounselling: [
  {
    title: "Awareness Module",
    price: "15000",
    features: [
      "Career Exploration Tools",
      "Interest & Personality Tests",
      "Career Curriculum"
    ],
    featuresDescription: [
      "Browse career paths",
      "RIASEC-based profiling",
      "Structured learning materials for career awareness"
    ],
    buttonColor: "sky-500",
    borderColor: "sky-500"
  },
  {
    title: "Counselling Module",
    price: "30000",
    recommended: true,
    Prerequisite: "Awareness Module+",
    features: [
      "Personalized Career Counselling",
      "Occupation Info",
      "Education Pathways",
      "Scholarship Details"
    ],
    featuresDescription: [
      "AI-driven insights",
      "Job roles, skills required",
      "Higher studies and professional options",
      "Access to financial aid options"
    ],
    buttonColor: "sky-500",
    borderColor: "sky-500"
  },
  {
    title: "Comprehensive Module",
    price: "50000",
    bestValue: true,
    Prerequisite: "Counselling Module+",
    features: [
      "Career Preparation Tools",
      "Competitive Exam Guidance",
      "Self-Service Tools"
    ],
    featuresDescription: [
      "Mock interviews, CV/resume templates",
      "Exam lists, preparation tips",
      "Personalized dashboards for students"
    ],
    buttonColor: "green-600",
    borderColor: "green-600"
  },
],
HRMS: [
  {
    title: "Essential HRMS",
    price: "30000",
    features: [
      "Organization management"
    ],
    featuresDescription: {
      "Organization management": `
        <ul class="list-disc pl-5">
          <li>Organization management</li>
          <li class="pt-1">Employee roles & responsibilities</li>
          <li class="pt-1">Payroll management</li>
          <li class="pt-1">Leave management</li>
          <li class="pt-1">Leave Auth. / Approval</li>
          <li class="pt-1">AEmployee Salary Structure</li>
          <li class="pt-1">Employee Deductions</li>
          <li class="pt-1">Salary Certificate</li>
          <li class="pt-1">Salary Slip Generation</li>
          <li class="pt-1">Form-16</li>
          <li class="pt-1">Professional Tax management</li>
          <li class="pt-1">Import data</li>
          <li class="pt-1">Reports & Analytics</li>
        </ul>
      `,
    },
    buttonColor: "sky-500",
    borderColor: "sky-500"
  },
  {
    title: "Advanced  HRMS",
    price: "50000",
    recommended: true,
    Prerequisite: "Essential HRMS+",
    features: [
      "Organization management"
    ],
    featuresDescription: {
      "Organization management": `
        <ul class="list-disc pl-5">
          <li>Organization management</li>
          <li class="pt-1">Department management</li>
          <li class="pt-1">Employee management</li>
          <li class="pt-1">Employee/department task management</li>
          <li class="pt-1">Employee roles & responsibilities</li>
          <li class="pt-1">Payroll management</li>
          <li class="pt-1">Leave management</li>
          <li class="pt-1">Leave Auth. / Approval</li>
          <li class="pt-1">AEmployee Salary Structure</li>
          <li class="pt-1">Employee Deductions</li>
          <li class="pt-1">Salary Certificate</li>
          <li class="pt-1">Salary Slip Generation</li>
          <li class="pt-1">Form-16</li>
          <li class="pt-1">Professional Tax management</li>
          <li class="pt-1">Import data</li>
          <li class="pt-1">Reports & Analytics</li>
        </ul>
      `,
    },
    buttonColor: "sky-500",
    borderColor: "sky-500"
  },
  {
    title: "Next gen HRMS",
    price: "75000",
    bestValue: true,
    Prerequisite: "Advanced  HRMS+",
    features: [
      "Organization management"
    ],
    featuresDescription:{
      "Organization management": `
        <ul class="list-disc pl-5">
          <li>Organization management</li>
          <li class="pt-1">Department management</li>
          <li class="pt-1">Employee management</li>
          <li class="pt-1">Employee/department task management</li>
          <li class="pt-1">Employee roles & responsibilities</li>
          <li class="pt-1">Organization Skill Master</li>
          <li class="pt-1">Skill matrix</li>
          <li class="pt-1">Skill taxonomy</li>
          <li class="pt-1">Skill mapping</li>
          <li class="pt-1">Payroll management</li>
          <li class="pt-1">Leave management</li>
          <li class="pt-1">Leave Auth. / Approval</li>
          <li class="pt-1">AEmployee Salary Structure</li>
          <li class="pt-1">Employee Deductions</li>
          <li class="pt-1">Salary Certificate</li>
          <li class="pt-1">Salary Slip Generation</li>
          <li class="pt-1">Form-16</li>
          <li class="pt-1">Professional Tax management</li>
          <li class="pt-1">Import data</li>
          <li class="pt-1">Reports & Analytics</li>
        </ul>
      `,
    },
    buttonColor: "green-600",
    borderColor: "green-600"
  }
]
};

function PricingSection() {
  const [selectedCategory, setSelectedCategory] = React.useState("ERP");

  const handleButtonClick = (category) => {
    setSelectedCategory(category);
  };
  const buttonStyle = (category) => {
    return selectedCategory === category
      ? "bg-slate-700 text-amber-600 border-green-600"
      : "bg-white text-indigo-950 border-green-600";
  };
  const getCategoryMarginTop = () => {
    switch (selectedCategory) {
      case "ERP":
        return "lg:-mt-[120px]";
      case "LMS":
        return "lg:-mt-[140px]";
      case "HRMS":
        return "lg:-mt-[200px]";
      case "CareerCounselling":
        return "lg:-mt-[200px]";
      default:
        return " ";
    }
  };
  return (
    <div className="flex flex-col w-full max-w-full mx-auto overflow-x-hidden">
    <div className="text-xl">
    <Header />
    </div>
    <div className="flex flex-col rounded-none">
      <div className="flex overflow-hidden flex-col items-center lg:px-20 lg:pt-20 lg:pb-56 sm:px-10 sm:pt-10 sm:pb-10 w-full text-white bg-slate-700 max-md:px-5 max-md:py-24 max-md:max-w-full">
        <div className="lg:flex lg:flex-col lg:items-center sm:flex sm:flex-col sm:items-center mb-0 max-w-full w-[full] max-md:mb-2.5">
          <h1 className="lg:text-3xl sm:text-xl sm:items-center font-bold font-merriweather max-md:max-w-full max-md:text-4xl">
            Explore & find your perfect fit!
          </h1>
         <div className="lg:flex lg:flex-col lg:items-center sm:flex sm:flex-col sm:items-center mt-6 lg:text-sm sm:text-xs sm:text-center font-merriweather max-md:max-w-full">
            Unlock the perfect plan for you or your team. Take the first step toward effortless management today.
          </div>
          <div className="lg:flex overflow-hidden lg:px-10 lg:py-0 mt-10 max-w-full font-inter lg:text-[16px] lg:items-start lg:justify-between font-medium bg-white border-2 border-green-600 border-solid lg:rounded-[30px] sm:rounded-[15px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-indigo-950 lg:w-[600px] max-md:px-5 max-md:mt-10 sm:text-[10px] sm:w-full sm:px-4 sm:py-0 sm:flex sm:justify-center">
          <button
                onClick={() => handleButtonClick("ERP")}
                className={`py-2 px-4 rounded-full ${buttonStyle("ERP")}`}
                tabIndex={0}
              >
                ERP
              </button>
              <button
                onClick={() => handleButtonClick("LMS")}
                className={`py-2 px-4 rounded-full ${buttonStyle("LMS")}`}
                tabIndex={0}
              >
                LMS
              </button>
              <button
                onClick={() => handleButtonClick("HRMS")}
                className={`py-2 px-4 rounded-full ${buttonStyle("HRMS")}`}
                tabIndex={0}
              >
                HRMS
              </button>
              <button
                onClick={() => handleButtonClick("CareerCounselling")}
                className={`py-2 px-4 rounded-full ${buttonStyle("CareerCounselling")}`}
                tabIndex={0}
              >
                Career Counselling
              </button>
          </div>
        </div>
      </div>
      <div className={`z-10 self-center lg:ml-4 lg:mr-6 w-full max-w-full max-md:mt-0 max-md:max-w-full sm:mt-0 sm:ml-0 sm:mr-0 sm:mb-10 ${getCategoryMarginTop()}`}>
          <div className="lg:flex lg:gap-10 lg:px-0 justify-center items-center lg:w-full lg:min-h-screen sm:block sm:w-full sm:px-4 sm:gap-4">
            {pricingData[selectedCategory]?.map((plan, index) => (
              <PricingCard key={index} {...plan} />
            ))}
          </div>
        </div>
    </div>
    <Footer />
    </div>
  );
}

export default PricingSection;

import { Briefcase, Handshake, Code2, Monitor, BarChart3, Building2, UserSquare2, FileCheck2, Presentation, Landmark, Rocket } from "lucide-react";

export const MAIN_NAVIGATION = [
    { name: "HOME", href: "/" },
    { name: "PRODUCTS", href: "#products", hasDropdown: true },
    { name: "SERVICES", href: "/services" },
    { name: "ABOUT US", href: "/about" },
    { name: "COMPANY", href: "#company", hasDropdown: true },
];

export const FOOTER_LINKS = {
    home: [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Why We Serve", href: "#" },
        { name: "Changes and Benefits", href: "#" },
        { name: "Blogs and broachers", href: "#" },
        { name: "Contact", href: "/contact" },
        { name: "Request a free demo", href: "/contact" },
    ],
    k12: [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Products", href: "/erpservice" }, // Mapping to existing route
        { name: "Services", href: "/services" },
        { name: "Resources & Blogs", href: "#" },
        { name: "Contact", href: "/contact" },
        { name: "Book Demo", href: "/contact" },
    ],
    higherEd: [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Products", href: "/lmsservice" }, // Mapping to existing route
        { name: "Services", href: "/services" },
        { name: "Resources & Blogs", href: "#" },
        { name: "Contact", href: "/contact" },
        { name: "Book Demo", href: "/contact" },
    ],
    corporate: [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Products", href: "/commservice" }, // Mapping to existing route
        { name: "Services", href: "/services" },
        { name: "Resources & Blogs", href: "#" },
        { name: "Contact", href: "/contact" },
        { name: "Book Demo", href: "/contact" },
    ],
};

export const PARTNERS_DATA = [
    {
        id: 1,
        category: "School",
        title: "School Partners",
        description: "Empowering K-12 schools with modern management and learning tools.",
        image: "/assets/partner_school.png"
    },
    {
        id: 2,
        category: "Product",
        title: "Higher Education Partners",
        description: "Streamlining operations and enhancing learning experiences for Higher Education Institutes.",
        image: "/assets/partner_university.png"
    },
    {
        id: 3,
        category: "Software Engineering",
        title: "Corporate Partners",
        description: "Providing cutting-edge training and HRMS solutions for corporate growth.",
        image: "/assets/partner_corporate.png"
    },
    {
        id: 4,
        category: "Sales",
        title: "Channel Partners",
        description: "Collaborating to expand Scholar Clone's reach and impact globally.",
        image: "/assets/partner_channel.png"
    },
    // Repeats
    {
        id: 5,
        category: "School",
        title: "School Partners",
        description: "Empowering K-12 schools with modern management and learning tools.",
        image: "/assets/partner_school.png"
    },
    {
        id: 6,
        category: "Product",
        title: "Higher Education Partners",
        description: "Streamlining operations and enhancing learning experiences for Higher Education Institutes.",
        image: "/assets/partner_university.png"
    },
    {
        id: 7,
        category: "Software Engineering",
        title: "Corporate Partners",
        description: "Providing cutting-edge training and HRMS solutions for corporate growth.",
        image: "/assets/partner_corporate.png"
    },
    {
        id: 8,
        category: "Sales",
        title: "Channel Partners",
        description: "Collaborating to expand Scholar Clone's reach and impact globally.",
        image: "/assets/partner_channel.png"
    }
];

export const CAREER_ROLES_DATA = [
    {
        title: "Full Stack Developers",
        location: "Onsite/Remote",
        experience: "2-6 years",
        iconKey: "code"
    },
    {
        title: "UI/UX Designer",
        location: "Remote / Onsite",
        experience: "1-4 years",
        iconKey: "monitor"
    },
    {
        title: "Product Manager",
        location: "Remote / Hybrid",
        experience: "3-7 years",
        iconKey: "briefcase"
    }
];

export const EMPLOYEE_BENEFITS_DATA = [
    "Competitive Salary & Performance-Based Growth",
    "Flexible Work Arrangements (Hybrid & Remote Work Options)",
    "Medical & Wellness Benefits (Health insurance, mental well-being programs)",
    "Learning & Upskilling Programs (Certifications, AI training, workshops)",
    "Hackathons, Innovation Challenges & Tech Events",
    "Annual Team Retreats, Offsite Events & Celebrations"
];

// NOTE: Products Dropdown Data strictly for reference or mobile menu fallbacks.
// Desktop Navbar uses the legacy ProductsDropdown component.
export const PRODUCTS_DROPDOWN_DATA = [
    {
        category: "Talent Solutions",
        description: "Empower your workforce with end-to-end talent management.",
        icon: "UserSquare2",
        href: "/products/talent-solutions/talent-management",
        image: "/assets/admin_preview.png",
        products: [
            { name: "Talent Management", href: "/products/talent-solutions/talent-management", description: "Holistic talent lifecycle management." },
            { name: "Smart Hiring Engine", href: "/products/talent-solutions/smart-hiring-engine", description: "AI-driven recruitment automation." },
            { name: "Skills Validation", href: "/products/talent-solutions/skills-validation-studio", description: "Verify and certify employee skills." },
            { name: "Skill Management", href: "/products/talent-solutions/skill-management", description: "Track and organize organizational skills." },
            { name: "Skill Health Scan", href: "/products/talent-solutions/skill-health-scan", description: "Analyze workforce skill gaps." },
            { name: "Skill Genome Builder", href: "/products/talent-solutions/skill-genome-builder", description: "Map complex skill DNA." },
            { name: "Skill Finder", href: "/products/talent-solutions/skill-finder", description: "Locate internal experts instantly." },
            { name: "Resource Commander", href: "/products/talent-solutions/resource-commander", description: "Optimize resource allocation." },
            { name: "Seamless Onboarding", href: "/products/talent-solutions/seamless-onboarding", description: "Streamline new hire integration." },
            { name: "Organization Mgmt", href: "/products/talent-solutions/organization-management", description: "Structure and hierarchy management." },
            { name: "Performance Enablement", href: "/products/talent-solutions/performance-enablement", description: "Drive peak performance." },
            { name: "Growth Predictor", href: "/products/talent-solutions/growth-predictor", description: "AI-based career growth insights." },
            { name: "Competency Matrix", href: "/products/talent-solutions/competency-matrix", description: "Visualize team competencies." },
            { name: "Career Pathing", href: "/products/talent-solutions/career-pathing", description: "Define clear growth trajectories." },
        ]
    },
    {
        category: "Learning Solutions",
        description: "Continuous learning and development for a future-ready team.",
        icon: "Presentation",
        href: "/products/learning-solutions/learning-management",
        image: "/assets/learning_preview.png",
        products: [
            { name: "LMS", href: "/products/learning-solutions/learning-management", description: "Comprehensive learning management." },
            { name: "Mobile Learning", href: "/products/learning-solutions/mobile-learning", description: "Learn on the go, anywhere." },
            { name: "Learning Paths", href: "/products/learning-solutions/learning-paths", description: "Structured learning journeys." },
            { name: "Workforce Planning", href: "/products/learning-solutions/workforce-planning", description: "Strategic workforce forecasting." },
            { name: "Knowledge Vault", href: "/products/learning-solutions/knowledge-vault", description: "Centralized knowledge repository." },
            { name: "Course Library", href: "/products/learning-solutions/course-library", description: "Extensive catalog of courses." },
            { name: "Build Your Training", href: "/products/learning-solutions/build-your-training", description: "Custom training creation tools." },
            { name: "Leadership Shield", href: "/products/learning-solutions/leadership-shield", description: "Executive leadership development." },
        ]
    },
    {
        category: "Finance & HR",
        description: "Streamline improved financial and HR operations.",
        icon: "Building2",
        href: "/products/finance-hr/payroll-management",
        image: "/assets/finance_preview.png",
        products: [
            { name: "Payroll Management", href: "/products/finance-hr/payroll-management", description: "Automated and accurate payroll." },
            { name: "Time & Attendance", href: "/products/finance-hr/time-attendance", description: "Track work hours effortlessly." },
            { name: "Leave Management", href: "/products/finance-hr/leave-management", description: "Simplify leave requests & approvals." },
            { name: "Compliance Mgmt", href: "/products/finance-hr/compliance-management", description: "Stay compliant with regulations." },
            { name: "Petty Cash & Expense", href: "/products/finance-hr/petty-cash-expense-management", description: "Manage daily expenses easily." },
        ]
    },
    {
        category: "Integration",
        description: "Seamlessly connect your systems and data.",
        icon: "Rocket",
        href: "/products/integration/system-integration",
        image: "/assets/admin_preview.png",
        products: [
            { name: "System Integration", href: "/products/integration/system-integration", description: "Connect disparate software systems." },
            { name: "HRIT Solutions", href: "/products/integration/hrit-solutions", description: "HR IT infrastructure support." },
        ]
    },
    {
        category: "Analytics",
        description: "Data-driven insights for better decision making.",
        icon: "BarChart3",
        href: "/products/analytics-solutions/team-analytics",
        image: "/assets/analytics_preview.png",
        products: [
            { name: "Team Analytics", href: "/products/analytics-solutions/team-analytics", description: "Insights into team performance." },
            { name: "Learning Analytics", href: "/products/analytics-solutions/learning-analytics", description: "Track learning effectiveness." },
        ]
    }
];

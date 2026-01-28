import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

// Category to Items mapping
const categoryData = {
  "Skills Intelligence Platform": [
    "Skill Genome Builder",
    "Skill Finder",
    "Skills Validation Studio",
    "Competency Matrix",
    "Growth Predictor",
  ],
  "Corporate Learning": [
    "Course Library",
    "Learning Paths",
    "Build Your Training",
    "Learning Analytics",
    "Mobile Learning",
  ],
  "Talent Management": [
    "Smart Hiring Engine",
    "Seamless Onboarding ",
    "Performance Enablement",
    "Career Pathing",
    "Leadership Shield",
    "Skill Health Scan",
  ],
  "Empower organization": [
    "Workforce Planning",
    "Compliance management",
    "Team Analytics",
    "Knowledge Vault",
    "Resource Commander",
    "System Integration",
  ],
  "HRIT Solutions": [
    "Payroll Management",
    "Leave management",
    "petty cash/expnse management",
    "Time & attandance",
  ],
};

// Converts string to URL-friendly slug
const slugify = (text) =>
  text
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9\s-]/g, "") // remove special characters
    .replace(/\s+/g, "-"); // replace spaces with -

// Optional: Provide custom/legacy URLs for specific items
// Mapped Routes to App Router Structure
const customRoutes = {
  // Skills Intelligence Platform (Talent Solutions)
  "Skill Genome Builder": "/products/talent-solutions/skill-genome-builder",
  "Skill Finder": "/products/talent-solutions/skill-finder",
  "Skills Validation Studio": "/products/talent-solutions/skills-validation-studio",
  "Competency Matrix": "/products/talent-solutions/competency-matrix",
  "Growth Predictor": "/products/talent-solutions/growth-predictor",

  // Corporate Learning (Learning Solutions)
  "Course Library": "/products/learning-solutions/course-library",
  "Learning Paths": "/products/learning-solutions/learning-paths",
  "Build Your Training": "/products/learning-solutions/build-your-training",
  "Learning Analytics": "/products/analytics-solutions/learning-analytics", // Moved to Analytics
  "Mobile Learning": "/products/learning-solutions/mobile-learning",

  // Talent Management (Talent Solutions)
  "Smart Hiring Engine": "/products/talent-solutions/smart-hiring-engine",
  "Seamless Onboarding ": "/products/talent-solutions/seamless-onboarding",
  "Performance Enablement": "/products/talent-solutions/performance-enablement",
  "Career Pathing": "/products/talent-solutions/career-pathing",
  "Leadership Shield": "/products/learning-solutions/leadership-shield", // Moved to Learning
  "Skill Health Scan": "/products/talent-solutions/skill-health-scan",

  // Empower organization
  "Workforce Planning": "/products/learning-solutions/workforce-planning", // Moved to Learning
  "Compliance management": "/products/finance-hr/compliance-management",
  "Team Analytics": "/products/analytics-solutions/team-analytics",
  "Knowledge Vault": "/products/learning-solutions/knowledge-vault",
  "Resource Commander": "/products/talent-solutions/resource-commander",
  "System Integration": "/products/integration/system-integration",

  // HRIT Solutions (Finance & HR)
  "Payroll Management": "/products/finance-hr/payroll-management",
  "Leave management": "/products/finance-hr/leave-management",
  "petty cash/expnse management": "/products/finance-hr/petty-cash-expense-management",
  "Time & attandance": "/products/finance-hr/time-attendance",

  // Category Links
  "Skills Intelligence Platform": "/products/talent-solutions/skill-management",
  "Corporate Learning": "/products/learning-solutions/learning-management",
  "Talent Management": "/products/talent-solutions/talent-management",
  "Empower organization": "/products/talent-solutions/organization-management",
  "HRIT Solutions": "/products/finance-hr/payroll-management",
};

export default function ResourceTypes() {
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Skills Intelligence Platform");

  useEffect(() => {
    setVisible(true);
  }, []);

  const allItems = categoryData[activeCategory] || [];

  // Handles clicking an item
  const handleItemClick = (item) => {
    const allItemsFlat = Object.values(categoryData).flat().map((s) => s.trim());
    const isValidItem = allItemsFlat.includes(item.trim());

    if (isValidItem) {
      const path = customRoutes[item] || `/${slugify(item)}`;
      router.push(path);
    } else {
      router.push("/not-found"); // redirect to fake path → triggers 404
    }
  };

  // Handles clicking a category
  const handleCategoryClick = (category) => {
    const isValidCategory = Object.keys(categoryData).includes(category.trim());

    if (customRoutes[category]) {
      router.push(customRoutes[category]);
    } else if (isValidCategory) {
      setActiveCategory(category);
    } else {
      router.push("/not-found"); // invalid category
    }
  };

  return (
    <div
      className={`flex w-[80%] mx-auto font-inter text-[14px] text-black bg-white rounded-2xl transition-opacity duration-500 ${visible ? "opacity-100" : "opacity-0"
        }`}
      style={{
        boxShadow: "0 0 25px 3px rgba(36, 174, 139, 0.45)",
        height: "305px",
      }}
    >
      {/* Left Column */}
      <div className="w-2/4 border-r border-gray-200 bg-gray-50 rounded-2xl flex flex-col overflow-y-auto">
        {Object.keys(categoryData).map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            onMouseEnter={() => setActiveCategory(category)}
            className={`text-left px-5 py-4 border-b border-gray-200 hover:bg-gray-100 ${activeCategory === category ? "bg-white font-semibold" : ""
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Middle Column */}
      <div className="w-2/4 p-4 bg-white overflow-y-auto">
        {allItems.map((item) => (
          <div
            key={item}
            className="py-1 cursor-pointer hover:underline"
            onClick={() => handleItemClick(item)}
          >
            {item}
          </div>
        ))}
      </div>

      {/* Right Column */}
      <div className="w-2/4 bg-teal-500 text-white p-6 relative overflow-hidden rounded-r-xl">
        <h3 className="text-lg font-bold mb-1">Transform Your HR with</h3>
        <h2 className="text-2xl font-extrabold mb-4">Modern Solutions</h2>
        <p className="text-sm leading-relaxed mb-10">
          Unlock the full potential of your workforce with our HRIT Solutions.
          From streamlining payroll to fostering talent growth with Skill Matrix & Taxonomy,
          we provide tools to empower your organization.
        </p>
        <div className="absolute bottom-6 left-6 flex items-center gap-2">
          <span className="text-xl">🎯</span>
          <span className="text-base font-semibold">Ready to Innovate?</span>
        </div>

        {/* Floating spheres */}
        <div className="absolute bottom-0 right-8 flex gap-2 z-0">
          <div className="w-10 h-10 bg-white/30 rounded-full"></div>
          <div className="w-6 h-6 bg-white/20 rounded-full"></div>
          <div className="w-16 h-16 bg-white/40 rounded-full translate-y-4"></div>
        </div>
      </div>
    </div>
  );
}

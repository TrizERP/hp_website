import * as React from "react";
import { useState, useEffect } from "react";
import { LeftMenuItem, RightMenuItem } from "./MenuItem";
import { leftMenuItems } from "./menuItems";

const rightMenuForERP = [
  {
    id: 1,
    icon: "https://cdn.builder.io/api/v1/image/assets%2Faf5cfb29bb594d4e9f9e505ea3916323%2F2cb4d2ca67904af2bd2ef3eadd317aa7",
    title: "Attendance & Tracking Solutions",
    description: "Efficient tools for managing attendance and tracking student or employee activity.",
    url: "/integration"
  },
  {
    id: 2,
    icon: "https://cdn.builder.io/api/v1/image/assets%2Faf5cfb29bb594d4e9f9e505ea3916323%2Fc952c20564be459388dd31190902d2d8",
    title: "Communication & Collaboration",
    description: "Solutions to enhance collaboration, communication, and information sharing across teams.",
    url: "/integration"
  },
  {
    id: 3,
    icon: "https://cdn.builder.io/api/v1/image/assets%2Faf5cfb29bb594d4e9f9e505ea3916323%2F53a043a3788042bcbbd394dd0c49d8d9", 
    title: "Financial Integrations",
    description: "Integrating financial tools to streamline budgeting, accounting, and transaction management.",
    url: "/integration"
  },
  {
    id: 4,
    icon: "https://cdn.builder.io/api/v1/image/assets%2Faf5cfb29bb594d4e9f9e505ea3916323%2F928d71ef6d294cc58c25064b01aa5e58",
    title: "API & System Integrations",
    description: "Seamless API integrations to connect various systems, enhancing operational efficiency.",
    url: "/integration"
  }
];

const rightMenuForLMS = [
    {
      "id": 1,
      "icon": "https://cdn.builder.io/api/v1/image/assets%2Faf5cfb29bb594d4e9f9e505ea3916323%2Fec0863f1c0a3457787f3af9aa1e53e02",
      "title": "Implementation and Configuration Services",
      "description": "Setup and configure the system to meet institutional needs efficiently.",
      "url": "/supportservice"
    },
    {
      "id": 2,
      "icon": "https://cdn.builder.io/api/v1/image/assets/TEMP/dea4835c79f2a7ba954ab009ffb103c2d43c17231bba87d9cb39f016b168a31d?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
      "title": "System Setup and Customization",
      "description": "Customize system settings and features to align with institutional requirements.",
      "url": "/supportservice"
    },
    // {
    //   "id": 3,
    //   "icon": "https://cdn.builder.io/api/v1/image/assets%2Faf5cfb29bb594d4e9f9e505ea3916323%2Fbe47e60772e6499eb2fc54cb119f6679",
    //   "title": "Data Migration",
    //   "description": "Seamlessly transfer existing data into the new system with accuracy and security.",
    //   "url": "/supportservice"
    // },
    {
      "id": 3,
      "icon": "https://cdn.builder.io/api/v1/image/assets%2Faf5cfb29bb594d4e9f9e505ea3916323%2Fbe47e60772e6499eb2fc54cb119f6679",
      "title": "Training and Onboarding",
      "description": "Comprehensive training for users to efficiently navigate and utilize the system.",
      "url": "/supportservice"
    },
    // {
    //   "id": 5,
    //   "icon": "https://cdn.builder.io/api/v1/image/assets%2Faf5cfb29bb594d4e9f9e505ea3916323%2Fbe47e60772e6499eb2fc54cb119f6679",
    //   "title": "Staff and Faculty Training",
    //   "description": "Specialized training sessions tailored for faculty and administrative staff.",
    //   "url": "/supportservice"
    // },
    // {
    //   "id": 6,
    //   "icon": "https://cdn.builder.io/api/v1/image/assets%2Faf5cfb29bb594d4e9f9e505ea3916323%2Fbe47e60772e6499eb2fc54cb119f6679",
    //   "title": "Student Orientation",
    //   "description": "Guided orientation programs to help students familiarize themselves with the system.",
    //   "url": "/supportservice"
    // }   
];
const rightMenuForCareerCounselling = [
  {
    id: 1,
    icon: "https://cdn.builder.io/api/v1/image/assets%2Faf5cfb29bb594d4e9f9e505ea3916323%2Fa3a2321c00be44e4962b0579382a2032",
    title: "Parents App",
    description: "Mobile app providing parents with essential updates, notifications, and engagement tools.",
    url: "mobileservices"
  },
  {
    id: 2,
    icon: "https://cdn.builder.io/api/v1/image/assets%2Faf5cfb29bb594d4e9f9e505ea3916323%2Ffba3dbdba24f49d6bbf4b3110326ea71",
    title: "User/Teacher App",
    description: "Mobile app designed for teachers and users to manage their schedules, assignments, and communications.",
    url: "mobileservices"
  },
  {
    id: 3,
    icon: "https://cdn.builder.io/api/v1/image/assets%2Faf5cfb29bb594d4e9f9e505ea3916323%2F912ae317300349dfab795aeb67619a91",
    title: "Management App",
    description: "A mobile app designed to help administrators manage academic schedules, resources, and staff.",
    url: "mobileservices"
  }
];
const rightMenuForEducationAI = [
  {
    id: 1,
    icon: "https://cdn.builder.io/api/v1/image/assets%2Faf5cfb29bb594d4e9f9e505ea3916323%2F29f06911f14b46339300dcaf70b818a5",
    title: "SQAA",
    description: "AI-driven solutions for automating assessments, feedback, and learning progress tracking.",
    url: "/pithree"
  }
];

const rightMenuForCommunication = [
  {
    id: 1,
    icon: "https://cdn.builder.io/api/v1/image/assets%2Faf5cfb29bb594d4e9f9e505ea3916323%2F626b3a07b43d42be935277528eb75100",
    title: "Access & Permissions Management",
    description: "Tools for managing user access, permissions, and rights across systems and platforms.",
    url: "/pione"
  },
  {
    id: 2,
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/dea4835c79f2a7ba954ab009ffb103c2d43c17231bba87d9cb39f016b168a31d?placeholderIfAbsent=true&apiKey=af5cfb29bb594d4e9f9e505ea3916323",
    title: "Workflow Automation",
    description: "Automate repetitive workflows, improving productivity and reducing human error.",
    url: "/pione"
  },
  {
    id: 3,
    icon: "https://cdn.builder.io/api/v1/image/assets%2Faf5cfb29bb594d4e9f9e505ea3916323%2F10208af32d0243b1b40b29ebfcf13c83",
    title: "Mapping & Visualization",
    description: "Create visual representations of data and processes for better decision-making and planning.",
    url: "/pione"
  },
  {
    id: 4,
    icon: "https://cdn.builder.io/api/v1/image/assets%2Faf5cfb29bb594d4e9f9e505ea3916323%2F29f06911f14b46339300dcaf70b818a5",
    title: "SQAA",
    description: "AI-driven solutions for automating assessments, feedback, and learning progress tracking.",
    url: "/pithree"
  }
  ];

  const rightMenuForAnalytics = [
    {
      id: 1,
      icon: "https://cdn.builder.io/api/v1/image/assets%2Faf5cfb29bb594d4e9f9e505ea3916323%2Fa3a2321c00be44e4962b0579382a2032",
      title: "Student & Parent Solutions",
      description: "Analytics tools for tracking student progress and parent engagement.",
      url: "/pitwo"
    },
    {
      id: 2,
      icon: "https://cdn.builder.io/api/v1/image/assets%2Faf5cfb29bb594d4e9f9e505ea3916323%2Fb5714328efc94631922051de6c89106a",
      title: "Teaching & Educational Management",
      description: "Analytics for assessing teaching effectiveness and managing educational performance.",
      url: "/pitwo"
    },
    {
      id: 3,
      icon: "https://cdn.builder.io/api/v1/image/assets%2Faf5cfb29bb594d4e9f9e505ea3916323%2F53a043a3788042bcbbd394dd0c49d8d9",
      title: "Finance & Administrative Solutions",
      description: "Solutions for financial tracking and administrative task automation within schools or institutions.",
      url: "/pitwo"
    },
    {
      id: 4,
      icon: "https://cdn.builder.io/api/v1/image/assets%2Faf5cfb29bb594d4e9f9e505ea3916323%2Ff9e0c50dc66f4503b4b24cbfb2440603",
      title: "Human Resource & Staff Management",
      description: "Analytics tools to monitor staff performance, HR activities, and operational efficiency.",
      url: "/pitwo"
    }
  ];
const additionalContentForERP = [
  [
    {
      id: 1,
      title: "RFID Attendance",
      url1: "/integrations/rfid-attendance",  
      url2: "/integrations/rfid-attendance-benefits"
    },
    {
      id: 2,
      title: "VTS (Vehicle Tracking System)",
      url1: "/integrations/vts",  
      url2: "/integrations/vts-benefits"
    }
  ],
  [
    {
      id: 3,
      title: "Google Classroom",
      url1: "/integrations/google-classroom",  
      url2: "/integrations/google-classroom-benefits"
    },
    {
      id: 4,
      title: "Zoom",
      url1: "/integrations/zoom",  
      url2: "/integrations/zoom-benefits"
    },
    {
      id: 5,
      title: "Google Meet",
      url1: "/integrations/google-meet",  
      url2: "/integrations/google-meet-benefits"
    }
  ],
  [
    {
      id: 6,
      title: "Payment Gateway",
      url1: "/integrations/payment-gateway",  
      url2: "/integrations/payment-gateway-benefits"
    },
    {
      id: 7,
      title: "Zoho Books",
      url1: "/integrations/zoho-books",  
      url2: "/integrations/zoho-books-benefits"
    },
    {
      id: 8,
      title: "Tally",
      url1: "/integrations/tally",  
      url2: "/integrations/tally-benefits"
    }
  ],
  [
    {
      id: 9,
      title: "API Integration",
      url1: "/integrations/api-integration",  
      url2: "/integrations/api-integration-benefits"
    }
  ]
];

const additionalContentForLMS = [
  [
    {
      id: 1,
      title: "Template",
      url1: "/template-management/roll-over",  
      url2: "/template-management/roll-over-benefits"
    }
  ],
  [
    {
      id: 2,
      title: "Roll Over",
      url1: "/template-management/roll-over",  
      url2: "/template-management/roll-over-benefits"
    }
  ],
  [
    {
      id: 3,
      title: "Onboarding",
      url1: "/template-management/onboarding",  
      url2: "/template-management/onboarding-benefits"
    }
  ]
];


const additionalContentForCareerCounselling = [
  [
    {
      id: 1,
      title: "Parent",
      url1: "/template-management/roll-over",  
      url2: "/template-management/roll-over-benefits"
    }
  ],
  [
    {
      id: 2,
      title: "User/Teacher",
      url1: "/template-management/roll-over",  
      url2: "/template-management/roll-over-benefits"
    }
  ],
  [
    {
      id: 3,
      title: "Management",
      url1: "/template-management/onboarding",  
      url2: "/template-management/onboarding-benefits"
    }
  ]
];


const additionalContentForEducationAI = [
  [
    {
      id: 1,
      title: "SQAA",
      url1: "/ai/pal",  
      url2: "/ai/pal-benefits"
    },
  ]
];

const additionalContentForCommunication = [
  [
    {
      id: 1,
      title: "Role-Based Rights Management",
      url1: "/permissions/role-based-rights",  
      url2: "/permissions/role-based-rights-benefits"
    },
    {
      id: 2,
      title: "Mobile App Rights Management",
      url1: "/permissions/mobile-app-rights",  
      url2: "/permissions/mobile-app-rights-benefits"
    }
  ],
  [
    {
      id: 3,
      title: "Workflow",
      url1: "/permissions/workflow",  
      url2: "/permissions/workflow-benefits"
    }
  ],
  [
    {
      id: 4,
      title: "Map",
      url1: "/permissions/map",  
      url2: "/permissions/map-benefits"
    }
  ],
  [
    {
      id: 5,
      title: "SQAA",
      url1: "/ai/pal",  
      url2: "/ai/pal-benefits"
    }
  ]
];

const additionalContentForAnalytics = [
  [
    {
      id: 1,
      title: "Student/Parents",
      url1: "/solutions/student-parents",  
      url2: "/solutions/student-parents-benefits"
    }
  ],
  [
    {
      id: 2,
      title: "Teacher",
      url1: "/solutions/teacher",  
      url2: "/solutions/teacher-benefits"
    },
    {
      id: 3,
      title: "Principal",
      url1: "/solutions/principal",  
      url2: "/solutions/principal-benefits"
    },
    {
      id: 4,
      title: "Librarian",
      url1: "/solutions/librarian",  
      url2: "/solutions/librarian-benefits"
    }
  ],
  [
    {
      id: 5,
      title: "CA/Finance Head",
      url1: "/solutions/finance-head",  
      url2: "/solutions/finance-head-benefits"
    },
    {
      id: 6,
      title: "Fees Head",
      url1: "/solutions/fees-head",  
      url2: "/solutions/fees-head-benefits"
    }
  ],
  [
    {
      id: 7,
      title: "HR Head",
      url1: "/solutions/hr-head",  
      url2: "/solutions/hr-head-benefits"
    }
  ]
];

export default function FeatureLayout({ onLeftMenuHover }) {
  const [hoveredLeftMenuId, setHoveredLeftMenuId] = React.useState(null);
  const [hoveredRightMenuId, setHoveredRightMenuId] = React.useState(null);
  const [visible, setVisible] = useState(false);

  // Logic for handling the right menu items
  const getRightMenuItems = (id) => {
    switch (id) {
      case 1:
        return rightMenuForERP;
      case 2:
        return rightMenuForLMS;
      case 3:
        return rightMenuForCareerCounselling;
    case 4:
        return rightMenuForEducationAI;
    case 5:
        return rightMenuForCommunication;
    case 6:
        return rightMenuForAnalytics;
      default:
        return [];
    }
  };
  const getAdditionalContent = (leftId,rightId) => {
    if (leftId == null || rightId == null) {
      return [];
    }
    if(leftId == 1){
    switch (rightId) {
      case 1:
        return additionalContentForERP[0];
      case 2:
        return additionalContentForERP[1];
      case 3:
        return additionalContentForERP[2];
      case 4:
        return additionalContentForERP[3];
      default:
        return [];
    }
  }
  else if(leftId == 2){
    switch (rightId) {
      case 1:
        return additionalContentForLMS[0];
      case 2:
        return additionalContentForLMS[1];
      case 3:
        return additionalContentForLMS[2];
      case 4:
        return additionalContentForLMS[3];
      default:
        return [];
    }
  }
  else if(leftId == 3){
    switch (rightId) {
      case 1:
        return additionalContentForCareerCounselling[0];
      case 2:
        return additionalContentForCareerCounselling[1];
      case 3:
        return additionalContentForCareerCounselling[2];
      case 4:
        return additionalContentForCareerCounselling[3];
      default:
        return [];
    }
  }
  else if(leftId == 4){
    switch (rightId) {
      case 1:
        return additionalContentForEducationAI[0];
      case 2:
        return additionalContentForEducationAI[1];
      case 3:
        return additionalContentForEducationAI[2];
      default:
        return [];
    }
  }
  else if(leftId == 5){
    switch (rightId) {
      case 1:
        return additionalContentForCommunication[0];
      case 2:
        return additionalContentForCommunication[1];
      case 3:
        return additionalContentForCommunication[2];
      case 4:
        return additionalContentForCommunication[3];
      default:
        return [];
    }
  }
  else if(leftId == 6){
    switch (rightId) {
      case 1:
        return additionalContentForAnalytics[0];
      case 2:
        return additionalContentForAnalytics[1];
      case 3:
        return additionalContentForAnalytics[2];
      case 4:
        return additionalContentForAnalytics[3];
      default:
        return [];
    }
  }
  return [];
  };

  useEffect(() => {
    setVisible(true);
  }, []);

  const handleMouseEnter = (id) => {
    setHoveredLeftMenuId(id);
    if (onLeftMenuHover) {
      // Pass the ID to the parent to adjust position
      console.log(id);
      onLeftMenuHover(id);
    }
  };
  const handleMouseEnterRight = (id) => {
    setHoveredRightMenuId(id);
  };
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnterNew = (item) => {
    setHoveredItem(item);
  };
  return (
    <div
      className={`overflow-hidden bg-gray-200 rounded-2xl shadow-sm ${visible ? "opacity-100" : "opacity-0"}`}
      style={{
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.5s ease-in-out',
        boxShadow: '0 0 25px 3px rgba(36, 174, 139, 0.45)',
      }}
    >
      <div className="relative flex h-full transition-all duration-300 ease-in-out">
        <div
          className={`flex h-full`}
          style={{
            width: hoveredLeftMenuId ? "calc(100% + 800px)" : "100%", // Expands to accommodate both right menu and extra content
          }}
        >
          <div
            className={`flex flex-col transition-all duration-300 ease-in-out bg-white`}
            style={{
              width: hoveredLeftMenuId ? "calc(100% - 800px)" : "100%", // Shrink left menu on hover
            }}
          >
            <div className="flex flex-col px-5 pt-24 pb-24 w-full text-sm font-semibold leading-none text-sky-500 shadow-sm max-md:px-5 max-md:pb-24" style={{
              paddingTop: hoveredLeftMenuId ? "10%" : "10%",
              paddingBottom: hoveredLeftMenuId ? "10%" : "10%",
            }}
          >
              {leftMenuItems.map((item) => (
                <div
                  key={item.id}
                  className="mt-5 first:mt-0"
                  onMouseEnter={() => handleMouseEnter(item.id)}
                >
                  <a href={item.url} className="flex items-center">
                    <LeftMenuItem icon={item.icon} title={item.title} />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Right Menu (Appears only on hover of left menu) */}
          <div
            className={`transition-all duration-300 ease-in-out bg-white`}
            style={{
              width: "400px", // Set width for right-side menu
              position: hoveredLeftMenuId ? "" : "absolute",
              transform: hoveredLeftMenuId ? "translateX(0)" : "translateX(100%)", // Slide right menu in
              opacity: hoveredLeftMenuId ? 1 : 0, // Fade in/out
            }}
          >
            <div className="flex flex-col pt-14 pb-14 mx-auto font-semibold size-full max-md:py-24 max-md:max-w-full">
              {getRightMenuItems(hoveredLeftMenuId).map((item) => (
                <div key={item.id} 
                     className="mt-5 first:mt-0"
                     onMouseEnter={() => handleMouseEnterRight(item.id)}
                >
                  <a href={item.url} className="flex items-center">
                    <RightMenuItem
                      icon={item.icon}
                      title={item.title}
                      description={item.description}
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Content (Appears next to the right menu) */}
          <div
            className={`flex flex-col items-start mt-12 w-full text-sm font-semibold leading-none text-sky-500 text-opacity-80 max-md:mt-10 transition-all duration-300 ease-in-out`}
            style={{
              width: "400px", // Fixed width for additional content
              position: hoveredLeftMenuId ? "" : "absolute",
              transform: hoveredLeftMenuId ? "translateX(0)" : "translateX(100%)", // Slide in/out with the right menu
              opacity: hoveredLeftMenuId ? 1 : 0, // Fade in/out
              pointerEvents: hoveredLeftMenuId ? "auto" : "none", // Enable/disable pointer events
            }}
          >
            <div className="px-6 py-6 -mt-16">
            {getAdditionalContent(hoveredLeftMenuId,hoveredRightMenuId)?.map((item) => (
              <a href={item.url1}
                key={item.id}
                className="flex flex-col mt-10"
                onMouseEnter={() => handleMouseEnterNew(item)}
              >
                {item.title}
                {/* {hoveredItem === item && (
                  <div className="flex gap-8 mt-3.5 ml-3.5 text-[12px] text-neutral-500 max-md:ml-2.5">
                    <a href={item.url1} className="basis-auto">Know Features</a>
                    <a href={item.url2}>Know Benefits</a>
                  </div>
                )} */}
              </a>
            ))}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

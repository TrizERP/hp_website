import React, { useState , useEffect} from "react";
import { makeStyles } from "@mui/styles";
import { useRouter } from 'next/router';
const useStyles = makeStyles((theme) => ({
    container: {
    width: "100%", // Ensure the container takes the full width
    margin: 0, // Remove default margin
    padding: 0, // Remove default padding
    background: "white", // Background color
    zIndex:999,
  },
    wrapper: {
      padding: "5px 20px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    img: {
      width: "40px",
    },
    hamburber: {
      width: "30px",
      height: "3px",
      background: "#000",
      borderRadius: "5px",
      boxShadow: "0 2px 5px rgb(255, 101, 47, 0.2)",
      transition: "all 0.5s ease-in-out",
      position: "relative",
      "&::before": {
        content: "''",
        position: "absolute",
        width: "30px",
        height: "3px",
        background: "#000",
        borderRadius: "5px",
        transition: "all 0.5s ease-in-out",
        transform: "translateY(-10px)",
      },
      "&::after": {
        content: "''",
        position: "absolute",
        width: "30px",
        height: "3px",
        background: "#000",
        borderRadius: "5px",
        transition: "all 0.5s ease-in-out",
        transform: "translateY(10px)",
      },
    },
    activeHamburger: {
      width: "30px",
      height: "3px",
      borderRadius: "5px",
      transform: "translateX(-50px)",
      background: "transparent",
      transition: "all 0.5s ease-in-out",
      "&::before": {
        content: "''",
        position: "absolute",
        width: "30px",
        height: "3px",
        background: "#000",
        borderRadius: "5px",
        transition: "all 0.5s ease-in-out",
        transform: "rotate(45deg) translate(35px, -35px)",
      },
      "&::after": {
        content: "''",
        position: "absolute",
        width: "30px",
        height: "3px",
        background: "#000",
        borderRadius: "5px",
        transition: "all 0.5s ease-in-out",
        transform: "rotate(-45deg) translate(35px, 35px)",
      },
    },
    sidenav: {
      position: "fixed",
      width: "50%",
      height: "88vh",
      background: "linear-gradient(150deg, #b1bfd8 0%, #2DD4BF 74%)",
      fontWeight: 500,
      fontSize: '15px',
      transform: "translateX(100%)",
      transition: "transform 0.5s ease-in-out",
      right:0,
    },
    activeSidenav: {
      position: "fixed",
      width: "50%",
      overflowY: "auto",
      height: "88vh",
      fontWeight: 500,  
      fontSize: '15px',
      background: "linear-gradient(150deg, #b1bfd8 0%, #2DD4BF 74%)",  // Change background when menu is active
      transform: "translateX(0)",
      transition: "transform 0.5s ease-in-out",
      zIndex: 10000,  // Higher than the menu
      right: 0,
    },
    ul: {
      listStyleType: "none",
      paddingTop: "100px",
      textAlign: "center",  // Center menu items in the sidebar
      "& li": {
        padding: "20px 0",
      },
    },
    a: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "5px 20px",
      color: "#000",
      cursor: "pointer",
      transition: "background 0.3s",
      "&:hover": {
        background: "rgba(255, 255, 255, 0.1)",
      },
    },
    dropdownWrapper: {
      position: "relative",
    },
    label: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "15px 20px",
      color: "#000",
      cursor: "pointer",
      transition: "background 0.3s",
      "&:hover": {
        background: "rgba(255, 255, 255, 0.9)", // Background turns white
        color: "rgb(33, 46, 65)", // Text color changes
        borderLeft: "4px solid rgb(33, 46, 65)", // Left border appears
      },
      "&.active": {
      background: "rgba(255, 255, 255, 1)", 
      color: "rgb(33, 46, 65)", 
      borderLeft: "4px solid rgb(33, 46, 65)", 
      transition: "transform 0.3s",
    },
    },
    arrow: {
      width: "10px",
      height: "10px",
      borderTop: "2px solid #000",
      borderRight: "2px solid #000",
      transform: "rotate(45deg)",
      transition: "transform 0.3s",
    },
    arrowOpen: {
      transform: "rotate(135deg)",
      borderTop: "2px solid rgb(33, 46, 65)",
      borderRight: "2px solid rgb(33, 46, 65)",
    },
    dropdownContent: {
        background: "rgb(253, 253, 253)",
        display: "block", // Keep this for the default state
        maxHeight: "0", // Initially set to 0
        height:"auto",
        opacity: 0, // Start with opacity 0
        transition: "max-height 0.5s ease-in-out, opacity 0.5s ease-in-out", // Transition for max-height and opacity
        left: 0,
        width: "100%",
        zIndex: 10,
      "& ul": {
        listStyle: "none",
        margin: 0,
        "& li": {
          padding: "10px 0",
          color: "#000",
          cursor: "pointer",
          "&:hover": {
            background: "rgba(255, 255, 255, 0.1)",
          },
        },
      },
    },
    dropdownContentOpen: {
        maxHeight: "400px", // Set to a value that accommodates your content
        opacity: 1, // Change opacity to 1 when open
    },  
    dropdownLink : {
        
    } 
  }));

const data = {
  headerNavbar: [
    { name: "HOME", link: "/" },
  ],
  headerCNavbar: [
    { name: "HOME", link: "/" },
  ],
};    
const dropdownDataOptions = {
  headerNavbar: {
    PRODUCTS: [
      { label: "Skill Management", href: "/Skill-Management" },
      { label: "Learning Management", href: "/Learning-Management" },
      { label: "Talent Management", href: "/Talent-Management" },
      { label: "Organizational Management", href: "/Organization-Management" },
      { label: "HRIT Solutions", href: "/HRIT-Solutions" },
    ],
    Contact: [
      { label: "Contact Us", href: "/contact" },
      { label: "Book a Demo", href: "/book-demo" },
      { label: "Request a Quote", href: "/request-quote" },
    ],
    Help: [
      { label: "Help Center", href: "/help-center" },
      { label: "FAQs", href: "/faqs" },
      { label: "Support", href: "/support" },
    ],
  },
  headerCNavbar: {
    PRODUCTS: [
      { label: "K12", href: "/" },
      { label: "Higher Studies", href: "https://triz-apphigher-education.vercel.app/" },
      { label: "Corporate", href: "/ccservice" },
    ],
    COMPANY: [
      { label: "Career", href: "/career" },
      { label: "About Us", href: "/aboutus" },
    ],
  },
};

const Index = ({ dropdownDataType }) => {
  const classes = useStyles();
  const [active, setActive] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true); 
  }, []);
  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "unset";
  }, [active]);
  const handleClickHome = () => {
    router.push("/"); 
  };
  const toggleDropdown = (key) => {
    setOpenDropdown((prev) => (prev === key ? null : key));
  };
  const dropdownData = dropdownDataOptions[dropdownDataType] || {}; 
  const dData = data[dropdownDataType] || {}; 
  return (
    <div className={classes.main}>
      <div className={classes.container}>
        <div className={classes.wrapper}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d5004699e6b071be4235f61284c39c71720761b87e2e9601e3dcf2f39988d548?placeholderIfAbsent=true&apiKey=f18a54c668db405eb048e2b0a7685d39"
            alt="logo"
            className="lg:flex Sm:hiddenobject-contain shrink-0 w-28 max-w-full aspect-[2.67]"
            onClick={handleClickHome}
          />
          <div onClick={() => setActive(!active)}>
            <div
              className={active ? classes.activeHamburger : classes.hamburber}
            />
          </div>
        </div>
      </div>
      <div className={active ? classes.activeSidenav : classes.sidenav}>
        <ul className={classes.ul}>
          {Object.entries(dData).map(([key, items]) => (
            <li key={key}>
              <a href={items.link} className={classes.a}>
                {items.name}
              </a>
            </li>
          ))}
          {Object.entries(dropdownData).map(([key, items]) => (
            <li key={key} className={classes.dropdownWrapper}>
              <div
                onClick={() => toggleDropdown(key)}
                className={`${classes.label} ${openDropdown === key ? 'active' : ''}`}
              >
                {key}
                <div
                  className={`${classes.arrow} ${
                    openDropdown === key ? classes.arrowOpen : ""
                  }`}
                />
              </div>
              <div
                className={`${classes.dropdownContent} ${
                  openDropdown === key ? classes.dropdownContentOpen : ""
                }`}
              >
                <ul>
                  {items.map((item, index) => (
                    <li key={index}>
                      <a href={item.href} className={classes.dropdownLink}>
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Index;

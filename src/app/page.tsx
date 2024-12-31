// "use client";
// import { useDispatch } from "react-redux";
// import { AppDispatch, useAppSelector } from "@/redux/store";
// import { useRouter } from "next/navigation";
// import { FiShare2, FiLock, FiClock, FiCloud } from 'react-icons/fi';

// const styles = {
//   container: {
//     minHeight: "100vh",
//     background: "linear-gradient(135deg, #f5f7fa 0%)",
//     fontFamily: "'Inter', sans-serif",
//   },
//   hero: {
//     display: "flex",
//     flexDirection: "column" as const,
//     alignItems: "center",
//     justifyContent: "center",
//     padding: "4rem 2rem",
//     textAlign: "center" as const,
//   },
//   title: {
//     fontSize: "3.5rem",
//     color: "#1a365d",
//     marginBottom: "1rem",
//     fontWeight: "800",
//   },
//   subtitle: {
//     fontSize: "1.5rem",
//     color: "#4a5568",
//     maxWidth: "700px",
//     marginBottom: "2rem",
//   },
//   highlight: {
//     color: "#4a90e2",
//     fontWeight: "800",
//   },
//   buttonContainer: {
//     display: "flex",
//     gap: "1rem",
//     justifyContent: "center",
//     marginTop: "1rem",
//   },
//   button: {
//     padding: "0.75rem 1.5rem",
//     fontSize: "1rem",
//     fontWeight: "600",
//     borderRadius: "8px",
//     border: "none",
//     cursor: "pointer",
//     transition: "all 0.2s ease",
//     color: "white",
//   },
//   primaryButton: {
//     background: "#4a90e2",
//     "&:hover": {
//       transform: "translateY(-2px)",
//       boxShadow: "0 5px 15px rgba(74, 144, 226, 0.3)",
//     },
//   },
//   secondaryButton: {
//     background: "#34d399",
//   },
//   features: {
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
//     gap: "2rem",
//     padding: "4rem 2rem",
//     maxWidth: "1200px",
//     margin: "0 auto",
//   },
//   featureCard: {
//     background: "white",
//     padding: "2rem",
//     borderRadius: "15px",
//     boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//     textAlign: "center" as const,
//     transition: "transform 0.2s ease",
//     "&:hover": {
//       transform: "translateY(-5px)",
//     },
//   },
//   icon: {
//     fontSize: "2rem",
//     color: "#4a90e2",
//     marginBottom: "1rem",
//   },
//   stats: {
//     display: "flex",
//     justifyContent: "space-around",
//     padding: "3rem 2rem",
//     background: "rgba(255, 255, 255, 0.9)",
//     marginTop: "2rem",
//   },
//   statItem: {
//     textAlign: "center" as const,
//   },
//   statNumber: {
//     fontSize: "2.5rem",
//     fontWeight: "bold",
//     color: "#4a90e2",
//   },
//   statLabel: {
//     color: "#4a5568",
//     marginTop: "0.5rem",
//   },
//   welcomeSection: {
//     padding: "2rem",
//     textAlign: "center" as const,
//     background: "white",
//     borderRadius: "15px",
//     boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
//     maxWidth: "600px",
//     margin: "2rem auto",
//   },
// };

// export default function Home() {
//   const dispatch = useDispatch<AppDispatch>();
//   const auth = useAppSelector((state) => state.authReducer);
//   const router = useRouter();

//   const features = [
//     {
//       icon: <FiShare2 style={{ fontSize: '2rem', color: '#4a90e2' }} />,
//       title: "Easy Sharing",
//       description: "Share files instantly with anyone, anywhere in the world"
//     },
//     {
//       icon: <FiLock style={{ fontSize: '2rem', color: '#4a90e2' }} />,
//       title: "Secure Storage",
//       description: "Your files are encrypted and stored securely"
//     },
//     {
//       icon: <FiClock style={{ fontSize: '2rem', color: '#4a90e2' }} />,
//       title: "Quick Access",
//       description: "Access your files anytime with fast download speeds"
//     },
//     {
//       icon: <FiCloud style={{ fontSize: '2rem', color: '#4a90e2' }} />,
//       title: "Cloud Storage",
//       description: "Store your files in the cloud with reliable backup"
//     }
//   ];

//   return (
//     <div style={styles.container}>
//       {!auth.isAuth ? (
//         <>
//           <div style={styles.hero}>
//             <h1 style={styles.title}>
//               Welcome to <span style={styles.highlight}>DATA</span>
//             </h1>
//             <p style={styles.subtitle}>
//               The secure and simple way to share your files with anyone. Fast, reliable, and always available.
//             </p>
//             <div style={styles.buttonContainer}>
//               <button
//                 style={{ ...styles.button, ...styles.primaryButton }}
//                 onClick={() => router.push("/login")}
//                 onMouseOver={(e) => {
//                   e.currentTarget.style.transform = "translateY(-2px)";
//                   e.currentTarget.style.boxShadow = "0 5px 15px rgba(74, 144, 226, 0.3)";
//                 }}
//                 onMouseOut={(e) => {
//                   e.currentTarget.style.transform = "translateY(0)";
//                   e.currentTarget.style.boxShadow = "none";
//                 }}
//               >
//                 Get Started
//               </button>
//               <button
//                 style={{ ...styles.button, ...styles.secondaryButton }}
//                 onClick={() => router.push("/signup")}
//                 onMouseOver={(e) => {
//                   e.currentTarget.style.transform = "translateY(-2px)";
//                   e.currentTarget.style.boxShadow = "0 5px 15px rgba(52, 211, 153, 0.3)";
//                 }}
//                 onMouseOut={(e) => {
//                   e.currentTarget.style.transform = "translateY(0)";
//                   e.currentTarget.style.boxShadow = "none";
//                 }}
//               >
//                 Sign Up Free
//               </button>
//             </div>
//           </div>

//           <div style={styles.features}>
//             {features.map((feature, index) => (
//               <div key={index} style={styles.featureCard}>
//                 {feature.icon}
//                 <h3 style={{ color: '#2d3748', marginBottom: '0.5rem' }}>{feature.title}</h3>
//                 <p style={{ color: '#4a5568' }}>{feature.description}</p>
//               </div>
//             ))}
//           </div>

          
//         </>
//       ) : (
//         <div style={styles.welcomeSection}>
//           <h1 style={{ ...styles.title, fontSize: '2.5rem' }}>Welcome, {auth.user?.name}!</h1>
//           <p style={{ color: '#4a5568', marginBottom: '1.5rem' }}>
//             Ready to manage your files? Access all your shared content in one place.
//           </p>
//           <button
//             style={{ ...styles.button, ...styles.primaryButton }}
//             onClick={() => router.push("/myfiles")}
//             onMouseOver={(e) => {
//               e.currentTarget.style.transform = "translateY(-2px)";
//               e.currentTarget.style.boxShadow = "0 5px 15px rgba(74, 144, 226, 0.3)";
//             }}
//             onMouseOut={(e) => {
//               e.currentTarget.style.transform = "translateY(0)";
//               e.currentTarget.style.boxShadow = "none";
//             }}
//           >
//             Go to My Files
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// "use client";
// import { useDispatch } from "react-redux";
// import { AppDispatch, useAppSelector } from "@/redux/store";
// import { useRouter } from "next/navigation";
// import { FiShare2, FiLock, FiClock, FiCloud } from 'react-icons/fi';
// import { useState, useEffect } from 'react';

// const styles = {
//   container: {
//     minHeight: "100vh",
//     padding: "2rem",
//     background: "linear-gradient(135deg, #f6f8ff 0%, #e9ecef 100%)",
//     display: "flex",
//     flexDirection: "column" as const,
//     alignItems: "center",
//   },
//   hero: {
//     display: "flex",
//     flexDirection: "column" as const,
//     alignItems: "center",
//     justifyContent: "center",
//     padding: "4rem 2rem",
//     textAlign: "center" as const,
//     maxWidth: "800px",
//     margin: "0 auto",
//   },
//   title: {
//     fontSize: "3.5rem",
//     fontWeight: "700",
//     color: "#2c3e50",
//     marginBottom: "1.5rem",
//     lineHeight: "1.2",
//   },
//   subtitle: {
//     fontSize: "1.25rem",
//     color: "#4a5568",
//     marginBottom: "2rem",
//     lineHeight: "1.6",
//   },
//   features: {
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
//     gap: "2rem",
//     width: "100%",
//     maxWidth: "1200px",
//     margin: "2rem auto",
//     padding: "0 2rem",
//   },
//   featureCard: {
//     background: "white",
//     padding: "2rem",
//     borderRadius: "1rem",
//     boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//     display: "flex",
//     flexDirection: "column" as const,
//     alignItems: "center",
//     textAlign: "center" as const,
//   },
//   icon: {
//     width: "3rem",
//     height: "3rem",
//     color: "#4a90e2",
//     marginBottom: "1rem",
//   },
//   featureTitle: {
//     fontSize: "1.5rem",
//     fontWeight: "600",
//     color: "#2c3e50",
//     marginBottom: "0.5rem",
//   },
//   featureDescription: {
//     color: "#4a5568",
//     lineHeight: "1.5",
//   },
//   buttonContainer: {
//     display: "flex",
//     gap: "1rem",
//     marginTop: "2rem",
//   },
//   baseButton: {
//     padding: "1rem 2rem",
//     fontSize: "1.125rem",
//     fontWeight: "600",
//     color: "white",
//     border: "none",
//     borderRadius: "1rem",
//     cursor: "pointer",
//     transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
//     display: "flex",
//     alignItems: "center",
//     gap: "0.75rem",
//     transform: "translateY(0)",
//     opacity: 1,
//   },
//   mainButton: {
//     background: "linear-gradient(45deg, #2c3e50, #3498db)",
//     boxShadow: "0 4px 15px rgba(44, 62, 80, 0.2)",
//     position: "relative" as const,
//     overflow: "hidden",
//     isolation: "isolate",
//   },
//   secondaryButton: {
//     background: "#34d399",
//   },
//   buttonSmall: {
//     padding: "0.875rem 1.5rem",
//     fontSize: "1rem",
//   },
//   buttonHover: {
//     transform: "translateY(-2px)",
//     boxShadow: "0 6px 20px rgba(44, 62, 80, 0.3)",
//   },
//   buttonNormal: {
//     transform: "translateY(0)",
//     boxShadow: "0 4px 15px rgba(44, 62, 80, 0.2)",
//   },
//   buttonIcon: {
//     width: "20px",
//     height: "20px",
//     transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
//   },
//   stats: {
//     display: "flex",
//     justifyContent: "space-around",
//     padding: "3rem 2rem",
//     background: "rgba(255, 255, 255, 0.9)",
//     marginTop: "2rem",
//   },
//   statItem: {
//     textAlign: "center" as const,
//   },
//   statNumber: {
//     fontSize: "2.5rem",
//     fontWeight: "bold",
//     color: "#4a90e2",
//   },
//   statLabel: {
//     color: "#4a5568",
//     marginTop: "0.5rem",
//   },
//   welcomeSection: {
//     width: "100%",
//     maxWidth: "800px",
//     margin: "4rem auto",
//     padding: "3rem",
//     background: "rgba(255, 255, 255, 0.95)",
//     borderRadius: "1.5rem",
//     boxShadow: "0 8px 32px rgba(44, 62, 80, 0.15)",
//     backdropFilter: "blur(8px)",
//     border: "1px solid rgba(255, 255, 255, 0.2)",
//     transform: "translateY(0)",
//     opacity: 1,
//     transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
//   },
//   welcomeSectionMobile: {
//     margin: "2rem auto",
//     padding: "2rem",
//   },
//   welcomeSectionSmall: {
//     margin: "1rem",
//     padding: "1.5rem",
//   },
//   welcomeContent: {
//     display: "flex",
//     flexDirection: "column" as const,
//     alignItems: "center",
//     textAlign: "center" as const,
//   },
//   welcomeHeader: {
//     marginBottom: "2.5rem",
//   },
//   welcomeTitle: {
//     fontSize: "3rem",
//     fontWeight: "700",
//     color: "#2c3e50",
//     marginBottom: "1rem",
//     lineHeight: 1.2,
//     letterSpacing: "-0.5px",
//     transform: "translateY(0)",
//     opacity: 1,
//     transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.2s",
//   },
//   welcomeTitleMobile: {
//     fontSize: "2.5rem",
//   },
//   welcomeTitleSmall: {
//     fontSize: "2rem",
//   },
//   description: {
//     fontSize: "1.25rem",
//     color: "#4a5568",
//     marginBottom: "1.5rem",
//     lineHeight: 1.6,
//     transform: "translateY(0)",
//     opacity: 1,
//     transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.4s",
//   },
//   descriptionMobile: {
//     fontSize: "1.125rem",
//   },
//   descriptionSmall: {
//     fontSize: "1rem",
//   },
//   welcomeActions: {
//     display: "flex",
//     justifyContent: "center",
//     marginTop: "1rem",
//   },
//   highlight: {
//     color: "#4a90e2",
//     fontWeight: "800",
//   },
//   userName: {
//     color: "#3498db",
//     fontWeight: "800",
//     display: "inline-block",
//     position: "relative" as const,
//     "&::after": {
//       content: '""',
//       position: "absolute",
//       bottom: "-2px",
//       left: 0,
//       width: "100%",
//       height: "2px",
//       background: "linear-gradient(90deg, #3498db, #2c3e50)",
//       transform: "scaleX(0)",
//       transformOrigin: "right",
//       transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
//     },
//   },
// } as const;

// export default function Home() {
//   const dispatch = useDispatch<AppDispatch>();
//   const auth = useAppSelector((state) => state.authReducer);
//   const router = useRouter();
//   const [buttonHover, setButtonHover] = useState(false);
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   const features = [
//     {
//       icon: <FiShare2 style={{ fontSize: '2rem', color: '#4a90e2' }} />,
//       title: "Easy Sharing",
//       description: "Share files instantly with anyone, anywhere in the world"
//     },
//     {
//       icon: <FiLock style={{ fontSize: '2rem', color: '#4a90e2' }} />,
//       title: "Secure Storage",
//       description: "Your files are encrypted and stored securely"
//     },
//     {
//       icon: <FiClock style={{ fontSize: '2rem', color: '#4a90e2' }} />,
//       title: "Quick Access",
//       description: "Access your files anytime with fast download speeds"
//     },
//     {
//       icon: <FiCloud style={{ fontSize: '2rem', color: '#4a90e2' }} />,
//       title: "Cloud Storage",
//       description: "Store your files in the cloud with reliable backup"
//     }
//   ];

//   return (
//     <div style={styles.container}>
//       {!auth.isAuth ? (
//         <>
//           <div style={styles.hero}>
//             <h1 style={styles.title}>
//               Welcome to <span style={styles.highlight}>DATA</span>
//             </h1>
//             <p style={styles.subtitle}>
//               The secure and simple way to share your files with anyone. Fast, reliable, and always available.
//             </p>
//             <div style={styles.buttonContainer}>
//               <button
//                 style={{ ...styles.baseButton, ...styles.mainButton }}
//                 onClick={() => router.push("/login")}
//                 onMouseOver={(e) => {
//                   e.currentTarget.style.transform = "translateY(-2px)";
//                   e.currentTarget.style.boxShadow = "0 5px 15px rgba(74, 144, 226, 0.3)";
//                 }}
//                 onMouseOut={(e) => {
//                   e.currentTarget.style.transform = "translateY(0)";
//                   e.currentTarget.style.boxShadow = "none";
//                 }}
//               >
//                 Get Started
//               </button>
//               <button
//                 style={{ ...styles.baseButton, ...styles.secondaryButton }}
//                 onClick={() => router.push("/signup")}
//                 onMouseOver={(e) => {
//                   e.currentTarget.style.transform = "translateY(-2px)";
//                   e.currentTarget.style.boxShadow = "0 5px 15px rgba(52, 211, 153, 0.3)";
//                 }}
//                 onMouseOut={(e) => {
//                   e.currentTarget.style.transform = "translateY(0)";
//                   e.currentTarget.style.boxShadow = "none";
//                 }}
//               >
//                 Sign Up Free
//               </button>
//             </div>
//           </div>

//           <div style={styles.features}>
//             {features.map((feature, index) => (
//               <div key={index} style={styles.featureCard}>
//                 {feature.icon}
//                 <h3 style={styles.featureTitle}>{feature.title}</h3>
//                 <p style={styles.featureDescription}>{feature.description}</p>
//               </div>
//             ))}
//           </div>

          
//         </>
//       ) : (
//         <div style={styles.container}>
//           <div style={{
//             ...styles.welcomeSection,
//             ...(window.innerWidth <= 768 ? styles.welcomeSectionMobile : {}),
//             ...(window.innerWidth <= 480 ? styles.welcomeSectionSmall : {}),
//             transform: mounted ? "translateY(0)" : "translateY(20px)",
//             opacity: mounted ? 1 : 0,
//           }}>
//             <h1 style={{
//               ...styles.welcomeTitle,
//               ...(window.innerWidth <= 768 ? styles.welcomeTitleMobile : {}),
//               ...(window.innerWidth <= 480 ? styles.welcomeTitleSmall : {}),
//               transform: mounted ? "translateY(0)" : "translateY(20px)",
//               opacity: mounted ? 1 : 0,
//             }}>
//               Welcome back, <span style={{
//                 ...styles.userName,
//                 borderBottom: buttonHover ? "2px solid #3498db" : "none",
//                 transition: "border-bottom 0.3s ease",
//               }}>{auth.user?.name}</span>
//             </h1>
//             <p style={{
//               ...styles.description,
//               ...(window.innerWidth <= 768 ? styles.descriptionMobile : {}),
//               ...(window.innerWidth <= 480 ? styles.descriptionSmall : {}),
//               transform: mounted ? "translateY(0)" : "translateY(20px)",
//               opacity: mounted ? 1 : 0,
//             }}>
//               Your secure file management hub awaits. Access and share your content with confidence.
//             </p>
//             <button
//               style={{
//                 ...styles.baseButton,
//                 ...styles.mainButton,
//                 ...(window.innerWidth <= 480 ? styles.buttonSmall : {}),
//                 ...(buttonHover ? styles.buttonHover : styles.buttonNormal),
//                 transform: mounted ? (buttonHover ? "translateY(-2px)" : "translateY(0)") : "translateY(20px)",
//                 opacity: mounted ? 1 : 0,
//               }}
//               onClick={() => router.push("/myfiles")}
//               onMouseEnter={() => setButtonHover(true)}
//               onMouseLeave={() => setButtonHover(false)}
//             >
//               Go to My Files
//               <svg 
//                 xmlns="http://www.w3.org/2000/svg" 
//                 fill="none" 
//                 viewBox="0 0 24 24" 
//                 strokeWidth={2} 
//                 stroke="currentColor"
//                 style={{
//                   ...styles.buttonIcon,
//                   transform: buttonHover ? "translateX(4px)" : "translateX(0)",
//                 }}
//               >
//                 <path 
//                   strokeLinecap="round" 
//                   strokeLinejoin="round" 
//                   d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" 
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
"use client";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { useRouter } from "next/navigation";
import {  FiUploadCloud, FiDownloadCloud, FiUsers, FiShield } from 'react-icons/fi';

const styles = {
  container: {
    minHeight: "100vh",
    padding: "2rem",
    background: "#ffffff",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
  },
  baseButton: {
    padding: "1rem 2rem",
    fontSize: "1.125rem",
    fontWeight: "600",
    color: "white",
    border: "none",
    borderRadius: "1rem",
    cursor: "pointer",
    transition: "all 0.3s ease",
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
  },
  mainButton: {
    background: "linear-gradient(45deg, #2c3e50, #3498db)",
    boxShadow: "0 4px 15px rgba(44, 62, 80, 0.2)",
  },
  secondaryButton: {
    background: "#34d399",
    boxShadow: "0 4px 15px rgba(52, 211, 153, 0.2)",
  },
  welcomeSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem",
    maxWidth: "600px",
    margin: "0 auto",
  },
  welcomeSectionMobile: {
    padding: "1rem",
  },
  welcomeSectionSmall: {
    padding: "0.5rem",
  },
  welcomeTitle: {
    fontSize: "2.5rem",
    fontWeight: "700",
    color: "#2c3e50",
    marginBottom: "1.25rem",
    lineHeight: "1.2",
    textAlign: "center",
  },
  welcomeTitleMobile: {
    fontSize: "2rem",
  },
  welcomeTitleSmall: {
    fontSize: "1.75rem",
  },
  userName: {
    fontSize: "1.5rem",
    fontWeight: "600",
    color: "#3498db",
  },
  description: {
    fontSize: "1.125rem",
    color: "#4a5568",
    marginBottom: "2rem",
    lineHeight: "1.5",
    textAlign: "center",
  },
  descriptionMobile: {
    fontSize: "1rem",
  },
  descriptionSmall: {
    fontSize: "0.875rem",
  },
  buttonHover: {
    transform: "translateY(-2px)",
    boxShadow: "0 5px 15px rgba(74, 144, 226, 0.3)",
  },
  buttonNormal: {
    transform: "translateY(0)",
    boxShadow: "0 4px 15px rgba(44, 62, 80, 0.2)",
  },
  buttonSmall: {
    padding: "0.75rem 1.5rem",
    fontSize: "0.875rem",
  },
  buttonIcon: {
    fontSize: "1.25rem",
    marginLeft: "0.5rem",
    transition: "transform 0.3s ease",
  },
} as const;

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const auth = useAppSelector((state) => state.authReducer);
  const router = useRouter();
  const [buttonHover, setButtonHover] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const features = [
    { 
      icon: <FiUploadCloud />, 
      title: "Quick Upload", 
      description: "Upload files instantly with our optimized system",
      position: { top: "0", left: "50%", transform: "translate(-50%, 0)" }
    },
    { 
      icon: <FiDownloadCloud />, 
      title: "Fast Download", 
      description: "Download your files securely at high speeds",
      position: { top: "50%", right: "0", transform: "translate(0, -50%)" }
    },
    { 
      icon: <FiUsers />, 
      title: "Easy Sharing", 
      description: "Share files with anyone, anywhere, anytime",
      position: { bottom: "0", left: "50%", transform: "translate(-50%, 0)" }
    },
    { 
      icon: <FiShield />, 
      title: "Secure Storage", 
      description: "Your files are encrypted and stored safely",
      position: { top: "50%", left: "0", transform: "translate(0, -50%)" }
    }
  ];

  return (
    <div style={styles.container}>
      {!auth.isAuth ? (
        <div style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          width: "100%",
        }}>
          <div style={{
            display: "flex",
            flexDirection: windowWidth <= 768 ? "column" : "row",
            alignItems: "center",
            justifyContent: "space-between",
            gap: windowWidth <= 768 ? "4rem" : "16rem",
            padding: windowWidth <= 768 ? "2rem 1rem" : "4rem 2rem",
            maxWidth: "1400px",
            margin: "0 auto",
          }}>
            {/* Left Content */}
            <div style={{
              flex: "1",
              maxWidth: windowWidth <= 768 ? "100%" : "450px",
              textAlign: windowWidth <= 768 ? "center" : "left",
              paddingRight: windowWidth <= 768 ? "0" : "4rem",
              borderRight: windowWidth <= 768 ? "none" : "1px solid rgba(52, 152, 219, 0.1)",
              display: "flex",
              flexDirection: "column",
              alignItems: windowWidth <= 768 ? "center" : "flex-start",
              justifyContent: "center",
            }}>
              <div style={{
                width: "100%",
                marginBottom: "1.5rem",
              }}>
                <h1 style={{
                  fontSize: windowWidth <= 480 ? "1.75rem" : windowWidth <= 768 ? "2.25rem" : "2.75rem",
                  fontWeight: "700",
                  color: "#2c3e50",
                  marginTop: "0",
                  marginBottom: "1.25rem",
                  lineHeight: "1.2",
                  textAlign: windowWidth <= 768 ? "center" : "left",
                }}>
                  Simplify Your <span style={{ color: "#3498db" }}>File Sharing</span> and Security
                </h1>
                <p style={{
                  fontSize: windowWidth <= 480 ? "1rem" : windowWidth <= 768 ? "1.125rem" : "1.25rem",
                  color: "#4a5568",
                  marginBottom: "2rem",
                  lineHeight: "1.5",
                  textAlign: windowWidth <= 768 ? "center" : "left",
                }}>
                  Manage, share, and protect your files effortlessly with a robust, all-in-one platform designed for seamless collaboration and enterprise-level security.
                </p>
              </div>
              <div style={{
                display: "flex",
                flexDirection: windowWidth <= 480 ? "column" : "row",
                gap: "1rem",
                justifyContent: windowWidth <= 768 ? "center" : "flex-start",
                alignItems: "center",
                width: "100%",
              }}>
                <button
                  style={{
                    ...styles.baseButton,
                    ...styles.mainButton,
                    fontSize: windowWidth <= 480 ? "0.875rem" : "1rem",
                    padding: windowWidth <= 480 ? "0.75rem 1.5rem" : "0.875rem 2rem",
                    width: windowWidth <= 480 ? "100%" : "auto",
                    minWidth: windowWidth <= 480 ? "100%" : "150px",
                    transform: buttonHover ? "translateY(-2px)" : "translateY(0)",
                    boxShadow: buttonHover ? "0 5px 15px rgba(74, 144, 226, 0.3)" : "0 4px 15px rgba(44, 62, 80, 0.2)",
                  }}
                  onClick={() => router.push("/login")}
                  onMouseEnter={() => setButtonHover(true)}
                  onMouseLeave={() => setButtonHover(false)}
                >
                  Get Started
                </button>
                <button
                  style={{
                    ...styles.baseButton,
                    ...styles.secondaryButton,
                    fontSize: windowWidth <= 480 ? "0.875rem" : "1rem",
                    padding: windowWidth <= 480 ? "0.75rem 1.5rem" : "0.875rem 2rem",
                    width: windowWidth <= 480 ? "100%" : "auto",
                    minWidth: windowWidth <= 480 ? "100%" : "150px",
                  }}
                  onClick={() => router.push("/signup")}
                >
                  Sign Up Free
                </button>
              </div>
            </div>

            {/* Right Content */}
            <div style={{
              flex: "1.5",
              maxWidth: windowWidth <= 768 ? "100%" : "800px",
              position: "relative",
              height: windowWidth <= 768 ? "auto" : "800px",
              marginLeft: windowWidth <= 768 ? "0" : "8rem",
              paddingLeft: windowWidth <= 768 ? "0" : "4rem",
              borderLeft: windowWidth <= 768 ? "none" : "1px solid rgba(52, 152, 219, 0.2)",
            }}>
              <div style={{
                position: windowWidth <= 768 ? "static" : "relative",
                width: "100%",
                height: "100%",
                display: windowWidth <= 768 ? "grid" : "block",
                gridTemplateColumns: windowWidth <= 480 ? "1fr" : "repeat(2, 1fr)",
                gap: "2rem",
                padding: windowWidth <= 768 ? "2rem 0" : "0",
              }}>
                {features.map((feature, index) => (
                  <div 
                    key={index} 
                    style={{
                      position: windowWidth <= 768 ? "relative" : "absolute",
                      width: windowWidth <= 768 ? "auto" : "250px",
                      height: windowWidth <= 768 ? "auto" : "250px",
                      aspectRatio: "1",
                      padding: windowWidth <= 768 ? "1.5rem" : "2rem",
                      background: "white",
                      borderRadius: "50%",
                      boxShadow: hoveredFeature === index 
                        ? "0 12px 24px rgba(0, 0, 0, 0.15)"
                        : "0 8px 16px rgba(0, 0, 0, 0.1)",
                      textAlign: "center",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      zIndex: 2,
                      margin: windowWidth <= 768 ? "0 auto" : "0",
                      maxWidth: windowWidth <= 768 ? "200px" : "250px",
                      transform: hoveredFeature === index 
                        ? `${windowWidth <= 768 ? "scale(1.05)" : feature.position.transform} scale(1.05)`
                        : windowWidth <= 768 ? "none" : feature.position.transform,
                      transition: "all 0.3s ease",
                      ...(windowWidth > 768 ? {
                        top: feature.position.top,
                        left: feature.position.left,
                        right: feature.position.right,
                        bottom: feature.position.bottom,
                      } : {}),
                    }}
                    onMouseEnter={() => setHoveredFeature(index)}
                    onMouseLeave={() => setHoveredFeature(null)}
                  >
                    <div style={{
                      fontSize: windowWidth <= 768 ? "2rem" : "2.5rem",
                      color: "#3498db",
                      marginBottom: windowWidth <= 768 ? "0.75rem" : "1rem",
                      background: "rgba(52, 152, 219, 0.1)",
                      borderRadius: "50%",
                      width: windowWidth <= 768 ? "4rem" : "5rem",
                      height: windowWidth <= 768 ? "4rem" : "5rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "transform 0.3s ease",
                    }}>
                      {feature.icon}
                    </div>
                    <h3 style={{
                      fontSize: windowWidth <= 768 ? "1.125rem" : "1.25rem",
                      fontWeight: "600",
                      color: "#2c3e50",
                      marginBottom: windowWidth <= 768 ? "0.5rem" : "0.75rem",
                    }}>
                      {feature.title}
                    </h3>
                    <p style={{
                      fontSize: windowWidth <= 768 ? "0.875rem" : "1rem",
                      color: "#4a5568",
                      lineHeight: "1.4",
                      maxWidth: "85%",
                      margin: "0 auto",
                    }}>
                      {feature.description}
                    </p>
                  </div>
                ))}
                {windowWidth > 768 && (
                  <>
                    <div style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: "600px",
                      height: "600px",
                      border: "2px dashed #3498db",
                      borderRadius: "50%",
                      opacity: 0.3,
                      pointerEvents: "none",
                      zIndex: 1,
                    }} />
                    <div style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: "400px",
                      height: "400px",
                      border: "2px dashed #3498db",
                      borderRadius: "50%",
                      opacity: 0.2,
                      pointerEvents: "none",
                      zIndex: 1,
                    }} />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div style={styles.container}>
          <div style={{
            ...styles.welcomeSection,
            ...(windowWidth <= 768 ? styles.welcomeSectionMobile : {}),
            ...(windowWidth <= 480 ? styles.welcomeSectionSmall : {}),
            transform: mounted ? "translateY(0)" : "translateY(20px)",
            opacity: mounted ? 1 : 0,
          }}>
            <h1 style={{
              ...styles.welcomeTitle,
              ...(windowWidth <= 768 ? styles.welcomeTitleMobile : {}),
              ...(windowWidth <= 480 ? styles.welcomeTitleSmall : {}),
              transform: mounted ? "translateY(0)" : "translateY(20px)",
              opacity: mounted ? 1 : 0,
            }}>
              Welcome back, <span style={{
                ...styles.userName,
                borderBottom: buttonHover ? "2px solid #3498db" : "none",
                transition: "border-bottom 0.3s ease",
              }}>{auth.user?.name}</span>
            </h1>
            <p style={{
              ...styles.description,
              ...(windowWidth <= 768 ? styles.descriptionMobile : {}),
              ...(windowWidth <= 480 ? styles.descriptionSmall : {}),
              transform: mounted ? "translateY(0)" : "translateY(20px)",
              opacity: mounted ? 1 : 0,
            }}>
              Your secure file management hub awaits. Access and share your content with confidence.
            </p>
            <button
              style={{
                ...styles.baseButton,
                ...styles.mainButton,
                ...(windowWidth <= 480 ? styles.buttonSmall : {}),
                ...(buttonHover ? styles.buttonHover : styles.buttonNormal),
                transform: mounted ? (buttonHover ? "translateY(-2px)" : "translateY(0)") : "translateY(20px)",
                opacity: mounted ? 1 : 0,
              }}
              onClick={() => router.push("/myfiles")}
              onMouseEnter={() => setButtonHover(true)}
              onMouseLeave={() => setButtonHover(false)}
            >
              Go to My Files
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={2} 
                stroke="currentColor"
                style={{
                  ...styles.buttonIcon,
                  transform: buttonHover ? "translateX(4px)" : "translateX(0)",
                }}
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" 
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

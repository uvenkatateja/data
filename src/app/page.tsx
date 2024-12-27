"use client";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { useRouter } from "next/navigation";
import { FiShare2, FiLock, FiClock, FiCloud } from 'react-icons/fi';

const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #f5f7fa 0%)",
    fontFamily: "'Inter', sans-serif",
  },
  hero: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
    padding: "4rem 2rem",
    textAlign: "center" as const,
  },
  title: {
    fontSize: "3.5rem",
    color: "#1a365d",
    marginBottom: "1rem",
    fontWeight: "800",
  },
  subtitle: {
    fontSize: "1.5rem",
    color: "#4a5568",
    maxWidth: "700px",
    marginBottom: "2rem",
  },
  highlight: {
    color: "#4a90e2",
    fontWeight: "800",
  },
  buttonContainer: {
    display: "flex",
    gap: "1rem",
    justifyContent: "center",
    marginTop: "1rem",
  },
  button: {
    padding: "0.75rem 1.5rem",
    fontSize: "1rem",
    fontWeight: "600",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    transition: "all 0.2s ease",
    color: "white",
  },
  primaryButton: {
    background: "#4a90e2",
    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow: "0 5px 15px rgba(74, 144, 226, 0.3)",
    },
  },
  secondaryButton: {
    background: "#34d399",
  },
  features: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "2rem",
    padding: "4rem 2rem",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  featureCard: {
    background: "white",
    padding: "2rem",
    borderRadius: "15px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "center" as const,
    transition: "transform 0.2s ease",
    "&:hover": {
      transform: "translateY(-5px)",
    },
  },
  icon: {
    fontSize: "2rem",
    color: "#4a90e2",
    marginBottom: "1rem",
  },
  stats: {
    display: "flex",
    justifyContent: "space-around",
    padding: "3rem 2rem",
    background: "rgba(255, 255, 255, 0.9)",
    marginTop: "2rem",
  },
  statItem: {
    textAlign: "center" as const,
  },
  statNumber: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#4a90e2",
  },
  statLabel: {
    color: "#4a5568",
    marginTop: "0.5rem",
  },
  welcomeSection: {
    padding: "2rem",
    textAlign: "center" as const,
    background: "white",
    borderRadius: "15px",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
    maxWidth: "600px",
    margin: "2rem auto",
  },
};

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const auth = useAppSelector((state) => state.authReducer);
  const router = useRouter();

  const features = [
    {
      icon: <FiShare2 style={{ fontSize: '2rem', color: '#4a90e2' }} />,
      title: "Easy Sharing",
      description: "Share files instantly with anyone, anywhere in the world"
    },
    {
      icon: <FiLock style={{ fontSize: '2rem', color: '#4a90e2' }} />,
      title: "Secure Storage",
      description: "Your files are encrypted and stored securely"
    },
    {
      icon: <FiClock style={{ fontSize: '2rem', color: '#4a90e2' }} />,
      title: "Quick Access",
      description: "Access your files anytime with fast download speeds"
    },
    {
      icon: <FiCloud style={{ fontSize: '2rem', color: '#4a90e2' }} />,
      title: "Cloud Storage",
      description: "Store your files in the cloud with reliable backup"
    }
  ];

  return (
    <div style={styles.container}>
      {!auth.isAuth ? (
        <>
          <div style={styles.hero}>
            <h1 style={styles.title}>
              Welcome to <span style={styles.highlight}>DATA</span>
            </h1>
            <p style={styles.subtitle}>
              The secure and simple way to share your files with anyone. Fast, reliable, and always available.
            </p>
            <div style={styles.buttonContainer}>
              <button
                style={{ ...styles.button, ...styles.primaryButton }}
                onClick={() => router.push("/login")}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 5px 15px rgba(74, 144, 226, 0.3)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                Get Started
              </button>
              <button
                style={{ ...styles.button, ...styles.secondaryButton }}
                onClick={() => router.push("/signup")}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 5px 15px rgba(52, 211, 153, 0.3)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                Sign Up Free
              </button>
            </div>
          </div>

          <div style={styles.features}>
            {features.map((feature, index) => (
              <div key={index} style={styles.featureCard}>
                {feature.icon}
                <h3 style={{ color: '#2d3748', marginBottom: '0.5rem' }}>{feature.title}</h3>
                <p style={{ color: '#4a5568' }}>{feature.description}</p>
              </div>
            ))}
          </div>

          
        </>
      ) : (
        <div style={styles.welcomeSection}>
          <h1 style={{ ...styles.title, fontSize: '2.5rem' }}>Welcome, {auth.user?.name}!</h1>
          <p style={{ color: '#4a5568', marginBottom: '1.5rem' }}>
            Ready to manage your files? Access all your shared content in one place.
          </p>
          <button
            style={{ ...styles.button, ...styles.primaryButton }}
            onClick={() => router.push("/myfiles")}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 5px 15px rgba(74, 144, 226, 0.3)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Go to My Files
          </button>
        </div>
      )}
    </div>
  );
}
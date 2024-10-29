
// "use client";
// import styles from "./page.module.css";
// import { useDispatch } from "react-redux";
// import { AppDispatch, useAppSelector } from "@/redux/store";
// import { useRouter } from "next/navigation";

// export default function Home() {
//   const dispatch = useDispatch<AppDispatch>();
//   const auth = useAppSelector((state) => state.authReducer);
//   const router = useRouter();

//   return (
//     <div className={styles.home}>
//       {!auth.isAuth ? (
//         <div className={styles.center}>
//           <h1>
//             Welcome to the <strong>DATA</strong>
//           </h1>
//           <br />
//           <div>
//             <button
//               onClick={() => {
//                 router.push("/login");
//               }}
//             >
//               Login
//             </button>
//             &nbsp;
//             <button
//               onClick={() => {
//                 router.push("/signup");
//               }}
//             >
//               Sign Up
//             </button>
//           </div>
//         </div>
//       ) : (
//         <div className={styles.center}>
//           <h1>Welcome {auth.user?.name}</h1>
//           <button
//             onClick={() => {
//               router.push("/myfiles");
//             }}
//           >
//             My Files
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }
'use client'

import { useDispatch } from "react-redux"
import { AppDispatch, useAppSelector } from "@/redux/store"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { Share2, Shield, Zap } from 'lucide-react'

export default function Page() {
  const [mounted, setMounted] = useState(false)
  const router = useRouter()
  const dispatch = useDispatch<AppDispatch>()
  const auth = useAppSelector((state) => state.authReducer)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1a1c2e 0%, #2d1b42 100%)',
      color: '#ffffff',
      fontFamily: 'Inter, system-ui, sans-serif',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background Animation */}
      <div style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle at 50% 50%, rgba(76, 0, 255, 0.1) 0%, transparent 50%)',
        animation: 'pulse 8s ease-in-out infinite',
        zIndex: 1,
      }} />

      {/* Main Content */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '40px 20px',
        position: 'relative',
        zIndex: 2,
      }}>
        {!auth.isAuth ? (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '90vh',
            animation: 'fadeIn 1s ease-out',
          }}>
            {/* Hero Section */}
            <div style={{
              textAlign: 'center',
              marginBottom: '60px',
            }}>
              <h1 style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: '800',
                marginBottom: '1.5rem',
                background: 'linear-gradient(to right, #fff, #a78bfa)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 0 40px rgba(167, 139, 250, 0.3)',
              }}>
                Welcome to <strong>DATA</strong>
              </h1>
              <p style={{
                fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
                maxWidth: '700px',
                margin: '0 auto 3rem',
                lineHeight: '1.6',
                color: '#cbd5e1',
              }}>
                Experience secure file sharing with blazing-fast speeds and real-time updates.
              </p>

              {/* CTA Buttons */}
              <div style={{
                display: 'flex',
                gap: '20px',
                justifyContent: 'center',
                marginBottom: '60px',
              }}>
                <button
                  onClick={() => router.push("/login")}
                  style={{
                    padding: '15px 35px',
                    fontSize: '1.1rem',
                    background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 20px rgba(99, 102, 241, 0.3)',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)'
                    e.currentTarget.style.boxShadow = '0 6px 25px rgba(99, 102, 241, 0.4)'
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(99, 102, 241, 0.3)'
                  }}
                >
                  Get Started
                </button>
                <button
                  onClick={() => router.push("/signup")}
                  style={{
                    padding: '15px 35px',
                    fontSize: '1.1rem',
                    background: 'transparent',
                    color: 'white',
                    border: '2px solid rgba(99, 102, 241, 0.5)',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = 'rgba(99, 102, 241, 0.1)'
                    e.currentTarget.style.borderColor = '#6366f1'
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = 'transparent'
                    e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.5)'
                  }}
                >
                  Sign Up
                </button>
              </div>

              {/* Features Section */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '30px',
                padding: '20px',
              }}>
                <div style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  padding: '30px',
                  borderRadius: '20px',
                  backdropFilter: 'blur(10px)',
                  transition: 'transform 0.3s ease',
                }}>
                  <Share2 style={{ width: 40, height: 40, marginBottom: '20px', color: '#6366f1' }} />
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#fff' }}>Easy Sharing</h3>
                  <p style={{ color: '#cbd5e1', lineHeight: '1.6' }}>Share files securely with anyone using just their email address.</p>
                </div>
                {/* <div style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  padding: '30px',
                  borderRadius: '20px',
                  backdropFilter: 'blur(10px)',
                  transition: 'transform 0.3s ease',
                }}>
                  <Shield style={{ width: 40, height: 40, marginBottom: '20px', color: '#6366f1' }} />
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#fff' }}>Bank-Level Security</h3>
                  <p style={{ color: '#cbd5e1', lineHeight: '1.6' }}>Your files are protected with enterprise-grade encryption.</p>
                </div> */}
                <div style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  padding: '30px',
                  borderRadius: '20px',
                  backdropFilter: 'blur(10px)',
                  transition: 'transform 0.3s ease',
                }}>
                  <Zap style={{ width: 40, height: 40, marginBottom: '20px', color: '#6366f1' }} />
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#fff' }}>Lightning Fast</h3>
                  <p style={{ color: '#cbd5e1', lineHeight: '1.6' }}>S3 for blazing-fast transfer speeds.</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '90vh',
            animation: 'fadeIn 1s ease-out',
          }}>
            <h1 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: '700',
              marginBottom: '2rem',
              background: 'linear-gradient(to right, #fff, #a78bfa)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Welcome back, {auth.user?.name}!
            </h1>
            <button
              onClick={() => router.push("/myfiles")}
              style={{
                padding: '15px 40px',
                fontSize: '1.2rem',
                background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '12px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 20px rgba(99, 102, 241, 0.3)',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 6px 25px rgba(99, 102, 241, 0.4)'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(99, 102, 241, 0.3)'
              }}
            >
              View My Files
            </button>
          </div>
        )}
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.2); opacity: 0.5; }
          100% { transform: scale(1); opacity: 0.3; }
        }
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

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

import { useDispatch } from 'react-redux'
import { AppDispatch, useAppSelector } from '@/redux/store'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Upload, Download, Share2, Database, LogOut } from 'lucide-react'

export default function Page() {
  const dispatch = useDispatch<AppDispatch>()
  const auth = useAppSelector((state) => state.authReducer)
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleLogin = () => router.push('/login')
  const handleSignup = () => router.push('/signup')
  const handleMyFiles = () => router.push('/myfiles')
  const handleLogout = () => {
    // Implement logout logic here
    // For example: dispatch(logoutAction())
    router.push('/')
  }

  return (
    <div className="page">
      
      <main className="main">
        {!auth.isAuth ? (
          <>
            <section className="hero">
              <h1>Welcome to <strong>Data</strong></h1>
              <p>Secure file sharing with Amazon S3 technology</p>
              <button className="cta-button" onClick={handleSignup}>Get Started</button>
            </section>
            <section className="features">
              <div className="feature">
                <Upload size={48} />
                <h2>Easy Upload</h2>
                <p>Drag and drop files to upload instantly</p>
              </div>
              <div className="feature">
                <Download size={48} />
                <h2>Fast Download</h2>
                <p>Download files at lightning speed</p>
              </div>
              <div className="feature">
                <Share2 size={48} />
                <h2>Secure Sharing</h2>
                <p>Share files with customizable permissions</p>
              </div>
            </section>
          </>
        ) : (
          <section className="welcome">
            <h1>Welcome, {auth.user?.name}</h1>
            <p>Manage and share your files securely with DataLike Best</p>
            <button className="cta-button" onClick={handleMyFiles}>Go to My Files</button>
          </section>
        )}
      </main>
      <footer className="footer">
        <p>&copy; 2024 DataLike Best. All rights reserved.</p>
      </footer>
      <style jsx>{`
        .page {
          font-family: 'Arial', sans-serif;
          color: #333;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
          background-color: #f0f4f8;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .logo {
          display: flex;
          align-items: center;
          font-size: 1.5rem;
          font-weight: bold;
          color: #2c5282;
        }
        .logo-icon {
          margin-right: 0.5rem;
        }
        .nav {
          display: flex;
          gap: 1rem;
        }
        .nav-button {
          padding: 0.5rem 1rem;
          border: none;
          border-radius: 4px;
          background-color: #4299e1;
          color: white;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        .nav-button:hover {
          background-color: #3182ce;
        }
        .menu-toggle {
          display: none;
        }
        .main {
          flex-grow: 1;
          padding: 2rem;
        }
        .hero, .welcome {
          text-align: center;
          margin-bottom: 3rem;
        }
        .hero h1, .welcome h1 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          color: #2c5282;
        }
        .hero p, .welcome p {
          font-size: 1.2rem;
          margin-bottom: 2rem;
          color: #4a5568;
        }
        .cta-button {
          padding: 0.75rem 1.5rem;
          font-size: 1.1rem;
          background-color: #4299e1;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        .cta-button:hover {
          background-color: #3182ce;
        }
        .features {
          display: flex;
          justify-content: space-around;
          gap: 2rem;
          margin-top: 3rem;
        }
        .feature {
          text-align: center;
          max-width: 300px;
        }
        .feature h2 {
          margin: 1rem 0;
          color: #2c5282;
        }
        .feature p {
          color: #4a5568;
        }
        .footer {
          background-color: #f0f4f8;
          text-align: center;
          padding: 1rem;
          margin-top: auto;
        }
        @media (max-width: 768px) {
          .nav {
            display: none;
          }
          .nav.open {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background-color: #f0f4f8;
            padding: 1rem;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          }
          .menu-toggle {
            display: block;
            font-size: 1.5rem;
            background: none;
            border: none;
            cursor: pointer;
          }
          .features {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </div>
  )
}
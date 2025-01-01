// "use client";
// import React, { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { usePathname } from "next/navigation";
// import { useDispatch } from "react-redux";
// import { AppDispatch, useAppSelector } from "@/redux/store";
// import { logIn, logOut } from "@/redux/features/auth-slice";
// import { Menu, Button, Layout, Drawer } from "antd";
// import {
//   HomeOutlined,
//   FileOutlined,
//   ShareAltOutlined,
//   LoginOutlined,
//   UserAddOutlined,
//   LogoutOutlined,
//   MenuFoldOutlined,
//   MenuUnfoldOutlined,
// } from "@ant-design/icons";
// import Image from "next/image";

// const { Header } = Layout;

// const Navbar = () => {
//   const dispatch = useDispatch<AppDispatch>();
//   const auth = useAppSelector((state) => state.authReducer);
//   const router = useRouter();
//   const pathname = usePathname();
//   const [isDrawerVisible, setIsDrawerVisible] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);

//   const checkLogin = async () => {
//     let res = await fetch(
//       process.env.NEXT_PUBLIC_API_URL + "/auth/checklogin",
//       {
//         method: "GET",
//         credentials: "include",
//       }
//     );

//     let data = await res.json();
//     if (!data.ok) {
//       dispatch(logOut());
//     } else {
//       getUserData();
//     }
//   };

//   React.useEffect(() => {
//     checkLogin();
//   }, []);

//   const getUserData = async () => {
//     let res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/auth/getuser", {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       credentials: "include",
//     });

//     let data = await res.json();
//     if (data.ok) {
//       dispatch(logIn(data.data));
//       router.push("/myfiles");
//     } else {
//       dispatch(logOut());
//     }
//   };

//   const handleLogout = async () => {
//     let res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/auth/logout", {
//       method: "POST",
//       credentials: "include",
//     });
//     let data = await res.json();
//     if (data.ok) {
//       dispatch(logOut());
//       router.push("/login");
//     }
//   };

//   const handleResize = () => {
//     setIsMobile(window.innerWidth <= 768);
//   };

//   useEffect(() => {
//     checkLogin();
//     window.addEventListener("resize", handleResize);
//     handleResize();
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   const handleMenuClick = (key) => {
//     router.push(key);
//     if (isMobile) {
//       setIsDrawerVisible(false);
//     }
//   };

//   const menuItems = auth.isAuth
//     ? [
//         {
//           label: "Home",
//           key: "/",
//           icon: <HomeOutlined />,
//           onClick: () => handleMenuClick("/"),
//         },
//         {
//           label: "My Files",
//           key: "/myfiles",
//           icon: <FileOutlined />,
//           onClick: () => handleMenuClick("/myfiles"),
//         },
//         {
//           label: "Share",
//           key: "/share",
//           icon: <ShareAltOutlined />,
//           onClick: () => handleMenuClick("/share"),
//         },
//         {
//           label: "Logout",
//           key: "logout",
//           icon: <LogoutOutlined />,
//           onClick: handleLogout,
//         },
//       ]
//     : [
//         {
//           label: "Home",
//           key: "/",
//           icon: <HomeOutlined />,
//           onClick: () => handleMenuClick("/"),
//         },
//         {
//           label: "Login",
//           key: "/login",
//           icon: <LoginOutlined />,
//           onClick: () => handleMenuClick("/login"),
//         },
//         {
//           label: "Signup",
//           key: "/signup",
//           icon: <UserAddOutlined />,
//           onClick: () => handleMenuClick("/signup"),
//         },
//       ];

//   return (
//     <Header
//       style={{
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center",
//         padding: "20px 30px",
//         backgroundColor: "white",
//       }}
//     >
//       <Image
//         src="/DATAA.png"
//         alt="Logo"
//         width={300}
//         height={100}
//         priority
//         onClick={() => {
//           router.push("/");
//         }}
//         style={{ cursor: "pointer" }}
//       />

//       {isMobile ? (
//         <>
//           <Button
//             type="primary"
//             icon={
//               isDrawerVisible ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
//             }
//             onClick={() => setIsDrawerVisible(!isDrawerVisible)}
//             style={{ marginTop: "10px" }} // Adjust top margin for the button
//           />

//           <Drawer
//             title="Menu"
//             placement="right"
//             onClose={() => setIsDrawerVisible(false)}
//             open={isDrawerVisible}
//           >
//             <Menu items={menuItems} />
//           </Drawer>
//         </>
//       ) : (
//         <Menu
//           theme="white"
//           mode="horizontal"
//           selectedKeys={[pathname]}
//           items={menuItems}
//           style={{ display: "flex", gap: "30px" }}
//         />
//       )}
//     </Header>
//   );
// };

// export default Navbar;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// "use client";
// import React, { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { usePathname } from "next/navigation";
// import { useDispatch } from "react-redux";
// import { AppDispatch, useAppSelector } from "@/redux/store";
// import { logIn, logOut } from "@/redux/features/auth-slice";
// import { Menu, Button, Layout, Drawer } from "antd";
// import {
//   HomeOutlined,
//   FileOutlined,
//   ShareAltOutlined,
//   LoginOutlined,
//   UserAddOutlined,
//   LogoutOutlined,
//   MenuFoldOutlined,
//   MenuUnfoldOutlined,
// } from "@ant-design/icons";
// import Image from "next/image";

// const { Header } = Layout;

// const Navbar = () => {
//   const dispatch = useDispatch<AppDispatch>();
//   const auth = useAppSelector((state) => state.authReducer);
//   const router = useRouter();
//   const pathname = usePathname();
//   const [isDrawerVisible, setIsDrawerVisible] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);

//   const checkLogin = async () => {
//     let res = await fetch(
//       process.env.NEXT_PUBLIC_API_URL + "/auth/checklogin",
//       {
//         method: "GET",
//         credentials: "include",
//       }
//     );

//     let data = await res.json();
//     if (!data.ok) {
//       dispatch(logOut());
//     } else {
//       getUserData();
//     }
//   };

//   React.useEffect(() => {
//     checkLogin();
//   }, []);

//   const getUserData = async () => {
//     let res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/auth/getuser", {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       credentials: "include",
//     });

//     let data = await res.json();
//     if (data.ok) {
//       dispatch(logIn(data.data));
//       router.push("/myfiles");
//     } else {
//       dispatch(logOut());
//     }
//   };

//   const handleLogout = async () => {
//     let res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/auth/logout", {
//       method: "POST",
//       credentials: "include",
//     });
//     let data = await res.json();
//     if (data.ok) {
//       dispatch(logOut());
//       router.push("/login");
//     }
//   };

//   const handleResize = () => {
//     setIsMobile(window.innerWidth <= 768);
//   };

//   useEffect(() => {
//     checkLogin();
//     window.addEventListener("resize", handleResize);
//     handleResize();
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   const handleMenuClick = (key: string) => {
//     router.push(key);
//     if (isMobile) {
//       setIsDrawerVisible(false);
//     }
//   };

//   const menuItems = auth.isAuth
//     ? [
//         {
//           label: "Home",
//           key: "/",
//           icon: <HomeOutlined />,
//           onClick: () => handleMenuClick("/"),
//         },
//         {
//           label: "My Files",
//           key: "/myfiles",
//           icon: <FileOutlined />,
//           onClick: () => handleMenuClick("/myfiles"),
//         },
//         {
//           label: "Share",
//           key: "/share",
//           icon: <ShareAltOutlined />,
//           onClick: () => handleMenuClick("/share"),
//         },
//         {
//           label: "Logout",
//           key: "logout",
//           icon: <LogoutOutlined />,
//           onClick: handleLogout,
//         },
//       ]
//     : [
//         {
//           label: "Home",
//           key: "/",
//           icon: <HomeOutlined />,
//           onClick: () => handleMenuClick("/"),
//         },
//         {
//           label: "Login",
//           key: "/login",
//           icon: <LoginOutlined />,
//           onClick: () => handleMenuClick("/login"),
//         },
//         {
//           label: "Signup",
//           key: "/signup",
//           icon: <UserAddOutlined />,
//           onClick: () => handleMenuClick("/signup"),
//         },
//       ];

//   return (
//     <Header
//       style={{
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center",
//         padding: "20px 30px",
//         backgroundColor: "white",
//       }}
//     >
//       <Image
//         src="/DATAA.png"
//         alt="Logo"
//         width={300}
//         height={100}
//         priority
//         onClick={() => {
//           router.push("/");
//         }}
//         style={{ cursor: "pointer" }}
//       />

//       {isMobile ? (
//         <>
//           <Button
//             type="primary"
//             icon={
//               isDrawerVisible ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
//             }
//             onClick={() => setIsDrawerVisible(!isDrawerVisible)}
//             style={{ marginTop: "10px" }} // Adjust top margin for the button
//           />

//           <Drawer
//             title="Menu"
//             placement="right"
//             onClose={() => setIsDrawerVisible(false)}
//             open={isDrawerVisible}
//           >
//             <Menu items={menuItems} />
//           </Drawer>
//         </>
//       ) : (
//         <Menu
//           theme="light"
//           mode="horizontal"
//           selectedKeys={[pathname]}
//           items={menuItems}
//           style={{ display: "flex", gap: "30px" }}
//         />
//       )}
//     </Header>
//   );
// };

// export default Navbar;
/////////////////////////////////////////////////////////////////////////////////////////////////

"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { logIn, logOut } from "@/redux/features/auth-slice";
import { Menu, Button, Layout, Drawer } from "antd";
import {
  HomeOutlined,
  FileOutlined,
  ShareAltOutlined,
  UserOutlined,
  UserAddOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  AppstoreOutlined,
  LoginOutlined,
} from "@ant-design/icons";
import Image from "next/image";

const { Header } = Layout;

const Navbar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const auth = useAppSelector((state) => state.authReducer);
  const router = useRouter();
  const pathname = usePathname();
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const checkLogin = async () => {
    let res = await fetch(
      process.env.NEXT_PUBLIC_API_URL + "/auth/checklogin",
      {
        method: "GET",
        credentials: "include",
      }
    );

    let data = await res.json();
    if (!data.ok) {
      dispatch(logOut());
    } else {
      getUserData();
    }
  };

  React.useEffect(() => {
    checkLogin();
  }, []);

  const getUserData = async () => {
    let res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/auth/getuser", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    let data = await res.json();
    if (data.ok) {
      dispatch(logIn(data.data));
      router.push("/myfiles");
    } else {
      dispatch(logOut());
    }
  };

  const handleLogout = async () => {
    let res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/auth/logout", {
      method: "POST",
      credentials: "include",
    });
    let data = await res.json();
    if (data.ok) {
      dispatch(logOut());
      router.push("/login");
    }
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    checkLogin();
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMenuClick = (key: string) => {
    router.push(key);
    if (isMobile) {
      setIsDrawerVisible(false);
    }
  };

  const menuItems = auth.isAuth
    ? [
        {
          label: "Home",
          key: "/",
          icon: <AppstoreOutlined />,
          onClick: () => handleMenuClick("/"),
        },
        {
          label: "My Files",
          key: "/myfiles",
          icon: <FileOutlined />,
          onClick: () => handleMenuClick("/myfiles"),
        },
        {
          label: "Share",
          key: "/share",
          icon: <ShareAltOutlined />,
          onClick: () => handleMenuClick("/share"),
        },
        {
          label: "Logout",
          key: "logout",
          icon: <LogoutOutlined />,
          onClick: handleLogout,
        },
      ]
    : [
        {
          label: "Home",
          key: "/",
          icon: <AppstoreOutlined />,
          onClick: () => handleMenuClick("/"),
        },
        {
          label: "Login",
          key: "/login",
          icon: <LoginOutlined />,
          onClick: () => handleMenuClick("/login"),
        },
        {
          label: "Signup",
          key: "/signup",
          icon: <UserAddOutlined />,
          onClick: () => handleMenuClick("/signup"),
        },
      ];

  return (
    <Header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: isMobile ? "10px 16px" : "15px 30px",
        backgroundColor: "white",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <div style={{
        position: "relative",
        width: isMobile ? "150px" : "500px",
        height: isMobile ? "50px" : "80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        cursor: "pointer",
        marginLeft: isMobile ? "10px" : "25px",
      }} onClick={() => router.push("/")}>
        <Image
          src="/DATAA.png"
          alt="Logo"
          fill
          style={{
            objectFit: "contain",
          }}
          priority
        />
      </div>

      {isMobile ? (
        <>
          <Button
            type="text"
            icon={
              isDrawerVisible ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
            }
            onClick={() => setIsDrawerVisible(!isDrawerVisible)}
            style={{
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "20px",
              border: "none",
              borderRadius: "8px",
              color: "#333",
              background: "transparent",
              transition: "all 0.3s ease",
              padding: 0,
            }}
            className="menu-toggle-btn"
          />

          <Drawer
            title={
              <div style={{
                fontSize: "18px",
                fontWeight: 500,
                color: "#333",
              }}>
                Menu
              </div>
            }
            placement="right"
            onClose={() => setIsDrawerVisible(false)}
            open={isDrawerVisible}
            styles={{
              body: {
                padding: 0,
              }
            }}
          >
            <Menu 
              items={menuItems}
              style={{
                border: "none",
              }}
              selectedKeys={[pathname]}
              className="mobile-menu"
            />
          </Drawer>
        </>
      ) : (
        <Menu
          theme="light"
          mode="horizontal"
          selectedKeys={[pathname]}
          items={menuItems}
          style={{
            display: "flex",
            gap: "20px",
            background: "transparent",
            border: "none",
            fontSize: "16px",
            fontWeight: 500,
          }}
          className="nav-menu"
        />
      )}
    </Header>
  );
};

const styles = `
  .menu-toggle-btn:hover {
    background: #f5f5f5 !important;
    color: #1890ff !important;
  }

  .menu-toggle-btn:active {
    background: #e6e6e6 !important;
  }

  .nav-menu .ant-menu-item {
    padding: 0 24px !important;
    margin: 0 !important;
    height: 44px !important;
    line-height: 44px !important;
    border-radius: 8px !important;
    transition: all 0.3s ease !important;
    color: #333 !important;
    font-weight: 500 !important;
  }

  .nav-menu .ant-menu-item:hover {
    color: #1890ff !important;
    background: #f5f5f5 !important;
  }

  .nav-menu .ant-menu-item-selected {
    color: #1890ff !important;
    background: #e6f4ff !important;
    font-weight: 600 !important;
  }

  .nav-menu .ant-menu-item::after {
    display: none !important;
  }

  .nav-menu .anticon {
    font-size: 20px !important;
    margin-right: 10px !important;
  }

  .mobile-menu .ant-menu-item {
    height: 50px !important;
    line-height: 50px !important;
    margin: 4px 8px !important;
    border-radius: 8px !important;
    font-weight: 500 !important;
  }

  .mobile-menu .anticon {
    font-size: 20px !important;
    margin-right: 12px !important;
  }

  @media (max-width: 768px) {
    .ant-drawer .ant-menu-item {
      height: 48px !important;
      line-height: 48px !important;
      margin: 4px 0 !important;
      border-radius: 6px !important;
    }
  }
`;

if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.type = 'text/css';
  styleSheet.innerHTML = styles;
  document.head.appendChild(styleSheet);
}

export default Navbar;


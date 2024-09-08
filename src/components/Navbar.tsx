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
  LoginOutlined,
  UserAddOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
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
          icon: <HomeOutlined />,
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
          icon: <HomeOutlined />,
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
        padding: "20px 30px",
        backgroundColor: "white",
      }}
    >
      <Image
        src="/DATAA.png"
        alt="Logo"
        width={300}
        height={100}
        priority
        onClick={() => {
          router.push("/");
        }}
        style={{ cursor: "pointer" }}
      />

      {isMobile ? (
        <>
          <Button
            type="primary"
            icon={
              isDrawerVisible ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
            }
            onClick={() => setIsDrawerVisible(!isDrawerVisible)}
            style={{ marginTop: "10px" }} // Adjust top margin for the button
          />

          <Drawer
            title="Menu"
            placement="right"
            onClose={() => setIsDrawerVisible(false)}
            open={isDrawerVisible}
          >
            <Menu items={menuItems} />
          </Drawer>
        </>
      ) : (
        <Menu
          theme="light"
          mode="horizontal"
          selectedKeys={[pathname]}
          items={menuItems}
          style={{ display: "flex", gap: "30px" }}
        />
      )}
    </Header>
  );
};

export default Navbar;

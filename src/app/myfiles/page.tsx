// "use client";
// import React, { useEffect, useMemo, useState } from "react";
// import styles from "@/styles/myfiles.module.css";

// import { AppDispatch, useAppSelector } from "@/redux/store";
// import { useRouter } from "next/navigation";
// import { useDispatch } from "react-redux";
// import { logIn, logOut } from "@/redux/features/auth-slice";
// import { toast } from "react-toastify";

// interface File {
//   createdAt: string;
//   filename: string;
//   fileurl: string;
//   fileType: string | null;
//   receiveremail: string;
//   senderemail: string;
//   sharedAt: string;
//   updatedAt: string;
//   _id: string;
// }
// let socket: any = null;
// let apiurl: string = `${process.env.NEXT_PUBLIC_API_URL}`;

// const Page = () => {
//   const dispatch = useDispatch<AppDispatch>();

//   const auth = useAppSelector((state) => state.authReducer);
//   const [allFiles, setAllFiles] = useState<File[]>([]);

//   const getAllFiles = async () => {
//     let res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/file/getfiles", {
//       method: "GET",
//       credentials: "include",
//     });
//     let resjson = await res.json();
//     if (resjson.ok) {
//       console.log(resjson.data);
//       setAllFiles(resjson.data);
//     }
//   };

//   const getFileType = (fileurl: any) => {
//     const extension = fileurl.split(".").pop().toLowerCase();

//     switch (extension) {
//       case "mp4":
//       case "avi":
//       case "mov":
//         return "video";

//       case "jpg":
//       case "jpeg":
//       case "png":
//       case "gif":
//         return "image";

//       case "pdf":
//       case "doc":
//       case "docx":
//       case "txt":
//         return "document";

//       default:
//         return "unknown";
//     }
//   };
//   useEffect(() => {
//     getAllFiles();
//   }, []);

//   // const [socketId, setSocketId] = useState<string>("")
//   // socket = useMemo(() => io(apiurl), [])

//   const router = useRouter();

//   useEffect(() => {
//     console.log(auth.isAuth);
//     if (!auth.isAuth) {
//       return router.push("/login");
//     }
//   }, [auth]);

//   // useEffect(() => {
//   //     socket.on('connect', () => {
//   //       console.log(socket.id)
//   //       setSocketId(socket.id)
//   //     })

//   //     if(auth.user){socket.emit('joinself',auth.user.email)}
//   //     else {
//   //       getuserdata().then((user)=>{
//   //         socket.emit('joinself',user.email)
//   //       })
//   //     }

//   //     socket.on('notify', (data:any) => {
//   //       toast.info('New file shared with you' + data.from)
//   //       getAllFiles()
//   //     })

//   // }, [])

//   const getuserdata = async () => {
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
//       return data.data;
//     } else {
//       dispatch(logOut());
//       router.push("/login");
//     }
//   };

//   const getImageUrls3 = async (key: string) => {
//     let res = await fetch(
//       process.env.NEXT_PUBLIC_API_URL + "/file/gets3urlbykey/" + key,
//       {
//         method: "GET",
//         credentials: "include",
//       }
//     );

//     let data = await res.json();
//     if (data.ok) {
//       console.log(data.data);
//       return data.data.signedUrl;
//     } else {
//       return null;
//     }
//   };

//   return (
//     <div className={styles.allfiles}>
//       <table>
//         <thead>
//           <tr>
//             <th>Filename</th>
//             <th>File Type</th>
//             <th>Sender Email</th>
//             <th>Receiver Email</th>
//             <th>Shared At</th>
//             <th>View</th>
//           </tr>
//         </thead>
//         <tbody>
//           {allFiles
//             .sort((a, b) => {
//               // TODO: sort
//               return (
//                 new Date(b.sharedAt).getTime() - new Date(a.sharedAt).getTime()
//               );
//             })
//             .map((file, index) => {
//               return (
//                 <tr key={index}>
//                   <td>{file.filename}</td>
//                   <td>{file.fileType}</td>

//                   <td>{file.senderemail}</td>
//                   <td>{file.receiveremail}</td>
//                   <td>{new Date(file.sharedAt).toLocaleString()}</td>
//                   <td>
//                     <svg
//                       onClick={async () => {
//                         let s3Url: string | null = await getImageUrls3(
//                           file.fileurl
//                         );
//                         if (s3Url) {
//                           window.open(s3Url, "_blank");
//                         }
//                       }}
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       strokeWidth={1.5}
//                       stroke="currentColor"
//                       className="w-6 h-6"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
//                       />
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
//                       />
//                     </svg>
//                   </td>
//                 </tr>
//               );
//             })}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Page;

"use client";
import React, { useEffect, useMemo, useState } from "react";
import styles from "@/styles/myfiles.module.css";

import { AppDispatch, useAppSelector } from "@/redux/store";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { logIn, logOut } from "@/redux/features/auth-slice";
import { toast } from "react-toastify";

interface File {
  createdAt: string;
  filename: string;
  fileurl: string;
  fileType: string | null;
  receiveremail: string;
  senderemail: string;
  sharedAt: string;
  updatedAt: string;
  _id: string;
}
let socket: any = null;
let apiurl: string = `${process.env.NEXT_PUBLIC_API_URL}`;

const Page = () => {
  const dispatch = useDispatch<AppDispatch>();

  const auth = useAppSelector((state) => state.authReducer);
  const [allFiles, setAllFiles] = useState<File[]>([]);

  const getAllFiles = async () => {
    let res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/file/getfiles", {
      method: "GET",
      credentials: "include",
    });
    let resjson = await res.json();
    if (resjson.ok) {
      console.log(resjson.data);
      setAllFiles(resjson.data);
    }
  };

  const getFileType = (fileurl: any) => {
    const extension = fileurl.split(".").pop().toLowerCase();

    switch (extension) {
      case "mp4":
      case "avi":
      case "mov":
        return "video";

      case "jpg":
      case "jpeg":
      case "png":
      case "gif":
        return "image";

      case "pdf":
      case "doc":
      case "docx":
      case "txt":
        return "document";

      default:
        return "unknown";
    }
  };
  useEffect(() => {
    getAllFiles();
  }, []);

  // const [socketId, setSocketId] = useState<string>("")
  // socket = useMemo(() => io(apiurl), [])

  const router = useRouter();

  useEffect(() => {
    console.log(auth.isAuth);
    if (!auth.isAuth) {
      return router.push("/login");
    }
  }, [auth]);

  // useEffect(() => {
  //     socket.on('connect', () => {
  //       console.log(socket.id)
  //       setSocketId(socket.id)
  //     })

  //     if(auth.user){socket.emit('joinself',auth.user.email)}
  //     else {
  //       getuserdata().then((user)=>{
  //         socket.emit('joinself',user.email)
  //       })
  //     }

  //     socket.on('notify', (data:any) => {
  //       toast.info('New file shared with you' + data.from)
  //       getAllFiles()
  //     })

  // }, [])

  const getuserdata = async () => {
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
      return data.data;
    } else {
      dispatch(logOut());
      router.push("/login");
    }
  };

  const getImageUrls3 = async (key: string) => {
    let res = await fetch(
      process.env.NEXT_PUBLIC_API_URL + "/file/gets3urlbykey/" + key,
      {
        method: "GET",
        credentials: "include",
      }
    );

    let data = await res.json();
    if (data.ok) {
      console.log(data.data);
      return data.data.signedUrl;
    } else {
      return null;
    }
  };

  return (
    <div className={styles.allfiles}>
      <div className={styles.header}>
        <h1>My Files</h1>
        <button 
          className={styles.shareButton}
          onClick={() => router.push('/share')}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
            style={{ width: '1.5rem', height: '1.5rem' }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185z"
            />
          </svg>
          Share Files
        </button>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Filename</th>
            <th>File Type</th>
            <th>Sender Email</th>
            <th>Receiver Email</th>
            <th>Shared At</th>
            <th>View</th>
          </tr>
        </thead>
        <tbody>
          {allFiles
            .sort((a, b) => new Date(b.sharedAt).getTime() - new Date(a.sharedAt).getTime())
            .map((file, index) => (
              <tr key={index} style={{ '--index': index } as React.CSSProperties}>
                <td>{file.filename}</td>
                <td>{file.fileType}</td>
                <td>{file.senderemail}</td>
                <td>{file.receiveremail}</td>
                <td>{new Date(file.sharedAt).toLocaleString()}</td>
                <td>
                  <svg
                    onClick={async () => {
                      let s3Url: string | null = await getImageUrls3(file.fileurl);
                      if (s3Url) {
                        window.open(s3Url, "_blank");
                      }
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={styles.viewIcon}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Page;


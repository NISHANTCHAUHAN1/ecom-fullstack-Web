// import React, { useContext, useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import myContext from '../../context/myContext'
// import toast from 'react-hot-toast'
// import { signInWithEmailAndPassword } from 'firebase/auth'
// import { auth, fireDB } from '../../firebase/FirebaseConfig'
// import { collection, onSnapshot, query, where } from 'firebase/firestore'
// import Loader from '../../components/loader/Loader'

// const Login = () => {
//   const context = useContext(myContext)
//   const {loading, setLoading} = context;

//   const navigate = useNavigate();

//   const [userLogin, setUserLogin] = useState({
//     email: "",
//     password: ""
//   });

//   const userLoginFun = async() => {
//     if(userLogin.email === "" || userLogin.password === "") {
//       toast.error("All Fields are required");
//     }
//     setLoading(true);

//     try {
//       const users = await signInWithEmailAndPassword(auth, userLogin.email, userLogin.password);
//       try {
//         const q = query(
//           collection(fireDB, "user"),
//           where('uid',  '==', users?.user?.uid)
//         );
//         const data = onSnapshot(q, (QuerySnapshot) => {
//           let user;
//           QuerySnapshot.forEach((doc) => user = doc.data());
//           localStorage.setItem("users", JSON.stringify(user));
//           setUserLogin({
//             email: "",
//             password: ""
//           })
//           toast.success("Login Successfully");
//           setLoading(false)

//           if(user.role === 'user') {
//             navigate('/user-dashboard');
//           }
//           else{
//             navigate('/admindashboard')
//           }
//         })
//         return () => data;
//       } catch(error) {
//         console.log(error);
//         setLoading(false);
//       }
//     } catch (error) {
//       console.log(error);
//       setLoading(false)
//     }
//   }
//   return (
//     <div className="flex justify-center items-center h-screen">
//       {loading && <Loader />}
//       <div className="login_Form bg-blue-gray-100 px-1 lg:px-8 py-6 border border-blue-gray-200 rounded-xl shadow-md">
//         <div className="mb-5">
//           <h2 className="text-center text-2xl font-bold text-blue-gray-600 ">
//             Login
//           </h2>
//         </div>

//         <div className="mb-3">
//           <input
//             type="email"
//             placeholder="Email Address"
//             value={userLogin.email}
//             onChange={(e) => {setUserLogin({...userLogin, email: e.target.value})}}
//             className="bg-blue-gray-200 border-blue-gray-200 px-2 py-2 w-96 rounded-md outline-none placeholder-blue-gray-800"
//           />
//         </div>

//         <div className="mb-5">
//           <input
//             type="password"
//             placeholder="Password"
//             value={userLogin.password}
//             onChange={(e) => {setUserLogin({...userLogin, password: e.target.value})}}
//             className="bg-blue-gray-200 border-blue-gray-200 px-2 py-2 w-96 rounded-md outline-none placeholder-blue-gray-800"
//           />
//         </div>

//         {/* Signup Button  */}
//         <div className="mb-5">
//           <button
//            onClick={userLoginFun}
//             type="button"
//             className="bg-blue-gray-500 hover:bg-blue-gray-200 w-full text-white text-center py-2 font-bold rounded-md "
//           >
//             Login
//           </button>
//         </div>

//         <div>
//           <h2 className="text-black">
//             Have an account{" "}
//             <Link className=" text-green-500 font-bold" to={"/signup"}>
//               Sign Up
//             </Link>
//           </h2>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Login

import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../context/myContext";
import toast from "react-hot-toast";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, fireDB } from "../../firebase/FirebaseConfig";
import Loader from "../../components/loader/Loader";
import { collection, onSnapshot, query, where } from "firebase/firestore";

const Login = () => {
  const context = useContext(myContext);
  const { loading, setLoading } = context;

  // navigate
  const navigate = useNavigate();

  // User Signup State
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });


  const userLoginFunction = async () => {
    // validation
    if (userLogin.email === "" || userLogin.password === "") {
      toast.error("All Fields are required");
    }

    setLoading(true);
    try {
      const users = await signInWithEmailAndPassword(
        auth,
        userLogin.email,
        userLogin.password
      );
      // console.log(users.user)

      try {
        const q = query(
          collection(fireDB, "user"),
          where("uid", "==", users?.user?.uid)
        );
        const data = onSnapshot(q, (QuerySnapshot) => {
          let user;
          QuerySnapshot.forEach((doc) => (user = doc.data()));
          localStorage.setItem("users", JSON.stringify(user));
          setUserLogin({
            email: "",
            password: "",
          });
          toast.success("Login Successfully");
          setLoading(false);
          if (user.role === "user") {
            navigate("/user-dashboard");
          } else {
            navigate('/admindashboard')
          }
        });
        return () => data;
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("Login Failed");
    }
  };
  return (
    <div className="flex justify-center items-center h-screen">
      {loading && <Loader />}
      {/* Login Form  */}
   <div className="login_Form bg-blue-gray-100 px-1 lg:px-8 py-6 border border-blue-gray-200 rounded-xl shadow-md">
      
        {/* Top Heading  */}
        <div className="mb-5">
          <h2 className="text-center text-2xl font-bold text-blue-gray-600 ">
            Login
          </h2>
        </div>

        {/* Input One  */}
        <div className="mb-3">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={userLogin.email}
            onChange={(e) => {
              setUserLogin({
                ...userLogin,
                email: e.target.value,
              });
            }}
            className="bg-blue-gray-200 border-blue-gray-200 px-2 py-2 w-96 rounded-md outline-none placeholder-blue-gray-800"
          />
        </div>

        {/* Input Two  */}
        <div className="mb-5">
          <input
            type="password"
            placeholder="Password"
            value={userLogin.password}
            onChange={(e) => {
              setUserLogin({
                ...userLogin,
                password: e.target.value,
              });
            }}
            className="bg-blue-gray-200 border-blue-gray-200 px-2 py-2 w-96 rounded-md outline-none placeholder-blue-gray-800"
          />
        </div>

        {/* Signup Button  */}
        <div className="mb-5">
          <button
            type="button"
            onClick={userLoginFunction}
             className="bg-blue-gray-500 hover:bg-blue-gray-200 w-full text-white text-center py-2 font-bold rounded-md "
          >
            Login
          </button>
        </div>

        <div>
          <h2 className="text-black">
            Don't Have an account{" "}
            <Link className="  text-green-500 font-bold" to={"/signup"}>
              Signup
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Login;

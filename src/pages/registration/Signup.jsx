import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../context/myContext";
import toast from "react-hot-toast";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, fireDB } from "../../firebase/FirebaseConfig";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import Loader from "../../components/loader/Loader";

const Signup = () => {
  const context = useContext(myContext)
  const {loading, setLoading} = context;

  const navigate = useNavigate();
  const [userSignup, setUserSignup] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });

  const userSignupFun =  async() => {
    if(userSignup.name === "" || userSignup.email === "" || userSignup.password === " ") {
      return toast.error("All Fields are required");
    }
    setLoading(true);

    try {
      const users = await createUserWithEmailAndPassword(auth, userSignup.email, userSignup.password);

      const user = {
        name: userSignup.name,
        email: users.user.email,
        uid: users.user.uid,
        role: userSignup.role,
        time: Timestamp.now(),
        date: new Date().toLocaleString(
          "en-US",
          {
            month: "short",
            day: "2-digit",
            year: "numeric",
          }
        )
      }

      const  userReference = collection(fireDB, "user");

      addDoc(userReference,user)
      setUserSignup({
        name: "",
        email: "",
        password: "",
      })
      toast.success("Signup Successfully");

      setLoading(false)
      navigate('/login')
    } catch (error) {
      console.log("check userSignFun" ,error);
      setLoading(false)
    }
  }
  return (
    <div className="flex justify-center items-center h-screen">
      {loading && <Loader />}
      <div className="login_Form bg-blue-gray-100 px-1 lg:px-8 py-6 border border-blue-gray-200 rounded-xl shadow-md">
        <div className="mb-5">
          <h2 className="text-center text-2xl font-bold text-blue-gray-600 ">
            Signup
          </h2>
        </div>

        <div className="mb-3">
          <input
            type="text"
            placeholder="Full Name"
            value={userSignup.name}
            onChange={(e) => {setUserSignup({...userSignup, name: e.target.value})}}
            className="bg-blue-gray-200 border-blue-gray-200 px-2 py-2 w-96 rounded-md outline-none placeholder-blue-gray-800"
          />
        </div>

        <div className="mb-3">
          <input
            type="email"
            placeholder="Email Address"
            value={userSignup.email}
            onChange={(e) => {setUserSignup({...userSignup, email : e.target.value})}}
            className="bg-blue-gray-200 border-blue-gray-200 px-2 py-2 w-96 rounded-md outline-none placeholder-blue-gray-800"
          />
        </div>

        <div className="mb-5">
          <input
            type="password"
            placeholder="Password"
            value={userSignup.password}
            onChange={(e) => {setUserSignup({...userSignup, password : e.target.value })}}
            className="bg-blue-gray-200 border-blue-gray-200 px-2 py-2 w-96 rounded-md outline-none placeholder-blue-gray-800"
          />
        </div>

        {/* Signup Button  */}
        <div className="mb-5">
          <button
           onClick={userSignupFun}
            type="button"
            className="bg-blue-gray-500 hover:bg-blue-gray-200 w-full text-white text-center py-2 font-bold rounded-md "
          >
            Signup
          </button>
        </div>

        <div>
          <h2 className="text-black">
            Have an account{" "}
            <Link className=" text-green-500 font-bold" to={"/login"}>
              Login
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Signup;

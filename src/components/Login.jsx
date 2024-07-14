import { FcGoogle } from "react-icons/fc";
import { CgFacebook } from "react-icons/cg";
import { FaApple } from "react-icons/fa6";
import { IoCheckmark } from "react-icons/io5";
import { LuEye } from "react-icons/lu";
import { BiX } from "react-icons/bi";
import { useState } from "react";
import { Navigate, Link, useNavigate } from "react-router-dom";
import {
  doSignInWithEmailAndPassword,
  doSignInWithGoogle,
} from "../Firebase/auth";
import { useAuth } from "../contexts/AuthContext";
import { toast } from "react-toastify";
function Login() {
  // const { userLoggedIn } = useAuth();
  // console.log(useAuth);
  const navigate = useNavigate();
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const res = await doSignInWithEmailAndPassword(
      formData.email,
      formData.password
    );
    toast.success("Verified");
    // console.log(res.user.uid);
    // console.log(res.user.uid);

    if (res.user.uid) {
      navigate("/customers");
    }
  };

  const handleGoogleLogin = async (e) => {
    e.preventDefault();
    setIsSigningIn(true);
    await doSignInWithGoogle().catch((error) => {
      setIsSigningIn(false);
    });
  };
  return (
    <div>
      <div className="flex flex-col gap-4 mt-7 p-6 pt-0">
        <div className="social_links flex items-center gap-3">
          <div className="bg-grey-color cursor-pointer p-2 rounded-full">
            <FaApple style={{ width: "21.01px", height: "24.6px" }} />
          </div>
          <div className="bg-grey-color cursor-pointer p-2 rounded-full">
            <CgFacebook style={{ width: "20.18px", height: "26.11px" }} />
          </div>
          <div className="bg-grey-color cursor-pointer p-2 rounded-full">
            <FcGoogle
              style={{ width: "20.8px", height: "20.8px" }}
              onClick={handleGoogleLogin}
            />
          </div>
        </div>
        <p
          className="text-light-grey"
          style={{ fontWeight: "400", fontSize: "13px", lineHeight: "20px" }}>
          or register with email
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center gap-6">
          <div className="border-2 flex justify-between items-center p-3 rounded-xl outline-1">
            <div className="flex flex-col w-[90%]">
              <label
                htmlFor=""
                className="text-[13px] font-[400] text-label-color">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                // value={formData[field[0].name]}
                onChange={handleChange}
                placeholder="example@mail.com"
                className="outline-none text-[16px] w-full font-[600] text-[#1A0710D9] opacity-[85%] leading-6"
              />
            </div>
          </div>
          <div className="">
            <div className="border-2 mb-0 flex justify-between items-center p-3 rounded-xl outline-1">
              <div className="flex flex-col">
                <label
                  htmlFor=""
                  className="text-[13px] font-[400] text-label-color">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  // value={formData[field[1].name]}
                  onChange={handleChange}
                  autoComplete="current-password"
                  placeholder="********"
                  className="outline-none text-[16px] w-full font-[600] text-[#1A0710D9] opacity-[85%] leading-6"
                />
              </div>
              <div className="flex items-center gap-2">
                <LuEye
                  className="cursor-pointer"
                  style={{ width: "25px", height: "20px" }}
                />
              </div>
            </div>
          </div>
          <button
            // onClick={handleNext}
            type="submit"
            disabled={isSigningIn}
            className="p-3 bg-blue-hover cursor-pointer rounded-xl text-white font-[600] text-[16px] mb-0">
            {isSigningIn ? "Loging In" : "Login"}
          </button>
          <div className="flex items-center gap-2 mt-0">
            <input type="checkbox" className="h-[16px] w-[16p]" />
            <label htmlFor="" className="font-[400] text-[13px] leading-4">
              Send me news and promotions
            </label>
          </div>
        </form>
        <div className="flex justify-center items-center">
          <p className="font-[400] leading-4 text-[11px] w-[296px] h-[32] text-center tracking-tight">
            By continuing I agree with the{" "}
            <span className="text-blue-500 hover:underline ease-in 2s">
              <a href="#">Terms & Conditions, Privacy Policy</a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;

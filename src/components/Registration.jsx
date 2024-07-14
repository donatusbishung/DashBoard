import { FcGoogle } from "react-icons/fc";
import { CgFacebook } from "react-icons/cg";
import { FaApple } from "react-icons/fa6";
import { IoCheckmark } from "react-icons/io5";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { BiX } from "react-icons/bi";
import { useState } from "react";
import { doCreateUserWithEmailAndPassword } from "../Firebase/auth";
import { useAuth } from "../contexts/AuthContext";
import { toast } from "react-toastify";
function Registration({ formData, handleChange, handleNext, field }) {
  const [errors, setErrors] = useState({});
  const [isRegistring, setIsRegistring] = useState(false);

  const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
  const validated = () => {
    const newErrors = {};
    if (!formData.password.match(passwordRules)) {
      newErrors.password = "8+ characters";
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is not Valid";
    }
    setErrors(newErrors); // Update state with new errors
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsRegistring(true);

    try {
      const res = await doCreateUserWithEmailAndPassword(
        formData.email,
        formData.password
      );
      // console.log("User created successfully:", res.user);
      toast.success("User created successfully", { position: "top-right" });
      handleNextStep(); // Proceed to the next step
    } catch (error) {
      console.error("Error creating user:", error);
      toast.error("Error creating user: " + error.message, {
        position: "top-right",
      });
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "",
      }));
      setIsRegistring(false);
    }
  };

  const handleNextStep = () => {
    const isValid = validated();

    if (isValid) {
      handleNext(); // Proceed to the next step
    } else {
      console.log("Form validation failed for current step:", errors);
      // Optionally, you can show errors to the user in some way
    }
  };

  // function handles errors clearing and validation on input
  const handleInput = (e) => {
    const { name, value } = e.target;
    handleChange(e); // Propagate change to parent component if needed

    // Clear the error for the current input field
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "", // Clear the error for the current field
    }));
  };

  return (
    <div className="flex flex-col gap-4 p-5 md:p-6 lg:p-6">
      <div className="social_links flex items-center gap-3">
        <div className="bg-grey-color cursor-pointer p-2 rounded-full">
          <FaApple style={{ width: "21.01px", height: "24.6px" }} />
        </div>
        <div className="bg-grey-color cursor-pointer p-2 rounded-full">
          <CgFacebook style={{ width: "20.18px", height: "26.11px" }} />
        </div>
        <div className="bg-grey-color cursor-pointer p-2 rounded-full">
          <FcGoogle style={{ width: "20.8px", height: "20.8px" }} />
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
              {field[0].label}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              // onChange={handleChange}
              onChange={handleInput}
              placeholder="example@mail.com"
              className="outline-none text-[16px] w-[100%] font-[600] text-[#1A0710D9] opacity-[85%] leading-6"
            />
          </div>
          {errors.email ? (
            <div>
              <IoCheckmark className="text-red-700" />
            </div>
          ) : (
            <div>
              <IoCheckmark className="text-green-light" />
            </div>
          )}
        </div>
        <div>
          <div className="">
            <div className="border-2 mb-0 flex justify-between items-center p-3 rounded-xl outline-1">
              <div className="flex flex-col w-[70%]">
                <label
                  htmlFor=""
                  className="text-[13px] font-[400] text-label-color">
                  {field[1].label}
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={formData.password}
                  // onChange={handleChange}
                  onChange={handleInput}
                  autoComplete="current-password"
                  placeholder="********"
                  className="outline-none text-[16px] w-full font-[600] text-[#1A0710D9] opacity-[85%] leading-6"
                />
              </div>
              <div className="flex items-center gap-2">
                {errors.password ? (
                  <div>
                    <IoCheckmark className="text-red-700" />
                  </div>
                ) : (
                  <div>
                    <IoCheckmark className="text-green-light" />
                  </div>
                )}
                <LuEyeOff
                  className="cursor-pointer"
                  style={{ width: "25px", height: "20px" }}
                />
              </div>
            </div>
          </div>
          {errors.password ? <span>{errors.password}</span> : ""}
        </div>
        <button
          // onClick={onSubmit}
          // onClick={handleNextStep}
          type="submit"
          className="p-3 bg-blue-hover cursor-pointer rounded-xl text-white font-[600] text-[16px] mb-0">
          Create account
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
  );
}

export default Registration;

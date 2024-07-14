import { FcGoogle } from "react-icons/fc";
import { CgFacebook } from "react-icons/cg";
import { FaApple } from "react-icons/fa6";
import { IoCheckmark } from "react-icons/io5";
import { LuEye } from "react-icons/lu";
import { BiX } from "react-icons/bi";
import { useState } from "react";
import Registration from "./Registration";
import PersonalInfo from "../pages/userDetails/PersonalInfo";
import AddAddress from "../pages/userDetails/AddAddress";
import AddManualAdress from "../pages/userDetails/AddManualAdress";
import SuccessfulReg from "../pages/userDetails/SuccessfulReg";
import { toast } from "react-toastify";

function Register({ handlePrevious, handleNext, step }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    phone: "",
    birthday: "",
    street: "",
    apartment: "",
    city: "",
    state: "",
    zipCode: "",
    countryCode: "",
    subscribe: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // alert("form submitted successfully");
    toast.success("Form submitted successfully", { position: "top-right" });
    // console.log(formData);
    handleNext();
  };

  return (
    <div
      className="flex flex-col justify-center gap-4 register_section mt-1"
      style={{ font: "Commissioner" }}>
      {step === 1 && (
        <Registration
          formData={formData}
          field={[
            { label: "Email", type: "email", name: "email" },
            { label: "Password", type: "password", name: "password" },
          ]}
          handleChange={handleChange}
          handleNext={handleNext}
        />
      )}
      {step === 2 && (
        <PersonalInfo
          handleChange={handleChange}
          handlePrevious={handlePrevious}
          handleNext={handleNext}
          formData={formData}
        />
      )}
      {step === 3 && (
        <AddAddress handleNext={handleNext} handlePrevious={handlePrevious} />
      )}
      {step === 4 && (
        <AddManualAdress
          // handleNext={handleNext}
          handlePrevious={handlePrevious}
          handleChange={handleChange}
          formData={formData}
          handleSubmit={handleSubmit}
          manualAddress={[
            { label: "Street Address", type: "text", name: "street" },
            { label: "Apartment", type: "text", name: "apartment" },
            { label: "City", type: "text", name: "city" },
            { label: "State", type: "text", name: "state" },
            { label: "Zip Code", type: "text", name: "zipCode" },
          ]}
        />
      )}
      {step === 5 && <SuccessfulReg handlePrevious={handlePrevious} />}
    </div>
  );
}

export default Register;

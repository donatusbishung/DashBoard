import { BiX } from "react-icons/bi";
import { RiErrorWarningLine } from "react-icons/ri";
import { basicSchema } from "../../components/Schema";
import { useState } from "react";

function PersonalInfo({ formData, handleNext, handleChange, handlePrevious }) {
  const [errors, setErrors] = useState({});

  const validated = () => {
    const newErrors = {};
    if (!formData.name) {
      newErrors.name = "input field empty";
    }
    if (!formData.phone) {
      newErrors.phone = "required field empty";
    }
    if (!formData.birthday) {
      newErrors.birthday = "required field empty";
    }

    setErrors(newErrors); // Update state with new errors
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    const isValid = validated();

    if (isValid) {
      handleNext(e); // Proceed to the next step
    } else {
      console.log("Form validation failed for current step:", errors);
      // Optionally, you can show errors to the user in some way
    }
  };

  // function handles errors clearing and validation on input
  const handleInput = (e) => {
    const { name, value } = e.target;
    handleChange(e); // Propagate change to parent component if needed
    // Validate input immediately
    // validated();

    // Clear the error for the current input field
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "", // Clear the error for the current field
    }));
  };

  return (
    <div className="flex flex-col gap-5 register_section">
      <div className="flex justify-between">
        <div className="flex gap-5 items-center align-middle">
          <h2 className="font-bold text-[20px]">Personal information</h2>
          <p className="text-green-light font-bold">2 of 3</p>
        </div>
        <BiX
          onClick={handlePrevious}
          className="cursor-pointer"
          style={{ width: "24px", height: "24px" }}
        />
      </div>
      <div className="flex flex-col gap-6">
        <div className={` ${errors.name && "border-red-600"}`}>
          <input
            type="text"
            name="name"
            value={formData.name}
            // onChange={handleChange}
            onChange={handleInput}
            id="name"
            placeholder="Full name"
            className={`p-3 w-full border-2 outline-none rounded-xl text-input-text-color ${
              errors.name && "border-red-600"
            }`}
          />
        </div>
        <div className="flex items-center gap-1 text-input-text-color">
          <span className="text-[14px] mb-[5px]">Gender:</span>
          <label className="inline-flex items-center gap-[10px]">
            <input
              type="radio"
              name="gender"
              value="male"
              className="form-radio h-5 w-5 text-blue-600"
            />
            Male
          </label>
          <label className="inline-flex items-center gap-[10px]">
            <input
              type="radio"
              name="gender"
              value="female"
              className="form-radio h-5 w-5 text-blue-600"
            />
            Female
          </label>
        </div>

        <div className="flex gap-2 items-center">
          <RiErrorWarningLine />
          <p className="text-[13px] font-[700]">
            The phone number and birthday are only visible to you
          </p>
        </div>

        <div className="flex gap-2 items-center">
          <select
            name="countryCode"
            value={formData.countryCode}
            // onChange={handleChange}
            onChange={handleInput}
            className="p-3 text-input-text-color rounded-xl outline-none bg-white border-2">
            <option value="+598">+598</option>
            <option value="+251">+251</option>
            <option value="+234">+234</option>
          </select>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            // onChange={handleChange}
            onChange={handleInput}
            id="phone"
            placeholder="Phone number"
            className={`p-3 w-full border-2 outline-none rounded-xl text-input-text-color ${
              errors.phone && "border-red-600"
            }`}
          />
        </div>

        <div className="flex flex-col gap-1 text-input-text-color">
          <input
            type="date"
            name="birthday"
            value={formData.birthday}
            // onChange={handleChange}
            onChange={handleInput}
            id="birthday"
            placeholder="Birthday"
            className={`p-3 w-full border-2 outline-none rounded-xl text-input-text-color ${
              errors.birthday && "border-red-600"
            }`}
          />

          <p className="font-[400] text-[13px]">
            Let us know about your birthday so as not to miss a gift
          </p>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="subscribe"
            name="subscribe"
            className="form-checkbox h-5 w-5 text-blue-600"
          />
          <label htmlFor="subscribe" className="text-[13px]">
            Subscribe to our newsletter
          </label>
        </div>

        <button
          onClick={handleNextStep}
          type="submit"
          className="bg-blue-hover rounded-xl text-white p-3">
          Save information
        </button>
      </div>
    </div>
  );
}

export default PersonalInfo;

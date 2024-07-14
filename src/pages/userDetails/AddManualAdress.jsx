import { BiX } from "react-icons/bi";
import { basicSchema } from "../../components/Schema";
import { useState } from "react";
function AddManualAdress({
  handleNext,
  formData,
  handlePrevious,
  manualAddress,
  handleChange,
  handleSubmit,
}) {
  const [errors, setErrors] = useState({});

  const validated = () => {
    const newErrors = {};
    if (!formData.street) {
      newErrors.street = "input field empty";
    }
    if (!formData.apartment) {
      newErrors.apartment = "required field empty";
    }
    if (!formData.city) {
      newErrors.city = "required field empty";
    }
    if (!formData.state) {
      newErrors.state = "required field empty";
    }
    if (!formData.zipCode) {
      newErrors.zipCode = "required field empty";
    }
    setErrors(newErrors); // Update state with new errors
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    const isValid = validated();

    if (isValid) {
      handleSubmit(e); // Proceed to the next step
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
    <div className="flex flex-col gap-4 p-6">
      <div className="flex justify-between">
        <div className="flex gap-5 items-center align-middle">
          <h2 className="font-bold text-[20px]">Add Address</h2>
          <p className="text-green-light font-bold">3 of 3</p>
        </div>
        <BiX
          onClick={handlePrevious}
          className="cursor-pointer"
          style={{ width: "24px", height: "24px" }}
        />
      </div>
      <div className="flex flex-col gap-6">
        {/* Your form fields and validation checks */}
        <div
          className={`flex flex-col border-2 rounded-xl p-3 ${
            errors.street ? "border-red-500" : ""
          }`}>
          <label
            htmlFor=" "
            className="text-[13px] font-[400] text-label-color">
            {manualAddress[0].label}
          </label>
          <input
            type="text"
            name="street"
            value={formData.street}
            // onChange={handleChange}
            onInput={handleInput}
            placeholder="319 Bainbridge Street"
            id="street"
            className="outline-none text-[16px] text-[#1A0710D9] placeholder-[#1A0710] font-[400] leading-6 opacity-[85%]"
          />
        </div>
        <div
          className={`flex justify-between border-2 rounded-xl p-3 ${
            errors.apartment ? "border-red-500" : ""
          }`}>
          <input
            type="text"
            name="apartment"
            value={formData.apartment}
            // onChange={handleChange}
            onInput={handleInput}
            id="apartment"
            className="outline-none text-[16px] text-[#1A0710] placeholder-[#1A0710] font-[400] leading-6 opacity-[65%]"
            placeholder="Apartment"
          />
          <label
            htmlFor=""
            className="text-[#1A071066] opacity-[40%] text-[16px] leading-6">
            Optional
          </label>
        </div>
        <div
          className={`flex flex-col border-2 rounded-xl p-3 ${
            errors.city ? "border-red-500" : ""
          }`}>
          <label
            htmlFor=" "
            className="text-[13px] font-[400] text-label-color">
            City
          </label>
          <input
            type="text"
            name="city"
            value={formData.city}
            // onChange={handleChange}
            onInput={handleInput}
            placeholder="New York City"
            id="city"
            className="outline-none text-[16px] text-[#1A0710D9] placeholder-[#1A0710] font-[400] leading-6 opacity-[85%]"
          />
        </div>
        <div className="flex-col md:flex-row lg:flex-row justify-between md:gap-2 lg:gap-2">
          <div
            className={`flex flex-col border-2 rounded-xl w-[100%] md:w-[40%] mb-3 md:mb-0 lg:mb-0 lg:w-[40%]  p-3 ${
              errors.state && "border-red-500"
            }`}>
            <label
              htmlFor=" "
              className="text-[13px] font-[400] text-label-color">
              State
            </label>
            <input
              type="text"
              name="state"
              value={formData.state}
              // onChange={handleChange}
              onInput={handleInput}
              placeholder="New York"
              id="state"
              className="outline-none text-[16px] text-[#1A0710D9] placeholder-[#1A0710] font-[400] leading-6 opacity-[85%]"
            />
          </div>
          <div
            className={`flex flex-col border-2 w-[100%] md:w-[50%] lg:w-[50%] rounded-xl p-3 ${
              errors.zipCode && "border-red-500"
            }`}>
            <label
              htmlFor=" "
              className="text-[13px] font-[400] text-label-color">
              Zip code
            </label>
            <input
              type="text"
              name="zipCode"
              value={formData.zipCode}
              // onChange={handleChange}
              onInput={handleInput}
              placeholder="11233"
              id="zipCode"
              className={`outline-none text-[16px] text-[#1A0710D9] placeholder-[#1A0710] font-[400] leading-6 opacity-[85%] `}
            />
          </div>
        </div>
        <button
          // onClick={handleNext}
          onClick={handleNextStep}
          type="submit"
          className="p-3 bg-blue-hover rounded-xl text-white font-[600] text-[16px]">
          Save information
        </button>
      </div>
    </div>
  );
}

export default AddManualAdress;

import { BiX } from "react-icons/bi";
import { GoSearch } from "react-icons/go";
import { CiLocationOn, CiClock2 } from "react-icons/ci";
import { LuUsers2, LuDollarSign, LuClock3 } from "react-icons/lu";

function AddAddress({ handleNext, handlePrevious }) {
  return (
    <div className="flex flex-col gap-10">
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
      <div className="mt-6">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-1 p-3 rounded-xl border-2">
            <GoSearch className="w-[20px] h-[20px] text-[#1A071066] opacity-[40%] font-bold" />{" "}
            <input
              type="text"
              placeholder="Search for adress"
              className="font-[400] text-[16px] opacity-[65%] w-full outline-none"
            />
          </div>
          <p className="text-[13px] font-[400] leading-5 text-[#1A0710A6] opacity-[65%]">
            Your address is not visible to other users
          </p>
        </div>
      </div>
      {/* location section */}
      <div className="flex gap-3">
        <div className="text-blue-hover flex items-center gap-1 text-[13px] font-[700] leading-5 border-2 rounded-xl py-1 px-2 border-[#EF498F47]">
          <CiLocationOn className="w-[16px] h-[16px] font-bold" />
          <p className="text-[13px] font-[700] leading-5">
            Use current location
          </p>
        </div>
        <div className="text-blue-hover flex items-center gap-1 text-[13px] font-[700] leading-5 border-2 rounded-xl py-1 px-2 border-[#EF498F47] cursor-pointer">
          <button
            className="text-[13px] font-[700] leading-5"
            onClick={handleNext}>
            Add manually
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-3 align-baseline mt-12">
        <h1 className="font-[700] text-[20px] leading-7">
          Sharing your address shows:
        </h1>
        <div className="flex flex-col gap-3">
          <div className="flex gap-2 items-center">
            <LuUsers2 />
            <p className="text-[15px] font-[400] leading-6 text-[#1A0710A6] opacity-[65%]">
              People near you
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex gap-2 items-center">
            <LuClock3 />
            <p className="text-[15px] font-[400] leading-6 text-[#1A0710A6] opacity-[65%]">
              Estimated delivery time
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex gap-2 items-center">
            <LuDollarSign />
            <p className="text-[15px] font-[400] leading-6 text-[#1A0710A6] opacity-[65%]">
              Estimate shipping costs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddAddress;

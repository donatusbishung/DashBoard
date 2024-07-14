import { Link } from "react-router-dom";
import { useState } from "react";
import { TbUserSquareRounded, TbSquareKey, TbSettings2 } from "react-icons/tb";
import { LuWallet2 } from "react-icons/lu";
import { CiDiscount1 } from "react-icons/ci";
import { BiMessageRoundedError } from "react-icons/bi";
import { HiOutlineCube, HiOutlineChevronRight } from "react-icons/hi";

function SideBar() {
  const [open, setOpen] = useState(true);
  return (
    <div
      className={`sideBar__section flex flex-col h-[100vh] bg-white border-r shadow-md px-4 ${
        open ? "w-[306px]" : "w-[102px] duration-500 transition-all"
      }`}>
      {/* logo section */}
      <div className="flex py-3">
        <button
          onClick={() => setOpen(!open)}
          className={`transition-all duration-400 ${open && "rotate-180"}`}>
          <TbSettings2 style={{ width: "37px", height: "37px" }} />
        </button>
        <div className={`ml-3 ${open ? "" : "hidden "}`}>
          <h2
            className="text-[26px]"
            style={{ fontWeight: "600", lineHeight: "" }}>
            DashBoard <span className="text-[10px] text-light-grey">v.01</span>
          </h2>
        </div>
      </div>
      {/* navigations */}
      <div className="mt-3 flex flex-col gap-4 relative mb-4 text-[#9197B3]">
        <Link
          to={"/dashboard"}
          className="flex justify-between items-center gap-2 p-2 hover:bg-blue-hover rounded-md hover:text-white">
          <div className="flex items-center gap-2">
            <TbSquareKey style={{ width: "24px", height: "24px" }} />
            <p
              className={`text-[14px] leading-3 font-[400] ${
                !open && "opacity-0 translate-x-20 overflow-hidden"
              } duration-500`}
              style={{
                fontSize: "16px",
                lineHeight: "1%",
                fontWeight: "400",
              }}>
              Dashboard
            </p>
          </div>
        </Link>
        <Link
          to={"/products"}
          className="flex justify-between items-center gap-2 p-2 hover:bg-blue-hover rounded-md hover:text-white">
          <div className="flex items-center gap-2">
            <HiOutlineCube style={{ width: "24px", height: "24px" }} />
            <p
              className={`text-[14px] leading-3 font-[400] ${
                !open && "opacity-0 translate-x-20 overflow-hidden"
              } duration-500`}
              style={{
                fontSize: "16px",
                lineHeight: "1%",
                fontWeight: "400",
              }}>
              Product
            </p>
          </div>
          <HiOutlineChevronRight
            className={`${!open && "opacity-0 translate-x-20 overflow-hidden"}`}
          />
        </Link>
        <Link
          to={"/customers"}
          className={`flex justify-between items-center gap-2 p-2 hover:bg-blue-hover rounded-md hover:text-white`}>
          <div className="flex items-center gap-2">
            <TbUserSquareRounded style={{ width: "24px", height: "24px" }} />
            <p
              className={`text-[14px] leading-3 font-[400] ${
                !open && "opacity-0 translate-x-20 overflow-hidden"
              } duration-500`}
              style={{
                fontSize: "16px",
                lineHeight: "1%",
                fontWeight: "400",
              }}>
              Customers
            </p>
          </div>
          <HiOutlineChevronRight
            className={`${!open && "opacity-0 translate-x-20 overflow-hidden"}`}
          />
        </Link>
        <Link
          to={"/income"}
          className="flex justify-between items-center gap-2 p-2 hover:bg-blue-hover rounded-md hover:text-white">
          <div className="flex items-center gap-2">
            <LuWallet2 style={{ width: "24px", height: "24px" }} />
            <p
              className={`text-[14px] leading-3 font-[400] ${
                !open && "opacity-0 translate-x-20 overflow-hidden"
              } duration-500`}
              style={{
                fontSize: "16px",
                lineHeight: "1%",
                fontWeight: "400",
              }}>
              Income
            </p>
          </div>
          <HiOutlineChevronRight
            className={`${!open && "opacity-0 translate-x-20 overflow-hidden"}`}
          />
        </Link>
        <Link
          to={"/promote"}
          className="flex justify-between items-center gap-2 p-2 hover:bg-blue-hover rounded-md hover:text-white">
          <div className="flex items-center gap-2">
            <CiDiscount1 style={{ width: "24px", height: "24px" }} />
            <p
              className={`text-[14px] leading-3 font-[400] ${
                !open && "opacity-0 translate-x-20 overflow-hidden"
              } duration-500`}
              style={{
                fontSize: "16px",
                lineHeight: "1%",
                fontWeight: "400",
              }}>
              Promote
            </p>
          </div>
          <HiOutlineChevronRight
            className={`${!open && "opacity-0 translate-x-20 overflow-hidden"}`}
          />
        </Link>
        <Link
          to={"/help"}
          className="flex justify-between items-center gap-2 p-2 hover:bg-blue-hover rounded-md hover:text-white">
          <div className="flex items-center gap-2">
            <BiMessageRoundedError style={{ width: "24px", height: "24px" }} />
            <p
              className={`text-[14px] leading-3 font-[400] ${
                !open && "opacity-0 translate-x-20 overflow-hidden"
              } duration-500`}
              style={{
                fontSize: "16px",
                lineHeight: "1%",
                fontWeight: "400",
              }}>
              Help
            </p>
          </div>
          <HiOutlineChevronRight
            className={`${!open && "opacity-0 translate-x-20 overflow-hidden"}`}
          />
        </Link>
      </div>
      <div className="justify-items-end">
        <div
          className={`flex flex-col justify-center p-4 gap-4 rounded-md bg-gradient-to-r from-[#EAABF0] to-[#370fec] via-[#4623E9] duration-500 my-6 ${
            !open &&
            "hidden transition-all ease opacity-0 translate-x-20 overflow-hidden"
          }`}>
          <p
            style={{
              color: "#FFFFFF",
              fontSize: "14px",
              lineHeight: "21px",
              letterSpacing: "1%",
              fontWeight: "600",
              textAlign: "center",
              // color: "white",
            }}>
            Upgrade to PRO to get access all Features!
          </p>
          <button
            className="p-4 bg-white cursor-pointer rounded-full"
            style={{
              color: "#4925E9",
              fontSize: "14px",
              lineHeight: "21px",
              letterSpacing: "1%",
              fontWeight: "600",
            }}>
            Get Pro Now!
          </button>
        </div>
        {/* founder section */}
        <div className="flex justify-between align-center m2 ">
          <div className="flex justify-between gap-3 items-center">
            <img
              src="Ellipse 8.png"
              alt="founder"
              className={`rounded-full ${open ? "" : "mt-48"} duration-500`}
            />
            <div className={`duration-500 ${open ? "block" : "hidden"}`}>
              <h2
                style={{
                  fontSize: "14px",
                  fontWeight: "400",
                  lineHeight: "21px",
                  letterSpacing: "1%",
                }}>
                Evans
              </h2>
              <p
                style={{
                  fontSize: "12px",
                  fontWeight: "400",
                  lineHeight: "18px",
                  letterSpacing: "1%",
                  color: "#757575",
                }}>
                Project Manager
              </p>
            </div>
          </div>
          <img
            className={`${open ? "block" : "hidden"}`}
            src="chevron-down 2.svg"
            alt="chev"
            style={{ width: "24px", height: "24px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default SideBar;

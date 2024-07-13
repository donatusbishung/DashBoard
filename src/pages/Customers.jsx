import PageWrapper from "../layouts/PageWrapper";
import { CiSearch } from "react-icons/ci";
import { LuUsers2 } from "react-icons/lu";
import { RiArrowUpLine } from "react-icons/ri";
import { RiUserFollowLine, RiArrowDownLine } from "react-icons/ri";
import { PiDesktopLight } from "react-icons/pi";

function Customers() {
  const tableData = [
    {
      id: 1,
      customer_name: "Jane Cooper",
      company: "Microsoft",
      phoneNumber: "(255) 555-0118",
      email: "jane@microsoft.com",
      country: "United States",
      isActive: true,
    },
    {
      id: 2,
      customer_name: "Floyd Miles",
      company: "Yahoo",
      phoneNumber: "(205) 555-0100",
      email: "floyd@yahoo.com",
      country: "Kiribati",
      isActive: false,
    },
    {
      id: 3,
      customer_name: "Ronald Richards",
      company: "Adobe",
      phoneNumber: "(302) 555-0107",
      email: "ronald@adobe.com",
      country: "Israel",
      isActive: false,
    },
    {
      id: 4,
      customer_name: "Marvin McKinney",
      company: "Tesla",
      phoneNumber: "(252) 555-0126",
      email: "marvin@tesla.com",
      country: "Iran",
      isActive: true,
    },
    {
      id: 5,
      customer_name: "Jerome Bell",
      company: "Google",
      phoneNumber: "(629) 555-0129",
      email: "jerome@google.com",
      country: "Réunion",
      isActive: true,
    },
    {
      id: 6,
      customer_name: "Kathryn Murphy",
      company: "Microsoft",
      phoneNumber: "(406) 555-0120",
      email: "kathryn@microsoft.com",
      country: "Curaçao",
      isActive: true,
    },
    {
      id: 7,
      customer_name: "Jacob Jones",
      company: "Yahoo",
      phoneNumber: "(208) 555-0112",
      email: "jacob@yahoo.com",
      country: "Brazil",
      isActive: true,
    },
    {
      id: 8,
      customer_name: "Kristin Watson",
      company: "Facebook",
      phoneNumber: "(704) 555-0127",
      email: "kristin@facebook.com",
      country: "Åland Islands",
      isActive: false,
    },
  ];
  return (
    <PageWrapper>
      <div className="flex flex-col sm:flex sm:flex-col md:flex md:flex-col lg:flex lg:flex-col xl:flex xl:flex-col gap-[1rem] md:gap-[2rem] lg:gap-[3rem]">
        <div className="flex justify-between items-center">
          <h2 className="font-normal text-[16px] md:text-3xl lg:text-3xl leading-9">
            Hello Evano{" "}
            <span role="img" aria-label="wave">
              &#128075;
            </span>
          </h2>
          <div className="px-2 rounded-md hidden md:flex lg:flex items-center bg-white">
            <CiSearch className="h-6 w-6 font-bold" />
            <input
              type="text"
              placeholder="Search"
              className="border-none outline-none p-2 text-sm text-[#B5B7C0]"
            />
          </div>
        </div>
        {/* demo details */}
        <div className="flex flex-col sm:gap-3 md:flex-row md:gap-3 lg:flex-row lg:gap-3 xl:flex-row xl:gap-3 justify-between items-center rounded-xl py-4 px-2 md:p-6 lg:p-8 bg-white shadow-lg">
          <div className="flex justify-between items-center gap-3 md:border-0 md:pr-0 lg:border-r lg:pr-16">
            <div className="rounded-full bg-gradient-to-b from-[#D3FFE7] via-[100%] to-[#EFFFF6] p-2 md:p-3 lg:p-5">
              <LuUsers2 className="w-10 h-10 text-[#00AC4F]" />
            </div>
            <div className="flex flex-col items-start gap-1">
              <p className="text-sm text-[#ACACAC] leading-5">Members</p>
              <h1 className="font-semibold text-xl md:text-2xl lg:text-2xl leading-8 text-[#333333]">
                5,423
              </h1>
              <p className="flex items-center gap-1 text-[#292D32] text-xs leading-4">
                <RiArrowUpLine className="text-green-500 w-5 h-5" />
                <span className="text-green-500">16%</span>
                this month
              </p>
            </div>
          </div>

          <div className="flex justify-between items-center gap-3 md:border-0 md:pr-0 lg:border-r lg:pr-16">
            <div className="rounded-full bg-gradient-to-b from-[#D3FFE7] via-[100%] to-[#EFFFF6] p-2 md:p-3 lg:p-5">
              <RiUserFollowLine className="w-10 h-10 text-[#00AC4F]" />
            </div>
            <div className="flex flex-col items-start gap-1">
              <p className="text-sm text-[#ACACAC] leading-5">
                Total Customers
              </p>
              <h1 className="font-semibold text-xl md:text-2xl lg:text-2xl leading-8 text-[#333333]">
                1,893
              </h1>
              <p className="flex items-center gap-1 text-[#292D32] text-xs leading-4">
                <RiArrowDownLine className="text-red-500 w-5 h-5" />
                <span className="text-red-500">1%</span>
                this month
              </p>
            </div>
          </div>

          <div className="flex justify-between items-center gap-3">
            <div className="rounded-full bg-gradient-to-b from-[#D3FFE7] via-[100%] to-[#EFFFF6] p-2 md:p-3 lg:p-5">
              <PiDesktopLight className="w-10 h-10 text-[#00AC4F]" />
            </div>
            <div className="flex flex-col items-start gap-1">
              <p className="text-sm text-[#ACACAC] leading-5">Active Now</p>
              <h1 className="font-semibold text-xl md:text-2xl lg:text-2xl leading-8 text-[#333333]">
                189
              </h1>
              <p className="flex items-center gap-1 text-[#292D32] text-xs leading-4">
                <RiArrowUpLine className="text-green-500 w-5 h-5" />
                <span className="text-green-500">16%</span>
                this month
              </p>
            </div>
          </div>
        </div>

        {/* data table */}
        <div className="flex flex-col gap-4 bg-white p-2 md:p-3 lg:p-10 lg:py-9 rounded-xl overflow-y-auto shadow-lg">
          {/* all customers */}
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-2">
              <h2 className="text-[22px] md:text-2xl lg:text-3xl leading-[33px] font-[600]">
                All Customers
              </h2>
              <p className="text-[14px] font-[400] text-[#16C098]">
                Active Members
              </p>
            </div>
            {/* search and sort by */}
            <div className="flex gap-3">
              <div className="px-2 rounded-md hidden md:flex lg:flex items-center bg-[#F9FBFF]">
                <CiSearch className="h-6 w-6 font-bold" />
                <input
                  type="text"
                  placeholder="Search"
                  className="border-none outline-none p-2 text-[12px] text-[#B5B7C0] w-[216px] bg-[#F9FBFF]"
                />
              </div>
              <div className="px-2 rounded-md hidden md:flex lg:flex items-center bg-[#F9FBFF]">
                <p className="text-[12px] text-[#7E7E7E]">Sort by:</p>
                <select
                  className="border-none outline-none p-2 text-[12px] text-black w-[154px] bg-[#F9FBFF]"
                  name=""
                  id="">
                  <option value="">Newest</option>
                  <option value="">Name</option>
                  <option value="">Order</option>
                </select>
              </div>
            </div>
          </div>
          {/* table section */}
          <table className="table-auto md:w-full md:overflow-x-scroll lg:w-full ">
            <thead className="border-b-2 border-gray-200">
              <tr className="text-[#B5B7C0] text-[14px]">
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Customer Name
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Company
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Phone Number
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Email
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Country
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((data, i) => (
                <tr key={i} className={`text-[#333333] hover:bg-gray-100`}>
                  <td className="text-[14px] py-3 px-2">
                    {data.customer_name}
                  </td>
                  <td className="text-[14px] py-4 px-2">{data.company}</td>
                  <td className="text-[14px] py-4 px-2">{data.phoneNumber}</td>
                  <td className="text-[14px] py-4 px-2">{data.email}</td>
                  <td className="text-[14px] py-4 px-2">{data.country}</td>
                  <td className="text-[14px] py-4 px-2 flex justify-center">
                    {data.isActive ? (
                      <span className="border border-[#008767] font-[500] bg-[#16C09861] w-[80px] text-[14px] py-1 px-4 rounded-[3px] text-[#008767]">
                        Active
                      </span>
                    ) : (
                      <span className="border border-[#DF0404] text-center font-[500] bg-[#FFC5C5] w-[80px] text-[14px] py-1 px-4 rounded-[3px] text-[#DF0404]">
                        Inactive
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </PageWrapper>
  );
}
export default Customers;

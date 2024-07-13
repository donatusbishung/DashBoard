import React from "react";
import SideBar from "../components/SideBar";

function PageWrapper({ children }) {
  return (
    <div className="flex w-full sideBar__section h-screen">
      <div className="h-full">
        <SideBar />
      </div>
      <div className="flex-grow bg-gradient-to-b from-[#f3f8f6] via-[#EFFFF6] via-100% to-[#EFFFF6] to-100% w-[75%] px-6 md:px-8 lg:px-16 py-5 md:py-8 lg:py-10 h-screen overflow-y-scroll">
        {children}
      </div>
    </div>
  );
}

export default PageWrapper;

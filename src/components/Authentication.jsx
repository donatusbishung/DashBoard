import { useState, useEffect } from "react";
import Register from "./Register";
import Login from "./Login";
import { BiX } from "react-icons/bi";
import { useParams, useLocation } from "react-router-dom";

function Authentication() {
  const location = useLocation();

  const [view, setView] = useState("register");
  const [step, setStep] = useState(1);
  useEffect(() => {
    if (location.pathname === "/login") {
      setView("login");
      setStep(1);
    }
  }, [location]);

  const handleRegister = () => {
    setView("register");
  };

  const handleLogin = () => {
    setView("login");
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  return (
    <div className="register_section h-[100vh] md:h-[100vh] lg:h-[100vh] flex flex-col justify-center items-center">
      <div className="bg-white shadow-2xl p-6 rounded-[24px] sm:w-[80%] md:w-[70%] lg:w-[50%] xl:w-[40%]">
        {step === 1 && (
          <nav className="flex justify-between">
            <div className="flex justify-between gap-8">
              <h3
                onClick={handleRegister}
                className={
                  view === "register"
                    ? "border-b-2 border-red-600 pb-3 cursor-pointer headerText"
                    : "opacity-30 cursor-pointer color-red headerText"
                }>
                Register
              </h3>
              <h3
                onClick={handleLogin}
                className={
                  view === "login"
                    ? "border-b-2 border-red-600 pb-3 cursor-pointer headerText"
                    : "opacity-30 cursor-pointer headerText"
                }>
                Login
              </h3>
            </div>
            <BiX
              className="cursor-pointer"
              style={{ width: "24px", height: "24px" }}
            />
          </nav>
        )}
        {step !== 1 && (
          <nav className="hidden">
            <div className="flex justify-between gap-8">
              <h3
                onClick={handleRegister}
                className={
                  view === "register"
                    ? "underline underline-offset-[12px] cursor-pointer headerText"
                    : "opacity-30 cursor-pointer color-red headerText"
                }>
                Register
              </h3>
              <h3
                onClick={handleLogin}
                className={
                  view === "login"
                    ? "underline underline-offset-[12px] cursor-pointer headerText"
                    : "opacity-30 cursor-pointer headerText"
                }>
                Login
              </h3>
            </div>
            <BiX
              className="cursor-pointer"
              style={{ width: "24px", height: "24px" }}
            />
          </nav>
        )}
        {view === "register" ? (
          <Register
            handleNext={handleNext}
            handlePrevious={handlePrevious}
            step={step}
          />
        ) : (
          <Login />
        )}
      </div>
    </div>
  );
}

export default Authentication;

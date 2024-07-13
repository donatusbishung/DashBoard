import { BiX } from "react-icons/bi";
import { Navigate, useNavigate, Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function SuccessfulReg({ handlePrevious, formData }) {
  const navigate = useNavigate();
  const { id } = useParams();
  return (
    <div className="flex flex-col p-0 gap-9">
      <div className="flex w-[502px] h-[296px] bg-[#EF498F24] rounded-tl-xl rounded-tr-xl">
        <img src="Image.png" alt="" className="w-[378px]" />
        <BiX
          onClick={handlePrevious}
          className="cursor-pointer items-end"
          style={{ width: "24px", height: "24px" }}
        />
      </div>
      <div className="px-8">
        <h1 className="text-[44px] font-[700] leading-10">
          You are successfully registered!
        </h1>
      </div>
      <div className="px-8 flex justify-center items-center">
        <Link to={`/login`}>
          <button className="bg-blue-hover rounded-xl text-white p-3 w-full">
            Go to Login
          </button>
        </Link>
      </div>
    </div>
  );
}

export default SuccessfulReg;

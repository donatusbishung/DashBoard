import { BiX } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function SuccessfulReg({ handlePrevious }) {
  const { id } = useParams();

  return (
    <div className="flex flex-col justify-center p-0 md:px-0 gap-6 md:gap-9 pb-6">
      <div className="flex w-full md:w-[574px] lg:w-[546px] h-[390px] pt-6 px-6 bg-[#EF498F24] rounded-tl-xl rounded-tr-xl">
        <img src="Image.png" alt="" className="w-[100%] h-full object-cover" />
        <BiX
          onClick={handlePrevious}
          className="cursor-pointer items-end"
          style={{ width: "24px", height: "24px" }}
        />
      </div>
      <div className="px-4 md:px-8">
        <h1 className="text-[44px] font-[700] leading-10">
          You are successfully registered!
        </h1>
      </div>
      <div className="flex justify-center items-center">
        <Link to={`/login`}>
          <button className="bg-blue-hover rounded-xl text-white p-3 w-full md:w-auto">
            Go to Login
          </button>
        </Link>
      </div>
    </div>
  );
}

export default SuccessfulReg;

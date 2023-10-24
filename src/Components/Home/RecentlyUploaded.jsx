import PropTypes from "prop-types";
import { BathIcon, BedIcon, LineImg, LocationIcon } from "../../assets";
import { useNavigate } from "react-router-dom";

const RecentlyUploaded = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div className="laptop:grid tablet:mx-4 laptop:mx-0 tablet:grid laptop:grid-cols-3 grid-cols-1 tablet:grid-cols-2 tablet:gap-6 laptop:gap-8">
      {data?.map((item) => {
        return (
          <div
            key={item?.id}
            className="slide bg-white p-0 rounded-[1rem] mb-4"
          >
            <img src={item?.image} className=" w-full" alt="bungalow-1" />
            <span className="flex mt-4 mx-2 justify-between">
              <p className="text-[1rem]">{item?.house_type}</p>
              <p className="text-[1rem] text-[#010886] font-bold">
                ₦{item?.amount}
              </p>
            </span>

            <span className="flex laptop:gap- gap-[0.125rem] mt-4 px-2 justify-between">
              <span className=" flex">
                <img
                  src={BedIcon}
                  className="p-2 bg-[#EDF1F9] mr-1 rounded-full"
                  alt="bed-icon"
                />
                <p className="text-[#515B6F] text-[0.875rem] font-normal my-auto">
                  {item?.extras[0]?.value}
                </p>
              </span>

              <span className=" flex">
                <img
                  src={BathIcon}
                  className="p-2 bg-[#EDF1F9] mr-1 rounded-full"
                  alt="bath-icon"
                />
                <p className="text-[#515B6F] text-[0.875rem] font-normal my-auto">
                  {item?.extras[1]?.value}
                </p>
              </span>

              <span className="flex">
                <img
                  src={BedIcon}
                  className="p-2 bg-[#EDF1F9] mr-1 rounded-full"
                  alt="bed-icon"
                />
                <p className="text-[#515B6F] text-[0.875rem] font-normal my-auto">
                  {item.slot}
                </p>
              </span>
            </span>

            <img src={LineImg} className="mt-5 mb-4 w-full" alt="line" />

            <span className="flex justify-between mr-2">
              <span className="flex">
                <img
                  src={LocationIcon}
                  className="pb-6 ml-3 w-5 opacity-50"
                  alt="location-pin"
                />
                <p className="text-[#515B6F] ml-4 text-[0.875rem] font-normal">
                  {item.location}
                </p>
              </span>

              <span
                onClick={() => {
                  navigate(`/details/${item?.id}`);
                }}
                className="inline-block cursor-pointer px-6 py-1 rounded-md border-none normal-case font-normal ml-[rem] laptop:ml-[rem] hover:bg-[#010886] bg-[#010886eb]  text-[white] text-[0.875rem]"
              >
                View
              </span>
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default RecentlyUploaded;

RecentlyUploaded.propTypes = {
  data: PropTypes.array,
};

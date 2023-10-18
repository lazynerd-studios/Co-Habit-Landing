import { BlueCircle, LeftArrow } from "../../assets";
import PropTypes from "prop-types";

const FindByLocation = ({ data }) => {
  return (
    <>
      <div className="grid grid-cols-1 gap-6 laptop:grid-cols-3 tablet:grid-cols-2 tablet:mx-3 laptop:mx-0 laptop:gap-8">
        {data?.map((item, index) => {
          return (
            <div
              key={index}
              className="border-2 rounded-md laptop:mt-0 p-4 laptop:w-auto tablet:w-full w-[97%] mx-auto laptop:mx-0 tablet:mx-0"
            >
              {/* <img
                src={item?.image}
                className="laptop:w-[] w-full"
                alt="building-2"
              /> */}

              <div className="flex pt-4 justify-between">
                <span className="laptop:mr-[rem] mr-[rem]">
                  <p className="text-[#010886] font-normal leading-[1.6rem]">
                    {item.title}
                  </p>
                  <p className="text-[#010886] font-normal leading-[1.4rem] text-[0.875rem]">
                    {item.count} Properties
                  </p>
                </span>
                <span className="laptop:ml-[]">
                  <img
                    src={LeftArrow}
                    className="absolute laptop:ml-3 my-3 mx-3 laptop:w-[] w-[]"
                    alt="arrow-left"
                  />
                  <img
                    src={BlueCircle}
                    className="laptop:w-[] w-[]"
                    alt="blue-circle"
                  />
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full mt-8 text-center relative">
        <p className="btn my-6 normal-case text-[#010886] font-bold leading-[1.8rem] rounded-none border border-[#B8C9C9] bg-[#e7faf4e5] hover:bg-[#E7FAF4] hover:border">
          Browse More locations
        </p>
      </div>
    </>
  );
};

export default FindByLocation;

FindByLocation.propTypes = {
  data: PropTypes.array,
};

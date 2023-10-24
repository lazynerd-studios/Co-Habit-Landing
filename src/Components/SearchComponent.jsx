/* eslint-disable react/prop-types */
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { GrLocation } from "react-icons/gr";
import { locationOptions } from "./SideBar/SideBar";
import { useLocation, useNavigate } from "react-router-dom";

const SearchComponent = ({
  setSearchValue,
  stateQuery,
  setStateQuery,
  locations,
  setLocations,
}) => {
  const searchContent = sessionStorage.getItem("searchContent");
  const stateContent = sessionStorage.getItem("stateContent");
  const [stateValue, setStateValue] = useState(stateContent ?? "");
  const [searchQuery, setSearchQuery] = useState(searchContent ?? "");

  const location = useLocation();
  const navigate = useNavigate();

  console.log(location.pathname);

  const handleSearching = () => {
    setSearchValue(searchQuery);
    if (stateValue) {
      setLocations([...locations, stateValue]);
    } else {
      // Handle the case where the stateValue is undefined
      console.error("Please select a valid location");
    }
    if (location.pathname === "/") {
      sessionStorage.setItem("searchContent", searchQuery);
      sessionStorage.setItem("stateContent", stateQuery);
      navigate("/listing");
    }
  };

  const handleStateSelect = (event) => {
    setStateQuery(event.target.value);
    const selectedIndex = event.target.selectedIndex;
    const selectedOption = locationOptions[selectedIndex];
    setStateValue(selectedOption);
  };

  console.log(stateQuery);

  return (
    <div className="mt-5 flex flex-col gap-2 w-full laptop:w-[85%] laptop:mx-auto p-[1rem] bg-white rounded-md mb-3 ">
      <div className="flex w-full items-center gap-2">
        <BiSearch size={25} />
        <input
          type="text"
          value={searchQuery}
          className="border-b-[#7C8493]  outline-none  p-2 border-2 border-t-white border-x-white text-[#7C8493] w-full"
          autoComplete="true"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* location */}
      <div className="flex items-center gap-2 w-full ">
        <GrLocation size={25} />
        <select
          className=" p-2 border-b-[#7C8493] border-2 border-t-white border-x-white text-[#7C8493] w-full outline-none"
          name="Location"
          value={stateQuery}
          onChange={handleStateSelect}
        >
          {locationOptions.map((item) => (
            <option key={item.id} className="py-4" value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </div>

      {/* search button */}
      <button
        onClick={handleSearching}
        className="btn rounded-none w-full mt-3 laptop:w-auto normal-case py-2  mb-4 font-bold text-[1.125rem] bg-[#010886f1] hover:bg-[#010886] text-white hover:text-white"
      >
        Search
      </button>
    </div>
  );
};

export default SearchComponent;

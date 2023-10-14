import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BiSearch } from "react-icons/bi";
import { GrLocation } from "react-icons/gr";
import { FiFilter } from "react-icons/fi";

import Scribble from "../../assets/scribble-lines.svg";
import BathIcon from "../../assets/u_bath.svg";
import BedIcon from "../../assets/u_bed-double.svg";
import Line from "../../assets/Line 9.svg";
import LocationPin from "../../assets/u_location-pin-alt.svg";

import {
  SidebarWithContentSeparator,
  locationOptions,
} from "../SideBar/SideBar";

import HeaderBg from "../../assets/header-BG.png";
import MobileLines from "../../assets/Mobile lines.png";
import { useGetListingsQuery } from "../../api/listingApi";

import { Pagination } from "@mui/material";

const animationConfiguration = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const Listings = () => {
  // const [index, setIndex] = useState(0);
  const [showFilter, setshowFilter] = useState(false);

  const [searchValue, setSearchValue] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const [propertyType, setPropertyType] = useState([]);
  const [budgets, setBudgets] = useState([]);

  const [locations, setLocations] = useState([]);
  const [stateValue, setStateValue] = useState();
  const [stateQuery, setStateQuery] = useState();

  const [areas, setAreas] = useState([]);

  const [houseData, setHouseData] = useState([]);
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [path, setPath] = useState(`listings?page=${page}&count=10`);

  let updatedPath = `listings?page=${page}&count=10`;
  const { data, isSuccess, isLoading, isError, error } = useGetListingsQuery({
    path,
  });

  const [loading, setLoading] = useState(isLoading);
  useEffect(() => {
    if (isSuccess) {
      setLoading(true);
      setHouseData(data?.data);
      setPage(data?.meta?.current_page);
      setRowsPerPage(data?.meta?.per_page);
      setLoading(false);
    }
    if (isError) {
      console.error(error);
    }
  }, [isSuccess, isError, data, error]);

  const generateUpdatedQueryString = () => {
    const queryParams = [];

    queryParams.push(`page=${page}`);
    queryParams.push(`count=${rowsPerPage}`);

    if (searchValue) {
      queryParams.push(`keyword=${searchValue}`);
    }
    const filterParams = [
      { param: "budget[]", values: budgets },
      { param: "property_type[]", values: propertyType },
      { param: "state[]", values: locations },
      { param: "area[]", values: areas },
    ];

    for (const filter of filterParams) {
      const { param, values } = filter;

      if (values) {
        const filteredValues = Array.isArray(values)
          ? values.map((value) => value.value || value.id).filter(Boolean)
          : [values].map((value) => value.value || value.id).filter(Boolean);

        if (filteredValues.length > 0) {
          const encodedValues = filteredValues
            .map((value) => encodeURIComponent(value))
            .join(`&${param}=`);
          const decodedValue = decodeURIComponent(encodedValues);
          queryParams.push(`${param}=${decodedValue}`);
        }
      }
    }
    const updatedPath = `listings?${queryParams.join("&")}`;
    console.log(updatedPath);
    return updatedPath;
  };

  useEffect(() => {
    if (searchValue || page || rowsPerPage) {
      setPath(updatedPath);
    }
  }, [searchValue, page, rowsPerPage, updatedPath]);

  useEffect(() => {
    const updatedPath = generateUpdatedQueryString();
    setPath(updatedPath);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue, page, budgets, propertyType, locations, areas]);

  const handleStateSelect = (event) => {
    setStateQuery(event.target.value);
    const selectedIndex = event.target.selectedIndex;
    const selectedOption = locationOptions[selectedIndex];
    setStateValue(selectedOption);
  };

  const handleSearching = () => {
    setSearchValue(searchQuery);
    if (stateValue) {
      setLocations([...locations, stateValue]);
    } else {
      // Handle the case where the stateValue is undefined
      console.error("Please select a valid location");
    }
  };

  const handleChangePage = (event, newPage) => {
    event.preventDefault();
    setPage(newPage);

    // Generate the updated path with the new page number
    const updatedPath = generateUpdatedQueryString();
    setPath(updatedPath);
  };

  return (
    <section className="top-0">
      <motion.div
        variants={animationConfiguration}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 3 }}
      >
        {/* bg-[#f8f8fd] */}
        <div
          className="hero listing-hero laptop:min-h-[screen] min-h-screen bg-center bg-contain"
          style={{ backgroundImage: `url(${HeaderBg})` }}
        >
          {/* mobile hero */}
          <div className="hero-content laptop:hidden tablet:hidden text-center mt-10 laptop:mt-auto laptop:mx-[8rem]">
            <div className="w-auto laptop:mt-[7rem]">
              <h1 className="laptop:text-[3.125rem] tablet:text-[2.125rem] tablet:text-center laptop:text-center leading-[3.3rem] text-[3rem] text-left laptop:leading-[3.4375rem] font-bold uppercase text-[#25324B]">
                FIND YOUR PERFECT
              </h1>

              <h1 className="mx-auto laptop:text-[3rem] text-[2rem] text-left leading-[2.4rem] tablet:text-center laptop:text-center laptop:mb-6 font-bold laptop:leading-[3.4375rem] text-[#010886]">
                SHARED APARTMENT
              </h1>

              <div className="laptop:flex mt-8">
                <img
                  src={MobileLines}
                  className="laptop:hidden tablet:hidden"
                  alt="Mobile lines"
                />

                {/* full search bar */}
                {/* search */}
                <div className="laptop:absolute w-auto mt-9 laptop:-mt-8 laptop:flex laptop:mx-[10rem] laptop:w-[51%] rounded-md bg-white px-2 py-2 border-none">
                  {/* laptop:w-[65%] laptop:mx-[5rem] */}
                  <span className="flex">
                    {/* <img src={Search} className="laptop:w-[13%] p-1 mr-1" alt="search" /> */}
                    <span className="my-3 mx-2">
                      <BiSearch size={25} />
                    </span>
                    <input
                      type="text"
                      value={searchQuery}
                      className="border-b-[#7C8493] laptop:w-auto w-[77%] outline-none mr-[2rem] p-2 border-2 border-t-white border-x-white text-[#7C8493]"
                      placeholder="Apartment/Workspace"
                      autoComplete="true"
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </span>

                  {/* location */}
                  <span className="flex ">
                    {/* <img src={Location} className="laptop:w-[13%] p-1 mr-1" alt="location" /> */}
                    <span className="my-3 mx-2">
                      <GrLocation size={25} />
                    </span>
                    <select
                      className="laptop:w-auto laptop:mr-[] w-[78%] p-2 outline-none border-b-[#7C8493] border-2 border-t-white border-x-white text-[#7C8493]"
                      name="Location"
                      value={stateQuery}
                      onChange={handleStateSelect}
                    >
                      {locationOptions.map((item) => (
                        <option
                          key={item.id}
                          className="py-4"
                          value={item.value}
                        >
                          {item.label}
                        </option>
                      ))}
                    </select>
                  </span>

                  {/* search button */}
                  <button
                    onClick={handleSearching}
                    className="btn rounded-none w-[80%] mt-3 laptop:w-auto normal-case py-2 mx-10 mb-4 font-bold text-[1.125rem] bg-[#010886f1] hover:bg-[#010886] text-white hover:text-white"
                  >
                    Search
                  </button>
                </div>
                {/* end of search */}
              </div>
            </div>
          </div>
          {/* end of mobile hero */}

          <div className="laptop:mt-0 hidden laptop:block tablet:block laptop:mx-[2rem]">
            <div className="text-center">
              <h1 className=" text-[2.125rem] laptop:mt-0 mt-8 tablet:mt-0 laptop:leading-[3.3rem] font-bold text-[#25324B]">
                <span className="text-5xl">Find your &nbsp;</span>
                <span className="block laptop:inline ">
                  <span className="text-5xl text-[#010886] leading-[3.4375rem]">
                    Shared Apartment
                  </span>
                  <img
                    src={Scribble}
                    className="absolute laptop:mx-[26rem] mx-8 laptop:w-auto w-[80%]"
                    alt="scribble-lines"
                  />
                </span>
              </h1>

              <p className=" leading-[1.6rem] mt-6 mb-10">
                Our mission is to help people find affordable homes with a
                seamless and rewarding shared experiences
              </p>
              {/* <button className="py-2 px-6 font-bold text-[1.125rem] bg-[#010886f1] hover:bg-[#010886] text-white hover:text-white">Search</button> */}
            </div>

            {/* search */}
            <div className="mt-[] laptop: laptop:flex justify-between laptop:mx-[] rounded-md bg-white p-2 px-4 border-2 border-none">
              {/* laptop:w-[65%] laptop:mx-[5rem] */}
              <span className="flex">
                <span className="my-3 mx-2">
                  <BiSearch size={25} />
                </span>

                <input
                  type="text"
                  value={searchQuery}
                  className="border-b-[#7C8493] w-full  mr-[2rem] laptop:px-0 px-2 py-2 border-2 border-t-white border-x-white outline-none text-[#7C8493]"
                  autoComplete="true"
                  onChange={(e) => setSearchQuery(e.target.value)}
                  size={40}
                />
              </span>
              {/* location */}
              <span className="flex w-auto ">
                <span className="my-3 mx-2">
                  <GrLocation size={25} />
                </span>

                {/* <img src={Location} className="laptop:w-[13%] p-1 mr-1" alt="location" /> */}
                <select
                  className="laptop:w-full pr-[12rem] w-[78%] tablet:w-[90%] py-2 border-b-[#7C8493] border-2 border-t-white border-x-white outline-none text-[#7C8493]"
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
              </span>

              <button
                onClick={handleSearching}
                className="btn laptop:mx-[1rem] tablet:mx-[4.5rem] mx-[2rem] rounded-none w-[80%] mt-3 laptop:w-auto laptop:mt-auto normal-case py-2 px-6 font-bold text-[1.125rem] bg-[#010886f1] hover:bg-[#010886] text-white hover:text-white"
              >
                Search
              </button>
            </div>
            {/* end of search */}

            {/* <p className="text-[#515B6F] py-4 laptop:mx-1 mx-8 w-auto">
              Popular : Apartment, Bungalow, 2 Bedroom
            </p> */}
          </div>
        </div>

        {/* listings */}
        <div className="bg-white flex py-8 px-4  laptop:mx-[7rem]">
          {/* sidebar */}
          <span className="-mr- laptop:-ml-8 hidden laptop:flex tablet:hidden">
            <SidebarWithContentSeparator
              setAreas={setAreas}
              areas={areas}
              locations={locations}
              setLocations={setLocations}
              budgets={budgets}
              setBudgets={setBudgets}
              setPropertyType={setPropertyType}
              propertyTypes={propertyType}
              stateQuery={stateQuery}
            />
          </span>

          <span className="-mr- mt-[3rem] laptop:hidden absolute">
            {showFilter && (
              <SidebarWithContentSeparator
                setAreas={setAreas}
                areas={areas}
                locations={locations}
                setLocations={setLocations}
                budgets={budgets}
                setBudgets={setBudgets}
                setPropertyType={setPropertyType}
                propertyTypes={propertyType}
                stateQuery={stateQuery}
              />
            )}
          </span>
          {/* end of sidebar */}

          {/* all property */}
          <div className="laptop:px px-0 tablet:mx-auto  laptop:ml-10 mx-0">
            <span className="flex justify-between">
              <p className="text-[#25324B] mb-4 font-bold text-[1.5rem] leading-[1.8rem]">
                All Property
              </p>
              {/* filter icon */}
              <span
                className="flex gap-2 laptop:hidden tablet:hidden cursor-pointer"
                onClick={() => setshowFilter(!showFilter)}
              >
                <FiFilter size={22} />
                Filter
              </span>
            </span>

            <span className="laptop:hidden tablet:flex py-4 text-[#515B6F] font-medium leading-[1.6rem]">
              Take a deep dive and browse apartment for rent, original
              neighborhood photos, resident reviews and local insights to find
              what is right for you.
            </span>

            <span className="laptop:flex items-center justify-between hidden tablet:block laptop:justify-between w-full mb-6">
              <p className="text-[#25324B] font-normal text-base leading-[1.6rem]">
                Showing {data?.meta?.total} results
              </p>
            </span>

            {/* properties */}
            <div className="grid grid-cols-1 mt-6 gap-6 laptop:grid-cols-3 tablet:grid-cols-2 laptop:gap-4">
              {loading ? (
                "Loading"
              ) : (
                <>
                  {houseData?.length === 0 ? (
                    <span className="mt-2 text-[18px] font-medium">
                      No Results{" "}
                    </span>
                  ) : (
                    houseData?.map((item, index) => {
                      return (
                        <Link to="/details" key={index}>
                          <div className=" border-2 rounded-[1rem]">
                            <img
                              src={item.image}
                              className="w-full"
                              alt="bungalow-1"
                            />
                            <span className="flex mt-2 mx-3 justify-between">
                              <p className="text-[1rem]">{item?.house_type}</p>
                              <p className="text-[1rem] text-[#010886] font-bold">
                                {item?.amount}
                              </p>
                            </span>

                            <span className="flex laptop:gap-8 justify-between gap-[0.125rem] mt-4 mx-2">
                              <span className="mx-1 flex">
                                <img
                                  src={BedIcon}
                                  className="p-2 bg-[#EDF1F9] mr-1 rounded-full"
                                  alt="bed-icon"
                                />
                                <p className="text-[#515B6F] text-[0.875rem] font-normal my-auto">
                                  {item?.extras[0]?.value}
                                </p>
                              </span>

                              <span className="mx-1 flex">
                                <img
                                  src={BathIcon}
                                  className="p-2 bg-[#EDF1F9] mr-1 rounded-full"
                                  alt="bath-icon"
                                />
                                <p className="text-[#515B6F] text-[0.875rem] font-normal my-auto">
                                  {item?.slot}
                                </p>
                              </span>
                            </span>

                            <img
                              src={Line}
                              className="mt-3 mb-3 w-full"
                              alt="line"
                            />

                            <span className="flex">
                              <img
                                src={LocationPin}
                                className="pb-5 ml-3 w-5 opacity-50"
                                alt="location-pin"
                              />
                              <p className="text-[#515B6F] ml-4 text-[0.875rem] font-normal">
                                {item?.location}
                              </p>
                            </span>
                          </div>
                        </Link>
                      );
                    })
                  )}
                </>
              )}
            </div>
            {/* end of properties */}
          </div>

          {/* end of all property */}
        </div>
        {/* end of listings */}

        {/* Pagination controls */}
        <div className="flex justify-center space-x-2 my-6">
          <Pagination
            count={Math.ceil(data?.meta?.total / rowsPerPage)}
            page={page}
            onChange={handleChangePage}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Listings;

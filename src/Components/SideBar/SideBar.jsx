/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import {
  Card,
  Typography,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { MultiSelectTags } from "../../shared/Tags";
import {
  useGetAreasQuery,
  useGetBudgetsQuery,
  useGetHouseTypesQuery,
} from "../../api/listingApi";

export const locationOptions = [
  { value: "", label: "Select a Location", id: 1 },
  { value: "lagos", label: "Lagos", id: 2 },
  { value: "abuja", label: "Abuja", id: 3 },
];
export function SidebarWithContentSeparator({
  setLocations,
  locations,
  setAreas,
  areas,
  setPropertyType,
  propertyTypes,
  setBudgets,
  budgets,
  stateQuery,
}) {
  const [open, setOpen] = useState(1);

  const { data, isLoading, isError, error, isSuccess } =
    useGetHouseTypesQuery();
  //   const [propertyTypes, setPropertyType] = useState([]);
  const [propertyOptions, setPropertyOptions] = useState([]);

  const { data: areaData, isSuccess: areaSuccess } =
    useGetAreasQuery(stateQuery);
  const { data: budgetData, isSuccess: budgetSuccess } = useGetBudgetsQuery();
  const [areasOptions, setAreasOptions] = useState([]);
  const [budgetOptions, setBudgetOptions] = useState([]);
  useEffect(() => {
    if (isSuccess) {
      setPropertyOptions(data?.data);
    }
    if (isError) {
      console.log(error);
    }
    if (areaSuccess) {
      setAreasOptions(areaData?.data?.data);
    }
    if (budgetSuccess) {
      setBudgetOptions(budgetData?.data);
    }
  }, [
    isSuccess,
    data,
    isError,
    error,
    areaSuccess,
    areaData,
    budgetSuccess,
    budgetData,
  ]);

  // set useState above to '0' to close all on-load
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Card className="laptop:h-[calc(100vh-2rem)] tablet:h-[calc(100vh-2rem)] h-auto z-50 select-none laptop:mt-0 tablet:mt-[6rem] mt-[3.7rem] tablet:flex laptop:flex w-auto max-w-[20rem] p-4">
      <ul className="list-none w-[12rem]">
        <Accordion
          open={open === 1}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${
                open === 1 ? "rotate-180" : ""
              }`}
            />
          }
        >
          <li className="p-0" selected={open === 1}>
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className="border-b-0 p-3 mb-4"
            >
              <Typography
                color="blue-gray"
                className=" font-semibold leading-[1.6rem] text-[#25324B]"
              >
                Property Type
              </Typography>
            </AccordionHeader>
          </li>
          <AccordionBody
            className={`py-1 mb-4 transition duration-500 ease-linear ${
              open !== 1 ? "hidden" : ""
            }`}
          >
            {isLoading ? (
              "Loading"
            ) : (
              <MultiSelectTags
                options={propertyOptions}
                onSelectTag={setPropertyType}
                selectedTags={propertyTypes}
              />
            )}
          </AccordionBody>
        </Accordion>

        <hr className="my-2 border-blue-gray-50" />

        <Accordion
          open={open === 2}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${
                open === 2 ? "rotate-180" : ""
              }`}
            />
          }
        >
          <li className="p-0" selected={open === 2}>
            <AccordionHeader
              onClick={() => handleOpen(2)}
              className="border-b-0 p-3 mb-4"
            >
              <Typography
                color="blue-gray"
                className=" font-semibold leading-[1.6rem] text-[#25324B]"
              >
                Location
              </Typography>
            </AccordionHeader>
          </li>

          <AccordionBody
            className={`py-1 mb-4 transition duration-500 ease-linear ${
              open !== 2 ? "hidden" : ""
            }`}
          >
            <MultiSelectTags
              options={locationOptions}
              onSelectTag={setLocations}
              selectedTags={locations}
            />
          </AccordionBody>
        </Accordion>

        <hr className="my-2 border-blue-gray-50" />

        <Accordion
          open={open === 3}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${
                open === 3 ? "rotate-180" : ""
              }`}
            />
          }
        >
          <li className="p-0" selected={open === 3}>
            <AccordionHeader
              onClick={() => handleOpen(3)}
              className="border-b-0 p-3 mb-4"
            >
              <Typography
                color="blue-gray"
                className=" font-semibold leading-[1.6rem] text-[#25324B]"
              >
                Areas
              </Typography>
            </AccordionHeader>
          </li>

          <AccordionBody
            className={`py-1 mb-4 transition duration-500 ease-linear ${
              open !== 3 ? "hidden" : ""
            }`}
          >
            <MultiSelectTags
              options={areasOptions}
              onSelectTag={setAreas}
              selectedTags={areas}
            />
          </AccordionBody>
        </Accordion>

        <hr className="my-2 border-blue-gray-50" />

        <Accordion
          open={open === 4}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${
                open === 4 ? "rotate-180" : ""
              }`}
            />
          }
        >
          <li className="p-0" selected={open === 4}>
            <AccordionHeader
              onClick={() => handleOpen(4)}
              className="border-b-0 p-3 mb-4"
            >
              <Typography
                color="blue-gray"
                className=" font-semibold leading-[1.6rem] text-[#25324B]"
              >
                Budget
              </Typography>
            </AccordionHeader>
          </li>

          <AccordionBody
            className={`py-1 mb-4 transition duration-500 ease-linear ${
              open !== 4 ? "hidden" : ""
            }`}
          >
            <MultiSelectTags
              options={budgetOptions}
              onSelectTag={setBudgets}
              selectedTags={budgets}
            />
          </AccordionBody>
        </Accordion>
      </ul>
    </Card>
  );
}

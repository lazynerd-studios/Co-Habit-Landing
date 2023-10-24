import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { baseUrl } from "./apiConfig";

export const listingApi = createApi({
  reducerPath: "listing",
  baseQuery: fetchBaseQuery({
    baseUrl: `/api/`,
    prepareHeaders: (headers) => {
      headers.set("Accept", "application/json");
      return headers;
    },
  }),
  tagTypes: [
    "RecentlyUploaded",
    "Listings",
    "FindByLocation",
    "HouseTypes",
    "Budgets",
    "Areas",
    "SingleListings",
  ],
  endpoints: (builder) => ({
    getRecentlyUploaded: builder.query({
      query: () => "listings?order=asc&count=5&random=0",
      providesTags: ["RecentlyUploaded"],
    }),

    getFindByLocation: builder.query({
      query: () => `listings/areas?count=10&random=yes&level=major`,
      providesTags: ["FindByLocation"],
    }),

    getHouseTypes: builder.query({
      query: () => `get_house_type`,
      providesTags: ["HouseTypes"],
    }),
    getBudgets: builder.query({
      query: () => `get_house_budgets`,
      providesTags: ["Budgets"],
    }),
    getAreas: builder.query({
      query: (state) => `get_house_areas?state=${state}`,
      providesTags: ["Areas"],
    }),
    getListings: builder.query({
      query: ({ path }) => `${path}`,
      providesTags: ["Listings"],
    }),
    getSingleListings: builder.query({
      query: (id) => `listings/${id}`,
      providesTags: ["SingleListings"],
    }),
  }),
});

export const {
  useGetAreasQuery,
  useGetBudgetsQuery,
  useGetFindByLocationQuery,
  useGetHouseTypesQuery,
  useGetListingsQuery,
  useGetRecentlyUploadedQuery,
  useGetSingleListingsQuery,
} = listingApi;

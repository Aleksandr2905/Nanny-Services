import { createSelector } from "@reduxjs/toolkit";

export const selectNannies = (state) => state.nannies.nannies;

export const selectCurrentPage = (state) => state.nannies.currentPage;

export const selectLoadingNannies = (state) => state.nannies.isLoadingNannies;

export const selectFilterValue = (state) => state.filter.selectFilter;

const sortNannies = createSelector(
  [selectNannies, selectFilterValue],
  (nannies, selectValue) =>
    [...nannies].sort((a, b) => {
      const lastNameA = a.name.split(" ").pop() || "";
      const lastNameB = b.name.split(" ").pop() || "";
      switch (selectValue) {
        case "A to Z":
          return lastNameA.toLowerCase().localeCompare(lastNameB.toLowerCase());
        case "Z to A":
          return lastNameB.toLowerCase().localeCompare(lastNameA.toLowerCase());
        case "Less than 10$":
          return a.price_per_hour - b.price_per_hour;
        case "Greater than 10$":
          return b.price_per_hour - a.price_per_hour;
        case "Not popular":
          return a.rating - b.rating;
        case "Popular":
          return b.rating - a.rating;
        case "Show all":
          return 0;
        default:
          return 0;
      }
    })
);

export default sortNannies;

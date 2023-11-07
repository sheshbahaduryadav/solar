import React from "react";
import { HomeBanner } from "../components/Home/HomeBanner";
import { CategoriesProduct } from "../components/Home/CategoriesProduct";
import { SolarCuleBanner } from "../components/Home/SolarCuleBanner";
import { TotalViewed } from "../components/Home/TotalViewed";
import { SolarCuleProject } from "../components/Home/SolarCuleProject";

export const Home = () => {
  return (
    <>
      <HomeBanner />
      <CategoriesProduct />
      <SolarCuleBanner />
      <TotalViewed />
      <SolarCuleProject />
    </>
  );
};

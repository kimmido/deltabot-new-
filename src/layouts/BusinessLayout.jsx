import React, { useContext, useEffect, useState } from "react";
import PageHeading from "../components/Shared/PageHeading";
import { Outlet, useLocation } from "react-router-dom";
import { CategoryRoutesContext } from "../contexts/CategoryRoutesContext";
import { fetchData } from "../utils/fetchData";
import TabMenu from "../components/Layout/TabMenu";

function BusinessLayout() {
  const category = useContext(CategoryRoutesContext);
  const { pathname } = useLocation();
  const [routes, setRoutes] = useState({ items: [] });
  const [currentCategory, setCurrentCategory] = useState("");
  const [currentTab, setCurrentTab] = useState("");
  const [productData, setProductData] = useState({});

  useEffect(() => {
    const pathSegments = pathname.split("/").filter((segment) => segment);
    setRoutes(category[0].sub.find((sub) => sub.path == pathSegments[0]));
    setCurrentCategory(pathSegments[0]);
    setCurrentTab(pathSegments[1]);
  }, [pathname]);

  useEffect(() => {
    if (!currentCategory) return;

    const getData = async () => {
      try {
        const jsonData = await fetchData(
          `/json/product_${currentCategory}.json`
        ); // public 폴더의 JSON 경로
        setProductData(jsonData);
      } catch (error) {
        console.error("Failed to load data:", error);
      }
    };

    getData();
  }, [currentCategory]);

  return (
    <div className="BusinessLayout">
      <div className="container">
        <PageHeading title={currentCategory} currentPath={currentTab} />
        <TabMenu
          routes={routes}
          currentCategory={currentCategory}
          currentPath={currentTab}
        />
        <Outlet
          context={{ currentTab, productData: productData[currentTab] }}
        />
      </div>
    </div>
  );
}

export default BusinessLayout;

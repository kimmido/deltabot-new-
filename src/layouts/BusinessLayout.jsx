import React, { useEffect, useMemo, useState } from "react";
import PageHeading from "../components/UI/PageHeading";
import { Outlet, useLocation } from "react-router-dom";
import { fetchData } from "../utils/fetchData";
import TabMenu from "../components/UI/TabMenu";
import { category } from "../data/category";

function BusinessLayout() {
  const { pathname } = useLocation();
  const [productData, setProductData] = useState({});

  const pathSegments = useMemo(
    () => pathname.split("/").filter((segment) => segment),
    [pathname]
  );

  const currentCategory = pathSegments[0] ?? "";
  const currentTab = pathSegments[1] ?? "";

  const routes = useMemo(() => {
    return category[0].sub.find((sub) => sub.path == currentCategory) ?? {
      label: "",
      items: [],
    };
  }, [currentCategory]);

  useEffect(() => {
    if (!currentCategory) return;

    const getData = async () => {
      try {
        const jsonData = await fetchData(
          `/json/product-${currentCategory}.json`
        ); // public 폴더의 JSON 경로
        setProductData(jsonData);
      } catch (error) {
        console.error("Failed to load data:", error);
      }
    };

    getData();
  }, [currentCategory]);

  const outletContext = useMemo(() => {
    const data = productData[currentTab];
    return { currentTab, productData: data, routes };
  }, [currentTab, productData, routes]);

  return (
    <div className="BusinessLayout">
      <div className="container">
        <PageHeading title={routes.label} currentPath={currentTab} />
        <TabMenu
          routes={routes}
          currentCategory={currentCategory}
          currentPath={currentTab}
        />
        <Outlet context={outletContext} />
      </div>
    </div>
  );
}

export default BusinessLayout;

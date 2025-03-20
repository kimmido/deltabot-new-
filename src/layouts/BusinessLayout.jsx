import React, { useContext, useEffect, useMemo, useState } from "react";
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
    console.log("패스변경");
    setRoutes(category[0].sub.find((sub) => sub.path == pathSegments[0]));
    setCurrentCategory(pathSegments[0]);
    setCurrentTab(pathSegments[1]);
  }, [pathname]);

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
    return { currentTab, productData: productData[currentTab] };
  }, [currentTab, productData]);

  return (
    <div className="BusinessLayout">
      {console.log("BusinessLayout 렌더링")}
      <div className="container">
        <PageHeading title={currentCategory} currentPath={currentTab} />
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

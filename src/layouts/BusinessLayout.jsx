import React, { useEffect, useMemo, useState } from "react";
import PageHeading from "../components/UI/PageHeading";
import { Outlet } from "react-router-dom";
import { fetchData } from "../utils/fetchData";
import TabMenu from "../components/UI/TabMenu";
import { category } from "../data/category";
import usePathSegments from "../hooks/usePathSegments";

function BusinessLayout() {
  const { rootSegment, subSegment } = usePathSegments();
  const [productData, setProductData] = useState({});

  const routes = useMemo(() => {
    return (
      category[0].sub.find((sub) => sub.path == rootSegment) ?? {
        label: "",
        items: [],
      }
    );
  }, [rootSegment]);

  useEffect(() => {
    if (!rootSegment) return;

    const getData = async () => {
      try {
        const jsonData = await fetchData(`/json/product-${rootSegment}.json`); // public 폴더의 JSON 경로
        setProductData(jsonData);
      } catch (error) {
        console.error("Failed to load data:", error);
      }
    };

    getData();
  }, [rootSegment]);

  const outletContext = useMemo(() => {
    const data = productData[subSegment];
    return { currentTab: subSegment, productData: data, routes };
  }, [subSegment, productData, routes]);

  return (
    <div className="BusinessLayout">
      <div className="container">
        <PageHeading title={routes.label} />
        <TabMenu routes={routes} />
        <Outlet context={outletContext} />
      </div>
    </div>
  );
}

export default BusinessLayout;

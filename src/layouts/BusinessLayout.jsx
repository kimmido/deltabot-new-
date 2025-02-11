import React, { useContext, useEffect, useState } from "react";
import PageHeading from "../components/Shared/PageHeading";
import { useLocation, useNavigate } from "react-router-dom";
import { CategoryRoutesContext } from "../contexts/CategoryRoutesContext";
import Business from "../pages/Business/Business";
import { fetchData } from "../utils/fetchData";

function BusinessLayout() {
  const category = useContext(CategoryRoutesContext);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [routes, setRoutes] = useState({ items: [] });
  const [currentCategory, setCurrentCategory] = useState("");
  const [currentPath, setCurrentPath] = useState("");
  const [productData, setProductData] = useState({});

  useEffect(() => {
    const pathSegments = pathname.split("/").filter((segment) => segment);
    setRoutes(category[0].sub.find((sub) => sub.path == pathSegments[0]));
    setCurrentCategory(pathSegments[0]);
    setCurrentPath(pathSegments[1]);
    console.log(pathSegments[1]);
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

  const handleTabChange = (currentCategory, path) => {
    navigate(`/${currentCategory}/${path}`);
  };

  return (
    <div className="BusinessLayout">
      <div className="container">
        <PageHeading
          title={routes.label}
          currentPath={currentPath}
          video={true}
        />
        <div className="overflow_hidden">
          <div
            className="parent-tab"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {routes.items.map((route) => (
              <button
                key={route.path}
                className={`parent-tab__item ${
                  currentPath === route.path ? "active" : ""
                }`}
                onClick={() => handleTabChange(currentCategory, route.path)}
              >
                {route.label}
              </button>
            ))}
          </div>
        </div>
        <Business
          currentPath={currentPath}
          productData={productData[currentPath]}
        />
      </div>
    </div>
  );
}

export default BusinessLayout;

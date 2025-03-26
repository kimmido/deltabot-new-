import { useEffect } from "react";
import { useMap } from "react-leaflet";

function RecenterMap({ position }) {
  const map = useMap();
  useEffect(() => {
    map.setView(position, map.getZoom()); // 지도 중심을 새로운 좌표로 이동
  }, [position, map]);
  return null;
}

export default RecenterMap;

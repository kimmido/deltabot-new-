import { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  SVGOverlay,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { fetchData } from "../../../utils/fetchData";
import RecenterMap from "./RecenterMap";

// 마커 아이콘 설정
const customIcon = new L.Icon({
  iconUrl: "/images/logo-symbol.png", // 로고 이미지 (public 폴더에 logo.png 추가)
  iconSize: [40, 40], // 아이콘 크기
  iconAnchor: [20, 40], // 아이콘 기준점
  popupAnchor: [0, -40], // 팝업 위치 조정
});

function Map() {
  const [position, setPosition] = useState([37.46715, 126.8268]);
  const bounds = [
    [37.4671, 126.826],
    [37.4672, 126.827],
  ];

  return (
    <MapContainer className="Map" center={position} zoom={15}>
      {/* 지도 스타일 (타일 레이어) */}
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <SVGOverlay attributes={{ stroke: "red" }} bounds={bounds}>
        <rect x="0" y="0" width="100%" height="100%" fill="blue" />
        <circle r="5" cx="10" cy="10" fill="red" />
        <text x="50%" y="50%" stroke="white">
          text
        </text>
      </SVGOverlay>

      <RecenterMap position={position} />

      {/* 마커 표시 */}
      <Marker position={position} icon={customIcon}>
        <Popup>골든IT타워</Popup>
        {/* <Tooltip direction="bottom" offset={[0, 20]} opacity={1}>
          permanent Tooltip for Rectangle
        </Tooltip> */}
      </Marker>
    </MapContainer>
  );
}

export default Map;

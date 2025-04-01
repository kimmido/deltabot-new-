// import { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  // SVGOverlay,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
// import { fetchData } from "../../../utils/fetchData";
import RecenterMap from "./RecenterMap";

// 마커 아이콘 설정
const customIcon = new L.Icon({
  iconUrl: "/images/branding/marker-map.png", // 로고 이미지 (public 폴더에 logo.png 추가)
  iconSize: [40, 51], // 아이콘 크기
  iconAnchor: [20, 50], // 아이콘 기준점
  popupAnchor: [0, -50], // 팝업 위치 조정
});

function Map() {
  const position = [37.46715, 126.8268];
  const bounds = [
    [37.46715, 126.826], // 하, 좌
    [37.4672, 126.827], // 상, 우
  ];

  return (
    <MapContainer className="Map" center={position} zoom={16}>
      {/* 지도 스타일 (타일 레이어) */}
      <TileLayer url="https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}.png" />
      {/* <SVGOverlay attributes={{ stroke: "black" }} bounds={bounds}>
        <rect x="0" y="0" width="100%" height="100%" fill="white" />
        <text x="50%" y="50%" stroke="black">
          골든IT타워
        </text>
      </SVGOverlay> */}

      <RecenterMap position={position} />

      {/* 마커 표시 */}
      <Marker position={position} icon={customIcon}>
        <Popup>골든IT타워</Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;

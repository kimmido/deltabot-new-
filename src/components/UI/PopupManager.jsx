import { useEffect, useState } from "react";
import Popup from "./Popup";

const popupData = [
  // {
  //   id: "eventsfd2025",
  //   image: "/images/popup/popup_event.jpg",
  //   link: "/event/2025",
  // },
  // {
  //   id: "noticdsfeJune",
  //   image: "/images/popup/popup_notice2.jpg",
  //   link: "/automation-solution",
  // },
  // {
  //   id: "공지ef공지",
  //   image: "/images/popup/popup_notice.jpg",
  //   link: "/automation-solution",
  // },
];

const PopupManager = () => {
  const [visiblePopups, setVisiblePopups] = useState([]); // 보여줄 팝업

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    const toShow = popupData.filter((popup) => {
      const cookie = document.cookie.match(new RegExp(`${popup.id}=${today}`));
      return !cookie; // 오늘 날짜로 저장되있는 팝업은 제외
    });
    setVisiblePopups(toShow);
  }, []);

  const handleClose = (popupId, dontShowToday) => {
    if (dontShowToday) {
      const today = new Date().toISOString().split("T")[0];
      document.cookie = `${popupId}=${today}; path=/; expires=${getTomorrow()}`; // expires = 자정까지로 설정
    }
    setVisiblePopups((prev) => prev.filter((p) => p.id !== popupId));
  };

  const getTomorrow = () => {
    const date = new Date();
    date.setHours(23, 59, 59, 999);
    return date.toUTCString();
  };

  return (
    <>
      {visiblePopups.length > 0 && (
        <div className="popup-backdrop">
          {visiblePopups.map((popup) => (
            <Popup
              key={popup.id}
              id={popup.id}
              image={popup.image}
              link={popup.link}
              onClose={handleClose}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default PopupManager;

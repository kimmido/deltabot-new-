## 사용 라이브러리
- aos   
- gsap   
- swiper   
- leaflet   

## 파일구조
📦deltabot-new-   
 ┣ 📂public   
 ┃ ┣ 📂images   
 ┃ ┃ ┣ 📂branding   
 ┃ ┃ ┣ 📂business   
 ┃ ┃ ┣ 📂heading   
 ┃ ┃ ┣ 📂icon   
 ┃ ┃ ┃ ┣ 📜png형식 아이콘 파일   
 ┃ ┃ ┣ 📂popup   
 ┃ ┃ ┣ 📂product   
 ┃ ┃ ┗ 📂video_poster   
 ┃ ┣ 📂json   
 ┃ ┃ ┣ 📜제품 관련 데이터   
 ┃ ┣ 📂videos   
 ┣ 📂src   
 ┃ ┣ 📂assets   
 ┃ ┃ ┗ 📂images   
 ┃ ┃ ┃ ┣ 📂main   
 ┃ ┃ ┃ ┗ 📂solution   
 ┃ ┣ 📂components   
 ┃ ┃ ┣ 📂common   
 ┃ ┃ ┣ 📂icons   
 ┃ ┃ ┃ ┣ 📜컴포넌트 형식의 아이콘 파일   
 ┃ ┃ ┣ 📂Layout   
 ┃ ┃ ┃ ┣ 📜Footer.jsx   
 ┃ ┃ ┃ ┣ 📜Header.jsx   
 ┃ ┃ ┃ ┗ 📜Nav.jsx   
 ┃ ┃ ┗ 📂UI   
 ┃ ┃ ┃ ┣ 📜Button.jsx   
 ┃ ┃ ┃ ┣ 📜ExpandableVideoList.jsx   
 ┃ ┃ ┃ ┣ 📜ExpandableVideoPanel.jsx   
 ┃ ┃ ┃ ┣ 📜FloatingBtn.jsx   
 ┃ ┃ ┃ ┣ 📜HighlightText.jsx   
 ┃ ┃ ┃ ┣ 📜Modal.jsx   
 ┃ ┃ ┃ ┣ 📜PageHeading.jsx   
 ┃ ┃ ┃ ┣ 📜Popup.jsx   
 ┃ ┃ ┃ ┣ 📜PopupManager.jsx   
 ┃ ┃ ┃ ┣ 📜SubTabMenu.jsx   
 ┃ ┃ ┃ ┣ 📜TabMenu.jsx   
 ┃ ┃ ┃ ┣ 📜VideoDefault.jsx   
 ┃ ┃ ┃ ┗ 📜VideoPreviewPlayer.jsx   
 ┃ ┣ 📂data   
 ┃ ┃ ┣ 📜businessIntroData.js   
 ┃ ┃ ┗ 📜category.js   
 ┃ ┣ 📂hooks   
 ┃ ┃ ┣ 📜useMediaQuery.js   
 ┃ ┃ ┗ 📜useScrollLock.js   
 ┃ ┣ 📂layouts   
 ┃ ┃ ┣ 📜BusinessLayout.jsx   
 ┃ ┃ ┗ 📜DefaultLayout.jsx   
 ┃ ┣ 📂pages   
 ┃ ┃ ┣ 📂About   
 ┃ ┃ ┃ ┣ 📂components   
 ┃ ┃ ┃ ┗ 📜About.jsx   
 ┃ ┃ ┣ 📂Business   
 ┃ ┃ ┃ ┣ 📂components   
 ┃ ┃ ┃ ┣ 📜Business.jsx   
 ┃ ┃ ┃ ┗ 📜ComingSoon.jsx   
 ┃ ┃ ┣ 📂Home   
 ┃ ┃ ┃ ┣ 📂components    
 ┃ ┃ ┃ ┗ 📜Home.jsx    
 ┃ ┃ ┗ 📂Solution   
 ┃ ┃ ┃ ┣ 📂Automation   
 ┃ ┃ ┃ ┃ ┣ 📂components   
 ┃ ┃ ┃ ┃ ┣ 📜ApplicationsSection.jsx   
 ┃ ┃ ┃ ┃ ┣ 📜Automation.jsx   
 ┃ ┃ ┃ ┃ ┗ 📜IntroSection.jsx   
 ┃ ┃ ┃ ┣ 📂components   
 ┃ ┃ ┃ ┃ ┣ 📜솔루션 페이지 공용 컴포넌트   
 ┃ ┃ ┃ ┣ 📂EcoAI   
 ┃ ┃ ┃ ┃ ┣ 📂components   
 ┃ ┃ ┃ ┃ ┣ 📜CleaningRobotSection.jsx   
 ┃ ┃ ┃ ┃ ┣ 📜EcoAI.jsx   
 ┃ ┃ ┃ ┃ ┣ 📜IntroSection.jsx   
 ┃ ┃ ┃ ┃ ┗ 📜RecyclingRobotSection.jsx   
 ┃ ┃ ┃ ┗ 📂Vision   
 ┃ ┃ ┃ ┃ ┣ 📂components   
 ┃ ┃ ┃ ┃ ┣ 📜HyperspectralSection.jsx   
 ┃ ┃ ┃ ┃ ┣ 📜IntroSection.jsx   
 ┃ ┃ ┃ ┃ ┣ 📜MachineVisionSection.jsx   
 ┃ ┃ ┃ ┃ ┣ 📜ThermalImagingSection.jsx   
 ┃ ┃ ┃ ┃ ┗ 📜Vision.jsx   
 ┃ ┣ 📂styles   
 ┃ ┃ ┣ 📂base   
 ┃ ┃ ┃ ┣ 📜_mixins.scss   
 ┃ ┃ ┃ ┣ 📜_reset.scss   
 ┃ ┃ ┃ ┗ 📜_variables.scss   
 ┃ ┃ ┣ 📂components   
 ┃ ┃ ┃ ┣ 📜_CircleIconList.scss   
 ┃ ┃ ┃ ┣ 📜_ExpandableVideoList.scss   
 ┃ ┃ ┃ ┣ 📜_ExpandableVideoPanel.scss   
 ┃ ┃ ┃ ┣ 📜_floatingBtn.scss   
 ┃ ┃ ┃ ┣ 📜_modal.scss   
 ┃ ┃ ┃ ┣ 📜_pageHeading.scss   
 ┃ ┃ ┃ ┣ 📜_popup.scss   
 ┃ ┃ ┃ ┣ 📜_subTabMenu.scss   
 ┃ ┃ ┃ ┣ 📜_tabMenu.scss   
 ┃ ┃ ┃ ┗ 📜_VideoPreviewPlayer.scss   
 ┃ ┃ ┣ 📂layout   
 ┃ ┃ ┃ ┣ 📜_footer.scss   
 ┃ ┃ ┃ ┣ 📜_header.scss   
 ┃ ┃ ┃ ┗ 📜_nav.scss   
 ┃ ┃ ┣ 📂pages   
 ┃ ┃ ┃ ┣ 📜_about.scss   
 ┃ ┃ ┃ ┣ 📜_business.scss   
 ┃ ┃ ┃ ┣ ... 
 ┃ ┃ ┃ ┣ 📜_solutionEcoAI.scss   
 ┃ ┃ ┃ ┗ 📜_solutionVision.scss   
 ┃ ┃ ┣ 📂utils   
 ┃ ┃ ┃ ┣ 📜_animations.scss   
 ┃ ┃ ┃ ┣ 📜_helpers.scss   
 ┃ ┃ ┃ ┗ 📜_theme.scss   
 ┃ ┃ ┣ 📜main.css   
 ┃ ┃ ┣ 📜main.css.map   
 ┃ ┃ ┗ 📜main.scss   
 ┃ ┣ 📂utils   
 ┃ ┃ ┗ 📜fetchData.js   
 ┃ ┣ 📜App.jsx   
 ┃ ┗ 📜main.jsx   
 ┣ 📜index.html   
 ┗ 📜vite.config.js   

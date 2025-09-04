##사용 라이브러리
aos
gsap
swiper
leaflet

##파일구조
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
 ┃ ┃ ┣ 📜product-eco-friendly-robot.json   
 ┃ ┃ ┣ 📜product-humanoid.json   
 ┃ ┃ ┣ 📜product-information-technology.json   
 ┃ ┃ ┣ 📜product-medical.json   
 ┃ ┃ ┣ 📜product-robot-automation.json   
 ┃ ┃ ┣ 📜product-vision-system.json   
 ┃ ┣ 📂videos   
 ┃ ┃ ┣ 📂heading   
 ┃ ┃ ┗ 📂page   
 ┃ ┣ 📜.htaccess   
 ┃ ┣ 📜robots.txt   
 ┃ ┗ 📜stiemap.xml   
 ┣ 📂src   
 ┃ ┣ 📂assets   
 ┃ ┃ ┗ 📂images   
 ┃ ┃ ┃ ┣ 📂main   
 ┃ ┃ ┃ ┗ 📂solution   
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
 ┃ ┃ ┃ ┃ ┣ 📜Map.jsx   
 ┃ ┃ ┃ ┃ ┣ 📜RecenterMap.jsx   
 ┃ ┃ ┃ ┃ ┣ 📜RollingSlideItem.jsx   
 ┃ ┃ ┃ ┃ ┣ 📜RollingSwiper.jsx   
 ┃ ┃ ┃ ┃ ┗ 📜ValuesSection.jsx   
 ┃ ┃ ┃ ┗ 📜About.jsx   
 ┃ ┃ ┣ 📂Business   
 ┃ ┃ ┃ ┣ 📂components   
 ┃ ┃ ┃ ┃ ┣ 📜BusinessApplications.jsx   
 ┃ ┃ ┃ ┃ ┣ 📜BusinessIntroSection.jsx   
 ┃ ┃ ┃ ┃ ┣ 📜CircleIconList.jsx   
 ┃ ┃ ┃ ┃ ┣ 📜FeatureCards.jsx   
 ┃ ┃ ┃ ┃ ┣ 📜ProductCatalog.jsx   
 ┃ ┃ ┃ ┃ ┣ 📜ProductDetailView.jsx   
 ┃ ┃ ┃ ┃ ┣ 📜ProductInfoSection .jsx   
 ┃ ┃ ┃ ┃ ┣ 📜ProductIntro.jsx   
 ┃ ┃ ┃ ┃ ┣ 📜ProductListItem.jsx   
 ┃ ┃ ┃ ┃ ┗ 📜QuoteArea.jsx   
 ┃ ┃ ┃ ┣ 📜Business.jsx   
 ┃ ┃ ┃ ┗ 📜ComingSoon.jsx   
 ┃ ┃ ┣ 📂Home   
 ┃ ┃ ┃ ┣ 📂components   
 ┃ ┃ ┃ ┃ ┣ 📜BannerSwiper.jsx   
 ┃ ┃ ┃ ┃ ┣ 📜BusinessItem.jsx   
 ┃ ┃ ┃ ┃ ┣ 📜BusinessItem.module.scss   
 ┃ ┃ ┃ ┃ ┣ 📜BusinessSection.jsx   
 ┃ ┃ ┃ ┃ ┣ 📜SolutionSection.jsx   
 ┃ ┃ ┃ ┃ ┗ 📜VideoSection.jsx   
 ┃ ┃ ┃ ┗ 📜Home.jsx   
 ┃ ┃ ┗ 📂Solution   
 ┃ ┃ ┃ ┣ 📂Automation   
 ┃ ┃ ┃ ┃ ┣ 📂components   
 ┃ ┃ ┃ ┃ ┃ ┗ 📜AutomationVideos.jsx   
 ┃ ┃ ┃ ┃ ┣ 📜ApplicationsSection.jsx   
 ┃ ┃ ┃ ┃ ┣ 📜Automation.jsx   
 ┃ ┃ ┃ ┃ ┗ 📜IntroSection.jsx   
 ┃ ┃ ┃ ┣ 📂components   
 ┃ ┃ ┃ ┃ ┣ 📜ContenttBlock.jsx   
 ┃ ┃ ┃ ┃ ┣ 📜ProductLines.jsx   
 ┃ ┃ ┃ ┃ ┣ 📜ScrollTabs.jsx   
 ┃ ┃ ┃ ┃ ┣ 📜SolutionHeading.jsx   
 ┃ ┃ ┃ ┃ ┗ 📜StepFlow.jsx   
 ┃ ┃ ┃ ┣ 📂EcoAI   
 ┃ ┃ ┃ ┃ ┣ 📂components   
 ┃ ┃ ┃ ┃ ┃ ┣ 📜BasicSlider.jsx   
 ┃ ┃ ┃ ┃ ┃ ┣ 📜ComparisonPanel.jsx   
 ┃ ┃ ┃ ┃ ┃ ┗ 📜HorizontalCardSlider.jsx   
 ┃ ┃ ┃ ┃ ┣ 📜CleaningRobotSection.jsx   
 ┃ ┃ ┃ ┃ ┣ 📜EcoAI.jsx   
 ┃ ┃ ┃ ┃ ┣ 📜IntroSection.jsx   
 ┃ ┃ ┃ ┃ ┗ 📜RecyclingRobotSection.jsx   
 ┃ ┃ ┃ ┗ 📂Vision   
 ┃ ┃ ┃ ┃ ┣ 📂components   
 ┃ ┃ ┃ ┃ ┃ ┣ 📜FadeUpTextSlider.jsx   
 ┃ ┃ ┃ ┃ ┃ ┗ 📜SectionBanner.jsx   
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
 ┃ ┃ ┃ ┣ 📜_ComingSoon.scss   
 ┃ ┃ ┃ ┣ 📜_home.scss   
 ┃ ┃ ┃ ┣ 📜_solution.scss   
 ┃ ┃ ┃ ┣ 📜_solutionAutomation.scss   
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

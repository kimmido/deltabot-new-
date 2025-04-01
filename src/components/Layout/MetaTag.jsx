import { Helmet } from "react-helmet-async";

function MetaTag({
  title = "deltabot | 델타봇",
  description = "델타봇은 로봇 자동화, 비전 시스템, 재활용 시스템, 의료, IT 등 다양한 산업에 적용 가능한 제품군을 보유하여 고객 맞춤형 자동화 시스템을 설계합니다.",
  keywords = "델타봇, 로봇, 자동화, 비전시스템, 재활용시스템",
  imgsrc = "https://icpmalldata.mycafe24.com/images/branding/og.jpg",
  url = "https://icpmalldata.mycafe24.com/",
}) {
  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imgsrc} />
      <meta property="og:url" content={url} />

      <link rel="canonical" href={url} />
    </Helmet>
  );
}

export default MetaTag;

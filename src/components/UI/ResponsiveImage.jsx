import { BREAKPOINTS } from "@data/breakpoints";

export default function ResponsiveImage({
  srcMobile = "",
  srcDesktop = "",
  alt = "",
  breakpoint = "TABLET_S",
  style = {},
}) {
  return (
    <picture>
      <source
        media={`(min-width: ${BREAKPOINTS[breakpoint]}px)`}
        srcSet={srcDesktop}
      />
      <img
        src={srcMobile}
        alt={alt}
        loading="lazy"
        decoding="async"
        style={style}
      />
    </picture>
  );
}

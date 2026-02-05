import { useMemo } from "react";
import { useLocation } from "react-router-dom";

const splitPathname = (pathname) =>
  pathname.replace(/^\/+/, "").split("/").filter(Boolean);

export default function usePathSegments() {
  const { pathname, search, hash } = useLocation();

  const segments = useMemo(() => splitPathname(pathname), [pathname]);

  return {
    pathname,
    search,
    hash,
    segments,
    rootSegment: segments[0] ?? "",
    subSegment: segments[1] ?? "",
  };
}

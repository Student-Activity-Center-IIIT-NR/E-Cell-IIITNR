import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { gsap } from "gsap";

const useMedia = (queries, values, defaultValue) => {
  const get = () => values[queries.findIndex((q) => matchMedia(q).matches)] ?? defaultValue;
  const [value, setValue] = useState(get);

  useEffect(() => {
    const handler = () => setValue(get);
    queries.forEach((q) => matchMedia(q).addEventListener("change", handler));
    return () => queries.forEach((q) => matchMedia(q).removeEventListener("change", handler));
  }, [queries]);

  return value;
};

const useMeasure = () => {
  const ref = useRef(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    if (!ref.current) return;
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setSize({ width, height });
    });
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);

  return [ref, size];
};

const preloadImages = async (urls) => {
  await Promise.all(
    urls.map(
      (src) =>
        new Promise((resolve) => {
          const img = new Image();
          img.src = typeof src === "string" ? src : src?.default ?? src;
          img.onload = img.onerror = () => resolve();
        })
    )
  );
};

const Masonry = ({
  items,
  ease = "power3.out",
  duration = 0.6,
  stagger = 0.05,
  animateFrom = "bottom",
  scaleOnHover = true,
  hoverScale = 0.95,
  blurToFocus = true,
  colorShiftOnHover = false,
}) => {
  const columns = useMedia(
    ["(min-width:1500px)", "(min-width:1000px)", "(min-width:600px)", "(min-width:400px)"],
    [5, 4, 3, 2],
    1
  );

  const [containerRef, { width }] = useMeasure();
  const [imagesReady, setImagesReady] = useState(false);

  const getInitialPosition = (item) => {
    const containerRect = containerRef.current?.getBoundingClientRect();
    if (!containerRect) return { x: item.x, y: item.y };

    let direction = animateFrom;
    if (animateFrom === "random") {
      const dirs = ["top", "bottom", "left", "right"];
      direction = dirs[Math.floor(Math.random() * dirs.length)];
    }

    switch (direction) {
      case "top":
        return { x: item.x, y: -200 };
      case "bottom":
        return { x: item.x, y: window.innerHeight + 200 };
      case "left":
        return { x: -200, y: item.y };
      case "right":
        return { x: window.innerWidth + 200, y: item.y };
      case "center":
        return {
          x: containerRect.width / 2 - item.w / 2,
          y: containerRect.height / 2 - item.h / 2,
        };
      default:
        return { x: item.x, y: item.y + 100 };
    }
  };

  useEffect(() => {
    const urls = items.map((i) => (typeof i.img === "object" && i.img?.default ? i.img.default : i.img));
    preloadImages(urls).then(() => setImagesReady(true));
  }, [items]);

  /* Use fallback width when ResizeObserver hasn't fired yet so grid is never empty */
  const effectiveWidth =
    width ||
    (typeof window !== "undefined" ? Math.min(1100, window.innerWidth * 0.92) : 1100);

  const { grid, totalHeight } = useMemo(() => {
    const colHeights = new Array(columns).fill(0);
    const gap = 16;
    const totalGaps = (columns - 1) * gap;
    const columnWidth = (effectiveWidth - totalGaps) / columns;

    const grid = items.map((child) => {
      const col = colHeights.indexOf(Math.min(...colHeights));
      const x = col * (columnWidth + gap);
      const height = child.height / 2;
      const y = colHeights[col];

      colHeights[col] += height + gap;
      return { ...child, x, y, w: columnWidth, h: height };
    });
    const totalHeight = Math.max(520, ...colHeights);
    return { grid, totalHeight };
  }, [columns, items, effectiveWidth]);

  const hasMounted = useRef(false);

  useLayoutEffect(() => {
    if (!containerRef.current || grid.length === 0) return;

    const container = containerRef.current;
    grid.forEach((item, index) => {
      const el = container.querySelector(`[data-key="${item.id}"]`);
      if (!el) return;
      const animProps = { left: item.x, top: item.y, width: item.w, height: item.h };

      if (!hasMounted.current && imagesReady) {
        const start = getInitialPosition(item);
        gsap.fromTo(
          el,
          {
            opacity: 0,
            left: start.x,
            top: start.y,
            width: item.w,
            height: item.h,
            ...(blurToFocus && { filter: "blur(10px)" }),
          },
          {
            opacity: 1,
            ...animProps,
            ...(blurToFocus && { filter: "blur(0px)" }),
            duration: 0.8,
            ease: "power3.out",
            delay: index * stagger,
          }
        );
      } else {
        gsap.to(el, {
          ...animProps,
          duration: imagesReady ? duration : 0,
          ease,
          overwrite: "auto",
        });
      }
    });

    hasMounted.current = true;
  }, [grid, imagesReady, stagger, animateFrom, blurToFocus, duration, ease]);

  const handleMouseEnter = (id, element) => {
    if (scaleOnHover) {
      gsap.to(element, {
        scale: hoverScale,
        duration: 0.3,
        ease: "power2.out",
      });
    }
    if (colorShiftOnHover) {
      const overlay = element.querySelector(".esummit-masonry-overlay");
      if (overlay) gsap.to(overlay, { opacity: 0.3, duration: 0.3 });
    }
  };

  const handleMouseLeave = (id, element) => {
    if (scaleOnHover) {
      gsap.to(element, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    }
    if (colorShiftOnHover) {
      const overlay = element.querySelector(".esummit-masonry-overlay");
      if (overlay) gsap.to(overlay, { opacity: 0, duration: 0.3 });
    }
  };

  return (
    <div
      ref={containerRef}
      className="esummit-masonry-container"
      style={{ minHeight: totalHeight }}
    >
      {grid.map((item) => (
        <div
          key={item.id}
          data-key={item.id}
          className="esummit-masonry-item"
          style={{
            left: item.x,
            top: item.y,
            width: item.w,
            height: item.h,
            willChange: "transform, width, height, opacity",
          }}
          onClick={() => {
            if (!item.url) return;
            if (item.url.startsWith("#")) {
              const el = document.querySelector(item.url);
              el?.scrollIntoView({ behavior: "smooth" });
            } else {
              window.open(item.url, "_blank", "noopener");
            }
          }}
          onMouseEnter={(e) => handleMouseEnter(item.id, e.currentTarget)}
          onMouseLeave={(e) => handleMouseLeave(item.id, e.currentTarget)}
          role={item.url ? "button" : undefined}
        >
          <div
            className="esummit-masonry-card"
            style={{
              backgroundImage: `url(${typeof item.img === "object" && item.img?.default ? item.img.default : item.img})`,
            }}
          >
            {colorShiftOnHover && <div className="esummit-masonry-overlay" />}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Masonry;

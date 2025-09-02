"use client";

import { useEffect, useRef, useState } from "react";
import "./blogcontents.css";

interface Section {
  id: string;
  label: string;
  value: string;
  imgSrc: string;
}

export default function BlogsContents({
  blogsData,
}: {
  blogsData: OutputData.Blog;
}) {
  const { blogDetails } = blogsData;
  const [activeId, setActiveId] = useState<string>("");
  const [indicatorTop, setIndicatorTop] = useState<number>(0);

  const observer = useRef<IntersectionObserver | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const liRefs = useRef<Record<string, HTMLLIElement | null>>({});

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    if (!scrollContainer) return;

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          setActiveId(id);

          const liElement = liRefs.current[id];
          if (liElement) {
            const rect = liElement.getBoundingClientRect();
            const offsetTop =
              rect.top - scrollContainer.getBoundingClientRect().top;
            setIndicatorTop(offsetTop + liElement.offsetHeight / 2);
          }
        }
      });
    };

    observer.current = new IntersectionObserver(handleIntersection, {
      root: scrollContainer,
      rootMargin: "0px 0px -70% 0px",
    });

    blogDetails?.forEach((section: any) => {
      const el = document.getElementById(section.id);
      if (el) observer.current?.observe(el);
    });

    return () => {
      observer.current?.disconnect();
    };
  }, [blogDetails]);

  function decodeHtml(html: string) {
    const parser = new DOMParser();
    return parser.parseFromString(html, "text/html").body.textContent || "";
  }

  return (
    <div className="flex py-6 md:py-12 pb-20">
      {/* Sidebar Index */}
      <div className="w-[35%] hidden h-fit top-0 p-4 bg-white lg:flex gap-2 relative">
        {/* Vertical line */}
        <div className="relative w-[2px] bg-[#EBEBEB] rounded-3xl">
          {/* Moving indicator */}
          <div
            className="absolute w-[3px] h-8 rounded-full bg-[#455D58] transition-all duration-300 "
            style={{ top: `${indicatorTop - 32}px` }}
          ></div>
        </div>

        <ul className="space-y-5">
          {blogDetails?.map((data) => (
            <li
              key={data?.id}
              ref={(el) => {
                liRefs.current[data.id ?? ""] = el;
              }}
              className="inter text-sm font-medium"
            >
              <a
                href={`#${data?.id}`}
                className={`block px-4 py-2 rounded-lg transition-all ${
                  activeId === data?.id
                    ? "text-[#455D58]"
                    : "text-dark-normal/75 hover:text-[#455D58]"
                }`}
              >
                {data.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div
        ref={scrollContainerRef}
        className="  w-full lg:w-[65%] h-fit lg:h-screen  lg:overflow-y-scroll px-4 py-5 lg:px-8 lg:py-10 lg:scroll-hide"
      >
        {blogDetails?.map((data, index) => (
          <section
            key={index}
            id={data?.id as string}
            className="blog-content min-h-fit pb-16 custom-html"
          >
            <h2 className="text-xl md:text-2xl text-dark-normal font-semibold pb-7">
              {data?.label}
            </h2>
            {data?.value && (
              <p
                className="text-dark-normal/80 inter text-sm md:text-base font-normal "
                dangerouslySetInnerHTML={{ __html: decodeHtml(data?.value) }}
              />
            )}
          </section>
        ))}
      </div>
    </div>
  );
}

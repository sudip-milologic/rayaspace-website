"use client";

import React, { useRef } from "react";
import Image from "next/image";
import "../styles/carousel.css";

interface CarouselImage {
  src: string;
  alt?: string;
  blurDataURL?: string;
}

interface CarouselProps {
  images: CarouselImage[];
  className?: string;
}

const Carousel: React.FC<CarouselProps> = ({ images, className = "" }) => {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const handleCarouselMove = (positive: boolean = true) => {
    if (!carouselRef.current) return;

    const slide =
      carouselRef.current.querySelector<HTMLDivElement>(".carousel-slide");
    if (!slide) return;

    const slideWidth = slide.clientWidth;

    carouselRef.current.scrollLeft = positive
      ? carouselRef.current.scrollLeft + slideWidth
      : carouselRef.current.scrollLeft - slideWidth;
  };

  return (
    <div className={`carousel ${className}`}>
      {/* Prev Button */}
      <button
        className="carousel-arrow carousel-arrow--prev"
        onClick={() => handleCarouselMove(false)}
        type="button"
      >
        <Image
          src="/images/icons/slide-prev-icon.png"
          alt="Previous"
          width={24}
          height={24}
        />
      </button>

      {/* Next Button */}
      <button
        className="carousel-arrow carousel-arrow--next"
        onClick={() => handleCarouselMove(true)}
        type="button"
      >
        <Image
          src="/images/icons/slide-next-icon.png"
          alt="Next"
          width={24}
          height={24}
        />
      </button>

      {/* Carousel Items */}
      <div className="carousel-container" dir="ltr" ref={carouselRef}>
        {images.map((image, index) => (
          <div key={index} className="carousel-slide">
            <Image
              src={image.src}
              alt={image.alt ?? ""}
              width={600}
              height={400}
              loading="lazy"
              className="w-full h-full object-cover"
              placeholder={image.blurDataURL ? "blur" : "empty"}
              blurDataURL={image.blurDataURL}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;

import React from "react";

const Hero = () => {
  return (
    <div id="home">
      <div className="mt-4 relative">
        <div className="w-full bg-black h-fit">
          <img
            data-src="/images/hero/raya-hero.png"
            src="/images/hero/raya-hero-lazy.png"
            alt=""
            className="w-full opacity-40 lazy-load"
          />
        </div>
        <div className="absolute left-0 right-0 top-0 lg:top-[25%] transform translate-y-1/2">
          <p className="lg:text-7xl text-[34px] lg:leading-[88.13px] leading-[41.62px] text-center capitalize font-begum font-normal text-white">
            Elevate your work <br />
            experience with raya
          </p>
          <p className="mt-4 text-center text-white font-semibold lg:text-xl text-sm lg:leading-[23.48px] leading-[16.44px] lg:tracking-[1px] tracking-[0.6px] uppercase">
            your next co-working space
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

import React from "react";
import Image from "next/image";

const ContactUs = () => {
  return (
    <div id="contact-us">
      <div className="lg:px-28 lg:py-[120px] py-[60px] px-5 bg-white">
        <div className="flex lg:flex-row flex-col-reverse lg:items-center gap-x-24">
          <Image
            src="/images/contact-us/basemap-image.svg"
            alt="Location map"
            width={600}
            height={400}
            loading="lazy"
            className="lg:border-[20px] border-[10px] border-[#D6EEE2] lg:mb-0 mb-8 lg:w-1/2"
            placeholder="blur"
            blurDataURL="/images/contact-us/lazy-basemap.png"
          />
          <div>
            <p className="lg:text-5xl text-[28px] lg:text-left text-center lg:leading-[58.75px] xl:leading-[34.27px] font-begum">
              Get In Touch
            </p>
            <div className="lg:mb-0 mb-10">
              <div className="flex items-center lg:mt-8 mt-6 gap-3">
                <Image
                  src="/images/icons/location-marker-icon.svg"
                  alt="Location icon"
                  width={64}
                  height={64}
                  className="lg:w-[64px] w-10"
                />
                <div>
                  <p className="lg:text-base text-sm font-semibold lg:leading-[18.78px] text-[#455D58]">
                    LOCATION
                  </p>
                  <p className="lg:text-xl text-sm leading-[23.48px] lg:mt-3 mt-1">
                    Maharajgunj, Kathmandu
                  </p>
                </div>
              </div>
              <div className="flex items-center lg:mt-8 mt-6 lg:py-8 py-6 gap-3 border-y-[0.2px] border-[#8F9495]">
                <a href="tel:01-4017515">
                  <Image
                    src="/images/icons/phone-icon.svg"
                    alt="Phone icon"
                    width={64}
                    height={64}
                    className="lg:w-[64px] w-10"
                  />
                </a>
                <div>
                  <p className="lg:text-base text-sm font-semibold lg:leading-[18.78px] text-[#455D58]">
                    PHONE
                  </p>
                  <p className="lg:text-xl text-sm leading-[23.48px] lg:mt-3 mt-1 font-montserrat">
                    +977-9857053215
                  </p>
                  <p className="lg:text-xl text-sm leading-[23.48px] lg:mt-3 mt-1 font-montserrat">
                    01-4017515
                  </p>
                </div>
              </div>
              <div className="flex items-center lg:mt-8 mt-6 gap-3">
                <a href="mailto:raya.space15@gmail.com" target="_blank">
                  <Image
                    src="/images/icons/mail-icon.svg"
                    alt="Email icon"
                    width={64}
                    height={64}
                    className="lg:w-[64px] w-10"
                  />
                </a>
                <div>
                  <p className="lg:text-base text-sm font-semibold lg:leading-[18.78px] text-[#455D58]">
                    EMAIL
                  </p>
                  <p className="lg:text-xl text-sm leading-[23.48px] lg:mt-3 mt-1">
                    raya.space15@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

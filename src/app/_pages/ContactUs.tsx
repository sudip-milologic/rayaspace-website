import React from "react";
import Image from "next/image";

const ContactUs = () => {
  return (
    <div id="contact-us">
      <div className="lg:px-36 lg:py-[120px] py-[60px] px-5 bg-white w-full">
        <div className="flex lg:flex-row flex-col-reverse lg:items-center justify-between gap-10 ">
          <div className="w-full flex-1 border-4 border-[#455D58]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.211260!2d85.336609!3d27.7443201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1969376306a7%3A0xda330ac396982fc9!2sRaya%20Space!5e0!3m2!1sen!2snp!4v1691234567890"
              width="100%"
              height="400"
              loading="lazy"
            ></iframe>
          </div>
          <div className="w-full lg:w-[35%] whitespace-nowrap">
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

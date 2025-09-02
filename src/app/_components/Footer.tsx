"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer>
      <div className="bg-[#455D58] pt-8 lg:pb-8 pb-4 overflow-hidden">
        <div className="lg:px-28 flex lg:flex-row flex-col items-center justify-between gap-5">
          <div>
            <p className="text-white lg:leading-[28px]">
              ©{" "}
              <span className="text-white lg:leading-[28px]">
                {currentYear}
              </span>{" "}
              Raya, All Rights Reserved
            </p>
          </div>
          <hr className="w-11/12 m-auto border-[0.2px] border-[#8F9495] lg:hidden block" />
          <div>
            <ul className="flex items-center lg:gap-4 gap-3">
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=100095560711249"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/images/icons/facebook-icon.svg"
                    alt="Facebook"
                    width={40}
                    height={40}
                    className="w-10 lg:w-auto"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/raya_space/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/images/icons/instagram-icon.svg"
                    alt="Instagram"
                    width={40}
                    height={40}
                    className="w-10 lg:w-auto"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/97899953/admin/feed/posts/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/images/icons/linkedin-icon.svg"
                    alt="LinkedIn"
                    width={40}
                    height={40}
                    className="w-10 lg:w-auto"
                  />
                </a>
              </li>
              <li>
                <a
                  href="mailto:raya.space15@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/images/icons/email-icon.svg"
                    alt="Email"
                    width={40}
                    height={40}
                    className="w-10 lg:w-auto"
                  />
                </a>
              </li>
            </ul>
          </div>
          <hr className="w-11/12 m-auto border-[0.2px] border-[#8F9495] lg:hidden block" />
          <Link
            href="/terms-of-services"
            className="text-sm text-white lg:leading-[28px]"
          >
            Terms of Services
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

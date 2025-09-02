"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("div[id]");

    const handleScroll = () => {
      const scrollY = window.scrollY;

      sections.forEach((section) => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 50;
        const sectionId = section.getAttribute("id")!;

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId);
          if (isOpen) setIsOpen(false);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#features", label: "Features" },
    { href: "#our-spaces", label: "Our Spaces" },
    { href: "#pricing", label: "Pricing" },
    { href: "/blogs", label: "Blogs" },
    { href: "#contact-us", label: "Contact Us" },
  ];

  return (
    <header className="sticky top-0 bg-white z-[30]">
      <div className="lg:py-4 lg:px-28 pt-8 pb-5 px-5 flex items-center justify-between z-[50]">
        {/* Logo */}
        <Link href="/" scroll={false}>
          <Image
            src="/images/logo/Raya-logo.svg"
            alt="Raya Logo"
            width={40}
            height={40}
            className="w-10 lg:w-full"
            priority
          />
        </Link>

        {/* Navigation */}
        <nav
          className={`lg:px-0 lg:block lg:static fixed left-0 right-0 transition-all ease-out duration-500 ${
            isOpen ? "top-20 bg-white p-8 text-center" : "top-[-500%]"
          }`}
        >
          <ul className="flex lg:flex-row flex-col items-center lg:text-base text-xs lg:gap-16 gap-4 font-medium">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  scroll={false}
                  onClick={() => setIsOpen(false)}
                  className={`nav-link text-[#444D4F] hover:text-[#061214] ${
                    activeSection === href.replace("#", "")
                      ? "text-[#061214]"
                      : ""
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Menu Toggle Buttons */}
        <button
          onClick={() => setIsOpen(true)}
          className={`lg:hidden block ${isOpen ? "hidden" : ""}`}
        >
          <Image
            src="/images/icons/menu-alt-icon.svg"
            alt="Menu"
            width={24}
            height={24}
          />
        </button>

        <button
          onClick={() => setIsOpen(false)}
          className={`lg:hidden block ${isOpen ? "" : "hidden"}`}
        >
          <Image
            src="/images/icons/menu-close-icon.svg"
            alt="Close"
            width={24}
            height={24}
          />
        </button>
      </div>
    </header>
  );
}

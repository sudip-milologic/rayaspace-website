"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; // 👈 import this

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname(); // 👈 get current route

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
    { href: "/#about", label: "About" },
    { href: "/#features", label: "Features" },
    { href: "/#our-spaces", label: "Our Spaces" },
    { href: "/#pricing", label: "Pricing" },
    { href: "/blogs", label: "Blogs" },
    { href: "/#contact-us", label: "Contact Us" },
  ];

  const isSpecialPage =
    pathname.startsWith("/blogs") || pathname.startsWith("/terms-of-services");

  return (
    <header
      className={`sticky top-0 z-[30] transition-colors duration-300 ${
        isSpecialPage ? "bg-[#061214] text-white" : "bg-white text-[#444D4F]"
      }`}
    >
      <div className="lg:py-4 lg:px-28 pt-8 pb-5 px-5 flex items-center justify-between z-[50]">
        {/* Logo */}
        <Link href="/" scroll={false}>
          <Image
            src={`${
              isSpecialPage
                ? "/images/logo/logo-white.svg"
                : "/images/logo/Raya-logo.svg"
            }`}
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
                  onClick={() => setIsOpen(false)}
                  className={`nav-link ${
                    isSpecialPage
                      ? "text-white hover:text-gray-300"
                      : "text-[#444D4F] hover:text-[#061214]"
                  } ${
                    activeSection === href.replace("#", "")
                      ? isSpecialPage
                        ? "text-gray-300"
                        : "text-[#061214]"
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

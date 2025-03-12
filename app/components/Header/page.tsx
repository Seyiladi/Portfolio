"use client";

import { useState, useRef, useEffect } from "react";
import { Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import SeyiNav from "@/assets/SeyiNav.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Explicitly typing useRef to point to a HTMLDivElement or null
  const menuRef = useRef<HTMLDivElement | null>(null);

  const navItems = [
    { name: "Projects", href: "/projects" },
    { name: "Skills", href: "/skills" },
    { name: "Experience", href: "/experience" },
    { name: "CV + References", href: "/cv" },
  ];

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="bg-white p-4 md:px-40 relative">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center space-x-2 cursor-pointer">
            <Image
              src={SeyiNav}
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
            <span className="text-[20px] font-semibold font-satoshi">
              Seyi{" "}
              <span className="text-primary-100 font-satoshi">Oladimeji</span>
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-gray-700 font-satoshi">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`hover:text-[#008B8B] ${
                pathname.includes(item.href)
                  ? "text-primary-100 text-[18px] border-b-2 border-primary-100 font-semibold mb-1 font-satoshi"
                  : "text-[18px] font-semibold font-satoshi"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div
          ref={menuRef}
          className="md:hidden mt-0 bg-white shadow-lg p-4 w-4/5 h-screen fixed top-0 right-0 z-50"
        >
          <div className="flex items-center space-x-2 mb-6">
            <Image
              src={SeyiNav}
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
            <span className="text-lg font-semibold">
              Seyi{" "}
              <span className="text-primary-100 font-satoshi">Oladimeji</span>
            </span>
          </div>
          <span className="text-[#82858F] uppercase text-[12px] font-satoshi">
            Main Menu
          </span>
          <div className="mt-2 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block text-gray-700 pl-4 border-l-4font-satoshi${
                  pathname.includes(item.href)
                    ? "border-primary-100 text-primary-100 text-[18px] font-semibold bg-white font-satoshi"
                    : "border-transparent font-satoshi"
                }`}
                onClick={() => setIsOpen(false)} // Close menu when clicking a link
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

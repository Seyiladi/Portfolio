import React from "react";
import Link from "next/link";
import Image from "next/image";
import Linkedln from "@/assets/Linkedln.svg";
import Mail from "@/assets/Mail.svg";
import Call from "@/assets/Call.svg";

function Footer() {
  return (
    <div className="">
      <footer className="bg-[#17191F] text-gray-300 py-8 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-xl md:text-[32px] font-semibold text-white">
            Get in touch
          </h2>
          <p className="mt-[16px] mb-[32px] text-[#FFFFFF80] max-w-[800px] mx-auto text-[20px] leading-8 ">
            If you have any questions, need assistance, or are interested in
            collaborating on your next project, don’t hesitate to reach out. I’m
            committed to providing the support and expertise needed to fulfill
            project objectives.
          </p>
          <div className="mt-4 flex flex-col justify-center items-center ">
            <Link
              href="mailto:seyiladi@gmail.com"
              className="bg-primary-100 text-white px-6 py-2 rounded-md flex items-center gap-2 md:w-[159px] md:h-[44px]"
            >
              Contact Me ↗
            </Link>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-4 flex  flex-col-reverse md:flex-row justify-between items-center text-sm">
            <span className="text-[#FFFFFF80] mt-6 md:mt-0">
              © Seyi Oladimeji {new Date().getFullYear()}
            </span>
            <div className="flex flex-col items-center md:flex md:flex-row md:items-center gap-4 mt-2 md:mt-0">
              <Link
                href="https://www.linkedin.com/in/seyioladimeji/"
                className="flex items-center gap-2 text-[#FFFFFF] hover:text-white"
              >
                <Image src={Linkedln} alt="linkedln" /> LinkedIn
              </Link>
              <Link
                href="mailto:seyiladi@gmail.com"
                className="flex items-center gap-2 text-[#FFFFFF] hover:text-white"
              >
                <Image src={Mail} alt="mailbox" /> seyiladi@gmail.com
              </Link>
              <Link
                href="tel:+393512607744"
                className="flex items-center gap-2 text-[#FFFFFF] hover:text-white"
              >
                <Image src={Call} alt="call_dial" /> +393512607744
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

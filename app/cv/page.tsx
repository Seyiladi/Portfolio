import React from "react";
import Image from "next/image";
import SeyiCV from "@/assets/SeyiCV2.svg";
import Download from "@/assets/Download.svg";
import SeyiReference from "@/assets/SeyiReference.svg";
import SeyiDegree from "@/assets/SeyiDegree.svg";

function page() {
  return (
    <div>
      <div className="bg-[#17191F] text-white py-16 flex flex-col items-center justify-center">
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* Skills Section */}

          <div className="inline-block py-2 px-6 bg-[#008B8B1F] rounded-full text-[#008B8B] text-sm font-medium mb-4">
            CV + REFERENCES
          </div>
          <h2 className="text-2xl font-semibold mb-4">
            My Professional Summary, Credentials & Endorsements
          </h2>

          {/* Subtitle / Description */}
          <p className="text-lg text-[#82858F] text-[20px] mb-8 md:px-44 leading-8">
            Here, you`ll find my CV outlining my expertise, along with
            references from colleagues, previous employers, and industry
            professionals who have worked alongside me.
          </p>
        </div>
      </div>
      <div className="flex justify-between flex-wrap px-4 py-16 md:px-40">
        <div className="flex flex-col items-center border border-[#D4D6DD] rounded-md p-2 mt-2">
          <Image src={SeyiCV} alt="cv" />
          <h2 className="text-[#17191F] text-[24px] font-semibold mt-4">
            Curriculum Vitae
          </h2>
          <a
            href="/documents/SEYICV.pdf"
            download="Seyi-CV"
            className="mt-6 py-2 px-6 bg-[#17191F] rounded-md text-white text-sm font-medium flex items-center mb-4"
          >
            Download <Image src={Download} alt="download" className="ml-2" />
          </a>
        </div>
        <div className="flex flex-col items-center border border-[#D4D6DD] rounded-md p-2 mt-2">
          <Image src={SeyiReference} alt="cv" />
          <h2 className="text-[#17191F] text-[24px] font-semibold mt-4">
            References
          </h2>
          <a
            href="/documents/REFERENCES2.pdf"
            download="Seyi-Bim-Reference"
            className="mt-6 py-2 px-6 bg-[#17191F] rounded-md text-white text-sm font-medium flex items-center mb-4"
          >
            Download <Image src={Download} alt="download" className="ml-2" />
          </a>
        </div>
        <div className="flex flex-col items-center border border-[#D4D6DD] rounded-md p-2 mt-2">
          <Image src={SeyiDegree} alt="cv" />
          <h2 className="text-[#17191F] text-[24px] font-semibold mt-4">
            Degree Certificates
          </h2>
          <a
            href="/documents/DegreeCert.pdf"
            download="Seyi-Degree-Certicate"
            className="mt-6 py-2 px-6 bg-[#17191F] rounded-md text-white text-sm font-medium flex items-center mb-4"
          >
            Download <Image src={Download} alt="download" className="ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default page;

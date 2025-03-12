"use client";
import Navbar from "./components/Header/page";
import Image from "next/image";
import SeyiProfile from "@/assets/SeyiHero.svg";
import ArchitecturalImg from "@/assets/Architecture.svg";
import BIMImg from "@/assets/BIM.svg";
import MEPImg from "@/assets/MEP.svg";
import UniversityImg from "@/assets/University.svg";
import ArchiMobile from "@/assets/AchiMobile.svg";
import { useState } from "react";
import HR from "@/assets/HR.svg";
import Revite from "@/assets/Revite.svg";
import Navi from "@/assets/Navi.svg";
import Autocad from "@/assets/Autocad.svg";
import Bim360 from "@/assets/BIM360.svg";
import Photoshop from "@/assets/Photoshop.svg";
import More from "@/assets/More.svg";
import Indesign from "@/assets/Indesign.svg";
import MoreMobile from "@/assets/MoreMobile.svg";
import Link from "next/link";
import RevitSVG from "@/assets/RevitSVG.svg";
import NaviSVG from "@/assets/NavSVG.svg";
import AutocadSVG from "@/assets/AutocadSVG.svg";
import BIMSVG from "@/assets/BIMSVG.svg";
import PotoshopSVG from "@/assets/PSSVG.svg";
import IDSVG from "@/assets/IDSVG.svg";
import { useRouter } from "next/navigation";
import SeyiFooter from "@/assets/SeyiFooter.svg";
import StructuralNew from "@/assets/StructuralNew.svg";
import Achi from "@/assets/Achi.svg";
import BimNew from "@/assets/BimNew.svg";
import MepNew from "@/assets/MepNew.svg";
import UniversityNew from "@/assets/UniversityNew.svg";
export default function Home() {
  const [viewAll, setViewAll] = useState(false);
  const navigation = useRouter();
  return (
    <div>
      {/* Hero Section */}
      <section className="container mx-auto flex flex-col md:flex-row items-center justify-between pt-16  px-4 md:px-40">
        <div className="md:w-[707px] text-center md:text-left">
          <span className="bg-[#008B8B1F] text-primary-100 text-sm px-[20px] py-[6px] rounded-full uppercase font-semibold w-[128px] h-[30px]font-satoshi ">
            About Me
          </span>
          <h1 className="text-[32px] font-bold mt-4">
            Hey there,{" "}
            <span className="text-primary-100 font-satoshi ">Welcome!</span>
          </h1>
          <p className="text-[#82858F] text-[20px] mt-[16px] leading-8 font-satoshi ">
            My name is Seyi Oladimeji. I specialize in BIM Coordination,
            Management, and Automations. I created this website to give you an
            overview of my experience and capabilities as a BIM Expert. I hope
            this gives you a clear representation of my professional standing,
            strengths, and aspirations.
          </p>
          <div className="mt-[32px] flex gap-4 flex-wrap">
            <a
              href="mailto:seyiladi@gmail.com"
              className="bg-[#17191F] text-white px-6 py-2 rounded-lg h-[56px] w-full md:w-[240px] flex justify-center items-center font-satoshi "
            >
              Contact Me
            </a>

            <Link
              href="/projects"
              className="bg-white text-[#82858F] px-6 py-2 rounded-lg flex items-center justify-center h-[56px] font-satoshi border border-[#82858F] w-full md:w-[240px] md:ml-[16px] "
            >
              View my Works ↗
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 md:mt-0 flex justify-center relative">
          <Image
            src={SeyiProfile}
            alt="Seyi Oladimeji"
            className="w-80 h-auto"
          />
        </div>
      </section>

      {/* project section */}
      <section className="bg-[#17191F] text-white py-16  px-4 md:px-40">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold font-satoshi ">My Projects</h2>
          <Link href="/projects">
            <button className="bg-primary-100 text-white px-6 py-2 md:w-[132px] rounded-md flex items-center font-satoshi ">
              View All ↗
            </button>
          </Link>
        </div>
        <div className="md:flex md:justify-between md:flex-row flex-col">
          <div className="flex justify-between flex-wrap">
            <Link href="/projects">
              <div className="w-[343px] h-[302px] md:w-[420px] md:h-[224px] bg-white rounded-md p-4 md:flex md:justify-between mt-6">
                <div className="flex flex-col">
                  <h2 className="hidden md:block md:text-[24px] text-black font-satoshi">
                    Architectural <br /> Practice
                  </h2>
                  <h2 className="block md:hidden md:text-[24px] text-black font-satoshi">
                    Architectural Practice
                  </h2>
                  <p className="text-[16px] text-[#008B8B] md:mt-28 font-satoshi">
                    5 projects
                  </p>
                </div>
                <Image src={Achi} alt="arc-des" className="mt-8 md:mt-0" />
              </div>
            </Link>
            <Link href="/projects">
              <div className="w-[343px] h-[302px] md:w-[420px] md:h-[224px] bg-white rounded-md p-4 md:flex md:justify-between mt-6">
                <div className="flex flex-col">
                  <h2 className=" md:text-[24px] text-black">BIM</h2>

                  <p className="text-[16px] text-[#008B8B] md:mt-36">
                    12 projects
                  </p>
                </div>
                <Image src={BimNew} alt="arc-des" className="" />
              </div>
            </Link>
            <Link href="/projects">
              <div className="w-[343px] h-[302px] md:w-[420px] md:h-[224px] bg-white rounded-md p-4 md:flex md:justify-between mt-6">
                <div className="flex flex-col">
                  <h2 className=" md:text-[24px] text-black">MEP</h2>

                  <p className="text-[16px] text-[#008B8B] md:mt-36">
                    3 projects
                  </p>
                </div>
                <Image src={MepNew} alt="arc-des" className="" />
              </div>
            </Link>
            <Link href="/projects">
              <div className="w-[343px] h-[302px] md:w-[420px] md:h-[224px] bg-white rounded-md p-4 md:flex md:justify-between mt-6">
                <div className="flex flex-col">
                  <h2 className=" md:text-[24px] text-black">University</h2>

                  <p className="text-[16px] text-[#008B8B] md:mt-36">
                    5 projects
                  </p>
                </div>
                <Image src={UniversityNew} alt="arc-des" className="" />
              </div>
            </Link>
          </div>
          <div>
            {/* fifh project */}
            <Link href="/projects">
              <div className="w-[343px] h-[302px] md:w-[280px] md:h-[470px] bg-white rounded-md p-4  mt-6 md:ml-8">
                <div className="flex flex-col">
                  <h2 className=" md:text-[24px] text-black">Structural</h2>

                  <p className="text-[16px] text-[#008B8B] md:mt-4 md:mb-10">
                    6 projects
                  </p>
                </div>
                <Image
                  src={StructuralNew}
                  alt="arc-des"
                  className="md:w-[232px] md:h-[297px] w-[297px] h-[237px]"
                />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* skills section */}

      <div className="px-4 py-10 md:px-40">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold font-satoshi">Skills</h2>
          <Link href="/skills">
            <button className="bg-black text-white px-6 py-2 rounded-lg flex items-center font-satoshi">
              View All ↗
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Professional Skills */}
          <div>
            <div className="flex ">
              <Image src={HR} alt="hr" />
              <span className="text-xl font-semibold text-primary-100 ml-2">
                Professional
              </span>
            </div>
            <div className="mt-4 space-y-4">
              {[
                "BIM Content Modelling",
                "BIM Coordination & Data Management",
                "Setup of Templates, Workflow, Codes & Standards",
                "Architectural Design",
                "Site Surveying & Data Acquisition",
                "Development of BIM Execution Plan (BEP)",
              ].map((skill) => (
                <span
                  key={skill}
                  className="inline-block text-[16px] bg-white text-[#17191F] text-sm font-medium py-[12px] px-[16px] rounded-lg border border-[#D4D6DD] mr-2"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <div className="flex ">
              <Image src={HR} alt="hr" />
              <span className="text-xl font-semibold text-primary-100 ml-2">
                Soft
              </span>
            </div>

            <div className="mt-4 space-y-4">
              {[
                "Strategic Planning and Management",
                "Clear and Effective Communication",
                "Teamwork",
                "Time Management",
                "Critical Thinking and Problem Solving",
              ].map((skill) => (
                <span
                  key={skill}
                  className="inline-block bg-white text-[16px] text-[#17191F] text-sm font-medium  py-[12px] px-[16px] rounded-lg border border-[#D4D6DD] font-satoshi mr-2"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Software Skills */}
        <div className="mt-8">
          <div className="flex ">
            <Image src={HR} alt="hr" />
            <span className="text-xl font-semibold text-primary-100 font-satoshi ml-2">
              Software
            </span>
          </div>
          <div className="flex justify-between flex-wrap">
            <div className="w-[154.29px] h-[140px] gap-3 border border-[#D4D6DD] rounded-[6px] p-[16px_20px] flex flex-col justify-start items-center mt-2">
              <Image src={RevitSVG} alt="logo" className="" />
              <p className="text-center font-semibold text-black font-satoshi">
                Revit
              </p>
            </div>

            <div className="w-[154.29px] h-[140px] gap-3 border border-[#D4D6DD] rounded-[6px] p-[16px_20px] flex flex-col justify-start items-center mt-2">
              <Image src={NaviSVG} alt="logo" className="" />
              <p className="text-center font-semibold text-black font-satoshi">
                Navisworks
              </p>
            </div>
            <div className="w-[154.29px] h-[140px] gap-3 border border-[#D4D6DD] rounded-[6px] p-[16px_20px] flex flex-col justify-start items-center mt-2">
              <Image src={AutocadSVG} alt="logo" className="" />
              <p className="text-center font-semibold text-black font-satoshi">
                AutoCad
              </p>
            </div>
            <div className="w-[154.29px] h-[140px] gap-3 border border-[#D4D6DD] rounded-[6px] p-[16px_20px] flex flex-col justify-start items-center mt-2">
              <Image src={BIMSVG} alt="logo" className="" />
              <p className="text-center font-semibold text-black font-satoshi">
                BIM 360
              </p>
            </div>
            <div className="w-[154.29px] h-[140px] gap-3 border border-[#D4D6DD] rounded-[6px] p-[16px_20px] flex flex-col justify-start items-center mt-2">
              <Image src={PotoshopSVG} alt="logo" className="" />
              <p className="text-center font-semibold text-black font-satoshi">
                Photoshopt
              </p>
            </div>
            <div className="w-[154.29px] h-[140px] gap-3 border border-[#D4D6DD] rounded-[6px] p-[16px_20px] flex flex-col justify-end items-center mt-2">
              <Image src={IDSVG} alt="logo" className="" />
              <p className="text-center font-semibold text-black font-satoshi">
                Indesign
              </p>
            </div>

            <Link
              href="/skills"
              className="bg-white hidden md:block cursor-pointer"
            >
              <div className="bg-white mt-2 hidden md:block cursor-pointer">
                <Image src={More} alt="revite" />
              </div>
            </Link>
            <Link href="/skills" className="bg-white mt-2 md:hidden block">
              <div className="bg-white mt-2 md:hidden block">
                <Image src={MoreMobile} alt="revite" />
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* bottom hero */}
      <div className=" mx-auto  px-4 md:px-40 bg-[#F3F3F5] pt-[85px] pb-[85px]">
        <h1 className="text-[32px] font-[700] text-center text-[#17191F] mb-4 font-satoshi">
          From Inception To Handover
        </h1>

        <p className="text-[#82858F] text-[20px] text-center max-w-2xl mx-auto mb-8 font-satoshi leading-[160%] font-[400]">
          I have contributed to many projects from, ensuring seamless
          collaboration, accurate modeling, and efficient coordination. By
          optimizing workflows, resolving clashes, and enhancing communication,
          I’ve helped deliver high-quality, cost-effective projects from concept
          to reality.
        </p>

        <div className="relative w-full h-96 md:h-[500px]">
          <Image
            src={SeyiFooter}
            alt="Construction site with workers in yellow safety vests"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
}

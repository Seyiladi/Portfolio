"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import HR from "@/assets/HR.svg";
import RevitN from "@/assets/ReviteN.svg";
import NaviN from "@/assets/NaviN.svg";
import AutocadN from "@/assets/AutocadN.svg";
import BIM360N from "@/assets/BIM360N.svg";
import PhotoshopN from "@/assets/PhotoshopN.svg";
import SpreadsheetN from "@/assets/SpreedsheetN.svg";
import IllustratorN from "@/assets/IlustratorN.svg";
import IndesignN from "@/assets/IndesignN.svg";
import RinoN from "@/assets/RinoN.svg";
import Revisto from "@/assets/RevistoN.svg";
import Lumion from "@/assets/LumionN.svg";
import Solibri from "@/assets/SolibriN.svg";
import Dynamo from "@/assets/DynamoN.svg";
import Python from "@/assets/PythonN.svg";
import RevitM from "@/assets/ReviteM.svg";
import NaviM from "@/assets/NaviM.svg";
import AutocadM from "@/assets/AutocadM.svg";
import BIM360M from "@/assets/BIM360M.svg";
import PhotoshopM from "@/assets/PhotoshopM.svg";
import IndesignM from "@/assets/IndesignM.svg";
import IllustratorM from "@/assets/IllustratorM.svg";
import SpreadsheetM from "@/assets/SpreadsheetM.svg";
import RinoM from "@/assets/RinoM.svg";
import RevistoM from "@/assets/RevistoM.svg";
import Lumionm from "@/assets/LumionM.svg";
import SolibriM from "@/assets/SolibriM.svg";
import DynamoM from "@/assets/DynamoM.svg";
import PythonM from "@/assets/PythonM.svg";
function page() {
  return (
    <div>
      <div className="bg-[#17191F] text-white py-16 flex flex-col items-center justify-center">
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* Skills Section */}

          <div className="inline-block py-2 px-6 bg-[#008B8B1F] rounded-full text-[#008B8B] text-sm font-medium mb-4">
            SKILLS
          </div>
          <h2 className="text-2xl font-semibold mb-4">
            Developed Competencies and Tools
          </h2>

          {/* Subtitle / Description */}
          <p className="text-lg text-[#82858F] text-[20px] mb-8 md:px-44 leading-8 ">
            My expertise in Buildings is built on a strong foundation of
            technical skills and industry knowledge. I have acquired a range of
            competencies in 3D modeling, coordination, and data management,
            along with proficiency in industry-leading tools and techniques.
            Below is a selection of my key skills and tools that enhance my BIM
            workflow.
          </p>
        </div>
      </div>

      <div className="px-4 py-10 md:px-40">
        <div className="">
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
                "BIM Content Modelling (MEP, Structural & Architectural)",
                "Professional Revit Family Creation / Management",
                "BIM Coordination & Data Management across Multiple Disciplines",
                "Setup of Templates, Work-flows, Codes & Standards",
                "Work-sharing Setup and Management",
                "Clash Detection, Model Health Checks, Data Verification, and Reports",
                "Development of BIM Execution Plan (BEP) ",
                "Construction Detailing and Documentation",
                "Architectural Design",
                "Preliminary Structural Design and Modelling",
                "Preliminary MEP Schematics and Modelling",
                "Quantity Take-off",
                "Site Surveying, Laser Scanning, and Data Acquisition",
                "Compliance with SMTPs described in ISO 19650",
                "Compliance with Project EIR and BEP",
                "CDE Administration",
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
          <div className="mt-8">
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
                "Critical Thinking and Problem Solving",
                "Adaptability and Versatility",
                "Teamwork",
                "Time Management",
              ].map((skill) => (
                <span
                  key={skill}
                  className="inline-block bg-white text-[16px] text-[#17191F] text-sm font-medium  py-[12px] px-[16px] rounded-lg border border-[#D4D6DD] mr-2"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Software Skills */}
        <div className="mt-8">
          <div className="flex mb-4">
            <Image src={HR} alt="hr" />
            <span className="text-xl font-semibold text-primary-100 ml-2">
              Software
            </span>
          </div>
          <div className="flex justify-between flex-wrap">
            <div className="bg-white mt-2 ">
              <Image src={RevitN} alt="revite" className="hidden md:block" />
              <Image src={RevitM} alt="revite" className="md:hidden block" />
            </div>
            <div className="bg-white mt-2 ">
              <Image src={NaviN} alt="revite" className="hidden md:block" />
              <Image src={NaviM} alt="revite" className="md:hidden block" />
            </div>

            <div className="bg-white mt-2 ">
              <Image src={AutocadN} alt="revite" className="hidden md:block" />
              <Image src={AutocadM} alt="revite" className="md:hidden block" />
            </div>
            <div className="bg-white mt-2 ">
              <Image src={BIM360N} alt="revite" className="hidden md:block" />
              <Image src={BIM360M} alt="revite" className="md:hidden block" />
            </div>
            <div className="bg-white mt-2 ">
              <Image
                src={PhotoshopN}
                alt="revite"
                className="hidden md:block"
              />
              <Image
                src={PhotoshopM}
                alt="revite"
                className="md:hidden block"
              />
            </div>
            <div className="bg-white mt-2 ">
              <Image src={IndesignN} alt="revite" className="hidden md:block" />
              <Image src={IndesignM} alt="revite" className="md:hidden block" />
            </div>
            <div className="bg-white mt-2 ">
              <Image
                src={IllustratorN}
                alt="revite"
                className="hidden md:block"
              />
              <Image
                src={IllustratorM}
                alt="revite"
                className="md:hidden block"
              />
            </div>
            <div className="bg-white mt-2 ">
              <Image
                src={SpreadsheetN}
                alt="revite"
                className="hidden md:block"
              />
              <Image
                src={SpreadsheetM}
                alt="revite"
                className="md:hidden block"
              />
            </div>
            <div className="bg-white mt-2 ">
              <Image src={RinoN} alt="revite" className="hidden md:block" />
              <Image src={RinoM} alt="revite" className="md:hidden block" />
            </div>
            <div className="bg-white mt-2 ">
              <Image src={Revisto} alt="revite" className="hidden md:block" />
              <Image src={RevistoM} alt="revite" className="md:hidden block" />
            </div>
            <div className="bg-white mt-2 ">
              <Image src={Lumion} alt="revite" className="hidden md:block" />
              <Image src={Lumionm} alt="revite" className="md:hidden block" />
            </div>
            <div className="bg-white mt-2 ">
              <Image src={Solibri} alt="revite" className="hidden md:block" />
              <Image src={SolibriM} alt="revite" className="md:hidden block" />
            </div>
            <div className="bg-white mt-2 ">
              <Image src={Dynamo} alt="revite" className="hidden md:block" />
              <Image src={DynamoM} alt="revite" className="md:hidden block" />
            </div>
            <div className="bg-white mt-2 ">
              <Image src={Python} alt="revite" className="hidden md:block" />
              <Image src={PythonM} alt="revite" className="md:hidden block" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;

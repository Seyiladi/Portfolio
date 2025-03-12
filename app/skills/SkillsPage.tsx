"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import HR from "@/assets/HR.svg";

import RevitSVG from "@/assets/RevitSVG.svg";
import NaviSVG from "@/assets/NavSVG.svg";
import AutocadSVG from "@/assets/AutocadSVG.svg";
import BIMSVG from "@/assets/BIMSVG.svg";
import PotoshopSVG from "@/assets/PSSVG.svg";
import IDSVG from "@/assets/IDSVG.svg";
import IllustratorSVG from "@/assets/IllustratorSVG.svg";
import ExcellSVG from "@/assets/ExcellSVG.svg";
import RhinoSVG from "@/assets/RhinoSVG.svg";
import RevistoSVG from "@/assets/RevistoSVG.svg";
import LumionSVG from "@/assets/LumionSVG.svg";
import SolibSVG from "@/assets/SolibSVG.svg";
import DynamoSVG from "@/assets/DynamoSVG.svg";
import PhytonSVG from "@/assets/PhytonSVG.svg";

function SkillsPage() {
  const revit = 100;
  const navis = 100;
  const autocad = 100;
  const bim = 80;
  const photoshop = 80;
  const indesign = 80;
  const illustrator = 80;
  const excell = 80;
  const rhino = 100;
  const revisto = 100;
  const lumion = 100;
  const solib = 60;
  const dynamo = 80;
  const phyton = 60;

  const [progressValue, setProgressValue] = useState(revit);
  const [navisValue, setNavisValue] = useState(navis);
  const [autocadValue, setAutocadValue] = useState(autocad);
  const [bimValue, setBimValue] = useState(bim);
  const [photoshopValue, setPhotoshopValue] = useState(photoshop);
  const [indesignValue, setIndesignValue] = useState(indesign);
  const [illustratorValue, setIllustratorValue] = useState(illustrator);
  const [excellValue, setExcellValue] = useState(excell);
  const [rhinoValue, setRhinoValue] = useState(rhino);
  const [revistoValue, setRevistoValue] = useState(revisto);
  const [lumionValue, setLumionValue] = useState(lumion);
  const [solibValue, setSolibValue] = useState(solib);
  const [dynamoValue, setDynamoValue] = useState(dynamo);
  const [phytonValue, setPhytonValue] = useState(phyton);

  return (
    <div>
      <div className="bg-[#17191F] text-white py-16 flex flex-col items-center justify-center">
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* Skills Section */}

          <div className="inline-block py-2 px-6 bg-[#008B8B1F] rounded-full text-[#008B8B] text-sm font-medium mb-4 font-satoshi">
            SKILLS
          </div>
          <h2 className="text-2xl font-semibold mb-4 font-satoshi">
            Developed Competencies and Tools
          </h2>

          {/* Subtitle / Description */}
          <p className="text-lg text-[#82858F] text-[20px] mb-8 md:px-44 leading-8 font-satoshi">
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
                  className="inline-block text-[16px] bg-white text-[#17191F] text-sm font-medium py-[12px] px-[16px] rounded-lg border border-[#D4D6DD] mr-2 font-satoshi"
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
              <span className="text-xl font-semibold text-primary-100 ml-2 font-satoshi">
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
                  className="inline-block bg-white text-[16px] text-[#17191F] text-sm font-medium  py-[12px] px-[16px] rounded-lg border border-[#D4D6DD] mr-2 font-satoshi"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Software Skills */}
        <div className="mt-8 md:mb-[100px]">
          <div className="flex mb-4">
            <Image src={HR} alt="hr" />
            <span className="text-xl font-semibold text-primary-100 ml-2 font-satoshi">
              Software
            </span>
          </div>
          <div className="flex justify-between flex-wrap">
            {/* revit */}
            <div className=" mt-4  h-[132px] w-[162px] md:w-[280px] md:h-[76px] border border-[#D4D6DD] rounded-[6px] flex justify-between items-center gap-[12px] p-[16px] flex-wrap ">
              <Image src={RevitSVG} alt="Revit" className="w-[44px] h-[44px]" />
              <div className="w-full md:w-[75%]">
                <div className="flex justify-between items-center ">
                  <p className="text-[#17191F] text-[16px] font-semibold">
                    Revit
                  </p>
                  <p className="text-primary-100 text-[12px] ">(Expert)</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="w-full bg-[#E3E3E4] h-[8px] rounded-[8px]">
                    <div
                      className="bg-[#17191F] h-[8px] rounded-[8px]"
                      style={{ width: `${progressValue}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-500 ml-2">
                    {progressValue}%
                  </span>
                </div>
              </div>
            </div>
            {/* revit end */}

            {/* navis */}
            <div className=" mt-4  h-[132px] w-[162px] md:w-[280px] md:h-[76px] border border-[#D4D6DD] rounded-[6px] flex justify-between items-center gap-[12px] p-[16px] flex-wrap ">
              <Image src={NaviSVG} alt="Revit" className="w-[44px] h-[44px]" />
              <div className="w-full md:w-[75%]">
                <div className="flex justify-between items-center ">
                  <p className="text-[#17191F] text-[16px] font-semibold">
                    Navisworks
                  </p>
                  <p className="text-primary-100 text-[12px] ">(Expert)</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="w-full bg-[#E3E3E4] h-[8px] rounded-[8px]">
                    <div
                      className="bg-[#17191F] h-[8px] rounded-[8px]"
                      style={{ width: `${navisValue}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-500 ml-2">
                    {navisValue}%
                  </span>
                </div>
              </div>
            </div>
            {/* navis end */}

            {/* autocad */}
            <div className=" mt-4  h-[132px] w-[162px] md:w-[280px] md:h-[76px] border border-[#D4D6DD] rounded-[6px] flex justify-between items-center gap-[12px] p-[16px] flex-wrap ">
              <Image
                src={AutocadSVG}
                alt="Revit"
                className="w-[44px] h-[44px]"
              />
              <div className="w-full md:w-[75%]">
                <div className="flex justify-between items-center ">
                  <p className="text-[#17191F] text-[16px] font-semibold">
                    AutoCad
                  </p>
                  <p className="text-primary-100 text-[12px] ">(Expert)</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="w-full bg-[#E3E3E4] h-[8px] rounded-[8px]">
                    <div
                      className="bg-[#17191F] h-[8px] rounded-[8px]"
                      style={{ width: `${autocadValue}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-500 ml-2">
                    {autocadValue}%
                  </span>
                </div>
              </div>
            </div>
            {/* autocad end */}

            {/* bim */}
            <div className=" mt-4  h-[132px] w-[162px] md:w-[280px] md:h-[76px] border border-[#D4D6DD] rounded-[6px] flex justify-between items-center gap-[12px] p-[16px] flex-wrap ">
              <Image src={BIMSVG} alt="Revit" className="w-[44px] h-[44px]" />
              <div className="w-full md:w-[75%]">
                <div className="flex justify-between items-center ">
                  <p className="text-[#17191F] text-[16px] font-semibold">
                    BIM 360
                  </p>
                  <p className="text-primary-100 text-[12px] ">(Good)</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="w-full bg-[#E3E3E4] h-[8px] rounded-[8px]">
                    <div
                      className="bg-[#17191F] h-[8px] rounded-[8px]"
                      style={{ width: `${bimValue}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-500 ml-2">
                    {bimValue}%
                  </span>
                </div>
              </div>
            </div>
            {/* bim end */}

            {/* photoshop */}
            <div className=" mt-4  h-[132px] w-[162px] md:w-[280px] md:h-[76px] border border-[#D4D6DD] rounded-[6px] flex justify-between items-center gap-[12px] p-[16px] flex-wrap ">
              <Image
                src={PotoshopSVG}
                alt="Revit"
                className="w-[44px] h-[44px]"
              />
              <div className="w-full md:w-[75%]">
                <div className="flex justify-between items-center ">
                  <p className="text-[#17191F] text-[16px] font-semibold">
                    Photoshop
                  </p>
                  <p className="text-primary-100 text-[12px] ">(Good)</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="w-full bg-[#E3E3E4] h-[8px] rounded-[8px]">
                    <div
                      className="bg-[#17191F] h-[8px] rounded-[8px]"
                      style={{ width: `${photoshopValue}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-500 ml-2">
                    {photoshopValue}%
                  </span>
                </div>
              </div>
            </div>
            {/* photoshop end */}

            {/* indesign */}
            <div className=" mt-4  h-[132px] w-[162px] md:w-[280px] md:h-[76px] border border-[#D4D6DD] rounded-[6px] flex justify-between items-center gap-[12px] p-[16px] flex-wrap ">
              <Image src={IDSVG} alt="Revit" className="w-[44px] h-[44px]" />
              <div className="w-full md:w-[75%]">
                <div className="flex justify-between items-center ">
                  <p className="text-[#17191F] text-[16px] font-semibold">
                    Indesign
                  </p>
                  <p className="text-primary-100 text-[12px] ">(Good)</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="w-full bg-[#E3E3E4] h-[8px] rounded-[8px]">
                    <div
                      className="bg-[#17191F] h-[8px] rounded-[8px]"
                      style={{ width: `${indesignValue}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-500 ml-2">
                    {indesignValue}%
                  </span>
                </div>
              </div>
            </div>
            {/* indesign end */}

            {/* illustrator */}
            <div className=" mt-4  h-[132px] w-[162px] md:w-[280px] md:h-[76px] border border-[#D4D6DD] rounded-[6px] flex justify-between items-center gap-[12px] p-[16px] flex-wrap ">
              <Image
                src={IllustratorSVG}
                alt="Revit"
                className="w-[44px] h-[44px]"
              />
              <div className="w-full md:w-[75%]">
                <div className="flex justify-between items-center ">
                  <p className="text-[#17191F] text-[16px] font-semibold">
                    Illustrator
                  </p>
                  <p className="text-primary-100 text-[12px] ">(Good)</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="w-full bg-[#E3E3E4] h-[8px] rounded-[8px]">
                    <div
                      className="bg-[#17191F] h-[8px] rounded-[8px]"
                      style={{ width: `${illustratorValue}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-500 ml-2">
                    {illustratorValue}%
                  </span>
                </div>
              </div>
            </div>
            {/* illustrator end */}

            {/* excell */}
            <div className=" mt-4  h-[132px] w-[162px] md:w-[280px] md:h-[76px] border border-[#D4D6DD] rounded-[6px] flex justify-between items-center gap-[12px] p-[16px] flex-wrap ">
              <Image
                src={ExcellSVG}
                alt="Revit"
                className="w-[44px] h-[44px]"
              />
              <div className="w-full md:w-[75%]">
                <div className="flex justify-between items-center ">
                  <p className="text-[#17191F] text-[16px] font-semibold">
                    Spreadsheet
                  </p>
                  <p className="text-primary-100 text-[12px] ">(Good)</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="w-full bg-[#E3E3E4] h-[8px] rounded-[8px]">
                    <div
                      className="bg-[#17191F] h-[8px] rounded-[8px]"
                      style={{ width: `${excellValue}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-500 ml-2">
                    {excellValue}%
                  </span>
                </div>
              </div>
            </div>
            {/* excell end */}

            {/* rhino */}
            <div className=" mt-4  h-[132px] w-[162px] md:w-[280px] md:h-[76px] border border-[#D4D6DD] rounded-[6px] flex justify-between items-center gap-[12px] p-[16px] flex-wrap ">
              <Image src={RhinoSVG} alt="Revit" className="w-[44px] h-[44px]" />
              <div className="w-full md:w-[75%]">
                <div className="flex justify-between items-center ">
                  <p className="text-[#17191F] text-[16px] font-semibold">
                    Rhino 3D
                  </p>
                  <p className="text-primary-100 text-[12px] ">(Expert)</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="w-full bg-[#E3E3E4] h-[8px] rounded-[8px]">
                    <div
                      className="bg-[#17191F] h-[8px] rounded-[8px]"
                      style={{ width: `${rhinoValue}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-500 ml-2">
                    {rhinoValue}%
                  </span>
                </div>
              </div>
            </div>
            {/* rhino end */}

            {/* revisto */}
            <div className=" mt-4  h-[132px] w-[162px] md:w-[280px] md:h-[76px] border border-[#D4D6DD] rounded-[6px] flex justify-between items-center gap-[12px] p-[16px] flex-wrap ">
              <Image
                src={RevistoSVG}
                alt="Revit"
                className="w-[44px] h-[44px]"
              />
              <div className="w-full md:w-[75%]">
                <div className="flex justify-between items-center ">
                  <p className="text-[#17191F] text-[16px] font-semibold">
                    Revizto
                  </p>
                  <p className="text-primary-100 text-[12px] ">(Expert)</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="w-full bg-[#E3E3E4] h-[8px] rounded-[8px]">
                    <div
                      className="bg-[#17191F] h-[8px] rounded-[8px]"
                      style={{ width: `${revistoValue}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-500 ml-2">
                    {revistoValue}%
                  </span>
                </div>
              </div>
            </div>
            {/* revisto end */}

            {/* lumion */}
            <div className=" mt-4  h-[132px] w-[162px] md:w-[280px] md:h-[76px] border border-[#D4D6DD] rounded-[6px] flex justify-between items-center gap-[12px] p-[16px] flex-wrap ">
              <Image
                src={LumionSVG}
                alt="Revit"
                className="w-[44px] h-[44px]"
              />
              <div className="w-full md:w-[75%]">
                <div className="flex justify-between items-center ">
                  <p className="text-[#17191F] text-[16px] font-semibold">
                    Lumion
                  </p>
                  <p className="text-primary-100 text-[12px] ">(Expert)</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="w-full bg-[#E3E3E4] h-[8px] rounded-[8px]">
                    <div
                      className="bg-[#17191F] h-[8px] rounded-[8px]"
                      style={{ width: `${lumionValue}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-500 ml-2">
                    {lumionValue}%
                  </span>
                </div>
              </div>
            </div>
            {/* lumion end */}

            {/* solibri */}
            <div className=" mt-4  h-[132px] w-[162px] md:w-[280px] md:h-[76px] border border-[#D4D6DD] rounded-[6px] flex justify-between items-center gap-[12px] p-[16px] flex-wrap ">
              <Image src={SolibSVG} alt="Revit" className="w-[44px] h-[44px]" />
              <div className="w-full md:w-[75%]">
                <div className="flex justify-between items-center ">
                  <p className="text-[#17191F] text-[16px] font-semibold">
                    Solibiri
                  </p>
                  <p className="text-primary-100 text-[12px] ">(Average)</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="w-full bg-[#E3E3E4] h-[8px] rounded-[8px]">
                    <div
                      className="bg-[#17191F] h-[8px] rounded-[8px]"
                      style={{ width: `${solibValue}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-500 ml-2">
                    {solibValue}%
                  </span>
                </div>
              </div>
            </div>
            {/* solibri end */}

            {/* dynamo */}
            <div className=" mt-4  h-[132px] w-[162px] md:w-[280px] md:h-[76px] border border-[#D4D6DD] rounded-[6px] flex justify-between items-center gap-[12px] p-[16px] flex-wrap ">
              <Image
                src={DynamoSVG}
                alt="Revit"
                className="w-[44px] h-[44px]"
              />
              <div className="w-full md:w-[75%]">
                <div className="flex justify-between items-center ">
                  <p className="text-[#17191F] text-[16px] font-semibold">
                    Dynamo
                  </p>
                  <p className="text-primary-100 text-[12px] ">(Good)</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="w-full bg-[#E3E3E4] h-[8px] rounded-[8px]">
                    <div
                      className="bg-[#17191F] h-[8px] rounded-[8px]"
                      style={{ width: `${dynamoValue}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-500 ml-2">
                    {dynamoValue}%
                  </span>
                </div>
              </div>
            </div>
            {/* dynamo end */}

            {/* phyton */}
            <div className=" mt-4  h-[132px] w-[162px] md:w-[280px] md:h-[76px] border border-[#D4D6DD] rounded-[6px] flex justify-between items-center gap-[12px] p-[16px] flex-wrap ">
              <Image
                src={PhytonSVG}
                alt="Revit"
                className="w-[44px] h-[44px]"
              />
              <div className="w-full md:w-[75%]">
                <div className="flex justify-between items-center ">
                  <p className="text-[#17191F] text-[16px] font-semibold">
                    Python
                  </p>
                  <p className="text-primary-100 text-[12px] ">(Average)</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="w-full bg-[#E3E3E4] h-[8px] rounded-[8px]">
                    <div
                      className="bg-[#17191F] h-[8px] rounded-[8px]"
                      style={{ width: `${phytonValue}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-500 ml-2">
                    {phytonValue}%
                  </span>
                </div>
              </div>
            </div>
            {/* phyton end */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsPage;

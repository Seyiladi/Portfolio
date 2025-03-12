"use client";
import React, { useState } from "react";
import Image from "next/image";
import INGI from "@/assets/INGIN.svg";
import DoubleUpp from "@/assets/DoubleUp.svg";
import DoubleDown from "@/assets/DoubleDown.svg";
import BimObject from "@/assets/BimObject.svg";
import Skein from "@/assets/SSkein.svg";
import Marco from "@/assets/Marco.svg";
import FMA from "@/assets/FMA.svg";
import Harcourt from "@/assets/Harcourt.svg";
import PhNew from "@/assets/PhNew.svg";

function Experience() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  const [isCollapsed2, setIsCollapsed2] = useState(true);

  const toggleCollapse2 = () => {
    setIsCollapsed2(!isCollapsed2);
  };
  const [isCollapsed3, setIsCollapsed3] = useState(true);

  const toggleCollapse3 = () => {
    setIsCollapsed3(!isCollapsed3);
  };
  const [isCollapsed4, setIsCollapsed4] = useState(true);

  const toggleCollapse4 = () => {
    setIsCollapsed4(!isCollapsed4);
  };
  const [isCollapsed5, setIsCollapsed5] = useState(true);

  const toggleCollapse5 = () => {
    setIsCollapsed5(!isCollapsed5);
  };
  const [isCollapsed6, setIsCollapsed6] = useState(true);

  const toggleCollapse6 = () => {
    setIsCollapsed6(!isCollapsed6);
  };
  return (
    <div>
      <div className="bg-[#17191F] text-white py-16 flex flex-col items-center justify-center">
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* Skills Section */}

          <div className="inline-block py-2 px-6 bg-[#008B8B1F] rounded-full text-[#008B8B] text-sm font-medium mb-4 font-satoshi">
            EXPERIENCE
          </div>
          <h2 className="text-2xl font-semibold mb-4 font-satoshi">
            More on my Professional Experience.
          </h2>

          {/* Subtitle / Description */}
          <p className=" text-[#82858F] text-[20px] mb-8 md:px-28 leading-8 font-satoshi ">
            My experience spans across various sectors, where I have ensured
            seamless model coordination, clash detection, and data-driven
            decision-making. Explore my journey and see how my expertise in
            Building Information Modeling (BIM) has contributed to successful
            projects.
          </p>
        </div>
      </div>
      <div className="px-4 py-16 md:px-40">
        {/* ingi */}
        <div className="relative flex items-center mb-4">
          {/* Black circle outside the card */}
          <div className="absolute hidden md:block left-[-14px] top-0 transform -translate-y-1/2 w-[10px] h-[10px] rounded-full bg-black"></div>

          {/* Vertical line outside the card */}
          <div className="absolute hidden md:block left-[-10px] top-1 h-full border-l-2 border-[#D4D6DD]"></div>

          {/* Main content (card) */}
          <div className="flex flex-col md:flex-row rounded-md border border-[#D4D6DD] p-2 ml-2 flex-wrap lg:flex-nowrap">
            <Image
              src={INGI}
              alt="Ingrinn logo"
              className="hidden md:block self-start"
            />
            <Image
              src={INGI}
              alt="Ingrinn logo"
              className="md:hidden block h-[48px] w-[144px]"
            />
            <div className="md:ml-4">
              <div className="flex flex-col md:flex-row md:justify-between">
                <p className="text-[#17191F] text-[20px] font-semibold">
                  Inginn Snc. Italy.
                </p>
                <p className="text-primary-100">Mar 2022 - Current</p>
              </div>
              <p className="text-[#17191F] text-[16px]">BIM MEP Coordinator.</p>

              <ul className="space-y-2 text-[#82858F] font-satoshi list-disc pl-5">
                <li className="text-sm">
                  Research and Development for optimization of systems and
                  procedures
                </li>
                <li className="text-sm">
                  Modelling and Coordination of HVAC, Electrical and Plumbing
                  Distribution Networks (Systems, Fixtures, Equipments and
                  Fittings)
                </li>
                <div
                  className={`${isCollapsed ? "hidden" : ""} text-[#82858F]`}
                >
                  <li className="text-sm">
                    Production of MEP construction drawings
                  </li>
                  <li className="text-sm">
                    Expert Family Optimization, Parameters, and Standard
                    Management
                  </li>
                  <li className="text-sm">
                    Collaboration with multiple parties (inc. Project Engineers,
                    On-site Contractors, Architects and Manufacturers)
                  </li>
                </div>
              </ul>
              <button
                className="text-primary-100 font-semibold text-sm mb-3"
                onClick={toggleCollapse}
              >
                {isCollapsed ? (
                  <div className="flex justify-center items-center">
                    <p>View More</p>
                    <Image src={DoubleDown} alt="arrow_down" />
                  </div>
                ) : (
                  <div className="flex justify-center items-center">
                    <p>Collapse</p>
                    <Image src={DoubleUpp} alt="arrow_up" />
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
        {/* ingi end */}

        {/* skein */}
        <div className="relative flex items-center mb-4">
          {/* Black circle outside the card */}
          <div className="absolute hidden md:block left-[-14px] top-0 transform -translate-y-1/2 w-[10px] h-[10px] rounded-full bg-black"></div>

          {/* Vertical line outside the card */}
          <div className="absolute hidden md:block left-[-10px] top-[5px] h-full border-l-2 border-[#D4D6DD]"></div>

          {/* Main content (card) */}
          <div className="flex flex-col md:flex-row rounded-md border border-[#D4D6DD] p-2 ml-2 flex-wrap lg:flex-nowrap w-full">
            <Image
              src={Skein}
              alt="Ingrinn logo"
              className="hidden md:block self-start   border-[#000000] border-2"
            />
            <Image
              src={Skein}
              alt="Ingrinn logo"
              className="md:hidden block h-[48px] w-[144px] border-[#000000] border-2"
            />
            <div className="md:ml-4 w-full">
              <div className="flex flex-col md:flex-row md:justify-between">
                <p className="text-[#17191F] text-[20px] font-semibold font-satoshi">
                  Skein BIM. Italy.
                </p>
                <p className="text-primary-100 font-satoshi">
                  Mar 2021 - Mar 2022
                </p>
              </div>
              <p className="text-[#17191F] text-[16px] font-satoshi">
                Lead BIM Technician.
              </p>

              <ul className="space-y-2 text-[#82858F]  font-satoshi list-disc pl-5">
                <li className="text-sm">Work-flow Definition and Management</li>
                <li className="text-sm">
                  Technical Project Management: Fostering Teamwork and
                  Productivity
                </li>
                <div
                  className={`${isCollapsed2 ? "hidden" : ""} text-[#82858F]`}
                >
                  <li className="text-sm">
                    BIM Content Development and Data Management for Technical
                    Products
                  </li>
                  <li className="text-sm">Quality Assessment of BIM Assets</li>
                </div>
              </ul>
              <button
                className="text-primary-100 font-semibold text-sm mb-3"
                onClick={toggleCollapse2}
              >
                {isCollapsed2 ? (
                  <div className="flex justify-center items-center">
                    <p>View More</p>
                    <Image src={DoubleDown} alt="arrow_down" />
                  </div>
                ) : (
                  <div className="flex justify-center items-center">
                    <p>Collapse</p>
                    <Image src={DoubleUpp} alt="arrow_up" />
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
        {/* skein end */}

        {/* bim object */}
        <div className="relative flex items-center mb-4">
          {/* Black circle outside the card */}
          <div className="absolute hidden md:block left-[-14px] top-0 transform -translate-y-1/2 w-[10px] h-[10px] rounded-full bg-black"></div>

          {/* Vertical line outside the card */}
          <div className="absolute hidden md:block left-[-10px] top-[5px] h-full border-l-2 border-[#D4D6DD]"></div>

          {/* Main content (card) */}
          <div className="flex flex-col md:flex-row rounded-md border border-[#D4D6DD] p-2 ml-2 flex-wrap lg:flex-nowrap w-full">
            <Image
              src={BimObject}
              alt="Ingrinn logo"
              className="hidden md:block self-start"
            />
            <Image
              src={BimObject}
              alt="Ingrinn logo"
              className="md:hidden block h-[48px] w-[144px]"
            />
            <div className="md:ml-4 w-full">
              <div className="flex flex-col md:flex-row md:justify-between">
                <p className="text-[#17191F] text-[20px] font-semibold font-satoshi">
                  BIMobject. Italy.
                </p>
                <p className="text-primary-100 font-satoshi">
                  Feb 2020 - Feb 2021
                </p>
              </div>
              <p className="text-[#17191F] text-[16px] font-satoshi">
                BIM Specialist.
              </p>

              <ul className="space-y-2 text-[#82858F] font-satoshi list-disc pl-5">
                <li className="text-sm">
                  Research, proposal and execution of solutions for construction
                  product manufacturing companies.
                </li>
                <li className="text-sm">
                  Modelling, scripting, and management of BIM assets for a wide
                  range of manufacturing companies using BIM script for
                  Rhinoceros 3D.
                </li>
                <div
                  className={`${isCollapsed3 ? "hidden" : ""} text-[#82858F]`}
                >
                  <li className="text-sm">
                    Creating parametric objects, families and projects in
                    Autodesk Revit.
                  </li>
                  <li className="text-sm">
                    Handling product specifications and providing technical
                    solutions for easy end-user work-flow
                  </li>
                </div>
              </ul>
              <button
                className="text-primary-100 font-semibold text-sm mb-3"
                onClick={toggleCollapse3}
              >
                {isCollapsed3 ? (
                  <div className="flex justify-center items-center">
                    <p>View More</p>
                    <Image src={DoubleDown} alt="arrow_down" />
                  </div>
                ) : (
                  <div className="flex justify-center items-center">
                    <p>Collapse</p>
                    <Image src={DoubleUpp} alt="arrow_up" />
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
        {/* bim object end */}

        {/* marco */}
        <div className="relative flex items-center mb-4">
          {/* Black circle outside the card */}
          <div className="absolute hidden md:block left-[-14px] top-0 transform -translate-y-1/2 w-[10px] h-[10px] rounded-full bg-black"></div>

          {/* Vertical line outside the card */}
          <div className="absolute hidden md:block left-[-10px] top-[5px] h-full border-l-2 border-[#D4D6DD]"></div>

          {/* Main content (card) */}
          <div className="flex flex-col md:flex-row rounded-md border border-[#D4D6DD] p-2 ml-2 flex-wrap lg:flex-nowrap w-full">
            <Image
              src={Marco}
              alt="Ingrinn logo"
              className="hidden md:block self-start"
            />
            <Image
              src={Marco}
              alt="Ingrinn logo"
              className="md:hidden block h-[48px] w-[144px]"
            />
            <div className="md:ml-4 w-full">
              <div className="flex flex-col md:flex-row md:justify-between ">
                <p className="text-[#17191F] text-[20px] font-semibold font-satoshi">
                  Marco Palmieri Studio. Milan, Italy.
                </p>
                <p className="text-primary-100 font-satoshi">
                  June 2019 - Sept 2019
                </p>
              </div>
              <p className="text-[#17191F] text-[16px] font-satoshi">
                Architectural Intern.
              </p>

              <ul className="space-y-2 text-[#82858F] p-2 font-satoshi list-disc pl-5">
                <li className="text-sm">
                  Focused on interior design; retrofit and art exhibition
                  design.
                </li>
                <li className="text-sm">
                  Drawing, modelling, rendering and documentation for designs
                  implementation and presentation
                </li>
                <div
                  className={`${isCollapsed4 ? "hidden" : ""} text-[#82858F]`}
                >
                  <li className="text-sm">
                    Software used in this studio included; SketchUp,
                    Illustrator, AutoCAD and Vray.
                  </li>
                </div>
              </ul>
              <button
                className="text-primary-100 font-semibold text-sm mb-3"
                onClick={toggleCollapse4}
              >
                {isCollapsed4 ? (
                  <div className="flex justify-center items-center">
                    <p>View More</p>
                    <Image src={DoubleDown} alt="arrow_down" />
                  </div>
                ) : (
                  <div className="flex justify-center items-center">
                    <p>Collapse</p>
                    <Image src={DoubleUpp} alt="arrow_up" />
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
        {/* marco end */}

        {/* fma start*/}
        <div className="relative flex items-center mb-4">
          {/* Black circle outside the card */}
          <div className="absolute hidden md:block left-[-14px] top-0 transform -translate-y-1/2 w-[10px] h-[10px] rounded-full bg-black"></div>

          {/* Vertical line outside the card */}
          <div className="absolute hidden md:block left-[-10px] top-[5px] h-full border-l-2 border-[#D4D6DD]"></div>

          {/* Main content (card) */}
          <div className="flex flex-col md:flex-row rounded-md border border-[#D4D6DD] p-2 ml-2 flex-wrap lg:flex-nowrap w-full">
            <Image
              src={FMA}
              alt="Ingrinn logo"
              className="hidden md:block self-start"
            />
            <Image
              src={FMA}
              alt="Ingrinn logo"
              className="md:hidden block h-[48px] w-[144px]"
            />
            <div className="md:ml-4 w-full">
              <div className="flex flex-col md:flex-row md:justify-between">
                <p className="text-[#17191F] text-[20px] font-semibold">
                  FMA Architects Ltd. Lagos, Nigeria.
                </p>
                <p className="text-primary-100 font-satoshi">
                  Jan 2017 - Jan 2018
                </p>
              </div>
              <p className="text-[#17191F] text-[16px] font-satoshi">
                Architectural Assistant.
              </p>

              <ul className="space-y-2 text-[#82858F] p-2 font-satoshi list-disc pl-5">
                <li className="text-sm">
                  My main task here involved architectural design and
                  coordination
                </li>
                <li className="text-sm">
                  Production of standard approval and construction drawings for
                  various projects.
                </li>
                <div
                  className={`${isCollapsed5 ? "hidden" : ""} text-[#82858F]`}
                >
                  <li className="text-sm">
                    Multidisciplinary project coordination
                  </li>
                  <li className="text-sm">
                    Organization of staff training sessions.
                  </li>
                </div>
              </ul>
              <button
                className="text-primary-100 font-semibold text-sm mb-3"
                onClick={toggleCollapse5}
              >
                {isCollapsed5 ? (
                  <div className="flex justify-center items-center">
                    <p>View More</p>
                    <Image src={DoubleDown} alt="arrow_down" />
                  </div>
                ) : (
                  <div className="flex justify-center items-center">
                    <p>Collapse</p>
                    <Image src={DoubleUpp} alt="arrow_up" />
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
        {/* fma end*/}

        {/* harcourt */}
        <div className="relative flex items-center mb-4">
          {/* Black circle outside the card */}
          <div className="absolute hidden md:block left-[-14px] top-0 transform -translate-y-1/2 w-[10px] h-[10px] rounded-full bg-black"></div>

          {/* Vertical line outside the card */}
          <div className="absolute hidden md:block left-[-10px] top-[5px] h-full border-l-2 border-[#D4D6DD]"></div>

          {/* Main content (card) */}
          <div className="flex flex-col md:flex-row rounded-md border border-[#D4D6DD] p-2 ml-2 flex-wrap lg:flex-nowrap w-full">
            <div className="md:w-[530px] h-[120px] w-[360px] border-[#000000] border-2 hidden md:block  ">
              <Image
                src={PhNew}
                alt="Ingrinn logo"
                className="hidden md:block  h-[100px] mt-2 ml-[80px] "
              />
            </div>
            <Image
              src={PhNew}
              alt="Ingrinn logo"
              className="md:hidden block h-[48px] w-[144px]  border-2"
            />
            <div className="md:ml-4 w-full font-satoshi">
              <div className="flex flex-col md:flex-row md:justify-between font-satoshi">
                <p className="text-[#17191F] text-[20px] font-semibold font-satoshi">
                  Harcourt Adukeh Associates. Port-Harcourt, Nigeria.
                </p>
                <div>
                  <p className="text-primary-100 font-satoshi">
                    June 2015 - Sept 2015
                  </p>
                  <p className="text-primary-100 font-satoshi">
                    June 2014 - Sept 2014
                  </p>
                </div>
              </div>
              <p className="text-[#17191F] text-[16px] font-satoshi">
                Architectural Internship.
              </p>

              <ul className="space-y-2 text-[#82858F] p-2 font-satoshi list-disc pl-5">
                <li className="text-sm">
                  Through site visits, meetings and co-worker discussions, I
                  observed the whole process of building construction and also
                  the interaction between the architect, the client and other
                  consultants.
                </li>
                <li className="text-sm">
                  Form exploration, environmental response and concept
                  development for the Guggenheim Museum, Helsinki, competition
                  entry
                </li>
                <div
                  className={`${isCollapsed6 ? "hidden" : ""} text-[#82858F]`}
                >
                  <li className="text-sm">
                    Design resolution and presentation documentation for
                    residential projects.
                  </li>
                  <li className="text-sm">
                    Working with different people at once also improved my
                    inter-personal communication skills and my ability to work
                    in a team
                  </li>
                </div>
              </ul>
              <button
                className="text-primary-100 font-semibold text-sm mb-3"
                onClick={toggleCollapse6}
              >
                {isCollapsed6 ? (
                  <div className="flex justify-center items-center">
                    <p>View More</p>
                    <Image src={DoubleDown} alt="arrow_down" />
                  </div>
                ) : (
                  <div className="flex justify-center items-center">
                    <p>Collapse</p>
                    <Image src={DoubleUpp} alt="arrow_up" />
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
        {/* harcourt end */}
      </div>
    </div>
  );
}

export default Experience;

"use client";
import React, { useState } from "react";
import ProjectHero from "@/assets/ProjectHero.svg";
import ArrowRight from "@/assets/LeftImgArr.svg";
import ArrowLeft from "@/assets/RightImgArro.svg";
import Image from "next/image";
import Align from "@/assets/Align.jpg";
import CardFloor from "@/assets/CADFloor.jpeg";
import Farm from "@/assets/Farm.jpeg";
import Farm2 from "@/assets/Farrm2.jpeg";
import Intro from "@/assets/Intro.jpg";
import Intro2 from "@/assets/Intro2.jpg";
import Outside from "@/assets/Outside.png";
import ProjectCover from "@/assets/ProjectCover.jpg";
import Render from "@/assets/Render.jpg";
import Link from "next/link";

import { projects } from "./data/projects";

function ImageGallery() {
  const images = [
    ProjectHero,
    Align,
    CardFloor,
    Farm,
    Farm2,
    Intro,
    Intro2,
    Outside,
    ProjectCover,
    Render,
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const handlePrevious = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleImageClick = (index: any) => {
    setCurrentImage(index);
  };

  const categories = [
    "All",
    "Architectural Practice",
    "BIM",
    "MEP",
    "Structural",
    "University",
  ];

  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((project) =>
          project.category
            .split(",")
            .map((cat) => cat.trim())
            .includes(activeTab)
        );
  return (
    <div>
      <div className="bg-[#17191F] text-white py-16 flex flex-col items-center justify-center">
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* Skills Section */}

          <div className="inline-block py-2 px-6 bg-[#008B8B1F] rounded-full text-[#008B8B] text-sm font-medium mb-4 font-satoshi">
            PROJECTS
          </div>
          <h2 className="text-2xl font-semibold mb-4 font-satoshi">
            Some of my Selected Projects
          </h2>

          {/* Subtitle / Description */}
          <p className=" text-[#82858F] text-[20px] mb-8 md:px-44 leading-8 font-satoshi">
            As a Multidisciplinary BIM Coordinator, I streamline workflows,
            enhance collaboration, and optimize digital construction processes.
            Explore my projects to see how BIM-driven solutions shape smarter,
            more efficient builds.
          </p>
        </div>
      </div>
      <div className="relative w-full">
        {/* Large Image with Navigation Arrows */}
        <div className="relative">
          <Image
            src={images[currentImage]}
            alt={`Image ${currentImage + 1}`}
            className="w-full h-[183.11px] md:h-[500px] object-contain md:object-contain "
          />
          {/* Left Arrow */}
          <button
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#17191FCC] text-white p-2 rounded-lg"
          >
            <Image src={ArrowLeft} alt="left" />
          </button>
          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#17191FCC] text-white p-2 rounded-lg"
          >
            <Image src={ArrowRight} alt="right" />
          </button>
        </div>

        {/* Small Thumbnails */}
        <div className="flex justify-center items-center">
          <div className="flex justify-start items-center space-x-4 mt-8 max-w-[1200px] overflow-x-auto overflow-y-hidden py-6 px-10 border rounded-md scrollbar-custom">
            {images.map((image, index) => (
              <div
                key={index}
                onClick={() => handleImageClick(index)}
                className={`flex-none w-[147px] h-[72px] m-1 cursor-pointer border flex items-center justify-center ${
                  currentImage === index ? "border-black" : "border-transparent"
                }`}
              >
                <Image
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="object-cover"
                  style={{ maxHeight: "100%", maxWidth: "100%" }}
                  width={147}
                  height={96}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-4 mb-[108px]">
        {/* Tab Navigation */}
        <div className="flex justify-start md:justify-center overflow-x-auto mb-6">
          <div className="flex space-x-8 border-b border-gray-300">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`inline-block text-sm font-semibold pb-2 px-4 border-b-2 text-nowrap ${
                  activeTab === category
                    ? "border-primary-100 text-primary-100"
                    : "border-transparent text-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.title}
              className="h-[419px] w-[282px] border border-[#D4D6DD] rounded-lg p-4 flex flex-col items-center mx-auto"
            >
              <Image
                src={project.image}
                alt={project.title}
                className="w-[227px] h-[280px] object-contain mb-4"
              />
              <h3 className="text-xl font-semibold text-center">
                {project.title}
              </h3>
              <Link
                href={`/projects/${project.slug}`}
                className="text-primary-100 text-sm mt-2 hover:underline"
              >
                View →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImageGallery;

"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import { projects } from "../data/projects";
import { useState } from "react";
import ArrowRight from "@/assets/LeftImgArr.svg";
import ArrowLeft from "@/assets/RightImgArro.svg";
import Download from "@/assets/Download.svg";
import Link from "next/link";
import Backgreen from "@/assets/Backgreen.svg";

const ProjectDetails = () => {
  const pathname = usePathname();
  const [currentImage, setCurrentImage] = useState(0);
  const [currentVideo, setCurrentVideo] = useState(0);

  const slug = decodeURIComponent(pathname?.split("/").pop() || "")
    .toLowerCase()
    .replace(/\s+/g, "-");

  const project = projects.find((p) => p.slug.toLowerCase() === slug);

  if (!project) {
    console.log(`No project found for slug: ${slug}`);
    return <div>Project not found</div>;
  }

  const images = project.images;
  const videos = project.videos || [];

  const handlePrevious = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleImageClick = (index: number) => {
    setCurrentImage(index);
  };

  const handlePreviousVideo = () => {
    setCurrentVideo((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const handleNextVideo = () => {
    setCurrentVideo((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  // Function to extract YouTube video ID from URL
  const getYouTubeId = (url: string) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  return (
    <div>
      <Link
        className="md:ml-[120px] flex items-center text-primary-100 text-[16px] mt-[53px]"
        href="/projects"
      >
        {" "}
        <Image src={Backgreen} alt="back_arrow" className="mr-2" />
        Back to Projects
      </Link>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-[32px] text-[#17191F] mb-[32px] mt-[32px]">
          {project?.title}
        </h1>
        <div className="relative w-full">
          {/* Large Image with Navigation Arrows */}
          <div className="relative">
            <Image
              src={images[currentImage]}
              alt={`Image ${currentImage + 1}`}
              className="w-full h-[183.11px] md:h-[500px] object-contain md:object-contain"
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
            <div className="flex justify-start items-center space-x-4 mt-8 max-w-[1200px] overflow-x-auto py-6 px-10 border rounded-md scrollbar-custom">
              {images.map((image, index) => (
                <div
                  key={index}
                  onClick={() => handleImageClick(index)}
                  className={`flex-none w-[147px] h-[72px] m-1 cursor-pointer border flex items-center justify-center ${
                    currentImage === index
                      ? "border-black"
                      : "border-transparent"
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
        <a
          href={project.pdf}
          download={project.title}
          className="mt-6 py-2 px-6 bg-[#17191F] w-[175px] h-[56px] rounded-md text-white text-sm font-medium flex items-center mb-[123.74px]"
        >
          Download PDF <Image src={Download} alt="download" className="ml-2" />
        </a>
      </div>

      {/* Video section */}
      {videos && videos.length > 0 && (
        <div className="flex flex-col items-center justify-center   px-4 md:px-40 bg-[#F3F3F5]  pt-[85px] pb-[85px]">
          <h2 className="text-[32px] font-[700] text-center text-[#17191F] mb-4 font-satoshi">
            Scenes & Events
          </h2>
          <div className="relative w-full max-w-[1200px]">
            {/* YouTube Video Player */}
            <div className="relative aspect-video w-full">
              <iframe
                src={`https://www.youtube.com/embed/${getYouTubeId(
                  videos[currentVideo]
                )}`}
                title={`YouTube video player ${currentVideo + 1}`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              {/* Only show navigation arrows if there are multiple videos */}
              {videos.length > 1 && (
                <>
                  {/* Left Arrow */}
                  <button
                    onClick={handlePreviousVideo}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#17191FCC] text-white p-2 rounded-lg z-10"
                  >
                    <Image src={ArrowLeft} alt="left" />
                  </button>
                  {/* Right Arrow */}
                  <button
                    onClick={handleNextVideo}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#17191FCC] text-white p-2 rounded-lg z-10"
                  >
                    <Image src={ArrowRight} alt="right" />
                  </button>
                </>
              )}
            </div>

            {/* Video indicators/thumbnails for multiple videos */}
            {videos.length > 1 && (
              <div className="flex justify-center mt-4">
                {videos.map((_, index) => (
                  <div
                    key={index}
                    onClick={() => setCurrentVideo(index)}
                    className={`w-3 h-3 rounded-full mx-1 cursor-pointer ${
                      currentVideo === index ? "bg-[#17191F]" : "bg-gray-300"
                    }`}
                  ></div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;

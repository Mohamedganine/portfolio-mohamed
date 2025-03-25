import Image from "next/image";
import React from "react";

const Experience: React.FC<{}> = () => {
  return (
    <section id="experience">
      <h2 className="text-white font-semibold text-center text-6xl   pt-[35px]">
        EXPERIENCE
      </h2>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        EXPLORE NOW
      </p>
      <div className=" container mx-auto 2xl ">
        <div className="md:flex md:flex-row md:justify-between pt-5">
          <div className="flex items-center gap-3">
            <Image
              src={"/WebHR.svg"}
              height={30}
              width={30}
              alt={"Ibrahim Memon - UX Experience"}
            />
            <p className="text-gray-300 ">
              <span className="font-semibold">Clickdoc /</span> Wordpress developer
            </p>
          </div>
          <p className="text-gray-300 md:pt-0 pt-3">
            May 2024 - Jul 2024, Casablanca
          </p>
        </div>

        <p className="text-gray-300 pt-5">
          During my internship at Click Doc, I was responsible for developing 
          the company&apos;s corporate website. Additionally, I worked as part of a team 
          on the creation of Click Lab, an innovative service that enables laboratories to offer
          home medical testing by sending specialists to collect samples from patients homes. 
          Both projects were developed using WordPress, where I contributed to website design, 
          template customization, 
          and the integration of necessary features to enhance user experience.
          <br />
        </p>
        <div className="flex-col flex sm:flex-row ">
          <div className="bg-transparent  mt-5 mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            WordPress
          </div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Elementor
          </div>
        </div>
      </div>
      
      <div className=" container mx-auto 2xl ">
        <div className="md:flex md:flex-row md:justify-between pt-20">
          <div className="flex items-center gap-3">
            <Image
              src={"/WebHR.svg"}
              height={30}
              width={30}
              alt={"Ibrahim Memon - UX Experience"}
            />
            <p className="text-gray-300 ">
              <span className="font-semibold">Cretikon /</span> Wordpress developer
            </p>
          </div>
          <p className="text-gray-300 md:pt-0 pt-3">
            Jul 2024 - Oct 2024, Casablanca
          </p>
        </div>

        <p className="text-gray-300 pt-5">
        In my experience with Cretikon, I was responsible for 
        the WordPress side of creating and developing websites. I contributed to website 
        design, template customization, and performance optimization based on client needs. 
        Additionally, I played a key role in completing projects for the company&apos;s clients, 
        allowing me to gain hands-on experience in order management, improving websites for 
        search engines, and collaborating with a team to deliver effective digital solutions.
          <br />
        </p>
        <div className="flex-col flex sm:flex-row ">
          <div className="bg-transparent  mt-5 mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            WordPress
          </div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Elementor
          </div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            canva
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

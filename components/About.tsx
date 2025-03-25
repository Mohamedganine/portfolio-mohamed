import React from "react";

const About: React.FC<{}> = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-[35px] "
      style={{ transform: "scale(0.9" }}
    >
      <div className="flex flex-col  justify-around flex-wrap items-center   max-w-[900px]">
        <h1 className="text-white font-semibold text-6xl">ABOUT ME</h1>
        <p className=" tracking-[0.5em] text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl">
          EXPLORE NOW
        </p>
        <p className="text-gray-300 text-center ">
          As a passionate computer science student, I thrive at the intersection 
          of technology and creativity. Currently pursuing a Specialized Technician
          degree in Full-Stack Development at EFET, I am eager to learn and expand my skill set. 
          <br />
          <br />
          With a drive for building seamless and efficient 
          digital solutions, I navigate the ever-evolving world of web 
          development, transforming ideas into impactful user experiences.
        </p>
      </div>
    </section>
  );
};

export default About;

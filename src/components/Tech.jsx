import React from "react";

// import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-5'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          {/* <BallCanvas icon={technology.icon} /> */}
          <img src={technology.icon} className='bg-white border-[6px] border-slate-300 rounded-full w-[70%] h-[70%] object-contain px-auto py-2'/>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");

import React from "react";

import {socials} from "../constants";
const Footer = () => {
  return (
    <div className='bg-black-100 flex flex-wrap flex-row justify-center gap-2'>
      {socials.map((social) => (
        <div className='w-20 h-20 mt-5 mb-auto flex flex-wrap justify-center cursor-pointer' key={social.name} onClick={() => window.open(social.profile_link, "_blank")}>
          <img src={social.image} alt={social.name} className='bg-white border-[6.25px] border-slate-300 rounded-full w-[75%] h-[75%] object-contain px-auto py-[5.5px]' />
        </div>
      ))}
    </div>
)
}
{/* <footer class="bg-black-100 flex flex-row flex-wrap justify-center"></footer> */}
// </footer>
export default Footer
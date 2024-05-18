import SecondaryButton from "@components/Button/SecondaryButton";
import InstagramIcon from "@assets/icons/instagram.svg?react";
import TwitterIcon from "@assets/icons/twitter.svg?react";
import YouTubeIcon from "@assets/icons/youtube.svg?react";
import { useState } from "react";

export default function Navbar() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeLink, setActiveLink] = useState(0);

  return (
    <header className="border-b border-[#FFFFFF25]">
      <nav className="flex justify-between items-center py-2 px-5">
        <div className="basis-1/3">
          <img className="w-20 h-20" src="/src/assets/images/chlafrica_logo.png" alt="Chlafrica Logo"/>
        </div>

        <ul className="flex gap-12 justify-center items-center basis-1/3">  
          <li className={`${activeLink == 0 ? 'bg-[#f3ba2ad3] font-semibold' : ''} font-light text-md px-2 py-5 rounded-sm`}>
            Home
          </li>
          <li className={`font-light text-md text-custom-light-gray px-2 py-4`}>
            About us
          </li>
          <li className={`font-light text-md text-custom-light-gray px-2 py-4`}>
            Expressions
          </li>
        </ul>

        <div className="flex items-center justify-end gap-4 basis-1/3">
          <div className="flex gap-3">
            <InstagramIcon className="w-5 h-5 fill-slate-200 opacity-35" />
            <TwitterIcon className="w-5 h-5 fill-slate-200 opacity-35" />
            <YouTubeIcon className="w-5 h-5 fill-slate-200 opacity-35" />
          </div>
          <SecondaryButton 
            title="Send a message"
            bgColor="bg-[#F3BA2Ad3]"
          />
        </div>
      </nav>
    </header>
  )
}

import SecondaryButton from "@components/Button/SecondaryButton";
import InstagramIcon from "@assets/icons/instagram.svg?react";
import TwitterIcon from "@assets/icons/twitter.svg?react";
import YouTubeIcon from "@assets/icons/youtube.svg?react";
import MobileNavbar from "./MobileNavbar";
import ChlafricaLogo from "@assets/images/chlafrica_logo.png";
import { useNavigate } from "react-router-dom";

interface NavbarProps {
  activeLink: number,
  setActiveLink: (arg: number) => void,
}

export default function Navbar({ activeLink } : NavbarProps) {
  const navigate = useNavigate();

  return (
    <header className="border-b border-[#FFFFFF25] bg-brand-accent w-full">
      <nav className="relative flex justify-between items-center py-2 px-5">
        <div className="basis-1/3">
          <img className="w-14 h-14 lg:w-20 lg:h-20" src={ChlafricaLogo} alt="Chlafrica Logo"/>
        </div>

        <ul className="hidden lg:flex gap-3 lg:gap-12 justify-center items-center basis-1/3">  
          <li 
            className={`${activeLink == 0 ? 'bg-[#f3ba2ad3] font-semibold' : ''} font-light text-md px-2 py-5 rounded-sm`}
            onClick={() => {
              // setActiveLink(0);
              navigate('/');
            }}
          >
            Home
          </li>
          <li 
            className={`font-light text-md text-custom-light-gray px-2 py-4`}
            onClick={() => {
              // setActiveLink(1);
              navigate('about-us');
            }}
          >
            About us
          </li>
          <li 
            className={`font-light text-md text-custom-light-gray px-2 py-4`}
            onClick={() => {
              // setActiveLink(1);
              navigate('expressions');
            }}
          >
            Expressions
          </li>
        </ul>

        <MobileNavbar />

        <div className="hidden lg:flex items-center justify-end gap-4 basis-1/3">
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

import SecondaryButton from "@components/Button/SecondaryButton";
import InstagramIcon from "@assets/icons/instagram.svg?react";
import TwitterIcon from "@assets/icons/twitter.svg?react";
import YouTubeIcon from "@assets/icons/youtube.svg?react";
import MobileNavbar from "./MobileNavbar";
import ChlafricaLogo from "@assets/images/chlafrica_logo.png";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

interface NavbarProps {
  activeLink: number,
  setActiveLink: (arg: number) => void,
}

export default function Navbar({ activeLink, setActiveLink } : NavbarProps) {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("about-us")) {
      setActiveLink(1);
    } else {
      setActiveLink(0);
    }
  }, [location.pathname, setActiveLink])

  return (
    <header className="sticky top-0 z-50 border-b border-[#FFFFFF25] bg-brand-accent w-full">
      <nav className="relative flex justify-between items-center py-2 px-5">
        <div className="basis-1/3">
          <img className="w-14 h-14 lg:w-20 lg:h-20" src={ChlafricaLogo} alt="Chlafrica Logo"/>
        </div>

        <ul className="hidden lg:flex gap-3 lg:gap-12 justify-center items-center basis-1/3">  
          <li 
            className={`${activeLink == 0 ? 'bg-[#f3ba2ad3] font-semibold' : 'text-custom-light-gray'} font-light cursor-pointer text-md hover:bg-[#f3ba2aa9] px-2 py-5 rounded-sm transition`}
            onClick={() => {
              navigate('/');
            }}
          >
            Home
          </li>
          <li 
            className={`${activeLink == 1 ? 'bg-[#f3ba2ad3] font-semibold' : 'text-custom-light-gray'} font-light text-md cursor-pointer hover:bg-[#f3ba2aa9] px-2 py-5 rounded-sm transition`}
            onClick={() => {
              navigate('about-us');
            }}
          >
            About us
          </li>
          <li 
            className={`${activeLink == 2 ? 'bg-[#f3ba2ad3] font-semibold' : 'text-custom-light-gray'} font-light text-md cursor-pointer hover:bg-[#f3ba2aa9] px-2 py-5 rounded-sm transition`}
            onClick={() => {
              // setActiveLink(1);
              // navigate('expressions');
            }}
          >
            Expressions
          </li>
        </ul>

        <MobileNavbar />

        <div className="hidden lg:flex items-center justify-end gap-4 basis-1/3">
          <div className="flex gap-3">
            <a href="https://www.instagram.com/chlafrica/" target="_blank">
              <InstagramIcon className="w-5 h-5 fill-slate-200 opacity-35" />
            </a>

            <a href="https://x.com/chlafrica" target="_blank">
              <TwitterIcon className="w-5 h-5 fill-slate-200 opacity-35" />
            </a>

            <a href="https://www.youtube.com/@chlafrica" target="_blank">
              <YouTubeIcon className="w-5 h-5 fill-slate-200 opacity-35" />
            </a>
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

import SecondaryButton from "@components/Button/SecondaryButton";
import InstagramIcon from "@assets/icons/instagram.svg?react";
import TwitterIcon from "@assets/icons/twitterX.svg?react";
import YouTubeIcon from "@assets/icons/youtube.svg?react";
import MobileNavbar from "./MobileNavbar";
import ChlafricaLogo from "@assets/images/chlafrica_logo.png";
import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 border-b border-[#FFFFFF25] bg-brand-accent w-full">
      <nav className="relative flex justify-between items-center py-2 px-5">
        <div 
          className="basis-1/3 cursor-pointer"
          onClick={() => navigate('/')}
        >
          <img className="w-14 h-14 lg:w-20 lg:h-20" src={ChlafricaLogo} alt="Chlafrica Logo"/>
        </div>

        <ul className="hidden lg:flex gap-3 lg:gap-12 justify-center items-center basis-1/3">  
          <li>
            <NavLink
              className={({isActive}) => 
                `inline-block text-custom-light-gray font-light text-md cursor-pointer hover:border-b hover:border-[#f3ba2aa9] transition p-2 
                ${isActive && 'border-b-2 border-[#f3ba2ad3] font-semibold'}`
              }
              to='/'
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              className={({isActive}) => 
                `inline-block text-custom-light-gray font-light text-md cursor-pointer hover:border-b hover:border-[#f3ba2aa9] transition p-2
                ${isActive && 'border-b-2 border-[#f3ba2ad3] font-semibold'}`
              }
              to='/about-us'
            >
              About Us
            </NavLink>
          </li>

          <li>
            <NavLink
              className={({isActive}) => 
                `inline-block text-custom-light-gray font-light text-md cursor-pointer hover:border-b hover:border-[#f3ba2aa9] transition p-2
                ${isActive && 'border-b-2 border-[#f3ba2ad3] font-semibold'}`
              }
              to='/expressions'
            >
              Expressions
            </NavLink>
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
          
          <a href="https://forms.gle/4N6ymgfLpvBvj6scA" target="_blank">
            <SecondaryButton 
              title="Send a message"
              bgColor="bg-[#F3BA2Ad3]"
            />
          </a>
        </div>
      </nav>
    </header>
  )
}

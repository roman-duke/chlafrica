import InstagramIcon from "@assets/icons/instagram.svg?react";
import TwitterIcon from "@assets/icons/twitterX.svg?react";
import YouTubeIcon from "@assets/icons/youtube.svg?react";
import LinkedInIcon from "@assets/icons/linkedin.svg?react";
import FacebookIcon from "@assets/icons/facebook.svg?react";
import CloseIcon from "@assets/icons/close.svg?react";
// import Curve from "./curve/curve";
import { Variants, motion } from 'framer-motion';
import { useRef, RefObject } from 'react';
import { cubicBezier } from "framer-motion/dom";
import { useNavigate } from "react-router-dom";

interface MobileNavbarProps {
  showMobileNav: boolean;
  setShowMobileNav: (arg: boolean) => void;
}

export default function MobileNavbar({ showMobileNav, setShowMobileNav } : MobileNavbarProps) {
  const elementRef: RefObject<HTMLDivElement> = useRef(null);
  const { innerWidth: width } = window;
  const navigate = useNavigate();

  const navBgVariants: Variants = {
    initial: {
      x: width,
      display: 'none'
    },

    open: {
      // x: (elementRef.current ? -(elementRef.current?.clientWidth) + 100 : 0),
      x: 0,
      display: 'flex',
      transition: {
        // type: 'tween',
        ease: cubicBezier(0.61, 1, 0.88, 1),
        staggerChildren: 0.1
      },
      // border: '50%',
    },

    closed: {
      x: width,
      display: 'none',
      transition: {
        ease: cubicBezier(0.61, 1, 0.88, 1),
        duration: 0.5,
      }
    }
  }

  const navLinkVariants: Variants = {
    open: {
      opacity: 1,
      x: 0,
    },

    closed: {
      x: 20,
      opacity: 0
    }
  }

  return (
    <motion.div 
      ref={elementRef}
      className="md:hidden z-50 fixed h-screen w-screen top-0 flex flex-col justify-between py-10 px-6 bg-custom-white"
      initial="initial"
      animate={showMobileNav ? "open" : "closed"}
      variants={navBgVariants}
    > 
      <div>
        <div className="flex w-full justify-between border-b border-black">
          <h5 className="uppercase text-2xl font-medium pb-2">Navigation</h5>
          <div
            onClick={() => setShowMobileNav(false)}
          >
            <CloseIcon className="size-7"/>
          </div>
        </div>
        <ul>
          {linksData.map((item, idx) => (
            <motion.li key={idx} 
                initial={false}
                className="text-xl py-2"
                variants={navLinkVariants}
                onClick={() => {
                  setShowMobileNav(false);
                  navigate(pagesPath[idx]);
                }}
            >{item.description}</motion.li>
          ))}
        </ul>
      </div>

      <div className="nav-socials">
        <h5 className="uppercase pt-5 border-t border-black font-medium">Socials</h5>
        <div className="flex justify-between">
          <a href="https://www.instagram.com/chlafrica/" target="_blank" className="flex items-center gap-1">
            <InstagramIcon className="size-8" />
            {/* <span>Instagram</span> */}
          </a>

          <a href="https://x.com/chlafrica" target="_blank" className="flex items-center gap-1">
            <TwitterIcon className="size-8" fill="black"/>
            {/* <span>Twitter</span> */}
          </a>

          <a href="https://www.youtube.com/@chlafrica" target="_blank" className="flex items-center gap-1">
            <YouTubeIcon className="size-8" />
            {/* <span>YouTube</span> */}
          </a>

          <a href="https://www.linkedin.com/company/chara-s-haven-limited/" target="_blank" className="flex items-center gap-1">
            <LinkedInIcon className="fill-black size-8" />
            {/* <span>LinkedIn</span> */}
          </a>

          <a href="https://web.facebook.com/chlafrica/" target="_blank" className="flex items-center gap-1">
            <FacebookIcon className="size-10" />
            {/* <span>LinkedIn</span> */}
          </a>
        </div>
      </div>
      {/* <Curve isOpen={isOpen}/> */}
    </motion.div>
  )
}

type linksDataType = { id: number, description: string }[]

const linksData: linksDataType = [
  {id: 0, description: "Home"},
  {id: 1, description: "About us"},
  {id: 2, description: "Expressions"},
]

const pagesPath = [
  '/',
  'about-us',
  'expressions'
]

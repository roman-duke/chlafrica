import InstagramIcon from "@assets/icons/instagram.svg?react";
import TwitterIcon from "@assets/icons/twitter.svg?react";
import YouTubeIcon from "@assets/icons/youtube.svg?react";
// import Curve from "./curve/curve";
import { Variants, motion } from 'framer-motion';
import { useState, useRef, RefObject } from 'react';
import { cubicBezier } from "framer-motion/dom";
import { useNavigate } from "react-router-dom";
// import './navbar.scss';

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const elementRef: RefObject<HTMLDivElement> = useRef(null);
  const { innerWidth: width } = window;
  const navigate = useNavigate();
  
  const dashVariants: Variants = {
    open: i => ({
      // backgroundColor: "#fff",
      rotate: 45 * (i == 0 ? -1 : (i !== 2 ? 1 : 0)),
      y: 8 * (i == 0 && i !== 2 ?  1 : 0),
      opacity: (i == 2 ? 0 : undefined),
      transition: {
        type: 'spring',
      }
    }),

    closed: i => ({
      backgroundColor: "#000",
      rotate: 0,
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        delay: (i == 2 ? 0.5 : 0),
      }
    })
  }

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
    <>
      <motion.div className="cursor-pointer z-50 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
        initial={false}
        animate={isOpen ? "open" : "closed"}
      >
        {[0, 1, 2].map(i => (
          <motion.div 
            key={i}
            className="w-7 h-1 my-1"
            variants={dashVariants}
            custom={i}
          />
        ))}
      </motion.div>

      <motion.div 
        ref={elementRef}
        className="md:hidden z-30 fixed left-0 top-0 flex flex-col justify-between h-screen w-screen py-10 px-6 bg-custom-white"
        initial="initial"
        animate={isOpen ? "open" : "closed"}
        variants={navBgVariants}
      > 
        <div>
          <h5 className="uppercase text-2xl font-medium border-b border-black pb-2">Navigation</h5>
          <ul>
            {linksData.map((item, idx) => (
              <motion.li key={idx} 
                  initial={false}
                  className="text-xl py-2"
                  variants={navLinkVariants}
                  onClick={() => {
                    idx !== 2 ? navigate(pagesPath[idx]) : null
                  }}
              >{item.description}</motion.li>
            ))}
          </ul>
        </div>

        <div className="nav-socials">
          <h5 className="uppercase pt-5 border-t border-black font-medium">Socials</h5>
          <div className="flex justify-between">
            <a className="flex items-center gap-1">
              <InstagramIcon className="w-6 h-6" />
              <span>Instagram</span>
            </a>

            <a className="flex items-center gap-1">
              <TwitterIcon className="w-6 h-6" fill="black"/>
              <span>Twitter</span>
            </a>

            <a className="flex items-center gap-1">
              <YouTubeIcon className="w-6 h-6" />
              <span>YouTube</span>
            </a>
          </div>
        </div>
        {/* <Curve isOpen={isOpen}/> */}
      </motion.div>
    </>
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
  'about-us'
]

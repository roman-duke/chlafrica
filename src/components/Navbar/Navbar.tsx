import SecondaryButton from "@components/Button/SecondaryButton";
import InstagramIcon from "@assets/icons/instagram.svg?react";
import TwitterIcon from "@assets/icons/twitterX.svg?react";
import YouTubeIcon from "@assets/icons/youtube.svg?react";
import ChlafricaLogo from "@assets/images/chlafrica_logo.png";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Variants, motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import MobileNavbar from "./MobileNavbar";

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

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const wrapperRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const { scrollYProgress } = useScroll({ target: wrapperRef });
  // const navbarColor = useTransform(scrollYProgress, [0, 1], ["initial", "final"]);
  const navbarColor = useTransform(scrollYProgress, [0, 1], ["#302D8C", "#bdb4d8"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  const pathname = location.pathname;

  return (
    <>
      <motion.header
        className="sticky top-0 z-20 border-b border-[#FFFFFF25] w-full"
        // style={{ backgroundColor: navbarColor.get() === "initial" ? "#302D8C" : "718096" }}
        style={{ backgroundColor: navbarColor, opacity: opacity }}
      >
        <nav className="flex justify-between items-center py-2 px-5">
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
                  ${(isActive || pathname.includes('articles') || pathname.includes('events')) && 'border-b-2 border-[#f3ba2ad3] font-semibold'}`
                }
                to='/expressions'
              >
                Expressions
              </NavLink>
            </li>
          </ul>

          {/* <MobileNavbar /> */}

          <motion.div className="mobile-nav-stack right-[20px] cursor-pointer lg:hidden"
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
      </motion.header>

      <MobileNavbar
        showMobileNav={isOpen}
        setShowMobileNav={setIsOpen}
      />
    </>
  )
}

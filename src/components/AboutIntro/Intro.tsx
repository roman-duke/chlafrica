import { motion } from "framer-motion"
import AboutImg1 from "@assets/images/about-img-1.jpg"
import AboutImg2 from "@assets/images/about-img-2.jpg"
// import AboutIntroDemarcationIcon from "@assets/icons/about-demarcator.svg?react"

export default function Intro() {

  return (
    <>
      {/* <AboutIntroDemarcationIcon className="rotate-180"/> */}
      <div className="pt-16 pb-4 px-10 flex flex-col items-center">
        <div className="relative flex justify-center items-center w-44 h-44 rounded-full border">
          <h3 className="relative -translate-y-[2px] text-brand-accent text-3xl tracking-[.75rem] word-spacing text-nowrap uppercase font-bold">
            About us
          </h3>

          <motion.div
            initial={{
              rotate: 360,
            }}
            animate={{
              rotate: 0,
              transition: {
                duration: 2,
                type: "tween",
                ease: "easeInOut",
                repeat: 1,
                repeatType: "reverse"
              }
            }}
            className="absolute w-[130%] h-px bg-brand-accent rotate-90 opacity-75" 
          />

          <motion.div 
            initial={{
              opacity: .25
            }}
            animate={{
              opacity: 1,
              transition: {
                delay: .25,
                duration: .75,
                repeat: 4,
                repeatType: "reverse"
              }
            }}
            className="absolute bottom-0 left-0 translate-x-10 rounded-full w-4 h-4 bg-brand-accent" 
          />

          <motion.div
            initial={{
              opacity: .25
            }}
            animate={{
              opacity: 1,
              transition: {
                delay: .55,
                duration: .75,
                repeat: 4,
                repeatType: "reverse"
              }
            }}
            className="absolute top-0 right-0 translate-y-10 translate-x-1 rounded-full w-6 h-6 bg-brand-accent" 

          />

          {/* The Markers */}
          <div className="absolute top-0 right-0 -translate-x-4 translate-y-0 rotate-45 w-[3px] h-14 bg-brand-accent" />
          <div className="absolute top-0 left-0 -translate-y-0 translate-x-4 -rotate-45 w-[3px] h-14 bg-brand-accent" />
          <div className="absolute bottom-0 right-0 translate-y-2 -translate-x-4 -rotate-45 w-[3px] h-14 bg-brand-accent" />
          <div className="absolute bottom-0 left-0 translate-x-4 translate-y-2 rotate-45 w-[3px] h-14 bg-brand-accent" />
        </div>

        <p className="relative mt-10 mb-5 max-w-[700px] z-10 text-lg text-center text-slate-400">
          We are a social enterprise operating within the framework of
          Africapitalism by supporting SMEs and initiatives positively impacting Africa while being
          financially sustainable.
        </p>
        
        <div className="grid lg:grid-cols-2 max-w-[900px] mt-4 lg:mb-14 lg:gap-x-8">
          <div className="relative flex justify-center w-full">
            <img className="w-72 h-[375px] lg:h-[550px] lg:w-auto rounded-2xl object-cover" src={AboutImg1} alt="Abstract image of the About us page" />
            <img className="w-72 h-[375px] absolute lg:h-[550px] lg:w-auto top-[15%] right-[15%] lg:right-16 lg:top-12 rounded-2xl object-cover" src={AboutImg2} alt="Abstract image of About us page" />
          </div>

          <div className="self-start lg:self-center mt-16 *:py-4">
            <div>
              <h2 className="uppercase text-brand-accent text-xl font-semibold">
                Vision
              </h2>
              <p className="text-slate-400">
                To see more Africans at home and in the diaspora
                actively contributing towards the prosperity and 
                stability of the African continent.
              </p>
            </div>

            <div>
              <h2 className="uppercase text-brand-accent text-xl font-semibold">
                Mission
              </h2>
              <p className="text-slate-400">
              To build and sustainably grow 1% of SMEs and
              initiatives in Africa that create both economic
              prosperity and social wealth in a sustainable
              fashion in Africa.
              </p>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

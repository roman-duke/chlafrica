import { motion } from "framer-motion"

export default function Intro() {

  return (
    <>
      {/* <AboutIntroDemarcationIcon className="rotate-180"/> */}
      <div className="pt-10 lg:pt-16 pb-4 px-10 flex flex-col items-center">
        {/* <div className="relative flex justify-center items-center w-44 h-44 rounded-full border">
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

          <div className="absolute top-0 right-0 -translate-x-4 translate-y-0 rotate-45 w-[3px] h-14 bg-brand-accent" />
          <div className="absolute top-0 left-0 -translate-y-0 translate-x-4 -rotate-45 w-[3px] h-14 bg-brand-accent" />
          <div className="absolute bottom-0 right-0 translate-y-2 -translate-x-4 -rotate-45 w-[3px] h-14 bg-brand-accent" />
          <div className="absolute bottom-0 left-0 translate-x-4 translate-y-2 rotate-45 w-[3px] h-14 bg-brand-accent" />
        </div>

        <p className="relative mt-10 mb-5 max-w-[700px] z-10 text-lg text-center text-slate-400">
          We are a social enterprise operating within the framework of
          Africapitalism by supporting SMEs and initiatives positively impacting Africa while being
          financially sustainable.
        </p> */}

        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-16 max-w-[1024px] m-auto mb-6">
          <div className="basis-1/2">
            <h2 className="text-4xl font-semibold text-brand-accent text-right">OUR STORY</h2>

            <p className="text-justify text-lg lg:text-2xl font-semibold text-[#9a90c3]">
              Since 2022, our heartbeat has been to ignite people-driven development across Africa, fostering a positive perception and inspiring youth patriotism. By empowering SMEs to achieve business success and giving back to the community, we are paving the way for "the Africa we want," as envisioned by the African Union!
            </p>
          </div>

          <div className="basis-1/2 bg-slate-200 rounded-sm">
            <iframe
              className="w-full h-64"
              src="https://youtube.com/embed/P9Fau0j7W60"
            >
            </iframe>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 max-w-[1040px] mt-4 lg:mb-14 gap-y-7 lg:gap-x-8 *:p-5 lg:*:py-12">

          <motion.div 
            initial={{ x: -150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1, transition: { duration: .5 } }}
            // viewport={{ once: true }}
            className="bg-brand-accent_two border rounded-lg"
          >
            <h2 className="uppercase text-brand-accent text-lg lg:text-xl font-semibold">
              Vision
            </h2>
            <p className="text-slate-400">
              To see more Africans at home and in the diaspora
              actively contributing towards the prosperity and 
              stability of the African continent.
            </p>
          </motion.div>

          <motion.div 
            initial={{ x: 150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1, transition: { delay: .25, duration: .5 } }}
            // viewport={{ once: true }}
            className="bg-brand-accent_two border px-4 rounded-lg"
          >
            <h2 className="uppercase text-brand-accent text-lg lg:text-xl font-semibold">
              Mission
            </h2>
            <p className="text-slate-400">
            To build and sustainably grow 1% of SMEs and
            initiatives in Africa that create both economic
            prosperity and social wealth in a sustainable
            fashion in Africa.
            </p>
          </motion.div>
        </div>

      </div>
    </>
  )
}

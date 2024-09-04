import { motion } from "framer-motion"

export default function Intro() {

  return (
    <>
      <div className="pt-5 lg:pt-16 pb-24 px-5 flex flex-col items-center bg-brand-accent_two">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-16 max-w-[1024px] m-auto mb-6">
          <div className="bg-about-img bg-cover bg-center lg:h-[500px]">
            <div className="p-5 md:p-16 backdrop-blur-sm">
              <h2 className="my-5 lg:mt-32 relative text-4xl font-semibold text-white text-right">OUR STORY</h2>
              <div className="absolute translate-y-3 md:h-96 md:bottom-0 md:translate-y-7 h-52 w-1 bg-brand-earth_yellow left-[23%]">
                <div className="absolute bottom-0 left-0 w-3 h-24 bg-brand-earth_yellow"/>
              </div>
              <p className="ml-auto w-[75%] leading-tight text-[14px] text-justify lg:text-2xl font-medium text-custom-light-gray">
                Since 2022, our heartbeat has been to ignite people-driven development across Africa, fostering a positive perception and inspiring youth patriotism. By empowering SMEs to achieve business success and giving back to the community, we are paving the way for "the Africa we want," as envisioned by the African Union!
              </p>
            </div>
          </div>

        </div>

        <div className="grid lg:grid-cols-2 max-w-[1040px] mt-4 lg:mt-20 gap-y-7 lg:gap-x-8">
          <div className="w-full basis-1/2 bg-slate-200 rounded-sm p-5">
            <iframe
              className="w-full h-64"
              src="https://youtube.com/embed/P9Fau0j7W60"
            >
            </iframe>
          </div>

          <div className="flex flex-col justify-between">
            <motion.div
              initial={{ x: -150, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1, transition: { duration: .5 } }}
              // viewport={{ once: true }}
              className="border rounded-lg p-5 bg-white"
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
              className="bg-white border px-4 rounded-lg p-5 mt-3"
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
      </div>
    </>
  )
}

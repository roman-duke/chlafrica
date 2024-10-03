import Vision from "@assets/icons/vision.svg";
import Mission from "@assets/icons/mission.svg";
// import IntroPattern from "@assets/images/tribal_pattern_II.jpeg";

import { motion } from "framer-motion";

export default function Intro() {
  return (
    <>
      <div className="pt-5 lg:pt-16 pb-16 px-5 lg:px-20 flex flex-col items-center bg-brand-accent_two border-b shadow-xl">
        <div className="relative flex flex-col items-center max-w-[1240px] m-auto mb-6">
          <div className="relative bg-about-img bg-cover bg-center lg:h-[500px] z-10">
            <div className="p-5 md:p-16 backdrop-blur-sm h-full">
              <h2 className="my-5 lg:mt-32 relative text-4xl font-semibold text-white text-right">
                OUR STORY
              </h2>

              <div className="ml-auto md:w-[75%] bg-black opacity-50">
                {/* <p className="backdrop-brightness-50 leading-tight text-[14px] text-justify lg:text-2xl font-medium text-white p-3"> */}
                {/* <p className="backdrop-brightness-50 leading-tight text-[14px] text-justify lg:text-2xl font-medium text-white p-3"> */}
                <p className="leading-tight text-[14px] text-justify lg:text-2xl font-medium text-white p-3">
                  Since 2022, our heartbeat has been to ignite people-driven
                  development across Africa, fostering a positive perception and
                  inspiring youth patriotism. By empowering SMEs to achieve
                  business success and giving back to the community, we are paving
                  the way for "the Africa we want," as envisioned by the African
                  Union!
                </p>
              </div>
            </div>
          </div>

          {/* <div className="absolute left-0 bottom-0 lg:-translate-x-8 lg:translate-y-8 -translate-x-4 translate-y-4 bg-pattern-2 size-1/2 z-0" /> */}
          <div className="absolute left-0 bottom-0 lg:-translate-x-8 lg:translate-y-8 -translate-x-4 translate-y-4 bg-pattern-2 w-3/4 md:w-1/2 h-full z-0" />
        </div>

        <div className="grid lg:grid-cols-2 max-w-[1040px] mt-4 lg:mt-20 gap-y-7 lg:gap-x-8">
          <div className="w-full basis-1/2 bg-slate-200 rounded-sm p-5 md:p-3">
            <iframe
              className="w-full h-64 md:h-full"
              src="https://youtube.com/embed/P9Fau0j7W60"
            ></iframe>
          </div>

          <div className="flex flex-col justify-between">
            <motion.div
              initial={{ x: -150, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
              // viewport={{ once: true }}
              className="border rounded-lg p-5 bg-white md:p-8"
            >
              <div className="flex items-center gap-2">
                <h2 className="uppercase text-brand-accent text-lg lg:text-xl font-semibold">
                  Vision
                </h2>
                <img src={Vision} alt="" className="size-5"/>
              </div>
              <p className="text-slate-400">
                To see more Africans at home and in the diaspora actively
                contributing towards the prosperity and stability of the African
                continent.
              </p>
            </motion.div>

            <motion.div
              initial={{ x: 150, opacity: 0 }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: { delay: 0.25, duration: 0.5 },
              }}
              // viewport={{ once: true }}
              className="bg-white border px-4 rounded-lg p-5 mt-3 md:p-8"
            >
              <div className="flex items-center gap-2">
                <h2 className="uppercase text-brand-accent text-lg lg:text-xl font-semibold">
                  Mission
                </h2>
                <img src={Mission} alt="" className="size-5"/>
              </div>
              <p className="text-slate-400">
                To build and sustainably grow 1% of SMEs and initiatives in
                Africa that create both economic prosperity and social wealth in
                a sustainable fashion in Africa.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

import AfricanBaker from "@assets/images/chlafrica_baker.jpg";
import AfricanWorker from "@assets/images/africa_work.jpg";
import AfricanStartup from "@assets/images/chlafrica_baobab_I.jpg";
import Button from "@components/Button/Button"
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const [imgIdx, setImgIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImgIdx((imgIdx) => (imgIdx + 1)%3);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const heroImages = [
    AfricanBaker,
    AfricanWorker,
    AfricanStartup,
  ];

  return (
    <div className="lg:pt-24 pt-4 2xl:pb-52">
      <div className="relative flex flex-col lg:gap-8 lg:flex-row pt-16 lg:pt-24 items-center justify-around">
        <motion.div
          initial={{ x: 0, y: 0, rotate: '10deg' }}
          animate={{ x: 5, y: 10, rotate: '-20deg', transition: { repeat: Infinity, repeatType: "reverse", duration: 5 } }}
          className="absolute -rotate-[30deg] left-0 top-4 tribe-pattern bg-pattern-1 ml-3 w-16 lg:w-20 h-4"
        />
        <motion.div
          initial={{ x: 5, y: 0, rotate: '10deg' }}
          animate={{ x: 5, y: 10, rotate: '-20deg', transition: { repeat: Infinity, repeatType: "reverse", duration: 5 } }}
          className="absolute -rotate-[30deg] left-0 top-6 tribe-pattern bg-pattern-1 ml-3 w-16 lg:w-20 h-4 bg-cover"
        />
        <motion.div
          initial={{ x:-5, y: -5, rotate: '10deg' }}
          animate={{ x: 5, y: -10, rotate: '-20deg', transition: { repeat: Infinity, repeatType: "reverse", duration: 5 } }}
          className="absolute -rotate-[30deg] left-0 top-8 tribe-pattern bg-pattern-1 ml-3 w-16 lg:w-20 h-4"
        />

        <div className="absolute top-0">
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 90, transition: { duration: 5, repeat: Infinity, repeatType: "mirror" } }}
            className="rounded-full w-10 h-10 bg-pattern-3 bg-cover shadow-md shadow-brand"
          />
        </div>

        <div className="absolute flex justify-center items-center right-0 top-0 rounded-full mx-3 w-12 h-12 lg:w-20 lg:h-20 bg-pattern-2 bg-cover">
          <motion.div
            initial={{ scale: 1.3, borderRadius: '0' }}
            animate={{ scale: 1, borderRadius: '50%', transition: { duration: 5, repeat: Infinity, repeatType: "mirror" } }}
            className="flex justify-center items-center rounded-full w-8 h-8 lg:w-14 lg:h-14 bg-brand-accent"
          >
            <div className="flex justify-center items-center rounded-full w-6 h-6 lg:w-12 lg:h-12 bg-pattern-1 bg-cover">
              <motion.div
                initial={{ scale: 1, borderRadius: '50%' }}
                animate={{ scale: 1.25, borderRadius: '0', transition: { duration: 5, repeat: Infinity, repeatType: "mirror" } }}
                className="w-4 h-4 lg:w-8 lg:h-8 bg-brand-accent rounded-full"
              />
            </div>
          </motion.div>
        </div>

        <div className="relative z-10 flex justify-center shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.img
              initial={{opacity:0}}
              animate = {{opacity: 1, transition:{duration: 0.5}}}
              exit={{opacity: 0 }}
              key={imgIdx}
              className="w-80 h-80 2xl:w-[450px] 2xl:h-[450px] rounded-lg object-cover" src={heroImages[imgIdx]}
            />
          </AnimatePresence>
        </div>

        <div className="px-9">
          <h1 className="pt-4 text-3xl lg:px-0 lg:pt-0 lg:text-5xl text-custom-light-gray font-medium">
            Providing Sustainability Solutions <br className="hidden lg:inline-block" />
            to Small and Medium Sized <br className="hidden lg:inline-block" />
            Entreprises in Africa
          </h1>

          <p className="mt-3 lg:mt-5 max-w-[400px] text-brand text-justify lg:text-left">
            We are a social enterprise operating within the principles of Africapitalism, empowering SME's
            and initiatives that drive<br className="hidden lg:inline-block" /> positive change across Africa, all while ensuring
            financial sustainability.
          </p>

          <div className="mt-4 lg:mt-8">
            <Button
              title="JOIN THE AFROCHAMPS!"
              bgColor="bg-custom-light-gray"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

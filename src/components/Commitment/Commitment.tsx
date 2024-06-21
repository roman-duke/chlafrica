import SDGPoverty from "@assets/images/sdg-no-poverty.jpg";
import SDGEducation from "@assets/images/sdg-education.jpg";
import SDGGrowth from "@assets/images/sdg-growth.jpg";
import PeopleDevelopment from "@assets/images/people-development.jpg"
import SDGImg from "@assets/images/chlafrica-commitment.jpg";
import SDGImg2 from "@assets/images/chlafrica-commitment-2.jpg";
import { useState } from "react";
import { Variants, motion } from "framer-motion";

export default function Commitment() {
  const [sdgText, setSDGText] = useState("SDG's");

  function handleSDGChange(arg: number) {
    if (arg == 0) setSDGText("SDG-1");
    else if (arg == 1) setSDGText("SDG-4");
    else if (arg == 2) setSDGText("SDG-8");
    else if (arg == 3) setSDGText("PDD");
  }

  const SDGVariants: Variants = {
    initial: i => ({
      // backgroundColor: "#fff",
      rotate: 45 * (i == 0 ? -1 : (i !== 2 ? 1 : 0)),
      x: 0,
      y: '50%',
      opacity: (i == 2 ? 0 : undefined),
      transition: {
        type: 'spring',
        damping: 300,
        duration: 2,
      }
    }),

    inView: i => ({
      rotate: 0,
      y: 0,
      x: '-50%',
      opacity: 1,
      transition: {
        type: 'spring',
        delay: (i == 2 ? 0.5 : 0),
      }
    })
  }

  return (
    <div className="flex flex-col">
      <div className="px-10">
        <h1 className="text-center text-3xl text-brand-accent font-semibold pb-2">
          Our Social Commitments
        </h1>

        <p className="text-slate-400 text-center">
          Chlafrica is dedicated to fostering sustainable development and enhancing the quality of life for communities. 
          Our social commitments are aligned with key global and regional initiatives, ensuring our efforts contribute meaningfully 
          to societal progress.
        </p>
      </div>

      <div className="py-4 grid lg:grid-cols-2 items-center">

        <div className="my-9 relative left-1/2 -translate-x-1/2 size-80 border rounded-full bg-gray-100">
          <div className="absolute flex items-center text-center top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 size-24 rounded-full border shadow-md">
            <span className="font-semibold inline-block w-full text-lg text-brand-accent uppercase">{sdgText}</span>
          </div>

          <motion.div 
            className="absolute top-0 left-1/2 -translate-x-1/2 size-28 border rounded-full"
            variants={SDGVariants}
            custom={0}
            initial="initial"
            whileInView="inView"
          >
            <img 
              className="hover:grayscale-0 grayscale w-full h-full rounded-full" src={SDGPoverty} loading="lazy"
              onMouseEnter={() => handleSDGChange(0)}
              onMouseLeave={() => setSDGText("SDG's")}
            />
          </motion.div>

          <motion.div 
            className="absolute top-1/2 -translate-y-1/2 size-28 border rounded-full"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 2 } }}
          >
            <img 
              className="hover:grayscale-0 grayscale w-full h-full rounded-full" src={SDGEducation} loading="lazy"
              onMouseEnter={() => handleSDGChange(1)}
              onMouseLeave={() => setSDGText("SDG's")}
            />
          </motion.div>

          <motion.div 
            className="absolute top-1/2 -translate-y-1/2 right-0 size-28 border rounded-full"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 2 } }}
          >
            <img 
              className="hover:grayscale-0 grayscale w-full h-full rounded-full" src={SDGGrowth} loading="lazy" 
              onMouseEnter={() => handleSDGChange(2)}
              onMouseLeave={() => setSDGText("SDG's")}
            />
          </motion.div>

          <motion.div 
            className="absolute bottom-0 left-1/2 -translate-x-1/2 size-28 border rounded-full"
            variants={SDGVariants}
            custom={2}
            initial="initial"
            whileInView="inView"
          >
            <img 
              className="hover:grayscale-0 grayscale w-full h-full rounded-full" src={PeopleDevelopment} loading="lazy"
              onMouseEnter={() => handleSDGChange(3)}
              onMouseLeave={() => setSDGText("SDG's")}
            />
          </motion.div>
        </div>

        <div className="relative hidden rounded-lg lg:block">
          <div className="h-[450px] w-[350px] overflow-hidden">
            <img className="hover:scale-105 relative z-10 w-full h-full object-cover object-center rounded-lg" src={SDGImg} alt="SDG image" />
          </div>

          <div className="absolute top-[2rem] left-[2rem] h-[450px] w-[350px]">
            <img className="w-full h-full object-cover rounded-lg" src={SDGImg2} alt="SDG image" />
          </div>
        </div>
      </div>
    </div>
  )
}

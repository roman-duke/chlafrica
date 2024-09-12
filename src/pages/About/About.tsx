import Team from "@components/Team/Team";
import AboutIntro from "@components/Intro/AboutIntro";
import MiniContact from "@components/MiniContact/MiniContact";
import Commitment from "@components/Commitment/Commitment";
import { useScroll } from "framer-motion";
import { commitmentData } from "./commitmentData";
// import SectionDemarcation from "@components/SectionDemarcation/SectionDemarcation";
// import { motion, useIsPresent } from "framer-motion";
// import AboutIntroDemarcationIcon from "@assets/icons/about-demarcator.svg?react"

export default function About() {
  const { scrollYProgress } = useScroll();
  // const isPresent = useIsPresent();

  return (
    <>
      <section className="relative overflow-hidden">
        {/* <AboutIntroDemarcationIcon className="absolute rotate-180"/> */}
        <AboutIntro />

        {/* <div className="relative h-[100px] md:h-[150px] lg:h-[250px]">
          <SectionDemarcation type="mini" />
        </div> */}
      </section>


      <section className="m-auto py-8 bg-[#fff2d7]">
        <Commitment
          yProgress={scrollYProgress}
          data={commitmentData}
        />
      </section>

      <section className="m-auto max-w-[1140px]">
        <Team />
      </section>

      <section className="py-6">
        <MiniContact />
      </section>

      {/* <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 0.5, ease: "circOut" } }}
        exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="fixed inset-0 bg-brand-accent z-50"
      /> */}
    </>
  )
}

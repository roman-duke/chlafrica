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
        <AboutIntro />
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
    </>
  )
}

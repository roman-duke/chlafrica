import Team from "@components/Team/Team";
import Intro from "@components/AboutIntro/Intro";
import MiniContact from "@components/MiniContact/MiniContact";
import Commitment from "@components/Commitment/Commitment";
// import { motion, useIsPresent } from "framer-motion";
// import AboutIntroDemarcationIcon from "@assets/icons/about-demarcator.svg?react"

export default function About() {
  // const isPresent = useIsPresent();

  return (
    <>
      <section className="relative">
        {/* <AboutIntroDemarcationIcon className="absolute rotate-180"/> */}
        <Intro />
      </section>

      <section className="m-auto py-8 max-w-[1140px]">
        <Commitment />
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

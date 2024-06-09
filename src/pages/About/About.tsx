import Team from "@components/Team/Team";
import Intro from "@components/AboutIntro/Intro";
import MiniContact from "@components/MiniContact/MiniContact";
// import AboutIntroDemarcationIcon from "@assets/icons/about-demarcator.svg?react"

export default function About() {
  return (
    <>
    <section className="relative ">
      {/* <AboutIntroDemarcationIcon className="absolute rotate-180"/> */}
      <Intro />
    </section>

    <section className="m-auto max-w-[1024px]">
      <Team />
    </section>

    <section className="">
      <MiniContact />
    </section>
    </>
  )
}

import Team from "@components/Team/Team";
import Intro from "@components/AboutIntro/Intro";
// import AboutIntroDemarcationIcon from "@assets/icons/about-demarcator.svg?react"

export default function About() {
  return (
    <>
    <section className="relative ">
      {/* <AboutIntroDemarcationIcon className="absolute rotate-180"/> */}
      <Intro />
    </section>

    <section>
      <Team />
    </section>
    </>
  )
}

import Hero from "@components/Hero/Hero"
import Navbar from "@components/Navbar/Navbar"
import Services from "@components/Services/Services"
import SectionDemarcation from "@components/SectionDemarcation/SectionDemarcation"
import Collage from "@components/Collage/Collage"
import Stats from "@components/Stats/Stats"
import Partners from "@components/Partners/Partners"

export default function Home() {
  return (
    <div className="text-sm bg-brand-accent max-h-lvh w-full">
      <section>
        <Navbar />

        <div className="m-auto h-4/6 max-w-[1140px]">
          <Hero />
        </div>

        <div className="relative h-[300px] w-full">
          <SectionDemarcation />
        </div>
      </section>

      <section className="mt-10 bg-img bg-cover bg-right bg-no-repeat">
        <Services />
      </section>

      <section className="max-w-[1140px] m-auto bg-custom-light-gray px-32">
        <div className="flex items-center justify-between">
          <Collage />
          <Stats />
        </div>

        <Partners />
      </section>
    </div>
  )
}

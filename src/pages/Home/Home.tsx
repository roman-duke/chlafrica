import Hero from "@components/Hero/Hero"
import Navbar from "@components/Navbar/Navbar"
import Services from "@components/Services/Services"
import SectionDemarcation from "@components/SectionDemarcation/SectionDemarcation"
import Collage from "@components/Collage/Collage"
import Stats from "@components/Stats/Stats"

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

      <section className="bg-custom-light-gray py-12 pr-32 pl-48">
        <div className="flex items-center justify-around">
          <Collage />
          <Stats />
        </div>
      </section>
    </div>
  )
}

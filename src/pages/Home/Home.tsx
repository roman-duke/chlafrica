import Hero from "@components/Hero/Hero"
import Navbar from "@components/Navbar/Navbar"
import Services from "@components/Services/Services"
import SectionDemarcation from "@components/SectionDemarcation/SectionDemarcation"
import Collage from "@components/Collage/Collage"
import Stats from "@components/Stats/Stats"
import Partners from "@components/Partners/Partners"
import Expressions from "@components/Expressions/Expressions"
import MiniContact from "@components/MiniContact/MiniContact"
import Footer from "@components/Footer/Footer"
import Stages from "@components/Stages/Stages"

export default function Home() {
  return (
    <div className="">
      <section className="text-sm bg-brand-accent w-full">
        <Navbar />

        <div className="m-auto max-w-[1140px]">
          <Hero />
        </div>

        <div className="relative h-[100px] md:h-[150px] lg:h-[250px]">
          <SectionDemarcation />
        </div>
      </section>

      <section className="mt-10 bg-img bg-cover bg-right bg-no-repeat">
        <Services />
      </section>

      <section className="max-w-[1140px] m-auto bg-custom-light-gray lg:px-16 lg:pb-8">
        <div className="flex flex-col gap-6 lg:flex-row items-center justify-between">
          <Collage />
          <Stats />
        </div>
      </section>

      <section className="pt-12 pb-8 px-8">
        <Stages />
      </section>
      
      <section>
        <Partners />
      </section>


      <section className="w-full relative z-50 bg-gradient-to-b from-brand-accent_two to-custom-light-gray pt-10 lg:pt-24">
        <Expressions />
        <MiniContact />
      </section>

      <footer className="relative">
        <div className="relative h-[96px] lg:h-[260px] overflow-hidden">
          <SectionDemarcation type="mini" />
        </div>

        <div className="w-full bg-gradient-to-b from-[#d6ceefEA] to-custom-light-gray">
          <div className="max-w-[960px] m-auto">
            <Footer />
          </div>
        </div>

      </footer>
    </div>
  )
}

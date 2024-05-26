import AfricanWoman from "@assets/images/african_woman.webp";
import Button from "@components/Button/Button"

export default function Hero() {
  return (
    <div className="relative flex flex-col lg:flex-row pt-16 mt-6 items-center justify-around">
      
      <div className="absolute -rotate-[30deg] left-0 top-4 tribe-pattern bg-pattern-1 ml-3 w-16 lg:w-20 h-4" />
      <div className="absolute -rotate-[30deg] left-0 top-6 tribe-pattern bg-pattern-1 ml-3 w-16 lg:w-20 h-4 bg-cover" />
      <div className="absolute -rotate-[30deg] left-0 top-8 tribe-pattern bg-pattern-1 ml-3 w-16 lg:w-20 h-4" />

      <div className="absolute top-0">
        <div className="rounded-full w-10 h-10 bg-pattern-3 bg-cover shadow-md shadow-brand"></div>
      </div>
      
      <div className="absolute flex justify-center items-center right-0 top-0 rounded-full mx-3 w-12 h-12 lg:w-20 lg:h-20 bg-pattern-2 bg-cover">
        <div className="flex justify-center items-center rounded-full w-8 h-8 lg:w-14 lg:h-14 bg-brand-accent">
          <div className="flex justify-center items-center rounded-full w-6 h-6 lg:w-12 lg:h-12 bg-pattern-1 bg-cover">
            <div className="w-4 h-4 lg:w-8 lg:h-8 bg-brand-accent rounded-full" />
          </div>
        </div>
      </div>

      <div className="relative z-10 flex justify-center shadow-2xl">
        {/* <img className="w-80 h-80" src="/src/assets/images/africa_human_development.jpeg" /> */}
        <img className="w-80 h-80 rounded-lg" src={AfricanWoman} />
      </div>

      <div className="px-9 lg:px-0">
        <h1 className="pt-4 text-3xl lg:px-0 lg:pt-0 lg:text-5xl text-custom-light-gray font-medium">
          Providing Sustainable Solutions <br className="hidden lg:inline-block" /> 
          to Small and Medium Sized <br className="hidden lg:inline-block" /> 
          Entreprises in Africa 
        </h1>

        <p className="mt-3 lg:mt-5 text-brand text-justify lg:text-left">
          CHL Africa is a social enterprise operating within the framework of 
          Africapitalism by supporting SMEs<br className="hidden lg:inline-block" /> and initiatives positively impacting
          Africa while being financially sustainable.
        </p>

        <div className="mt-4 lg:mt-8">
          <Button 
            title="JOIN THE AFROCHAMPS!"
            bgColor="bg-custom-light-gray"
          />
        </div>
      </div>
    </div>
  )
}

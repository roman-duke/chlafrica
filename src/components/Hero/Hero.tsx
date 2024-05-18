import Button from "@components/Button/Button"

export default function Hero() {
  return (
    <div className="relative flex pt-16 mt-6 items-center justify-around h-full">
      
      <div className="absolute -rotate-[30deg] left-0 top-4 tribe-pattern bg-pattern-1 w-20 h-4" />
      <div className="absolute -rotate-[30deg] left-0 top-6 tribe-pattern bg-pattern-1 w-20 h-4 bg-cover" />
      <div className="absolute -rotate-[30deg] left-0 top-8 tribe-pattern bg-pattern-1 w-20 h-4" />

      <div className="absolute top-0">
        <div className="rounded-full w-10 h-10 bg-pattern-3 bg-cover shadow-md shadow-brand"></div>
      </div>
      
      <div className="absolute flex justify-center items-center right-0 top-0 rounded-full w-20 h-20 bg-pattern-2 bg-cover">
        <div className="flex justify-center items-center rounded-full w-14 h-14 bg-brand-accent">
          <div className="flex justify-center items-center rounded-full w-12 h-12 bg-pattern-1 bg-cover">
            <div className="w-8 h-8 bg-brand-accent rounded-full" />
          </div>
        </div>
      </div>

      <div className="relative z-10 flex justify-center shadow-2xl">
        {/* <img className="w-80 h-80" src="/src/assets/images/africa_human_development.jpeg" /> */}
        <img className="w-80 h-80 rounded-lg" src="/src/assets/images/african_woman.webp" />
      </div>

      <div>
        <h1 className="text-5xl text-custom-light-gray font-medium">
          Providing Sustainable Solutions<br/> 
          to Small and Medium Sized<br/> 
          Entreprises in Africa 
        </h1>

        <p className="mt-5 text-brand">
          CHL Africa is a social enterprise operating within the framework of 
          Africapitalism by supporting SMEs<br/> and initiatives positively impacting
          Africa while being financially sustainable.
        </p>

        <div className="mt-8">
          <Button 
            title="JOIN THE AFROCHAMPS!"
            bgColor="bg-custom-light-gray"
          />
        </div>
      </div>
    </div>
  )
}

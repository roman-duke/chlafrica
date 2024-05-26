export default function Partners() {
  return (
    <div className="mt-6 lg:mt-12 flex flex-col items-center">
      <h2 className="text-2xl lg:text-3xl font-medium text-brand-earth_yellow lg:uppercase">Our Partners</h2>
      <span className="px-4 lg:px-0 mt-3 text-md lg:text-lg font-normal text-brand-accent text-center">
        Here's a snapshot of some of our partners, including our valued clients,<br/> 
        as we believe in collaborative partnerships to drive Africa's development
        forward!
      </span>

      <div className="flex lg:w-full px-4 h-16 lg:h-24 mt-4 mb-8 lg:my-4 lg:py-16 justify-center items-center rounded-md shadow-md border">
        <div className="lg:w-44 lg:h-24 w-14 h-14 overflow-hidden">
          <img className="hover:scale-110 w-full h-full transition object-contain" src="/src/assets/images/adekunle_partner_logo.png" />
        </div>

        <div className="lg:w-44 lg:h-24 w-14 h-14 overflow-hidden">
          <img className="hover:scale-110 w-full h-full transition object-contain" src="/src/assets/images/africa_communications_logo.png" />
        </div>

        <div className="lg:w-44 lg:h-24 w-14 h-14 overflow-hidden">
          <img className="hover:scale-110 w-full h-full transition object-contain" src="/src/assets/images/ayde_limited_partner_logo.png" />
        </div>
        
        <div className="lg:w-44 lg:h-24 w-14 h-14 overflow-hidden">
          <img className="hover:scale-110 w-full h-full transition object-contain" src="/src/assets/images/ayde_media_logo.png" />
        </div>

        <div className="lg:w-44 lg:h-24 w-14 h-14 overflow-hidden">
          <img className="hover:scale-110 w-full h-full transition object-contain" src="/src/assets/images/kavod_partner_logo.png" />
        </div>
        {/* <img className="w-44 h-24 object-contain" src="/src/assets/images/poiema_partner_logo.png" /> */}
      </div>
    </div>
  )
}

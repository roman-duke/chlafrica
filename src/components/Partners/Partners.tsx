export default function Partners() {
  return (
    <div className="mt-12 flex flex-col items-center">
      <h2 className="text-3xl font-medium text-brand-earth_yellow uppercase">Our Partners</h2>
      <span className="mt-3 text-lg font-normal text-brand-accent text-center">
        Here's a snapshot of some of our partners, including our valued clients,<br/> 
        as we believe in collaborative partnerships to drive Africa's development
        forward!
      </span>

      <div className="flex w-full h-24 my-4 py-16 justify-center items-center rounded-md shadow-md border">
        <div className="w-44 h-24 overflow-hidden">
          <img className="hover:scale-110 w-full h-full transition object-contain" src="/src/assets/images/adekunle_partner_logo.png" />
        </div>

        <div className="w-44 h-24 overflow-hidden">
          <img className="hover:scale-110 w-full h-full transition object-contain" src="/src/assets/images/africa_communications_logo.png" />
        </div>

        <div className="w-44 h-24 overflow-hidden">
          <img className="hover:scale-110 w-full h-full transition object-contain" src="/src/assets/images/ayde_limited_partner_logo.png" />
        </div>
        
        <div className="w-44 h-24 overflow-hidden">
          <img className="hover:scale-110 w-full h-full transition object-contain" src="/src/assets/images/ayde_media_logo.png" />
        </div>

        <div className="w-44 h-24 overflow-hidden">
          <img className="hover:scale-110 w-full h-full transition object-contain" src="/src/assets/images/kavod_partner_logo.png" />
        </div>
        {/* <img className="w-44 h-24 object-contain" src="/src/assets/images/poiema_partner_logo.png" /> */}
      </div>
    </div>
  )
}

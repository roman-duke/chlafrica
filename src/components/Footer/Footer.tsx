import ChlafricaLogoText from "@assets/images/chlafrica_logo_text.png"
import RightArrowIcon from "@assets/icons/right-arrow.svg?react"
import LocationPinIcon from "@assets/icons/location-pin.svg?react"
import EmailIcon from "@assets/icons/email.svg?react"
import PhoneIcon from "@assets/icons/phone.svg?react"
import TwitterIcon from "@assets/icons/twitter.svg?react"
import InstagramIcon from "@assets/icons/instagram.svg?react"
import YouTubeIcon from "@assets/icons/youtube.svg?react"

export default function Footer() {
  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-4 items-center justify-around gap-5 pt-2 pb-10 lg:py-10">
        <div className="col-span-2 lg:col-span-1 flex flex-col items-center">
          <img className="w-40 h-24 object-contain" src={ChlafricaLogoText} />
          <p className="mb-4 text-sm text-slate-500 text-center lg:text-left">
            We are promoting people-driven<br/>
            development in Africa by supporting<br/> 
            businesses and initiatives that create<br/>
            jobs, improve living standards and bring<br/>
            long-term prosperity to Africa.
          </p>
          <div className="bg-brand-earth_yellow w-20 h-[2px]"/>
        </div>

        <div className="pl-5 flex flex-col">
          <h3 className="text-md lg:text-lg text-gray-600 font-medium">Services</h3>
          <ul>
            <li className="flex text-sm lg:text-base text-slate-500 gap-2">
              <RightArrowIcon className="w-6 h-6 stroke-brand" />
              Business Incubation
            </li>
            <li className="flex text-sm lg:text-base text-slate-500 gap-2">
              <RightArrowIcon className="w-6 h-6 stroke-brand" />
              Business Sustainability
            </li>
            <li className="flex text-sm lg:text-base text-slate-500 gap-2">
              <RightArrowIcon className="w-6 h-6 stroke-brand" />
              Business Partnership
            </li>
            <li className="flex text-sm lg:text-base text-slate-500 gap-2">
              <RightArrowIcon className="w-6 h-6 stroke-brand" />
              Community Support
            </li>
          </ul>
        </div>

        <div className="pr-5 flex flex-col">
          <h3 className="text-md lg:text-lg text-gray-600 font-medium">Quick links</h3>
          <ul>
            <li className="flex text-sm lg:text-base text-slate-500 gap-2">
              <RightArrowIcon className="w-6 h-6 stroke-brand" />
              Belong to the 1% haven
            </li>
            <li className="flex text-sm lg:text-base text-slate-500 gap-2">
              <RightArrowIcon className="w-6 h-6 stroke-brand" />
              Redefine Africa with us
            </li>
            <li className="flex text-sm lg:text-base text-slate-500 gap-2">
              <RightArrowIcon className="w-6 h-6 stroke-brand" />
              Connect with us
            </li>
            <li className="flex text-sm lg:text-base text-slate-500 gap-2">
              <RightArrowIcon className="w-6 h-6 stroke-brand" />
              See our videos
            </li>
          </ul>

        </div>

        <div className="col-span-2 lg:col-span-1 flex flex-col items-center">
          <h3 className="text-lg font-medium">Contact</h3>
          <ul className="w-full">
            <li className="flex justify-center lg:justify-start text-sm lg:text-base text-slate-500 items-center">
              <a
                href="https://maps.app.goo.gl/Kv5pz2FxvQf4WtaE6" 
                className="flex gap-2 cursor-pointer"
              >
                <LocationPinIcon className="w-6 h-6 stroke-brand" />
                14, Alexandria Crescent, <br className="hidden lg:inline-block"/> Wuse 2, FCT, Nigeria.
              </a>
            </li>
            <li className="flex justify-center lg:justify-start text-sm lg:text-base text-slate-500 items-center">
              <a
                href="tel:+2349087109454" 
                className="flex gap-2 cursor-pointer"
              >
                <PhoneIcon className="w-6 h-6 fill-brand " />
                +2349087109454
              </a>
            </li>
            <li className="flex justify-center lg:justify-start text-sm lg:text-base text-slate-500 gap-2 items-center">
              <EmailIcon className="w-6 h-6 stroke-brand" />
              <div>
                <a href="mailto:info@chlafrica.org">info@chlafrica.org,</a> <br className="hidden lg:inline-block" />
                <a href="mailto:chlafrica001@gmail.com">chlafrica001@gmail.com.</a>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="absolute px-4 left-0 border-t border-[#2F2F2F0] w-lvw">
        <div className="flex justify-between items-center max-w-[960px] m-auto py-3">
          <span className="basis-1/3 text-slate-400 text-xs lg:text-sm">
            Copyright © {new Date().getFullYear()}. All Rights Reserved.
          </span>

          <span className="basis-1/3 text-slate-400 text-center text-xs lg:text-sm">Designed by Gravenite</span>

          <div className="basis-1/3 flex justify-center items-center gap-4">
            <TwitterIcon className="w-4 h-4 fill-black" />
            <InstagramIcon className="w-4 h-4" />
            <YouTubeIcon className="w-4 h-4" />
          </div>
        </div>
      </div>
    </>
  )
}

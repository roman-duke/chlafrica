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
      <div className="flex items-center justify-around gap-5 py-10">
        <div className="flex flex-col">
          <img className="w-40 h-24 object-contain" src="/src/assets/images/chlafrica_logo_text.png"/>
          <p className="mb-4 text-sm">
            We are promoting people-driven<br/>
            development in Africa by supporting<br/> 
            businesses and initiatives that create<br/>
            jobs, improve living standards and bring<br/>
            long-term prosperity to Africa.
          </p>
          <div className="bg-brand-earth_yellow w-20 h-[2px]"/>
        </div>

        <div className="flex flex-col">
          <h3 className="text-lg font-medium">Services</h3>
          <ul>
            <li className="flex text-slate-500 gap-2">
              <RightArrowIcon className="w-6 h-6 stroke-brand" />
              Business Incubation
            </li>
            <li className="flex text-slate-500 gap-2">
              <RightArrowIcon className="w-6 h-6 stroke-brand" />
              Business Sustainability
            </li>
            <li className="flex text-slate-500 gap-2">
              <RightArrowIcon className="w-6 h-6 stroke-brand" />
              Business Partnership
            </li>
            <li className="flex text-slate-500 gap-2">
              <RightArrowIcon className="w-6 h-6 stroke-brand" />
              Community Support
            </li>
          </ul>
        </div>

        <div className="flex flex-col">
          <h3 className="text-lg font-medium">Quick links</h3>
          <ul>
            <li className="flex text-slate-500 gap-2">
              <RightArrowIcon className="w-6 h-6 stroke-brand" />
              Belong to the 1% haven
            </li>
            <li className="flex text-slate-500 gap-2">
              <RightArrowIcon className="w-6 h-6 stroke-brand" />
              Redefine Africa with us
            </li>
            <li className="flex text-slate-500 gap-2">
              <RightArrowIcon className="w-6 h-6 stroke-brand" />
              Connect with us
            </li>
            <li className="flex text-slate-500 gap-2">
              <RightArrowIcon className="w-6 h-6 stroke-brand" />
              See our videos
            </li>
          </ul>

        </div>

        <div className="flex flex-col">
          <h3 className="text-lg font-medium">Contact</h3>
          <ul>
            <li className="flex text-slate-500 gap-2 items-center">
              <LocationPinIcon className="w-6 h-6 stroke-brand" />
              14, Alexandria Crescent, <br/> Wuse 2, FCT, Nigeria.
            </li>
            <li className="flex text-slate-500 gap-2 items-center">
              <PhoneIcon className="w-6 h-6 fill-brand " />
              +2349087109454
            </li>
            <li className="flex text-slate-500 gap-2 items-center">
              <EmailIcon className="w-6 h-6 stroke-brand" />
              infor@chlafrica.org, <br/>
              chlafrica001@gmail.com.
            </li>
          </ul>
        </div>
      </div>

      <div className="absolute left-0 border-t border-[#2F2F2F0] w-lvw">
        <div className="flex justify-between max-w-[960px] m-auto py-3">
          <span className="text-slate-400 text-sm">
            Copyright © {new Date().getFullYear()}. All Rights Reserved.
          </span>

          <div className="flex items-center gap-4">
            <TwitterIcon className="w-4 h-4 fill-black" />
            <InstagramIcon className="w-4 h-4" />
            <YouTubeIcon className="w-4 h-4" />
          </div>
        </div>
      </div>
    </>


  )
}

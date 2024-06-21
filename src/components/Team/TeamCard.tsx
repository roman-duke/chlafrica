import LinkedInIcon from "@assets/icons/linkedin.svg?react";
import EmailIcon from "@assets/icons/email.svg?react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface TeamCardProps {
  imageUrl: string,
  position: string,
  name: string,
  alt?: string
}

export default function TeamCard({ imageUrl, position, name, alt } : TeamCardProps  ) {
  const [onHover, setOnHover] = useState(false);
  return (
    <div className="relative w-full h-96 rounded-xl shadow-md">
      <img className={`${onHover ? 'blur-xs grayscale' : 'grayscale-0'} w-full h-full object-cover rounded-xl`} src={imageUrl} alt={alt}/>
      <div className="absolute bottom-0 w-full rounded-xl translate-y-1/2 border mx-2 bg-custom-light-gray py-1 px-4">
        <h3 className="text-brand-accent text-nowrap font-semibold">{name}</h3>
        <span className="text-sm text-gray-400">{position}</span>
      </div>

      <div 
        className="absolute inset-0 flex flex-col items-end pt-5 px-5"
        onMouseOver={() => {
          !onHover ? setOnHover(true) : null}
        }
        onMouseLeave={() =>
          onHover ? setOnHover(false) : null
        }
      >
        {
          onHover ? (
          <AnimatePresence mode="wait">
            <motion.div
              key="20"
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0, transition: { ease: "easeIn" } }}
              exit={{ opacity: 0, x: 25, transition: { duration: 10, ease: "easeOut" } }}
            >
              <a href="" target="_blank">
                <LinkedInIcon className="size-[30px] fill-brand" />
              </a>
              <a href="" target="_blank">
                <EmailIcon className="size-8 stroke-brand" />
              </a>
            </motion.div>
          </AnimatePresence>
          ) : null
        }
      </div>
    </div>
  )
}

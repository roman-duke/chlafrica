import AdekunlePartner from "@assets/images/adekunle_partner_logo.png";
import AfricaCommunications from "@assets/images/africa_communications_logo.png";
import AydeLimited from "@assets/images/ayde_limited_partner_logo.png";
import AydeMedia from "@assets/images/ayde_media_logo.png";
import KavodPartner from "@assets/images/kavod_partner_logo.png";
import PoeimaPartner from "@assets/images/poiema_partner_logo.png";
import LinkRideLogo from "@assets/images/linkride_logo.png";
import NBALogo from "@assets/images/ChlAfrica_NBA_partner.jpg";
import PartnerCard from "./PartnerCard";
import useMeasure from "react-use-measure";
import { animate, motion, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";

export default function Partners() {
  const images = [
    AdekunlePartner,
    AfricaCommunications,
    AydeLimited,
    AydeMedia,
    KavodPartner,
    PoeimaPartner,
    LinkRideLogo,
    NBALogo,
  ];

  const FAST_DURATION = 25;
  const SLOW_DURATION = 75;

  const [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);
  const [duration, setDuration] = useState(FAST_DURATION);
  const [shouldFinish, setShouldFinish] = useState(false);

  useEffect(() => {
   const finalPosition = -(width / 2) - 8;
    let controls;

   if (shouldFinish) {
     controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
      ease: "linear",
      duration: duration * (1 - xTranslation.get() / finalPosition),
      onComplete: () => {
        setShouldFinish(false);
      }
     });
  } else {
    controls = animate(xTranslation, [0, finalPosition], {
     ease: "linear",
     duration: duration,
     repeat: Infinity,
     repeatType: "loop",
     repeatDelay: 0,
    });
  }

   return controls.stop;
  }, [xTranslation, width, duration, shouldFinish])

  return (
    <div className="mt-6 lg:mt-12 flex flex-col items-center">
      <h2 className="text-2xl lg:text-3xl font-medium text-brand-earth_yellow lg:uppercase">Our Partners</h2>
      <span className="px-4 lg:px-0 mt-3 m-auto max-w-[1040px] text-md lg:text-lg font-normal text-brand-accent text-center">
        Here's a snapshot of our valued clients, including partners we have
        collaborated with to drive Africa's development forward while empowering <br className="lg:hidden" />
        young African entrepreneurs!
      </span>

      <div className="relative my-4 lg:my-8 w-full h-16 lg:h-24 overflow-hidden">
        <motion.div
          className="absolute left-0 flex items-center gap-4"
          ref={ref}
          style={{ x: xTranslation }}
          onHoverStart={() => {
            setShouldFinish(true);
            setDuration(SLOW_DURATION)
          }}
          onHoverEnd={() => setDuration(FAST_DURATION)}
        >
          {[...images, ...images].map((item, idx) => (
            <PartnerCard key={idx} imgUrl={item} />
          ))}
        </motion.div>
      </div>
    </div>
  )
}

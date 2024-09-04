import AfricanDriver from "@assets/images/chlafrica_driver.jpg";
import AfricanCEO from "@assets/images/chlafrica_female_ceo.jpg";
import AfricanTailor from "@assets/images/chlafrica_tailor.jpg";
import { motion, MotionValue, useTransform } from "framer-motion";

export default function Collage({
  yProgress,
}: {
  yProgress: MotionValue<number>;
}) {

  const scale = useTransform(yProgress, [0, 1], [1.2, 0.5]);

  return (
    <div className="relative ml-10">
      <div className="absolute -translate-x-1/2 -left-1/2 lg:-left-1/3 lg:-translate-x-full lg:-top-1/2 bg-dotted-pattern w-24 h-14 bg-contain " />

      <div className="relative flex justify-center w-32">
        <div className="absolute w-28 h-24 md:w-32 md:h-32 left-0 translate-x-3/4">
          <motion.img
            className="w-full h-full rounded-full object-cover"
            src={AfricanDriver}
            style={{ scale: scale }}
            alt="African lady working"
          />
        </div>

        <div className="absolute right-0 w-28 h-24 md:w-32 md:h-32 -translate-x-3/4">
          <motion.img
            className="w-full h-full rounded-full object-cover"
            src={AfricanCEO}
            style={{ scale: scale }}
            alt="African team working"
          />
        </div>

        <div className="w-64 h-36 relative">
          <img
            className="w-full h-full rounded-full object-cover"
            src={AfricanTailor}
            alt="African lady working"
          />
        </div>
      </div>
    </div>
  );
}

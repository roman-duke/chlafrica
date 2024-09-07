import ChlafricaIncubation from "@assets/images/chlafrica_incubation.png";
import ChlafricaSustainability from "@assets/images/chlafrica_sustainability.png";
import ChlafricaShakingHands from "@assets/images/chlafrica_shaking_hands.png";
import CommunitySupport from "@assets/images/chlafrica_support.png";
import ServiceCard from "@components/ServiceCard/ServiceCard";
import { motion } from "framer-motion";

// const list: Variants = {
//   initial: {
//     // opacity: 0.5,
//   },

//   final: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 2.5,
//     }
//   }
// }

// const list_item: Variants = {
//   initial: {
//     y: 40,
//     opacity: 0,
//   },

//   final: {
//     y: 0,
//     opacity: 0,
//     transition: {
//       duration: 1,
//       type: "spring",
//     }
//   }
// }

export default function Services() {
  return (
    <div className="py-5 lg:py-10 backdrop-blur-sm">
      <div className="flex flex-col items-center">
        <h2 className="lg:text-center text-center text-2xl lg:text-4xl font-bold text-brand-accent">
          Your One-Stop Haven for <br className="lg:hidden"/>
          <motion.span
            className="flex justify-center items-center text-brand-earth_yellow h-[50px] relative w-full overflow-hidden"
          >
            Business Growth & Sustainability
          </motion.span>
        </h2>

      </div>

      <div className="flex lg:flex-row flex-col items-center mt-6 gap-4 lg:*:border-r">
        <ServiceCard
          title="Business Incubation"
          content="We specialise in co-designing and launching
                  social businesses and initiatives, providing
                  comprehensive support from concept to execution"
          imgSource={ChlafricaIncubation}
        />

        <ServiceCard
          title="Operations Management"
          content="We offer end-to-end business management services,
                  covering corporate communications, human resources,
                  finance, legal advisory, and more. Our network includes
                  excellent consultants and partner organisations to ensure
                  seamless operations."
          imgSource={ChlafricaSustainability}
        />

        <ServiceCard
          title="Brand and Impact Consulting"
          content="Our expertise extends to brand consulting and impact consulting,
                  including Corporate Social Responsibility (CSR), Corporate Social
                  Advocacy (CSA), and Corporate Social Justice (CSJ) initiatives"
          imgSource={ChlafricaShakingHands}
        />

        <ServiceCard
          title="Capacity Building"
          content="Our Afrochamps community serves as a think-tank and problem-solving
                  hive for knowledge sharing, capacity building, resource distribution
                  to promote people-driven development in Africa."
          imgSource={CommunitySupport}
        />
      </div>
    </div>
  )
}

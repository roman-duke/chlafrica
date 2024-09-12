import {
  AnimatePresence,
  motion,
  MotionValue,
  useTransform,
} from "framer-motion";
import SocialCommitmentIntro from "@assets/images/social_commitment_chlafrica.jpg";
import { useEffect, useState } from "react";

interface CommitmentProps {
  yProgress: MotionValue<number>;
  data: {
    src: string;
    bgVersion: number;
    title: string;
    text: string;
  }[];
}

export default function Commitment({ yProgress, data }: CommitmentProps) {
  const rotateValue = useTransform(yProgress, [0, 1], ["0deg", "360deg"]);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIdx((idx) => (idx + 1) % 4);
    }, 9000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col px-10 max-w-[1140px] m-auto">
      <div className="size-60 self-center md:size-96">
        <motion.img
          src={SocialCommitmentIntro}
          alt="Social Commitment intro picture"
          className="object-cover object-center rounded-full"
          style={{ rotate: rotateValue }}
        />
      </div>

      <div className="py-3 md:py-10">
        <h1 className="text-center text-3xl text-brand-accent font-semibold pb-2 md:text-4xl">
          Our Social Commitments
        </h1>

        <p className="text-justify pt-2 text-brand-accent md:text-lg">
          CHL Africa is dedicated to fostering sustainable development and
          enhancing the quality of life for communities. Our social commitments
          are aligned with key global and regional initiatives, ensuring our
          efforts contribute meaningfully to societal progress.
        </p>
      </div>

      <div className="my-5 md:my-10">
        <CommitmentCard
          dataIdx={idx}
          imgSrc={data[idx].src}
          bgVersion={data[idx].bgVersion}
          title={data[idx].title}
          text={data[idx].text}
        />
      </div>
    </div>
  );
}

function CommitmentCard({
  text,
  title,
  imgSrc,
  dataIdx,
  bgVersion,
}: CommitmentCardProps) {
  return (
    <div className="shadow-md md:shadow-none grid grid-cols-1 md:grid-cols-[50%_3px_50%] place-items-center">
      <AnimatePresence mode="wait">
        <motion.div
          className={`${
            (bgVersion == 2 && "bg-pattern-2") ||
            (bgVersion == 3 && "bg-pattern-3") ||
            (bgVersion == 4 && "bg-pattern-4") ||
            (bgVersion == 5 && "bg-pattern-5")
          } p-4 bg-cover h-[300px] w-[90%] md:h-[500px] md:w-[100%] border-2 border-b-0 md:border-b-2 md:border-r-0 border-brand-earth_yellow md:basis-1/2`}
          key={dataIdx}
        >
          <motion.img
            src={imgSrc as string}
            className="relative h-full w-full object-cover border border-black bg-white"
            initial={{ opacity: 0.35 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            exit={{ opacity: 0.35 }}
          />
        </motion.div>
      </AnimatePresence>

      <hr className="w-[110%] h-[3px] bg-black md:w-[3px] md:h-[120%]" />

      <div className="flex flex-col justify-between md:justify-center italic h-[360px] w-full md:h-full p-4 md:p-6 border-2 md:border-4 overflow-hidden bg-custom-white md:not-italic">
        <span className="text-3xl md:text-5xl italic text-brand-earth_yellow">
          ❝
        </span>

        <div>
          <AnimatePresence mode="wait">
            <motion.h2
              className="text-brand-earth_yellow text-lg md:text-3xl font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              key={dataIdx}
              >
              {title}
            </motion.h2>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.p
              className="font-lora leading-snug text-brand-accent text-justify md:text-xl md:my-2 md:leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              // initial={{ x: '-100%' }}
              // animate={{ x: 0, transition: { duration: 0.75 } }}
              // exit={{ x: '150%' }}
              key={dataIdx}
            >
              {text}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

interface CommitmentCardProps {
  [key: string]: string | number;
  bgVersion: number;
  dataIdx: number;
}

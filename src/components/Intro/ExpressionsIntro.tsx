import {
  motion,
  useMotionValue,
  animate,
  // useScroll,
  // useTransform,
} from "framer-motion";
// import ExpressionsIntroImg from "@assets/images/expressions-intro.jpg";
// import ExpressionsBirthday from "@assets/images/expressions-birthday.jpg";
import { useEffect, useState } from "react";
import {
  expression_path_I,
  expression_path_II,
} from "@components/SectionDemarcation/paths";
import { useFlubber } from "@components/SectionDemarcation/useFlubber";

const layer_path_one = [
  expression_path_I,
  expression_path_II,
  expression_path_I,
];

export default function ExpressionsIntro() {
  // const wrapperRef = useRef(null);
  const [pathIndex, setPathIndex] = useState(0);
  const progress = useMotionValue(pathIndex);
  // const { scrollYProgress } = useScroll({ target: wrapperRef });
  const flubber_expressions_layer = useFlubber(progress, layer_path_one);
  // const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  useEffect(() => {
    const animation = animate(progress, pathIndex, {
      duration: 2,
      ease: "easeIn",
      repeat: Infinity,
      repeatType: "reverse",
      onComplete: () => {
        if (pathIndex === layer_path_one.length - 1) {
          progress.set(0);
          setPathIndex(1);
        } else {
          setPathIndex(pathIndex + 1);
        }
      },
    });

    return () => animation.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathIndex]);

  return (
    // <div className="flex justify-center mt-6 border-b border-slate-200">
    <>
      <div className="w-[100px] h-[100px] md:w-[200px] md:h-[200px] absolute lg:-top-7">
        <svg viewBox="0 0 900 600">
          <motion.path d={flubber_expressions_layer} fill="#c0b9e0" />
        </svg>
      </div>

      {/* <div
        ref={wrapperRef}
        className="flex items-center justify-center relative h-[900px]"
      >
        <div className="sticky flex justify-between top-24 w-[300px] lg:w-full lg:gap-12 h-[300px] lg:h-auto">
          <div className="w-full lg:h-[450px] lg:basis-1/2 overflow-hidden rounded-full lg:rounded-none lg:skew-y-6">
            <motion.img
              src={ExpressionsIntroImg}
              className="w-full h-[300px] lg:h-full object-cover rounded-full lg:rounded-none"
              style={{ opacity: scrollYProgress, scale: imgScale }}
              // style={{ opacity: scrollYProgress, }}
            />
          </div>

          <div className="lg:basis-1/2 lg:h-[450px] overflow-hidden rounded-full lg:rounded-none relative top-32 lg:skew-y-6">
            <motion.img
              src={ExpressionsBirthday}
              className="w-full h-[300px] lg:h-full object-cover rounded-full lg:rounded-none hidden md:block"
              style={{ opacity: scrollYProgress, scale: imgScale }}
              // style={{ opacity: scrollYProgress, }}
            />
          </div>
        </div>
      </div> */}
    </>
  );
}

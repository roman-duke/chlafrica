import { useEffect, useState } from "react";
import { 
  layer_one_path, 
  layer_two_path, 
  layer_three_path, 
  layer_four_path, 
  layer_one_path_II,
  layer_two_path_II,
  layer_three_path_II,
  layer_four_path_II,

  bottom_layer_one_path,
  bottom_layer_one_path_II,
  bottom_layer_two_path,
  bottom_layer_two_path_II
} from "./paths"
import { animate, motion, useMotionValue } from "framer-motion"
import { useFlubber } from "./useFlubber";

interface SectionDemarcationProps {
  type?: "mini",
}

const layer_path_one = [layer_one_path, layer_one_path_II, layer_one_path];
const layer_path_two = [layer_two_path, layer_two_path_II, layer_two_path];
const layer_path_three = [layer_three_path, layer_three_path_II, layer_three_path];
const layer_path_four = [layer_four_path, layer_four_path_II, layer_four_path];
const bottom_layer_path_one = [bottom_layer_one_path, bottom_layer_one_path_II, bottom_layer_one_path];
const bottom_layer_path_two = [bottom_layer_two_path, bottom_layer_two_path_II, bottom_layer_two_path];

export default function SectionDemarcation({ type } : SectionDemarcationProps) {
  const [pathIndex, setPathIndex] = useState(0);
  const progress = useMotionValue(pathIndex);
  const flubber_layer_path_one = useFlubber(progress, layer_path_one);
  const flubber_layer_path_two = useFlubber(progress, layer_path_two);
  const flubber_layer_path_three = useFlubber(progress, layer_path_three);
  const flubber_layer_path_four = useFlubber(progress, layer_path_four);
  const flubber_bottom_layer_path_one = useFlubber(progress, bottom_layer_path_one);
  const flubber_bottom_layer_path_two = useFlubber(progress, bottom_layer_path_two);

  useEffect(() => {
    const animation = animate(progress, pathIndex, {
      duration: 2,
      ease: "easeIn",
      repeat: Infinity,
      repeatType: "reverse",
      onComplete: () => {
        if (pathIndex === (layer_path_one.length - 1)) {
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
  
  // console.log(pathIndex);

  return (
    type != "mini" ? (
      <div className="absolute w-full -bottom-1">
         <svg viewBox="0 0 900 200">
          <motion.path 
            d={flubber_layer_path_one} 
            fill="#201d7b66" 
          />

          <motion.path 
            d={flubber_layer_path_two} 
            fill="#7b6db2" 
          />

          <motion.path 
            d={flubber_layer_path_three} 
            fill="#bdb4d8" 
          />

          <motion.path 
            d={flubber_layer_path_four} 
            fill="#fdfdfd" 
          />
        </svg>
      </div>
    ) : (
      <div className="absolute -left-1 w-[110%]">
        <svg viewBox="0 0 900 200">
          <motion.path 
            d={flubber_bottom_layer_path_one}
            fill="#c1b7e880"
          />

          <motion.path 
            d={flubber_bottom_layer_path_two}
            fill="#d6ceefC2"
          />
        </svg>
      </div>
    )      
  )
}

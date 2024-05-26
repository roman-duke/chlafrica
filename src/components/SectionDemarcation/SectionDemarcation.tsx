import { useEffect, useState } from "react";
import { 
  layer_one_path, 
  layer_two_path, 
  layer_three_path, 
  layer_four_path, 
  layer_one_path_II,
  layer_two_path_II,
  layer_three_path_II,
  layer_four_path_II
} from "./paths"
// import SectionDemarcationIcon from "@assets/icons/layered-waves.svg?react"
// import MiniSectionDemarcationIcon from "@assets/icons/mini-layered-waves.svg?react"
import { animate, motion, useMotionValue } from "framer-motion"
import { useFlubber } from "./useFlubber";
// import { useFlubber } from "@hooks/useFlubber";

interface SectionDemarcationProps {
  type?: "mini",
}

// const path_layer_one_variants = {
//   initial: {
//     d: layer_one_path
//   },
//   final: {
//     d: layer_one_path_II,
//     transition: {
//       ease: "easeInOut",
//       duration: 1,
//       repeat: Infinity,
//       repeatType: "reverse"
//     }
//   },
// }

// const path_layer_two_variants = {
//   initial: {
//     d: layer_two_path
//   },
//   final: {
//     d: layer_two_path_II,
//     transition: {
//       ease: "easeInOut",
//       duration: 1,
//       repeat: Infinity,
//     }
//   }
// }

// const path_layer_three_variants = {
//   initial: {
//     d: layer_three_path
//   },
//   final: {
//     d: layer_three_path_II,
//     transition: {
//       ease: "easeInOut",
//       duration: 1,
//       repeat: Infinity,
//     }
//   }
// }

// const path_layer_four_variants = {
//   initial: {
//     d: layer_four_path
//   },
//   final: {
//     d: layer_four_path_II,
//     transition: {
//       ease: "easeInOut",
//       duration: 1,
//       repeat: Infinity,
//     }
//   }
// }
const layer_path_one = [layer_one_path, layer_one_path_II, layer_one_path];
const layer_path_two = [layer_two_path, layer_two_path_II, layer_two_path];
const layer_path_three = [layer_three_path, layer_three_path_II, layer_three_path];
const layer_path_four = [layer_four_path, layer_four_path_II, layer_four_path];

export default function SectionDemarcation({ type } : SectionDemarcationProps) {
  const [pathIndex, setPathIndex] = useState(0);
  const progress = useMotionValue(pathIndex);
  const flubber_layer_path_one = useFlubber(progress, layer_path_one);
  const flubber_layer_path_two = useFlubber(progress, layer_path_two);
  const flubber_layer_path_three = useFlubber(progress, layer_path_three);
  const flubber_layer_path_four = useFlubber(progress, layer_path_four);

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

    // console.log("Inside the useEffect hook!");
    
    return () => animation.stop();
  }, [pathIndex]);
  
  // console.log(pathIndex);

  return (
    <div className="absolute w-full -bottom-1">
      {/* {type == "mini" ? <MiniSectionDemarcationIcon /> : <SectionDemarcationIcon />} */}
      {type == "mini" ? (
        ''
      ) : (
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
      )}
    </div>
  )
}

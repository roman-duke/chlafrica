import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string,
  content: string,
  imgSource?: string,
}

export default function ServiceCard({ title, content, imgSource } : ServiceCardProps) {

  return (
    <div className="flex flex-col justify-center items-center gap-2">
      {imgSource ? (
        <motion.img
          initial={{ scale: 0.2, x: '-100%', opacity: 0 }}
          whileInView={{
            scale: [0.75, 1.3, 1, 1.2, 1, 1.1, 1],
            x: 0,
            opacity: 1,
            transition: { duration: 3 },
          }}
          viewport={{once: true}}
          src={imgSource}
          className="w-32 h-32 object-contain"
        />
      ) : null}

      <h3 className="text-brand-accent text-lg lg:text-xl font-semibold text-center">
        {title}
      </h3>

      <p className="font-normal text-gray-400 text-md lg:text-base text-center px-10">
        {content}
      </p>
    </div>
  );
}

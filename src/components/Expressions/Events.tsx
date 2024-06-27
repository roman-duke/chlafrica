import EventsImg from "@assets/images/chlafrica-expression-events.jpg"
import { motion } from "framer-motion"

export default function Events() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 3 } }}
      exit={{ opacity: 0 }}
    >
      <div>
        <img src={EventsImg}/>
      </div>

      <div className="my-4 px-6 lg:px-0 text-sm text-justify text-gray-400 leading-relaxed">
        <p className="my-2">
          Are you a young African eager to connect with peers and explore exciting new opportunities? Or maybe you're a professional seeking to support the next generation of African leaders. 
          Either way, you won't want to miss "AfroChampions: Overcoming Obstacles and Creating Impact"! This one-day virtual event, taking place on May 25th, 2023, is all about celebrating the
          incredible resilience and creativity of young Africans. Through panel sessions and group discussions, we will hear from inspiring young leaders who have overcome adversity and achieved 
          great things. They will share their stories of innovation and progress, and help us all envision a brighter future for the continent.
        </p>

        <p className="">
          However, this event is not just about listening - it is also about connecting, sharing ideas, and building relationships. Through interactive discussions and networking opportunities, 
          you will have the chance to meet like-minded individuals and learn from each other. Whether you are looking to start a new Afro-centric project, or simply make some new friends and sustain 
          momentum, this event is for you.
        </p>

        <p className="my-2">
          So mark your calendars for <span className="font-bold">May 25th, 2023</span>, and join us in celebrating the power of the young African!
        </p>
      </div>
    </motion.div>
  )
}

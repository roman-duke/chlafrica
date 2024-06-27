import ExpressionImg1 from "@assets/images/expression_card_1.jpeg"
import { motion } from "framer-motion"

export default function Articles() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: .5 } }}
      exit={{ opacity: 0 }}
    >
      <div>
        <img src={ExpressionImg1}/>
      </div>

      <div className="px-6 lg:px-0 text-sm text-justify text-gray-400 leading-relaxed">
        <p>
          The adoption of the African Union Agenda 2063 has been a tremendous step towards transforming Africa into a prosperous, 
          integrated and peaceful continent. It is a comprehensive framework that has outlined the strategic vision for Africa's 
          development over the next 50 years. The agenda was adopted in January 2015 by the African Union Heads of State and 
          Government as a roadmap towards achieving the dream of the continent where all its citizens can fully realize their potential;
          where all the challenges facing the continent, including poverty, unemployment, inequality, illiteracy, conflict and underdevelopment, 
          shall be addressed and resolved. At its core, the African Union Agenda 2063 focuses on seven key aspirations:
        </p>

        <ol className="mt-2 pl-4 list-decimal">
          <li>A prosperous Africa based on inclusive growth and sustainable development.</li>
          <li>An integrated continent, politically united and based on the ideals of Pan-Africanism.</li>
          <li>A peaceful and secure Africa.</li>
          <li>A transformed economy that creates jobs for all Africans</li>
          <li>A healthy and well-educated population.</li>
          <li>A strong cultural identity, common heritage, values, ethics and morals.</li>
          <li>An environmentally sustainable and climate-resilient continent.</li>
        </ol>

        <p>
          To achieve these aspirations, Agenda 2063 outlines strategies that prioritize infrastructural development, youth empowerment, gender equality, 
          education, healthcare, technological advancement, and sustainable development practices. Collaboration and partnerships between governments, 
          private sectors, civil society, and international organizations are considered crucial for the success of this agenda. Additionally, there 
          are key flagship projects (initiatives and strategic programs) that have been identified as pertinent to accelerating Africa's economic growth 
          and development as well as achieving the goals and aspirations of the Agenda. The flagship projects are:
        </p>

        <ol className="mt-2 pl-4 list-decimal *:marker:font-bold *:marker:text-gray-500">
          <li><span className="font-bold text-gray-500">An integrated high-speed train network:</span> This project is intended to connect African countries, to enhance the transportation of citizens as well as goods across the continent.</li>
          <li><span className="font-bold text-gray-500">African commodities strategy:</span> This is intended to ensure a collaborative process in developing and managing the continent's natural resources.</li>
          <li><span className="font-bold text-gray-500">The African Continental Free Trade Area:</span> This initiative aims at creating the world's largest trading zone in Africa, to promote trade within Africa and with the world.</li>
          <li><span className="font-bold text-gray-500">The African passport:</span> This aims to create a unified passport for all African citizens and to remove restrictions to allow Africans to travel, work, live, and conduct businesses anywhere within the continent.</li>
          <li><span className="font-bold text-gray-500">Silencing the gun:</span> This is aimed at putting an end to conflict and creating a peaceful Africa.</li>
          <li><span className="font-bold text-gray-500">Grand Inga Dam project:</span> It is aimed at solving one of the major challenges of Africa, which is energy poverty. The project will provide affordable and clean electricity.</li>
          <li><span className="font-bold text-gray-500">Single African Air Transport Market:</span> This initiative is aimed at establishing improved and affordable air travel that connects African cities.</li>
          <li><span className="font-bold text-gray-500">African Economic Forum:</span> The idea is to bring together great African minds to develop programs and strategies to harness the continent's vast resources for the benefit of Africans.</li>
          <li><span className="font-bold text-gray-500">African Financial institutions:</span> These institutions shall promote a transparent mobilization of resources to promote economic development.</li>
          <li><span className="font-bold text-gray-500">The Great African Museum:</span> Will preserve and promote Africa's cultural heritage.</li>
          <li><span className="font-bold text-gray-500">Cyber Security:</span> Aimed at protecting data and ensuring the safety of data online.</li>
          <li><span className="font-bold text-gray-500">Virtual and E-University:</span> To provide access to high-quality education to Africans anywhere in the world.</li>
          <li><span className="font-bold text-gray-500">Pan African E-Network:</span> The initiative is targeted at transforming Africa through innovative technology.</li>
          <li><span className="font-bold text-gray-500">African Outer Space Strategy:</span> This project is aimed at harnessing space technology and development; positioning Africa as a regional market for space products and services.</li>
          <li><span className="font-bold text-gray-500">The Encyclopedia Africana:</span> Will document and celebrate Africa's history, culture, and the intellectual contributions of Africans throughout the world.</li>
        </ol>

        <p>
          African leaders and citizens must all unite and demonstrate unwavering commitment and resilience towards achieving the vision of this agenda. By embracing a collective responsibility and working together, the African Union can drive the continent towards a brighter future.
          At CHL Africa, we are promoting people-driven development in Africa (Aspiration 6) and we would like to know: "How are you contributing towards the achievement of the Agenda 2063 aspirations?" 
        </p>

        <p className="italic my-3 text-black text-end font-semibold">
          We are Africans rising! - Written by Paul Ahon Mkorna and Edited by Ayomide Fasan
        </p>
      </div>
    </motion.div>
  )
}

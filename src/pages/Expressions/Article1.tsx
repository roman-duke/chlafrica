import ExpressionImg1 from "@assets/images/expression_card_1.jpeg";
import ExpressionImg3 from "@assets/images/chlafrica_space_center.webp";
import ExpressionImg4 from "@assets/images/chlafrica-state-of-tech.jpg";
import ExpressionImg5 from "@assets/images/chlafrica-economy.jpg";
import Flagship1 from "@assets/images/chlafrica-flagship-1.jpg";
import Flagship2 from "@assets/images/chlafrica-flagship-2.jpg";
import Flagship3 from "@assets/images/chlafrica-flagship-4.jpg";
import Flagship4 from "@assets/images/chlafrica-flagship-3.jpg";
import Flagship5 from "@assets/images/chlafrica-flagship-5.jpg";
import Flagship6 from "@assets/images/chlafrica-flagship-6.jpg";
import Flagship7 from "@assets/images/chlafrica-flagship-7.jpg";
import Flagship8 from "@assets/images/chlafrica-flagship-8.jpg";
import Flagship9 from "@assets/images/chlafrica-flagship-9.jpg";
import Flagship10 from "@assets/images/chlafrica-flagship-10.jpg";
import Flagship11 from "@assets/images/chlafrica-flagship-11.jpg";
import Flagship12 from "@assets/images/chlafrica-flagship-12.jpg";
import Flagship13 from "@assets/images/chlafrica-flagship-13.jpg";
import Flagship14 from "@assets/images/chlafrica-flagship-14.jpg";
import ExpressionCard from "@components/ExpressionCard/ExpressionCard";
import SectionDemarcation from "@components/SectionDemarcation/SectionDemarcation";

export default function Article1() {
  return (
    <section className="grid grid-cols-3 lg:gap-x-20">
      <div className="relative col-span-3 bg-brand-accent py-10 h-[125px] md:h-[150px] lg:h-[275px]">
        <h1 className="text-center text-brand-earth_yellow text-xl lg:text-3xl uppercase font-semibold">
          African Union Agenda 2063
        </h1>
        <SectionDemarcation type="semi-mini"/>
        <div className="bg-white absolute -bottom-1 left-0 w-20 h-4"></div>
      </div>

      <div className="p-6 pt-0 text-sm lg:text-base text-justify leading-relaxed lg:leading-loose font-inter col-span-3 md:col-span-2">
        <p>
          The adoption of the African Union Agenda 2063 has been a tremendous
          step towards transforming Africa into a prosperous, integrated and
          peaceful continent. It is a comprehensive framework that has outlined
          the strategic vision for Africa's development over the next 50 years.
          The agenda was adopted in January 2015 by the African Union Heads of
          State and Government as a roadmap towards achieving the dream of the
          continent where all its citizens can fully realize their potential;
          where all the challenges facing the continent, including poverty,
          unemployment, inequality, illiteracy, conflict and underdevelopment,
          shall be addressed and resolved. At its core, the African Union Agenda
          2063 focuses on seven key aspirations:
        </p>

        <div className="size-64 m-auto my-4">
          <img src={ExpressionImg1} className="size-full object-cover" />
        </div>

        <ol className="mt-2 pl-4 list-decimal">
          <li>
            A prosperous Africa based on inclusive growth and sustainable
            development.
          </li>
          <li>
            An integrated continent, politically united and based on the ideals
            of Pan-Africanism.
          </li>
          <li>A peaceful and secure Africa.</li>
          <li>A transformed economy that creates jobs for all Africans</li>
          <li>A healthy and well-educated population.</li>
          <li>
            A strong cultural identity, common heritage, values, ethics and
            morals.
          </li>
          <li>
            An environmentally sustainable and climate-resilient continent.
          </li>
        </ol>

        <p className="my-3">
          To achieve these aspirations, Agenda 2063 outlines strategies that
          prioritize infrastructural development, youth empowerment, gender
          equality, education, healthcare, technological advancement, and
          sustainable development practices. Collaboration and partnerships
          between governments, private sectors, civil society, and international
          organizations are considered crucial for the success of this agenda.
          Additionally, there are key flagship projects (initiatives and
          strategic programs) that have been identified as pertinent to
          accelerating Africa's economic growth and development as well as
          achieving the goals and aspirations of the Agenda. The flagship
          projects are:
        </p>

        <ol className="mt-2 pl-4 list-decimal *:marker:font-bold">
          <li>
            <span className="font-bold">
              An integrated high-speed train network:
            </span>{" "}
            <p>
              This project is designed to link all African capitals and
              commercial hubs through a High-Speed Train Network, improving the
              transportation of people, goods, and services across the
              continent. The rail network aims to enhance connectivity, lower
              transport costs, and ease congestion in existing and future
              systems.
            </p>
            <div className="w-full h-40 md:h-64 m-auto my-4">
              <img
                src={Flagship1}
                className="size-full object-cover"
                loading="lazy"
              />
            </div>
          </li>
          <li>
            <span className="font-bold">African commodities strategy:</span>{" "}
            <p>
              The creation of a continental commodities strategy is considered
              crucial for helping African nations increase the value of their
              resources, generate higher revenues, participate in global value
              chains, and foster both vertical and horizontal diversification
              based on value addition and local content. This strategy seeks to
              shift Africa from merely being a supplier of raw materials to
              becoming a continent that leverages its own resources for the
              economic growth of its people.
            </p>
            <div className="w-full h-40 md:h-64 m-auto my-4">
              <img
                src={Flagship2}
                className="size-full object-cover"
                loading="lazy"
              />
            </div>
          </li>
          <li>
            <span className="font-bold">
              The African Continental Free Trade Area:
            </span>{" "}
            <p>
              The AfCFTA seeks to speed up intra-African trade and enhance
              Africa’s competitiveness in the global market. Its goal is to
              rapidly increase the growth of trade within Africa and harness
              trade as a driver of economic growth and sustainable development.
              By doubling intra-African trade, it also aims to strengthen
              Africa’s unified voice and influence in global trade negotiations.
            </p>
            <div className="w-full h-40 md:h-64 m-auto my-4">
              <img
                src={Flagship3}
                className="size-full object-cover"
                loading="lazy"
              />
            </div>
          </li>
          <li>
            <span className="font-bold">The African passport:</span>{" "}
            <p>
              This initiative seeks to remove barriers that limit Africans'
              ability to travel, work, and live freely within the continent. It
              aims to reform restrictive laws and promote the issuance of visas
              by Member States to support the free movement of African citizens
              across all countries in Africa.
            </p>
            <div className="w-full h-40 md:h-64 m-auto my-4">
              <img
                src={Flagship4}
                className="size-full object-cover"
                loading="lazy"
              />
            </div>
          </li>
          <li>
            <span className="font-bold">Silencing the gun:</span>{" "}
            <p>
              This aims to bring an end to wars, civil unrest, gender-based
              violence, and prevent genocide in order to create a peaceful
              Africa. Progress will be monitored through the development and
              implementation of an African Human Security Index (AHSI).
            </p>
            <div className="w-full h-40 md:h-64 m-auto my-4">
              <img
                src={Flagship5}
                className="size-full object-cover"
                loading="lazy"
              />
            </div>
          </li>
          <li>
            <span className="font-bold">Grand Inga Dam project:</span>{" "}
            <p>
              It is aimed at solving one of the major challenges of Africa,
              which is energy poverty. The project will provide affordable and
              clean electricity.
            </p>
            <div className="w-full h-40 md:h-64 m-auto my-4">
              <img
                src={Flagship6}
                className="size-full object-cover"
                loading="lazy"
              />
            </div>
          </li>
          <li>
            <span className="font-bold">
              Single African Air Transport Market:
            </span>{" "}
            <p>
              This initiative is aimed at establishing improved and affordable
              air travel that connects African cities.
            </p>
            <div className="w-full h-40 md:h-64 m-auto my-4">
              <img
                src={Flagship7}
                className="size-full object-cover"
                loading="lazy"
              />
            </div>
          </li>
          <li>
            <span className="font-bold">African Economic Forum:</span>{" "}
            <p>
              The idea is to bring together great African minds to develop
              programs and strategies to harness the continent's vast resources
              for the benefit of Africans.
            </p>
            <div className="w-full h-40 md:h-64 m-auto my-4">
              <img
                src={Flagship8}
                className="size-full object-cover"
                loading="lazy"
              />
            </div>
          </li>
          <li>
            <span className="font-bold">African Financial institutions:</span>{" "}
            <p>
              These institutions shall promote a transparent mobilization of
              resources to promote economic development.
            </p>
            <div className="w-full h-40 md:h-64 m-auto my-4">
              <img
                src={Flagship9}
                className="size-full object-cover"
                loading="lazy"
              />
            </div>
          </li>
          <li>
            <span className="font-bold">The Great African Museum:</span>{" "}
            <p>
              The African Charter for African Cultural Renaissance acknowledges
              the vital role culture plays in bringing people together around
              shared ideals and advancing African culture to strengthen
              Pan-Africanism. The Great African Museum project aims to highlight
              Africa’s rich, diverse cultural heritage and its ongoing influence
              on global cultures in areas like art, music, language, and
              science. The museum will serve as a central hub for safeguarding
              and celebrating Africa’s cultural legacy.
            </p>
            <div className="w-full h-40 md:h-64 m-auto my-4">
              <img
                src={Flagship14}
                className="size-full object-cover"
                loading="lazy"
              />
            </div>
          </li>
          <li>
            <span className="font-bold">Cyber Security:</span>{" "}
            <p>
              The decision to make Cyber Security a key initiative under Agenda
              2063 highlights Africa's need to adapt to the fast-evolving
              technological landscape while ensuring these advancements benefit
              its people, institutions, and countries. The Cyber Security
              project focuses on safeguarding data and online safety, following
              the guidelines of the African Union Convention on Cyber Security
              and Personal Data Protection.
            </p>
            <div className="w-full h-40 md:h-64 m-auto my-4">
              <img
                src={Flagship13}
                className="size-full object-cover"
                loading="lazy"
              />
            </div>
          </li>
          <li>
            <span className="font-bold">Virtual and E-University:</span>{" "}
            <p>
              This project seeks to utilize ICT-based programs to expand access
              to tertiary and continuing education across Africa by reaching
              numerous students and professionals at multiple locations
              simultaneously. It aims to create high-quality and relevant Open,
              Distance, and eLearning (ODeL) resources, ensuring students can
              access the university from anywhere in the world, at any time,
              24/7.
            </p>
            <div className="w-full h-40 md:h-64 m-auto my-4">
              <img
                src={Flagship12}
                className="size-full object-cover"
                loading="lazy"
              />
            </div>
          </li>
          <li>
            <span className="font-bold">Pan African E-Network:</span>{" "}
            <p>
              The initiative is targeted at transforming Africa through
              innovative technology.
            </p>
            <div className="w-full h-40 md:h-64 m-auto my-4">
              <img
                src={Flagship10}
                className="size-full object-cover"
                loading="lazy"
              />
            </div>
          </li>
          <li>
            <span className="font-bold">African Outer Space Strategy:</span>{" "}
            <p>
              This project is aimed at harnessing space technology and
              development; positioning Africa as a regional market for space
              products and services.
            </p>
            <div className="w-full h-40 md:h-64 m-auto my-4">
              <img
                src={Flagship11}
                className="size-full object-cover"
                loading="lazy"
              />
            </div>
          </li>
          <li>
            <span className="font-bold">The Encyclopedia Africana:</span> Will
            document and celebrate Africa's history, culture, and the
            intellectual contributions of Africans throughout the world.
          </li>
        </ol>

        <p className="my-3">
          African leaders and citizens must all unite and demonstrate unwavering
          commitment and resilience towards achieving the vision of this agenda.
          By embracing a collective responsibility and working together, the
          African Union can drive the continent towards a brighter future. At
          CHL Africa, we are promoting people-driven development in Africa
          (Aspiration 6) and we would like to know: "How are you contributing
          towards the achievement of the Agenda 2063 aspirations?"
        </p>

        <p className="italic my-3 text-black text-end font-semibold">
          We are Africans rising! - Written by Paul Ahon Mkorna and Edited by
          Ayomide Fasan
        </p>
      </div>

      <div className="col-span-3 md:col-span-1">
        {/* <ExpressionCard
          category="Events"
          title="Afrochampions: Overcoming Obstacles and Creating Impact"
          content="Are you a young African eager to connect with peers and
                  explore exciting new opportunities? Or maybe you're a
                  professional seeking to support…"
          imgSource={ExpressionImg2}
          destination="/events/overcoming_obstacles_and_creating_impact"
        /> */}

        <ExpressionCard
          category="Articles"
          title="Beyond Earth: The Rise of Africa's Space Industry"
          content="The nascent space industry in Africa is gradually becoming
                  a significant tool for promoting Africa’s growth and development.
                  Its economic and environmental sectors…"
          imgSource={ExpressionImg3}
          destination="/articles/rise_of_africa_space_industry"
        />

        <ExpressionCard
          category="Articles"
          title="The State of Technology in Africa"
          content="In the past few years, it is clear that the African continent has been
          experiencing a revolution around technology. With a large population
          of Africans, the potential of becoming a major ace in the global
          technology industry is visible. In the year 2022…"
          imgSource={ExpressionImg4}
          destination="/articles/state_of_tech_in_africa"
        />

        <ExpressionCard
          category="Articles"
          title="Nigeria's Economy, Trends and ways it can be Improved"
          content="Nigeria, since its amalgamation in 1914, has undergone various phases,
          from the republican government to the militarily ruled period, and here we are today
          with a democratic system of government. Like Rome, Nigeria cannot be built in a day…"
          imgSource={ExpressionImg5}
          destination="/articles/nigeria_economy"
        />
      </div>
    </section>
  );
}

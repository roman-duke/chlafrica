import ExpressionImg1 from "@assets/images/expression_card_1.jpeg";
import ExpressionImg4 from "@assets/images/chlafrica-state-of-tech.jpg";
import ExpressionImg5 from "@assets/images/chlafrica-economy.jpg";
import ExpressionCard from "@components/ExpressionCard/ExpressionCard";
import SectionDemarcation from "@components/SectionDemarcation/SectionDemarcation";
import Space from "@assets/images/chlafrica-space.jpg";

export default function Article3() {
  return (
    <section className="grid grid-cols-3 lg:gap-x-20">
      <div className="relative col-span-3 bg-brand-accent py-10 h-[125px] md:h-[150px] lg:h-[275px]">
        <h1 className="text-center text-brand-earth_yellow text-xl lg:text-3xl uppercase font-semibold">
          Africa's Space Industry
        </h1>
        <SectionDemarcation type="semi-mini" />
        <div className="bg-white absolute -bottom-1 left-0 w-20 h-4"></div>
      </div>

      <div className="p-6 pt-0 text-sm lg:text-base text-justify leading-relaxed lg:leading-loose font-inter col-span-3 md:col-span-2">
        <p>
          The nascent space industry in Africa is gradually becoming a
          significant tool for promoting Africa's growth and development. Its
          economic and environmental sectors are identified as being vital to
          the growth of the economy. The space industry has therefore become a
          major contributor to Africa’s sustainability and development.
          Currently, an number of 54 satellites have been launched by various
          African countries, which include South Africa, Nigeria, Ghana,
          Algeria, Kenya, Egypt, and many others. South Africa was the first to
          launch its satellite in 1998. However, Uganda and Zimbabwe just
          recently launched their satellites in November 2022.
        </p>

        <p>
          It is pertinent to note that the space industry can lead to the
          progress of the economy, especially in Africa, which is sometimes
          perceived as a primitive continent. The establishment of space
          technology has aided in the successful implementation of the
          sustainable development goals, cutting across SDGs 4, 9, 10, and 17,
          among many other sectors that are emphatically impacted by the space
          industry. It has served as a contributing factor to the expansion of
          the continent of Africa.
        </p>

        <div className="my-4">
          <img src={Space} />
        </div>

        <p>
          One of the futuristic programs of the African Union on the
          implementation and planning of space policy and tactics is inculcated
          in Agenda 2063 as a major project for improvement and transformation
          in Africa. In 2017, the act to establish the African space industry
          was declared, which led to the headquarters formed in Egypt. More so,
          its benefits are being leveraged on the continent, and there is no
          exception for Africans, as the socioeconomic and environmental impact
          are capable of providing huge opportunities for the continent. The
          space agency in Africa has accelerated rapidly due to the African
          Union's commitment and contributions to the continent's development,
          which have led to the establishment of many space industries over the
          years.
        </p>

        <p>
          <h2 className="font-semibold text-base lg:text-lg mt-2">
            Why are these African countries tilting towrds the adaptiation of
            the space industry, and what benefit do they derive from the
            implmentation of the space industry in their various spheres?
          </h2>
          Modernized economies are heavily based on space technology and
          activities, as the geostationary orbital system is filled with
          communication satellites and meteorological tools. These satellites,
          when installed in their orbit segments, provide information that
          guides our daily lives, ranging from weather and climatic change to
          world-wide distribution of information, radiation, and so much more.
          Some of its benefits will be outlined below:
          <ol className="mt-2 pl-4 list-decimal">
            <li>
              <span className="font-bold">Scientific Exploration:</span>{" "}
              <p>
                This provides insight on new discoveries that, in most cases,
                are useful to the planet Earth. With these breakthroughs, we are
                able to challenge our horizons and explore beyond our
                environment.
              </p>
            </li>

            <li>
              <span className="font-bold">Job Opportunities:</span>{" "}
              <p>
                The space industry has provided high-tech job opportunities for
                many Africans, which automatically improves the standard of
                living for most Africans.
              </p>
            </li>

            <li>
              <span className="font-bold">Promotes Safety:</span>{" "}
              <p>
                With the adaptation of similes, one is able to detect natural
                disasters, predict the weather forecast, and gather relevant
                information pertaining to the state of the earth. for the safety
                of not just Africans but the world as a whole.
              </p>
            </li>

            <li>
              <span className="font-bold">
                Improves Knowledge of Technology:
              </span>{" "}
              <p>
                The emergence of space exploration has opened the African
                horizon to see what exists beyond the earth.
              </p>
            </li>
          </ol>
        </p>

        <p>
          As beneficial as the space agency can be to the continent, it comes
          with its own setbacks, which may include disorder in balance,
          radiation risk that can be dangerous to humans, bone loss, cancer, and
          many others. The industry will need to put in place intense security
          standards to ensure risks are mitigated and tracked at all levels.
        </p>

        <p>
          One of the earliest African space agencies is known as SANSA. The
          South African national space industry was formed to promote and
          coordinate space activities with the sole aim of enhancing their
          country. Prior to the inception of SANSA, the Council for Scientific
          and Industrial Research directed the South African space industry
          during the 19th century. South Africa also tried to launch its
          military surveillance program, but these plans ended in the year 1994.
          Thereafter, they planned on innovating many more satellites
          concentrated on SumbandilaSat and working collectively with other
          space industries like Nigeria, Kenya, and Uganda for the development
          and growth of the earth.
        </p>

        <p>
          The future of Africa can change rapidly with the implementation of the
          strategic approach and objective in the space industry, this can be
          followed by continuous process of space technology and inclusiveness
          to guide its expansion. With a constant indulgence in space
          exploration, telecommunications, and meteorology, there will be
          relevant changes on the African continent.
        </p>

        <p className="italic my-3 text-black text-end font-semibold">
          Written by Paul Ahon
        </p>
      </div>

      <div className="col-span-3 md:col-span-1">
        <ExpressionCard
          category="Article"
          title="The African Union Agenda 2063: The future of Africa"
          content="The Adoption of the African Union Agenda 2063 has
                    been a tremendous step towards transforming Africa
                    into a prosperous, integrated and peaceful continent..."
          imgSource={ExpressionImg1}
          destination="articles/the_african_union_agenda"
        />

        <ExpressionCard
          category="Article"
          title="The State of Technology in Africa"
          content="In the past few years, it is clear that the African continent has been
          experiencing a revolution around technology. With a large population
          of Africans, the potential of becoming a major ace in the global
          technology industry is visible. In the year 2022…"
          imgSource={ExpressionImg4}
          destination="/articles/state_of_tech_in_africa"
        />

        <ExpressionCard
          category="Article"
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

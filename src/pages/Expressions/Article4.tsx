import ExpressionImg1 from "@assets/images/expression_card_1.jpeg";
import ExpressionCard from "@components/ExpressionCard/ExpressionCard";
import SectionDemarcation from "@components/SectionDemarcation/SectionDemarcation";
import ExpressionImg3 from "@assets/images/chlafrica_space_center.webp";
import ExpressionImg5 from "@assets/images/chlafrica-economy.jpg";
import IntroImg from "@assets/images/chlafrica-state-of-tech.jpg";

export default function Article3() {
  return (
    <section className="grid grid-cols-3 lg:gap-x-20">
      <div className="relative col-span-3 bg-brand-accent py-10 h-[125px] md:h-[150px] lg:h-[275px]">
        <h1 className="text-center text-brand-earth_yellow text-xl lg:text-3xl uppercase font-semibold">
          The State of Technology in Africa (Report in Retrospect)
        </h1>
        <SectionDemarcation type="semi-mini" />
        <div className="bg-white absolute -bottom-1 left-0 w-20 h-4"></div>
      </div>

      <div className="p-6 pt-0 text-sm lg:text-base text-justify leading-relaxed lg:leading-loose font-inter col-span-3 md:col-span-2">
        <div className="my-4 h-80 w-full">
          <img src={IntroImg} className="w-full h-full object-cover"/>
        </div>
        <p>
          In the past few years, it is clear that the African continent has been
          experiencing a revolution around technology. With a large population
          of Africans, the potential of becoming a major ace in the global
          technology industry is visible. In the year 2022, Africa is
          characterized by a rapidly growing tech sector, innovative solutions,
          and a focus on digital transformation.
        </p>

        <p>
          One of the major drivers of the growth of the tech industry in Africa
          is the continent's large and youthful population. With over 60% of the
          African population below the age of 25, there is a large pool of
          tech-savvy young people who are eager to contribute to the growth of
          the tech sector. This demographic advantage has led to the creation of
          many tech startups and an increase in investments in the African tech
          industry.
        </p>

        <p>
          From fintech to e-commerce, there are several areas where the African
          tech industry has excelled, attracting significant investment and
          driving economic growth.
        </p>

        <p>
          One of the most significant areas of growth is fintech. African
          fintech startups received a record amount of funding in 2022, with the
          majority of investment going towards companies that focus on providing
          mobile financial services. This has led to the proliferation of mobile
          money services across the continent, allowing people to access
          financial services more easily and at a lower cost. As a result, many
          Africans who previously lacked access to banking services can now
          participate in the formal financial system, opening up new
          opportunities for economic growth and development.
        </p>

        <p>
          However, the lack of access to funding for startups in many African
          countries is one of the major challenges faced. While there has been
          an increase in investment in African tech startups, the majority of
          the funding goes to companies based in just a few countries. This has
          left many startups in other African countries struggling to attract
          the funding and support they need to grow and succeed. Due to this a
          lot of tech workers were laid off. It was said that the first half of
          the year 2022 had a great start but a reduction was noticed in the
          second half when compared to the year before it(2021).
        </p>

        <p>
          In conclusion, the continent can become an ace in the global tech
          industry, with a large and youthful population, increasing access to
          technology, and many significant tech startups. However, the sector
          still faces a few challenges, and stakeholders must work together to
          address these challenges and unlock the full capacity of the African
          tech industry.
        </p>

        <p className="italic my-3 text-black text-end font-semibold">
          Written by Ayomide Fasan Olanipekun
        </p>
      </div>

      <div className="col-span-3 md:col-span-1">
        <ExpressionCard
          category="Articles"
          title="The African Union Agenda 2063: The future of Africa"
          content="The Adoption of the African Union Agenda 2063 has
                    been a tremendous step towards transforming Africa
                    into a prosperous, integrated and peaceful continent…"
          imgSource={ExpressionImg1}
          destination="/articles/the_african_union_agenda"
        />

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

import ExpressionImg1 from "@assets/images/expression_card_1.jpeg";
import ExpressionImg4 from "@assets/images/chlafrica-state-of-tech.jpg";
import ExpressionCard from "@components/ExpressionCard/ExpressionCard";
import SectionDemarcation from "@components/SectionDemarcation/SectionDemarcation";
import ExpressionImg3 from "@assets/images/chlafrica_space_center.webp";
import IntroImg from "@assets/images/chlafrica-economy.jpg";

export default function Article3() {
  return (
    <section className="grid grid-cols-3 lg:gap-x-20">
      <div className="relative col-span-3 bg-brand-accent py-10 h-[125px] md:h-[150px] lg:h-[275px]">
        <h1 className="text-center text-brand-earth_yellow text-xl lg:text-3xl uppercase font-semibold">
          Nigeria's economy, trends and ways it can be improved
        </h1>
        <SectionDemarcation type="semi-mini" />
        <div className="bg-white absolute -bottom-1 left-0 w-20 h-4"></div>
      </div>

      <div className="p-6 pt-0 text-sm lg:text-base text-justify leading-relaxed lg:leading-loose font-inter col-span-3 md:col-span-2">
        <div className="my-4 h-80 w-full">
          <img src={IntroImg} className="w-full h-full object-cover" />
        </div>
        <p>
          Nigeria, since its amalgamation in 1914, has undergone various phases,
          from the republican government to the militarily ruled period, and
          here we are today with a democratic system of government. Like Rome,
          Nigeria cannot be built in a day, but the different stages it
          encounters are what will eventually lead it to its peak.
        </p>

        <p>
          Over the years, venture capitalists have risen throughout the world.
          These are people or capitalists who enable capital for the expansion
          of a startup or for the exchange of equity stakes. With the aid of
          technology, diverse venture capitalists have been able to thrive in
          their respective fields, stemming from Twitter, Alibaba, Facebook, and
          Airbnb, and Nigeria is not an exception as it is a developing country
          striving to stay relevant and, in the limelight, along with its other
          counterparts.
        </p>

        <p>
          Due to the unexpected pandemic in 2021, which led to the closure of
          many enterprises, this was also a period of the rise of many ventures,
          as technology encouraged long-distance activities in the work space.
        </p>

        <h2 className="font-semibold text-lg">What can be improved upon?</h2>

        <ol className="mt-2 pl-4 list-decimal *:marker:font-bold">
          <li>
            <span className="font-bold">Education Sector</span>{" "}
            <p>
              The brain drain of the country is drastically increasing and
              becoming alarming as youths are doing anything to break away from
              their country; this is popularly called "JAPA." In February 2022,
              the Association of Student Unions of Universities embarked on a
              10-month strike, which left the majority of students seeking other
              ways and forms to further their education. As a student at a
              federal university in Nigeria, I believe we can do better with the
              limited resources present. We should begin by finding the
              problems, and that way we will be able to mitigate the issues
              surrounding academics.
            </p>
          </li>
          <li>
            <span className="font-bold">Political:</span>{" "}
            <p>
              Like Nigeria's national anthem, composed by the late Pa Benedict
              Odiase after the belligerent war faced by Nigerians in 1970, which
              states that "the labour of our heroes past shall never be in
              vain," just like the notes suggest, our efforts will be
              productive. Presently, there are three major political parties in
              Nigeria. Suppose those parties can form a tripartite coalition
              working closely together as qualified for their various positions,
              with the aid of INEC representatives to put them in check and
              balance. In that case, Nigeria will experience the long-awaited
              change.
            </p>
          </li>
          <li>
            <span className="font-bold">Economy</span>{" "}
            <p>
              A significant improvement during the outgoing president's tenure
              was that he was able to ensure most products consumed by Nigerians
              were also produced in Nigeria. Most artisans struggled with the
              idea due to inadequate infrastructure or tools. If we can deploy
              experts to come and train these artisans on how to maintain and
              conserve those tools, the system will improve.
            </p>
          </li>
          <li>
            <span className="font-bold">Environmental Sustainability:</span>{" "}
            <p>
              What we inhale and exhale has a great impact on our health, and
              oftentimes it may be detrimental. Some time ago, my aunt narrated
              a story about her experience in Dubai; she explained how most
              people walk, ride bicycles, and take the train. She also mentioned
              how it has helped their economy by reducing gas emissions from
              vehicles and dust. This will have a major impact on them, as it
              will help the residents of that country stay fit and sustain their
              climate. In Nigeria, it is almost as though the number of cars
              used is competing with humans, especially in Lagos State. I am not
              discarding the function of vehicles or how technology has been of
              immense value to us. I only wish that the use of these vehicles
              should be moderated and other sources of transportation explored.
            </p>
          </li>
          <li>
            <span className="font-bold">Entrepreneurship Support</span>{" "}
            <p>
              Small and medium businesses should be encouraged. I admire the
              opportunity given by the Tony Elumelu Foundation; if more of those
              opportunities are introduced, the system will be more effective,
              and this will help solve the problem of unemployment to some
              extent. I have observed start-up businesses, and I believe they
              have the skill and zeal to commence their duties, but what they
              lack sometimes is capital. As stated earlier, one person cannot
              help everybody, but one person can help one person; if this
              consciousness is passed on to the nation, change will be feasible.
              We have also witnessed the rise of venture capitalists in the
              system. Also, the health sector is another crucial aspect of our
              nation’s economy that needs critical, cutting-edge action. There
              would not be a need for people to leave the country to access
              healthcare services if the sector was thriving, and our healthcare
              workers would not be massively migrating if they were satisfied
              with what the system offered them.
            </p>
          </li>
        </ol>

        <p>
          To conclude, businesses in Nigeria were affected during the pandemic,
          and this same occurrence led to the rise of companies. The world has
          been able to collectively work together thanks to modern technology.
          We were able to work together to mitigate the crisis through
          quarantine and joining forces with other countries. That was the
          spirit of a nation, and this concept should be infused in other areas
          of governance. I believe in unity and peace, and I believe that
          Nigeria is only going through a phase and will step right up to its
          peak. We are a people with unlimited potential; a typical Nigerian has
          an unbreakable spirit, and we excel even at the international level.
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
          title="The State of Technology in Africa"
          content="In the past few years, it is clear that the African continent has been
          experiencing a revolution around technology. With a large population
          of Africans, the potential of becoming a major ace in the global
          technology industry is visible. In the year 2022…"
          imgSource={ExpressionImg4}
          destination="/articles/state_of_tech_in_africa"
        />
      </div>
    </section>
  );
}

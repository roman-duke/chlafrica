// import { useState } from "react";
import ExpressionsIntro from "@components/Intro/ExpressionsIntro";
// import MainExpressions from "@components/Expressions/MainExpressions";
import ExpressionImg1 from "@assets/images/expression_card_1.jpeg";
import ExpressionImg2 from "@assets/images/expression_card_2.jpeg";
import ExpressionImg3 from "@assets/images/chlafrica_space_center.webp";
import ExpressionImg4 from "@assets/images/chlafrica-state-of-tech.jpg";
import ExpressionImg5 from "@assets/images/chlafrica-economy.jpg";
import ExpressionImg6 from "@assets/images/pres-tinubu.jpg";
import ExpressionCard2 from "@components/ExpressionCard/ExpressionCard_II";

export default function Expressions() {
  // const expressions = ["events", "articles", "stories"];
  // const [expression, setExpression] = useState(expressions[0]);

  return (
    <section className="relative bg-img bg-cover bg-right bg-no-repeat overflow-hidden">
      <div className="relative p-3 lg:p-0">
        <div className="p-3 lg:p-5 relative flex flex-col items-center max-w-[1240px] m-auto my-6 bg-pattern-2 border-4 border-black">
          <div className="relative bg-expressions-intro-bg bg-cover bg-center lg:h-[500px] z-10">
            <div className="p-5 md:p-16 backdrop-blur-sm h-full">
              <h2 className="uppercase my-5 lg:mt-32 relative text-4xl font-bold text-white text-right">
                Stories and Projects
              </h2>

              <div className="ml-auto md:w-[75%] bg-black opacity-50">
                <p className="leading-tight text-[14px] text-justify lg:text-2xl font-medium text-white p-3">
                  We have curated insightful articles, exciting upcoming events,
                  and impactful project stories to stay informed, equipped and
                  engaged with CHL Africa's Afrochamp community. Welcome to CHL
                  Africa's expressions - your one-stop haven for business growth
                  and sustainability in Africa!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute max-w-[1140px] hidden md:block md:top-10 -left-10">
          <ExpressionsIntro />
        </div>

        <div className="absolute max-w-[1140px] hidden md:block md:left-[88%] md:bottom-10">
          <ExpressionsIntro />
        </div>
      </div>


      <section className="mt-10 lg:mt-15">
        <div className="grid md:grid-cols-3 md:max-w-[1240px] m-auto">
          <ExpressionCard2
            category="Articles"
            title="The 2026 Tax Reforms: Impact on Individuals, Small Businesses and Larger Companies"
            imgSource={ExpressionImg6}
            destination="/articles/nigeria-tax-reforms"
          />

          <ExpressionCard2
            category="Articles"
            title="The African Union Agenda 2063: The future of Africa"
            imgSource={ExpressionImg1}
            destination="/articles/the_african_union_agenda"
          />

          <ExpressionCard2
            category="Event"
            title="Afrochampions: Overcoming Obstacles and Creating Impact"
            imgSource={ExpressionImg2}
            destination="/events/overcoming_obstacles_and_creating_impact"
          />

          <ExpressionCard2
            category="Articles"
            title="Beyond Earth: The Rise of Africa's Space Industry"
            imgSource={ExpressionImg3}
            destination="/articles/rise_of_africa_space_industry"
          />

          <ExpressionCard2
            category="Articles"
            title="The State of Technology in Africa (Report in Retrospect)"
            imgSource={ExpressionImg4}
            destination="/articles/state_of_tech_in_africa"
          />

          <ExpressionCard2
            category="Articles"
            title="Nigeria's Economy, Trends and ways it can be Improved"
            imgSource={ExpressionImg5}
            destination="/articles/nigeria_economy"
          />
        </div>
      </section>
    </section>
  );
}

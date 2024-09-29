// import { useState } from "react";
import ExpressionsIntro from "@components/Intro/ExpressionsIntro";
// import MainExpressions from "@components/Expressions/MainExpressions";
import ExpressionImg1 from "@assets/images/expression_card_1.jpeg";
import ExpressionImg2 from "@assets/images/expression_card_2.jpeg";
import ExpressionImg3 from "@assets/images/chlafrica_space_center.webp";
import ExpressionCard2 from "@components/ExpressionCard/ExpressionCard_II";

export default function Expressions() {
  // const expressions = ["events", "articles", "stories"];
  // const [expression, setExpression] = useState(expressions[0]);

  return (
    <section className="relative bg-img bg-cover bg-right bg-no-repeat overflow-hidden">
      <div className="pt-3 lg:pt-5 px-10 max-w-[950px] m-auto">
        <h2 className="font-semibold text-brand-accent text-2xl lg:text-3xl text-center">
          CHL Expressions
        </h2>

        <h2 className="uppercase font-semibold text-brand-earth_yellow text-lg lg:text-xl text-center">
          Stories & Projects
        </h2>
        <p className="relative mt-2 text-base lg:text-lg text-gray-600 text-justify leading-relaxed z-10 font-inter">
          We have curated insightful articles, exciting upcoming events, and
          impactful project stories to stay informed, equipped and engaged with
          CHL Africa's Afrochamp community. Welcome to CHL Africa's expressions
          - your one-stop haven for business growth and sustainability in
          Africa!
        </p>
      </div>

      <div className="absolute max-w-[1140px] hidden md:block md:top-24">
        <ExpressionsIntro />
      </div>

      <div className="absolute max-w-[1140px] hidden md:block md:left-[85%] md:top-24">
        <ExpressionsIntro />
      </div>

      <section className="mt-10 lg:mt-15">
        <div className="flex flex-col md:flex-row">
          <ExpressionCard2
            category="Articles"
            title="The African Union Agenda 2063: The future of Africa"
            imgSource={ExpressionImg1}
            destination="/articles/the_african_union-agenda"
          />

          <ExpressionCard2
            category="Events"
            title="Afrochampions: Overcoming Obstacles and Creating Impact"
            imgSource={ExpressionImg2}
            destination="/events/overcoming_obstacles_and_creating_impact"
          />

          <ExpressionCard2
            category="Articles"
            title="Beyond Earth: The Rise of Africa's Space Industry"
            imgSource={ExpressionImg3}
            destination=""
            comingSoon
          />
        </div>
      </section>
    </section>
  );
}

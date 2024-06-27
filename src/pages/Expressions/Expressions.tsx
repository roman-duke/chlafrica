import { useState } from "react";
// import ExpressionsIntro from "@components/Intro/ExpressionsIntro"
import MainExpressions from "@components/Expressions/MainExpressions";

export default function Expressions() {
  const expressions = ["events", "articles", "stories"];
  const [expression, setExpression] = useState(expressions[0]);

  return (
    <section className="bg-img bg-cover bg-right bg-no-repeat">
      <div className="no-scrollbar max-w-[950px] m-auto">
        <section className="pt-3 lg:pt-5 px-10">
          <>
            <h2 className="font-semibold text-brand-accent text-2xl lg:text-3xl text-center">CHL Expressions</h2>
            <p className="mt-2 text-base lg:text-lg font-semibold text-justify text-gray-400 leading-relaxed">
              We have curated insightful articles, exciting upcoming events, and impactful project 
              stories to stay informed, equipped and engaged with CHL Africa's Afrochamp community. 
              Welcome to CHL Africa's expressions - your one-stop haven for business growth and sustainability 
              in Africa!
            </p>
          </>
        </section>

        {/* <section className="m-auto relative max-w-[1140px] flex flex-col items-center">
          <ExpressionsIntro />
        </section> */}

        {/* <section className="mt-10 lg:mt-36"> */}
        <section className="mt-10 lg:mt-15">
          <MainExpressions 
            tabs={expressions}
            selectedTab={expression}
            setSelectedTab={setExpression}
          />
        </section>
      </div>
    </section>
  )
}





import ExpressionImg1 from "@assets/images/expression_card_1.jpeg";
import ExpressionImg3 from "@assets/images/chlafrica_space_center.webp";
import ExpressionImg5 from "@assets/images/chlafrica-economy.jpg";
import SectionDemarcation from "@components/SectionDemarcation/SectionDemarcation";
import PresTinubuImg from "@assets/images/pres-tinubu.jpg";
import ExpressionCard from "@components/ExpressionCard/ExpressionCard";

export default function Article6() {
  return (
    <section className="grid grid-cols-3 lg:gap-x-20">
      <div className="relative col-span-3 bg-brand-accent py-10 h-[170px] md:h-[150px] lg:h-[275px]">
        <h1 className="text-center text-brand-earth_yellow text-xl lg:text-3xl uppercase font-semibold lg:w-[75%] lg:mx-auto">
          The 2026 Tax Reforms: Impact on Individuals, Small Businesses and
          Larger Companies
        </h1>
        <SectionDemarcation type="semi-mini" />
        <div className="bg-white absolute -bottom-1 left-0 w-20 h-4"></div>
      </div>

      <div className="p-6 pt-0 text-sm lg:text-base text-justify leading-relaxed lg:leading-loose font-inter col-span-3 md:col-span-2">
        <div className="my-4 h-[350px] w-full">
          <img src={PresTinubuImg} className="w-full h-full object-cover" />
        </div>

        <p className="font-semibold text-lg lg:text-xl mt-6 mb-3">
          Introduction
        </p>

        <p>
          Nigeria’s fiscal landscape has been comprehensively reshaped following
          the introduction of the Tax Reform Acts that will take effect on 1
          January 2026. There are four legislations which make up the Nigeria
          Tax Reform Acts (“The Acts”), and they include the Nigeria Tax Act,
          the Nigeria Tax Administration Act, the Nigeria Revenue Service Act,
          and the Joint Revenue Board Act. For individuals, small
          business/companies, and larger companies, the impact of these tax laws
          differs, but with the aim of achieving a fair tax system.
        </p>

        <p>
          Also, the Presidential Fiscal Policy and Tax Reforms Committee has
          published fifty (50) reliefs and exemptions that will take effect from
          1 January 2026. This essay discusses how the Acts, and the reliefs
          provided by the Committee affect individuals, small businesses, and
          large companies.
        </p>

        <p className="font-semibold text-lg lg:text-xl mt-8 mb-3">
          Effect of the Tax Reforms
        </p>

        <p>
          Contrary to the prevailing public perception, the Acts do not
          introduce any new class of tax for individuals or businesses. Rather,
          they provide reliefs and exemptions for low-income earners and small
          businesses. The effects of the reforms are examined below.
        </p>

        <p className="font-semibold text-base lg:text-lg mt-6 mb-2">
          Individuals
        </p>

        <p>
          Individuals earning the national minimum wage or less shall be
          exempted from Personal Income Tax or PAYE (pay as you earn). There is
          reduced PAYE for those earning annual gross income up to N20 million.
          Also, pensions and gratuities are exempted from tax. Value Added Tax
          (VAT) has been removed for purchases of food items, rent, education,
          health, and medical services. For high-net-worth individuals, however,
          personal income tax is at a rate of 25%.
        </p>

        <p className="font-semibold text-base lg:text-lg mt-6 mb-2">
          Small Businesses/Companies
        </p>

        <p>
          Businesses whose annual turnover is not more than N100 million and
          whose total fixed assets are not more than N250 million qualify as
          small businesses. Under the new tax laws, small businesses and
          startups are exempted from Company Income Tax, the Development Levy,
          and the Withholding Tax. In addition, they are exempted from charging
          VAT and are entitled to a refund of VAT paid on services, capital
          expenditure (such as major equipment purchases), and other
          business-related expenses. Furthermore, agricultural businesses enjoy
          a tax holiday for the first five years.
        </p>

        <p className="font-semibold text-base lg:text-lg mt-6 mb-2">
          Large Companies
        </p>

        <p>
          Large companies are not entitled to some of the reliefs provided for
          small businesses. A Development Levy of 4% is imposed on large
          companies (resident and non-resident). This levy consolidates the
          previously existing Tertiary Education Tax, the Information Technology
          Levy, the National Agency for Science and Engineering Infrastructure
          Levy, and the Police Trust Fund Levy. These companies will benefit
          from reduced duplications and stronger tax institutions.
        </p>

        <p className="font-semibold text-lg lg:text-xl mt-8 mb-3">Conclusion</p>

        <p>
          The Tax Reform Acts represent a comprehensive overhaul of Nigeria’s
          fiscal architecture. These reforms aim to build a fair, transparent,
          and equitable tax system that drives economic growth. For individuals,
          small businesses/companies, and large companies, the Acts provide
          clear provisions, commendable reliefs, and meaningful incentives for
          growth.
        </p>

        <p className="italic my-3 text-black text-end font-semibold">
          Written by Mkorna Paul Ahon
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

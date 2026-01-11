import ExpressionImg1 from "@assets/images/expression_card_1.jpeg"
import ExpressionImg2 from "@assets/images/expression_card_2.jpeg"
// import ExpressionImg3 from "@assets/images/chlafrica_space_center.webp"
import ExpressionCard from "@components/ExpressionCard/ExpressionCard";
import ExpressionImg4 from "@assets/images/pres-tinubu.jpg";

export default function Expressions() {
  return (
    <div className="flex flex-col max-w-[1140px] items-center m-auto">
      <h2 className="text-2xl lg:text-4xl font-bold text-brand-accent">Expressions</h2>
      <h3 className="text-md lg:text-lg font-medium text-brand-earth_yellow uppercase mt-2">Stories & Projects</h3>

      <div className="flex flex-col lg:flex-row">
        <ExpressionCard
          category="Articles"
          title="The 2026 Tax Reforms: Impact on Individuals, Small Businesses and Larger Companies"
          content="Nigeria's fiscal landscape has been comprehensively reshaped following the
                  introduction of the Tax Reform Acts that will take effect on 1st January, 2026.
                  There are four Legislations…"
          imgSource={ExpressionImg4}
        />

        <ExpressionCard
          category="Articles"
          title="The African Union Agenda 2063: The future of Africa"
          content="The Adoption of the African Union Agenda 2063 has
                  been a tremendous step towards transforming Africa
                  into a prosperous, integrated and peaceful continent..."
          imgSource={ExpressionImg1}
        />

        <ExpressionCard
          category="Events"
          title="Afrochampions: Overcoming Obstacles and Creating Impact"
          content="Are you a young African eager to connect with peers and
                  explore exciting new opportunities? Or maybe you're a
                  professional seeking to support…"
          imgSource={ExpressionImg2}
        />

        {/* <ExpressionCard
          category="Articles"
          title="Beyond Earth: The Rise of Africa's Space Industry"
          content="The nascent space industry in Africa is gradually becoming
                  a significant tool for promoting Africa’s growth and development.
                  Its economic and environmental sectors…"
          imgSource={ExpressionImg3}
        /> */}
      </div>
    </div>
  )
}

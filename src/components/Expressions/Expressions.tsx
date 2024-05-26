import ExpressionCard from "@components/ExpressionCard/ExpressionCard";

export default function Expressions() {
  return (
    <div className="flex flex-col max-w-[1140px] items-center m-auto">
      <h2 className="text-2xl lg:text-4xl font-bold text-brand-accent">Expressions</h2>
      <h3 className="text-md lg:text-lg font-medium text-brand-earth_yellow uppercase mt-2">Stories & Projects</h3>

      <div className="flex flex-col lg:flex-row">
        <ExpressionCard 
          category="Articles"
          title="The African Union Agenda 2063: The future of Africa"
          content="The Adoption of the African Union Agenda 2063 has 
                  been a tremendous step towards transforming Africa 
                  into a prosperous, integrated and peaceful continent..."
          imgSource="/src/assets/images/expression_card_1.jpeg"
        />      

        <ExpressionCard 
          category="Events"
          title="Afrochampions: Overcoming Obstacles and Creating Impact"
          content="Are you a young African eager to connect with peers and 
                  explore exciting new opportunities? Or maybe you're a 
                  professional seeking to support…"
          imgSource="/src/assets/images/expression_card_2.jpeg"
        />      

        <ExpressionCard 
          category="Articles"
          title="Beyond Earth: The Rise of Africa's Space Industry"
          content="The nascent space industry in Africa is gradually becoming
                  a significant tool for promoting Africa’s growth and development. 
                  Its economic and environmental sectors…"
          imgSource="/src/assets/images/chlafrica_space_center.webp"
        />      
      </div>
    </div>
  )
}

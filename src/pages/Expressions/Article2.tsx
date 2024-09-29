import ExpressionImg1 from "@assets/images/expression_card_1.jpeg";
import ExpressionImg3 from "@assets/images/chlafrica_space_center.webp";
import ExpressionCard from "@components/ExpressionCard/ExpressionCard";
import EventsImg from "@assets/images/chlafrica-expression-events.jpg"

export default function Article2() {
  return (
    <section className="py-5 grid grid-cols-3 lg:gap-x-20">
      <div className="p-6 text-sm text-justify leading-relaxed lg:leading-loose font-inter col-span-3 md:col-span-2">
        <h1 className="text-brand-earth_yellow text-xl uppercase font-semibold">
          Afrochamps: Overcoming Obstacles and Creating Impact
        </h1>

        <div className="my-4">
          <img src={EventsImg} />
        </div>
        <p className="my-2">
          Are you a young African eager to connect with peers and explore
          exciting new opportunities? Or maybe you're a professional seeking to
          support the next generation of African leaders. Either way, you won't
          want to miss "AfroChampions: Overcoming Obstacles and Creating
          Impact"! This one-day virtual event, taking place on May 25th, 2023,
          is all about celebrating the incredible resilience and creativity of
          young Africans. Through panel sessions and group discussions, we will
          hear from inspiring young leaders who have overcome adversity and
          achieved great things. They will share their stories of innovation and
          progress, and help us all envision a brighter future for the
          continent.
        </p>

        <p className="">
          However, this event is not just about listening - it is also about
          connecting, sharing ideas, and building relationships. Through
          interactive discussions and networking opportunities, you will have
          the chance to meet like-minded individuals and learn from each other.
          Whether you are looking to start a new Afro-centric project, or simply
          make some new friends and sustain momentum, this event is for you.
        </p>

        <p className="my-2">
          So mark your calendars for{" "}
          <span className="font-bold">May 25th, 2023</span>, and join us in
          celebrating the power of the young African!
        </p>
      </div>

      <div className="col-span-3 md:col-span-1">
        <ExpressionCard
          category="Articles"
          title="The African Union Agenda 2063: The future of Africa"
          content="The Adoption of the African Union Agenda 2063 has
                  been a tremendous step towards transforming Africa
                  into a prosperous, integrated and peaceful continent..."
          imgSource={ExpressionImg1}
          destination="/articles/the_african_union-agenda"
        />

        <ExpressionCard
          category="Articles"
          title="Beyond Earth: The Rise of Africa's Space Industry"
          content="The nascent space industry in Africa is gradually becoming
                  a significant tool for promoting Africa’s growth and development.
                  Its economic and environmental sectors…"
          imgSource={ExpressionImg3}
        />
      </div>
    </section>
  );
}

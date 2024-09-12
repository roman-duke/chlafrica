import AyomideImg from "@assets/images/ayomide.jpg";
import AdekunleImg from "@assets/images/adekunle.jpg";
import MayeImg from "@assets/images/maye.jpg";
import OlamideImg from "@assets/images/olamide.jpg";
import TeamCard from "./TeamCard";

export default function Team() {
  return (
    <>
      <h2 className="text-3xl text-center font-semibold text-brand-accent md:text-4xl mt-5 md:mt-10">
        Our Amazing Team
      </h2>
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-6 items-center justify-center mt-5 px-10">
        <TeamCard
          imageUrl={AyomideImg}
          name="Ayomide Fasan"
          position="Founder, CHL Africa"
          alt="Image of Ayomide Fasan"
        />
        <TeamCard
          imageUrl={OlamideImg}
          name="Olamide Fasan"
          position="Operations Assistant"
          alt="Image of Olamide Fasan"
        />
        <TeamCard
          imageUrl={MayeImg}
          name="Oritsemaye Solo-Edema"
          position="Communications Assistant"
          alt="Image of Oritsemaye"
        />
        <TeamCard
          imageUrl={AdekunleImg}
          name="Adekunle Olanipekun"
          position="Legal Advisor"
          alt="Image of Adekunle Olanipekun"
        />
      </div>
    </>
  );
}

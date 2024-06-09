import AyomideImg from "@assets/images/ayomide.jpg"
import AdekunleImg from "@assets/images/adekunle.jpg"
import MayeImg from "@assets/images/maye.jpg"
import OlamideImg from "@assets/images/olamide.jpg"
import TeamCard from "./TeamCard";

export default function Team() {
  return (
    <>
    <h2 className="mt-3 text-3xl text-center font-semibold text-brand-accent">Our Amazing Team</h2>
    <div className="flex flex-col gap-5 items-center justify-center mt-5 px-10">
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
  )
}

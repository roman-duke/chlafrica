import StatsCard from "./StatsCard"

export default function Stats() {
  return (
    <div className="flex flex-col lg:flex-row lg:w-[600px] bg-white rounded-lg border-t shadow-md lg:shadow-md lg:border-t-0">
      <StatsCard 
        total="2"
        title="Years of Impact"
        content="Our team has consistently delivered exceptional 
                performance, shaping Africa's development."
      />

      <StatsCard
        total="10+"
        title="Clients Served"
        content="We have collaborated with over than 10 SMEs and initiatives
                 providing tailored services to meet their unique business needs."
        border
      />

      <StatsCard
        total="5+"
        title="Pan-African reach"
        content="Our projects and events have made a significant impact across
                five African countries, including Kenya, South Africa, Nigeria,
                Ghana and Uganda."
      />
    </div>
  )
}

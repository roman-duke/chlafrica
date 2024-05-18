import StatsCard from "./StatsCard"

export default function Stats() {
  return (
    <div className="flex w-[600px] bg-white rounded-lg shadow-md">
      <StatsCard 
        total="2"
        title="Years of service"
        content="Our team has operated successfully about 2 
                years with a strong record of outstanding performance."
      />

      <StatsCard
        total="10+"
        title="Businesses"
        content="We have collaborated with more than 10 startups organizations
                 in Africa, offering them training and services."
        border
      />

      <StatsCard
        total="5+"
        title="African countries"
        content="We have engaged with nonprofit organizations across more 
                than 5 distinct African countries."
      />
    </div>
  )
}

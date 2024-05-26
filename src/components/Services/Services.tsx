import ServiceCard from "@components/ServiceCard/ServiceCard";

export default function Services() {
  return (
    <div className="py-5 lg:py-10 backdrop-blur-sm">
      <div className="flex flex-col items-center">
        <h2 className="text-2xl lg:text-4xl font-bold text-brand-accent">
          Promoting Development
          <span className="hidden lg:inline-block">&nbsp;through</span> 
          <span className="lg:hidden">&nbsp;via</span>
        </h2>
        <span className="text-brand-earth_yellow text-2xl lg:text-4xl font-bold">Community Support</span>
      </div>

      <div className="flex lg:flex-row flex-col items-center mt-12 gap-4 lg:*:border-r">
        <ServiceCard 
          title="Business Incubation"
          content="We specialise in co-designing and launching 
                  social businesses and initiatives, providing 
                  comprehensive support from concept to execution"
          imgSource="/src/assets/images/chlafrica_incubation.png"
        />

        <ServiceCard
          title="Business Sustainability"
          content="We offer end-to-end business management services, 
                  covering corporate communications, human resources, 
                  finance, legal advisory, and more. Our network includes 
                  excellent consultants and partner organisations to ensure 
                  seamless operations."
          imgSource="/src/assets/images/chlafrica_sustainability.png"
        />

        <ServiceCard
          title="Consulting Partnership"
          content="Our expertise extends to brand consulting and impact consulting, 
                  including Corporate Social Responsibility (CSR), Corporate Social 
                  Advocacy (CSA), and Corporate Social Justice (CSJ) initiatives"
          imgSource="/src/assets/images/chlafrica_shaking_hands.png"
        />

        <ServiceCard
          title="Community Support"
          content="Our Afrochamps community serves as a think-tank and problem-solving
                  hive for knowledge sharing, capacity building, resource distribution 
                  to promote people-driven development in Africa."
          imgSource="/src/assets/images/chlafrica_support.png"
        />
      </div>
    </div>
  )
}

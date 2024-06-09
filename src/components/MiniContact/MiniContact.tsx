import SuperFancyButton from "@components/Button/SuperFancyButton";

export default function HomeContact() {
  return (
    <div className="mt-8 lg:mt-14 text-center">
      <h2 className="font-bold text-2xl lg:text-4xl text-brand-earth_yellow mb-6">
        Got an idea or already running<br/>
        one? Let's Collaborate
      </h2>

      <a href="tel:+2349087109454">
        <SuperFancyButton
          title="Schedule a Call"
          bgColor="bg-brand-accent_two"
        />
      </a>
    </div>
  )
}

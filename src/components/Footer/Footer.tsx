import SectionDemarcation from "@components/SectionDemarcation/SectionDemarcation";
import FooterContent from "./FooterContent";

export default function Footer() {
  return (
    <footer className="relative z-20">
      <div className="relative h-[96px] lg:h-[260px] overflow-hidden">
        <SectionDemarcation type="mini" />
      </div>

      <div className="w-full bg-gradient-to-b from-[#d6ceefEA] to-custom-light-gray">
        <div className="max-w-[960px] m-auto">
          <FooterContent />
        </div>
      </div>
    </footer>
  )
}

import SectionDemarcationIcon from "@assets/icons/layered-waves.svg?react"
import MiniSectionDemarcationIcon from "@assets/icons/mini-layered-waves.svg?react"

interface SectionDemarcationProps {
  type?: "mini",
}

export default function SectionDemarcation({ type } : SectionDemarcationProps) {
  return (
    // <div className="absolute w-full -top-1/6">
    <div className="absolute w-full -bottom-1">
      {/* <div className="w-full h-48 section-demarcation bg-brand-accent_two" />
      <div className="absolute top-10 w-full h-48 section-demarcation bg-brand-accent_tint_1" />
      <div className="absolute top-16 w-full h-48 section-demarcation bg-brand-accent_tint_2" />
      <div className="absolute top-20 w-full h-48 section-demarcation bg-brand-accent_tint_3" /> */}
      {type == "mini" ? <MiniSectionDemarcationIcon /> : <SectionDemarcationIcon />}
    </div>
  )
}

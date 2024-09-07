interface PartnerCardProps {
  imgUrl: string,
}

export default function PartnerCard({ imgUrl } : PartnerCardProps) {
  return (
  <div className="lg:w-44 lg:h-24 size-[60px]">
      <img className="hover:scale-110 grayscale hover:grayscale-0 lg:w-44 lg:h-24 w-16 h-16  transition object-contain" src={imgUrl} />
    </div>
  )
}

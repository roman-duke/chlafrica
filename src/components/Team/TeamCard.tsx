interface TeamCardProps {
  imageUrl: string,
  position: string,
  name: string,
  alt?: string
}

export default function TeamCard({ imageUrl, position, name, alt } : TeamCardProps  ) {
  return (
    <div className="relative w-full h-96 rounded-xl shadow-md">
      <img className="w-full h-full object-cover rounded-xl" src={imageUrl} alt={alt}/>
      <div className="absolute bottom-0 w-full rounded-bl-xl bg-custom-light-gray p-1 px-5">
        <h3 className="text-brand-accent font-semibold">{name}</h3>
        <span className="text-sm text-gray-400">{position}</span>
      </div>
    </div>
  )
}

interface ServiceCardProps {
  title: string,
  content: string,
  imgSource?: string,
}

export default function ServiceCard({ title, content, imgSource } : ServiceCardProps) {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      {imgSource ? (
        <img src={imgSource} className="w-32 h-32 object-contain"/>
      ) : null}

      <h3 className="text-brand-accent text-xl font-semibold text-center">
        {title}
      </h3>

      <p className="font-normal text-gray-400 text-base text-center px-10">
        {content}
      </p>
    </div>
  )
}

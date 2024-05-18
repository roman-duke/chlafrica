interface StatsCardProps {
  total: string,
  title: string,
  content: string,
  border?: boolean,
}

export default function StatsCard({ total, title, content, border } : StatsCardProps) {
  return (
    <div className={`px-4 pt-10 pb-16 ${border ? 'border-x' : ''}`}>
      {/* <h2 className="text-brand-accent text-2xl bg-gradient-to-b from-brand-accent to-slate-300">{total}</h2> */}
      <h2 className="text-brand-accent text-3xl font-semibold">{total}</h2>
      <h3 className="text-brand text-lg">{title}</h3>
      <p className="text-gray-400 text-base font-light">{content}</p>
    </div>
  )
}

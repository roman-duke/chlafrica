interface SuperFancyButtonProps {
  title: string,
  bgColor: string,
}

export default function SuperFancyButton({ title, bgColor } : SuperFancyButtonProps) {
  return (
    <button
      className={`${bgColor} w-348 px-5 py-3 text-slate-600 rounded-3xl text-base font-semibold hover:bg-brand-accent hover:text-white transition-colors`}
      type="button"
    >
      {title}
    </button>
  )
}

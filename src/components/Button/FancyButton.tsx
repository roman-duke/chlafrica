interface ButtonProps {
  title: string,
  bgColor: string,
}

export default function FancyButton({ title, bgColor } : ButtonProps) {
  return (
    <button
      className={`${bgColor} w-32 p-2 rounded-3xl text-base font-semibold hover:bg-brand-accent hover:text-white transition-colors`}
      type="button"
    >
      {title}
    </button>
  )
}

interface ButtonProps {
  title: string,
  bgColor: string,
}

export default function SecondaryButton({ title, bgColor } : ButtonProps) {
  return (
    <button
      className={`${bgColor} w-40 p-3 rounded-3xl text-sm font-medium`}
      type="button"
    >
      {title}
    </button>
  )
}

interface ButtonProps {
  title: string,
  bgColor: string,
}

export default function Button({ title, bgColor } : ButtonProps) {
  return (
    <button
      className={`${bgColor} w-64 p-4 rounded-3xl text-base font-semibold`}
      type="button"
    >
      {title}
    </button>
  )
}

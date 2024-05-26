interface ButtonProps {
  title: string,
  bgColor: string,
}

export default function Button({ title, bgColor } : ButtonProps) {
  return (
    <button
      className={`${bgColor} w-42 p-3 rounded-3xl lg:w-64 lg:p-4 text-sm lg:text-base font-semibold`}
      type="button"
    >
      {title}
    </button>
  )
}

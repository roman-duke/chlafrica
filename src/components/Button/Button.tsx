interface ButtonProps {
  title: string,
  bgColor: string,
}

export default function Button({ title, bgColor } : ButtonProps) {
  return (
    <a
      className={`${bgColor} relative z-10 w-42 p-3 rounded-3xl lg:w-64 lg:p-4 text-sm lg:text-base font-semibold`}
      type="button"
      href="https://www.linkedin.com/groups/9373035/"
      target="_blank"
    >
      {title}
    </a>
  )
}

import FancyButton from "@components/Button/FancyButton";
import { Link } from "react-router-dom";

interface ExpressionCardProps {
  category: string,
  title: string,
  content: string,
  imgSource: string,
  destination?: string,
}

export default function ExpressionCard(
  {
  category,
  title,
  content,
  imgSource,
  destination,
} : ExpressionCardProps) {
  return (
    <div className="relative group hover:-top-1 transition duration-500 p-4 cursor-pointer">
      <div className="h-full rounded-xl border shadow-md">
        <div className="overflow-hidden rounded-t-xl">
          <img className="group-hover:scale-110 duration-300 w-full h-48 object-cover transition" src={imgSource} />
        </div>

        <div className="p-6">
          <h2 className="text-brand-earth_yellow uppercase text-sm font-semibold">{category}</h2>
          <h3 className="text-brand-accent font-semibold my-3 text-lg leading-tight">{title}</h3>
          <p className="text-sm font-light opacity-65">{content}</p>

          <div className="mt-3">
            <Link to={destination ?? '/expressions'}>
              <FancyButton
                title="Read more"
                bgColor="bg-brand-accent_two"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

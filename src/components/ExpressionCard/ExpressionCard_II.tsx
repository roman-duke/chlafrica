import { Link } from "react-router-dom";

interface ExpressionCard2Props {
  title: string;
  category: string;
  imgSource: string;
  destination: string;
  comingSoon?: boolean;
}

export default function ExpressionCard2({
  title,
  category,
  imgSource,
  destination,
  comingSoon,
}: ExpressionCard2Props) {
  return (
    <Link
      to={destination}
      className="relative group hover:-top-1 transition duration-500 p-4 z-10"
    >
      <div className="h-80 lg:h-96 rounded-xl border shadow-md">
        <div className="relative size-full overflow-hidden rounded-lg cursor-pointer">
          <img
            className="brightness-50 group-hover:scale-105 group-hover:brightness-75 duration-300 w-full h-full object-cover transition"
            src={imgSource}
          />

          {comingSoon && (
            <div className="absolute top-0 p-6">
              <span className="p-2 bg-brand-earth_yellow text-custom-white uppercase text-sm font-semibold">
                Article coming soon...
              </span>
            </div>
          )}

          <div className="absolute bottom-0 p-6">
            <span className="p-2 bg-brand-earth_yellow text-custom-white uppercase text-sm font-semibold">
              {category}
            </span>

            <h3 className="text-custom-white uppercase font-semibold my-3 text-lg leading-tight">
              {title}
            </h3>
          </div>
        </div>
      </div>
    </Link>
  );
}

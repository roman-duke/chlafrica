import AfricaWork from "@assets/images/africa_work.jpg";
import AfricaWork2 from "@assets/images/africa_work_II.jpg";
import AfricaWork3 from "@assets/images/africa_work_III.jpg";

export default function Collage() {
  return (
    <div className="relative ml-10">
      <div className="absolute -translate-x-1/2 -left-1/2 lg:-left-1/3 lg:-translate-x-full lg:-top-1/2 bg-dotted-pattern w-24 h-14 bg-contain " />
      {/* <div className="w-10 h-10"></div> */}

      <div className="relative flex justify-center w-32">
        <div className="absolute w-28 h-24 left-0 translate-x-3/4">
          <img className="w-full h-full rounded-full object-cover" src={AfricaWork} alt="African lady working" />
        </div>

        <div className="absolute right-0 w-28 h-24 -translate-x-3/4">
          <img className="w-full h-full rounded-full object-cover" src={AfricaWork3} alt="African team working" />
        </div>

        <div className="w-64 h-36 relative">
          <img className="w-full h-full rounded-full object-cover" src={AfricaWork2} alt="African lady working" />
        </div>
      </div>
    </div>
  )
}

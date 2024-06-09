import SafariImg from "@assets/images/chlafrica_safari_I.jpg"
import ImaniImg from "@assets/images/chlafrica_imani_I.jpg"
import BaobabImg from "@assets/images/chlafrica_baobab_I.jpg"

export default function Stages() {
  return (
    <>
      <h2 className="text-2xl lg:text-3xl md:mb-4 text-brand-accent font-semibold text-center">
        We provide tailored solutions at every stage of your business journey
      </h2>

      <div className="flex flex-col md:flex-row md:gap-5 lg:gap-10 max-w-[1350px] m-auto">
        <div className="mt-3 basis-1/3 border rounded-lg">
          <img src={SafariImg} className="w-full h-52 object-cover" alt="Chlafrica Safari stage image."/>
          <div className="flex md:hidden justify-center">
            <hr className="absolute w-[95%] h-px bg-black"></hr>
          </div>
          <div className="pt-2 px-4 pb-4">
            <h3 className="text-xl pt-2 text-brand">Safari Stage</h3>
            <p className="text-slate-500 font-light">
              Are you at the <span className="font-medium text-black">incubation or early stage?</span> Just like 
              embarking on a safari, we help you navigate the hurdles and lay the
              groundwork for your business idea from conception to execution. Our
              incubation services provide the essential support and mentorship needed
              to explore new territories and build a solid foundation for your venture.
            </p>
          </div>
        </div>

        <div className="mt-3 basis-1/3 border rounded-lg">
          {/* <div className="w-full h-44 bg-custom-gray"/> */}
          <img src={ImaniImg} className="w-full h-52 object-cover"/>
          <div className="flex md:hidden justify-center">
            <hr className="absolute w-[95%] h-px bg-black"></hr>
          </div>
          <div className="pt-2 px-4 pb-4">
            <h3 className="text-xl pt-2 text-brand">Imani Stage</h3>
            <p className="font-light text-slate-500">
              Is your vision starting to take shape and gain momentum? <span className="font-medium text-black">Our early growth stage services,</span> 
              &nbsp;inspired by the Swahili word "Imani" meaning "faith" or "belief," provide strategic guidance, 
              operational support, and resources to drive significant growth and help you establish firm footing
              in your business terrain.
            </p>
          </div>
        </div>

        <div className="mt-3 basis-1/3 border rounded-lg">
          <img src={BaobabImg} className="w-full h-52 object-cover"/>
          <div className="flex md:hidden justify-center">
            <hr className="absolute w-[95%] h-px bg-black"></hr>
          </div>
          <div className="pt-2 px-4 pb-4">
            <h3 className="text-xl pt-2 text-brand">Baobab Stage</h3>
            <p className="font-light text-slate-500">
              Named after the iconic African baobab tree, our services for <span className="font-medium text-black">established businesses </span> 
              ensure you are firmly rooted in your growth trajectory. We help you solidify a sustainable 
              foundation for long-term success.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

import SafariImg from "@assets/images/chlafrica_safari.jpg"
import ImaniImg from "@assets/images/chlafrica_imani.jpg"
import BaobabImg from "@assets/images/chlafrica_baobab.jpg"

export default function Stages() {
  return (
    <>
      <h2 className="text-2xl text-brand-accent font-semibold text-center">
        We provide tailored solutions at every stage of your business journey
      </h2>

      <div className="flex flex-col">
        <div className="mt-3 border rounded-lg">
          <img src={SafariImg} className="w-full h-52 object-cover object-bottom" alt="Chlafrica Safari stage image."/>
          <div className="flex justify-center">
            <hr className="absolute w-[95%] h-px bg-black"></hr>
          </div>
          <div className="pt-2 px-4 pb-4">
            <h3 className="text-xl pt-2 text-brand">Safari Stage</h3>
            <p className="font-light">
              Are you at the <span className="font-medium">incubation or early stage?</span> Just like 
              embarking on a safari, we help you navigate the hurdles and lay the
              groundwork for your business idea from conception to execution. Our
              incubation services provide the essential support and mentorship needed
              to explore new territories and build a solid foundation for your venture.
            </p>
          </div>
        </div>

        <div className="mt-3 border rounded-lg">
          {/* <div className="w-full h-44 bg-custom-gray"/> */}
          <img src={ImaniImg} className="w-full h-52 object-cover object-center"/>
          <div className="flex justify-center">
            <hr className="absolute w-[95%] h-px bg-black"></hr>
          </div>
          <div className="pt-2 px-4 pb-4">
            <h3 className="text-xl pt-2 text-brand">Imani Stage</h3>
            <p className="font-light">
              Is your vision starting to take shape and gain momentum? <span className="font-medium">Our early growth stage services,</span> 
              inspired by the Swahili word "Imani" meaning "faith" or "belief," provide strategic guidance, 
              operational support, and resources to drive significant growth and help you establish firm footing
              in your business terrain.
            </p>
          </div>
        </div>

        <div className="mt-3 border rounded-lg">
          <img src={BaobabImg} className="w-full h-52 object-cover object-center"/>
          <div className="flex justify-center">
            <hr className="absolute w-[95%] h-px bg-black"></hr>
          </div>
          <div className="pt-2 px-4 pb-4">
            <h3 className="text-xl pt-2 text-brand">Baobab Stage</h3>
            <p className="font-light">
              Named after the iconic African baobab tree, our services for <span className="font-medium">established businesses</span> 
              ensure you are firmly rooted in your growth trajectory. We help you solidify a sustainable 
              foundation for long-term success.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

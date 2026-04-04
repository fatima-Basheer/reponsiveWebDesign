import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

function ServiceSummary() {
  useGSAP(() => {
    gsap.to("#title-service-l", {
      xPercent: 20,
      scrollTrigger: {
        target: "#title-service-l",
        scrub: true,
      },
    });
    gsap.to("#title-service-2", {
      xPercent: -20,
      scrollTrigger: {
        target: "#title-service-2",
        scrub: true,
      },
    });
    gsap.to("#title-service-3", {
      xPercent: 20,
      scrollTrigger: {
        target: "#title-service-3",
        scrub: true,
      },
    });
    gsap.to("#title-service-4", {
      xPercent: -35,
      scrollTrigger: {
        target: "#title-service-4",
        scrub: true,
      },
    });
  });

  return (
    <section className="mt-20 overflow-hidden font-light leading sung text-center mb-28 md:mb-42 text-[clamp(24px,5vw,80px)]">
      <div id="title-service-l" className="flex items-center gap-2">
        <p className="italic">Backend</p>
        <div className="w-10 h-0.5 md:h-1 md:w-20 bg-[#FFD700]"></div>
        <p>Ecommerce</p>
      </div>
      <div id="title-service-2" className="flex items-center gap-2">
        <p>Development</p>
        <div className="w-10 h-0.5 md:h-1 md:w-20 bg-[#FFD700]"></div>
        <p>Deployment</p>
      </div>

      <div
        id="title-service-3"
        className="flex items-center justify-center gap-2"
      >
        <p>APIs</p>
        <div className="w-10 h-0.5 md:h-1 md:w-20 bg-[#FFD700]"></div>
        <p className="italic">Frontends</p>
        <div className="w-10 h-0.5 md:h-1 md:w-20 bg-[#FFD700]"></div>
        <p>Scalabitity</p>
      </div>
      <div
        id="title-service-4"
        className="flex items-center justify-center gap-2"
      >
        <p>Databases</p>
        <div className="w-10 h-0.5 md:h-1 md:w-20 bg-[#FFD700]"></div>
        <p>Saas</p>
      </div>
    </section>
  );
}

export default ServiceSummary;

import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import AnimatedTextLines from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function About() {
  const text =
    "Hi! I am Maryum Basheer.I love to make food.Because,cooking allows you to experiment with different ingredients";
  const aboutText =
    "I love to make food.Because,cooking allows you to experiment with different ingredients and flavors to express your personal style. It is a wonderful way to bond with family and friends by sharing delicious, home-cooked mealsI love to make food.Because,cooking allows you to experiment with different ingredients and flavors to express your personal style. It is a wonderful way to bond with family and friends by sharing delicious, home-cooked meals.";
  const imgRef = useRef(null);
  useGSAP(() => {
    gsap.to("#about", {
      scale: 3,
      scrollTrigger: {
        trigger: "#about",
        start: "bottom 80%",
        end: "bottom 20%",
      },
      ease: "power1.inOut",
    });

    gsap.set(imgRef.current, {
      clipPath: "polygon(0 100%,100% 100%,100% 100%,0% 100%)",
    });

    gsap.to(imgRef.current, {
      clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
      duration: 2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: imgRef.current,
      },
    });
  });
  return (
    <section id="about" className="min-h-screen bg-black rounded-b-4xl">
      <AnimatedHeaderSection
        subTitle={"Craft in detail,strength in Structure"}
        title={"About"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />
      <div className="flex flex-col items center justify-between gap-16 px-4 md:px-10 pb-16 texl-xl font-light tracking-wide lg:flex-row-reverse md:text-3xl text-white/60">
        <img
          ref={imgRef}
          src="./public/logo.webp"
          alt="img"
          className="rounded-xl w-full lg:w-2/5"
        />
        <AnimatedTextLines
          text={aboutText}
          className={"w-full text-lg"}
          lineGap="pb-5 last:pb-0"
        />
      </div>
    </section>
  );
}

export default About;

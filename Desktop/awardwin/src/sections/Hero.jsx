import { Canvas } from "@react-three/fiber";
// import { Planet } from "../components/Planet";
import { Environment, Float, Lightformer } from "@react-three/drei";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection.jsx";
import { useMediaQuery } from "react-responsive";
import { AmbientLight } from "three";

function Hero() {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  const text =
    "Hi! I am Maryum Basheer. I love to make food.Because,cooking allows you to experiment with different ingredients and flavors to express your personal style. It is a wonderful way to bond with family and friends by sharing delicious, home-cooked meals.";
  return (
    <section
      id="home"
      className="flex flex-col justify-center md:justify-end min-h-screen"
    >
      <AnimatedHeaderSection
        subTitle={"Welcome to my portfolio"}
        title={"Software Engineering"}
        text={text}
        textColor={"text-block"}
      />
      {/* <figure
        className="absolute inset-0 -z-50"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas
          shadows
          camera={{ position: [0, 0, -10], fov: 17.5, near: 1, far: 20 }}
        >
          {" "}
          <ambientLight intensity={0.5} />
          <Float speed={0.5}>
            <Planet scale={isMobile ? 0.7 : 1} />
          </Float>
        </Canvas>
      </figure> */}
    </section>
  );
}

export default Hero;

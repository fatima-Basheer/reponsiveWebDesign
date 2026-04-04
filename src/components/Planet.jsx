import { useGSAP } from "@gsap/react";
import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import gsap from "gsap";

export function Planet(props) {
  const shapeContainer = useRef(null);
  const spheresContainer = useRef(null);
  const ringContainer = useRef(null);
  const { nodes, materials } = useGLTF("/models/Planet.glb");

  useGSAP(() => {
    const tl = gsap.timeline();
  });
}

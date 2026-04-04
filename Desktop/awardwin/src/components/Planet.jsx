// import { useGSAP } from "@gsap/react";
// import { useGLTF } from "@react-three/drei";
// import { useRef } from "react";
// import gsap from "gsap";

// export function Planet(props) {
//   const shapeContainer = useRef(null);
//   const spheresContainer = useRef(null);
//   const ringContainer = useRef(null);
//   const { nodes, materials } = useGLTF("/models/Planet.glb");

//   useGSAP(() => {
//     const tl = gsap.timeline();
//   });
//   return (
//     <group ref={shapeContainer} {...props} dispose={null}>
//       <group ref={spheresContainer}>
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Sphere.geometry}
//           material={materials["Material.002"]}
//           rotation={[0, 0, 0.741]}
//         />

//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Sphere2.geometry}
//           material={materials["Material.001"]}
//           rotation={[0, 0, 0.741]}
//           position={[0.647, 1.03, -0.724]}
//           scale={0.223}
//         />
//       </group>
//           <mesh
//           ref={ringContainer}
//           castShadow
//           receiveShadow
//           geometry={nodes.Ring.geometry}
//           material={materials["Material.001"]}
//           rotation={[-0.124, 0.123, -0.741]}
//           scale={2}
//         />
//     </group>
//   );
// };

// // useGLTF.preload("/models/Planet.glb")

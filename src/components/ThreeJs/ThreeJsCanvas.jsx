import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Instances, Instance, Environment } from "@react-three/drei";
import { EffectComposer, N8AO, TiltShift2 } from "@react-three/postprocessing";
import Experience from "./Experience.jsx";

export default function ThreeJsCanvas() {
  return (
    <section className="fixed top-0 left-0 w-full h-full -z-10">
      <Canvas
        shadows
        dpr={[1, 2]}
        gl={{ antialias: false }}
        camera={{ fov: 50, position: [0, 0, 10] }}
      >
        <Experience />
      </Canvas>
    </section>
  );
}

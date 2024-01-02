import { useRef } from "react";
import { MathUtils } from "three";
import { useFrame } from "@react-three/fiber";
import { Instances } from "@react-three/drei";
import Bubble from "./Bubble.jsx";

/**
 * Create a 150 length array
 * containing objects each filled with five params
 */
const particles = Array.from({ length: 150 }, () => ({
  factor: MathUtils.randInt(20, 100),
  speed: MathUtils.randFloat(0.01, 0.75),
  xFactor: MathUtils.randFloatSpread(40),
  yFactor: MathUtils.randFloatSpread(10),
  zFactor: MathUtils.randFloatSpread(10),
}));

export default function Bubbles() {
  const ref = useRef();
  useFrame(
    (state, delta) =>
      void (ref.current.rotation.y = MathUtils.damp(
        ref.current.rotation.y,
        (-state.mouse.x * Math.PI) / 6,
        2.75,
        delta
      ))
  );
  return (
    <Instances
      limit={particles.length}
      ref={ref}
      castShadow
      receiveShadow
      position={[0, 2.5, 0]}
    >
      <sphereGeometry args={[0.45, 64, 64]} />
      <meshStandardMaterial roughness={1} color="#c3c4f7" />
      {particles.map((data, i) => (
        <Bubble key={i} {...data} />
      ))}
    </Instances>
  );
}

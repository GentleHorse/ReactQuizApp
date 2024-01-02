import { Environment } from "@react-three/drei";
import { EffectComposer, N8AO, TiltShift2 } from "@react-three/postprocessing";
import Bubbles from "./Bubbles/Bubbles";

export default function Experience() {
  return (
    <>
      <color attach="background" args={["#d7b4f0"]} />

      <fog attach="fog" args={["purple", 20, -5]} />

      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} castShadow />

      <Bubbles />

      <EffectComposer disableNormalPass>
        <N8AO aoRadius={6} intensity={2} color="blue" />
        <TiltShift2 blur={0.1} />
      </EffectComposer>

      <Environment preset="city" />
    </>
  );
}

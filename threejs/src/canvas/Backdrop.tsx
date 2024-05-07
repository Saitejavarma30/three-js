import React, { useRef } from "react";
import { easing } from "maath";
import { useFrame } from "@react-three/fiber";
import { AccumulativeShadows, RandomizedLight } from "@react-three/drei";

const Backdrop: React.FC = () => {
  const shadow = useRef();
  return (
    <AccumulativeShadows
      position={[0, 0, -0.14]}
      ref={shadow}
      temporal
      frames={60}
      rotation={[Math.PI / 2, 0, 0]}
    >
      <RandomizedLight
        amount={9}
        radius={9}
        intensity={0.95}
        ambient={0.25}
        position={[5, 5, -10]}
      />
      <RandomizedLight
        amount={4}
        radius={9}
        intensity={0.85}
        ambient={0.65}
        position={[5, -5, -10]}
      />
    </AccumulativeShadows>
  );
};

export default Backdrop;

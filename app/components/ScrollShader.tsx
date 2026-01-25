"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function AmbientGlow() {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!mesh.current) return;
    (mesh.current.material as THREE.ShaderMaterial).uniforms.uTime.value = clock.elapsedTime;
  });

  return (
    <mesh ref={mesh}>
      <planeGeometry args={[10, 10]} />
      <shaderMaterial
        transparent
        uniforms={{ uTime: { value: 0 } }}
        fragmentShader={`
    uniform float uTime;

    void main() {
  gl_FragColor = vec4(1.0, 0.0, 0.0, 0.4);
}
  `}
      />
    </mesh>
  );
}

export default function ScrollShader() {
  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      <Canvas gl={{ alpha: true }} style={{ background: "transparent" }}>
        <AmbientGlow />
      </Canvas>
    </div>
  );
}

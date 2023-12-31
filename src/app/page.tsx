"use client";
import { Canvas } from '@react-three/fiber'
import Experience from '../components/Experience'
export default function Home() {
  return (
    <Canvas
          camera={{
              fov: 45,
              near: 0.1,
              far: 2000,
              position: [-3, 1.5, 4],
          }}
    >
      <Experience />
      </Canvas>
  );
}

import React, { useMemo, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

function DustParticles() {
  const particlesRef = useRef()
  const { viewport } = useThree()
  const count = 1000

  // Generate positions
  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      positions[i * 3 + 0] = (Math.random() - 0.5) * viewport.width * 2
      positions[i * 3 + 1] = (Math.random() - 0.5) * viewport.height * 2
      positions[i * 3 + 2] = Math.random() * 0.5
    }
    return positions
  }, [viewport])

  // Animate on mouse move
  useFrame(({ mouse }) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.x = mouse.y * 0.5
      particlesRef.current.rotation.y = mouse.x * 0.5
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={2}
        sizeAttenuation
        color="#ffffff"
        transparent
        opacity={0.1}
      />
    </points>
  )
}

export default function LiquidBackground() {
  return (
    <Canvas
      className="fixed top-0 left-0 w-full h-full z-0"
      camera={{ position: [0, 0, 5], fov: 75 }}
    >
      <ambientLight intensity={0.5} />
      <DustParticles />
    </Canvas>
  )
}

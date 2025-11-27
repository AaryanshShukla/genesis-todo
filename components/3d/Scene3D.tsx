'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function FloatingShape({ position, color }: { position: [number, number, number], color: string }) {
    const mesh = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (mesh.current) {
            mesh.current.rotation.x += 0.01;
            mesh.current.rotation.y += 0.01;
            // React to mouse
            const { x, y } = state.mouse;
            mesh.current.position.x += (x * 5 - mesh.current.position.x) * 0.02;
            mesh.current.position.y += (y * 5 - mesh.current.position.y) * 0.02;
        }
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <mesh ref={mesh} position={position}>
                <icosahedronGeometry args={[1, 0]} />
                <meshStandardMaterial color={color} wireframe />
            </mesh>
        </Float>
    );
}

export default function Scene3D() {
    return (
        <div className="w-full h-full absolute inset-0">
            <Canvas camera={{ position: [0, 0, 10] }} gl={{ alpha: true }}>
                <ambientLight intensity={0.3} />
                <pointLight position={[10, 10, 10]} intensity={1.5} color="#a855f7" />
                <pointLight position={[-10, -10, 5]} intensity={1} color="#ec4899" />
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

                <FloatingShape position={[-4, 2, 0]} color="#ec4899" />
                <FloatingShape position={[4, -2, -2]} color="#8b5cf6" />
                <FloatingShape position={[0, 0, -5]} color="#3b82f6" />

                <fog attach="fog" args={['#000', 5, 25]} />
            </Canvas>
        </div>
    );
}

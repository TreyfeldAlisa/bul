import React, { useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, PresentationControls, AdaptiveDpr } from "@react-three/drei";
import { Suspense } from "react";
import Home from "@/components/Home/Home";

import styles from "./Scene.module.css";

const Model = () => {
    const group = useRef();
    const { nodes, materials } = useGLTF("/glb/WIP3D.gltf");
    return (
        <group ref={group} dispose={null} className={styles.group}>
            <primitive
                object={nodes.Scene}
                scale={3.2}
                rotation={[0, 0.3, 0]}
                position={[0.1, 0, 0]}
                materials={materials.Material}
            />
        </group>
    );
};

useGLTF.preload("/glb/WIP3D.gltf");

export default function CanvasScene() {
    useEffect(() => {
        let ctx = document.querySelector("canvas");

        console.log(ctx);

        ctx.setAttribute("style", window.screen.width * 0.5);

        ctx.setAttribute("width", window.screen.width * 0.5);
        ctx.setAttribute("height", window.screen.height * 0.5);
    });

    return (
        <div className={styles.container}>
            <Canvas
                className={styles.logo}
                camera={{ position: [2, 0, 12.25], fov: 16 }}
                shadows
                gl={{ preserveDrawingBuffer: true }}
                eventPrefix="client"
                frameLoop="demand"
            >
                <directionalLight intensity={0.8} position={[9, 5, 10]} />
                <Suspense fallback={null}>
                    <PresentationControls
                        cursor={true}
                        snap={true}
                        zoom={-0.5}
                        config={{ mass: 2, tension: 1500 }}
                        polar={[0, 0]}
                        azimuth={[-Math.PI / 1.4, Math.PI / 2]}
                    >
                        <Model />
                    </PresentationControls>
                </Suspense>
                <AdaptiveDpr pixelated />
            </Canvas>
            <Home />
        </div>
    );
}

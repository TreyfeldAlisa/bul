import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { Canvas, extend, createRoot, events } from "@react-three/fiber";
import {
    useGLTF,
    PresentationControls,
    AdaptiveDpr,
    MeshDistortMaterial,
    boxBufferGeometry,
} from "@react-three/drei";
import { Suspense } from "react";

import styles from "./Scene.module.css";

const Model = () => {
    const group = useRef();
    const { nodes, materials } = useGLTF("/glb/WIP3D.gltf");

    return (
        <group ref={group} dispose={null} className={styles.group}>
            <primitive object={nodes.Scene} materials={materials.Material} />
        </group>
    );
};

useGLTF.preload("/glb/WIP3D.gltf");

export default function CanvasScene() {

    return (
        <div className={styles.container}>
            <Canvas
                className={styles.logo}
                camera={{ position: [2, 0, 12.25], fov: 6 }}
                shadows
                gl={{ preserveDrawingBuffer: true }}
                eventPrefix="client"
                frameloop="demand"
                id="canvas"
                dpr={[1,5]}
            >
                <directionalLight intensity={0.7} position={[9, 5, 10]} />
                <Suspense fallback={null}>
                    <PresentationControls
                        cursor={true}
                        snap={true}
                        zoom={1}
                        config={{ mass: 2, tension: 1500 }}
                        polar={[0, 0]}
                        azimuth={[-Math.PI / 1.4, Math.PI / 2]}
                        rotation={[0, 0.3, 0]}
                        position={[0.1, 0, 0]}
                    >
                        
                        <Model />
                    </PresentationControls>
                </Suspense>
                <AdaptiveDpr pixelated />
            </Canvas>
        </div>
    );
}

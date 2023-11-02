import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import {
    useGLTF,
    PresentationControls,
    AdaptiveDpr,
} from "@react-three/drei";
import { Suspense } from "react";

import styles from "./Scene.module.css";

const Model = () => {
    const group = useRef();

    const model = useGLTF("/glb/WIP3D.gltf");

    const { nodes, materials, scene } = model;

    materials.Material.color.setHex(0x3da1f2);

    nodes.Scene.scale.set(
        1 * model.scene.scale.x,
        1 * model.scene.scale.y,
        1 * model.scene.scale.z,
    );

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
                camera={{ fov: 5, position: [2, 0, 12.25]}}
                shadows
                gl={{ preserveDrawingBuffer: true }}
                eventPrefix="client"
                frameloop="demand"
                id="canvas"
                dpr={[1, 5]}
            >
                <directionalLight intensity={0.5} position={[9, 5, 10]} />
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

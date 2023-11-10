import React, { useEffect } from "react";
import cn from "classnames";

import styles from "./Background.module.css";

export default function Background(shape) {
    // useEffect(() => {
    // }, []);

    return (
        <div className={cn(styles.container)}>
            {shape.shape ? <div className={styles.shape} /> : null}
            <div className={styles.videoContainer}>
                <video
                    autoPlay
                    controls
                    preload
                    playsInline
                    loop
                    muted
                    type="video/mp4"
                    className={cn(styles.video, "embed-responsive-item")}
                    src={require("../../public/video/ASCII.mp4")}
                />
            </div>
        </div>
    );
}

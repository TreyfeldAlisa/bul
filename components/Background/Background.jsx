import React from "react";
import cn from "classnames";

import styles from "./Background.module.css";

export default function Background(shape) {

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
                    className={cn(styles.video, "embed-responsive-item")}
                    src={require("../../public/video/ASCII.mp4")}
                />
            </div>
        </div>
    );
}

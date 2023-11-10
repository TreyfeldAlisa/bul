import React, { useEffect, useRef } from "react";
import cn from "classnames";

import styles from "./Background.module.css";

export default function Background(shape) {

    const ref = useRef(null);

    useEffect(() => {
        ref &&
            ref.current
                .play()
                .then(() => {})
                .catch((err) => {
                    // Video couldn't play, low power play button showing.
                });
    }, []);

    return (
        <div className={cn(styles.container)}>
            {shape.shape ? <div className={styles.shape} /> : null}
            <div className={styles.videoContainer}>
                <video
                    ref={ref}
                    controls
                    autoPlay
                    playsInline
                    loop
                    muted
                    className={cn(styles.video, "embed-responsive-item")}
                    src={require("../../public/video/ASCII.mp4")}
                />{" "}
            </div>
        </div>
    );
}

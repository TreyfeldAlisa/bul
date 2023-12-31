import React from "react";
import cn from "classnames";

import styles from "./Background.module.css";
import poster from "../../public/video/thumbnail.png";

export default function Background(shape) {
    return (
        <div className={cn(styles.container)}>
            {shape.shape ? <div className={styles.shape} /> : null}
            <div className={styles.videoContainer}>
                <video
                    autoPlay
                    muted
                    loop
                    disablePictureInPicture
                    webkit-playsinline="true"
                    playsInline
                    pip="false"
                    className={cn(styles.video, "embed-responsive-item")}
                    src={require("../../public/video/ASCII.mp4")}
                    poster={poster}
                />
            </div>
        </div>
    );
}

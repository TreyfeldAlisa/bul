import React, { useEffect } from "react";
import cn from "classnames";

import styles from "./Background.module.css";

export default function Background(shape) {
    useEffect(() => {
        const _VIDEO = document.querySelector("#video-element");
        const _CANVAS = document.querySelector("#canvas-element");
        const _CANVAS_CTX = _CANVAS.getContext("2d");

        // Video metadata is loaded
        _VIDEO.addEventListener("loadedmetadata", function () {
            // Set canvas dimensions same as video dimensions
            _CANVAS.width = _VIDEO.videoWidth;
            _CANVAS.height = _VIDEO.videoHeight;
        });

        // Video playback position is changed
        document.querySelector("#video-element").addEventListener("timeupdate", function () {
            // You are now ready to grab the thumbnail from the <canvas> element
        });

        _CANVAS_CTX.drawImage(_VIDEO, 0, 0, _VIDEO.videoWidth, _VIDEO.videoHeight);

        // Setting parameters of the download link
        document.querySelector("#download-link").setAttribute("href", _CANVAS.toDataURL());
        document.querySelector("#download-link").setAttribute("download", "thumbnail.png");
    }, []);

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
                    id="video-element"
                />
                <canvas id="canvas-element"></canvas>
                <div id="thumbnail-container">
                    Seek to <select id="set-video-seconds"></select> seconds{" "}
                    <a id="download-link" href="#">
                        Download Thumbnail
                    </a>
                </div>
            </div>
        </div>
    );
}

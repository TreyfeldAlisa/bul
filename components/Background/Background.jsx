import cn from "classnames";

import styles from "./Background.module.css";

export default function Background() {
  return (
    <div className={cn(styles.container)}>
      <div className={styles.videoContainer}>
        <video
          controls
          autoPlay
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

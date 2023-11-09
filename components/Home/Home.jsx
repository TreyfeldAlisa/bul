import React from "react";
import Link from "next/link";
import cn from "classnames";
import localFonts from "next/font/local";
import styles from "./Home.module.css";

import gif from "../../public/image/ezgif.com-gif-maker.gif";

const inter = localFonts({ src: "../../public/fonts/inter/Inter-Bold.ttf" });
const jet = localFonts({ src: "../../public/fonts/jet-brains-mono/JetBrainsMono-Regular.ttf" });

export default function Home() {
    return (
        <div className={cn(styles.mainPage)} id="home">
            <div className={cn(styles.textContainer)}>
                <p className={cn(inter.className, styles.textTitle)}>
                    blue <br /> underlined link
                </p>
            </div>
            <div className={cn(styles.container)}>
                <div className={cn(styles.videoContainer)}>
                    <div className="overflow-hidden">
                        <img className={styles.video} src={gif} alt="gif" width={72} height={72} />
                    </div>
                    <div className={cn(jet.className, styles.text)}>
                        There is some data behind links on the web
                    </div>
                </div>
                <div className={cn(styles.videoContainer)}>
                    <div className="overflow-hidden">
                        <img className={styles.video} src={gif} alt="gif" width={72} height={72} />
                    </div>

                    <div className={cn(jet.className, styles.text)}>
                        We build processes
                        <br />
                        for this data
                    </div>
                </div>

                <Link className={cn(styles.button, inter.className)} href="#contact">
                    Contact us
                </Link>
            </div>
        </div>
    );
}

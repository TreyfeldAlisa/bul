import React from "react";
import Router from "next/router";
import cn from "classnames";
import localFonts from "next/font/local";
import styles from "./About.module.css";

import gif1 from "../../public/image/image16542.png";
import gif2 from "../../public/image/image16541.png";
import gif3 from "../../public/image/image1654.png";
import gif4 from "../../public/image/1321316930.png";

const inter = localFonts({ src: "../../public/fonts/inter/Inter-Bold.ttf" });
const jet = localFonts({ src: "../../public/fonts/jet-brains-mono/JetBrainsMono-Regular.ttf" });

export default function About() {
    return (
        <div className={styles.container} id="about">
            <div className={styles.header}>
                <div className={styles.nav}>
                    <div className={styles.pointContainer}>
                        <div className={styles.point}></div>
                        <div className={cn(jet.className, styles.about)}>./ABOUT/</div>
                    </div>
                    <div className={cn(inter.className, styles.bul)}>blue underlined link</div>
                </div>
                <div className={cn(inter.className, styles.h1)} id="trigger">
                    helps <br /> companies
                </div>
                <div className={cn(inter.className, styles.textContainer)}>
                    <div className={cn(inter.className, styles.text)}>
                        to benefit from data on each phase of its lifecycle. We apply our expertise
                        in business automation with advanced software engineering and data analysis
                        techniques to create added value to our clients.
                    </div>
                </div>
            </div>

            <div className={styles.gif}>
                <div
                    data-tooltip="data_generation_&_collection"
                    className={cn(
                        styles.frame,
                        styles.framegif1,
                        styles.tooltip,
                        jet.className,
                        "overflow-hidden",
                    )}
                >
                    <img className={styles.gif1} alt="data" width={128} height={124} src={gif1} />
                </div>
                <div
                    data-tooltip="processing"
                    className={cn(
                        styles.frame,
                        styles.framegif2,
                        styles.tooltip,
                        jet.className,
                        "overflow-hidden, -ms-6",
                    )}
                >
                    <img className={styles.gif2} alt="data" width={128} height={124} src={gif2} />
                </div>
                <div
                    data-tooltip="storing_&_delivery"
                    className={cn(
                        styles.frame,
                        styles.framegif3,
                        styles.tooltip,
                        jet.className,
                        "overflow-hidden, -ms-6",
                    )}
                >
                    <img
                        className={styles.gif3}
                        alt="storing"
                        width={128}
                        height={124}
                        src={gif3}
                    />
                </div>
                <div
                    data-tooltip="also"
                    className={cn(
                        styles.frame,
                        styles.framegif4,
                        styles.tooltip,
                        jet.className,
                        "overflow-hidden, -ms-6",
                    )}
                >
                    <img className={styles.gif4} alt="also" width={130} height={130} src={gif4} />
                </div>
            </div>

            <div className={cn(inter.className, styles.h2)}>
                Primarily our work lies in domains of digital marketing, trading, betting and
                esports.
            </div>

            <div className={styles.buttonContainer}>
                <button className={cn(styles.button, inter.className)} onClick={() => Router.push("/allworks")}>
                    View all our works
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="20"
                        viewBox="0 0 21 20"
                        fill="none"
                    >
                        <g clipPath="url(#clip0_151_2397)">
                            <path
                                d="M3.62695 10.0005L17.377 10.0005"
                                stroke="white"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M11.7505 4.37402L17.3755 9.99902L11.7505 15.624"
                                stroke="white"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_151_2397">
                                <rect
                                    width="20"
                                    height="20"
                                    fill="white"
                                    transform="translate(0.5)"
                                />
                            </clipPath>
                        </defs>
                    </svg>
                </button>
            </div>
        </div>
    );
}

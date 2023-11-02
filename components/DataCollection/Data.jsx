import React, { useEffect } from "react";
import cn from "classnames";
import localFonts from "next/font/local";
import styles from "./DataCollection.module.css";

const inter = localFonts({ src: "../../public/fonts/inter/Inter-Bold.ttf" });
const jet = localFonts({
    src: "../../public/fonts/jet-brains-mono/JetBrainsMono-Regular.ttf",
});

import substract from "../../public/image/Subtract.png";
import Link from "next/link";

export default function Data() {
    return (
        <div className={styles.container} id="services">
            <div className={styles.imgContainer}>
                <img src={substract} alt="subtract" className={styles.img} />
                <div className={styles.gradient}> </div>{" "}
                <video
                    autoPlay={true}
                    muted
                    loop
                    disablePictureInPicture
                    webkit-playsinline=""
                    playsInline
                    pip="false"
                    className={styles.video}
                    src={require("../../public/video/1.mp4")}
                />
            </div>
            <div className={cn(inter.className, styles.textContainer)}>
                <div className={cn(jet.className, styles.h2)}>./SERVICES/</div>
                <div className={cn(inter.className, styles.h1)}>
                    data_gener <br /> ation_&_coll <br />
                    ection
                </div>
            </div>
            <div className={styles.contentContainer}>
                <div className={styles.blockContainer}>
                    <div className={styles.overflow}>
                        <div className={styles.gorizontalBlock}>
                            <div className={styles.blockTexContainer}>
                                <div className={cn(jet.className, styles.one)}>
                                    <div className={styles.point}></div>
                                    <div className={cn(styles.figure, jet.className)}>01</div>
                                </div>
                                <div className={cn(inter.className, styles.header)}>
                                    Computer vision
                                </div>
                                <Link className={styles.roundButton} href="/categories/1">
                                    <div className={styles.vector}>
                                        <svg
                                            width="25"
                                            height="24"
                                            viewBox="0 0 25 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M4.25244 12L20.7524 12"
                                                stroke="black"
                                                strokeWidth="2.4"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M14.0005 5.24902L20.7505 11.999L14.0005 18.749"
                                                stroke="black"
                                                strokeWidth="2.4"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                </Link>
                            </div>
                            <div className={styles.frameContainer}>
                                <div className={cn(jet.className, styles.frame)}>
                                    <div className={styles.frameText}>Live OCR</div>
                                </div>
                                <div className={cn(jet.className, styles.frame)}>
                                    <div className={styles.frameText}>Video motion analysis</div>
                                </div>
                                <div className={cn(jet.className, styles.frame)}>
                                    <div className={styles.frameText}>
                                        3D modeling based on video streams
                                    </div>
                                </div>
                                <div className={cn(jet.className, styles.frame)}>
                                    <div className={styles.frameText}>
                                        Sports & esports event tracking systems
                                    </div>
                                </div>
                                {/* для анимации */}
                                <div className={cn(jet.className, styles.frame)}>
                                    <div className={styles.frameText}>Live OCR</div>
                                </div>
                                <div className={cn(jet.className, styles.frame)}>
                                    <div className={styles.frameText}>Video motion analysis</div>
                                </div>
                                <div className={cn(jet.className, styles.frame)}>
                                    <div className={styles.frameText}>
                                        3D modeling based on video streams
                                    </div>
                                </div>
                                <div className={cn(jet.className, styles.frame)}>
                                    <div className={styles.frameText}>
                                        Sports & esports event tracking systems
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.verticalBlockContainer}>
                        <div className={styles.verticalOverflow}>
                            <div className={styles.verticalBlock}>
                                <div className={styles.blockTexContainer}>
                                    <div className={cn(jet.className, styles.one)}>
                                        <div className={styles.point}></div>
                                        <div>02</div>
                                    </div>
                                    <div className={cn(inter.className, styles.header)}>
                                        Data <br /> scraping
                                    </div>
                                    <div className={styles.roundButton}>
                                        <div className={styles.vector}>
                                            <svg
                                                width="25"
                                                height="24"
                                                viewBox="0 0 25 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M4.25244 12L20.7524 12"
                                                    stroke="black"
                                                    strokeWidth="2.4"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M14.0005 5.24902L20.7505 11.999L14.0005 18.749"
                                                    stroke="black"
                                                    strokeWidth="2.4"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.frameVerticalContainer}>
                                    <div className={cn(jet.className, styles.frame)}>
                                        <div className={styles.frameText}>
                                            Price and stock monitoring
                                        </div>
                                    </div>
                                    <div className={cn(jet.className, styles.frame)}>
                                        <div className={styles.frameText}>
                                            Market research and analytics
                                        </div>
                                    </div>
                                    {/* для анимации */}
                                    <div className={cn(jet.className, styles.frame)}>
                                        <div className={styles.frameText}>
                                            Price and stock monitoring
                                        </div>
                                    </div>
                                    <div className={cn(jet.className, styles.frame)}>
                                        <div className={styles.frameText}>
                                            Market research and analytics
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.verticalOverflow}>
                            <div className={styles.verticalBlock}>
                                <div className={styles.blockTexContainer}>
                                    <div className={cn(jet.className, styles.one)}>
                                        <div className={styles.point}></div>
                                        <div>03</div>
                                    </div>
                                    <div className={cn(inter.className, styles.header)}>
                                        Protection <br />
                                        bypassing
                                    </div>
                                    <div className={styles.roundButton}>
                                        <div className={styles.vector}>
                                            <svg
                                                width="25"
                                                height="24"
                                                viewBox="0 0 25 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M4.25244 12L20.7524 12"
                                                    stroke="black"
                                                    strokeWidth="2.4"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M14.0005 5.24902L20.7505 11.999L14.0005 18.749"
                                                    stroke="black"
                                                    strokeWidth="2.4"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.frameVerticalContainer}>
                                    <div className={cn(jet.className, styles.frame)}>
                                        <div className={styles.frameText}>
                                            Price and stock monitoring
                                        </div>
                                    </div>
                                    <div className={cn(jet.className, styles.frame)}>
                                        <div className={styles.frameText}>
                                            Market research and analytics
                                        </div>
                                    </div>
                                    {/* для анимации */}
                                    <div className={cn(jet.className, styles.frame)}>
                                        <div className={styles.frameText}>
                                            Price and stock monitoring
                                        </div>
                                    </div>
                                    <div className={cn(jet.className, styles.frame)}>
                                        <div className={styles.frameText}>
                                            Market research and analytics
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

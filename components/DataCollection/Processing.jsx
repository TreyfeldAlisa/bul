import React, { useEffect } from "react";
import cn from "classnames";
import localFonts from "next/font/local";
import styles from "./Processing.module.css";

const inter = localFonts({ src: "../../public/fonts/inter/Inter-Bold.ttf" });
const jet = localFonts({
    src: "../../public/fonts/jet-brains-mono/JetBrainsMono-Regular.ttf",
});

import substract from "../../public/image/Subtract.png";

export default function Processing() {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <img src={substract} alt="subtract" className={styles.img} />
                <div className={styles.gradient}> </div>{" "}
                <video
                    controls={false}
                    autoPlay
                    playsInline
                    loop
                    muted
                    className={cn(styles.video, "embed-responsive-item")}
                    src={require("../../public/video/2.mp4")}
                />
            </div>
            <div className={cn(inter.className, styles.textContainer)}>
                <div className={cn(jet.className, styles.h2)}>./SERVICES/</div>
                <div className={cn(inter.className, styles.h1)}>processing</div>
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
                                    Data insights and <br /> forecasting
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
                            <div className={styles.frameContainer}>
                                <div className={cn(jet.className, styles.frame)}>
                                    <div className={styles.frameText}>
                                        Discover insights by analyzing multiple data sources
                                    </div>
                                </div>
                                <div className={cn(jet.className, styles.frame)}>
                                    <div className={styles.frameText}>
                                        Improve forecasting by applying ML solutions and statistical
                                        modeling
                                    </div>
                                </div>
                                {/* для анимации */}
                                <div className={cn(jet.className, styles.frame)}>
                                    <div className={styles.frameText}>
                                        Discover insights by analyzing multiple data sources
                                    </div>
                                </div>
                                <div className={cn(jet.className, styles.frame)}>
                                    <div className={styles.frameText}>
                                        Improve forecasting by applying ML solutions and statistical
                                        modeling
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
                                        Natural
                                        <br /> language
                                        <br /> processing
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
                                            Customer care services
                                        </div>
                                    </div>
                                    <div className={cn(jet.className, styles.frame)}>
                                        <div className={styles.frameText}>HR procedures</div>
                                    </div>
                                    {/* для анимации */}
                                    <div className={cn(jet.className, styles.frame)}>
                                        <div className={styles.frameText}>
                                            Customer care services
                                        </div>
                                    </div>
                                    <div className={cn(jet.className, styles.frame)}>
                                        <div className={styles.frameText}>HR procedures</div>
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
                                        Ecommerce <br />
                                        automation
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
                                            In-game items trading platforms and bots
                                        </div>
                                    </div>
                                    {/* для анимации */}
                                    <div className={cn(jet.className, styles.frame)}>
                                        <div className={styles.frameText}>
                                            In-game items trading platforms and bots
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.overflow}>
                        <div className={styles.gorizontalBlock}>
                            <div className={styles.blockTexContainer}>
                                <div className={cn(jet.className, styles.one)}>
                                    <div className={styles.point}></div>
                                    <div>04</div>
                                </div>
                                <div className={cn(inter.className, styles.header)}>
                                    Data driven <br /> marketing
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
                            <div className={styles.frameContainer}>
                                <div className={cn(jet.className, styles.frame)}>
                                    <div className={styles.frameText}>Live OCR</div>
                                </div>
                                <div className={cn(jet.className, styles.frame)}>
                                    <div className={styles.frameText}>
                                        Marketing and domain analysis
                                    </div>
                                </div>
                                <div className={cn(jet.className, styles.frame)}>
                                    <div className={styles.frameText}>
                                        Development of data collection services
                                    </div>
                                </div>
                                <div className={cn(jet.className, styles.frame)}>
                                    <div className={styles.frameText}>
                                        Integration of digital marketing services
                                    </div>
                                </div>
                                {/* для анимации */}
                                <div className={cn(jet.className, styles.frame)}>
                                    <div className={styles.frameText}>Live OCR</div>
                                </div>
                                <div className={cn(jet.className, styles.frame)}>
                                    <div className={styles.frameText}>
                                        Marketing and domain analysis
                                    </div>
                                </div>
                                <div className={cn(jet.className, styles.frame)}>
                                    <div className={styles.frameText}>
                                        Development of data collection services
                                    </div>
                                </div>
                                <div className={cn(jet.className, styles.frame)}>
                                    <div className={styles.frameText}>
                                        Integration of digital marketing services
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

import React, { useEffect } from "react";
import cn from "classnames";
import localFonts from "next/font/local";
import styles from "./Also.module.css";

import substract from "../../public/image/Subtract.png";

const inter = localFonts({ src: "../../public/fonts/inter/Inter-Bold.ttf" });
const jet = localFonts({
    src: "../../public/fonts/jet-brains-mono/JetBrainsMono-Regular.ttf",
});

export default function Also() {
    return (
        <div className={styles.container}>
            <div className={cn(styles.imgContainer, styles.myImgContainer)}>
                <img src={substract} alt="subtract" className={styles.img} />
                <div className={styles.gradient}> </div>{" "}
                <video
                    controls={false}
                    autoPlay
                    playsInline
                    loop
                    muted
                    className={cn(styles.video, styles.also, "embed-responsive-item")}
                    src={require("../../public/video/4.mp4")}
                />
            </div>
            <div className={cn(inter.className, styles.textContainer)}>
                <div className={cn(jet.className, styles.h2)}>./SERVICES/</div>
                <div className={cn(inter.className, styles.h1)}>also</div>
            </div>
            <div className={styles.contentContainer}>
                <div className={styles.blockContainer}>
                    <div className={styles.overflow}>
                        <div className={styles.gorizontalBlock}>
                            <div className={styles.blockTexContainer}>
                                <div className={cn(jet.className, styles.one)}>
                                    <div className={styles.point}></div>
                                    <div>01</div>
                                </div>
                                <div className={cn(inter.className, styles.header)}>
                                    Project evaluation
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
                                    <div className={styles.frameText}>Trading metrics</div>
                                </div>
                                <div className={cn(jet.className, styles.frame)}>
                                    <div className={styles.frameText}>
                                        Marketing and user analysis
                                    </div>
                                </div>
                                <div className={cn(jet.className, styles.frame)}>
                                    <div className={styles.frameText}>
                                        Infrastructure monitoring and IoT
                                    </div>
                                </div>
                                {/* для анимации */}
                                <div className={cn(jet.className, styles.frame)}>
                                    <div className={styles.frameText}>Trading metrics</div>
                                </div>
                                <div className={cn(jet.className, styles.frame)}>
                                    <div className={styles.frameText}>
                                        Marketing and user analysis
                                    </div>
                                </div>
                                <div className={cn(jet.className, styles.frame)}>
                                    <div className={styles.frameText}>
                                        Infrastructure monitoring and IoT
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.verticalBlockContainer}>
                        <div className={styles.verticalOverflow}>
                            {" "}
                            <div className={styles.verticalBlock}>
                                <div className={styles.blockTexContainer}>
                                    <div className={cn(jet.className, styles.one)}>
                                        <div className={styles.point}></div>
                                        <div>02</div>
                                    </div>
                                    <div className={cn(inter.className, styles.header)}>
                                        Devops <br /> consulting
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
                                            DevOps checks whether the software contains
                                            vulnerabilities through static and dynamic tests, fuzz
                                            testing, and dependency scanning
                                        </div>
                                    </div>
                                    {/* для анимации */}
                                    <div className={cn(jet.className, styles.frame)}>
                                        <div className={styles.frameText}>
                                            DevOps checks whether the software contains
                                            vulnerabilities through static and dynamic tests, fuzz
                                            testing, and dependency scanning
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.verticalOverflow}>
                            {" "}
                            <div className={styles.verticalBlock}>
                                <div className={styles.blockTexContainer}>
                                    <div className={cn(jet.className, styles.one)}>
                                        <div className={styles.point}></div>
                                        <div>03</div>
                                    </div>
                                    <div className={cn(inter.className, styles.header)}>
                                        CTO/IT as a <br /> service
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
                                            Building the strategy and product roadmap will help you
                                            achieve the company’s objectives based on the market
                                            situation and resources at hand
                                        </div>
                                    </div>
                                    {/* для анимации */}
                                    <div className={cn(jet.className, styles.frame)}>
                                        <div className={styles.frameText}>
                                            Building the strategy and product roadmap will help you
                                            achieve the company’s objectives based on the market
                                            situation and resources at hand
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.overflow} style={{ top: "78vh" }}>
                        <div className={styles.gorizontalBlock}>
                            <div className={styles.blockTexContainer}>
                                <div className={cn(jet.className, styles.one)}>
                                    <div className={styles.point}></div>
                                    <div>04</div>
                                </div>
                                <div className={cn(inter.className, styles.header)}>
                                    Mathematical modeling
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
                                        DevOps checks whether the software contains vulnerabilities
                                        through static and dynamic tests, fuzz testing, and
                                        dependency scanning
                                    </div>
                                </div>
                                {/* для анимации */}
                                <div className={cn(jet.className, styles.frame)}>
                                    <div className={styles.frameText}>
                                        DevOps checks whether the software contains vulnerabilities
                                        through static and dynamic tests, fuzz testing, and
                                        dependency scanning
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

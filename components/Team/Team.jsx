import React, { useState } from "react";
import cn from "classnames";
import localFonts from "next/font/local";
import styles from "./Team.module.css";
import team1 from "../../public/image/team1.png";
import team2 from "../../public/image/team2.png";
import team3 from "../../public/image/team3.png";
import team4 from "../../public/image/team4.png";
import HowWeCan from "@/components/How/How";
import Feedback from "@/components/Feedback/Feedback";

import TeamCard from "./TeamCard";

const inter = localFonts({ src: "../../public/fonts/inter/Inter-Bold.ttf" });

export default function Team() {
    const [classList, setClassList] = useState(styles.hidden);
    const [showButton, setShowButton] = useState(true);

    function hide() {
        setClassList(styles.hidden);
        setShowButton(true);
    }

    function show() {
        setClassList(styles.show);
        setShowButton(false);
    }

    return (
        <div className={styles.container} id="team">
            <div className={cn(inter.className, styles.h1)}>Our team</div>
            <div>
                <div className={styles.imageBlockLeft}>
                    <TeamCard
                        name="Konstantin Konstantinopolsky"
                        role="Business manager"
                        image={team1}
                        width={327}
                    />
                    <TeamCard
                        name="Konstantin Konstantinopolsky"
                        role="CTO"
                        image={team2}
                        isCenter={true}
                        width={327}
                    />
                </div>
                <div className={styles.imageBlockRight}>
                    <TeamCard
                        name="Konstantin Konstantinopolsky"
                        role="Business manager"
                        image={team3}
                        width={224}
                    />
                    <TeamCard
                        name="Konstantin Konstantinopolsky"
                        role="Business manager"
                        image={team4}
                        width={224}
                    />
                </div>
            </div>

            <div className={classList}>
                <div className={styles.imageBlockLeft}>
                    <TeamCard
                        name="Konstantin Konstantinopolsky"
                        role="Business manager"
                        image={team1}
                        width={327}
                    />
                    <TeamCard
                        name="Konstantin Konstantinopolsky"
                        role="CTO"
                        image={team2}
                        isCenter={true}
                        width={327}
                    />
                </div>
                <div className={styles.imageBlockRight}>
                    <TeamCard
                        name="Konstantin Konstantinopolsky"
                        role="Business manager"
                        image={team3}
                        width={224}
                    />
                    <TeamCard
                        name="Konstantin Konstantinopolsky"
                        role="Business manager"
                        image={team4}
                        width={224}
                    />
                </div>
            </div>
            {showButton && (
                <button className={cn(inter.className, styles.button)} onClick={show}>
                    Show all members{" "}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <path
                            d="M4.50195 9.93848L11.1904 16.7764C11.4189 17.0225 11.6914 17.1367 11.999 17.1367C12.3066 17.1367 12.5879 17.0137 12.8164 16.7764L19.4961 9.93848C19.6895 9.74512 19.7949 9.49902 19.7949 9.20898C19.7949 8.62012 19.3379 8.16309 18.7578 8.16309C18.4766 8.16309 18.2041 8.26855 18.002 8.47949L12.0078 14.6406L5.99609 8.47949C5.80273 8.27734 5.53027 8.16309 5.24023 8.16309C4.66016 8.16309 4.20312 8.62012 4.20312 9.20898C4.20312 9.49023 4.30859 9.74512 4.50195 9.93848Z"
                            fill="white"
                        />
                    </svg>
                </button>
            )}
            {!showButton && (
                <button className={cn(inter.className, styles.button)} onClick={hide}>
                    Hide all members{" "}
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        width="32"
                        height="32"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M18.2929 15.2893C18.6834 14.8988 18.6834 14.2656 18.2929 13.8751L13.4007 8.98766C12.6195 8.20726 11.3537 8.20757 10.5729 8.98835L5.68257 13.8787C5.29205 14.2692 5.29205 14.9024 5.68257 15.2929C6.0731 15.6835 6.70626 15.6835 7.09679 15.2929L11.2824 11.1073C11.673 10.7168 12.3061 10.7168 12.6966 11.1073L16.8787 15.2893C17.2692 15.6798 17.9024 15.6798 18.2929 15.2893Z"
                            fill="white"
                        ></path>{" "}
                    </svg>
                </button>
            )}
            <div className={styles.howContainer}>
                <HowWeCan />
            </div>
            <Feedback />
        </div>
    );
}

import React from "react";
import cn from "classnames";
import localFonts from "next/font/local";
import styles from "./TeamCard.module.css";

const inter = localFonts({ src: "../../public/fonts/inter/Inter-Bold.ttf" });
const interReg = localFonts({ src: "../../public/fonts/inter/Inter-Regular.ttf" });
const jet = localFonts({
    src: "../../public/fonts/jet-brains-mono/JetBrainsMono-Regular.ttf",
});

export default function TeamCard({ name, role, image, isCenter, width }) {
    return (
        <div className={cn(styles.container, isCenter && styles.centerContainer)}>
            <img src={image} alt={name} className={styles.img} />
            <div className={cn(inter.className, styles.textContainer)}>
                <div className={cn(inter.className, styles.name)} style={{ width: width }}>
                    {name}
                </div>
                <div className={cn(interReg.className, styles.role)}>{role}</div>
            </div>
        </div>
    );
}

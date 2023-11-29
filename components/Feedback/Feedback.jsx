import React, { useEffect, useState } from "react";
import cn from "classnames";
import localFonts from "next/font/local";
import styles from "./Feedback.module.css";

const inter = localFonts({ src: "../../public/fonts/inter/Inter-Bold.ttf" });
const interRegular = localFonts({ src: "../../public/fonts/inter/Inter-Medium.ttf" });

export default function HowWeCan() {
    return (
        <section className={styles.wrapper} id="contact">
            <form className={styles.form}>
                <div className={styles.formInputs}>
                    <input
                        type="text"
                        className={cn(interRegular.className, styles.input)}
                        placeholder="Name"
                    />
                    <input
                        type="tel"
                        className={cn(interRegular.className, styles.input)}
                        placeholder="Phone"
                    />
                    <input
                        type="email"
                        className={cn(interRegular.className, styles.input)}
                        placeholder="E-mail"
                    />
                </div>
                <input
                    type="text"
                    className={cn(styles.input, styles.inputDescription, interRegular.className)}
                    placeholder="Description task"
                />
                <button type="submit" className={cn(inter.className, styles.button)}>
                    Send
                </button>
            </form>
        </section>
    );
}

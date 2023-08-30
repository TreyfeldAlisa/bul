import React, { useEffect, useState } from "react";
import Link from "next/link";
import localFonts from "next/font/local";
import cn from "classnames";
import logo from "../../public/image/logo-header.png";

import styles from "./Navbar.module.css";
import { links } from "../linksMock";

const inter = localFonts({ src: "../../public/fonts/inter/Inter-Bold.ttf" });

export default function Navbar() {
    const [classList, setClassList] = useState(styles.nav);

    // useEffect(() => {
    //     const load = async () => {
    //         if (typeof window !== undefined) {
    //             const ScrollMagic = (await import("scrollmagic")).default;
    //             const controller = new ScrollMagic.Controller();

    //             new ScrollMagic.Scene({
    //                 triggerElement: "#trigger",
    //                 triggerHook: 0.5,
    //                 reverse: true,
    //             })
    //                 .on("enter", function (e) {
    //                     console.log("enter");
    //                     setClassList(styles.fixed);
    //                 })
    //                 .addTo(controller);
    //         }
    //     };
    //     load();
    // });

    // useEffect(() => {
    //     const load = async () => {
    //         if (typeof window !== undefined) {
    //             const ScrollMagic = (await import("scrollmagic")).default;
    //             const controller = new ScrollMagic.Controller();

    //             new ScrollMagic.Scene({
    //                 triggerElement: "#trigger",
    //                 triggerHook: 2,
    //                 reverse: true,
    //             })
    //                 .on("leave", function (e) {
    //                     console.log("leave");
    //                     setClassList(styles.nav);
    //                 })
    //                 .addTo(controller);
    //         }
    //     };
    //     load();
    // });

        useEffect(() => {
            const load = async () => {
                if (typeof window !== undefined) {
                    const ScrollMagic = (await import("scrollmagic")).default;
                    const controller = new ScrollMagic.Controller();

                    new ScrollMagic.Scene({
                        duration: 30000, // the scene should last for a scroll distance of 100px
                        offset: 1200, // start this scene after scrolling for 50px
                    })
                        .on("enter", function (e) {
                            console.log("enter");
                            setClassList(styles.fixed);
                        })
                        .on("leave", function (e) {
                            console.log("leave");
                            setClassList(styles.nav);
                        })
                        .addTo(controller);
                }
            };
            load();
        });

    return (
        <div className={cn(classList)} id="navbar">
            <Link href="#home" className={styles.logo}>
                <img alt="logo" src={logo} className={styles.logo} width={115} height={52} />
            </Link>
            <div className={styles.linkContainer}>
                {links.map(({ href, name }) => (
                    <Link
                        href={href}
                        key={href}
                        className={styles.link}
                        onClick={() => setOpen(false)}
                    >
                        {name}
                    </Link>
                ))}
            </div>
            <button className={styles.button}>Contact us</button>
        </div>
    );
}

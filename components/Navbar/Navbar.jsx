import React, { useEffect, useState } from "react";
import Link from "next/link";
import localFonts from "next/font/local";
import cn from "classnames";
import logo from "../../public/image/bul-blue.png";

import styles from "./Navbar.module.css";
import { links } from "../linksMock";
import { abort } from "process";

const inter = localFonts({ src: "../../public/fonts/inter/Inter-Bold.ttf" });

export default function Navbar() {
    const [classList, setClassList] = useState(styles.nav);

    useEffect(() => {
        const load = async () => {
            if (typeof window !== undefined) {
                const ScrollMagic = (await import("scrollmagic")).default;
                const controller = new ScrollMagic.Controller();
                new ScrollMagic.Scene({
                    triggerElement: "#trigger",
                    duration: 30000, // the scene should last for a scroll distance of 100px
                    offset: 150, // start this scene after scrolling for 50px
                })
                    .on("enter", function (e) {
                        console.log("enter");
                        setClassList((prevClassList) => styles.fixed);
                        console.clear();
                    })
                    .on("leave", function (e) {
                        console.log("leave");
                        setClassList((prevClassList) => styles.nav);
                        console.clear();
                    })
                    .addTo(controller);
            }
        };
        load();
    }, []);

    useEffect(() => {
        const contact = document.getElementById("contactLink");
        const home = document.getElementById("homeLink");
        const team = document.getElementById("teamLink");
        const services = document.getElementById("servicesLink");
        const about = document.getElementById("aboutLink");

        contact.addEventListener("click", function (e) {
            e.preventDefault();

            if (document.getElementById("contact")) {
                document.getElementById("contact").scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        });

        home.addEventListener("click", function (e) {
            e.preventDefault();

            document.getElementById("home").scrollIntoView({
                behavior: "smooth",
            });
        });

        team.addEventListener("click", function (e) {
            e.preventDefault();

            document.getElementById("team").scrollIntoView({
                behavior: "smooth",
            });
        });

        services.addEventListener("click", function (e) {
            e.preventDefault();

            document.getElementById("services").scrollIntoView({
                behavior: "smooth",
            });
        });

        about.addEventListener("click", function (e) {
            e.preventDefault();

            document.getElementById("about").scrollIntoView({
                behavior: "smooth",
            });
        });
    }, []);

    return (
        <div className={cn(classList)} id="navbar">
            <Link href="#home" className={styles.logo} id="homeLink">
                <img alt="logo" src={logo} className={styles.logo} width={115} height={52} />
            </Link>
            <div className={styles.linkContainer}>
                {links.map(({ href, name, id }) => (
                    <Link href={href} key={href} id={id} className={styles.link}>
                        {name}
                    </Link>
                ))}
            </div>
            <Link
                type="button"
                className={cn(inter.style, styles.button)}
                href="#contact"
                id="contactLink"
            >
                Contact us
            </Link>
        </div>
    );
}

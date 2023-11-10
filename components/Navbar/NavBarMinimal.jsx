import React, { useState } from "react";
import Link from "next/link";
import styles from "./NavBarMinimal.module.css";
import logo from "../../public/image/bul-blue.png";
import { links } from "../linksMock";
import localFonts from "next/font/local";
import cn from "classnames";

const interReg = localFonts({ src: "../../public/fonts/inter/Inter-Regular.ttf" });
const inter = localFonts({ src: "../../public/fonts/inter/Inter-Bold.ttf" });

const NavBarMinimal = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className={cn(interReg.className, styles.navMinimal)}>
            <Link href="/" className={styles.logo}>
                <img alt="logo" src={logo} className={styles.logo} width={60} height={40} />
            </Link>
            <button type="button" onClick={() => setOpen(!open)}>
                <svg
                    width="24"
                    height="19"
                    viewBox="0 0 24 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <line
                        x1="-1.04907e-07"
                        y1="1.8"
                        x2="24"
                        y2="1.8"
                        stroke="#DADFE5"
                        strokeWidth="2.4"
                    />
                    <line
                        x1="-1.04907e-07"
                        y1="9.8"
                        x2="24"
                        y2="9.8"
                        stroke="#DADFE5"
                        strokeWidth="2.4"
                    />
                    <line
                        x1="-1.04907e-07"
                        y1="17.8"
                        x2="24"
                        y2="17.8"
                        stroke="#DADFE5"
                        strokeWidth="2.4"
                    />
                </svg>
            </button>
            {open && (
                <div className={styles.linkContainer}>
                    {links.map(({ href, name }) => (
                        <Link href={href} className={styles.link} onClick={() => setOpen(false)}>
                            {name}
                        </Link>
                    ))}
                    <Link className={cn(inter.className, styles.button)} href="#contact">
                        Contact us
                    </Link>
                </div>
            )}
        </div>
    );
};

export default NavBarMinimal;

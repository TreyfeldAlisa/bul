import React, { useEffect, useState } from "react";
import cn from "classnames";
import localFonts from "next/font/local";
import styles from "./Feedback.module.css";

const inter = localFonts({ src: "../../public/fonts/inter/Inter-Bold.ttf" });
const jet = localFonts({ src: "../../public/fonts/jet-brains-mono/JetBrainsMono-Regular.ttf" });

export default function HowWeCan() {
    const [initialValue, setInitialValue] = useState("");
    const [concatValue, setConcatValue] = useState("");

    const inputValue = initialValue.length > 5 ? concatValue : initialValue;

    console.log(concatValue, initialValue, inputValue);

    const truncate = (event) => {
        if (event) {
            const { value } = event.target;

            console.log("value", value);

            setInitialValue(value);

            if (value.length > 5) {
                const returnedValue = `...${value.substring(value.length - 5, value.length)}`;

                setConcatValue(returnedValue);
            }
        }

        return "";
    };

    useEffect(() => {
        const txHeight = 200;
        const tx = document.getElementsByTagName("textarea");

        for (let i = 0; i < tx.length; i++) {
            if (tx[i].value == "") {
                tx[i].setAttribute("style", "height:" + txHeight + "px;overflow-y:hidden;");
            } else {
                tx[i].setAttribute(
                    "style",
                    "height:" + txHeight + tx[i].scrollHeight + "px;overflow-y:hidden;",
                );
            }
            tx[i].addEventListener("input", OnInput, false);
        }

        function OnInput(e) {
            this.style.height = txHeight;
            this.style.height = this.scrollHeight + "px";
        }
    });

    return (
        <form className={styles.container} id="contact">
            <div className={styles.inputGroup}>
                <input
                    type="text"
                    className={styles.input}
                    placeholder="Name"
                    onChange={truncate}
                    value={initialValue}
                />
                <input type="tel" name="phone" className={styles.input} placeholder="Phone" />
                <input type="email" name="mail" className={styles.input} placeholder="E-mail" />
                <textarea
                    rows="1"
                    type="text"
                    className={cn(styles.input, styles.description)}
                    placeholder="Description task"
                />
            </div>
            <button className={cn(inter.className, styles.button)}>Send</button>
        </form>
    );
}

import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "@/components/Footer/Footer";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <main>
                <div className="main">
                    <Component {...pageProps} />
                </div>
            </main>
            <Footer isCategories={false} />
        </>
    );
}

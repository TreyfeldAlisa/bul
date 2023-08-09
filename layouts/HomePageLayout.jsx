import Background from "@/components/Background/Background";
import CanvasScene from "@/components/Canvas/Scene";
import Footer from "@/components/Footer/Footer";
import NavBarMinimal from "@/components/Navbar/NavBarMinimal";
import React from "react";
import dynamic from "next/dynamic";

const DynamicComponentWithNoSSR = dynamic(() => import("@/components/Navbar/Navbar"), {
    ssr: false,
    loading: () => <p>loading..{console.log("loading")}</p>,
});

const HomePageLayout = ({ children }) => {
    return (
        <>
            <Background />
            <NavBarMinimal />
            <CanvasScene />
            <div className="homePageContainer">
                <DynamicComponentWithNoSSR />
                {children}
            </div>
            <Footer />
        </>
    );
};

export default HomePageLayout;

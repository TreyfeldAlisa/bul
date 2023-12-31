import React from "react";
import LetsTalk from "@/components/Works/LetsTalk";
import NavBarMinimal from "@/components/Navbar/NavBarMinimal";
import Background from "@/components/Background/Background";
import NavbarAllWorks from "@/components/Navbar/NavbarAllWorks";

const CategoriesLayout = ({ children, shouldBeWithLinks, shape }) => {
  return (
    <>
      <Background shape={shape}/>
      <NavbarAllWorks shouldBeWithLinks={shouldBeWithLinks} />
      <NavBarMinimal />
      {children}
      <LetsTalk />
    </>
  );
};

export default CategoriesLayout;

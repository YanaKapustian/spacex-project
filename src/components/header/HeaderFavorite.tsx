import React, {useRef, useEffect} from "react";
import Navbar from "./Navbar";
import { DarkenDiv, DivSlider, H1, HeaderDiv, ImgBackground } from "../../styledComponents/HeaderFavStyles";
import Slider from "react-slick";
import NavbarFav from "./NavbarFav";

const HeaderFavorite:React.FC = () => {

   return (
      <HeaderDiv>
            <DivSlider>
               <ImgBackground src="https://i.ibb.co/2yvN6yj/image.png" alt="space"></ImgBackground>
            </DivSlider>
         <DarkenDiv>
            <NavbarFav></NavbarFav>
            <H1>FAVORITES</H1>
         </DarkenDiv>
      </HeaderDiv>
   )
}

export default HeaderFavorite
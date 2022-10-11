import React from "react";
import BodyFav from "./body/BodyFav";
import HeaderFavorite from "./header/HeaderFavorite";

const MainFavorite:React.FC = () => {
   return (
      <div>
         <HeaderFavorite></HeaderFavorite>
         <BodyFav></BodyFav>
      </div>
   )
}

export default MainFavorite
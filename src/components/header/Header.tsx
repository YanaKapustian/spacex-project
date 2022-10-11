import React, {useRef, useEffect} from "react";
import Navbar from "./Navbar";
import Carousel from 'react-bootstrap/Carousel';
//import '../../styledComponents/CustomIndicators.scss'
import { DarkenDiv, DivSlider, H1, HeaderDiv, ImgBackground, Span, Div, DivDot, H2 } from "../../styledComponents/HeaderStyles";
import Slider from "react-slick";

const Header:React.FC = () => {
   const sliderRef = useRef(null)

   useEffect(() => {
      function animate() {
         if (sliderRef.current !== null) {
            // sliderRef.current.animate(
            //    { transform: `translateX(-100%)` },
            //    {
            //          duration: 600,
            //          fill: 'forwards'
            //    }
            // )
         }
         
      }
      animate()
   }, [])

   // function animate() {
      
   //    if (sliderRef !== null) {
   //       console.log(sliderRef);
   //    //    sliderRef.current.animate(
   //    //       { transform: `translateX(-${clientWidth * current.id}px)` },
   //    //       {
   //    //           duration: 600,
   //    //           fill: 'forwards'
   //    //       }
   //    //   )
   //    }
      
   // }
   function handleScroll() {
      window.scrollTo({
         top: 740,
         behavior: 'smooth',
     });
   }
   return (
      <HeaderDiv>
            {/* <DivSlider ref={sliderRef}>
               <ImgBackground src="https://i.ibb.co/NmL6S70/image.png" alt="space"></ImgBackground>
               <ImgBackground src="https://i.ibb.co/3ztH1wh/image.png" alt="space"></ImgBackground>
               <ImgBackground src="https://i.ibb.co/2yvN6yj/image.png" alt="space"></ImgBackground>
            </DivSlider> */}
         <DivSlider>
         <Carousel fade controls={false} indicatorLabels={['']}>
            <Carousel.Item interval={3000}>
            <img
               className="d-block w-100"
               src="https://i.ibb.co/NmL6S70/image.png"
               alt="First slide"
            />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
            <img
               className="d-block w-100"
               src="https://i.ibb.co/3ztH1wh/image.png"
               alt="Second slide"
            />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
            <img
               className="d-block w-100"
               src="https://i.ibb.co/2yvN6yj/image.png"
               alt="Third slide"
            />
            </Carousel.Item>
         </Carousel>
         </DivSlider>
         <DarkenDiv>
            <Navbar></Navbar>
            <H1>THE SPACE IS WAITING FOR <br></br><Span>YOU</Span></H1>
            <H2 onClick={handleScroll}>Explore tours <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M20.4572 32.9167V7.91667" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                     <path d="M30.4978 22.8337L20.4578 32.917L10.4162 22.8337" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                     </svg>
            </H2>
         </DarkenDiv>
      </HeaderDiv>
   )
}

export default Header
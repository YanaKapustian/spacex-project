import styled from 'styled-components'
import { DispFlexCenter, DispFlexSpaceBetween } from './global'
import { Props } from './global'

export const H1 = styled('h1')<Props>`
   color: white;
   font-weight: 800;
   margin: 230px auto;
   text-align: center;
   font-size: ${props => props.big ? '310px' : '48px'}
`
export const Span = styled('p')<Props>`
   font-size: 310px;
   margin: -40px;
`
export const HeaderDiv = styled('div')<Props>`
   width: 100%;
   height: 740px;
   position: relative;
   overflow: hidden;
`
export const DarkenDiv = styled('div')<Props>`
   width: 100%;
   height: 780px;
   margin: 0 auto;
   position: absolute;
   background-color: rgba(0, 0, 0, 0.4);
   z-index: 2;
`
export const ImgBackground = styled('img')<Props>`
   width: 100%;
   height: 740px;
   object-fit: cover;
`
export const DivSlider = styled('div')<Props>`
   position: absolute;
   z-index: 0;
`
export const Div = styled('div')<Props>`
   width: 88px;
   height: 24px;
   ${DispFlexSpaceBetween}
`
export const DivDot = styled('div')<Props>`
   width: 24px;
   box-sizing: border-box;
   height: 24px;
   border-radius: 50%;
   border: 1px solid white;
   padding: 3px;
   box-shadow:  0 0 0 8px white;
`
export const H2 = styled('h2')<Props>`
   color: white;
   font-weight: 300;
   font-family: 'Lato', sans-serif;
   font-size: 32px;
   position: absolute;
   bottom: 50px;
   margin-left: auto;
   margin-right: auto;
   left: 0;
   right: 0;
   text-align: center;
   -webkit-text-stroke: .3px black;
   ${DispFlexCenter};
   cursor: pointer;
`

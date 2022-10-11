import styled from 'styled-components'
import { DispFlexSpaceBetween } from './global'
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
   height: 440px;
   position: relative;
   overflow: hidden;
`
export const DarkenDiv = styled('div')<Props>`
   width: 100%;
   height: 780px;
   margin: 0 auto;
   position: absolute;
   background-color: rgba(0, 0, 0, 0.6);
   z-index: 2;
`
export const ImgBackground = styled('img')<Props>`
   width: 100%;
   object-fit: cover;
`
export const DivSlider = styled('div')<Props>`
   position: absolute;
   z-index: 0;
   display: flex;
`
export const Div = styled('div')<Props>`
   width: 88px;
   height: 24px;
   ${DispFlexSpaceBetween}
`

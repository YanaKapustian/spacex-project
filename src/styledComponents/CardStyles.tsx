import styled from 'styled-components'
import { DispFlexCenter } from './global'
import { Props } from './global'

export const CardBlock = styled('div')`
   width: 410px;
   height: 570px;
   position: relative;
   border: 1px solid #D3EAFF;
   margin-bottom: 30px;
   margin-right: 30px;
   display: inline-block;
`
export const Img = styled('img')`
   width: 410px;
   height: 295px;
   object-fit: cover;
`
export const InfoBlock = styled('div')`
   width: 350px;
   margin: 30px auto;
   text-align: center;
`
export const Title = styled('h3')`
   font-size: 24;
   font-weight: 700;
   margin: 0;
   text-transform: uppercase;
`
export const Subtitle = styled('h5')`
   font-size: 24;
   font-weight: 300;
   font-family: 'Lato', sans-serif;;
   margin: 20px 0;
   color: #556B84;
`
export const ClearAll = styled(Subtitle)`
   margin: 0;
   text-align: right;
   margin-bottom: 40px;
   cursor: pointer;
`
export const BlueBtn = styled('button')<Props>`
   width: 280px;
   height: 53px;
   background-color: #D3EAFF;
   ${DispFlexCenter}
   text-transform: uppercase;
   font-size: 24px;
   font-family: 'Syne', sans-serif;
   font-weight: 600;
   margin-right: 15px;
   border: none;
   cursor: pointer;
`
export const DFSpaceBetween = styled('div')`
   position: absolute;
   bottom: 25px;
   display: flex;
   justify-content: space-between;
   align-items: center;
`
export const DispFlexSB = styled('div')`
   display: flex;
   justify-content: space-between;
   align-items: center;
`
export const BeigePrev = styled('button')<Props>`
   width: ${props => props.big ? '53px' : '44px'};
   height: ${props => props.big ? '53px' : '44px'};
   background-color: #ECECEC;
   display: flex;
   align-items: center;
   justify-content: center;
   border: none;
   cursor: pointer;
   position: absolute;
   top: -80px;
   left: 1190px;
   &:hover {
      background-color: #ECECEC;
   }
`
export const BeigeNext = styled('button')<Props>`
   width: ${props => props.big ? '53px' : '44px'};
   height: ${props => props.big ? '53px' : '44px'};
   background-color: #ECECEC;
   display: flex;
   align-items: center;
   justify-content: center;
   border: none;
   cursor: pointer;
   position: absolute;
   top: -80px;
   left: 1250px;
   &:hover {
      background-color: #ECECEC;
   }
`
export const Block = styled('div')`
   max-width: 100%;
   display: flex;
   flex-wrap: wrap;
`
import styled from 'styled-components'
import { NavLink } from "react-router-dom"
import { Props } from './global'
import { DispFlexCenter, DispFlexSpaceBetween } from './global'

export const NavbarDiv = styled('div')<Props>`
   width: 100%;
   height: 80px;
   background-color: rgba(0, 0, 0, 0.5);
`
export const Container = styled('div')<Props>`
   width: 87%;
   margin: 0 auto;
`
export const NavbarBlock = styled('div')<Props>`
   height: 80px;
   display: flex;
   align-items: center;
   justify-content: space-between;
`
export const Logo = styled('img')<Props>`
   width: 220px;
`
export const Ul = styled('ul')<Props>`
   list-style-type: none;
   display: flex;
   width: 295px;
   margin: 0;
   justify-content: space-between;
   align-items: center;
`
export const Li = styled('li')<Props>`
   color: white;
   font-weight: 400;
   font-family: 'Lato', sans-serif;
   text-transform: uppercase;
   line-height: 1.5;
   border-bottom: ${props => props.underline ? '1px solid white' : 'none'};
   cursor: pointer;
   &:hover {
      color: #b3b3b3;
      border-bottom: ${props => props.underline ? '1px solid #b3b3b3' : 'none'};
   }
`
export const Beige = styled('button')<Props>`
   width: ${props => props.big ? '53px' : '44px'};
   height: ${props => props.big ? '53px' : '44px'};
   background-color: ${props => props.backgroundColor || '#ECECEC'};
   display: flex;
   align-items: center;
   justify-content: center;
   border: none;
   cursor: pointer;
`
export const BlueBtn = styled('button')<Props>`
   width: ${props => props.big ? '53px' : '163px'};
   height: 53px;
   background-color: #D3EAFF;
   ${DispFlexCenter}
   text-transform: uppercase;
   font-size: 24px;
   font-family: 'Syne', sans-serif;
   font-weight: 600;
   border: none;
   cursor: pointer;
`
export const DivBtn = styled('div')<Props>`
   width: 230px;
   height: 53px;
   ${DispFlexSpaceBetween}
`
export const NavbarLink = styled(NavLink)<Props>`
   text-decoration: none;
   color: inherit;
   font-weight: 400;
   &:hover {
      color: #b3b3b3;
      border-bottom: '1px solid #b3b3b3';
   }
`
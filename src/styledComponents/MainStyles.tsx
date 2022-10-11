import styled from 'styled-components'
import { Props } from './global'

export const H1 = styled('h1')<Props>`
   color: black;
   font-weight: 800;
   margin: 0px;
   margin-top: 80px;
   margin-bottom: 40px;
   font-size: 32px;
   text-transform: uppercase;
`
export const Container = styled('div')<Props>`
   width: 87%;
   margin: ${props => props.margin || '0 auto'};
   position: relative;
`
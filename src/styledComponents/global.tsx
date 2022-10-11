import {createGlobalStyle, css} from "styled-components"

export const Global = createGlobalStyle<any>`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Syne', sans-serif;
}
`
export const DispFlexCenter = css`
display: flex;
justify-content: center;
align-items: center;
`
export const DispFlexSpaceBetween = css`
display: flex;
justify-content: space-between;
align-items: center;
`

export interface Props {
    black?: boolean;
    big?: boolean;
    underline?: boolean;
    margin?: string;
    backgroundColor?: string;
}
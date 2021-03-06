import { createGlobalStyle } from "styled-components";

export const breakpoints = { tablet: "600px" };

export default createGlobalStyle`

    :root{
      --coffee-brown: #463f3a;
      --light-brown: #8A817C; /* HSL 21, 6, 51*/
      --graceful-grey: #BCB8B1;
      --black-color: #0A0A0A;
      --skin:#E0AFA0;
      --max-content-width: 1200px;
      --background-transparent: rgb(188, 184, 177,0.3);
      --bckgrnd-clr:rgb(183, 183, 164, 0.4);
      --font-family: 'Happy Monkey', cursive;
    }
*{
    box-sizing: border-box;
    font-family: "Happy Monkey";
    ;
}
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        vertical-align: baseline;
        box-sizing: border-box;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
    background: var(--background-transparent);
    } 

    html, body, #root{
height: 100%;
width:100%;
margin: 0;

    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    h1, h2, h3 {
        font-size: 28px;
    }
    `;

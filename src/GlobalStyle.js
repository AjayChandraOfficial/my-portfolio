import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*,*::before,*::after,h1,h2,h3,h4,h5,h6{
    margin:0;
    padding:0;

}
html{
    overflow: hidden;
    font-size:62.5%;
}
body{
    font-family:"Poppins",sans-serif;
    margin:0;
    padding:0;
    background-color:#121212;
    overflow: hidden;
}

`;

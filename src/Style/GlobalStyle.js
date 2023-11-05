import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

}
html{
   
    scroll-behavior: smooth;
    1rem = 16px
   
}



body {
  overflow-x: hidden;
   scrollbar-color: rgb(98 84 243);
    scrollbar-width: thin;
}

body::-webkit-scrollbar {
  width: 1rem;
}

body::-webkit-scrollbar-track {
   background-color: rgb(24 24 29);
   width: 1.4rem
}

body::-webkit-scrollbar-thumb {
 
  background: #fff;
    border: 5px solid transparent;
    border-radius: 9px;
    background-clip: content-box;
}

.container {
  max-width: 120rem;
  margin: 0 auto;
}

.grid {
  display: grid;
  gap: 1rem;
}

.grid-two-column {
  grid-template-columns: repeat(2, 1fr);

}

.grid-three-column {
  grid-template-columns: repeat(3, 1fr);
}

.grid-four-column{
   grid-template-columns: 1fr 1.2fr .5fr .8fr ;
}

.grid-five-column{
  grid-template-columns: repeat(5, 1fr);
}

  .common-heading {
      font-size: 3.8rem;
      font-weight: 600;
      margin-bottom: 6rem;
      text-transform: capitalize;
    }

     .intro-data {
      margin-bottom: 0;
      text-transform: uppercase;
      color: #5138ee;
    }

   .caption {
      position: absolute;
      top: 15%;
      right: 10%;
      text-transform: uppercase;
      background-color: ${({ theme }) => theme.colors.bg};
      color: ${({ theme }) => theme.colors.helper};
      padding: 0.8rem 2rem;
      font-size: 1.2rem;
      border-radius: 2rem;
    }
   .caption-New{
      position: absolute;
      top: 15%;
      left: 10%;
      text-transform: uppercase;
      background-color: ${({ theme }) => theme.colors.bg};
      color:magenta;
      padding: 0.8rem 2rem;
      font-size: 1.2rem;
      border-radius: 2rem;
    }

input{
   max-width: 50rem;
   padding: 1.6rem 2.4rem;

}

// textarea{
   
//     color: ${({ theme }) => theme.colors.black};
 
//     // border: 1px solid ${({ theme }) => theme.colors.border};
  
//    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
// }
    input[type="submit"]{
    max-width: 16rem;
    margin-top: 2rem;
    background-color: ${({ theme }) => theme.colors.btn};
    color: ${({ theme }) => theme.colors.white};

    border-style: solid;
    border-width: .1rem;
  
  
    cursor: pointer;
    }
    @media (max-width: ${({ theme }) => theme.media.tab}) {
      .container {
      max-width: 130rem;
      padding: 0 3.2rem;
    }
    }
  
     @media (max-width: ${({ theme }) => theme.media.mobile}) {
         html {
        font-size: 60%;
      }
.grid{
  gap: 3.2rem;
}
      .grid-two-column , .grid-three-column, .grid-four-column{
          grid-template-columns: 1fr;
        }
    }
    @media (min-width: 768px) and (max-width: 1279px) {
      .grid {
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* set the columns to auto-fit with a minimum width of 300px */
        gap: 2rem; 
      }
    }
    @media screen and (max-width: 800px), screen and (max-width:1024px) {
      .grid {
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); 
      gap: 2rem; 
      }
      }
    
`;

// html {
//     font-size: 62.5%;
//     /* scroll-behavior: smooth; */
//     /* 1rem = 10px */
//     overflow-x: hidden;
//   }

// h1,
// h2,
// h3,
// h4 {
//    font-family: "Work Sans", sans-serif;

// }

// h1 {
//   color: ${({ theme }) => theme.colors.heading};
//   font-size: 6rem;
//   font-weight: 900;
// }

//  h2 {
//    color: ${({ theme }) => theme.colors.heading};
//    font-size: 4.4rem;
//    font-weight: 300;
//    white-space: normal;

//   }

// h3 {
//   font-size: 1.8rem;
//   font-weight: 400;
// }

// // p{
// //     font-size: 2.65rem;
// // }

// button {
//   color: ${({ theme }) => theme.colors.text};
//   font-size: 1.65rem;
//   line-height: 1.5;
//   font-weight:400;
// }
// p{
//   font-size:20px;
// }
// a {
//   text-decoration: none;
// }

// li {
//   list-style: none;
// }

// ${"" /* resuable code section  */}

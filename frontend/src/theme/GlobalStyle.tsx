import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

   @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Poppins:wght@400;600&family=Rubik:wght@400;600&display=swap');
    *,*::before,*::after {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        margin: 0;
        padding: 0;

    }   

    html {
        font-size: 62.5%;
        overflow-x: hidden;
    }

    body{
        font-size: 1.6rem;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: 'Poppins', sans-serif;
        font-family: 'Rubik', sans-serif;
        overflow-x: hidden;
        user-select:none;

 ::-webkit-scrollbar {
    width: 0.7rem;

    }

   
       
}

::-webkit-scrollbar-thumb {
    background: #04023c;
}

::-webkit-scrollbar-track {
    background: #1e1e24;
}

      
      


`;

export default GlobalStyle;

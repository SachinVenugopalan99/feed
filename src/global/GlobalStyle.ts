import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
&[data-theme="light"] {
  --bg-color: #DAE4ED;
  --navbar-color: #DDEAF3;
  --searchbar-color:#ffffff;
  --text-color: #333333;
  --heading-color: #444444;
  --border-color: #333333;
  --feed-color:#ffffff; 
}

/* Dark mode styles */
&[data-theme="dark"] {
  --bg-color: #333333;
  --navbar-color: #333333;
  --searchbar-color:#ffffff;
  --text-color: #ffffff;
  --heading-color: #dddddd;
  --border-color: #333333;
  --feed-color:#333333; 
}
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
    }
    body{
        font-family: "Inter",san-serif;
        h1{
            font-size: 2rem;
            font-weight: 600;
            color: var(--text-color);  
        }
        h3{
            font-size: 1.1rem;
            font-weight: 600;
        }
        p{
            font-size: 1rem;
            color: var(--text-color);
        }
    }
`;

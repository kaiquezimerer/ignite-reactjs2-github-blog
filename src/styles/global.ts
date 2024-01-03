import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ::placeholder {
    color: ${props => props.theme['gray-400']};
  }

  body {
    -webkit-font-smoothing: antialiased;
    background-color: ${props => props.theme['gray-800']};
  }

  body, input, textarea, button {
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 160%;
    color: ${props => props.theme['gray-200']};
  }

  h1, h2, h3, 
  h4, h5, h6 {
    color: ${props => props.theme['white']};
  }

  ol, ul {
    list-style: none;
  }

  a {
    cursor: pointer;
    text-decoration: none;
    color: ${props => props.theme['blue']};

    &:hover {
      text-decoration: underline;
    }
  }
`

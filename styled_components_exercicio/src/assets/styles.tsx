import styled, { createGlobalStyle } from "styled-components";

export const Header = styled.header`
display: flex;
align-items: center;
justify-content: center;
padding: 1em;
background-color: #022c16;
  color: #ffffff;
  margin-bottom: 3em;
`;

export const Container = styled.div`
width: 80%;
max-width: 800px;
margin: 0 auto;
text-align: center;
/* color: black; */
border: 2px solid ${props => props.theme.borderColor};
color: ${props => props.theme.textColor};
`;

// PASSANDO PROPS PARA A ESTILIZAÇÃO

type TitleProps = {
  color: string
}

export const Title = styled.h1<TitleProps>`
  color: ${props => props.color};
  font-size: 2rem;
  text-align: center;
`

/////////////////////////////////////////////////////////

// CRIAR UM BLOCO DE CSS GLOBAL
export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #f1f1f1;
}
h1 {
  color:black;
}
`

/////////////////////////////////////////////////////////

// ANINHAMENTO DE CLASSES

export const Card = styled.div `
  background-color: lightgray;
  padding: 20px;
  width: 180px;
  border: 2px solid ${props => props.theme.borderColor};

  h2 {
    font-size: 16px;
    color: black
  }

  p {
    font-size: 16px;
    color: black;
  }
`

// PSEUDO CLASSES

export const Button = styled.button`
  background-color:blue;
  color: white;
  padding: 10px 20px;
  margin: 15px 10px;

  &:hover {
    background-color: darkblue;
  }
`


/////////////////////////////////////////////////////////
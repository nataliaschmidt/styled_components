import { ThemeProvider } from "styled-components";
import { Button, Card, Container, GlobalStyle, Header, Title } from "./assets/styles";

function App() {

  // para utilizar o themeProvider
  const theme = {
    borderColor: '#1A1B1C',
    textColor: '#1FB621',
  };

  return (
    <>
      <GlobalStyle />
      <Header>
        <Title color="#1F7659">
          Componente estilizado com Props
        </Title>
      </Header>
      <ThemeProvider theme={theme}>
      <Container>
        <p>Conteúdo</p>
      </Container>
        <Card>
          <h2>Título do card</h2>
          <p>Conteúdo do Card</p>
        </Card>
      </ThemeProvider>

      <Button>
        Clique aqui!
      </Button>
    </>


  );
}

export default App;

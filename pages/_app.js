import { ThemeProvider } from "styled-components";
import NavBar from "../components/NavBar";
import { Container } from "../components/styles/Container.styled";
import GlobalStyles from "../components/styles/Global";

const theme = {
  colors: {
    navbar: "#303030",
    body: "#11110",
    footer: "#003333",
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <NavBar />
        <Container>
          <Component {...pageProps} />
        </Container>
      </>
    </ThemeProvider>
  );
}

export default MyApp;

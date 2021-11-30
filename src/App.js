import HomePage from "./components/HomePage";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import MainNavigation from "./components/MainNavigation";
// import { Router, Switch } from "react-router-dom";
const colors = {
  background: "#121212",
  text: "#E9CE5D",
  darkText: "#F3CA20",
  // background: "#4A536B",
  // text: "#AED6DC",
  // darkText: "#AED6DC",
};
function App() {
  return (
    <>
      <ThemeProvider theme={colors}>
        <GlobalStyle />
        <MainNavigation />
        <HomePage />
      </ThemeProvider>
    </>
  );
}

export default App;

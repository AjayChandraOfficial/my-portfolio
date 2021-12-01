import HomePage from "./components/HomePage";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import MainNavigation from "./components/MainNavigation";
import { useLocation } from "react-router-dom";
import SkillsPage from "./components/SkillsPage";
import { AnimatePresence } from "framer-motion";
import { Route, Switch } from "react-router-dom";
const colors = {
  background: "#121212",
  text: "#E9CE5D",
  darkText: "#F3CA20",
  // background: "#4A536B",
  // text: "#AED6DC",
  // darkText: "#AED6DC",
};
function App() {
  const location = useLocation();
  return (
    <>
      <ThemeProvider theme={colors}>
        <GlobalStyle />
        <MainNavigation />
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.id}>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/skills" component={SkillsPage} />
          </Switch>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default App;

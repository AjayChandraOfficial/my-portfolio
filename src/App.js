import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Route, Switch } from "react-router-dom";
import React from "react";
import { Suspense } from "react";
import LoadingComponent from "./components/LoadingComponent";

//Lazy Loading Pages

const HomePage = React.lazy(() => import("./components/HomePage"));
const SkillsPage = React.lazy(() => import("./components/SkillsPage"));
const ProjectsPage = React.lazy(() => import("./components/ProjectsPage"));
const AboutPage = React.lazy(() => import("./components/AboutPage"));
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
        <Suspense fallback={<LoadingComponent />}>
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.key}>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/home" component={HomePage} />
              <Route exact path="/skills" component={SkillsPage} />
              <Route exact path="/projects" component={ProjectsPage} />
              <Route exact path="/about" component={AboutPage} />
            </Switch>
          </AnimatePresence>
        </Suspense>
      </ThemeProvider>
    </>
  );
}

export default App;

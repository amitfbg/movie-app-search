import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import styled from "styled-components";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Shortlisted from "./pages/Shortlisted";
import store from "./react-redux-store/store";

const Container = styled.div`
  height: 100vh;
`;

function App() {
  return (
    <Container>
      <BrowserRouter basename="/">
        <Provider store={store}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/shortlisted">
              <Shortlisted />
            </Route>
            <Redirect to="/" />
          </Switch>
          <Footer />
        </Provider>
      </BrowserRouter>
    </Container>
  );
}

export default App;

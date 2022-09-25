import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./SearchBox";

const Container = styled.div`
  display: flex;
  position: fixed;
  bottom: 2.5rem;
  left: 50%;
  transform: translate(-50%, 0);
`;

function Footer() {
  const history = useHistory();
  const location = useLocation();
  const routeChange = (path) => {
    history.push(path);
  };
  return (
    <Container>
      <Button
        selected={location?.pathname === "/"}
        onClick={() => routeChange("/")}
      >
        Home
      </Button>
      <Button
        selected={location?.pathname === "/shortlisted"}
        onClick={() => routeChange("/shortlisted")}
      >
        Shortlisted
      </Button>
    </Container>
  );
}

export default Footer;

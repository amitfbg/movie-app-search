import React from "react";
import { useHistory } from "react-router-dom";
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
  const routeChange = (path) => {
    history.push(path);
  };
  return (
    <Container>
      <Button onClick={() => routeChange("/")}>Home</Button>
      <Button onClick={() => routeChange("/shortlisted")}>Shortlisted</Button>
    </Container>
  );
}

export default Footer;

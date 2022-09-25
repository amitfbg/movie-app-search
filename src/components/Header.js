import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  font-size: 2.5rem;
  font-weight: bold;
  font-style: italic;
  color: green;
  box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
`;

function Header({ title }) {
  return <Container>{title}</Container>;
}

export default Header;

import React, { useState } from "react";
import styled from "styled-components";
import ClearIcon from "@material-ui/icons/Clear";

const Container = styled.div`
  margin: 1.5rem;
`;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  border-bottom: 2px solid rgb(56, 178, 172);
  padding: 0.5rem;
`;

const Input = styled.input`
  appearance: none;
  background-color: transparent;
  border-style: none;
  color: rgb(74, 85, 104);
  font-size: 2rem;
  margin: 0 0.75rem 0.5rem 0;
  padding: 0 0.25rem;
  text-align: center;
  outline: none;
`;

const MyClearIcon = styled(ClearIcon)`
  cursor: pointer;
`;

export const Button = styled.div`
  flex-shrink: 0;
  background-color: rgb(56, 178, 172);
  font-size: 1rem;
  color: rgb(255, 255, 255);
  border-radius: 0.5rem;
  padding: 0.75rem;
  margin: 0 0.5rem;
  cursor: pointer;
  &:hover {
    background-color: rgb(44, 122, 123);
  }
`;

const SearchBox = ({ searchText }) => {
  const [text, setText] = useState("");

  const handleClick = (e) => {
    sessionStorage.setItem("lastSearched", text);
    searchText(text);
    setText("");
  };

  return (
    <Container>
      <Wrap>
        <Input
          value={text}
          onChange={(e) => setText(e?.target?.value)}
          type="text"
          placeholder="Search Movie..."
        />
        {text && <MyClearIcon onClick={() => setText("")} />}
        <Button onClick={handleClick}>Search</Button>
      </Wrap>
    </Container>
  );
};

export default SearchBox;

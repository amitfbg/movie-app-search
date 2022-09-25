import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import HeartIcon from "../Icons/HeartIcon";

const Container = styled.div`
  min-width: 10rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 5px 5px 0 rgba(31, 38, 135, 0.57);
  padding: 1rem;
`;
const ImageDiv = styled.div`
  height: 18rem;
  margin: 0.5rem 0;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  border-radius: 0.5rem;
`;

const MovieTitle = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #282c3f;
`;
const MovieYear = styled.div`
  color: #535766;
  font-weight: 400;
`;
const ButtonContainer = styled.div`
  margin-top: 0.5rem;
  width: 75%;
`;

const ShortlistedButton = styled.button`
  width: 100%;
  height: 2rem;
  font-size: 18px;
  background-image: linear-gradient(#464d55, #25292e);
  border-radius: 0.5rem;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  transition: all 150ms;
  &:hover {
    opacity: 0.85;
  }
`;
const ButtonText = styled.div`
  margin-right: 0.25rem;
`;

function MovieCard(props) {
  const { movieDetails } = props;
  const dispatch = useDispatch();

  function handleClick() {
    if (!movieDetails?.isShortlisted) {
      let dataToSet = { ...movieDetails, isShortlisted: true };
      dispatch({
        type: "ADD_SHORTLISTED",
        payload: {
          [movieDetails?.imdbID]: dataToSet,
        },
      });
    } else {
      dispatch({
        type: "REMOVE_SHORTLISTED",
        payload: movieDetails?.imdbID,
      });
    }
  }

  return (
    <Container>
      <MovieTitle>{movieDetails?.Title}</MovieTitle>
      <ImageDiv>
        <Image src={movieDetails?.Poster} />
      </ImageDiv>
      <MovieYear>{movieDetails?.Year}</MovieYear>
      <ButtonContainer>
        <ShortlistedButton onClick={handleClick}>
          <ButtonText>Shortlist</ButtonText>
          <HeartIcon isSelected={movieDetails?.isShortlisted} />
        </ShortlistedButton>
      </ButtonContainer>
    </Container>
  );
}

export default MovieCard;

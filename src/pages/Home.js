/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import GeneralComponent from "../components/GeneralComponent";
import Header from "../components/Header";
import MovieCard from "../components/MovieCard";
import SearchBox from "../components/SearchBox";

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;
export const BannerContainer = styled.div`
  box-shadow: 0px 0px 0px #888, 0px 2px 5px #888;
  overflow-x: scroll;
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  @media (max-width: 767.9px) {
    grid-template-columns: 1fr;
  }
`;
const SearchContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  box-shadow: 0px 0px 1px #888;
`;

function Home() {
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [title, setTitle] = useState(
    sessionStorage.getItem("lastSearched") || ""
  );
  const shortlistedItem = useSelector((state) => state);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=4dad5ea8&type=movie&s=${title}`)
      .then((res) => res.json())
      .then((data) => {
        if (data?.Response && data?.Search && Array.isArray(data.Search))
          setMovieList(
            data.Search.map((curr) => {
              return {
                ...curr,
                isShortlisted: !!shortlistedItem[curr?.imdbID]?.isShortlisted,
              };
            })
          );
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [title]);

  useEffect(() => {
    setMovieList(
      movieList.map((curr) => {
        return {
          ...curr,
          isShortlisted: shortlistedItem[curr?.imdbID]?.isShortlisted,
        };
      })
    );
  }, [shortlistedItem]);

  const getContentToRender = () => {
    if (isLoading) {
      return <GeneralComponent val="Loading" />;
    }
    if (movieList && Array.isArray(movieList) && movieList.length === 0) {
      return <GeneralComponent val="NoData" label="No Data Please Search" />;
    }
    return (
      <BannerContainer>
        {movieList?.map((currMovie) => (
          <MovieCard key={currMovie?.imdbID} movieDetails={currMovie} />
        ))}
      </BannerContainer>
    );
  };

  return (
    <Container>
      <Header title="Movies Hub" />
      <SearchContainer>
        <SearchBox searchText={(text) => setTitle(text)} />
      </SearchContainer>

      {getContentToRender()}
    </Container>
  );
}

export default Home;

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import GeneralComponent from "../components/GeneralComponent";
import Header from "../components/Header";
import MovieCard from "../components/MovieCard";
import { BannerContainer, Container } from "./Home";

function Shortlisted() {
  const [movieList, setMovieList] = useState([]);
  const shortlistedItem = useSelector((state) => state);

  useEffect(() => {
    setMovieList(Object.values(shortlistedItem));
  }, [shortlistedItem]);

  const getContentToRender = () => {
    if (movieList && Array.isArray(movieList) && movieList.length === 0) {
      return <GeneralComponent val="NoData" showBackBtn />;
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
      <Header title="Shortlisted Movies" />
      {getContentToRender()}
    </Container>
  );
}

export default Shortlisted;

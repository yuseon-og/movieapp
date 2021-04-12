import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import Section from "../../Components/Section";
import Msg from "../../Components/Msg";
import Poster from "../../Components/Poster";
import { Helmet } from "react-helmet";

const Container = styled.div`
  padding: 20px;
`;

const Form = styled.form`
  margin-bottom: 50px;
  width: 100%;
`;

const Input = styled.input`
  all: unset;
  font-size: 28px;
  width: 100%;
`;

const SearchPresenter = ({
  movieResults,
  tvResults,
  searchTerm,
  loading,
  error,
  handleSumit,
  updateTerm,
}) => (
  <>
    <Helmet>
      <title>Search...</title>
    </Helmet>
    {
      <Container>
        <Form onSubmit={handleSumit}>
          <Input
            placeholder="Search Movies or TV Shows..."
            value={searchTerm}
            onChange={updateTerm}
          ></Input>
        </Form>
        {loading ? (
          <Loader />
        ) : (
          <>
            {movieResults && movieResults.length > 0 && (
              <Section title="Movie Results">
                {movieResults.map((movie) => (
                  <Poster
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    imageUrl={movie.poster_path}
                    rating={movie.vote_average}
                    year={
                      movie.release_date && movie.release_date.substring(0, 4)
                    }
                    isMovie={true}
                  />
                ))}
              </Section>
            )}
            {tvResults && tvResults.length > 0 && (
              <Section title="TV Show Results">
                {tvResults.map((show) => (
                  <Poster
                    key={show.id}
                    id={show.id}
                    title={show.name}
                    imageUrl={show.poster_path}
                    rating={show.vote_average}
                    year={
                      show.first_air_date && show.first_air_date.substring(0, 4)
                    }
                    isMovie={false}
                  />
                ))}
              </Section>
            )}
            {error && <Msg color="#ee5253" text={error} />}
            {movieResults &&
              tvResults &&
              movieResults.length === 0 &&
              tvResults.length === 0 && (
                <Msg color="#3498db" text="Nothing Found" />
              )}
          </>
        )}
      </Container>
    }
  </>
);

SearchPresenter.propTypes = {
  movieResults: PropTypes.array,
  tvResults: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  searchTerm: PropTypes.string,
  handleSumit: PropTypes.func.isRequired,
  updateTerm: PropTypes.func.isRequired,
};

export default SearchPresenter;

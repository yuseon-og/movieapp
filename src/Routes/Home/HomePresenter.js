import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";
import Msg from "../../Components/Msg";
import Poster from "../../Components/Poster";

const Container = styled.div`
  padding: 20px;
`;

const HomePresenter = ({ nowPlaying, upcoming, popular, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {nowPlaying && nowPlaying.length > 0 && (
        <Section title="Now Playing">
          {nowPlaying.map((movie) => (
            // <span>{movie.title}</span>
            <Poster
              key={movie.id}
              id={movie.id}
              title={movie.title}
              imageUrl={movie.poster_path}
              rating={movie.vote_average}
              year={movie.release_date && movie.release_date.substring(0, 4)}
              isMovie={true}
            />
            // original_title or title
            // poster_path
            // release_date
            // vote_average
          ))}
        </Section>
      )}

      {popular && popular.length > 0 && (
        <Section title="Popular">
          {popular.map((movie) => (
            <Poster
              key={movie.id}
              id={movie.id}
              title={movie.title}
              imageUrl={movie.poster_path}
              rating={movie.vote_average}
              year={movie.release_date && movie.release_date.substring(0, 4)}
              isMovie={true}
            />
          ))}
        </Section>
      )}

      {upcoming && upcoming.length > 0 && (
        <Section title="Upcoming">
          {upcoming.map((movie) => (
            <Poster
              key={movie.id}
              id={movie.id}
              title={movie.title}
              imageUrl={movie.poster_path}
              rating={movie.vote_average}
              year={movie.release_date && movie.release_date.substring(0, 4)}
              isMovie={true}
            />
          ))}
        </Section>
      )}
      {error && <Msg text={error} />}
    </Container>
  );

HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  upcoming: PropTypes.array,
  popular: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default HomePresenter;

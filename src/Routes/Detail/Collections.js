import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { movieApi } from "../../api";
import { withRouter, Link, Route, Router, Switch } from "react-router-dom";
import Loader from "../../Components/Loader";
import Poster from "../../Components/PosterInside";
import Section from "../../Components/Section";
import Detail from "./DetailContainer";
const Container = styled.div`
  /* display: grid;
  grid-template-columns: repeat(auto-fill, minmax(max-content, 300px));
  grid-auto-rows: max-content;
  gap: 10px;
  margin: 20px 0px; */
  margin: 20px, 0px;
`;

const CoverContainer = styled.div`
  padding: 20px;
  justify-content: center;
  text-align: center;
`;

const Cover = styled.div`
  padding-left: 320px;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
  height: 150px;
  width: 120px;
  border-radius: 4px;
  transition: opacity 0.2s linear;
  margin-bottom: 10px;
`;

const Name = styled.span`
  font-size: 20px;
  font-weight: 700;
`;

const Alert = styled.div`
  width: 100%;
  color: #3498db;
  font-size: 35px;
  font-weight: 600;
  margin-top: 20px;
`;

const Collections = withRouter(({ location, history, props }) => {
  // console.log(props);
  const [collection, setCollection] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  async function getCollection(id) {
    try {
      const { data } = await movieApi.movieCollection(id);
      // console.log(nowPlaying);

      setCollection(data);
    } catch {
      setError("Can't Find Movies Information!!");
    } finally {
      setLoading(false);
      // console.log(this.state.loading);
    }
  }

  useEffect(() => {
    if (props.belongs_to_collection) {
      getCollection(props.belongs_to_collection.id);
    } else {
      setCollection(null);
      setLoading(false);
    }
  }, []);

  return (
    <Container>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          {collection !== null ? (
            <Section>
              {collection.parts.map((movie) => (
                // <span>{movie.title}</span>
                <>
                  {/* {console.log(location)}
                  {console.log(history)} */}
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
                </>
              ))}
            </Section>
          ) : (
            <Alert>Nothing Found</Alert>
          )}
        </Container>
      )}
    </Container>
  );
});

Collections.propTypes = {
  props: PropTypes.object,
};

export default Collections;

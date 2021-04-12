import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import Msg from "../../Components/Msg";
import { Helmet } from "react-helmet";

import { withRouter, Link, Route } from "react-router-dom";
import Trailer from "./Tabs/Trailer";
import Production from "./Tabs/Production";
import Collections from "./Collections";
import Country from "./Tabs/Country";
import Seasons from "./Tabs/Season";
import Created_by from "./Tabs/Created_by";

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(4px);
  opacity: 0.5;
  z-index: 0;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  z-index: 1;
  height: 100%;
`;

const Cover = styled.div`
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  height: 600px;
  width: 405px;
  border-radius: 5px;
`;

const Data = styled.data`
  width: 70%;
  margin-left: 10px;
`;

const Title = styled.span`
  font-size: 32px;
  margin-bottom: 10px;
`;

const ItemContainer = styled.div`
  margin: 20px 0px;
`;

const Item = styled.span``;

const Divider = styled.span`
  margin: 0 10px;
`;

const Overview = styled.p`
  font-size: 12px;
  opacity: 0.7;
  line-height: 1.5;
  width: 50%;
  margin-bottom: 15px;
`;

const InsideMenu = styled.div`
  margin: 20px 0px;
`;

const List = styled("ul")`
  display: flex;
`;

const ListItem = styled("li")`
  margin-right: 20px;
  text-transform: uppercase;
  font-weight: 600;
  border: 2px solid #3498db;
  padding: 5px;
  border-radius: 3px;
  background-color: ${(props) => (props.active ? "#3498db" : "transparent")};
  color: ${(props) => (props.active ? "white" : "black")};
`;
const SLink = styled(Link)`
  color: white;
`;
const VideoContainer = styled.div`
  padding: 10px 0;
`;

const ALink = styled.a`
  background-color: #feca57;
  padding: 3px;
  font-size: 10px;
  font-weight: 700;
  color: #222f3e;
  border-radius: 5px;
`;

const DetailPresenter = withRouter(
  ({ location: { pathname }, result, error, loading }) =>
    loading ? (
      <>
        <Helmet>
          <title>Loading...</title>
        </Helmet>
        <Loader />
      </>
    ) : (
      <Container>
        <Helmet>
          <title>{result.title ? result.title : result.name}</title>
        </Helmet>
        <Backdrop
          bgImage={
            result.backdrop_path
              ? `https://image.tmdb.org/t/p/original${result.backdrop_path}`
              : require("../../assets/nono.png").default
          }
        />
        <Content>
          <Cover
            bgImage={
              result.poster_path
                ? `https://image.tmdb.org/t/p/original${result.poster_path}`
                : require("../../assets/nono.png").default
            }
          />

          <Data>
            <Title>{result.title ? result.title : result.name}</Title>
            <ItemContainer>
              <Item>
                {result.release_date
                  ? result.release_date.substring(0, 4)
                  : result.first_air_date.substring(0, 4)}
              </Item>
              <Divider>•</Divider>
              <Item>{result.runtime || result.episode_run_time}min</Item>
              <Divider>•</Divider>
              <Item>
                {result.genres &&
                  result.genres.map((genres, index) =>
                    index === result.genres.length - 1
                      ? genres.name
                      : `${genres.name} / `
                  )}
              </Item>
              <Divider>•</Divider>
              <Item>
                <ALink href={"https://imdb.com/title/" + result.imdb_id}>
                  IMDB
                </ALink>
              </Item>
            </ItemContainer>
            <ItemContainer>
              <Overview>{result.overview}</Overview>

              {/* {console.log(result)} */}

              {result.title ? (
                <InsideMenu>
                  <List>
                    <ListItem
                      active={pathname === `/movie/${result.id}/trailer`}
                    >
                      <SLink to={`/movie/${result.id}/trailer`}>Trailer</SLink>
                    </ListItem>
                    <ListItem
                      active={pathname === `/movie/${result.id}/production`}
                    >
                      <SLink to={`/movie/${result.id}/production`}>
                        Production Company
                      </SLink>
                    </ListItem>
                    <ListItem
                      active={pathname === `/movie/${result.id}/collections`}
                    >
                      <SLink to={`/movie/${result.id}/collections`}>
                        Collections
                      </SLink>
                    </ListItem>
                    <ListItem
                      active={pathname === `/movie/${result.id}/countries`}
                    >
                      <SLink to={`/movie/${result.id}/countries`}>
                        Country
                      </SLink>
                    </ListItem>
                  </List>
                  <Route
                    path="/movie/:id/trailer"
                    render={() => <Trailer props={result} />}
                  />
                  <Route
                    path="/movie/:id/production"
                    render={() => <Production props={result} />}
                  />
                  <Route
                    path="/movie/:id/collections"
                    render={() => <Collections props={result} />}
                  />
                  <Route
                    path="/movie/:id/countries"
                    render={() => <Country props={result} />}
                  />
                </InsideMenu>
              ) : (
                <InsideMenu>
                  <List>
                    <ListItem
                      active={pathname === `/show/${result.id}/trailer`}
                    >
                      <SLink to={`/show/${result.id}/trailer`}>Trailer</SLink>
                    </ListItem>
                    <ListItem
                      active={pathname === `/show/${result.id}/production`}
                    >
                      <SLink to={`/show/${result.id}/production`}>
                        Production Company
                      </SLink>
                    </ListItem>
                    <ListItem
                      active={pathname === `/show/${result.id}/seasons`}
                    >
                      <SLink to={`/show/${result.id}/seasons`}>Seasons</SLink>
                    </ListItem>
                    <ListItem
                      active={pathname === `/show/${result.id}/countries`}
                    >
                      <SLink to={`/show/${result.id}/countries`}>Country</SLink>
                    </ListItem>

                    <ListItem
                      active={pathname === `/show/${result.id}/created_by`}
                    >
                      <SLink to={`/show/${result.id}/created_by`}>
                        Created_by
                      </SLink>
                    </ListItem>
                  </List>
                  <Route
                    path="/show/:id/trailer"
                    render={() => <Trailer props={result} />}
                  />
                  <Route
                    path="/show/:id/production"
                    render={() => <Production props={result} />}
                  />
                  <Route
                    path="/show/:id/seasons"
                    render={() => <Seasons props={result} />}
                  />{" "}
                  <Route
                    path="/show/:id/countries"
                    render={() => <Country props={result} />}
                  />
                  <Route
                    path="/show/:id/created_by"
                    render={() => <Created_by props={result} />}
                  />
                </InsideMenu>
              )}
            </ItemContainer>
          </Data>
        </Content>
      </Container>
    )
);

DetailPresenter.propTypes = {
  result: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default DetailPresenter;

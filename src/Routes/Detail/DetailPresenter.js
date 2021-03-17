import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import Msg from "../../Components/Msg";
import {Helmet} from "react-helmet";
import ReactPlayer from "react-player/youtube";

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
`;

const VideoContainer = styled.div`
  padding: 10px 0;
`;

const DetailPresenter = ({result, error, loading}) =>
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
          </ItemContainer>
          <ItemContainer>
            <Overview>{result.overview}</Overview>

            {console.log(result)}

            {/* 첫번째 비디오만 출력 */}
            <VideoContainer>
              {result.videos.results.length !== 0 ? (
                <ReactPlayer
                  url={`https://www.youtube.com/watch?v=${result.videos.results[0].key}`}
                ></ReactPlayer>
              ) : (
                console.log("nope")
              )}
            </VideoContainer>

            {/* 모든 비디오를 Map을 사용하여 출력 */}

            {/* <VideoContainer>
              {result.videos.results.map((results) => (
                <ReactPlayer
                  url={`https://www.youtube.com/watch?v=${results.key}`}
                >
                  {console.log(results.key)}
                </ReactPlayer>
              ))}
            </VideoContainer> */}
          </ItemContainer>
        </Data>
      </Content>
    </Container>
  );

DetailPresenter.propTypes = {
  result: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default DetailPresenter;

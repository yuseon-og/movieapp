import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ReactPlayer from "react-player/youtube";

// import Production from "./Tabs/Production";
// import Collections from "./Tabs/Collections";
// import Country from "./Tabs/Country";
// import Seasons from "./Tabs/Season";
// import Created_by from "./Tabs/Created_by";

const Container = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  padding: 20px 5px; ;
`;

const VideoContainer = styled.div`
  padding: 10px 0;
`;

const Alert = styled.div`
  width: 50%;
  color: #3498db;
  font-size: 35px;
  font-weight: 600;
`;

const Trailer = ({ props }) => {
  // console.log(props);
  return (
    <Container>
      <VideoContainer>
        {props.videos.results.length !== 0 ? (
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${props.videos.results[0].key}`}
          ></ReactPlayer>
        ) : (
          <Alert>Nothing Found</Alert>
        )}
      </VideoContainer>

      {/* 모든 비디오를 Map을 사용하여 출력
      <VideoContainer>
{result.videos.results.map((results) => (
  <ReactPlayer
    url={`https://www.youtube.com/watch?v=${results.key}`}
  >
    {console.log(results.key)}
  </ReactPlayer>
))}
</VideoContainer> */}
    </Container>
  );
};

Trailer.propTypes = {
  props: PropTypes.object,
};

export default Trailer;

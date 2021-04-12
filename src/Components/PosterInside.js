import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link, Router, withRouter } from "react-router-dom";
import NoImg from "../assets/nono.png";

const Container = styled.div`
  font-size: 12px;
`;

const Image = styled.div`
  background-image: url(${(props) => props.bgUrl});
  height: 170px;
  background-size: cover;
  border-radius: 4px;
  background-position: center center;
  transition: opacity 0.2s linear;
`;

const Rating = styled.span`
  bottom: 5px;
  right: 5px;
  position: absolute;
  opacity: 0;
`;

const ImageContainer = styled.div`
  margin-bottom: 5px;
  position: relative;
  &:hover {
    ${Image} {
      opacity: 0.4;
    }
    ${Rating} {
      opacity: 1;
    }
  }
`;

const Title = styled.span`
  display: block;

  margin-bottom: 3px;
`;

const Year = styled.span`
  font-size: 10px;
  color: rgba(255, 255, 255, 0.6);
`;

// const GoToClick = () => {
//   // if (typeof onClick !== "function") {
//   //   return;
//   // }

//   const element = useRef();

//   const goTo = () => {
//     window.location.reload(true);
//   };

//   console.log("did?");

//   useEffect(() => {
//     if (element.current) {
//       element.current.addEventListener("click", goTo);
//       console.log("did?");
//     }
//     return () => {
//       if (element.current) {
//         element.current.removeEventListener("click", goTo);
//       }
//     };
//     console.log("did");
//   }, []);

//   return { element };
// };

const Poster = withRouter(
  ({
    location,
    history,
    id,
    imageUrl,
    title,
    rating,
    year,
    isMovie = false,
  }) => {
    // const refresh = GoToClick();

    // const goTo = () => {
    //   window.location.reload(true);
    // };

    const pathRouting = () => {
      setTimeout(() => {
        window.location.reload(true);
      }, 50);
    };
    return (
      // <Router>
      <Link to={isMovie ? `/movie/${id}` : `show/${id}`} onClick={pathRouting}>
        <Container>
          <ImageContainer>
            <Image
              bgUrl={
                imageUrl ? `https://image.tmdb.org/t/p/w300${imageUrl}` : NoImg
              }
            />
            {/* {console.log(location)} */}
            {/* {console.log(history)} */}
            <Rating>
              <span role="img" aria-label="rating">
                💙
              </span>
              {""}
              {rating}/10
            </Rating>
          </ImageContainer>
          <Title>
            {title.length > 14 ? `${title.substring(0, 14)}...` : title}
          </Title>
          <Year>{year}</Year>
        </Container>
      </Link>

      // </Router>
    );
  }
);
Poster.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number,
  year: PropTypes.string,
  isMovie: PropTypes.bool,
};

export default Poster;

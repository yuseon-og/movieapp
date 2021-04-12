import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(max-content, 300px));
  grid-auto-rows: max-content;
  gap: 10px;
  margin: 20px 0px;
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
`;

const Production = ({ props }) => {
  // console.log(props.production_companies);
  return (
    <Container>
      {props.production_companies.length !== 0 ? (
        props.production_companies.map((company) => (
          <CoverContainer>
            {" "}
            <Cover
              bgImage={
                company.logo_path
                  ? `https://image.tmdb.org/t/p/original${company.logo_path}`
                  : require("../../../assets/nono.png").default
              }
            ></Cover>
            <Name>{company.name}</Name>
          </CoverContainer>
        ))
      ) : (
        <Alert>Nothing Found</Alert>
      )}
    </Container>
  );
};

Production.propTypes = {
  props: PropTypes.object,
};

export default Production;

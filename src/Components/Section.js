import React from "react";
import PropTypes from "prop-types";
import Styled from "styled-components";

const Container = Styled.div`
 :not(:last-child) {
    margin-bottom: 50px;
  }`;

const Title = Styled.span`
  font-size: 14px;
  font-weight: 600;`;

const Grid = Styled.div`
 margin-top: 25px;
 display:grid;
 grid-template-columns : repeat(auto-fill, 125px);
 grid-gap: 25px;`;

const Section = ({ title, children }) => (
  <Container>
    <Title>{title}</Title>
    <Grid>{children}</Grid>
  </Container>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Section;

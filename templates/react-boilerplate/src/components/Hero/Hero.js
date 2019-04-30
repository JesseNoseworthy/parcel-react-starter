import React from 'react';
import styled from 'styled-components';
import DATA from 'data/Hero'

const Wrapper = styled.section`padding: 140px 50px;`;
const Title = styled.h1``;
const Description = styled.p``;

function Hero() {
  const {title, description} = DATA;

  return (
    <Wrapper>
      {title && <Title>{title}</Title>}
      {description && <Description>{description}</Description>}
    </Wrapper>
  );
}

export default Hero;

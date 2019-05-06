import React from 'react';
import styled from 'styled-components';
import resource_strings from 'resource_strings/Hero'

const Wrapper = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;  
`;

const Image = styled.img`
  width: 400px;
  margin: 50px;
`;

const Title = styled.h1`margin-bottom: 25px;`;
const Description = styled.p``;

function Hero() {
  const {image, title, description} = resource_strings;

  return (
    <Wrapper>
      {image && <Image {...image} />}
      {title && <Title>{title}</Title>}
      {description && <Description>{description}</Description>}
    </Wrapper>
  );
}

export default Hero;

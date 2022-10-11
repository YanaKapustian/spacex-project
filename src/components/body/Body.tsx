import React from 'react';
import { Container, H1 } from '../../styledComponents/MainStyles';
import Carousel from './Carousel';

const Body: React.FC = () => {

  return (
    <div>
      <Container>
        <H1>Popular tours</H1>
        <Carousel></Carousel>
      </Container>
    </div>
  );
}

export default Body;
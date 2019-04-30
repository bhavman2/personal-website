import React from 'react';
import { Carousel } from 'react-bootstrap';

const ImageCarousel = (props) => {

  return (
    <Carousel>
      {props.imageUrls.map((url, i) => {
        return (
          <Carousel.Item
            key={i}>
            <img
              alt=""
              className="d-block w-100"
              src={`${url}`}
            />
          </Carousel.Item>)
      })}

    </Carousel>
  );
}

export default ImageCarousel;
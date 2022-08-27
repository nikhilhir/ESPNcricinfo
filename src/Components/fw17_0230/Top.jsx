import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
const Top = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA10YRXF.img?w=450&h=234&q=90&m=6&f=jpg&u=t"
          alt="First slide"
          height="350px"
          width="100px"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA10YW4z.img?w=450&h=234&q=90&m=6&f=jpg&x=412&y=152&u=t"
          alt="Second slide"
          height="350px"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.bing.com/th?id=ORMS.9bb6aab36ad6896d4c65e5dc9ad23c8b&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.5&p=0"
          alt="Third slide"
          height="350px"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Top;

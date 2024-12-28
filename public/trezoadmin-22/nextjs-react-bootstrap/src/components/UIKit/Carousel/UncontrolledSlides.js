"use client";

import { Card, Carousel } from "react-bootstrap";
import Image from "next/image";

const UncontrolledSlides = () => {
  return (
    <>
      <Card className="bg-white border-0 rounded-3 mb-4">
        <Card.Body className="p-4">
          <h4 className="fs-18 mb-4">Uncontrolled Slides</h4>

          <Carousel>
            <Carousel.Item>
              <Image
                src="/images/carousel-1.jpg"
                className="d-block w-100"
                alt="carousel"
                width={2000}
                height={1000}
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p className='text-white'>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <Image
                src="/images/carousel-2.jpg"
                className="d-block w-100"
                alt="carousel"
                width={2000}
                height={1000}
              />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Card.Body>
      </Card>
    </>
  );
};

export default UncontrolledSlides;

import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

function Discover() {
  return (

<div>
    <section id="discover">
        <Container fluid>
          <Row className="align-items-center">
            <Col md={6} className="order-md-2">
              <img
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80"
                alt="Location"
                className="img-fluid"
              />
            </Col>
            <Col md={6} className="order-md-1">
              <div className="intro">
                <h2>Discover Indore</h2>
                <p>
                  Discover the beauty and charm of Indore, a city rich in
                  history and culture. Immerse yourself in its vibrant street
                  markets, visit ancient temples and palaces, and savor the
                  local cuisine. Whether you're looking for adventure or
                  relaxation, Indore has something for everyone. Come and
                  experience the magic of this enchanting city
                </p>
                <Button variant="primary" href="#">
                  Learn More
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <div className="discoveryCarousel">
        <section>
          <Carousel fade>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://www.holidify.com/images/cmsuploads/compressed/shutterstock_430388851_20190920100607.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://www.holidify.com/images/bgImages/INDORE.jpg"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://www.holidify.com/images/bgImages/INDORE.jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://www.holidify.com/images/bgImages/INDORE.jpg"
                alt="Fourth slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://www.holidify.com/images/bgImages/INDORE.jpg"
                alt="Five slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://www.holidify.com/images/bgImages/INDORE.jpg"
                alt="Five slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://www.holidify.com/images/bgImages/INDORE.jpg"
                alt="Five slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </section>
      </div>
      <h1>Here You Can Find Your Best Places</h1>
      <section id="discover">
        <Container fluid>
          <Row className="align-items-center">
            <Col md={6} className="order-md-2">
              <img
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80"
                alt="Location"
                className="img-fluid"
              />
            </Col>
            <Col md={6} className="order-md-1">
              <div className="intro">
                <h2>Discover Indore</h2>
                <p>
                  Discover the beauty and charm of Indore, a city rich in
                  history and culture. Immerse yourself in its vibrant street
                  markets, visit ancient temples and palaces, and savor the
                  local cuisine. Whether you're looking for adventure or
                  relaxation, Indore has something for everyone. Come and
                  experience the magic of this enchanting city
                </p>
                <Button variant="primary" href="#">
                  Learn More
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      
    </div>
  );
}

export default Discover;

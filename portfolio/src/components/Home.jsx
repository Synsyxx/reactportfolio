import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button, Carousel } from 'react-bootstrap';
import './Home.css';


export default class Home extends Component {
    render() {
        return (
            <Grid>
                <Jumbotron>
                    <h2>Travis Simpson</h2>
                    <p>Full Stack JavaScript Developer</p>
               {/*} <Link to="/about">
                    <Button bsStyle="primary">About</Button>
                    </Link>  */}
                </Jumbotron>
                <Row className="show-grid text-center">
                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets/Toocool.jpg" circle className="profile-pic" />
                    </Col>
                    <Col xs={12} sm={4} className="projects-wrapper">
                    <Carousel>
                        <Carousel.Item>
                            <img width={900} height={500} alt="900x500" src="assets/Toocool.jpg" />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img width={900} height={500} alt="900x500" src="assets/tempfill2.jpeg" />
                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img width={900} height={500} alt="900x500" src="assets/tempfill3.jpeg" />
                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                    </Col>
                </Row>
            </Grid>
        )
    }
}
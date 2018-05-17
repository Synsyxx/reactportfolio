import React, { Component } from 'react'
import { Grid, Col, Image } from 'react-bootstrap';
import './About.css';


export default class Home extends Component {
    render() {
        return (
            <div>
                <Image src="assets/tempfill1.jpeg" className="header-image" />
                <Grid>
                    <Col xs={12} sm={8} smOffset={2}>
                        <Image src="assets/Toocool.jpg" className="about-profile-pic" rounded />
                        <h3>Travis The Developer</h3>
                        <p>Just some filler text here for now.</p>
                    </Col>
                </Grid>
            </div>
        )
    }
}
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

class ImageGallery extends Component {

    render() {
        return (
            <div>
                <Container>
                    Gallery Image
                    <Row>
                        <Col md={3}>
                            <Image src="https://en.wikiarquitectura.com/wp-content/uploads/2017/01/Moebius11.jpg" thumbnail />
                        </Col>
                        <Col md={3}>
                            <Image src="http://www.stangelascollege.ie/wp-content/uploads/2020/03/7572_20200226121912-171x180.jpeg" thumbnail />
                        </Col>
                        <Col md={3}>
                            <Image src="https://st3.cricketcountry.com//wp-content/uploads/2019/06/Sarfraz-Ahmed-Pakistan-World-Cup-2019-171x180.png" thumbnail />
                        </Col>

                        <Col md={3}>
                            <img src="https://en.wikiarquitectura.com/wp-content/uploads/2017/01/Moebius11.jpg" thumbnail />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default ImageGallery;
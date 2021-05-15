import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
//import { run as runHolder } from 'holderjs/holder';


class GallerySlider extends Component {

  render() {

    return <Carousel fade>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://www.revv.co.in/blogs/wp-content/uploads/2020/05/Road-Trip-from-Visakhapatnam-to-Nallamala-Hills-800x400.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.sleepzone.ie/uploads/images/PanelImages800x400/TheBurren/General/sleepzone_hostels_burren_800x400_14.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Aaditya.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.axelhotels.com/idb/7891/raul_cacho_oses_wxem_o1RMWs_unsplash-800x400.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  }
}
export default GallerySlider;
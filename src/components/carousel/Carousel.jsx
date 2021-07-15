import Slider from "react-slick";
import React, { Component } from "react";


export default class Carousel extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {

    if (!this.props.images) {
      return <p></p>
    }

    return (
      <div className="mb-4">
        <h2 className='news-image mb-4'>Xəbər haqqında digər şəkillər</h2>
        {/* <h4>First Slider</h4> */}
        <Slider
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
          arrows={false}
        >

          {this.props.images.map((image, index) => (
            <div class='carousel-image' key={index}>
              <img src={`${this.props.imgUrl}${image.image}`} />
              {/* <h1>Test 1</h1> */}
            </div>
          ))}

        </Slider>
        <br/>
        <Slider
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={4}
          swipeToSlide={true}
          focusOnSelect={true}
        >
          {this.props.images.map((image, index) => (
            <div className='carousel-image_nav' key={index}>
              <img src={`${this.props.imgUrl}${image.image}`} />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
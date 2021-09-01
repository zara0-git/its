import React from "react";
import Slider from "react-slick/lib/";
import Article from "./Article";
import "./Carousel4.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function News(props) {
  var data = props.data;
  var newsTemplate;
  var settings = {
    speed: 100,
    arrows: false,
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  if (data.length > 0) {
    newsTemplate = data.map(function (item, index) {
      return (
        <div key={index}>
          <Article data={item} />
        </div>
      );
    });
  } else {
    newsTemplate = <p>Please add some cards</p>;
  }

  return (
    <div className="news">
      <Slider {...settings}>{newsTemplate}</Slider>
    </div>
  );
}

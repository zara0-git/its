import React from "react";

import "./Carousel4.css";
import { Link } from "react-router-dom";
export default function Article(props) {
  var image = props.data.img[0],
    title = props.data.title,
    id = props.data.id;

  return (
    <figure className="snip1584">
      <div style={{ height: "250px", overflow: "hidden" }}>
        <img src={image} width="100%" height="100%" objectFit="cover" />
      </div>{" "}
      <Link style={{ color: "white" }} to={id ? "/home/month-news/" + id : "#"}>
        <figcaption>
          <h5>{title.length < 40 ? title : title.substr(0, 39) + " . . ."}</h5>
          <h6> Үзэх</h6>
        </figcaption>
      </Link>
    </figure>
  );
}

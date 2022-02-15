import React from "react";
import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImage"
        src="https://images.pexels.com/photos/7565956/pexels-photo-7565956.jpeg?cs=srgb&dl=pexels-martin-de-arriba-7565956.jpg&fm=jpg"
        alt=""
      />
    </div>
  );
}

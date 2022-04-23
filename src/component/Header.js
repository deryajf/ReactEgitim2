import react, { useState } from "react";
import "./component.css";

export default function Header(props) {
  return (
    <>
      <div className="header">Header {props.count} </div>
    </>
  );
}

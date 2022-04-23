import react from "react";
import "./component.css";


export default function Footer(props) {
  return (
      <>
    <div className="header">
      Footer
      <button onClick={() => props.setCount(props.count + 1)}> button</button>
    </div>
    </>
  );
}

import react, { Component } from "react";
import Button from "./Button";

export default class Content extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <>
        <div className="content">
          Content {this.state.count}{" "}
          <button
            onClick={() => this.setState({ count: this.state.count + 1 })}
          >
            Arttır
          </button>
        </div>
        <Button
          className1="yeni"
          Butonlar="gjfjg"
          name="Arttır"
          derya={() => this.setState({ count: this.state.count + 1 })}
         className="Button1"
         style=""
          
        />
        <Button name="dsfo" derya={() => alert("HATA!!")} style="footer" />
      </>
    );
  }
}

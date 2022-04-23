import logo from "./pofis.jfif";
import "./App.css";
import react, { useState } from "react";
import Header from "./component/Header";
import Content from "./component/Content";
import Footer from "./component/Footer";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="App">
        <Header count={count}></Header>
        <Content />
        <Footer setCount={setCount} count={count} />
      </div>
    </>
  );
}

export default App;

import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";
function App() {
  const [color, setColor] = useState("#f15025");
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const submitHandler = (e) => {
    try {
      const colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
    e.preventDefault();
    setColor(e.target.value);
  };
  return (
    <>
      <section className="container">
        <h4>color generator</h4>
        <form className="color-form" onSubmit={submitHandler}>
          <input
            className={`${error ? "error" : null}`}
            type="text"
            value={color}
            placeholder="#f15025"
            onChange={(e) => {
              setColor(e.target.value);
            }}
          />
          <button className="btn" type="submit">
            submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          return <SingleColor key={index} index={index} {...color} />;
        })}
      </section>
    </>
  );
}

export default App;

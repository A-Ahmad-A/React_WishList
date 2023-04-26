import React, { useState } from "react";
import "./itemform.css";
import Button from "react-bootstrap/Button";

const Itemform = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredPriorty, setEnteredPriority] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const priortyChangeHandler = (event) => {
    setEnteredPriority(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (enteredPriorty && enteredTitle !== "") {
      console.log("ENTEreD");
      const itemdata = {
        itemName: enteredTitle,
        Priority: enteredPriorty,
      };

      props.additem(itemdata);

      setEnteredTitle("");
      setEnteredPriority("");
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="main">
        <div style={{ marginLeft: "300px" }}>
          <div className="items">
            <label>Item : </label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>

          <div className="items">
            <label>Priority : </label>
            <input
              type="number"
              min="1"
              step="1"
              max="5"
              value={enteredPriorty}
              onChange={priortyChangeHandler}
            />
          </div>

          <div>
          <Button className="formButton" type="submit" variant="primary">Add Items</Button>{" "}
          </div>
        </div>
      </div>
    </form>
  );
};

export default Itemform;

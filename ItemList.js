import React from "react";
import "./ListItems.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";

const ItemList = (props) => {
  const [enteredPriorty, setEnteredPriority] = useState("");

  const [PriortyID, setPriorityID] = useState("");

  const MoveToTop_Handler = (event) => {
    const id = event.target.value;
    props.OnMove(id);
  };

  const DeleteItemHandler = (event) => {
    const id = event.target.value;
    props.OnDelete(id);
  };

  const priortyChangeHandler = (event) => {
    setEnteredPriority(event.target.value);
    setPriorityID(event.target.id);
  };

  const updatePriority = (event) => {
    props.OnUpdatePriority(PriortyID, enteredPriorty);
  };
  return (
    <div className="ListItems">
      <div className="itemDetails">
        <label> Item: {props.Name} </label>
        <label> Priority: {props.Priority}</label>
      </div>

      <div className="ItemButtons">
        <Button value={props.ID} onClick={DeleteItemHandler} variant="danger">
          Delete
        </Button>{" "}
        <Button value={props.ID} onClick={MoveToTop_Handler} variant="success">
          Move To Top
        </Button>{" "}
        <div className="InputField">
          <label>Priority : </label>
          <input
            
            id={props.ID}
            type="number"
            min="1"
            step="1"
            max="5"
            value={enteredPriorty}
            onChange={priortyChangeHandler}
          />
        </div>
        <Button variant="info" onClick={updatePriority}>
          Update_Priority
        </Button>{" "}
      </div>
    </div>
  );
};

export default ItemList;

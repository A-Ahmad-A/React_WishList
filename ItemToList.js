import React from "react";
import FilteredList from "./FilteredList";
import "./itemToList.css";

const ItemToList = (props) => {
  const DeleteHandler = (data) => {
    props.OnDelete(data);
  };

  const MoveHandler = (data) => {
    props.OnMove(data);
  };

  const UpdatePriority = (PriorityID, enteredPriorty) => {
    props.OnUpdatePriority(PriorityID, enteredPriorty);
  };

  if (props.items.length === 0) {
    return (
      <div className="NoData">
        {" "}
        <label>NO ITEMS ADDED YET</label>
      </div>
    );
  }

  return (
    <div>
      <FilteredList
        Update_P={UpdatePriority}
        OnMove={MoveHandler}
        OnDelete={DeleteHandler}
        items={props.items}
      />
    </div>
  );
};

export default ItemToList;

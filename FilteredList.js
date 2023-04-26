import React from "react";
import ItemList from "./ItemList";

const FilteredList = (props) => {
  const DeleteItemHandler_ID = (data) => {
    props.OnDelete(data);
  };

  const OnMove_ = (Id) => {
    props.OnMove(Id);
  };
  const UpdatePriority = (priority, enteredPriorty) => {
    props.Update_P(priority, enteredPriorty);
  };
  return (
    <div>
      <li>
        {props.items.map((data) => (
          <ItemList
            OnUpdatePriority={UpdatePriority}
            OnMove={OnMove_}
            OnDelete={DeleteItemHandler_ID}
            key={data.id}
            Name={data.itemName}
            Priority={data.Priority}
            ID={data.id}
          />
        ))}
      </li>
    </div>
  );
};

export default FilteredList;

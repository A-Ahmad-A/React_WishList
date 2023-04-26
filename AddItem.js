import React, { useState } from 'react';
import Itemform from './Itemform'


const AddItem = (props) => {

  const add_items = (itemdata) => {
    const item_data = {
      ...itemdata , 
      id : Math.random().toString() , 
    }

    props.additem(item_data);
    // console.log(item_data.itemName);
    // console.log(item_data.Priority);
    // console.log(item_data.id);
    
  }

  return (

    <div>
        <Itemform additem = {add_items}/>
    </div>
  );
};

export default AddItem;

import Card from "../../Components/UI/Card";
import RemovedTodo from "./RemovedTodo";
import Modal from "../../Components/UI/Modal";
import React from "react";
const RemovedTodoList = (props) => {
  //console.log(props);
  const removedItems = props.removedList.map((todo) => (
    <RemovedTodo key={todo.id} activity={todo.activity} />
  ));
  // const solo = <RemovedTodo activity={props.removedList[0].activity}/>
  // console.log(solo)
  //console.log(removedItems)


  return (
    <Modal closeCompletedList={props.closeCompletedList}>
    <Card>
        <ul>{removedItems}</ul>
        <button onClick={props.closeCompletedList}>Close</button>
        <button onClick={props.removeCompletedList}>Clear All</button>
      </Card> 
  
    </Modal>
  
  );
};

export default React.memo(RemovedTodoList);

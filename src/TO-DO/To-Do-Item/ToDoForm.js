import { Fragment } from "react";
import { useRef } from "react";

const TodoForm = (props) => {
  const userInputRef = useRef();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const activity = userInputRef.current.value;
props.addTodo(activity);
    //console.log(activity);
    userInputRef.current.value = "";
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <label htmlFor="#activity">Enter the activity</label>
      <textarea id="activity" ref={userInputRef} />

      <button>Submit</button>
    </form>
  );
};

export default TodoForm;

import { Fragment } from "react";
import classes from'./NavBar.module.css'




const NavBar = (props) => {

const onAddTodoHandler = () =>{
  props.maintainForm();
}

const onViewRemovedHandler = () =>{
  props.onShowCompletedHandler();
}


  return (
    <div className={classes.header}>
      <div>TO-DO APP</div>
      <div>
        <button  className={classes['button--alt']} onClick={onAddTodoHandler}>ADD NEW TO-DO</button>
      </div>

      <div>
        <button  className={classes['button--alt']} onClick={onViewRemovedHandler}>Completed Task</button>
      </div>
    </div>
  );
};

export default NavBar;
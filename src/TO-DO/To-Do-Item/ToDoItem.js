import classes from './ToDoitem.module.css'


const ToDoItem = (props) =>{
    
const onClickHandler = () => {

    props.removeTodo({id:props.id,
        activity:props.activity
    
    })
}

return(<li className={classes.todo}>
    <div>
    <p className={classes.description}>{props.activity}</p>
    <button onClick={onClickHandler}>Completed</button>
    </div>

</li>)

}

export default ToDoItem;
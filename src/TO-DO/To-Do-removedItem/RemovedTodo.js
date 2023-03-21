import classes from './RemoveTodo.module.css'


const RemovedTodo = (props) =>{
//console.log(props)
    return(<li className={classes.todo}>
        <div>
        <p className={classes.description}>{props.activity}</p>
        </div>
    
    </li>)
}

export default RemovedTodo;
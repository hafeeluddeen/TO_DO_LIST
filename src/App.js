import { Fragment, useState, useEffect } from "react";
import NavBar from "./Components/Layout/NavBar";
import TodoList from "./TO-DO/TodoList";
import TodoForm from "./TO-DO/To-Do-Item/ToDoForm";
import RemovedTodoList from "./TO-DO/To-Do-removedItem/RemovedTodoList";
import Modal from "./Components/UI/Modal";
/*const todos = [
  {
    id: Math.random() + 9,
    activity: "go outside and play",
  },

  {
    id: Math.random() + 1,
    activity: "need to go to school",
  },

  {
    id: Math.random() + 7,
    activity: "Do homework",
  },
];  */

function App() {
  const [isForm, setForm] = useState(true);
  const [todos, settodos] = useState([]);
  const [completedList, setcompletedList] = useState([]);
  const [showCompleted, setshowCompleted] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://to-do-ea86e-default-rtdb.firebaseio.com/tasks.json"
      );
      const responseData = await response.json();
//console.log("m2")
      const loadedTask = [];

      for (const key in responseData) {
        loadedTask.push({
          id: key,
          activity: responseData[key].task,
        });
        //console.log(loadedTask)
      }

      settodos(loadedTask);
    };

    fetchData();
  }, [todos]);

  useEffect(()=>{
const fetchData = async () =>{

  const response = await fetch('https://to-do-ea86e-default-rtdb.firebaseio.com/completedtasks.json')
  const responseData = await response.json();
console.log("main",responseData)
  const CompletedTasks = [];
  for(const key in responseData)
  {
    CompletedTasks.push({
    
      activity:responseData[key].task
    })
  }
console.log(CompletedTasks)
  setcompletedList(CompletedTasks)
}
fetchData();
},[completedList])

  const maintainForm = () => {
    setForm((prev) => !prev);
  };

  const addTodo = (data) => {
    fetch("https://to-do-ea86e-default-rtdb.firebaseio.com/tasks.json", {
      method: "POST",
      body: JSON.stringify({
        // id: Math.random() + 1,
        task: data,
      }),
    });
    /*settodos((prev) => {
      return [...prev, { id: Math.random() + 1, activity: data }];
    });*/
  };

  const removeTodo = (data) => {
    //console.log(todos)
    console.log("data in here",data);
    const deletedAct = todos.filter((todo) => todo.id === data.id);

    fetch(
      "https://to-do-ea86e-default-rtdb.firebaseio.com/completedtasks.json",
      {
        method: "POST",
        body: JSON.stringify({
          // id: Math.random() + 1,
          task: data.activity,
        }),
      }
    );

    fetch(
      `https://to-do-ea86e-default-rtdb.firebaseio.com/tasks/${data.id}.json`,
      {
        method: "Delete",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log(deletedAct);

    // setcompletedList((prev) => {
    //   return [...prev, ...deletedAct];
    // });

    /* settodos((prev) => {
      return prev.filter((todo) => todo.id !== data.id);
    });*/
    //console.log(data)
  };

  const onShowCompletedHandler = () => {
    setshowCompleted((prev) => !prev);
  };

  const removeCompletedList = async () =>{
await fetch( "https://to-do-ea86e-default-rtdb.firebaseio.com/completedtasks.json",{
  method:"Delete"
})
  }

  return (
    <Fragment>
      <header>
        <NavBar
          maintainForm={maintainForm}
          onShowCompletedHandler={onShowCompletedHandler}
        />
      </header>

      <main>
        <TodoList todos={todos} removeTodo={removeTodo} />
        {isForm && <TodoForm addTodo={addTodo} />}
      </main>
      {showCompleted && (
        <RemovedTodoList
          removedList={completedList}
          closeCompletedList={onShowCompletedHandler}
          removeCompletedList={removeCompletedList}
        />
      )}
    </Fragment>
  );
}

export default App;

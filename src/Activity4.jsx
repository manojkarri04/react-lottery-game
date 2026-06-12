import {useState} from "react";
export default function MyTodo()
{
   const [todos, setTodos] = useState(["sample-text"]);
   const [newTodo , setNewTodo] = useState("");

    // list = ["manoj"];
        const addNewTask = () => {
            setTodos([...todos ,event.target.value]);
            setNewTodo("");
        };

        const UpdateTodo = (event) => {
            setNewTodo(event.target.value);
        };
    
        const DeleteTodo = (id) => {
            setTodos(todos.filter((todo , currentIndex) => {
                return currentIndex !== id;
            }));
        };

        const UpperCase = () => {
            setTodos((prevTodos) => {
                return prevTodos.map((todo) => {
                    return todo.toUpperCase();
                });
            });
        };
        // console.log(newArr);

        const UpperCase_One = (id) => {
            setTodos(todos.map((todo , currentIndex) => {
                    if (id == currentIndex){
                        return todo.toUpperCase();
                    }
                    return todo;
            }));
        };

        const MarkAsDone = (id) => {
            setTodos(todos.map((todo , currentIndex) => {
                    if (id == currentIndex){
                        return <p style = {{textDecoration: "line-through"}}>
                           {todo}
                        </p>;
                    }
                    return todo;
            }));
        };

    return (
        <div>
            {/* Changed to a self-closing tag */}
            <input placeholder="enter your next task" value = {newTodo} onChange = {UpdateTodo} /> 
            <button onClick={addNewTask} value = {newTodo} >Add Task</button>
            <ul>
                {
                    todos.map((todo, index) => {
                        return <li key={index}>
                             {todo}
                             <button onClick = {() => DeleteTodo(index)}>Delete</button>
                             <button onClick = {() => UpperCase_One(index)}>UpperCaseOne</button>
                             <button onClick = {() => MarkAsDone(index)}>MarkAsDone</button>
                            </li>;
                    })
                }
            </ul>
            <button onClick = {() => UpperCase()}>UpperCase_All </button>
        </div>
    );
};
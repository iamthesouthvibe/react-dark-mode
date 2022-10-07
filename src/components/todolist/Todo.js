import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { useState } from 'react'; // Hook

function Todo() {

    // Data
    const [todo, setTodo] = useState('');
    const [todoList, setTodoList] = useState([]);

    // Vue
    return (
        <div className="container">
            <TodoForm
                todo={todo}
                setTodo={setTodo}
                todoList={todoList}
                setTodoList={setTodoList}
            />
            <TodoList todoList={todoList} setTodoList={setTodoList} />

        </div>
    )
}


export default Todo;
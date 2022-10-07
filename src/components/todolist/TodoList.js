import TodoListItem from "./TodoListItem";

function TodoList({ todoList, setTodoList }) {
    // Vue
    return (
        <div>
            {todoList.map((listItem) => (
                <TodoListItem
                    todoList={todoList}
                    setTodoList={setTodoList}
                    listItem={listItem}
                    key={listItem.id}
                    name={listItem.name}
                />
            ))}

        </div>
    )
}


export default TodoList;
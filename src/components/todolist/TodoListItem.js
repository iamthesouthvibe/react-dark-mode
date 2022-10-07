import { Button } from 'react-bootstrap';

const itemStyle = {
    backgroundColor: "#dddddd",
    padding: "3px",
    margin: "5px"
}

const itemNameStyle = {
    color: 'grey'
}

function TodoListItem({ listItem, todoList, setTodoList }) {

    const deleteTodoItem = () => {
        setTodoList(todoList.filter(item => item.id !== listItem.id))
    }
    return (
        <div style={itemStyle}>
            <h5 style={itemNameStyle} id={listItem.id}>{listItem.name}</h5>
            <Button onClick={deleteTodoItem} variant="danger">Done</Button>
        </div>
    )
}

export default TodoListItem

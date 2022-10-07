import { nanoid } from 'nanoid';
import { Button, Form } from 'react-bootstrap';

function TodoForm({ todo, setTodo, todoList, setTodoList }) {

    // Fonctions
    const handleChange = (event) => {
        setTodo(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setTodoList([...todoList, { name: todo, id: nanoid() }]);
        setTodo('');
    }

    // Vue
    return (
        <div className="container">
            <h3>Ajouter une nouvelle task : </h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Control type="text" onChange={handleChange} />
                </Form.Group>
                <Button variant="primary" type="submit">Ajouter</Button>
            </Form>
        </div>
    )
}


export default TodoForm;
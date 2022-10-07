import { Component } from "react";
import { Button, Form } from 'react-bootstrap';

class Exemple4 extends Component {

    // Constructeur
    constructor() {
        super()
        this.state = {
            userName: ''
        };
    }

    // Fonctions
    handleChange(event) {
        this.setState({
            userName: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        alert('Bonjour :' + this.state.userName)
    }

    // Vue
    render() {
        return (
            <div>
                <h2>Formulaire</h2>
                <Form onSubmit={(event) => this.handleSubmit(event)}>
                    <Form.Label className="formLabel">Votre nom :</Form.Label>
                    <Form.Control type="text" value={this.state.userName} onChange={(event) => this.handleChange(event)} />
                    <Button variant='primary' type="submit">Submit</Button>
                </Form>
            </div>
        )
    }

}

export default Exemple4;
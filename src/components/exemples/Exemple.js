import { Component } from "react";
import { Button } from 'react-bootstrap';

class Exemple extends Component {

    // Contructor
    constructor() {
        super()
        this.state = {
            compteur: 0
        }
    }

    // Fonctions
    increment() {
        this.setState({
            compteur: this.state.compteur + 1
        })
    }

    // Vue
    render() {
        return (
            <div>
                <h2>Compteur</h2>
                <p>{this.state.compteur}</p>
                <Button variant="primary" onClick={() => this.increment()}>Click</Button>
            </div>

        )
    }
}

export default Exemple;
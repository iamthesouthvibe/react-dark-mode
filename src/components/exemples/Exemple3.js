import { Component } from "react";
import { Button } from 'react-bootstrap';

class Exemple3 extends Component {

    constructor() {
        super()
        this.state = {
            isToggle: true
        };
    }

    handleClick() {
        this.setState({
            isToggle: !this.state.isToggle
        })
    }

    render() {
        return (
            <div>
                <h4>Le toggle</h4>
                <Button variant="primary" onClick={() => this.handleClick()}>{this.state.isToggle ? 'ON' : 'OFF'}</Button>
            </div>
        )
    }

}

export default Exemple3;
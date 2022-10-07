import { Component } from "react";

class Exemple2 extends Component {

    constructor() {
        super()
        this.state = {
            date: new Date()
        };
    }




    // Le composent est monté
    componentDidMount() {
        this.timer = setInterval(
            () => this.tick(),
            1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
            <div>
                <h3>L'horloge</h3>
                <p>{this.state.date.toLocaleTimeString()}</p>
            </div>
        )
    }
}

export default Exemple2;
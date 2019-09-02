import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            parentName: 'Parent',
            count: 0
        }
        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(child) {
        alert(`hello ${this.state.parentName} from ${child}`)
    }

    increament() {
         this.setState({
             count: this.state.count + 1
            })   
    }

    decrement(){
        this.setState({
            count: this.state.count - 1
        })
    }
    render() {
        return (
            // <div>
            //     <ChildComponent greetHandler = {this.greetParent}/>
            // </div>
            <div>
                <h3>Count: {this.state.count}</h3>
                <button onClick={() => this.increament()}>Increment</button>
                <button onClick={() => this.decrement()}>Decrement</button>
            </div>

        )
    }
}

export default ParentComponent

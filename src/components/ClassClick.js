import React, { Component } from 'react'

class ClassClick extends Component {
    classClick(){
        console.log("Class click")
    }
    render() {
        return (
            <div>
                <button onClick={this.classClick}>Class button click</button>
            </div>
        )
    }
}

export default ClassClick
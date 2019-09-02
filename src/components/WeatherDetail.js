import React, { Component } from 'react'

// function WeatherDetail(){
//     return <h1>Weather Detail</h1> 
// }

//const WeatherDetail = () => <h1> Weather Detail</h1>

class WeatherDetail extends Component {
    constructor() {
        super()
        this.state = {
            message: 'Thats my city '
        }
    }

    changeState() {
        this.setState({
            message: 'Yo thats correct, '
        })
    }
    render() {
        const { city, children } = this.props
        return <div>
            <h1>
                {city} Weather Detail
            </h1>

            <h2>
                {children}
            </h2>

            <h3> {this.state.message} {city}</h3>
            <button onClick={() => this.changeState()}>My Button</button>
        </div>
    }
}
export default WeatherDetail
import React, { Component } from 'react'


class WeatherInfoComponent extends Component {
    state = {
        loading: true,
        weatherInfo: null
    }

    async componentDidMount() {
        const requestParam = { q: "Pune", appId: "d61384f0132bf883329306f506486aee", units: "metric" }
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(requestParam.q)}&appId=${encodeURIComponent(requestParam.appId)}&units=${encodeURIComponent(requestParam.units)}`
        let response = await fetch(url)
        response.json().then((resp) => {
            this.setState({ weatherInfo: resp })
            this.setState({ loading: false })
        })


    }

    render() {
        return (
            <div>
        
                {this.state.loading ? <div>Loading..</div> :
                    this.state.weatherInfo ?
                        <div>
                            <h1> {this.state.weatherInfo.name}</h1>
                            <h3>Temp : {this.state.weatherInfo.main.temp}</h3>
                            <h3>Humidity : {this.state.weatherInfo.main.humidity}</h3>
                            <h3>Wind Speed : {this.state.weatherInfo.wind.speed}</h3>

                        </div>

                        : <h1> No data found</h1>
                }
            </div>
        )
    }
}

export default WeatherInfoComponent

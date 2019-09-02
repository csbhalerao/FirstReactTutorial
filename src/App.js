import React, { Component } from 'react';
import logo, { ReactComponent } from './logo.svg';
import './App.css';
import WeatherDetail from './components/WeatherDetail'
import Hello from './components/Hello'
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import ParentComponent from './components/ParentComponent';
import WeatherInfoComponent from './components/WeatherInfoComponent';

class App extends Component{
   render() {
      return <div className="App">
        {/* <WeatherDetail city='Bangalore'>  
          <p>namma Bangalore</p>
        </WeatherDetail>
        <Hello city='Pune'/>
        <ParentComponent/>   */}

        {/* <FunctionClick/>
        <ClassClick/> */}
        <WeatherInfoComponent/>
        

    </div>    
  }
}

export default App;

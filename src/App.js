import React, { Component } from "react"

import './App.css';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedMenu: 'p',
      temp: ''
    }
    this.fetchData = this.fetchData.bind(this);
  }

  fetchData() {
        fetch("https://api.openweathermap.org/data/2.5/weather?zip=B3H,ca&appid=ca98bef8d8fbfb7f04cbe1e1cfc0ac63")
            .then(response => {
                return response.json()
            })
            .then(response => {
                // console.log(response);
                this.setState({
                    temp: response.main.temp - 273.15,
                })
            });
    }

  componentDidMount() {
        this.fetchData()
    }

  render() {
    return (
      <div className="App">

        <div className="menu">
          <h1 className="menu-item" onClick={() => this.setState({ selectedMenu: 'p' })}>About me</h1>
          <h1 className="menu-item" onClick={() => this.setState({ selectedMenu: 't' })}>My town</h1>
        </div>

        {this.state.selectedMenu === 'p' ?
          <div>
          <h1>Hi, I'm Harsh</h1>
          <h2>I am studying at Saint Mary's University.</h2>
          <h2>I have joined MCDA because I wanted to have an deep understanding of data analytics. </h2>
          </div>
          :
          <div>
          <img width={500} src="https://lp-cms-production.imgix.net/image_browser/Halifax_Free_Waterfront.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850&q=75&dpr=1" />
          
          <h1>I live in Halifax, NS.</h1>
          <h2>Halifax is a city situated on the East Coast of Canada in the Maritime province of Nova Scotia.</h2>
          
          {this.state.temp >= 20 ?

            <img width={100} src="https://raw.githubusercontent.com/simonachkar/react-mcda5510/main/assignment/assets/sunny.png" />
            :
            this.state.temp <= 10 ?
            <img width={100} src="https://raw.githubusercontent.com/simonachkar/react-mcda5510/main/assignment/assets/cold.png" />
            :
            <img width={100} src="https://raw.githubusercontent.com/simonachkar/react-mcda5510/main/assignment/assets/mild.png" />
          }
          <h1>{Math.round((this.state.temp) * 100) / 100} °C</h1>
          </div>
        }
      </div>
    );
  }
}


export default App;
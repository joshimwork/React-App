import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
	
	state = {
		name: 'John Doe',
		age: 25
	}

	changeName = (event) => {
		this.setState({
			name: event.target.value
		})
		};

  render() {
    return (
		<div className="App">
			<h2>App Heading</h2>
			<input type='text' onChange={this.changeName} value={this.state.name}/>
			<h4>Input Name: {this.state.name}</h4>

			<Person />

		</div>
    	)
  }
}

export default App;

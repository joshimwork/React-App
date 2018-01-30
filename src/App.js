import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
	state = {
		person: [
			{ name : 'John', age: 24 },
			{ name: 'jake', age: 23 },
			{ name: 'Adam', age: 26 }
		]
	}

	changeNames = (newName) => {
		// console.log('Was Clicked! ')
		this.setState({
			person: [
			{ name : newName, age: 24 },
			{ name: 'Jaky leonardo', age: 23 },
			{ name: 'Roman Reainge', age: 26 }
		]
		});
	}
  render() {
    return (
		<div className="App">
			<h2>App Heading</h2>
		{/* <Person name='John' age='25' /> for comment in JSX need wraped in curly braces
			<Person name='jake' age='28' />
			<Person name='Adam' age='22' > My Hobbies: Traveling </Person>  */}
				
		{/*	<Person name={this.state.person[0].name} age={this.state.person[0].age } />
			<Person name={ this.state.person[1].name} age={this.state.person[1].age } />  */}

		{/*	<button onClick={this.changeNames}>Switch</button>
			<Person name={this.state.person[0].name} age={this.state.person[0].age } />
			<Person name={ this.state.person[1].name} age={this.state.person[1].age } />  */}
						
						{/* we should use onClick insted of onclick in react*/}
						{/* we should not use this.changeNames() in react*/}
			<button onClick={this.changeNames.bind(this, 'New Name')}>Switch</button>

			<Person name={this.state.person[0].name} age={this.state.person[0].age } />
			<Person name={ this.state.person[1].name} age={this.state.person[1].age } />
			<Person click={ this.changeNames.bind(this, 'Another Name') } name={ this.state.person[2].name} age={this.state.person[2].age }> I also have hobbies: </Person> 

		</div>
    	)
  }
}

export default App;

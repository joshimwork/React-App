import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
	state = {
		showDiv: false
	}

	toggleShow = () => {
		const doesShow = this.state.showDiv;
		this.setState({
			showDiv: !doesShow
		})
	}

  render() {

  	let personDiv = null;
  	if(this.state.showDiv){
  		personDiv = (
			<div>
				<Person />
			</div> 
  			)
  		}
    return (
		<div className="App">
			<h2>App Heading</h2>
			<button onClick = {this.toggleShow}>Show / Hide</button>
			{personDiv}
			
				
		</div>
    	)
  }
}

export default App;

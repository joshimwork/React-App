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
    return (
		<div className="App">
			<h2>App Heading</h2>
			<button onClick = {this.toggleShow}>Show / Hide</button>
			
			{ this.state.showDiv ?

				<div>
					<Person />
				</div> : null
			}
		</div>
    	)
  }
}

export default App;

import React, { Component } from 'react';
import Graph from './Graph';
import Controls from './Controls';

class Main extends Component {
	render() {
		return (
			<main>
				<h1>Cool Shapes</h1>
				<Controls />
				<Graph />
			</main>
		);
	}
}

export default Main;

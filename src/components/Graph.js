import React, { Component } from 'react';

class Graph extends Component {
    getGrid() {
        const xAxisSize = 5;
        const yAxisSize = 5;
        const numCells = xAxisSize * yAxisSize * 4;
        //const xCellWidth = 
        const cells = [];
        for (let i = 1; i <= numCells; i++) {
            cells.push({ num: i });
        }
        return cells.map(({ num }) => {
            const styles = { width: `${(1 / (xAxisSize * 2)) * 100}%`, height: `${(1 / (yAxisSize * 2)) * 100}%` };
            if (num % xAxisSize === 0 && num % (xAxisSize * 2) !== 0) {
                return <div key={num} className="cell rightBorder" style={styles}></div>;
            }
            if (num % xAxisSize === 1 && num % (xAxisSize * 2) !== 1) {
                return <div key={num} className="cell leftBorder" style={styles}></div>
            }
            // if (totalCells % 2 === num) {
            //     return <div key={num} className="cell bottomBorder"></div>
            // }
            // if (totalCells % num === 1) {
            //     return <div key={num} className="cell topBorder"></div>
            // }
            return <div key={num} className="cell" style={styles} />;
        });
    }
	render() {
		return (
			<section className='graph'>
				{this.getGrid()}
			</section>
		);
	}
}

export default Graph;

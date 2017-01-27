import React, { Component } from 'react';

class Graph extends Component {
    getGrid() {
        const xAxisSize = 5;
        const yAxisSize = 5;
        const numCells = xAxisSize * yAxisSize * 4;
        const cells = [];
        for (let i = 1; i <= numCells; i++) {
            cells.push({ num: i });
        }
        return cells.map(({ num }) => {
            const inlineStyle = {
                width: `${(1 / (xAxisSize * 2)) * 100}%`,
                height: `${(1 / (yAxisSize * 2)) * 100}%`
            };

            let cssStyle = 'cell';

            if (num % xAxisSize === 0 && num % (xAxisSize * 2) !== 0) {
                cssStyle += ' rightBorder';
            }
            if (num % xAxisSize === 1 && num % (xAxisSize * 2) !== 1) {
                cssStyle += ' leftBorder';
            }
            const halfCells = numCells / 2;
            if (num <= halfCells && (num > halfCells - (xAxisSize * 2))) {
                cssStyle += ' bottomBorder';
            }
            if (num > halfCells && (num <= halfCells + (xAxisSize * 2))) {
                cssStyle += ' topBorder';
            }
            return <div key={num} className={cssStyle} style={inlineStyle}>{num}<span className="dot" /></div>;
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

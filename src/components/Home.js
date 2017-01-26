import React from 'react';

const Home = ({ children }) => {
	return (
		<div className="site">
			<div className="content">
				{children}
			</div>
		</div>
	);
};

export default Home;

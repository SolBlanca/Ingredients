import React from 'react';

class Button extends React.Component
{
	render() 
	{
		var styles = {
			
		};

		var classes = [
			'Button'
		];

		return (
			<button className={classes} style={styles}>Download Data</button>
		);
	}
}

export default Button;
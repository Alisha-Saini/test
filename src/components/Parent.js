import React from "react";
import Child from './Child';
import PropTypes from 'prop-types';

function Parent(props) {

	return (
		<div className="Parent">
		Parent
		<Child desc="my child component"/>
		</div>
	);
              
}



export default Parent;

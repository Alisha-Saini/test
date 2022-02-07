import React from "react";

import PropTypes from 'prop-types';

function Child(props) {

	return (
		<div className="Child">
		{props.desc}
		</div>
	);
              
}



export default Child;

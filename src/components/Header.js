
import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
//import users from './data.json';
import axios from "axios";

const url = "https://reqres.in/api/users?page=2";
function Header(props) {
	const [posts, setPost] = useState([]);
	React.useEffect(() => {
    axios.get(url).then((response) => {
      setPost(response.data);
    });
  }, []);
	console.log(posts);
	return (
		<div className="Header">
		<h1> {props.headtitle} </h1> 
		
		</div>
	);
              
}



export default Header;

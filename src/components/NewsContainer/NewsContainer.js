import React from 'react';
import './NewsContainer.css'
// import App from './components/App/App';

// NEWSCONTAINER COMPONENT CODE GOES HERE

const NewsContainer = (item) => {
	console.log('hello hunter')
   return (
   	<div id="box">
   	  <img src={item.img} />
   	  <li>{item.headline}</li>
   	</div>
   	)
}



export default NewsContainer;
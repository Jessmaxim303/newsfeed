import React from 'react';
import './Menu.css'

// MENU COMPONENT CODE GOES HERE
const Menu = (props) => {

	return (
    <article className="menu_container">
      <h1 className="menu_title-text" >WHATS NEWS</h1>
      <div className="menu_link-box" >
        <button id="local" className="news_button" onClick={props.filterNewsType} > Local News </button>
        <button id="technology" className="news_button" onClick={props.filterNewsType} > Technology </button>
        <button id="entertainment" className="news_button" onClick={props.filterNewsType} > Entertainment </button>
        <button id="science" className="news_button" onClick={props.filterNewsType} > Science </button>
        <button id="health" className="news_button" onClick={props.filterNewsType} > Health </button>
      </div>
    </article>
		)
}

export default Menu;
import React from 'react';
import './NewsArticle.css';

const NewsArticle = (props) => {
	// console.log(props.data)
	return (
    <article id="box">
   	  <img className="news_img" src={props.data.img} />
   	  <div className="card_text-box">
   	    <h1>{props.data.headline}</h1>
   	    <p>{props.data.description}</p>
   	    <a href={props.data.url}><button className="news_article-button"> Link to article </button></a>
   	  </div>
   	</article>
		)
}

export default NewsArticle;


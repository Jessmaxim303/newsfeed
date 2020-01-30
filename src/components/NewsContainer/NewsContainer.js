import React from 'react';
import './NewsContainer.css'

import NewsArticle from '../NewsArticle/NewsArticle'

const NewsContainer = (props) => {
	return props.data.map(news => {
   return < NewsArticle data={news}/>
  })

}



export default NewsContainer;
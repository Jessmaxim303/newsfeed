import React from 'react';
import './NewsContainer.css'

import NewsArticle from '../NewsArticle/NewsArticle'

const NewsContainer = (props) => {
	return props.data.map(data => {
   return < NewsArticle data={data}/>
  })

}



export default NewsContainer;
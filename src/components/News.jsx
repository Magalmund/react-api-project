import React, { useContext } from 'react';
import { NewsContext } from "../context/NewsContext";
import NewsArticle from './NewsArticle';

const News = () => {
	const { data } = useContext(NewsContext);

	return (
		<div className="all_news">
			{data
			? data.articles.map((news) => (
				<NewsArticle data={news} key={news.url}/>
			))
			: "Loading"
			}
		</div>
	);
};

export default News;
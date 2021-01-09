import React, {Component} from 'react';
import "./news_style.css"
import NewsCard from "../NewsCard/news-card";

class News extends Component {
    render() {
        return (
            <div className="news_row row">
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
            </div>
        );
    }
}

export default News;

//source: https://codepen.io/choogoor/pen/YWBxAg
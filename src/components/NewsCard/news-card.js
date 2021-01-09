import React, {Component} from 'react';
import "./news-card.css";

class NewsCard extends Component {
    image = "https://cdn.asiatatler.com/asiatatler/i/hk/2021/01/07131141-dune-2020-1200-1200-675-675-crop-000000_cover_1200x675.jpg";

    render() {
        return (
            <div className="news__card col-md-4">
                <div className="news__wrapper"
                     style={{background: `url(${this.image}) center/cover no-repeat`}}>
                    <div className="news__header">
                        <div className="date">
                            <span className="day">12</span>
                            <span className="month">Aug</span>
                            <span className="year">2016</span>
                        </div>
                    </div>
                    <div className="data">
                        <div className="content">
                            <h1 className="title">
                                <a href="#">Stranger Things: The sound of the Upside Down</a>
                            </h1>
                            <p className="text">The antsy bingers of Netflix will eagerly anticipate the digital
                                release of the Survive soundtrack, out today.</p>
                            <a href="#" className="button">Read more</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewsCard;
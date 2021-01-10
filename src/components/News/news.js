import React, {Component} from 'react';
import "./news_style.css"
import NewsCard from "../NewsCard/news-card";

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news_data : [
                {
                    id: 1,
                    image : "https://cdn.asiatatler.com/asiatatler/i/hk/2021/01/07131141-dune-2020-1200-1200-675-675-crop-000000_cover_1200x675.jpg",
                    title : "Film festival invites fans to watch movies alone on a Swedish island",
                    intro: "Like many recent film festivals, Göteborg festival is going digital in the wake of the Covid-19 pandemic."
                },
                {
                    id: 2,
                    image: "https://i.pinimg.com/originals/c8/32/7c/c8327cefb1af07ae6780d1bb9b1abf54.jpg",
                    title: "The Watch‘s tough-talking crime-fighter spills all on Terry Pratchett’s lawless dystopia",
                    intro: "Marama Corlett is an on-screen talent not to be underestimated. The multi-hyphenate actor has already tussled with the best of them"
                },
                {
                    id: 3,
                    image: "https://pyxis.nymag.com/v1/imgs/5c0/59d/d2887f10e28e8229052048a173bb905dda-27-dc-feature.2x.rvertical.w512.jpg",
                    title: "DC Rethinks Its Universe",
                    intro: "While DC Entertainment has won big in comics, TV, and games, they’ve struggled at the movies."
                },
                {
                    id: 4,
                    image: "https://static.standard.co.uk/s3fs-public/thumbnails/image/2019/10/09/21/gettyimages-1180069956.jpg",
                    title: "Angelina Jolie, Elle Fanning and stars hit London for the Maleficent European premiere",
                    intro: "Angelina Jolie is back for round two with Disney's Sleeping Beauty villain Maleficent."
                },
                {
                    id: 5,
                    image: "https://cdn3.movieweb.com/i/article/Pq7YQ35n84Z79Qw8h3xV3tgQphV9Xp/1200:100/Soul-Trailer-Disney-Plus-Pixar-Christmas-Release-Date.jpg",
                    title: "Soul Voice Cast: Who's Voicing Who In The Pixar Movie",
                    intro: "It was announced earlier this week that Disney is debuting their latest Pixar animated adventure direct to Disney+."
                },
                {
                    id: 6,
                    image: "https://www.cheatsheet.com/wp-content/uploads/2019/10/chris-hemsworth-1024x683.jpg",
                    title: "Will Thor Stay Fat After ‘Avengers: Endgame?’",
                    intro: "Avengers: Endgame featured Thor (Chris Hemsworth) looking not his usual self."
                }
            ]
        }
    }

    renderNews = () => {
        return this.state.news_data.map((item)=>{
            return <NewsCard key={item.id} news={item} />
        })
    }

    render() {
        return (
            <div className="news_row row">
                {this.renderNews()}
            </div>
        );
    }
}

export default News;

//source: https://codepen.io/choogoor/pen/YWBxAg
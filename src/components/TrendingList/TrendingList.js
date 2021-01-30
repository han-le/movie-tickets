import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "./carousel-movie.css"
import MovieCard from "../MovieCard";

export default class TrendingList extends Component {

    trendingMovieList = [
        {
            "maPhim": 1350,
            "tenPhim": "No Time To Die",
            "biDanh": "inside-out",
            "trailer": "https://www.youtube.com/embed/seMwpP0yeu4",
            "hinhAnh": "https://www.joblo.com/assets/images/joblo/posters/2019/12/notime1_thumb.jpg",
            "moTa": "After young Riley is uprooted from her Midwest life and moved to San Francisco, her emotions - Joy, Fear, Anger, Disgust and Sadness - conflict on how best to navigate a new city, house, and school.",
            "maNhom": "GP07",
            "ngayKhoiChieu": "2019-07-29T00:00:00",
            "danhGia": 5
        },

        {
            "maPhim": 1410,
            "tenPhim": "The Mustang",
            "biDanh": "jurassic-world",
            "trailer": "https://www.youtube.com/embed/RFinNxS5KN4",
            "hinhAnh": "https://www.joblo.com/assets/images/joblo/posters/2019/09/mustang-poster_thumb.jpg",
            "moTa": "A new theme park is built on the original site of Jurassic Park.123 Everything is going well until the park's newest attraction--a genetically modified giant stealth killing machine--escapes containment and goes on a killing spree.",
            "maNhom": "GP07",
            "ngayKhoiChieu": "2020-10-10T00:00:00",
            "danhGia": 10
        },
        {
            "maPhim": 1425,
            "tenPhim": "Gretal And Hansel",
            "biDanh": "fantastic-four",
            "trailer": "https://www.youtube.com/embed/AAgnQdiZFsQ",
            "hinhAnh": "https://www.joblo.com/assets/images/joblo/posters/2019/09/gretel_and_hansel_poster_thumb.jpg",
            "moTa": "Four young outsiders teleport to an alternate and dangerous universe which alters their physical form in shocking ways. The four must learn to harness their new abilities and work together to save Earth from a former friend turned enemy.",
            "maNhom": "GP07",
            "ngayKhoiChieu": "2019-07-29T00:00:00",
            "danhGia": 5
        },
        {
            "maPhim": 1440,
            "tenPhim": "Mad Max: Fury Road",
            "biDanh": "mad-max-fury-road",
            "trailer": "https://www.youtube.com/embed/hEJnMQG9ev8",
            "hinhAnh": "https://www.joblo.com/assets/images/joblo/posters/2019/12/seberg_xlg_thumb.jpg",
            "moTa": "In a stark desert landscape where humanity is broken, two rebels just might be able to restore order: Max, a man of action and of few words, and Furiosa, a woman of action who is looking to make it back to her childhood homeland.",
            "maNhom": "GP07",
            "ngayKhoiChieu": "2019-07-29T00:00:00",
            "danhGia": 5
        },
        {
            "maPhim": 1320,
            "tenPhim": "PROM",
            "biDanh": "our-friend",
            "trailer": "https://www.youtube.com/watch?v=DllUzIueITg&t=1s",
            "hinhAnh": "https://www.joblo.com/assets/images/joblo/posters/2020/12/the-prom-poster_thumb.jpg",
            "moTa": "Newlywed couple Ted and Tami-Lynn want to have a baby, but in order to qualify to be a parent, Ted will have to prove he's a person in a court of law.",
            "maNhom": "GP07",
            "ngayKhoiChieu": "2021-01-10T00:00:00",
            "danhGia": 5
        },
        {
            "maPhim": 1335,
            "tenPhim": "The Two Popes",
            "biDanh": "trainwreck",
            "trailer": "https://www.youtube.com/embed/2MxnhBPoIx4",
            "hinhAnh": "https://www.joblo.com/assets/images/joblo/posters/2019/12/two-popes_thumb.jpg",
            "moTa": "Having thought that monogamy was never possible, a commitment-phobic career woman may have to face her fears when she meets a good guy.",
            "maNhom": "GP07",
            "ngayKhoiChieu": "2020-10-10T00:00:00",
            "danhGia": 10
        },
        {
            "maPhim": 1365,
            "tenPhim": "Home",
            "biDanh": "home",
            "trailer": "https://www.youtube.com/embed/MyqZf8LiWvM",
            "hinhAnh": "https://www.joblo.com/assets/images/joblo/posters/2019/11/Dolittle-character-poster-5-913_thumb.jpg",
            "moTa": "Oh, an alien on the run from his own people, lands on Earth and makes friends with the adventurous Tip, who is on a quest of her own.",
            "maNhom": "GP07",
            "ngayKhoiChieu": "2019-07-29T00:00:00",
            "danhGia": 5
        },
        {
            "maPhim": 1380,
            "tenPhim": "Batman v Superman: Dawn of Justice",
            "biDanh": "batman-v-superman-dawn-of-justice",
            "trailer": "https://www.youtube.com/embed/0WWzgGyAH6Y",
            "hinhAnh": "https://www.joblo.com/assets/images/joblo/posters/2019/10/litlejoeposter913_thumb.jpg",
            "moTa": "Fearing the actions of a god-like Super Hero left unchecked, Gotham City's own formidable, forceful vigilante takes on Metropolis most revered, modern-day savior, while the world wrestles with what sort of hero it really needs. And with Batman and Superman at war with one another, a new threat quickly arises, putting mankind in greater danger than it's ever known before.",
            "maNhom": "GP07",
            "ngayKhoiChieu": "2019-07-29T00:00:00",
            "danhGia": 5
        },
        {
            "maPhim": 1395,
            "tenPhim": "Ant-Man",
            "biDanh": "ant-man",
            "trailer": "https://www.youtube.com/embed/1HpZevFifuo",
            "hinhAnh": "https://www.joblo.com/assets/images/joblo/posters/2019/09/clemency-poster_thumb.jpg",
            "moTa": "Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will save the world.",
            "maNhom": "GP07",
            "ngayKhoiChieu": "2019-07-29T00:00:00",
            "danhGia": 5
        },
        {
            "maPhim": 1455,
            "tenPhim": "True Detective",
            "biDanh": "true-detective",
            "trailer": "https://www.youtube.com/embed/TXwCoNwBSkQ",
            "hinhAnh": "https://www.joblo.com/assets/images/joblo/posters/2019/09/marriage-story-poster_thumb.jpg",
            "moTa": "An anthology series in which police investigations unearth the personal and professional secrets of those involved, both within and outside the law.",
            "maNhom": "GP07",
            "ngayKhoiChieu": "2019-07-29T00:00:00",
            "danhGia": 5
        },
    ]

    renderMovieCard = () => {
        return this.trendingMovieList.map((movieObj) => {
            return <MovieCard movieObj={movieObj}   />;
        });
    };

    render() {

        const settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        return (
            <div className="container">
                <Slider {...settings}>
                    {this.renderMovieCard()}
                </Slider>
            </div>
        );
    }
}  //end of class

import React, { Component } from "react";
import Slider from "react-slick";
import MovieCard from "../MovieCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel-movie.css"
import {actNowPlaying5MovieAPI} from "../../containers/GuestLayout/HomePage/modules/actions";



export default class MultipleItems extends Component {

    renderMovieCard = () => {
        const itemToShow = this.props.itemsToShow;
        console.log("I am function to render component MovieCard. My props now is::")
        console.log(itemToShow);
        //check if the data is loaded ?
        if (itemToShow && itemToShow.length > 0) {
            return itemToShow.map((movieObj) => {
                return <MovieCard movieObj={movieObj}   />;
            });
        }
    };

    render() {

        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4
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

// const mapStateToProps = (state) => {
//     return {
//         loading: state.listNowPlayingReducer.loading,
//         nowPlayingList: state.listNowPlayingReducer.data,
//     };
// };
//
// const mapDispatchToProps = (dispatch) => {
//     return {
//         nowPlayingListAPI: () => {
//             dispatch(actNowPlaying5MovieAPI());
//         }
//     }
// };
import React, {Component} from 'react';
import "./cinema-details.css";
import FooterGuest from "../../../components/FooterGuest";
import TrailerModal from "../../../components/TrailerModal/trailer-modal";
import {connect} from "react-redux";
import {actMovieDetailsAPI} from "./modules/actions";
import Loader from "../../../components/Loader";
import ShowTime from "../HomePage/components/ShowTime";

class CinemaDetails extends Component {

    componentDidMount() {
        console.log("I am DidMount in Movie Booking Page. My props have");
        //dispatch the action to get the movie, pass the id to the action, id comes from <Link>
        console.log(this.props);

        //Goi ham lay thong tin phim, truyen vao maPhim
        const movie_ID = this.props.match.params.id;
        //TODO: Goi API
        this.props.getMovieDetails(movie_ID);
        console.log("movie ID:")
        console.log(movie_ID);
        //TODO: Lay props o tren de render ra duoi day
    }

    renderCinemaDetails = () => {
        const details = this.props.movieDetails;
        if (details !== null) {
            console.log(this.props.movieDetails.moTa);
            // const rating= details.danhGia;
            // const posterURL = details.hinhAnh;
            // const showTimeList = details.lichChieu;
            // const introduction = details.moTa;
            // const releaseDate = details.ngayKhoiChieu;
            // const movieTitle = details.tenPhim;
            // const trailerURL  = this.youtube_parser(details.trailer);

            return (
                <div className="header container-fluid theme-background">
                    <h1>dsgdgfdgfdg</h1>
                    <div className="wrap">
                        <div className="row movie-info">
                            <div className="col-md-4 movie-left">
                                <div className="movie-img">
                                    <img src={"https://i.pinimg.com/originals/ae/a9/1e/aea91e10280fa08d5e38c48d1c869f0a.jpg"} alt="poster"/>
                                </div>
                            </div>
                            <div className="col-md-8 movie-right text-center">
                                <div className="movie-title"><h1>Galaxy</h1></div>
                                <div className="story-line">
                                    <p style={{color: '#525252'}}>{"hello"}</p>
                                </div>
                                <div className="circle">{"5"}</div>
                                <div className="ratings">
                                    <span className="mr-2">in ratings</span>
                                    <img src="https://www.flaticon.com/svg/static/icons/svg/263/263075.svg" alt="rating"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            )
        }
    }


    render() {
        console.log("I am in render function of Movie Booking Page")
        console.log("Props in RENDER have")
        console.log(this.props);

        const loader = this.props.loading;
        if (loader) { return <Loader /> };

        return (
            <div className="movie-booking-page">
                {/* Header */}
                {this.renderCinemaDetails()}

                <h1>Cinema Details</h1>

                <div className="showTime__content grey-background section">
                    <div className='container section__header'>
                        <img className="section__icon" src="https://www.flaticon.com/svg/static/icons/svg/599/599887.svg" alt="trending-icon"/>
                        <h3 className="section__title">Pick your schedule</h3>
                    </div>
                    <div className="container">
                        <ShowTime/>
                    </div>
                </div>
                <FooterGuest/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        movieDetails: state.movieDetailsReducer.data,
        loading: state.movieDetailsReducer.loading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getMovieDetails: (movie_ID) => {
            dispatch(actMovieDetailsAPI(movie_ID))
        },

    }
}

// handleOnClick() {
//     this.props.addThing();
// };

export default connect(mapStateToProps, mapDispatchToProps)(CinemaDetails);
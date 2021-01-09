import React, {Component} from 'react';
import "./movie-booking-details.css";
import FooterGuest from "../../../components/FooterGuest";
import TrailerModal from "../../../components/TrailerModal/trailer-modal";
import {connect} from "react-redux";
import {actMovieDetailsAPI} from "./modules/actions";
import Loader from "../../../components/Loader";

class MovieBookingDetails extends Component {

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

    renderMovieDetails = () => {
        const details = this.props.movieDetails;
        if (details !== null) {
            console.log(this.props.movieDetails.moTa);
            const rating= details.danhGia;
            const posterURL = details.hinhAnh;
            const showTimeList = details.lichChieu;
            const introduction = details.moTa;
            const releaseDate = details.ngayKhoiChieu;
            const movieTitle = details.tenPhim;
            const trailerURL  = this.youtube_parser(details.trailer);

            return (
                <div className="header container-fluid">
                    <div className="wrap">
                        <div className="row movie-info">
                            <div className="col-md-4 movie-left">
                                <div className="movie-img">
                                    <img src={posterURL} alt="poster"/>
                                </div>
                            </div>
                            <div className="col-md-8 movie-right text-center">
                                <div className="movie-title"><h1>{movieTitle}</h1></div>
                                <div className="story-line">
                                    <p>{introduction}</p>
                                </div>
                                <div className="circle">{rating}</div>
                                <div className="ratings">
                                    <span>in ratings</span>
                                    <img src="https://www.flaticon.com/svg/static/icons/svg/263/263075.svg" alt="rating"/>
                                </div>
                                <div className="movie-info-button">
                                    <TrailerModal youtubeID={trailerURL} />
                                    <button className="btn_hover btn-ticket"><i className="fa fa-ticket-alt mr-2"/>TICKET
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            )
        }
    }

    youtube_parser (url) {
        let regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
        let match = url.match(regExp);
        return (match&&match[7].length==11)? match[7] : false;
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
                {this.renderMovieDetails()}

                <div className="wrap">
                    <div className="book-ticket container mt-5">
                        {/* Date Pick */}
                        <div className="datePick row">
                            <div className="col-md-3"/>
                            <div className="col-md-9 showDate mt-5 mb-5">
                                <div className="showDateContent">
                                    <button type="button" className="btn-date">Mon 12</button>
                                    <button type="button" className="btn-date">Tue 12</button>
                                    <button type="button" className="btn-date">Wed 12</button>
                                    <button type="button" className="btn-date">Thu 12</button>
                                    <button type="button" className="btn-date">Fri 12</button>
                                    <button type="button" className="btn-date">Sat 12</button>
                                </div>
                            </div>
                        </div>
                        {/* End of Date Pick */}

                        {/* ====== MAIN BODY ===== */}
                        <div id="showTime" className="showTime row">
                            {/* Cinema List */}
                            <div className="col-md-3 cinema-list">
                                {/* Cinema list item */}
                                <div className="cinema-list-item container">
                                    <div className="row item__content">
                                        <div className="col-12 cinema-logo">
                                            <img src="./img/BHGLOGO.png" alt="cinema-logo"/>
                                        </div>
                                        <div className="cinema-text">
                                            <h6 className="cinema-title-small">Lotte Cimena</h6>
                                            <p className="cinema-location"><i className="fa fa-map-pin mr-2"/>123 Nguyen
                                                Trai, Ward 5, District 1, Ho Chi Minh City</p>
                                        </div>
                                        <div className="cinema-select">
                                            <button className="btn_hover btn-select">Choose</button>
                                        </div>
                                    </div>
                                </div>
                                {/* /Cinema list item */}
                                {/* Cinema list item */}
                                <div className="cinema-list-item container">
                                    <div className="row item__content">
                                        <div className="col-12 cinema-logo">
                                            <img src="./img/BHGLOGO.png" alt="cinema-logo"/>
                                        </div>
                                        <div className="cinema-text">
                                            <h6 className="cinema-title-small">Lotte Cimena</h6>
                                            <p className="cinema-location"><i className="fa fa-map-pin mr-2"/>123 Nguyen
                                                Trai, Ward 5, District 1, Ho Chi Minh City</p>
                                        </div>
                                        <div className="cinema-select">
                                            <button className="btn_hover btn-select">Choose</button>
                                        </div>
                                    </div>
                                </div>
                                {/* /Cinema list item */}
                                {/* Cinema list item */}
                                <div className="cinema-list-item container">
                                    <div className="row item__content">
                                        <div className="col-12 cinema-logo">
                                            <img src="./img/BHGLOGO.png" alt="cinema-logo"/>
                                        </div>
                                        <div className="cinema-text">
                                            <h6 className="cinema-title-small">Lotte Cimena</h6>
                                            <p className="cinema-location"><i className="fa fa-map-pin mr-2"/>123 Nguyen
                                                Trai, Ward 5, District 1, Ho Chi Minh City</p>
                                        </div>
                                        <div className="cinema-select">
                                            <button className="btn_hover btn-select">Choose</button>
                                        </div>
                                    </div>
                                </div>
                                {/* /Cinema list item */}
                                {/* Cinema list item */}
                                <div className="cinema-list-item container">
                                    <div className="row item__content">
                                        <div className="col-12 cinema-logo">
                                            <img src="./img/BHGLOGO.png" alt="cinema-logo"/>
                                        </div>
                                        <div className="cinema-text">
                                            <h6 className="cinema-title-small">Lotte Cimena</h6>
                                            <p className="cinema-location"><i className="fa fa-map-pin mr-2"/>123 Nguyen
                                                Trai, Ward 5, District 1, Ho Chi Minh City</p>
                                        </div>
                                        <div className="cinema-select">
                                            <button className="btn_hover btn-select">Choose</button>
                                        </div>
                                    </div>
                                </div>
                                {/* /Cinema list item */}
                                {/* Cinema list item */}
                                <div className="cinema-list-item container">
                                    <div className="row item__content">
                                        <div className="col-12 cinema-logo">
                                            <img src="./img/BHGLOGO.png" alt="cinema-logo"/>
                                        </div>
                                        <div className="cinema-text">
                                            <h6 className="cinema-title-small">Lotte Cimena</h6>
                                            <p className="cinema-location"><i className="fa fa-map-pin mr-2"/>123 Nguyen
                                                Trai, Ward 5, District 1, Ho Chi Minh City</p>
                                        </div>
                                        <div className="cinema-select">
                                            <button className="btn_hover btn-select">Choose</button>
                                        </div>
                                    </div>
                                </div>
                                {/* /Cinema list item */}
                            </div>
                            {/* /Cinema List */}
                            {/* Movie List */}
                            <div className="col-md-9 showTimeDetails">
                                {/* Showtime Board: Show information and time pick of each item */}
                                <div className="showTimeBoard">
                                    <div className="container">
                                        <div className="row mt-5 mb-5 movie-item">
                                            <div className="col-md-3 movie-poster">
                                                <img src="./img/BHGLOGO.png" alt="cinema-logo"/>
                                            </div>
                                            <div className="col-md-9 movie-item-details">
                                                <h3 className="movie-title">BHD Star - Bitexco</h3>
                                                <div className="movie-info">
                                                    <div className="movie-info-date">
                                                        <span><i className="fa fa-map-pin mr-3"/>L3-Bitexco Icon 68, 2 Hải Triều, Q.1</span>
                                                    </div>
                                                    <p><i className="fa fa-hourglass-half mr-3"/>Pick a time</p>
                                                </div>
                                                <div className="time-pick container">
                                                    <div className="row">
                                                        <div className="movie-time-option col-sm-6 col-md-4 col-xl-3">
                                                            <button type="button" className="btn-time">08:45</button>
                                                        </div>
                                                        <div className="movie-time-option col-sm-6 col-md-4 col-xl-3">
                                                            <button type="button" className="btn-time">08:45</button>
                                                        </div>
                                                        <div className="movie-time-option col-sm-6 col-md-4 col-xl-3">
                                                            <button type="button" className="btn-time">08:45</button>
                                                        </div>
                                                        <div className="movie-time-option col-sm-6 col-md-4 col-xl-3">
                                                            <button type="button" className="btn-time">08:45</button>
                                                        </div>
                                                        <div className="movie-time-option col-sm-6 col-md-4 col-xl-3">
                                                            <button type="button" className="btn-time">08:45</button>
                                                        </div>
                                                        <div className="movie-time-option col-sm-6 col-md-4 col-xl-3">
                                                            <button type="button" className="btn-time">08:45</button>
                                                        </div>
                                                        <div className="movie-time-option col-sm-6 col-md-4 col-xl-3">
                                                            <button type="button" className="btn-time">08:45</button>
                                                        </div>
                                                        <div className="movie-time-option col-sm-6 col-md-4 col-xl-3">
                                                            <button type="button" className="btn-time">08:45</button>
                                                        </div>
                                                        <div className="movie-time-option col-sm-6 col-md-4 col-xl-3">
                                                            <button type="button" className="btn-time">08:45</button>
                                                        </div>
                                                        <div className="movie-time-option col-sm-6 col-md-4 col-xl-3">
                                                            <button type="button" className="btn-time">08:45</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* /Showtime Board*/}
                                {/* Showtime Board: Show information and time pick of each item */}
                                <div className="showTimeBoard">
                                    <div className="container">
                                        <div className="row mt-5 mb-5 movie-item">
                                            <div className="col-md-3 movie-poster">
                                                <img src="./img/BHGLOGO.png" alt="cinema-logo"/>
                                            </div>
                                            <div className="col-md-9 movie-item-details">
                                                <h3 className="movie-title">BHD Star - Bitexco</h3>
                                                <div className="movie-info">
                                                    <div className="movie-info-date">
                                                        <span><i className="fa fa-map-pin mr-2"/>L3-Bitexco Icon 68, 2 Hải Triều, Q.1</span>
                                                    </div>
                                                    <p>Pick a time ↓</p>
                                                </div>
                                                <div className="time-pick container">
                                                    <div className="row">
                                                        <div className="movie-time-option col-sm-6 col-md-4 col-xl-3">
                                                            <button type="button" className="btn-time">08:45</button>
                                                        </div>
                                                        <div className="movie-time-option col-sm-6 col-md-4 col-xl-3">
                                                            <button type="button" className="btn-time">08:45</button>
                                                        </div>
                                                        <div className="movie-time-option col-sm-6 col-md-4 col-xl-3">
                                                            <button type="button" className="btn-time">08:45</button>
                                                        </div>
                                                        <div className="movie-time-option col-sm-6 col-md-4 col-xl-3">
                                                            <button type="button" className="btn-time">08:45</button>
                                                        </div>
                                                        <div className="movie-time-option col-sm-6 col-md-4 col-xl-3">
                                                            <button type="button" className="btn-time">08:45</button>
                                                        </div>
                                                        <div className="movie-time-option col-sm-6 col-md-4 col-xl-3">
                                                            <button type="button" className="btn-time">08:45</button>
                                                        </div>
                                                        <div className="movie-time-option col-sm-6 col-md-4 col-xl-3">
                                                            <button type="button" className="btn-time">08:45</button>
                                                        </div>
                                                        <div className="movie-time-option col-sm-6 col-md-4 col-xl-3">
                                                            <button type="button" className="btn-time">08:45</button>
                                                        </div>
                                                        <div className="movie-time-option col-sm-6 col-md-4 col-xl-3">
                                                            <button type="button" className="btn-time">08:45</button>
                                                        </div>
                                                        <div className="movie-time-option col-sm-6 col-md-4 col-xl-3">
                                                            <button type="button" className="btn-time">08:45</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* /Showtime Board*/}
                                {/* Showtime Board: Show information and time pick of each item */}
                                <div className="showTimeBoard">
                                    <div className="container">
                                        <div className="row mt-5 mb-5 movie-item">
                                            <div className="col-md-3 movie-poster">
                                                <img src="./img/BHGLOGO.png" alt="cinema-logo"/>
                                            </div>
                                            <div className="col-md-9 movie-item-details">
                                                <h3 className="movie-title">BHD Star - Bitexco</h3>
                                                <div className="movie-info">
                                                    <div className="movie-info-date">
                                                        <span><i className="fa fa-map-pin mr-2"/>L3-Bitexco Icon 68, 2 Hải Triều, Q.1</span>
                                                    </div>
                                                    <p>Pick a time ↓</p>
                                                </div>
                                                <div className="time-pick container">
                                                    <div className="row">
                                                        <div className="movie-time-option col-sm-6 col-md-4 col-xl-3">
                                                            <button type="button" className="btn-time">08:45</button>
                                                        </div>
                                                        <div className="movie-time-option col-sm-6 col-md-4 col-xl-3">
                                                            <button type="button" className="btn-time">08:45</button>
                                                        </div>
                                                        <div className="movie-time-option col-sm-6 col-md-4 col-xl-3">
                                                            <button type="button" className="btn-time">08:45</button>
                                                        </div>
                                                        <div className="movie-time-option col-sm-6 col-md-4 col-xl-3">
                                                            <button type="button" className="btn-time">08:45</button>
                                                        </div>
                                                        <div className="movie-time-option col-sm-6 col-md-4 col-xl-3">
                                                            <button type="button" className="btn-time">08:45</button>
                                                        </div>
                                                        <div className="movie-time-option col-sm-6 col-md-4 col-xl-3">
                                                            <button type="button" className="btn-time">08:45</button>
                                                        </div>
                                                        <div className="movie-time-option col-sm-6 col-md-4 col-xl-3">
                                                            <button type="button" className="btn-time">08:45</button>
                                                        </div>
                                                        <div className="movie-time-option col-sm-6 col-md-4 col-xl-3">
                                                            <button type="button" className="btn-time">08:45</button>
                                                        </div>
                                                        <div className="movie-time-option col-sm-6 col-md-4 col-xl-3">
                                                            <button type="button" className="btn-time">08:45</button>
                                                        </div>
                                                        <div className="movie-time-option col-sm-6 col-md-4 col-xl-3">
                                                            <button type="button" className="btn-time">08:45</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* /Showtime Board*/}
                                {/* Showtime Board: Show information and time pick of each item */}
                                <div className="showTimeBoard">
                                    <div className="container">
                                        <div className="row mt-5 mb-5 movie-item">
                                            <div className="col-md-3 movie-poster">
                                                <img src="./img/BHGLOGO.png" alt="cinema-logo"/>
                                            </div>
                                            <div className="col-md-9 movie-item-details">
                                                <h3 className="movie-title">BHD Star - Bitexco</h3>
                                                <div className="movie-info">
                                                    <div className="movie-info-date">
                                                        <span><i className="fa fa-map-pin mr-2"/>L3-Bitexco Icon 68, 2 Hải Triều, Q.1</span>
                                                    </div>
                                                    <p>Pick a time ↓</p>
                                                </div>
                                                <div className="time-pick container">
                                                    <div className="row">
                                                        <div className="movie-time-option col-sm-6 col-md-4 col-xl-3">
                                                            <button type="button" className="btn-time">08:45</button>
                                                        </div>
                                                        <div className="movie-time-option col-sm-6 col-md-4 col-xl-3">
                                                            <button type="button" className="btn-time">08:45</button>
                                                        </div>
                                                        <div className="movie-time-option col-sm-6 col-md-4 col-xl-3">
                                                            <button type="button" className="btn-time">08:45</button>
                                                        </div>
                                                        <div className="movie-time-option col-sm-6 col-md-4 col-xl-3">
                                                            <button type="button" className="btn-time">08:45</button>
                                                        </div>
                                                        <div className="movie-time-option col-sm-6 col-md-4 col-xl-3">
                                                            <button type="button" className="btn-time">08:45</button>
                                                        </div>
                                                        <div className="movie-time-option col-sm-6 col-md-4 col-xl-3">
                                                            <button type="button" className="btn-time">08:45</button>
                                                        </div>
                                                        <div className="movie-time-option col-sm-6 col-md-4 col-xl-3">
                                                            <button type="button" className="btn-time">08:45</button>
                                                        </div>
                                                        <div className="movie-time-option col-sm-6 col-md-4 col-xl-3">
                                                            <button type="button" className="btn-time">08:45</button>
                                                        </div>
                                                        <div className="movie-time-option col-sm-6 col-md-4 col-xl-3">
                                                            <button type="button" className="btn-time">08:45</button>
                                                        </div>
                                                        <div className="movie-time-option col-sm-6 col-md-4 col-xl-3">
                                                            <button type="button" className="btn-time">08:45</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* /Showtime Board*/}
                                {/* Showtime Board: Show information and time pick of each item */}
                                <div className="showTimeBoard">
                                    <div className="container">
                                        <div className="row mt-5 mb-5 movie-item">
                                            <div className="col-md-3 movie-poster">
                                                <img src="./img/BHGLOGO.png" alt="cinema-logo"/>
                                            </div>
                                            <div className="col-md-9 movie-item-details">
                                                <h3 className="movie-title">BHD Star - Bitexco</h3>
                                                <div className="movie-info">
                                                    <div className="movie-info-date">
                                                        <span><i className="fa fa-map-pin mr-2"/>L3-Bitexco Icon 68, 2 Hải Triều, Q.1</span>
                                                    </div>
                                                    <p>Pick a time ↓</p>
                                                </div>
                                                <div className="time-pick container">
                                                    <div className="row">
                                                        <div className="movie-time-option col-sm-6 col-md-4 col-xl-3">
                                                            <button type="button" className="btn-time">08:45</button>
                                                        </div>
                                                        <div className="movie-time-option col-sm-6 col-md-4 col-xl-3">
                                                            <button type="button" className="btn-time">08:45</button>
                                                        </div>
                                                        <div className="movie-time-option col-sm-6 col-md-4 col-xl-3">
                                                            <button type="button" className="btn-time">08:45</button>
                                                        </div>
                                                        <div className="movie-time-option col-sm-6 col-md-4 col-xl-3">
                                                            <button type="button" className="btn-time">08:45</button>
                                                        </div>
                                                        <div className="movie-time-option col-sm-6 col-md-4 col-xl-3">
                                                            <button type="button" className="btn-time">08:45</button>
                                                        </div>
                                                        <div className="movie-time-option col-sm-6 col-md-4 col-xl-3">
                                                            <button type="button" className="btn-time">08:45</button>
                                                        </div>
                                                        <div className="movie-time-option col-sm-6 col-md-4 col-xl-3">
                                                            <button type="button" className="btn-time">08:45</button>
                                                        </div>
                                                        <div className="movie-time-option col-sm-6 col-md-4 col-xl-3">
                                                            <button type="button" className="btn-time">08:45</button>
                                                        </div>
                                                        <div className="movie-time-option col-sm-6 col-md-4 col-xl-3">
                                                            <button type="button" className="btn-time">08:45</button>
                                                        </div>
                                                        <div className="movie-time-option col-sm-6 col-md-4 col-xl-3">
                                                            <button type="button" className="btn-time">08:45</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* /Showtime Board*/}
                                {/* Showtime Board: Show information and time pick of each item */}
                                <div className="showTimeBoard">
                                    <div className="container">
                                        <div className="row mt-5 mb-5 movie-item">
                                            <div className="col-md-3 movie-poster">
                                                <img src="./img/BHGLOGO.png" alt="cinema-logo"/>
                                            </div>
                                            <div className="col-md-9 movie-item-details">
                                                <h3 className="movie-title">BHD Star - Bitexco</h3>
                                                <div className="movie-info">
                                                    <div className="movie-info-date">
                                                        <span><i className="fa fa-map-pin mr-2"/>L3-Bitexco Icon 68, 2 Hải Triều, Q.1</span>
                                                    </div>
                                                    <p>Pick a time ↓</p>
                                                </div>
                                                <div className="time-pick container">
                                                    <div className="row">
                                                        <div className="movie-time-option col-sm-6 col-md-4 col-xl-3">
                                                            <button type="button" className="btn-time">08:45</button>
                                                        </div>
                                                        <div className="movie-time-option col-sm-6 col-md-4 col-xl-3">
                                                            <button type="button" className="btn-time">08:45</button>
                                                        </div>
                                                        <div className="movie-time-option col-sm-6 col-md-4 col-xl-3">
                                                            <button type="button" className="btn-time">08:45</button>
                                                        </div>
                                                        <div className="movie-time-option col-sm-6 col-md-4 col-xl-3">
                                                            <button type="button" className="btn-time">08:45</button>
                                                        </div>
                                                        <div className="movie-time-option col-sm-6 col-md-4 col-xl-3">
                                                            <button type="button" className="btn-time">08:45</button>
                                                        </div>
                                                        <div className="movie-time-option col-sm-6 col-md-4 col-xl-3">
                                                            <button type="button" className="btn-time">08:45</button>
                                                        </div>
                                                        <div className="movie-time-option col-sm-6 col-md-4 col-xl-3">
                                                            <button type="button" className="btn-time">08:45</button>
                                                        </div>
                                                        <div className="movie-time-option col-sm-6 col-md-4 col-xl-3">
                                                            <button type="button" className="btn-time">08:45</button>
                                                        </div>
                                                        <div className="movie-time-option col-sm-6 col-md-4 col-xl-3">
                                                            <button type="button" className="btn-time">08:45</button>
                                                        </div>
                                                        <div className="movie-time-option col-sm-6 col-md-4 col-xl-3">
                                                            <button type="button" className="btn-time">08:45</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* /Showtime Board*/}
                            </div>
                            {/* /Movie List */}
                        </div>
                        {/* ====== /END OF MAIN BODY ===== */}

                    </div>
                </div>

                {/* Scroll to top button */}
                <div className="button-container">
                    <a href="#showTime" className="learn-more">more cinema</a>
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

export default connect(mapStateToProps, mapDispatchToProps)(MovieBookingDetails);
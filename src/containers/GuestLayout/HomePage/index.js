import React, {Component} from "react";
import "./css/style.css";
import CarouselMovie from "../../../components/CarouselMovie";
import CarouselCinema from "../../../components/CarouselCinema";
import BannerCarousel from "../../../components/BannerCarousel";
import Loader from "../../../components/Loader";
import FooterGuest from "../../../components/FooterGuest";
import {actNowPlayingMovieAPI} from "./modules/actions";
import MovieCard from "../../../components/MovieCard";
import {connect} from "react-redux";
import News from "../../../components/News/news";



class HomePage extends Component {

    constructor(props) {
        super(props);
    }

    //Get data from props
    componentDidMount() {
        console.log("====== HomePage Did Mount =====")
        this.props.nowPlayingListAPI();
    }

    //TODO: render component CarouselMovie => goi component => trong component nay, nhan ve nowPlayingList roi map, moi lan map goi MovieCard
    renderCarousel = () => {
        const nowPlayingList = this.props.nowPlayingList;
        return <CarouselMovie itemsToShow={nowPlayingList}/>
    };

    //Khong biet cai han nay dung o dau?
    // renderMovieCard = () => {
    //     const nowPlayingList = this.props.nowPlayingList;
    //     if (nowPlayingList && nowPlayingList.length > 0) {
    //         return nowPlayingList.map((movieObj) => {
    //             return <MovieCard movieObj={movieObj}/>;
    //         });
    //     }
    // };

    renderCinemaCarousel = () => {
        return <CarouselCinema /> ;
    };

    render() {
        console.log("HomePage is rendered.")
        const {loading} = this.props;

        if (loading) {
            console.log("Page is loading. (Loading = true)")
            return <Loader/>
        }
        return (
            <div>

                <BannerCarousel/>

                {/* ========== 2- Now Playing ========== */}
                <div className="now-playing my-5">
                    <div className="container section">
                        <img className="section__icon" src="https://www.flaticon.com/svg/static/icons/svg/3879/3879742.svg" alt="movie-icon"/>
                        <h3 className="section__title">Now Playing</h3>
                    </div>
                    {this.renderCarousel()}
                </div>
                {/* ========== /2- Now Playing ========== */}


                {/* ========== 3- Trending ========== */}
                <div className="trending">
                    <div className="container section">
                        <img className="section__icon" src="https://www.flaticon.com/svg/static/icons/svg/1784/1784614.svg" alt="trending-icon"/>
                        <h3 className="section__title">Trending</h3>
                    </div>
                    {this.renderCarousel()}
                </div>
                {/* ========== /3- Trending ========== */}

                {/* ========== 4- Cinema logo ========== */}
                <div className="cinema-list-section my-5">
                    <div className="container section">
                        <img className="section__icon" src="https://www.flaticon.com/svg/static/icons/svg/3507/3507076.svg" alt="popcorn-icon"/>
                        <h3 className="section__title">Cinemas</h3>
                    </div>
                    <div className="container">{this.renderCinemaCarousel()}</div>
                </div>
                {/* ========== /4- Cinema logo ========== */}


                {/* ========== 5- Genres ========== */}
                <div className="genre container">
                    <div className="genre__content">
                        <a className="btn-genre" href="#" role="button">
                            sci-fi
                        </a>
                        <a className="btn-genre" href="#" role="button">
                            romance
                        </a>
                        <a className="btn-genre" href="#" role="button">
                            comedy
                        </a>
                        <a className="btn-genre" href="#" role="button">
                            horror
                        </a>
                        <a className="btn-genre" href="#" role="button">
                            action
                        </a>
                    </div>
                </div>
                {/* ========== 5- /Genres  ========== */}

                {/* ========== 6- Showtime  ========== */}
                <div className="showTime-title">
                    <div className="container section">
                        <img className="section__icon" src="https://www.flaticon.com/svg/static/icons/svg/599/599887.svg" alt="trending-icon"/>
                        <h3 className="section__title">Today we have</h3>
                    </div>
                </div>
                <section className="showTime">
                    <div className="showTime__content container">
                        <div className="showTime__detail row">
                            <div className="col-2 left-content">
                                <div className="list-group" id="list-tab" role="tablist">
                                    <a className="list-group-item list-group-item-action active bg-white"
                                       id="list-home-list" data-toggle="list" href="#bhd" role="tab"
                                       aria-controls="home"><img src="https://picsum.photos/200" alt/></a>
                                    <a className="list-group-item list-group-item-action bg-white"
                                       id="list-profile-list" data-toggle="list" href="#galaxy" role="tab"
                                       aria-controls="profile"><img src="https://picsum.photos/200" alt/></a>
                                    <a className="list-group-item list-group-item-action bg-white"
                                       id="list-messages-list" data-toggle="list" href="#star" role="tab"
                                       aria-controls="messages"><img src="https://picsum.photos/200" alt/></a>
                                    <a className="list-group-item list-group-item-action bg-white"
                                       id="list-settings-list" data-toggle="list" href="#ddc" role="tab"
                                       aria-controls="settings"><img src="https://picsum.photos/200" alt/></a>
                                    <a className="list-group-item list-group-item-action bg-white"
                                       id="list-settings-list" data-toggle="list" href="#mega" role="tab"
                                       aria-controls="settings"><img src="https://picsum.photos/200" alt/></a>
                                    <a className="list-group-item list-group-item-action bg-white"
                                       id="list-settings-list" data-toggle="list" href="#cine" role="tab"
                                       aria-controls="settings"><img src="https://picsum.photos/200" alt/></a>
                                    <a className="list-group-item list-group-item-action bg-white"
                                       id="list-settings-list" data-toggle="list" href="#lotte" role="tab"
                                       aria-controls="settings"><img src="https://picsum.photos/200" alt/></a>
                                </div>
                            </div>
                            <div className="col-10 middle-content">
                                <div className="tab-content" id="tab-sublist">
                                    <div className="tab-pane fade show active" id="bhd" role="tabpanel"
                                         aria-labelledby="list-home-list">
                                        <div className="showTime__detail-2 row">
                                            <div className="col-4 showTime__items-left-2 ">
                                                <div className="list-group " id="list-tab" role="tablist">
                                                    <div
                                                        className=" showTime__sublist list-group-item list-group-item-action active bg-white d-flex "
                                                        id="list-home-list" data-toggle="list" href="#bhd-1" role="tab"
                                                        aria-controls="home">
                                                        <img src="https://picsum.photos/200" alt/>
                                                        <div className="movieCinema">
                                                            <span className="nameMovieCinema">
                                                            <span className="colorCinema">BHD Star</span>- Bitexco
                                                            </span>
                                                            <span className="infoMovieCinema">L3-Bitexco Icon 68, 2 Hải Triều, Q.1</span>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className=" showTime__sublist list-group-item list-group-item-action bg-white d-flex "
                                                        id="list-home-list" data-toggle="list" href="#bhd-2" role="tab"
                                                        aria-controls="home">
                                                        <img src="https://picsum.photos/200" alt="cinema logo"/>
                                                        <div className="movieCinema">
                                                            <span className="nameMovieCinema">
                                                                <span className="colorCinema">BHD Star</span> - Bitexco</span>
                                                            <span className="infoMovieCinema">L3-Bitexco Icon 68, 2 Hải Triều, Q.1</span>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className=" showTime__sublist list-group-item list-group-item-action bg-white d-flex "
                                                        id="list-home-list" data-toggle="list" href="#bhd-3" role="tab"
                                                        aria-controls="home">
                                                        <img src="https://picsum.photos/200" alt/>
                                                        <div className="movieCinema">
                                                            <span className="nameMovieCinema">
                                                                <span className="colorCinema">BHD Star</span> - Bitexco</span>
                                                            <span className="infoMovieCinema">L3-Bitexco Icon 68, 2 Hải Triều, Q.1</span>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className=" showTime__sublist list-group-item list-group-item-action bg-white d-flex "
                                                        id="list-home-list" data-toggle="list" href="#bhd-4" role="tab"
                                                        aria-controls="home">
                                                        <img src="https://picsum.photos/200" alt/>
                                                        <div className="movieCinema">
                      <span className="nameMovieCinema">
                        <span className="colorCinema">BHD Star</span> - Bitexco
                      </span>
                                                            <span className="infoMovieCinema">L3-Bitexco Icon 68, 2 Hải
                        Triều, Q.1</span>
                                                            </div>
                                                    </div>
                                                    <div
                                                        className=" showTime__sublist list-group-item list-group-item-action bg-white d-flex "
                                                        id="list-home-list" data-toggle="list" href="#bhd-5" role="tab"
                                                        aria-controls="home">
                                                        <img src="https://picsum.photos/200"
                                                             alt/>
                                                        <div className="movieCinema">
                      <span className="nameMovieCinema">
                        <span className="colorCinema">BHD Star</span> - Bitexco
                      </span>
                                                            <span className="infoMovieCinema">L3-Bitexco Icon 68, 2 Hải
                        Triều, Q.1</span>
                                                            </div>
                                                    </div>
                                                    <div
                                                        className=" showTime__sublist list-group-item list-group-item-action bg-white d-flex "
                                                        id="list-home-list" data-toggle="list" href="#bhd-6" role="tab"
                                                        aria-controls="home">
                                                        <img src="https://picsum.photos/200"
                                                             alt/>
                                                        <div className="movieCinema">
                      <span className="nameMovieCinema">
                        <span className="colorCinema">BHD Star</span> - Bitexco
                      </span>
                                                            <span className="infoMovieCinema">L3-Bitexco Icon 68, 2 Hải
                        Triều, Q.1</span>
                                                             </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-8 showTime__items-right-2">
                                                <div className="tab-content" id="nav-tabContent">
                                                    <div className="tab-pane fade show active" id="bhd-1"
                                                         role="tabpanel" aria-labelledby="list-home-list">
                                                        <div className="showTime__movie">
                                                            <div className="showTime__movie-panel">
                                                                <div className="showTime__movie-pane-top">
                                                                    <img
                                                                        src="https://picsum.photos/200"
                                                                        alt/>
                                                                    <div className="showTime__movie-pane-top-info">
                                                                        <p className="showTime__movie-pane-top-info-name">
                              <span className="showTime__movie-pane-top-info-brand">
                                C16
                              </span>
                                                                            <span
                                                                                className="showTime__movie-pane-top-info-title">
                                Dị Nhân Thế Hệ Mới - The New
                                Mutants
                              </span>
                                                                        </p>
                                                                        <p className="showTime__movie-pane-top-info-name-detail">
                                                                            100 phút - TIX 6.2 - IMDb 7</p>
                                                                    </div>
                                                                </div>
                                                                <div className="showTime__movie-pane-bottom ">
                                                                    <div className="showTime__movie-pane-bottom-time">
                                                                        <div
                                                                            className="showTime__movie-pane-bottom-time-ver">
                                                                            2D Digital
                                                                        </div>
                                                                        <div
                                                                            className="showTime__movie-pane-bottom-time-sessions">
                                                                            <a href="#"
                                                                               className="showTime__movie-pane-bottom-time-sessions-link">
                                                                                <span
                                                                                    className="showTime__movie-pane-bottom-time-list-sessions-link-start-end-time">17:30</span>
                                                                                ~ 19:10
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="showTime__movie">
                                                            <div className="showTime__movie-panel">
                                                                <div className="showTime__movie-pane-top">
                                                                    <img src="https://picsum.photos/200"
                                                                         alt/>
                                                                    <div className="showTime__movie-pane-top-info">
                                                                        <p className="showTime__movie-pane-top-info-name">
                              <span className="showTime__movie-pane-top-info-brand">
                                C16
                              </span>
                                                                            <span
                                                                                className="showTime__movie-pane-top-info-title">
                                Tenet
                              </span>
                                                                        </p>
                                                                        <p className="showTime__movie-pane-top-info-name-detail">
                                                                            120 phút - TIX 7.3 - IMDb 0</p>
                                                                    </div>
                                                                </div>
                                                                <div className="showTime__movie-pane-bottom ">
                                                                    <div className="showTime__movie-pane-bottom-time">
                                                                        <div
                                                                            className="showTime__movie-pane-bottom-time-ver">
                                                                            2D Digital
                                                                        </div>
                                                                        <div
                                                                            className="showTime__movie-pane-bottom-time-sessions">
                                                                            <a href="#"
                                                                               className="showTime__movie-pane-bottom-time-sessions-link">
                                                                                <span
                                                                                    className="showTime__movie-pane-bottom-time-list-sessions-link-start-end-time">13:45</span>
                                                                                ~ 15:45
                                                                            </a>
                                                                            <a href="#"
                                                                               className="showTime__movie-pane-bottom-time-sessions-link">
                                                                                <span
                                                                                    className="showTime__movie-pane-bottom-time-list-sessions-link-start-end-time">16:15</span>
                                                                                ~ 18:15
                                                                            </a>
                                                                            <a href="#"
                                                                               className="showTime__movie-pane-bottom-time-sessions-link">
                                                                                <span
                                                                                    className="showTime__movie-pane-bottom-time-list-sessions-link-start-end-time">18:15</span>
                                                                                ~ 20:15
                                                                            </a>
                                                                            <a href="#"
                                                                               className="showTime__movie-pane-bottom-time-sessions-link">
                                                                                <span
                                                                                    className="showTime__movie-pane-bottom-time-list-sessions-link-start-end-time">19:25</span>
                                                                                ~ 21:25
                                                                            </a>
                                                                            <a href="#"
                                                                               className="showTime__movie-pane-bottom-time-sessions-link">
                                                                                <span
                                                                                    className="showTime__movie-pane-bottom-time-list-sessions-link-start-end-time">22:05</span>
                                                                                ~ 00:05
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="showTime__movie">
                                                            <div className="showTime__movie-panel">
                                                                <div className="showTime__movie-pane-top">
                                                                    <img
                                                                        src="https://picsum.photos/200"
                                                                        alt/>
                                                                    <div className="showTime__movie-pane-top-info">
                                                                        <p className="showTime__movie-pane-top-info-name">
                              <span className="showTime__movie-pane-top-info-brand">
                                C16
                              </span>
                                                                            <span
                                                                                className="showTime__movie-pane-top-info-title">
                                Greenland: Thảm Hoạ Thiên Thạch -
                                Greenland
                              </span>
                                                                        </p>
                                                                        <p className="showTime__movie-pane-top-info-name-detail">
                                                                            100 phút - TIX 8.2 - IMDb 0</p>
                                                                    </div>
                                                                </div>
                                                                <div className="showTime__movie-pane-bottom ">
                                                                    <div className="showTime__movie-pane-bottom-time">
                                                                        <div
                                                                            className="showTime__movie-pane-bottom-time-ver">
                                                                            2D Digital
                                                                        </div>
                                                                        <div
                                                                            className="showTime__movie-pane-bottom-time-sessions">
                                                                            <a href="#"
                                                                               className="showTime__movie-pane-bottom-time-sessions-link">
                                                                                <span
                                                                                    className="showTime__movie-pane-bottom-time-list-sessions-link-start-end-time">13:45</span>
                                                                                ~ 15:45
                                                                            </a>
                                                                            <a href="#"
                                                                               className="showTime__movie-pane-bottom-time-sessions-link">
                                                                                <span
                                                                                    className="showTime__movie-pane-bottom-time-list-sessions-link-start-end-time">16:15</span>
                                                                                ~ 18:15
                                                                            </a>
                                                                            <a href="#"
                                                                               className="showTime__movie-pane-bottom-time-sessions-link">
                                                                                <span
                                                                                    className="showTime__movie-pane-bottom-time-list-sessions-link-start-end-time">18:15</span>
                                                                                ~ 20:15
                                                                            </a>
                                                                            <a href="#"
                                                                               className="showTime__movie-pane-bottom-time-sessions-link">
                                                                                <span
                                                                                    className="showTime__movie-pane-bottom-time-list-sessions-link-start-end-time">19:25</span>
                                                                                ~ 21:25
                                                                            </a>
                                                                            <a href="#"
                                                                               className="showTime__movie-pane-bottom-time-sessions-link">
                                                                                <span
                                                                                    className="showTime__movie-pane-bottom-time-list-sessions-link-start-end-time">22:05</span>
                                                                                ~ 00:05
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="showTime__movie">
                                                            <div className="showTime__movie-panel">
                                                                <div className="showTime__movie-pane-top">
                                                                    <img
                                                                        src="https://picsum.photos/200"
                                                                        alt/>
                                                                    <div className="showTime__movie-pane-top-info">
                                                                        <p className="showTime__movie-pane-top-info-name">
                              <span className="showTime__movie-pane-top-info-brand">
                                C16
                              </span>
                                                                            <span
                                                                                className="showTime__movie-pane-top-info-title">
                                Greenland: Thảm Hoạ Thiên Thạch -
                                Greenland
                              </span>
                                                                        </p>
                                                                        <p className="showTime__movie-pane-top-info-name-detail">
                                                                            100 phút - TIX 8.2 - IMDb 0</p>
                                                                    </div>
                                                                </div>
                                                                <div className="showTime__movie-pane-bottom ">
                                                                    <div className="showTime__movie-pane-bottom-time">
                                                                        <div
                                                                            className="showTime__movie-pane-bottom-time-ver">
                                                                            2D Digital
                                                                        </div>
                                                                        <div
                                                                            className="showTime__movie-pane-bottom-time-sessions">
                                                                            <a href="#"
                                                                               className="showTime__movie-pane-bottom-time-sessions-link">
                                                                                <span
                                                                                    className="showTime__movie-pane-bottom-time-list-sessions-link-start-end-time">13:45</span>
                                                                                ~ 15:45
                                                                            </a>
                                                                            <a href="#"
                                                                               className="showTime__movie-pane-bottom-time-sessions-link">
                                                                                <span
                                                                                    className="showTime__movie-pane-bottom-time-list-sessions-link-start-end-time">16:15</span>
                                                                                ~ 18:15
                                                                            </a>
                                                                            <a href="#"
                                                                               className="showTime__movie-pane-bottom-time-sessions-link">
                                                                                <span
                                                                                    className="showTime__movie-pane-bottom-time-list-sessions-link-start-end-time">18:15</span>
                                                                                ~ 20:15
                                                                            </a>
                                                                            <a href="#"
                                                                               className="showTime__movie-pane-bottom-time-sessions-link">
                                                                                <span
                                                                                    className="showTime__movie-pane-bottom-time-list-sessions-link-start-end-time">19:25</span>
                                                                                ~ 21:25
                                                                            </a>
                                                                            <a href="#"
                                                                               className="showTime__movie-pane-bottom-time-sessions-link">
                                                                                <span
                                                                                    className="showTime__movie-pane-bottom-time-list-sessions-link-start-end-time">22:05</span>
                                                                                ~ 00:05
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="tab-pane fade" id="bhd-2" role="tabpanel"
                                                         aria-labelledby="list-profile-list">
                                                    </div>
                                                    <div className="tab-pane fade" id="bhd-3" role="tabpanel"
                                                         aria-labelledby="list-messages-list">
                                                    </div>
                                                    <div className="tab-pane fade" id="bhd-4" role="tabpanel"
                                                         aria-labelledby="list-settings-list">
                                                    </div>
                                                    <div className="tab-pane fade" id="bhd-5" role="tabpanel"
                                                         aria-labelledby="list-settings-list">
                                                    </div>
                                                    <div className="tab-pane fade" id="bhd-6" role="tabpanel"
                                                         aria-labelledby="list-settings-list">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="galaxy" role="tabpanel"
                                         aria-labelledby="list-profile-list">...
                                    </div>
                                    <div className="tab-pane fade" id="star" role="tabpanel"
                                         aria-labelledby="list-messages-list">
                                        ...
                                    </div>
                                    <div className="tab-pane fade" id="ddc" role="tabpanel"
                                         aria-labelledby="list-settings-list">
                                        ...
                                    </div>
                                    <div className="tab-pane fade" id="mega" role="tabpanel"
                                         aria-labelledby="list-settings-list">
                                        ...
                                    </div>
                                    <div className="tab-pane fade" id="cine" role="tabpanel"
                                         aria-labelledby="list-settings-list">
                                        ...
                                    </div>
                                    <div className="tab-pane fade" id="lotte" role="tabpanel"
                                         aria-labelledby="list-settings-list">...
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ========== /6- Showtime  ========== */}


                {/* ========== 7- News ========== */}
                <div className="news my-5">
                    <div className="container section">
                        <img className="section__icon" src="https://www.flaticon.com/svg/static/icons/svg/3320/3320351.svg" alt="news-icon"/>
                        <h3 className="section__title">News</h3>
                    </div>
                    <div className="container">
                        <News />
                    </div>
                </div>
                {/* ========== /7- News  ========== */}

                <FooterGuest/>
            </div>
        );
    }
} //end of class

const mapStateToProps = (state) => {
    return {
        loading: state.listNowPlayingReducer.loading,
        nowPlayingList: state.listNowPlayingReducer.data,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        nowPlayingListAPI: () => {
            dispatch(actNowPlayingMovieAPI());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
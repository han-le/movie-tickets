import React, {Component} from "react";
import  "./movie-card.css";
import {Link} from "react-router-dom";

export default class MovieCard extends Component {

    getImgLink = (src) => {
        if (!src || src === "http://movie0706.cybersoft.edu.vn/hinhanh/avenger-infinity-war_gp07.jpg") {
            return "https://i.stack.imgur.com/y9DpT.jpg";
        }
        return src;
    }

    render() {
        const {movieObj} = this.props;

        return (
            <div className="movie-card">
                <div className="card__image">
                    <img src={this.getImgLink(movieObj.hinhAnh)} className="card-img-top" alt="movie poster"/>
                </div>

                <div className="card-body">
                    {/*<a href="#" className="btn btn-primary">Buy Ticket</a>*/}
                    <Link className="btn btn-primary"  to={`/movie/${movieObj.maPhim}`} >Buy Ticket</Link>
                </div>
            </div>
        );
    }
}

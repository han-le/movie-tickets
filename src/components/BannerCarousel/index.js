import React, {Component} from 'react';
import "./banner-carousel.css";

class BannerCarousel extends Component {
    render() {
        return (
            <div id="banner-carousel" className="carousel slide carousel-fade banner-carousel" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item  active">
                        <img className="d-block w-100" src="https://s3img.vcdn.vn/123phim/2020/11/quai-dan-freaky-c18-16062142816418.png" alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://s3img.vcdn.vn/123phim/2020/11/gia-dinh-chan-to-phieu-luu-ky-bigfoot-family-p-16061896575573.png" alt="First slide" />
                    </div>

                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://s3img.vcdn.vn/123phim/2020/12/toi-ac-thinh-lang-stone-skipping-c16-16075018301721.png" alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://s3img.vcdn.vn/123phim/2020/12/doraemon-nobita-va-nhung-ban-khung-long-moi-doraemon-the-movie-nobita-s-new-dinosaurs-p-16076874736300.png" alt="Third slide" />
                    </div>

                </div>
                <a className="carousel-control-prev" href="#banner-carousel" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#banner-carousel" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        );
    }
}

export default BannerCarousel;
import React, { Component } from "react";
import "./css/footer-style.css";

export default class FooterGuest extends Component {
  render() {
    return (
      <div>
        {/* ============Footer============ */}
        <div className="container-fluid pb-0 mb-0 justify-content-center text-light page-footer">
          <footer>
            <div className="row my-5 justify-content-center py-5">
              <div className="col-11">
                <div className="row ">
                  <div className="col-xl-8 col-md-4 col-sm-4 col-12 my-auto mx-auto a">
                    <h3 className="text-muted mb-md-0 mb-5 bold-text">
                      Aurora Ticket
                    </h3>
                  </div>
                  <div className="col-xl-2 col-md-4 col-sm-4 col-12">
                    <h6 className="mb-3 mb-lg-4 bold-text ">
                      <b>CINEMAS</b>
                    </h6>
                    <ul className="list-unstyled">
                      <li>Galaxy</li>
                      <li>Lotte</li>
                      <li>CGV</li>
                    </ul>
                  </div>
                  <div className="col-xl-2 col-md-4 col-sm-4 col-12">
                    <h6 className="mb-3 mb-lg-4 text-muted bold-text mt-sm-0 mt-5">
                      <b>MOVIES</b>
                    </h6>
                    <p className="mb-1">Buy ticket</p>
                    <p>Watch Trailer</p>
                  </div>
                </div>
                <div className="row ">
                  <div className="col-xl-8 col-md-4 col-sm-4 col-auto my-md-0 mt-5 order-sm-1 order-3 align-self-end">
                    <p className="social text-muted mb-0 pb-0 bold-text">
                      {" "}
                      <span className="mx-2">
                        <i className="fa fa-facebook" aria-hidden="true" />
                      </span>{" "}
                      <span className="mx-2">
                        <i
                          className="fa fa-linkedin-square"
                          aria-hidden="true"
                        />
                      </span>{" "}
                      <span className="mx-2">
                        <i className="fa fa-twitter" aria-hidden="true" />
                      </span>{" "}
                      <span className="mx-2">
                        <i className="fa fa-instagram" aria-hidden="true" />
                      </span>{" "}
                    </p>
                    <small className="rights">
                      Project by Duong Thanh Huy & Le Ngoc Han
                    </small>
                  </div>
                  <div className="col-xl-2 col-md-4 col-sm-4 col-auto order-1 align-self-end ">
                    <h6 className="mt-55 mt-2 text-muted bold-text">
                      <b>DUONG THANH HUY</b>
                    </h6>
                    <small>
                      {" "}
                      <span>
                        <i className="fa fa-envelope" aria-hidden="true" />
                      </span>{" "}
                      huy-email@gmail.com
                    </small>
                  </div>
                  <div className="col-xl-2 col-md-4 col-sm-4 col-auto order-2 align-self-end mt-3 ">
                    <h6 className="text-muted bold-text">
                      <b>LE NGOC HAN</b>
                    </h6>
                    <small>
                      <span>
                        <i className="fa fa-envelope" aria-hidden="true" />
                      </span>{" "}
                      ngochan148@gmail.com
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>

        {/* End of Footer */}
      </div>
    );
  }
}

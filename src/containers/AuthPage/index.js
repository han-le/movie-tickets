import React, { Component } from "react";
import { actLoginApi } from "./modules/action";
import { connect } from "react-redux";
import Loader from "./../../components/Loader";

import "./css/main.css";
import "./css/util.css";
import { Link } from "react-router-dom";

class AuthPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taiKhoan: "",
      matKhau: "",
    };
  }

  handleOnChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleLogin = (e) => {
    e.preventDefault();
    this.props.login(this.state, this.props.history);
  };

  renderNoti = () => {
    const { error } = this.props;
    if (error) {
      return <div className="alert alert-danger">{error.response.data}</div>;
    }
  };

  render() {
    const { loading } = this.props;
    if (loading) return <Loader />;
    return (
      <div>
        <div className="wrapper">
          <div className="container-login100">
            <div
              className="login100-more"
              // style={{ backgroundImage: 'url("img/login/backapp (2).jpg")' }}
            />
            <div className="wrap-login100 p-l-50 p-r-50 p-t-72 p-b-50">
              <form
                className="login100-form validate-form"
                onSubmit={this.handleLogin}
              >
                <span className="login100-form-title p-b-59">Log In</span>
                <div
                  className="wrap-input100 validate-input"
                  data-validate="Username is required"
                >
                  <span className="label-input100">Username</span>
                  <input
                    type="text"
                    className="input100 form-control"
                    name="taiKhoan"
                    placeholder="Username..."
                    onChange={this.handleOnChange}
                  />
                  <span className="focus-input100" />
                </div>
                <div
                  className="wrap-input100 validate-input"
                  data-validate="Password is required"
                >
                  <span className="label-input100">Password</span>
                  <input
                    type="text"
                    className="input100 form-control"
                    name="matKhau"
                    placeholder="*************"
                    onChange={this.handleOnChange}
                  />
                  <span className="focus-input100" />
                </div>
                <div className="container-login100-form-btn">
                  <div className="wrap-login100-form-btn">
                    <div className="login100-form-bgbtn" />
                    <button type="submit" className="login100-form-btn">
                      Log In
                    </button>
                  </div>
                  <div>
                    <Link to={"/signUp"}>
                      <a
                        href="#"
                        className="dis-block txt3 hov1 p-r-30 p-t-10 p-b-10 p-l-30"
                      >
                        Sign up
                        <i className="fa fa-long-arrow-right m-l-5" />
                      </a>
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.authReducer.loading,
    error: state.authReducer.err,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user, history) => {
      dispatch(actLoginApi(user, history));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);

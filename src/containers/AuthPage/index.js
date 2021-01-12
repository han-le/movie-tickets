import React, { Component } from "react";
import { actLoginApi } from "./modules/action";
import { connect } from "react-redux";
import Loader from "./../../components/Loader";
import "./auth-page.css";

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
        <div className="main_form_body">
          <div className="form__wrapper sign-in">
            <div className="form__container">
              {/* Form body */}
              <div className="form__body-wrapper ">
                <form className="form__content" onSubmit={this.handleLogin}>
                  <span className="form__title">Sign In</span>
                  <div className="wrap__input">
                    <input className="input" type="text" name="taiKhoan" placeholder="Username"
                           onChange={this.handleOnChange} />
                  </div>
                  <div className="wrap__input">
                    <input className="input" type="password" name="matKhau" placeholder="Password"
                           onChange={this.handleOnChange} />
                  </div>
                  {this.renderNoti()}
                  <div className="form__button-container">
                    <div className="form__button-wrap">
                      <div className="form__button-bg"></div>
                      <button className="form__button-btn" type="submit">Submit</button>
                    </div>
                  </div>
                  <div className="form__button-sign-in">
                    <Link to={"/signUp"}>Become a member</Link>
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

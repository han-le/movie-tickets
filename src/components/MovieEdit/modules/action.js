import {UPDATE_MOVIE_REQUEST, UPDATE_MOVIE_SUCCESS, UPDATE_MOVIE_FAILED} from "./constants";
import Axios from "axios";
import {  message } from 'antd';


export const actMovieUpdateAPI = (account) => {
    let accessToken = JSON.parse(localStorage.getItem("UserAdmin")).accessToken;
    return (dispatch) => {
        dispatch(actMovieUpdateRequest());
        Axios({
            url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/CapNhatPhim",
            method: "POST",
            data: account,
            headers: {
                Authorization: `Bearer ${accessToken}`,
            }
        }).then((result) => {
            // dispatch(actUserListUpdateSuccess(result.data));
            console.log("okay");
            window.history.go("/dashboard/user")
        }).catch((err) => {
            // dispatch(actUserListUpdateFailed(err));
            console.log(err.response.data);
            message.error({content:"Sorry, can not update this movie"});
        })
    }
}


export const actMovieUpdateRequest = () => {
    return {
        type: UPDATE_MOVIE_REQUEST
    }
};
export const actMovieUpdateSuccess = (movie) => {
    return {
        type: UPDATE_MOVIE_SUCCESS,
        payload: movie
    }
};
export const actMovieUpdateFailed = (err) => {
    return {
        type: UPDATE_MOVIE_FAILED,
        payload: err
    }
};

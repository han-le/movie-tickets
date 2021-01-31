import {UPDATE_MOVIE_REQUEST} from "./constants";
import Axios from "axios";
import {  message } from 'antd';
import { Alert } from 'antd';


export const actMovieUpdateAPI = (movie) => {
    let accessToken = JSON.parse(localStorage.getItem("UserAdmin")).accessToken;
    return (dispatch) => {
        dispatch(actMovieUpdateRequest());
        Axios({
            url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/CapNhatPhimUpload",
            method: "POST",
            data: movie,
            headers: {
                Authorization: `Bearer ${accessToken}`,
            }
        }).then((result) => {
            // <Alert message="Success Tips" type="success" showIcon />

            window.history.go("/dashboard/user");
        }).catch((err) => {
            // console.log(err.response.data);
            message.error({content:"Sorry, can not update this movie"});
        })
    }
}

export const actMovieUpdateRequest = () => {
    return {
        type: UPDATE_MOVIE_REQUEST
    }
};


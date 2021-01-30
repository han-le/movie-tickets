import {UPDATE_MOVIE_REQUEST} from "./constants";
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
            alert("Updated Successful")
            window.history.go("/dashboard/user");
        }).catch((err) => {
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


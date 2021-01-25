import {ADD_MOVIE_FAILED, ADD_MOVIE_REQUEST, ADD_MOVIE_SUCCESS} from "./constants";
import Axios from "axios";

export const actAddMovieRequest = () => {
    return {
        type: ADD_MOVIE_REQUEST,
    }
}
export const actAddMovieSuccess = (data) => {
    return {
        type: ADD_MOVIE_SUCCESS,
        payload: data
    }
}
export const actAddMovieFailed = (err) => {
    return {
        type: ADD_MOVIE_FAILED,
        payload: err
    }
}
export const actAddMovieAPI = (movie) => {

    //JSON.parse to convert string to an object
    let accessToken = JSON.parse(localStorage.getItem("UserAdmin")).accessToken;

    if (localStorage.getItem("UserAdmin")) {
        return (dispatch) => {
            dispatch(actAddMovieRequest());
            Axios({
                url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhim",
                method: "POST",
                data: movie,
                headers: {
                    Authorization:`Bearer + ${accessToken}`
                }
            })
                .then((result) => {
                    dispatch(actAddMovieSuccess(result.data))
                })
                .catch((err) => {
                    dispatch(actAddMovieFailed(err))
                })
        }
    }
}
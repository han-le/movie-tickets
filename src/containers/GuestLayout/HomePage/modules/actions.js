import Axios from "axios";

//Goi API => return a callback fnc => lay ve 1 array cac object phim ve
export const actNowPlayingMovieAPI = () => {
    return (dispatch) => {
        dispatch(actNowPlayingMovieRequest());
        Axios({
            url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP07",
            method: "GET",
        })
            .then((response) => {
                dispatch(actNowPlayingMovieSuccess(response.data))
            })
            .catch((error)=>{dispatch(actNowPlayingMovieFailed(error))})
    }
};

export const actNowPlayingMovieRequest = () => {
    return {
        type: "listNowPlayingReducer/REQUEST",
    }
};

export const actNowPlayingMovieSuccess = (data) => {
    return {
        type: "listNowPlayingReducer/SUCCESS",
        payload: data,
    }
};

export const actNowPlayingMovieFailed = (error) => {
    return {
        type: "listNowPlayingReducer/FAILED",
        payload: error
    }
};

import { ADD_ACCOUNT_REQUEST, ADD_ACCOUNT_SUCCESS, ADD_ACCOUNT_FAILED } from "./constants";
import Axios from "axios";


export const actUserListAddAPI = (account) => {
    let accessToken = JSON.parse(localStorage.getItem("UserAdmin")).accessToken;
    return (dispatch) => {
        dispatch(actUserListAddRequest());
        Axios({
            url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung",
            method: "POST",
            data: account,
            headers: {
                Authorization: `Bearer ${accessToken}`,
            }
        }).then((result) => {
            dispatch(actUserListAddSuccess(result.data));
            console.log("okay");
        }).catch((err) => {
            dispatch(actUserListAddFailed(err));
            console.log(" no okay");

        })
    }
}

export const actUserListAddRequest = () => {
    return {
        type: ADD_ACCOUNT_REQUEST
    }
};
export const actUserListAddSuccess = (user) => {
    return {
        type: ADD_ACCOUNT_SUCCESS,
        payload: user
    }
};
export const actUserListAddFailed = (err) => {
    return {
        type: ADD_ACCOUNT_FAILED,
        payload: err
    }
};

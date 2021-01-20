import {USER_LIST_FAILED, USER_LIST_REQUEST, USER_LIST_SUCCESS} from "./constants";
import Axios from "axios";

export const actUserListRequest = () => {
    return {
        type: USER_LIST_REQUEST
    }
};
export const actUserListSuccess = (data) => {
    return {
        type: USER_LIST_SUCCESS,
        payload: data
    }
};
export const actUserListFailed = (err) => {
    return {
        type: USER_LIST_FAILED,
        payload: err
    }
};
export const actUserListAPI = () => {
    return (dispatch) => {
        dispatch(actUserListRequest());
        Axios({
            url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP07",
            method: "GET"
        })
            .then((result) => {
                dispatch(actUserListSuccess(result.data))
            })
            .catch((err) => {
                dispatch(actUserListFailed(err))
            });
    };
};
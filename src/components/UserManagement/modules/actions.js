import { USER_LIST_FAILED, USER_LIST_REQUEST, USER_LIST_SUCCESS } from "./constants";
import Axios from "axios";

export const actUserListAPI = () => {
    return (dispatch) => {
        dispatch(actUserListRequest());
        Axios({
            url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01",
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

export const actUserListDeleteAPI = (id) => {
    let accessToken = JSON.parse(localStorage.getItem("UserAdmin")).accessToken;
    return () => {
        Axios({
            url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${id}`,
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${accessToken}`,
            }
        }).then(() => {
            console.log("success");
        }).catch((err) => {
            console.log(err);
        })
    }
}

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

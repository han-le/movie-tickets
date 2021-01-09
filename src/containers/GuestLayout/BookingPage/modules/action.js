import { ADD_GHE_REQUESET, ADD_GHE_SUCCESS, ADD_GHE_FAILED } from "./constant";

export const actAddGheRequest =(ghe)=>{
    return{
        type: ADD_GHE_REQUESET,
        ghe,
    }
}

export const actAddGheFailed =(soGhe)=>{
    return{
        type: ADD_GHE_FAILED,
        soGhe,
    }
}
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

// let subArr =[]
// arr = [[],[],[],[]]
// let Arr = array [160 object].map(object,index) => {
//     if (index *10 === 0) {
//         subArr = []
//         subArr = []
//     }
// }


// return (
//     arr.map(asdas)
// )

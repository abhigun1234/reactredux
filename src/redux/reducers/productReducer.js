import { ActionTypes } from "../constants/actionTypes"

const intialState={
    product:[]
}
export const productReducer=(state=intialState,{type,payload})=>{
//    onsole.log("payload",payload)
//     console.log("type",type) c
    switch(type){
        case ActionTypes.SET_PRODUCTS:
            return {...state,products:payload}
        default:
            return state;
    }

}
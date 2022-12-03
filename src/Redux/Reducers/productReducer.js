import { ActionType } from "../Constants/action-type";

const initialState = {
    products:[{
        id:1,
        title:"Jitin",
        category:"Developer"
    }]
}

export const productReducer = (state = initialState, {type, payload})=>{
    switch (type) {
        case ActionType.SET_PRODUCT:
            return state;
        default:
            return state;
    };
};
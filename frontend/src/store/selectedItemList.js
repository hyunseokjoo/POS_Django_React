export const SET_ITEM = "HOME/SET_ITEM";
export const REMOVE_ITEM  = "HOME/REMOVE_ITEM";
export const PLUS_ITEM  = "HOME/PLUS_ITEM";
export const MINUS_ITEM  = "HOME/MINUS_ITEM";
export const PAY_ITEM  = "HOME/PAY_ITEM";

export const setItem = product => {
    return { 
        type: SET_ITEM, 
        payload : product,
    };
};
export const removeItem = product => {
    return { 
        type: SET_ITEM, 
        payload : product,
    };
};
export const plusItem = () => ({ type: PLUS_ITEM })
export const minusItem = () => ({ type: MINUS_ITEM })
export const payItem = () => ({ type: PAY_ITEM })

const iniItemListState = [
    {
        id : 0,
        category: 0,
        price : 0,
        number : 0,
    }
];

const selectedItemReducer = (state = iniItemListState , action) => {
    switch(action.type){
        case SET_ITEM:
            return [
                ...state,
                action.payload
            ];
        case REMOVE_ITEM:
            return {
                ...state,
                is_logined : false,
                jwtToken: ""
            };
        case PLUS_ITEM:
            return {
                ...state,
                is_logined : false,
                jwtToken: ""
            };
        case MINUS_ITEM:
                return {
                    ...state,
                    is_logined : false,
                    jwtToken: ""
            };
        case PAY_ITEM:
                return {
                    ...state,
                    is_logined : false,
                    jwtToken: ""
                };
        default:
            return state;
    }
};


export default selectedItemReducer;
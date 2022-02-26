export const SET_TOKEN = "APP/SET_TOKEN";
export const REMOVE_TOKEN = "APP/REMOVE_TOKEN";

export const setToken = jwtToken => ({ type: SET_TOKEN, jwtToken })
export const removeToken = () => ({ type: REMOVE_TOKEN })

const jwtTokenState = {
    is_logined : false,
    jwtToken : ""
};

const jwtReducer = (state = jwtTokenState , action) => {
    switch(action.type){
        case SET_TOKEN:
            localStorage.setItem('jwtToken', action.jwtToken);
            return {
                ...state,
                is_logined : true,
                jwtToken: action.jwtToken
            };
        case REMOVE_TOKEN:
            localStorage.removeItem('jwtToken');
            return {
                ...state,
                is_logined : false,
                jwtToken: ""
            };
        default:
            return state;
    }
};


export default jwtReducer;
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
        type: REMOVE_ITEM, 
        payload : product,
    };
};
export const plusItem = product => {
    return {
        type: PLUS_ITEM, 
        payload: product,
    }
}
export const minusItem = product => {
    return { 
        type: MINUS_ITEM, 
        payload: product,
    }
}
export const payItem = () => ({ type: PAY_ITEM })

const iniItemListState = {
    itemList : [ 
    ]
};

const selectedItemReducer = (state = iniItemListState , action) => {
    let findItem = []
    let newItemList = []
    switch(action.type){
        case SET_ITEM:
            console.log(action.payload);
            findItem = state.itemList.find(item => action.payload.id === item.id && action.payload.category === item.category)        
            if (findItem){
                console.log("이미 값이 존재합니다.");
                newItemList = state.itemList.map((item)=> item.id === findItem.id && item.category === findItem.category ? {...findItem, number: findItem.number+1} : item);
                return {
                    ...state,
                    itemList: newItemList
                }
            }else {
                console.log('setItem_payLoad: ');
                const rcData = {...action.payload, number:1}
                console.log(rcData);
                return {
                    ...state,
                    itemList: state.itemList.concat(rcData)
                }
            }
        case REMOVE_ITEM:
            newItemList = state.itemList.filter((item)=> !(item.id === action.payload.id && item.category === action.payload.category) );
            console.log(newItemList);
            return {
                ...state,
                itemList: newItemList
            };
        case PLUS_ITEM:
            findItem = state.itemList.find(item => action.payload.id === item.id && action.payload.category === item.category)
            newItemList = state.itemList.map((item)=> item.id === findItem.id && item.category === findItem.category ? {...findItem, number: findItem.number+1} : item);
            return {
                ...state,
                itemList: newItemList
            }
        case MINUS_ITEM:
            findItem = state.itemList.find(item => action.payload.id === item.id && action.payload.category === item.category)
            newItemList = state.itemList.map((item)=> item.id === findItem.id && item.category === findItem.category && findItem.number > 1 ? {...findItem, number: findItem.number-1} : item);
            return {
                ...state,
                itemList: newItemList
            }
        case PAY_ITEM:
            return {
                ...state,
                itemList: []
            }
        default:
            return state;
    }
};


export default selectedItemReducer;
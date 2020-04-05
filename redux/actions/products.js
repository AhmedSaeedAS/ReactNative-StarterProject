export const SET_PRODUCTS = 'SET_PRODUCTS';
export const ADD_TO_FAV = 'ADD_TO_FAV';
export const REMOVE_FROM_FAV = 'REMOVE_FROM_FAV';
export const SET_DATA = 'SET_DATA';
export const TABBAR = 'TABBAR';



export const setProducts = (products) => {
    return {
        type: SET_PRODUCTS,
        products
    };
}

export const addToFav = (product) => {
    return {
        type: ADD_TO_FAV,
        product
    };
}
export const removeFromFav = (product) => {
    return {
        type: REMOVE_FROM_FAV,
        product
    };
}

export const tabbar = (tabbar) => {
    return {
        type: TABBAR,
        tabbar
    };
}

export const setData = (data) => {
    return {
        type: SET_DATA,
        data
    };
}
import { SET_PRODUCTS, ADD_TO_FAV, REMOVE_FROM_FAV, SET_DATA, TABBAR } from '../actions/products';

const initialState = {
    products: [],
    favs: [],
    data: [],
    tabbar: false
}

const products = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return {
                ...state,
                products: action.products
            }
        case ADD_TO_FAV:
            return {
                ...state,
                favs: [...state.favs, action.product]
            }
        case REMOVE_FROM_FAV:
            return {
                ...state,
                favs: state.favs.slice().filter(f => f._id != action.product._id)
            }
        case SET_DATA:
            return {
                ...state,
                data: [...state.data, action.data]
            }
        case TABBAR:
            return {
                ...state,
                tabbar: action.tabbar
            }
        default:
            return state;
    }
}

export default products;

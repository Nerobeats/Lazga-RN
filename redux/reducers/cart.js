import { ADD_ITEM, REMOVE_ITEM, CHECKOUT } from "./types";

const initialState = { cartItems: null };

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            const newItem = action.payload
            return {
                ...state,
                cartItems: state.cartItems.concat(newItem)
            }
        case REMOVE_ITEM:
            const removedItem = action.payload
            return {
                ...state,
                cartItems: state.cartItems.filter(item => {
                    item !== removedItem
                })
            }
        case CHECKOUT:
            return {
                ...state,
                cartItems: []
            }
        default:
            return state

    }
}
export default reducer
import { ADD_ITEM, REMOVE_ITEM, CHECKOUT } from "../actions/actionTypes";

const initialState = { items: [] };

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            const newItem = action.payload
            return {
                ...state,
                items: [newItem, ...state.items]
            }
        case REMOVE_ITEM:
            const removedItem = action.payload
            return {
                ...state,
                items: state.items.filter(item => item !== removedItem)
            }
        case CHECKOUT:
            return {
                ...state,
                items: []
            }
        default:
            return state

    }
}
export default reducer
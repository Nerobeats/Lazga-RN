import { FETCH_ITEMS } from "../actions/actionTypes";

const initialState = { char: null };

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ITEMS:
            const list = action.payload
            return {
                ...state,
                char: list
            }
        default:
            return state

    }
}
export default reducer
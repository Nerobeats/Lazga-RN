import { FETCH_ITEMS, FETCH_TYPES } from "./actionTypes";
import instance from "./instance";

export const fetchItems = () => async (dispatch) => {
  try {
    const res = await instance.get("list/");
    const list = res.data;
    dispatch({
      type: FETCH_ITEMS,
      payload: list,
    });
    const typesPromise = await instance.get("types/");
    const types = typesPromise.data;
    dispatch({
      type: FETCH_TYPES,
      payload: types,
    });
  } catch (error) {
    console.error(error);
  }
};

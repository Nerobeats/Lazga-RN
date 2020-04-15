import { FETCH_ITEMS } from "./actionTypes";
import instance from "./instance";

export const fetchItems = () => async (dispatch) => {
  try {
    const res = await instance.get("list/");
    const list = res.data;
    dispatch({
      type: FETCH_ITEMS,
      payload: list,
    });
  } catch (error) {
    console.error(error);
  }
};

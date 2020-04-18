import { SET_COLOR, SET_SIZE } from "./actionTypes";

export const setColor = (color) => ({
    type: SET_COLOR,
    payload: color,
});

export const setSize = (size) => ({
    type: SET_SIZE,
    payload: size,
});


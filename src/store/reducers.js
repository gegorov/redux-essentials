import C from '../constants';

const initialState = {};

export const goal = (state = initialState, action) => {
  switch (action.type) {
    case C.SET_GOAL:
      return {
        ...state,
        days: action.payload,
      }

    default:
      return state;
  }
}

export const skiDay = (state = initialState, action) => {
  switch (action.type) {
    case C.ADD_DAY:
      return {
        ...state,
        allSkiDays: [...state.allSkiDays, action.payload],
      }
    default:
      return state;
  }
}

export const errors = (state = initialState, action) => {
  switch (action.type) {
    case C.ADD_ERROR:
      return {
        ...state,
        errors: [...state.errors, ...action.payload],
      }
    case C.CLEAR_ERROR:
      return {
        ...state,
        errors: [...action.payload],
      }
    default:
      return state;
  }
}

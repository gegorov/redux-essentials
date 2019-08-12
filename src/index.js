import C from './constants'
import appReducer from './store/reducers'

import { createStore } from 'redux';

const initialStore = (localStorage['redux-store']) ?
  JSON.parse(localStorage['redux-store']) :
  {};

const store = createStore(appReducer);

window.store = store;

store.subscribe(() => console.log(store.getState()));

store.subscribe(() => {
  const state = JSON.stringify(store.getState());
  localStorage['redux-store'] = state;
});

// store.dispatch({
//   type: C.ADD_DAY,
//   payload: {
//     "resort": "Mt Shasta",
//     "date": "2016-10-28",
//     "powder": false,
//     "backcountry": true
//   }
// })

// store.dispatch({
//   type: C.SET_GOAL,
//   payload: 2,
// })

// let state = initialState

// console.log(`

// 	Initial state
// 	=============
// 	goal: ${state.goal}
// 	resorts: ${JSON.stringify(state.allSkiDays)}
// 	fetching: ${state.resortNames.fetching}
// 	suggestions: ${state.resortNames.suggestions}

// `)

// state = appReducer(state, {
// 	type: C.SET_GOAL,
// 	payload: 2
// })

// state = appReducer(state, {
// 	type: C.ADD_DAY,
// 	payload: {
// 		"resort": "Mt Shasta",
// 		"date": "2016-10-28",
// 		"powder": false,
// 		"backcountry": true
// 	}
// })

// state = appReducer(state, {
// 	type: C.CHANGE_SUGGESTIONS,
// 	payload: ["Mt Tallac", "Mt Hood", "Mt Shasta"]
// })

// console.log(`

// 	Next state
// 	=============
// 	goal: ${state.goal}
// 	resorts: ${JSON.stringify(state.allSkiDays)}
// 	fetching: ${state.resortNames.fetching}
// 	suggestions: ${state.resortNames.suggestions}

// `)

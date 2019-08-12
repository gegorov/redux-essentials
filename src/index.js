import C from './constants'
import appReducer from './store/reducers'
import initialState from './initialState.json'
import { createStore } from 'redux';

const store = createStore(appReducer, initialState);

console.log('initial state', store.getState());

store.dispatch({
	type: C.ADD_DAY,
	payload: {
		"resort": "Mt Shasta",
		"date": "2016-10-28",
		"powder": false,
		"backcountry": true
	}
})

console.log('modified state', store.getState());

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

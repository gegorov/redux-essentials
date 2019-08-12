import C from './constants'
import storeFactory from './store'


const initialState = (localStorage['redux-store']) ?
  JSON.parse(localStorage['redux-store']) :
  {};

// const store = createStore(appReducer);

// window.store = store;

// store.subscribe(() => console.log(`Goal: ${store.getState().goal}`));

// setInterval(() => {
//   store.dispatch({
//     type: C.SET_GOAL,
//     payload: Math.random() * 100,
//   })
// }, 500);

const saveState = () => {
  const state = JSON.stringify(store.getState());
  localStorage['redux-store'] = state;
};

const store = storeFactory(initialState)

store.subscribe(saveState);

store.dispatch({
  type: C.ADD_DAY,
  payload: {
    "resort": "Mt Shasta",
    "date": "2016-10-28",
    "powder": false,
    "backcountry": true
  }
})

store.dispatch({
  type: C.ADD_DAY,
  payload: {
    "resort": "Sqaw Valley",
    "date": "2016-3-28",
    "powder": true,
    "backcountry": true
  }
})

store.dispatch({
  type: C.ADD_DAY,
  payload: {
    "resort": "The Canyons",
    "date": "2016-10-25",
    "powder": false,
    "backcountry": false
  }
})


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

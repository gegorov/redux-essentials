import C from './constants';
import { goal, skiDay, errors } from './store/reducers';

const state = {
  days: 10,
  errors: ['user not authorized'],
  allSkiDays: [
    {
      resort: "Kirkwood",
      date: "2016-12-7",
      powder: true,
      backcountry: false
    },
  ],
};


const goalAction = {
  type: C.SET_GOAL,
  payload: 15,
};

const addDayAction = {
  type: C.ADD_DAY,
  payload: {
    resort: 'Heavenly',
    date: '2016-12-16',
    powder: true,
    backcountry: false,
  },
};

const addErrorsAction = {
  type: C.ADD_ERROR,
  payload: ['cannot connect to server'],
}

const clearErrorsAction = {
  type: C.CLEAR_ERROR,
  payload: [],
}


const nextState = skiDay(state, addDayAction);

console.log(`
  initial goal: ${JSON.stringify(state)}
  action: ${JSON.stringify(clearErrorsAction)}
  new goal: ${JSON.stringify(nextState)}
`);


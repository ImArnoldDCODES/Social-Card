// this was for practice


import { combineReducers } from 'redux';
const ADD_BIRD = 'ADD_BIRD';
const INCREMENT_BIRD = 'INCREMENT_BIRD';
const ADD_FIRSTNAME = 'ADD_FIRSTNAME';

export function addBird(bird) {
  return {
    type: ADD_BIRD,
    bird,
  }
}

export function incrementBird(bird) {
  return {
    type: INCREMENT_BIRD,
    bird
  }
}

export function addFirstname(name) {
  return {
    type: ADD_FIRSTNAME,
    name
  }
}

const defaultBirds = [
  {
    name: 'robin',
    views: 1,
  }
];

const defaultData = [
  {
    firstname: 'hello',
    id: 1
  }
]

function birds(state = defaultBirds, action) {
  switch (action.type) {
    case ADD_BIRD:
      return [
        ...state,
        {
          name: action.bird,
          views: 1
        }
      ];
    case INCREMENT_BIRD:
      const bird = state.find(b => action.bird === b.name);
      const birds = state.filter(b => action.bird !== b.name);
      return [
        ...birds,
        {
          ...bird,
          views: bird.views + 1
        }
      ];
    default:
      return state;
  }
}

function firstname(state = defaultData, action) {
  switch (action.type) {
    case ADD_FIRSTNAME:
      return [
        ...state,
        {
          firstname: action.name
        }
      ]
    default:
      return state
  }
}

const birdApp = combineReducers({
  firstname
});

export default birdApp;
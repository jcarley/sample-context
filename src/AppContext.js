import React, { createContext, useReducer, useContext } from 'react';

let ApplicationContext = createContext();

const initialState = {
	count: 0,
};


let reducer = (state, action) => {
  switch (action.type) {
    case 'increment': {
      return { ...state, count: state.count + action.value };
    }
		case 'decrement': {
			return {...state, count: state.count - action.value}
		}
		default:
			return state;
	}
}

function ApplicationContextProvider({ initialValue, children }) {
  const fullInitialState = {
    ...initialState,
    ...initialValue,
  };

  let [state, dispatch] = useReducer(reducer, fullInitialState);

  let value = { state, dispatch };

  return <ApplicationContext.Provider value={value}>{children}</ApplicationContext.Provider>;
}

const useApplicationContext = () => {
  const context = useContext(ApplicationContext);

  if (!context) {
    throw new Error('Use ApplicationContext with controls wrapped in a ApplicationContextProvider');
  }

  return context;
};

let ApplicationContextConsumer = ApplicationContext.Consumer;

export { ApplicationContext, ApplicationContextProvider, ApplicationContextConsumer, useApplicationContext };

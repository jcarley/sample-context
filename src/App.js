import React from 'react';
import './App.css';
import {useApplicationContext} from './AppContext';

function App() {

  const { state, dispatch } = useApplicationContext();

  const incrementOnClickHandler = (e) => {
    dispatch({type: 'increment', value: 1})
  }

  const decrementOnClickHandler = (e) => {
    dispatch({type: 'decrement', value: 1})
  }

  return (
    <div className="App">
      <div>
        <label>{state.count}</label>
      </div>
      <div>
        <button onClick={incrementOnClickHandler}>Increment</button>
        <button onClick={decrementOnClickHandler}>Decrement</button>
      </div>
    </div>
  );
}

export default App;

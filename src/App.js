import React from 'react';
import './App.css';
import {createStore} from "redux";

const initialState = {
    name: 'O',
    second: 'P'
};

function reducer(state=initialState, action) {
    switch (action.type) {
        case 'NAME':
            return {...state, name: action.payload};
        case 'SEC':
            return {...state, second: action.payload}
    }
    return state;
}

const store = createStore(reducer);


function App() {
    return (
        <div className="App">
            <button onClick={()=>showStste()}>Show state</button>
            <button onClick={()=>store.dispatch(changeName)}>Change name</button>
            <button onClick={()=>store.dispatch(changedSecond)}>Change second</button>
        </div>
    );
}

const changeName = {
    type: 'NAME',
    payload: 'Frad'
};

const changedSecond = {
    type: 'SEC',
    payload: 'Jackson'
};

function showStste() {
    console.log(store.getState());
}

export default App;


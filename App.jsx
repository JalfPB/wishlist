import React from "react";
import './App.css';

const wishes = [
    {text: 'Travel to the moon', done:false},
    {text: 'Pay gym', done:true},
    {text: 'Go to the gym', done:false}
]

const App = () => (
<div className="app">
    <h1>My wishlist App</h1>
    <fieldset className="wish-input">
        <legend className="wish-input__label">New Wish</legend>
        <input className="wish-input__field" placeholder="Enter your wish here"/>
    </fieldset>
    <ul className="wish-list"> 
        {wishes.map(({text, done}, i) => (
            <li key={text} className={`wish-list__item ${done ? "wish-list__item--done" : ""}`}>
                <label htmlFor={`wish${i}`}>{text}
                <input id={`wish${i}`} type="checkbox" checked={done}/>
                </label>
            </li>
        ))}
    </ul>
    <button className="wish-clear" type="button">Archive Done</button>
</div>
);

export default App;

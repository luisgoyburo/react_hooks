import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import App from "./Container/AppClass";
import App from "./Container/AppFunction";
import ColorPicker from "./ColorPicker";
import ColorPicker_Map from "./ColorPicker_Map";
import PhoneNumber from "./PhoneNumber";
import QuizNavBar from "./QuizNavBar";
import GroceryCart from "./GroceryCart";
import EditProfile from "./EditProfile";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <ColorPicker />
    <ColorPicker_Map />
    <PhoneNumber />
    <QuizNavBar questions="uno"  />
    <GroceryCart />
    <EditProfile />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

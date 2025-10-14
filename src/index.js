import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Toggle from "./chp08/Toggle";
import Toggle_2 from "./chp08/Toggle_2";
import Toggle_3_NewSyntax from "./chp08/Toggle_3_NewSyntax";
import ToggleFunction from "./chp08/ToggleFunction";
import MyButton_Argument from "./chp08/MyButton_Argument";
import InputTest from "./chp08/InputTest";
import ConfirmButtonFunction from "./chp08/ConfirmButtonFunction";
import Greeting from "./chp09/ex1/Greeting";
import LoginControl from "./chp09/ex2/LoginControl";
import MainPageWarning from "./chp09/ex3/MainPageWarning";
import LandingPage from "./chp09/closing_ex/LandingPage";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <LandingPage/>
    </React.StrictMode>
);

// setInterval(()=>{
//     root.render(
//         <React.StrictMode>
//             <Clock />
//         </React.StrictMode>
//     );
// }, 1000)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

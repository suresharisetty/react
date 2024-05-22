import React from 'react';
import ReactDOM from 'react-dom/client';
import"./styles/index.css"
// import {cal} from './another';
//import App from './App';


 const root = ReactDOM.createRoot(document.getElementById('app'));
// const title = React.createElement("h1",null,"hi  suresh");
// const para = React.createElement("p",{id:"title"},"hi  suresh");
// const container = React.createElement("div", {id:"container"},title,para);
// const name="suresh"

// const container = (
//     <div id ="container">
//        <h1>{name}</h1>
//        <span>{cal}</span>
//     </div>   
// )

// //  root.render(cal ());
// root.render(

// container


// );


// console.log("hi")



function callme(){
    alert("clicked on button")

}
let container=<div>
    <button onClick={callme}>click here</button>
</div>
root.render(container);

//!mini project//

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


let greeting="";
let currtime = new Date().getHours();
let cssStyle = {};
if(currtime>=1 && currtime<=12){
  greeting="Good Morning";
  cssStyle.color = "green";
} else if(currtime>=12 && currtime<=19) {
    greeting="Good Afternoon";
    cssStyle.color = "orange";
} else{
  greeting="Good night";
  cssStyle.color = "black";
}


ReactDOM.render(
<>
<h1>Hello sir, <span style={cssStyle}> {greeting} </span> </h1> 
</>,
document.getElementById('root'));














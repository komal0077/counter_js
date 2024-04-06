const countValue=document.querySelector('#counter');
function increment(){
    // get the value from ui
let value=parseInt(countValue.innerText);
// update value
value=value+1;
// set value 
countValue.innerText=value;
};
const decrement=()=>{
    let value=parseInt(countValue.innerText);
    // update value
    value=value-1;
    // set value 
    countValue.innerText=value;
};
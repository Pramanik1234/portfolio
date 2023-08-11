'use strict' ;
const display = document.querySelector('.display1');
const btn = document.querySelectorAll('.btn');
const solve = document.querySelector('.btn-solve');
const clear = document.querySelector('.btn-clear');
const delet = document.querySelector('.btn-delete');

for (const iterator of btn) {
    iterator.addEventListener('click' , ()=>{
        display.value += iterator.value ;
    })
}

solve.addEventListener('click' , ()=>{
    display.value =(eval(display.value))
})

clear.addEventListener('click' , ()=>{
    display.value = '';
})

delet.addEventListener('click' , ()=>{
  const newValue = display.value.slice(0 , -1);
  display.value = newValue ;
})
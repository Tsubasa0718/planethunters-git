'use strict';
const Load = document.getElementById('js-loading');
const mvElement = document.querySelectorAll('.p-mv');
const windowHeight = window.innerHeight;

window.addEventListener('load',()=>{
 mvElement.forEach(element =>{
    element.style.height =  windowHeight + "px";
 });

 const hideElement = ()=> {
   Load.style.display = "none";
}

setTimeout(() => {
   Load.style.transition = "opacity 2s";
   Load.style.opacity = 0;
   setTimeout(hideElement, 2000); // アニメーションの時間と一致させる
}, 1000);
})


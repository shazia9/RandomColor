const button=document.querySelector('#btngen');
const heading=document.querySelector('#title');


const newcolor=()=>{
    const r=Math.floor(Math.random()*256);
    const g=Math.floor(Math.random()*256);
    const b=Math.floor(Math.random()*256);
    const color= `rgb(${r},${g},${b})`;
    const mean=(r+g+b)/3;
    document.body.style.backgroundColor=color;
    if (mean<150){
    heading.style.color='rgb(255,255,255)';}
    else {heading.style.color='rgb(0,0,0)'};

    heading.innerText=color;
}

button.addEventListener('click',newcolor);
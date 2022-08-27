document.addEventListener('DOMContentLoaded',()=>{
    let counter = 0;
    let p = document.querySelector('p')
    p.innerHTML = counter;
    const count = ()=>{
        counter++;
        p.innerHTML = counter;
    }
    setInterval(count,1000)
})
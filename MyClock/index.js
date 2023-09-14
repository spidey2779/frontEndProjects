setInterval(clock=() => {
    const hourHand=document.querySelector(".hour");
    const minuteHand=document.querySelector(".minute");
    const secondHand=document.querySelector(".second");
   
    const d = new Date();
    const second=d.getSeconds()/60;
    const minute=(second+d.getMinutes())/60;
    const hour=(minute+d.getHours())/12;
    hourHand.style.setProperty('--rotate',hour*360);
    minuteHand.style.setProperty('--rotate',minute*360);
    secondHand.style.setProperty('--rotate',second*360);
    
}, 1000);
setInterval(tic=() => {
    let tictoc=new Audio('ticking-clock_1-27477.mp3')
    tictoc.play();
}, 1000);
clock();
tic();
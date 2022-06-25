const time = document.querySelector('.time');
const day = document.querySelector('.day');
const date = document.querySelector('.date');

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

//function to get time and day
const tick = () => {
    const now = new Date();
    let s = now.getSeconds();
    let m = now.getMinutes();
    let h = now.getHours();
    let d = now.toDateString().substring(4,);
    let midday = 'AM';

    if(h  >= 12){
        if(h>12){h = h-12;}
        midday = 'PM';  
    }

    const ctime = `
    <span>${h}</span> :
    <span>${m}</span> :
    <span>${s}</span>
    <span class="mday"> ${midday}</span>`;
    
    const cdate = `
    <span>${d}</span>`;

    const cday = days[now.getDay()-1];
    
    let spans = day.getElementsByTagName('span');  //get all span tags inside div day
    for(i = 0; i<spans.length; i++){    //loop through span tags
        if(spans[i].className == cday){     //if class name of span tag matches the current day
            spans[i].setAttribute("class",`${cday} currDay`);       // add 'currDay' to className
            console.log(spans[i].className);
        } 
    }
    time.innerHTML = ctime;
    date.innerHTML = cdate;

    //day.innerHTML = vday;
};

setInterval(tick, 1000);
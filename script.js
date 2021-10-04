const getS = selector => document.querySelector(selector);

/*-----------------------------------------------------------------Дата та час---------------------------------------*/
setInterval(() => {
    let newDate = new Date();
    let day = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    let hours = newDate.getHours();
    let minutes = newDate.getMinutes();
    let seconds = newDate.getSeconds();
    if (day < 10) { day = '0' + day; }
    if (month < 10) { month = '0' + month; }
    if (hours < 10) { hours = '0' + hours; }
    if (minutes < 10) { minutes = '0' + minutes; }
    if (seconds < 10) { seconds = '0' + seconds; }
    getS('.date').innerHTML = `${day}.${month}.${year}`;
    getS('.clock').innerHTML = `${hours}:${minutes}:${seconds}`;
})

/*-----------------------------------------------------------------Секундомір---------------------------------------*/

let secundomID;
let hh = 0;
let mm = 0;
let ss = 0;
let ms = 0;

let sec = `0${hh}:0${mm}:0${ss}:00${ms}`;

getS('.secStart').addEventListener('click', function () {
    secundomID = setInterval(stopWatch, 1);
    getS('.secStart').disabled = true;
    getS('.secStart').classList.add('butFocus');
    getS('.timStart').classList.remove('butFocus');
})


getS('.secStop').addEventListener('click', function () {
    clearInterval(secundomID);
    getS('.secStart').classList.remove('butFocus');
    getS('.secStart').disabled = false;
    getS('.timStart').classList.remove('butFocus');
})

function stopWatch() {
    ms += 4;
    if (ms >= 1000) {
        ss++;
        ms -= 1000;
    }
    if (ss >= 60) {
        mm++;
        ss -= 60;
    }
    if (mm >= 60) {
        hh++;
        mm -= 60
    }
    if (ms < 100) {
        if (ms < 10) {
            if (ss < 10) {
                if (mm < 10) {
                    if (hh < 10) {
                        sec = getS('.secundomer').innerHTML = `0${hh}:0${mm}:0${ss}:00${ms}`
                    }
                    else {
                        sec = getS('.secundomer').innerHTML = `${hh}:0${mm}:0${ss}:00${ms}`
                    }
                }
                else {
                    if (hh < 10) {
                        sec = getS('.secundomer').innerHTML = `0${hh}:${mm}:0${ss}:00${ms}`
                    }
                    else {
                        sec = getS('.secundomer').innerHTML = `${hh}:${mm}:0${ss}:00${ms}`
                    }
                }
            }
            else {
                if (mm < 10) {
                    if (hh < 10) {
                        sec = getS('.secundomer').innerHTML = `0${hh}:0${mm}:${ss}:00${ms}`
                    }
                    else {
                        sec = getS('.secundomer').innerHTML = `${hh}:0${mm}:${ss}:00${ms}`
                    }
                }
                else {
                    if (hh < 10) {
                        sec = getS('.secundomer').innerHTML = `0${hh}:${mm}:${ss}:00${ms}`
                    }
                    else {
                        sec = getS('.secundomer').innerHTML = `${hh}:${mm}:${ss}:00${ms}`
                    }
                }
            }
        }
        else {
            if (ss < 10) {
                if (mm < 10) {
                    if (hh < 10) {
                        sec = getS('.secundomer').innerHTML = `0${hh}:0${mm}:0${ss}:0${ms}`
                    }
                    else {
                        sec = getS('.secundomer').innerHTML = `${hh}:0${mm}:0${ss}:0${ms}`
                    }
                }
                else {
                    if (hh < 10) {
                        sec = getS('.secundomer').innerHTML = `0${hh}:${mm}:0${ss}:0${ms}`
                    }
                    else {
                        sec = getS('.secundomer').innerHTML = `${hh}:${mm}:0${ss}:0${ms}`
                    }
                }
            }
            else {
                if (mm < 10) {
                    if (hh < 10) {
                        sec = getS('.secundomer').innerHTML = `0${hh}:0${mm}:${ss}:0${ms}`
                    }
                    else {
                        sec = getS('.secundomer').innerHTML = `${hh}:0${mm}:${ss}:0${ms}`
                    }
                }
                else {
                    if (hh < 10) {
                        getS('.secundomer').innerHTML = `0${hh}:${mm}:${ss}:0${ms}`
                    }
                    else {
                        sec = getS('.secundomer').innerHTML = `${hh}:${mm}:${ss}:0${ms}`
                    }
                }
            }
        }
    }
    else {
        if (ss < 10) {
            if (mm < 10) {
                if (hh < 10) {
                    sec = getS('.secundomer').innerHTML = `0${hh}:0${mm}:0${ss}:${ms}`
                }
                else {
                    sec = getS('.secundomer').innerHTML = `${hh}:0${mm}:0${ss}:${ms}`
                }
            }
            else {
                if (hh < 10) {
                    sec = getS('.secundomer').innerHTML = `0${hh}:${mm}:0${ss}:${ms}`
                }
                else {
                    sec = getS('.secundomer').innerHTML = `${hh}:${mm}:0${ss}:${ms}`
                }
            }
        }
        else {
            if (mm < 10) {
                if (hh < 10) {
                    sec = getS('.secundomer').innerHTML = `0${hh}:0${mm}:${ss}:${ms}`
                }
                else {
                    sec = getS('.secundomer').innerHTML = `${hh}:0${mm}:${ss}:${ms}`
                }
            }
            else {
                if (hh < 10) {
                    sec = getS('.secundomer').innerHTML = `0${hh}:${mm}:${ss}:${ms}`
                }
                else {
                    sec = getS('.secundomer').innerHTML = `${hh}:${mm}:${ss}:${ms}`
                }
            }
        }
    }
}



getS('.secLoop').addEventListener('click', function () {
    getS('.watch').innerHTML += `<p class="p">${sec}</p>`;
    if (getS('.watch').children.length >= 4) {
        getS('.secLoop').disabled = true;
    }
    getS('.secStart').classList.remove('butFocus');
    getS('.timStart').classList.remove('butFocus');
})

getS('.secRESET').addEventListener('click', function () {
    getS('.watch').innerHTML = ``;
    hh = 0;
    m = 0;
    ss = 0;
    ms = 0;
    sec = getS('.secundomer').innerHTML = `0${hh}:0${mm}:0${ss}:00${ms}`;
    getS('.secLoop').disabled = false;
    clearInterval(secundomID);
    getS('.secStart').classList.remove('butFocus');
    getS('.secStart').disabled = false;
    getS('.timStart').classList.remove('butFocus');
})

/*--------------------------------------------------------------------------Таймер--------------------------*/
let n1 = Number(getS('.number').innerHTML);
let tm = n1;
let ts = 60;
let timerID;


getS('.plus').addEventListener('click', function () {
    n1++;
    getS('.number').innerHTML = n1;
    tm = n1 - 1;
    getS('.secStart').classList.remove('butFocus');
    getS('.timStart').classList.remove('butFocus');
})

getS('.minus').addEventListener('click', function () {
    n1--;
    getS('.number').innerHTML = n1;
    tm = n1 - 1;
    getS('.secStart').classList.remove('butFocus');
    getS('.timStart').classList.remove('butFocus');
})


getS('.timStart').addEventListener('click', function () {
    timerID = setInterval(watchTimer, 1000)
    tm = n1 - 1;
    getS('.secStart').classList.remove('butFocus');
    getS('.timStart').classList.add('butFocus');
    getS('.timStart').disabled = true;
})

getS('.timStop').addEventListener('click', function () {
    clearInterval(timerID);
    getS('.secStart').classList.remove('butFocus');
    getS('.timStart').disabled = false;
    getS('.timStart').classList.remove('butFocus');
})

// getS('.timRESET').addEventListener('click', function () {
//     n1 = 25;
//     clearInterval(timerID)
//     sec = getS('.timerLost').innerHTML = `0${tm}:0${ts}`;
//     getS('.secStart').classList.remove('butFocus');
// })


function watchTimer() {
    ts--;
    if (ts < 0) {
        tm--;
        ts += 60;
    }
    if (tm < 0) {
        tm = 0
    }
    if (ts < 10) {
        if (tm < 10) {
            sec = getS('.timerLost').innerHTML = `0${tm}:0${ts}`
        }
        else {
            sec = getS('.timerLost').innerHTML = `${tm}:0${ts}`
        }
    }
    else {
        if (tm < 10) {
            sec = getS('.timerLost').innerHTML = `0${tm}:${ts}`
        }
        else {
            sec = getS('.timerLost').innerHTML = `${tm}:${ts}`

        }
    }

    if (tm == 0 && ts == 0) {
        clearInterval(timerID)

    }
}

getS('.timRESET').addEventListener('click', function () {
    getS('.number').innerHTML = '25';
    n1 = 25;
    tm = n1;
    ts = 60;
    sec = getS('.timerLost').innerHTML = `00:00`;
    clearInterval(timerID);
    getS('.secStart').classList.remove('butFocus');
    getS('.timStart').disabled = false;
    getS('.timStart').classList.remove('butFocus');
})
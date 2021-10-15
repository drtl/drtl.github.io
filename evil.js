
// using localStorage to store data
// first step: prompt

let body = document.getElementById("body");
let splashID = document.getElementById("splash");

function rainbow() {
    let h =  Math.floor(Math.random() * 361);
    let s = 100;
    let l = 50;
    h /= 360;
    s /= 100;
    l /= 100;
  
    let r, g, b;
    if (s === 0) {
      r = g = b = l;
    } else {
      const hue2rgb = function(p, q, t) {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
      };
      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      r = hue2rgb(p, q, h + 1 / 3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1 / 3);
    }
    const toHex = function(x) {
      const hex = Math.round(x * 255).toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    };
    return '#'+toHex(r)+toHex(g)+toHex(b);
  }

function startBG() {
    let timer = 1000 * 2; // 5 second
    let counter = 3; // num * loop (startTimer)
    let startTimer = setInterval(function() {
        if(counter < 0) {
            clearInterval(startTimer);
        } else {
            let colour = rainbow();
            console.log(colour);
            body.style.background = colour;
        }
        //counter--;
    }, timer);
}
function promptE() {
    prompt('What is your favourite pet?');
    prompt('What is your favourite colour?');
    prompt('What is your favourite number?');
    prompt('Favorite environmental sound (rain, thunder, etc.)?');
    prompt('Favorite movie of all time?');
    prompt('Favorite song?');
    prompt('Favorite sport?');
}

function alertE() {
    alert('Sorry, please go back!');
    alert('Go back');
    alert('K');
}

function returnBar(barCount) {
    let barText = "";
    for(let i = 0; i < barCount; i++) {
        barText += "|";
    }
    return barText;
}

function confirmE() {
    let multiplierTimer = 1;
    let count = 0, maxCount = 23;
    let textBar = "";
    let bar = 0, sizeBar = 3;
    let currPercentage = 0;

    let confirmCount = 0;
    let colour = rainbow();
    console.log(colour);
    body.style.background = colour;
    let conf = confirm('Are you sure, you still want to continue? Please be aware that this is a waste of time');
    if(conf !== true) {
        alert('Thank you! wait a few sec');
        close();
    } else {
        while(confirmCount <= 5) {
            let conf2 = confirm('Are you really sure, you still want to continue?');
            if(conf2 !== true) {
                confirmCount = 5;
                alert('Thank you! click on okay now!');
                close();
            } else {
                let colour = rainbow();
                console.log(colour);
                body.style.background = colour;
                alertE();
                confirmCount++;
            }
        }
        promptE();
        questionE();
        for(let i = 5; i > 0; i--) {
            let colour = rainbow();
            console.log(colour);
            body.style.background = colour;
            alert(i);
        }
        let ins = prompt('From who you get the link from? Give instagram username without the @');
        if(ins === 'hyglobalhd') {
            alert('correct!!');
            alert('after you click ok on this, wait for the progress bar to complete :)');
            let timerSplash = setInterval(() => {
                if(count > maxCount) {
                    // todo
                    clearInterval(timerSplash);
                    alert('After you click ok, you will be direct to another site :)');
                    location.replace('https://youtu.be/fr4FyKDY8eg');
                } else {
                    // todo
                    splashID.innerHTML = textBar + " - " + currPercentage.toFixed(0) + "%";
                    bar++;
                    let calBar = bar * sizeBar;
                    textBar = returnBar(calBar);
                    count++;
                    currPercentage = (count / maxCount) * 100;
                    let colour = rainbow();
                    console.log(colour);
                    body.style.background = colour;
                }
            }, (multiplierTimer * 1000));
        } else {
            alert('Ok bye!');
            close();
        }
    }
}

function plusE(num) {
    let pl = prompt('Given: ' + num + ' + ' + num + ' = x, what is \'x\' ?');
    if(pl === (num+num)) {
        //
    } else {
        alert('hahahaha');
        let colour = rainbow();
        console.log(colour);
        body.style.background = colour;
    }
}

function questionE() {
    plusE(20);
    plusE(30);
    plusE(50);
    plusE(11);
}

//startBG();
confirmE();

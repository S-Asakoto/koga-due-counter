window.onload = function() {
    const days = Math.floor((new Date() - new Date("2023-09-15T00:00:00+09:00")) / 86400000);
    const content = document.getElementById("content");
    const hundreds = document.getElementById("hundreds");
    const tens = document.getElementById("tens");
    const units = document.getElementById("units");

    switch (true) {
        case days >= 500: document.body.style.backgroundImage = "url(img/bg0.png)"; break;
        case days >= 490: document.body.style.backgroundImage = "url(img/bg1.png)"; break;
        case days >= 480: document.body.style.backgroundImage = "url(img/bg2.png)"; break;
        case days >= 470: document.body.style.backgroundImage = "url(img/bg3.png)"; break;
        default: document.body.style.backgroundImage = "url(img/bg4.png)"; break;
    }
    switch (true) {
        case days >= 500: content.style.backgroundImage = "url(img/s4.png)"; break;
        case days >= 485: content.style.backgroundImage = "url(img/s3.png)"; break;
        case days >= 470: content.style.backgroundImage = "url(img/s2.png)"; break;
        default: content.style.backgroundImage = "url(img/s1.png)"; break;
    }
    hundreds.style.backgroundImage = `url(img/${days / 100 |0}.png)`;
    tens.style.backgroundImage = `url(img/${days / 10 % 10|0}.png)`;
    units.style.backgroundImage = `url(img/${days % 10 |0}.png)`;
    document.title = document.title.replace('#', days);
};
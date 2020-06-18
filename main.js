const draw = SVG().addTo('.field').size(400, 400);
const playground = draw.rect(400, 400).fill({color:'#ccc', opacity:0.75}).stroke({color:'#aaa', width:6});


const life1 = draw.circle(20).fill('#d22').attr({cx: 200, cy: 200});
const life2 = draw.circle(20).fill('#d22').attr({cx: 100, cy: 100});
const life3 = draw.circle(20).fill('#d22').attr({cx: 300, cy: 300});


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};

for (let i=0; i < 30; i++){
    life1.animate().delay(getRandomInt(40, 60)).dx(getRandomInt(-40, 41)).dy(getRandomInt(-40,41));
};

for (let i=0; i < 30; i++){
    life2.animate().delay(getRandomInt(60, 80)).dx(getRandomInt(-40, 41)).dy(getRandomInt(-40,41));
};

for (let i=0; i < 30; i++){
    life3.animate().delay(getRandomInt(20, 40)).dx(getRandomInt(-40, 41)).dy(getRandomInt(-40,41));
};

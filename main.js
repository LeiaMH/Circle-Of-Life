const draw = SVG().addTo('.field').size(400, 400);
const playground = draw.rect(400, 400).fill({color:'#ccc', opacity:0.75}).stroke({color:'#aaa', width:6});


const life1 = draw.circle(30).fill('#d22').attr({cx: 200, cy: 200});
const life2 = draw.circle(30).fill('#d22').attr({cx: 100, cy: 100});
const life3 = draw.circle(30).fill('#d22').attr({cx: 300, cy: 300});

//Population Size (P) (get from code)
//Birth Rate (B)(The number of live births per 1,000 population in a given year.)
// B = b(set by user)/P(get from code)
//Death Rate (D)(The number of live deaths per 1,000 population in a given year. )
// D = d(set by user)/P(get from code)
//birth and death rates for humans can also be viewed as the probability that any one person will give birth or die in a year.
// r = b - d (growth rate)

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};


for (let i=0; i < 30; i++){
    if(life1.x() >= 380){
        console.log('check1');
        life1.animate().delay(getRandomInt(40, 60)).dx(-20)
    };
    if(life1.x() <= 20){
        console.log('check1');
        life1.animate().delay(getRandomInt(40, 60)).dx(21)
    };
    if(life1.y() >= 380){
        console.log('check1');
        life1.animate().delay(getRandomInt(40, 60)).dy(-20)
    };
    if(life1.y() <= 20){
        console.log('check1');
        life1.animate().delay(getRandomInt(40, 60)).dy(20)
    }else{
       
        life1.animate().delay(getRandomInt(40, 60)).dx(getRandomInt(-40, 41)).dy(getRandomInt(-40,41))
}};

for (let i=0; i < 30; i++){
    if(life2.x() >= 380){
        console.log('check2');
        life2.animate().delay(getRandomInt(60, 80)).dx(-20)
    };
    if(life2.x() <= 20){
        console.log('check2');
        life2.animate().delay(getRandomInt(60, 80)).dx(21)
    };
    if(life2.y() >= 380){
        console.log('check2');
        life2.animate().delay(getRandomInt(60, 80)).dy(-20)
    };
    if(life2.y() <= 20){
        console.log('check2');
        life2.animate().delay(getRandomInt(60, 80)).dy(20)
    }else{
        life2.animate().delay(getRandomInt(60, 80)).dx(getRandomInt(-40, 41)).dy(getRandomInt(-40,41))
}};

for (let i=0; i < 30; i++){
    if(life3.x() >= 380){
        console.log('check3');
        life3.animate().delay(getRandomInt(20, 40)).dx(-20)
    };
    if(life3.x() <= 20){
        console.log('check3');
        life3.animate().delay(getRandomInt(20, 40)).dx(21)
    };
    if(life3.y() >= 380){
        console.log('check3');
        life3.animate().delay(getRandomInt(20, 40)).dy(-20)
    };
    if(life3.y() <= 20){
        console.log('check3');
        life3.animate().delay(getRandomInt(20, 40)).dy(20)
    }else{
    life3.animate().delay(getRandomInt(20, 40)).dx(getRandomInt(-40, 41)).dy(getRandomInt(-40,41));
}};

const draw = SVG().addTo('.field').size(400, 400);
const playground = draw.rect(400, 400).fill({color:'#ccc', opacity:0.75}).stroke({color:'#888', width:6});


//const life1 = draw.circle(10).fill('#d22').attr({cx: 200, cy: 200});

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

class Life{
    constructor(xcoord, ycoord){
    this.body = draw.circle(15).fill('#54BB7B')
    this.xcoord = this.body.cx(xcoord);
    this.ycoord = this.body.cy(ycoord);
    }
    moveAbout(movement, wait){
        for (let i=0; i < movement; i++){ 
        this.body.animate().delay(wait).dx(getRandomInt(-40, 41)).dy(getRandomInt(-40,41))
    }}
}

let total = 0;

function startRound(birthRate){
    let chance = getRandomInt(0, 100);
    if (chance <= birthRate){
        let newLife = new Life(getRandomInt(10, 390), getRandomInt(10, 390));
        newLife.moveAbout(100, getRandomInt(1, 100));
        total += 1;
    }
    console.log(`Population Size: ${total}`);
}
birthRate = 30;
//setInterval(startRound, 1000, birthRate);

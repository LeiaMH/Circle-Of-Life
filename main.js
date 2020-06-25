const draw = SVG().addTo('.canvas').size(400, 400);
const playground = draw.rect(400, 400).fill({color:'#ccc', opacity:0.75}).stroke({color:'#888', width:6});

const displayPopulation = document.querySelector('.info span');
const birthElement = document.querySelector('.births');
const deathElement = document.querySelector('.deaths');


birthElement.addEventListener('keypress', setRates);
deathElement.addEventListener('keypress', setRates);

function setRates(event){
    if(event.keyCode == 13){
        birthrate = birthElement.value;
        deathrate = deathElement.value;
        startRound();
    };
}

let birthrate = 0;
let deathrate = 0;
let growthrate = birthrate - deathrate;
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
    constructor(name, xcoord, ycoord, bodysize){
    this.name = name;
    this.body = draw.circle(bodysize).fill('#54BB7B');
    this.xcoord = this.body.cx(xcoord);
    this.ycoord = this.body.cy(ycoord);
    }
    moveAbout(movement, wait){
        for (let i=0; i < movement; i++){
        this.body.animate().delay(wait).dx(getRandomInt(-40, 41)).dy(getRandomInt(-40,41))
    }}
    
}

let population = [];
let newName = 0;

function suddenBirth(birthrate){
    let chance = getRandomInt(0, 100);
    if (chance < birthrate){
        let newLife = new Life(`Poosh${newName++}`, getRandomInt(10, 390), getRandomInt(10, 390), 15);
        newLife.moveAbout(100, getRandomInt(1, 300));
        population.push(newLife);
    }
    displayPopulation.innerHTML = '   ' + population.length;
    console.log(`Population Size: ${population.length}`);
}


function suddenDeath(deathrate){
    let chance = getRandomInt(0, 100);
    if (chance < deathrate){
       console.log(population[0]);
       population[0].body.remove();
       
       console.log(population[0]);
       population.shift(population[0]);
    }
}

function startRound(){
setInterval(suddenBirth, 1000, birthrate);
setInterval(suddenDeath, 1000, deathrate);
}
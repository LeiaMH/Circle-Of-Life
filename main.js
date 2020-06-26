//Constants and Variables
    //SVG Setup
const draw = SVG().addTo('.canvas').size(400, 400);
const playground = draw.rect(400, 400).fill({color:'#ccc', opacity:0.75}).stroke({color:'#888', width:6});
    
    //Getting Elements from DOM
const populationElement = document.querySelector('.info span');
const birthElement = document.querySelector('.births');
const deathElement = document.querySelector('.deaths');

    //Setting Variables Needed
let birthrate = 0;
let deathrate = 0;
//let growthrate = birthrate - deathrate;
//let equilibrium = birthrate/deathrate;
let population = [];
let newName = 0;

//Getting Input from User & Setting Rates to User's Input
birthElement.addEventListener('keypress', setRates);
deathElement.addEventListener('keypress', setRates);

function setRates(event){
    if(event.keyCode == 13){ 
        birthrate = birthElement.value;
        deathrate = deathElement.value;
        startSimulation();
    };
}

//Produce Random Integer between some Min and some Max
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};

//Creature/Life - Object Constructor
class Life{
    constructor(name, xcoord, ycoord){
    this.name = name;
    this.body = draw.circle(15).fill('#54BB7B');
    this.xcoord = this.body.cx(xcoord);
    this.ycoord = this.body.cy(ycoord);
    }
    moveAbout(movement, wait){
        for (let i=0; i < movement; i++){
        this.body.animate().delay(wait).dx(getRandomInt(-40, 41)).dy(getRandomInt(-40,41))
    }}   
}

//Start Simulation
function startSimulation(){
    setInterval(suddenBirth, 1000, birthrate);
    setInterval(suddenDeath, 1000, deathrate);
    }

    //Birth Chance per Interval
function suddenBirth(birthrate){
    let chance = getRandomInt(0, 100);
    if (chance < birthrate){
        let newLife = new Life(`Floof${newName++}`, getRandomInt(10, 390), getRandomInt(10, 390));
        newLife.moveAbout(100, getRandomInt(1, 300));
        population.push(newLife);
    }
    populationElement.innerHTML = population.length;
}

    //Death Chance per Interval
function suddenDeath(deathrate){
    let chance = getRandomInt(0, 100);
    if (chance < deathrate){
       population[0].body.remove();
       population.shift(population[0]);
    }
    populationElement.innerHTML = population.length;
}

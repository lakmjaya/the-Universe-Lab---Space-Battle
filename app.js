
    // Make A Ship Class
    class Ship {
        constructor(hull, firepower, accuracy){
            this.hull = hull;
            this.firepower = firepower;
            this.accuracy =accuracy;
        }
        
    }
    let alienShipArr =[]; // alien ship array
    // Make the Human Ship sub-class.
    class HumanShip extends Ship{           // Make an instance of each class
        constructor(name, hull, firepower, accuracy){
            super(hull, firepower, accuracy)
            this.name = name;
            this.isAlive = true
        
        }
        
        attack(robotShip){
            if(Math.random() < this.accuracy){
                console.log(`It's a direct hit!! Well done Dunstant!`);
                document.getElementById("shot1").innerHTML =`It's a direct hit!! Well done Dunstant!`
                robotShip.hull = robotShip.hull - this.firepower
                console.log(`alien has ${robotShip.hull} hull points left.`);
                if (robotShip.hull <=0){
                    robotShip.isAlive =false
                    console.log(`Alien ship is destroyed,  you have saved the Universe from complete destruction!!`);
                    document.getElementById("message").innerHTML =`Alien ship is destroyed,  you have saved the Universe from complete destruction!!`
                }
                
            }else{
                console.log('the attack missed !')
                document.getElementById("shot2").innerHTML ='the attack missed !'
            }
        }
        
    }
    // Make an Alien Ship sub-class.
    class AlienShip extends Ship{           // Make an instance of each class
        constructor(name, hull, firepower, accuracy){
            super(hull, firepower,accuracy )
            this.name =name;
            this.isAlive = true
            
        }
        attack(human){
            if(Math.random()< this.accuracy){
                console.log(`You've been hit!`);
                document.getElementById("shot3").innerHTML =`You've been hit!`
                human.hull = human.hull - this.firepower
                console.log(`hero has ${human.hull} hull points left.`);
                if(human.hull <= 0){
                    human.isAlive=false
                    console.log(`You have died, your people will now be used as cattle for the CRAVERSSS!!! GRRZZT ZOIK!`);
                    document.getElementById("shot4").innerHTML =`You have died, your people will now be used as cattle for the CRAVERSSS!!! GRRZZT ZOIK!`
                }
            }else{
                console.log(' you have save from the attack')
                document.getElementById("shot5").innerHTML =' you have save from the attack'
            }
        
        }
    }

    function randomHull(min,max) {
        return Math.floor(Math.random()* (max-min) + min)
    } 

    function randomFirepower(min, max){
        return Math.floor(Math.random()*(max-min)+min)
    }

    function randomAccuracy() {
        return Math.floor(Math.random()*3+6)/10
    } 

    const battleRound = (humanShip1, alienShip1) =>{
        let enemy = alienShip1
        let message = `The battle has started. The human ship ${humanShip1} has engaged.....`
        console.log(humanShip1)
        console.log(enemy)
        console.log(message)
            
            while (humanShip1.isAlive && alienShip1.isAlive) {
                humanShip1.attack(alienShip1);
                if (alienShip1.isAlive) {
                    alienShip1.attack(humanShip1);
                } 
            }
        
            
        }

    let humanShip1 = new HumanShip('DefenceShip',20,5,.7)

    let startGame=()=>{
        visible()
        changeVisibility()
        let alienShip1 = new AlienShip('Sonia',randomHull(3,6),randomFirepower(2, 4),randomAccuracy())
        battleRound(humanShip1,alienShip1)
        document.getElementById("demo").innerHTML =`The battle has started......`;  
    }

    let reStartGame=()=>{
        document.getElementById("getting-started").style.visibility = "visible";
        document.getElementById("restart").style.visibility = "hidden";
        clear()
    }
        function changeVisibility() {
            document.getElementById("getting-started").style.visibility = "hidden";
            document.getElementById("restart").style.visibility = "visible";
        }
    function clear(){
        document.getElementById("shot1").style.visibility="hidden";
        document.getElementById("shot2").style.visibility="hidden";
        document.getElementById("shot3").style.visibility="hidden";
        document.getElementById("shot4").style.visibility="hidden";
        document.getElementById("shot5").style.visibility="hidden";
        document.getElementById("demo").style.visibility="hidden";
        document.getElementById("message").style.visibility="hidden";
    }

    function visible(){
        document.getElementById("shot1").style.visibility="visible";
        document.getElementById("shot2").style.visibility="visible";
        document.getElementById("shot3").style.visibility="visible";
        document.getElementById("shot4").style.visibility="visible";
        document.getElementById("shot5").style.visibility="visible";
        document.getElementById("demo").style.visibility="visible";
        document.getElementById("message").style.visibility="visible";
    }
    
    const span1 = document.querySelector(".container")
    span1.remove()
    




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
                    document.getElementById("message").innerHTML =`Alien ship ${robotShip.name} is destroyed,  you have saved the Universe from complete destruction!!`
                }
                
            }else{
                console.log('the attack missed !')
                document.getElementById("shot2").innerHTML ='Human ship missed the attack !'
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
                document.getElementById("shot3").innerHTML =`Human ship has been hit!`
                human.hull = human.hull - this.firepower
                console.log(`hero has ${human.hull} hull points left.`);
                if(human.hull <= 0){
                    human.isAlive=false
                    hidden('message')
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
        let message = `The battle has started. The human ship ${humanShip1.name} has engaged with ${alienShip1.name}`
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
    function delay(i) {
    setTimeout(function() {
        let humanShip1 = new HumanShip('USS Schwarzenegger',20,5,.7)
        let alienShip1 = new AlienShip('Sonia',randomHull(3,6),randomFirepower(2, 4),randomAccuracy())
        let alienShip2 = new AlienShip('Almeda',randomHull(3,6),randomFirepower(2, 4),randomAccuracy())
        let alienShip3 = new AlienShip('Edman',randomHull(3,6),randomFirepower(2, 4),randomAccuracy())
        let alienShip4 = new AlienShip('Ria',randomHull(3,6),randomFirepower(2, 4),randomAccuracy())
        let alienShip5 = new AlienShip('Wave',randomHull(3,6),randomFirepower(2, 4),randomAccuracy())
        alienShipArr = [alienShip1,alienShip2,alienShip3,alienShip4,alienShip5]
        battleRound(humanShip1,alienShipArr[i])
        console.log(alienShipArr[i])
        document.getElementById("human").innerHTML=`The Human Ship ${humanShip1.name} and ` 
        document.getElementById("enemy").innerHTML= `Enmey ship ${alienShipArr[i].name}`        
    }, 5000 * i);
    
    console.log(`this ${i}`)
    }
        
    
    let startGame=()=>{
        visible("shot1")
        visible("shot2")
        visible("shot3")
        visible("shot4")
        visible("shot5")
        visible("demo")
        visible("message")
        visible("human")
        visible("enemy")      
        document.getElementById("demo").innerHTML =`The battle has started......`;
        for(i=0; i<5;i++){
            delay(i)
            //document.getElementById("win").innerHTML=`this ${i}`
            console.log(`this ${i}`)
            }
            hidden("getting-started");
            visible("restart")
    }

    let reStartGame=()=>{
        visible("getting-started");
        hidden("restart")
        hidden("shot1")
        hidden("shot2")
        hidden("shot3")
        hidden("shot4")
        hidden("shot5")
        hidden("demo")
        hidden("message")
        hidden("human")
        hidden("enemy")
    }
        
    function hidden(id){
        document.getElementById(id).style.visibility="hidden";
        }

    function visible(id){
        document.getElementById(id).style.visibility="visible";
        }
    
    const span1 = document.querySelector(".container")
    span1.remove()
    



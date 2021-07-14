// Базовый класс Machine
class Machine {
    constructor(name, power) {
        this.enabled = false;
	    this.name = name;
	    this.power = power;
    }
        enable(){
        this.enabled = true;
        console.log(`${this.name} with power ${this.power}W is turned on`);
         }
}
let fridge = new Machine('Samsung', 8);
console.log(fridge);
console.log(fridge.enable());

let waMAX = 1000;
// Дочерний класс
class CoffeeMaker extends Machine {
    constructor (name, power) {
    super(name, power)
    this._waterAmount = 0;    
    }

    enable() {
        super.enable();
    }
    
    heat() {
    setTimeout(function(){
	console.log('Кофеварка нагрелась');
	},100);
	}

    getPower (){
		console.log(power);
	}

    run (){
		if(this.enabled){
			if(this._waterAmount >= 30){
				setTimeout(function(){
					console.log('Coffee is ready!');
				},1000);
			}
			else{
				console.warn('Не достаточно воды');
			}
		}  
	}
    waterAmount(amount){
		if(amount === undefined){
			console.log(this._waterAmount);
		}
		else{
			if(typeof(amount) !== 'number'){
				console.error('Сыпем гвозди...');
				return false;
			}
			if(amount + this._waterAmount > waMAX){
				console.error('Облились!');
			}
			else if(amount < 0){
				console.error('Эта вода непригодна для полива цветов!');
			}
			else{
				this._waterAmount += amount;
				console.log(`Текущее количество воды - ${this._waterAmount}мл.`);
			}
		}
	}
}
let newCoffeeMachine = new CoffeeMaker('Saeco', 10, 1000);
console.log(newCoffeeMachine.enable());
console.log(newCoffeeMachine.run());
console.log(newCoffeeMachine.waterAmount(100));
console.log(newCoffeeMachine.waterAmount());
console.log(newCoffeeMachine.waterAmount(-100));
console.log(newCoffeeMachine.waterAmount(1100));  
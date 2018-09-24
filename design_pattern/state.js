//Design pattern state:
//Every time the state changes, re-render the component.


const health_bar = (function(){
	
	//State cannot be accessed directly by outside
	let state = {};
	
	let renderHealthBar = function(){
		if(state.hp == 100){
			console.log('You are full HP.');
		}
		else if(state.hp > 50){
			console.log('You are healthy.');
		}
		else if(state.hp > 0){
			console.log('You are in danger.');
		}
		else{
			console.log('You are dead.');
		}
	}
	
	return{
	
		initHp : function(){
			state.hp = 100;
			renderHealthBar();
		},
		
		setHp : function(hp){
			//HP cannot exceed the max HP
			if(hp > 100) hp = 100;
			state.hp = hp;
			renderHealthBar();
		}
	
	}
	
})();


health_bar.initHp();
health_bar.setHp(80);
health_bar.setHp(60);
health_bar.setHp(30);
health_bar.setHp(0);
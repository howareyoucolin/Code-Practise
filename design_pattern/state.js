const health_bar = (function(){
	
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
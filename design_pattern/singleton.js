//Immutable singleton class with ES6
//Self provoking function prevents the use of "new" to create a new instance

const singleton = (function(){
	
	let _add = (x,y) => x+y;
	
	return {
		x: 0,
		y: 0,
		add: _add,
	}
	
})();

//Access to properties:
singleton.x = 2;
singleton.y = 6;
console.log('x = ', singleton.x , ' & y = ', singleton.y);
 
//call add function:
console.log('3 + 5 = ', singleton.add(3,5));

//trying to re-assign singleton will cause error:
try{
	singleton = 'other stuff';
}catch(e){
	console.log('Error : ', e.message)
}

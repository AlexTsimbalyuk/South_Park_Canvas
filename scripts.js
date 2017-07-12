var canvas = document.getElementById('southPark');
var context = canvas.getContext('2d');
var person = [
	[1,2,3,4,5,6,7,8,9,10,11,12],
];

var x = 0;
var y = 0;

for(var i = 0; i < person.length; i++){
  
	for( var j = 0; j < person[i].length; j++ ){
    context.fillRect(x, y, 12, 12);
	
		if(person[i][j]==1){
		 context.fillStyle = "#FFFFFF";	//white
		}
		else if(person[i][j]==2){
		 context.fillStyle = "#FCE21C"; //yellow
		}

	x = x + 12; 
	}
x = 0;
y = y + 12;
}
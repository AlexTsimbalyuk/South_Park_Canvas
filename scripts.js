var canvas = document.getElementById('southPark');
var context = canvas.getContext('2d');
var person = [
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,   1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,   1, 1, 1, 1, 1, 1 ,1, 1, 1, 1, 1, 1, 1, 1, 1, 1,   1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1,1,1,1,1,1,1,1,2,2,2,2,1,1,1,1,1,1,1,1,   1,1,1,1,1,1,1,8,8,1,1,1,1,1,1,1,   1, 1, 1, 1, 12,12,12,12,12,12,1, 1, 1, 1, 1, 1,   1, 1, 10,10,10,10,10,10,10,10,10,10,1, 1, 1],
	[1,1,1,1,1,1,3,3,3,3,3,3,3,3,1,1,1,1,1,1,   1,1,1,1,1,1,8,8,8,8,1,1,1,1,1,1,   1, 1, 1, 12,12,12,12,12,12,12,12,1, 1, 1, 1, 1,   1, 10,10,10,10,10,10,10,10,10,10,10,10,1, 1],
	[1,1,1,1,1,3,3,3,3,3,3,3,3,3,3,1,1,1,1,1,   1,1,1,1,1,9,9,8,8,9,9,1,1,1,1,1,   1, 1, 12,12,12,12,12,12,12,12,12,12,1, 1, 1, 1,   1, 10,11,11,11,11,11,11,11,11,11,11,10,1, 1],
	[1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,1,1,1,1,   1,1,1,1,9,9,9,9,9,9,9,9,1,1,1,1,   1, 12,12,12,6, 6, 6, 6, 6, 6,12, 12,12,1, 1, 1,   1, 10,11,11,11,11,11,11,11,11,11,11,10,1, 1],
	[1,1,1,3,3,2,2,2,2,2,2,2,2,2,2,3,3,1,1,1,   1,1,1,9,9,9,9,9,9,9,9,9,9,1,1,1,   12,12,12,6, 6, 1, 1, 1, 1, 6, 6, 12,12,12,1, 1,   10,10,11,11,11,11,11,11,11,11,11,11,10,10,1],
	[1,1,1,3,4,4,1,1,1,1,1,1,1,1,4,4,3,1,1,1,   1,1,9,9,8,8,8,8,8,8,8,8,9,9,1,1,   12,12,12,6, 1, 1, 1, 1, 1, 1, 6, 12,12,12,1, 1,   10,10,4, 4, 1, 1, 1, 1, 1, 1, 4, 4, 10,10,1],
	[1,1,4,4,4,4,1,1,5,1,1,5,1,1,4,4,4,4,1,1,   1,1,8,8,8,8,8,8,8,8,8,8,8,8,1,1,   12,12,12,6, 1, 5, 1, 1, 5, 1, 6, 12,12,12,1, 1,   10,10,4, 4, 1, 5, 1, 1, 5, 1, 4, 4, 10,10,1],
	[1,1,4,4,4,4,1,1,1,1,1,1,1,1,4,4,4,4,1,1,   1,1,4,4,4,1,1,1,1,1,1,4,4,4,1,1,   12,12,12,6, 1, 1, 4, 4, 1, 1, 6, 12,12,12,1, 1,   10,4, 4, 4, 1, 1, 1, 1, 1, 1, 4, 4, 4, 10,1],
	[1,1,1,4,4,4,1,1,1,4,4,1,1,1,4,4,4,1,1,1,   1,1,4,4,4,1,5,1,1,5,1,4,4,4,1,1,   12,12,12,6, 6, 4, 4, 4, 4, 6, 6, 12,12,12,1, 1,   10,4, 4, 4, 1, 1, 4, 4, 1, 1, 4, 4, 4, 10,1],
	[1,1,7,4,4,4,4,4,4,4,4,4,4,4,4,4,4,7,1,1,   1,1,4,4,4,1,1,4,4,1,1,4,4,4,1,1,   12,12,12,12,6, 6, 4, 4, 6, 6, 12,12,12,12,1, 1,   1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1],
	[1,7,7,7,4,4,4,4,4,5,5,4,4,4,4,4,7,7,7,1,   1,1,1,4,4,4,4,4,4,4,4,4,4,1,1,1,   1, 12,12,12,12,12,12,12,12,12,12,12,12,1, 1, 1,   1, 1, 4, 4, 4, 5, 5, 5, 5, 4, 4, 4, 1, 1, 1],
	[2,2,7,7,7,7,4,4,4,4,4,4,4,4,7,7,7,7,2,2,   1,1,1,1,4,4,4,5,5,4,4,4,1,1,1,1,   1, 1, 12,12,12,12,12,12,12,12,12,12,1, 1, 1, 1,   1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1],
	[2,2,2,7,7,7,7,4,4,4,4,4,4,7,7,7,7,2,2,2,   1,1,1,1,8,4,4,4,4,4,4,8,1,1,1,1,   1, 1, 6, 12,12,12,12,12,12,12,12,6, 1, 1, 1, 1,   1, 1, 12,10,10,4, 4, 4, 4, 10,10,12,1, 1, 1],
	[2,2,2,2,7,7,7,7,7,7,7,7,7,7,7,7,2,2,2,2,   1,1,1,6,6,8,8,8,8,8,8,6,6,1,1,1,   1, 12,12,6, 6, 6, 6, 6, 6, 6, 6, 12,12,1, 1, 1,   1, 12,12,12,12,12,12,12,12,12,12,12,12,1, 1],
	[1,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,1,   1,1,6,6,6,6,6,6,6,6,6,6,6,6,1,1,   1, 12,12,12,12,12,12,12,12,12,12,12,12,1, 1, 1,   1, 12,12,12,12,12,12,12,12,12,12,12,12,1, 1],
	[1,1,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,1,1,   1,1,8,8,6,6,6,6,6,6,6,6,8,8,1,1,   6, 6, 12,12,12,12,12,12,12,12,12,12,6, 6, 1, 1,   1, 10,10,12,12,12,12,12,12,12,12,10,10,1, 1],
	[1,1,6,6,7,7,7,7,7,7,7,7,7,7,7,7,6,6,1,1,   1,1,8,8,6,6,6,6,6,6,6,6,8,8,1,1,   6, 6, 12,12,12,12,12,12,12,12,12,12,6, 6, 1, 1,   1, 10,10,12,12,12,12,12,12,12,12,10,10,1, 1],
	[1,1,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,1,1,   1,1,1,1,9,9,9,9,9,9,9,9,1,1,1,1,   1, 1, 1, 12,12,12,12,12,12,12,12,1, 1, 1, 1, 1,   1, 1, 1, 9, 9, 9, 9, 9, 9, 9, 9, 1, 1, 1, 1],
	[1,1,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,1,1,   1,1,1,5,5,5,5,5,5,5,5,5,5,1,1,1,   1, 1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1, 1, 1, 1,   1, 1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1, 1, 1]
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
		else if(person[i][j]==3){
		 context.fillStyle = "#03B9C6";	//aquamarine
		}
		else if(person[i][j]==4){
		 context.fillStyle = "#FFF1C8";	//beige
		}
		else if(person[i][j]==5){
		context.fillStyle = "#000000"; //black
		}
		else if(person[i][j]==6){
		context.fillStyle = "#7A4732"; //brown
		}
		else if(person[i][j]==7){
		context.fillStyle = "#EC2E4A"; //red
		}
		else if(person[i][j]==8){
		context.fillStyle = "#BA0D2B"; //vinous
		}
		else if(person[i][j]==9){
		context.fillStyle = "#17446B"; //blue
		}
		else if(person[i][j]==10){
		context.fillStyle = "#4EB242"; //green2
		}
		else if(person[i][j]==11){
		context.fillStyle = "green"; //greenDark
		}
		else if(person[i][j]==12){
		context.fillStyle = "#EF6301"; //orange
		}
		x = x + 12; 
	}
x = 0;
y = y + 12;
}
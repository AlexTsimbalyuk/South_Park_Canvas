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
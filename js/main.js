
var x = 1;
var y =20;

window.onload = function(){
	canv = document.getElementById("binaryNums");
	ctx=canv.getContext("2d");
	header = document.getElementById("Header");
	header.height= window.innerHeight;
	var startAnimation01 = setInterval(animate0s1s,1000/35);

}

var changeValueX;
var changeValueY;
var fontSize;
var windowWidth = $(window).width();
	if(windowWidth > 800){
		fontSize ="20px";
		changeValueY = 40;
		changeValueX = 20;
	}
	else{
			fontSize = "40px";
			changeValueY = 100;
			changeValueX = 30;
		
	}
var allNumbers = [];
	for(var rows =0; rows<5; rows++){
		var row1 = [];
	for (var columns = 0; columns<20; columns++){
		var num = new makeNumber(x,(y+(rows*changeValueY)),((getRandomIntInclusive(0,1))));
		row1.push(num);
		x+=changeValueX;
	}
	allNumbers.push(row1);
	x=1;
}

var animate0s1s = function(){
	
	ctx.fillStyle= "#494949";
	ctx.fillRect(0,0,canv.width,canv.height);
	
	
	for(var row =0 ; row < 5; row++){
		var row1 = allNumbers[row];
		for (var column= 0; column < 20; column++) {
			ctx.font = "bold "+ fontSize+ " Verdana";
			ctx.fillStyle="#65ff00";
			ctx.fillText(row1[column].num+"",row1[column].x, row1[column].y);
			ctx.font="bold 16px";
			row1[column].y -= 1;
			if(row1[column].y === 0){
				update(row1);
				allNumbers[row]= row1;
			}
		}
	}

}


var update = function(randomNumbersParam){
	randomNumbersParam.forEach(function(element){
		element.y=canv.height+changeValueY;
		element.num = getRandomIntInclusive(0,1);
	});
	
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function makeNumber(x,y,num){
	this.x = x;
	this.y = y;
	this.num = num;
}

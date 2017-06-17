

window.onload = function(){
	canv = document.getElementById("binaryNums");
	ctx=canv.getContext("2d");
	header = document.getElementById("Header");
	header.height= window.innerHeight;
	var startAnimation01 = setInterval(animate0s1s,1000/30);
}

var randomNumbers = [];
var randomNumbers2=[];
var randomNumbers3 =[];
var randomNumbers4 =[];
var randomNumbers5 =[];
var x = 7;
var y =20;

for(var i =0; i < 10; i++){
	var num = new makeNumber(x,y,((getRandomIntInclusive(0,1))));
	var num2 = new makeNumber(x,y+20,((getRandomIntInclusive(0,1))));
	var num3 = new makeNumber(x,y+40,((getRandomIntInclusive(0,1))));
	var num4 = new makeNumber(x,y+60,((getRandomIntInclusive(0,1))));
	var num5 = new makeNumber(x,y+80,((getRandomIntInclusive(0,1))));
	randomNumbers.push(num);
	randomNumbers2.push(num2);
	randomNumbers3.push(num3);
	randomNumbers4.push(num4);
	randomNumbers5.push(num5);
	x+=20;
}

var animate0s1s = function(){
	
	ctx.fillStyle= "#2b2b2b";
	ctx.fillRect(0,0,canv.width,canv.height);

	for(var i =0 ; i < 10; i++){
		ctx.font="bold 12px";
		ctx.fillStyle="#65ff00";
		ctx.fillText(randomNumbers[i].num+"",randomNumbers[i].x, randomNumbers[i].y);

		ctx.font="bold 12px";
		ctx.fillStyle="#65ff00";
		ctx.fillText(randomNumbers2[i].num+"",randomNumbers2[i].x, randomNumbers2[i].y);

		ctx.font="bold 12px Verdana";
		ctx.fillStyle="#65ff00";
		ctx.fillText(randomNumbers3[i].num+"",randomNumbers3[i].x, randomNumbers3[i].y);

		ctx.font="bold 12px Verdana";
		ctx.fillStyle="#65ff00";
		ctx.fillText(randomNumbers4[i].num+"",randomNumbers4[i].x, randomNumbers4[i].y);

		ctx.font="bold 12px Verdana";
		ctx.fillStyle="#65ff00";
		ctx.fillText(randomNumbers5[i].num+"",randomNumbers5[i].x, randomNumbers5[i].y);

		randomNumbers[i].y-= 1;
		randomNumbers2[i].y-= 1;
		randomNumbers3[i].y-= 1;
		randomNumbers4[i].y-= 1;
		randomNumbers5[i].y-= 1;
		if(randomNumbers[i].y === 0){
			update(randomNumbers);
		}
		if(randomNumbers2[i].y === 0){
			update(randomNumbers2);
		}
		if(randomNumbers3[i].y === 0){
			update(randomNumbers3);
		}
		if(randomNumbers4[i].y === 0){
			update(randomNumbers4);
		}
		if(randomNumbers5[i].y === 0){
			update(randomNumbers5);
		}
	}

}


var update = function(randomNumbersParam){
	randomNumbersParam.forEach(function(element){
		element.y=105;
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

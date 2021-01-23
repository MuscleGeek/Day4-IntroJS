function getRandomInt(min,max)
{
	var randomNumber = Math.random(min,max) * 6;
	return randomNumber;
}
console.log(getRandomInt(1,6));
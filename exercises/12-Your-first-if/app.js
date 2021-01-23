var total = prompt('How many km are left to go?');

parseTotal = parseInt(total);
// Your code below:
if(parseTotal >= 100)
{
    console.log("Are we there yet?");
}else if(parseTotal >= 50){
    console.log("We'll be there in 5 minutes");
}else if(parseTotal <= 50 )
{
    console.log("I'm parking, I see you right");
}else
{
    console.log("Tus datos son erroneos, trate de nuevo");
}
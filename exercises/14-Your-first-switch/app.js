var colorname = prompt('What color do you want?');
function getColor(colorname)
{
	switch(colorname){
        // Add more options here
        case 'red':
            return true;
            break;         
        case 'green':
            return true;
            break;           
        case 'blue':          
            return true;
          break;         
	    default:
            return false;  //returns false because the user picked an unavailable color
            break;	                   
	}
}
let isAvailable = getColor(colorname);

if(isAvailable = true)
	console.log('Good news! That color is available');
else{
    console.log('We are sorry, that color is not available');
} 
	

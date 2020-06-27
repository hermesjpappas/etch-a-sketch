let gridside = 32;
const gridcont = document.querySelector('#grid-container');
const gridstyle = getComputedStyle(gridcont);
let griditems;

//use this section of the code only if you want
//the user to hold mouse down to draw
let mouseDown = false;
document.body.onmousedown = function() { event.preventDefault(); mouseDown = true;}
document.body.onmouseup = function() { mouseDown = false;}

//function to create our grid
function createGrid(gridside)
{
	gridcont.innerHTML="";
	gridcont.style.gridTemplateColumns = repStrWhile(`${100/gridside}% `, gridside);
	gridcont.style.gridTemplateRows = repStrWhile(`${100/gridside}% `, gridside);
	
	for(let i = 0; i < (gridside * gridside); i++)
	{
		const griditem = document.createElement("div");
		griditem.classList.add("grid-item");
		// griditem.textContent = i+1;
		gridcont.appendChild(griditem);
	}
	
	griditems = document.querySelectorAll(".grid-item");
	griditems.forEach((griditem) => 
	{
		griditem.addEventListener('mouseover', (e) => 
		{
			//if you want to draw just by hovering, remove
			//the if check for mousedown
			if(mouseDown) griditem.classList.add('touched');
			
		});
	});
}


//when the user clicks the clear button, clear the grid
//and then ask them how large / detailed they want the new grid
const clearb = document.querySelector("#clear");
clearb.addEventListener('click', (e) => 
{
	griditems.forEach((griditem) => 
	{
		griditem.classList.remove('touched');
	});
	
	});

//make a resize button so that the user can change resolution
//accepting values between 16 and 128
const reszb = document.querySelector("#resize");
reszb.addEventListener('click', (e) => 
{
	//use to get correct input
	let validprompt = true;
	let i = 0;
	
	do
	{
		gridside = (validprompt) ? prompt("Choose a grid side size between 16 and 128:") :
									prompt("Incorrect. Please choose a size between 16 and 128:");
		gridside = parseInt(gridside);
		
		if(gridside >= 16 && gridside <= 128) validprompt = true;
		else validprompt = false;
		
	} while (validprompt === false);
	
	createGrid(gridside);
});

//create our grid for the first time
createGrid(gridside);

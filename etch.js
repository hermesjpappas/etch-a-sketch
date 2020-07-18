let gridside = 32;
const gridcont = document.querySelector('#grid-container');
const gridstyle = getComputedStyle(gridcont);
const sizepara = document.querySelector('#gridsize');
let griditems;

//use this section of the code only if you want
//the user to hold mouse down to draw
let mouseDown = false;
//the preventDefault() function is to avoid drag functionality
document.body.onmousedown = function() { event.preventDefault(); mouseDown = true;}
document.body.onmouseup = function() { mouseDown = false;}

//function to create our grid
function createGrid(gridside)
{
	gridcont.innerHTML="";
	gridcont.style.gridTemplateColumns = `${100/gridside}% `.repeat(gridside);
	gridcont.style.gridTemplateRows = `${100/gridside}% `.repeat(gridside);

	
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

	sizepara.textContent = `GRID SIZE: ${gridside} X ${gridside}`;
}


//when the user clicks the clear button, clear the grid
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
	
	do
	{
		
		gridside = (validprompt) ? prompt("Choose a grid side size between 16 and 128:") :
									prompt("NOT A VALID VALUE. Please choose between 16 and 128:");
		gridside = gridside.replace(/\s/g, '');
		
		if(gridside >= 16 && gridside <= 128) validprompt = true;
		else if(gridside === null || gridside === "") return;
		else validprompt = false;
		
	} while (validprompt === false);
	
	///create the grid again using new side size value
	createGrid(gridside);
});

//create our grid for the first time
createGrid(gridside);

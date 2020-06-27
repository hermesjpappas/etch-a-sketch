let gridside = 16;

//fill our grid using javascript
const gridcont = document.querySelector('#grid-container');
const gridstyle = getComputedStyle(gridcont);
gridcont.style.gridTemplateColumns = repStrWhile(`${100/gridside}% `, gridside);
gridcont.style.gridTemplateRows = repStrWhile(`${100/gridside}% `, gridside);

for(let i = 0; i < (gridside * gridside); i++)
{
	const griditem = document.createElement("div");
	griditem.classList.add("grid-item");
	//griditem.textContent = i+1;
	gridcont.appendChild(griditem);
}

//make it so that when a grid box is hovered over it changes color
const gridsquares = document.querySelectorAll(".grid-item");
gridsquares.forEach((gridsquare) => 
{
	gridsquare.addEventListener('mouseover', (e) => 
	{
		gridsquare.style.backgroundColor = "#ccc";
		// griditem.classList.add('touched');
	});
});

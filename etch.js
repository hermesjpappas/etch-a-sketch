const rows = 16;
const columns = 16;

const gridcont = document.querySelector('#grid-container');
const gridstyle = getComputedStyle(gridcont);
gridcont.style.gridTemplateColumns = repStrWhile(`${100/columns}% `, columns);
gridcont.style.gridTemplateRows = repStrWhile(`${100/rows}% `, rows);

console.log(gridstyle.gridTemplateColumns);
console.log(gridstyle.gridTemplateRows);
for(let i = 0; i < (rows * columns); i++)
{
	const griditem = document.createElement('div');
	griditem.classList.add("grid-item");
	griditem.textContent = i+1;
	gridcont.appendChild(griditem);
}

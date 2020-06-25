//string function library

//credit: Sonya Moisset, freeCodeCamp blog post 2017/02/13
//function using a while loop
function repStrWhile(string, times)
{
	var repeatedString = "";
	
	while (times > 0)
	{
		repeatedString += string;
		times--;
	}
	
	return repeatedString;
}

//credit: Sonya Moisset, freeCodeCamp blog post 2017/02/13
//function using recursion
function repStrRec(string, times)
{
	if(times < 0) 
		return "";
	if(times === 1) 
		return string;
	else 
		return string + repStrRec(string, times - 1);
}

function capitalize(string) 
{
	string = string.toLowerCase();
	string = (string.slice(0,1)).toUpperCase() + string.slice(1,string.length);
	return string;
}

function lastLetter(string)
{
	string = string.slice(string.length - 1, string.length);
	return string;
}

function firstLetter(string)
{
	string = string.slice(0,1);
	return string;
}

const Verbose = true

function changeColor(newColor) {
  const elem = document.getElementById('para');
  elem.style.color = newColor;
}

const idButtons = document.getElementsByName('IDTarget');
const classButtons = document.getElementsByName('ClassTarget')
const selButtons = document.getElementsByName('SelTarget');

idButtons[0].addEventListener('click', FindById);
classButtons[0].addEventListener('click', FindByClass);
selButtons[0].addEventListener('click', FindBySelector)

function FindBySelector (event) {
	console.log ("FindBySelector");
	const selEl = document.getElementById('Selectors')
	const selText = selEl.value;
	const elems = document.querySelectorAll (selText);
	if (!elems.length) {
		console.log ("  None found");
	}
	else {
		for (let i = 0; i < elems.length; i++) {
			toggleColor(elems[i]);
		}
	}
}

function FindById (event) {
	logFunction (arguments.callee.toString());
	const idToFindEl = document.getElementById('IDField')
	const idToFindText = idToFindEl.value
	console.log ("  ID To find: ", idToFindText);
	
	const elem = document.getElementById(idToFindText)
	// const elem = idToFindEl.getElementById(idToFindText)
	toggleColor(elem);
}
	
function FindByClass (event) {
	logFunction (arguments.callee.toString());
	const classToFindEl = document.getElementById('classField')
	const classToFindText = classToFindEl.value
	console.log ("  Class To find: ", classToFindText);
	
	const elems = document.getElementsByClassName(classToFindText);
	if (!elems.length) {
		console.log ("  None found");
	}
	else {
		for (let i = 0; i < elems.length; i++) {
			toggleColor(elems[i]);
		}
	}
}
	
function toggleColor (tgtElem) {
	if (tgtElem) {
		console.log ("  Found: ", tgtElem.innerText);
		if (tgtElem.style.color == "red" ) {
			console.log ("  Already red, change to black");
			tgtElem.style.color = "black";
		}
		else {
			tgtElem.style.color = "red";
		}
	}
	else {
		console.log ("  None found");
	}
}

// input is return of arguments.callee.toString() which has full function 
// Parse to get the function name
function logFunction (strCallee) {

	if (Verbose) {
		const tokens = strCallee.split(" ");
		console.log ("Function: ", tokens[1]);
	}
}
const Verbose = true

function changeColor(newColor) {
  const elem = document.getElementById('para');
  elem.style.color = newColor;
}

// Event listners for click  on buttons
// Find By ID
const idButtons = document.getElementsByName('IDTarget');
idButtons[0].addEventListener('click', FindById);

// Find By Name
const classButtons = document.getElementsByName('ClassTarget')
classButtons[0].addEventListener('click', FindByClass);

// Find By Selector
const selButtons = document.getElementsByName('SelTarget');
selButtons[0].addEventListener('click', FindBySelector)

// Event listeners to have hitting Enter key on input text box result in click to submit

// Make Enter key behave like the user clicked on submit
// Find By ID
const selEl = document.getElementById('Selectors');
selEl.addEventListener("keypress", EnterKey);

// Find By Name
const idToFindEl = document.getElementById('IDField');
idToFindEl.addEventListener("keypress", EnterKey);

// Find By Selector
const classToFindEl = document.getElementById('classField');
classToFindEl.addEventListener("keypress", EnterKey);

function EnterKey (event) {
	logFunction (arguments.callee.toString());
	// If the user presses the "Enter" key on the keyboard
	if (event.key === "Enter") {
		console.log ("  Enter key");
		// Cancel the default action, if needed
		event.preventDefault();
		
		// Figure out which button based on the field ID of the text field
		if (event.currentTarget) {
			console.log ("  Current Target is not null")
			const tgtName = event.currentTarget.id;
			console.log ("    Value:", tgtName);
			
			var buttonName = "";
			switch (tgtName) {
				
				case "IDField":				// Find by Name
					buttonName = "IDTarget"
					break;
				
				case "classField":			// Find by Class
					buttonName = "ClassTarget";
					break;
			
				case "Selectors":			// Find by selectors
					buttonName = "SelTarget";
					break;
		
			}
			
			console.log ("Button Name: ", buttonName);
			
			// Trigger the button element with a click
			const buttons = document.getElementsByName(buttonName)
			// buttons[0].click();
			buttons[0].focus();
		}
		else {
			console.log ("  Current Target is null");
		}
			

	}	
}

function FindBySelector (event) {
	logFunction (arguments.callee.toString());

	// selEl is global
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

	const idToFindText = idToFindEl.value
	console.log ("  ID To find: ", idToFindText);
	
	const elem = document.getElementById(idToFindText)
	// const elem = idToFindEl.getElementById(idToFindText)
	toggleColor(elem);
}
	
function FindByClass (event) {
	logFunction (arguments.callee.toString());

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
/*
Nathan Hellrung

Thanks to w3schools.com for guide on implementing "tabs".
*/


/* delay function delays code execution by specified milliseconds (ms) */
/*
function delay(ms) {
	var start_time = Date.now();
	while (Date.now() - start_time < ms);
}
*/



/* Function to quickly reveal all elements in a div one-at-a-time for a cool effect*/
/*
function elementsReveal(ancestorId) {
	// Acquire/define an HTML element and a collection of sub-elements within it
	var ancestor = document.getElementById('ancestorId');
    var descendents = ancestor.getElementsByTagName('*');
	
	var i, e, d;
	for (i = 0; i < descendents.length; ++i) {
		e = descendents[i];
		e.style.display = "block";
	}
}
*/


function openTab(evt, sectionName) {
    // Declare all variables
    var i, tabcontent, tablinks;
	
	// If the clicked tab isn't already open:
	if (document.getElementById(sectionName).style.display != "block") {
		// Set local "tabcontent" variable = a container containing all html elements with class="tabcontent"
		// Then hide all of those elements (i.e. hide all tabcontent)
		tabcontent = document.getElementsByClassName("tabcontent");
		for (i = 0; i < tabcontent.length; i++) {
			tabcontent[i].style.display = "none";
		}

		// Get all html elements with class="tablinks" and remove the class "active"
		// (i.e. we are setting all tab buttons to be inactive, then we will activate the target later.)
		tablinks = document.getElementsByClassName("tablinks");
		for (i = 0; i < tablinks.length; i++) {
			tablinks[i].className = tablinks[i].className.replace(" active", "");
		}

		// Display the section who's tab was clicked, 
		// and add an "active" class to the button that opened the tab.
		document.getElementById(sectionName).style.display = "block";
		evt.currentTarget.className += " active";
	}
	else {
		// If the clicked tab is the currently active one, close it instead.
		// Same code as above, but does not activate/display a tab at the end.
		
		// Set local "tabcontent" variable = a container containing all html elements with class="tabcontent"
		// Then hide all of those elements (i.e. hide all tabcontent)
		tabcontent = document.getElementsByClassName("tabcontent");
		for (i = 0; i < tabcontent.length; i++) {
			tabcontent[i].style.display = "none";
		}

		// Get all html elements with class="tablinks" and remove the class "active"
		// (i.e. we are setting all tab buttons to be inactive, then we will activate the target later.)
		tablinks = document.getElementsByClassName("tablinks");
		for (i = 0; i < tablinks.length; i++) {
			tablinks[i].className = tablinks[i].className.replace(" active", "");
		}
	}
}



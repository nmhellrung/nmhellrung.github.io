/*
Nathan Hellrung

Thanks to w3schools.com for "tab" guide.
*/


/* delay function delays code execution by specified milliseconds (ms) */
/*
function delay(ms) {
	var start_time = Date.now();
	while (Date.now() - start_time < ms);
}
*/


function openTab(evt, sectionName) {
    // Declare all variables
    var i, tabcontent, tablinks;
	
	// If the clicked tab isn't already open:
	if (document.getElementById(sectionName).style.display != "block") {
		// Set local "tabcontent" variable = a container containing all html elements with class="tabcontent"
		// Then hide all of those elements
		tabcontent = document.getElementsByClassName("tabcontent");
		for (i = 0; i < tabcontent.length; i++) {
			tabcontent[i].style.display = "none";
		}

		// Get all html elements with class="tablinks" and remove the class "active"
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
		// If the clicked tab is the current active/displayed tab,
		// wait 1 second (for fade out animation), then
		// hide that section and remove the "active" class from the tab's button.
		//delay(1000);
		document.getElementById(sectionName).style.display = "none";
		evt.currentTarget.className -= " active";
	}
}


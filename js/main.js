/*
Nathan Hellrung

Thanks to w3schools.com for "tab" guide.
*/

function openTab(evt, sectionName) {
    // Declare all variables
    var i, tabcontent, tablinks;

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

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}


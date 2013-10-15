var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    onDeviceReady: function() {        
		var options = new ContactFindOptions();
        options.filter = "";
        options.multiple = true;
        
        filter = ["displayName","name","phoneNumbers"];       
        navigator.contacts.find(filter, onSuccess, onError, options);
    }
};

function onSuccess(contacts) {
    console.log("*** found: " + contacts.length + " in contact list. ***");
	var myresults = document.getElementById("contacts");
	var string = "";
	for (var i = 0; i < contacts.length; i++) {
		string += "Name: " + contacts[i].displayName + "<br/>";
	};
    myresults.innerHTML = string;
};

function onError(contactError) {
    alert('onError!');
};    

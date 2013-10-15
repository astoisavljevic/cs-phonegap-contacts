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
        var element = document.getElementById('deviceProperties');
        
        element.innerHTML = '<div class=\"device-property-item\">' +
			'<div class=\"device-property-item-left\">' +
			'<span>Device name:</span></div>' + 
			'<div class=\"device-property-item-right\">' + 
			'<span>' + device.name +'</span></div>' +
			'<div style=\"clear: both;\"></div></div>' +
        	'<div class=\"device-property-item\">' +
			'<div class=\"device-property-item-left\">' +
			'<span>PhoneGap:</span></div>' + 
			'<div class=\"device-property-item-right\">' + 
			'<span>' + device.phonegap +'</span></div>' +
			'<div style=\"clear: both;\"></div></div>' +
        	'<div class=\"device-property-item\">' +
			'<div class=\"device-property-item-left\">' +
			'<span>Device Platform:</span></div>' + 
			'<div class=\"device-property-item-right\">' + 
			'<span>' + device.platform +'</span></div>' +
			'<div style=\"clear: both;\"></div></div>' +
        	'<div class=\"device-property-item\">' +
			'<div class=\"device-property-item-left\">' +
			'<span>Device UUID:</span></div>' + 
			'<div class=\"device-property-item-right\">' + 
			'<span>' + device.uuid +'</span></div>' +
			'<div style=\"clear: both;\"></div></div>' +
        	'<div class=\"device-property-item\">' +
			'<div class=\"device-property-item-left\">' +
			'<span>Device Version::</span></div>' + 
			'<div class=\"device-property-item-right\">' + 
			'<span>' + device.version +'</span></div>' +
			'<div style=\"clear: both;\"></div></div>';
    }
};

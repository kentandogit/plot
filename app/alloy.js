// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};
var geo = require('geo');

//Alloy.Globals.LATITUDE_BASE = 37.389569;
//Alloy.Globals.LONGITUDE_BASE = -122.050212;
Alloy.Globals.API_LOCATION_ADDRESS = '';

if (OS_IOS || OS_ANDROID) {
	Alloy.Globals.Map = Ti.Map = require('ti.map');
}
Alloy.Globals.winTop = (OS_IOS && parseInt(Ti.Platform.version, 10) >= 7) ? 20 : 0;
Ti.UI.backgroundColor = "#fff";
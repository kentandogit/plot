var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

var geo = require("geo");

Alloy.Globals.API_LOCATION_ADDRESS = "";

Alloy.Globals.Map = Ti.Map = require("ti.map");

Alloy.Globals.winTop = 0;

Ti.UI.backgroundColor = "#fff";

Alloy.createController("index");
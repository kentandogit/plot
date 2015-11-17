function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function search_parkinglot() {
        $.trigger("removeAnnotations");
        $.textField.blur();
        $.searching.setVisible(true);
        var lastpgeodata = null;
        Alloy.Globals.API_LOCATION_ADDRESS = "?address=" + $.textField.value;
        parkinglot.fetch({
            success: function(collection) {
                collection.map(function(parkingl) {
                    false == parkingl.get("status") ? alert("No parking found!") : geo.createGeoData(parkingl, function(pgeodata) {
                        $.trigger("addAnnotationOnly", {
                            geodata: pgeodata
                        });
                        lastpgeodata = pgeodata;
                    });
                });
                lastpgeodata && $.trigger("addAnnotation", {
                    geodata: lastpgeodata
                });
                $.searching.setVisible(false);
            }
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "addAddress";
    this.args = arguments[0] || {};
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    $.__views.addAddress = Ti.UI.createView({
        backgroundColor: "#800",
        height: "83dp",
        top: 0,
        id: "addAddress"
    });
    $.__views.addAddress && $.addTopLevelView($.__views.addAddress);
    $.__views.textField = Ti.UI.createTextField({
        height: "40dp",
        top: "5dp",
        left: "5dp",
        right: "50dp",
        style: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        backgroundColor: "#fff",
        paddingLeft: "5dp",
        color: "#000",
        id: "textField",
        hintText: "Enter an address",
        value: "ayala cebu"
    });
    $.__views.addAddress.add($.__views.textField);
    $.__views.button = Ti.UI.createButton({
        font: {
            fontSize: "20dp",
            fontWeight: "bold"
        },
        top: "5dp",
        height: "40dp",
        width: "40dp",
        right: "5dp",
        id: "button",
        title: "+"
    });
    $.__views.addAddress.add($.__views.button);
    $.__views.favbtn = Ti.UI.createButton({
        font: {
            fontSize: "12dp"
        },
        top: "43dp",
        height: "40dp",
        left: "1dp",
        title: "Favorites",
        id: "favbtn"
    });
    $.__views.addAddress.add($.__views.favbtn);
    $.__views.listview = Ti.UI.createButton({
        font: {
            fontSize: "12dp"
        },
        top: "43dp",
        height: "40dp",
        left: "68dp",
        title: "List View",
        id: "listview"
    });
    $.__views.addAddress.add($.__views.listview);
    $.__views.mapview = Ti.UI.createButton({
        font: {
            fontSize: "12dp"
        },
        top: "43dp",
        height: "40dp",
        left: "134dp",
        title: "Map View",
        id: "mapview"
    });
    $.__views.addAddress.add($.__views.mapview);
    $.__views.searching = Ti.UI.createView({
        backgroundColor: "#636060",
        opacity: "0.8",
        zIndex: "100",
        visible: false,
        id: "searching"
    });
    $.__views.searching && $.addTopLevelView($.__views.searching);
    $.__views.__alloyId0 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: "30dp",
            fontWeight: "bold"
        },
        text: "Searching...",
        id: "__alloyId0"
    });
    $.__views.searching.add($.__views.__alloyId0);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var geo = require("geo");
    var parkinglot = Alloy.createCollection("parkinglot");
    Alloy.Globals.API_LOCATION_ADDRESS && ($.textField.value = Alloy.Globals.API_LOCATION_ADDRESS);
    $.button.addEventListener("click", function() {
        search_parkinglot();
    });
    $.listview.addEventListener("click", function() {
        var listview = Alloy.createController("listview").getView();
        listview.open();
    });
    $.mapview.addEventListener("click", function() {
        var mapview = Alloy.createController("index").getView();
        mapview.open();
    });
    exports.searchParkingLot = function() {
        $.trigger("removeAnnotations");
        $.textField.blur();
        $.searching.setVisible(true);
        var lastpgeodata = null;
        Alloy.Globals.API_LOCATION_ADDRESS = "?address=" + $.textField.value;
        parkinglot.fetch({
            success: function(collection) {
                collection.map(function(parkingl) {
                    false == parkingl.get("status") ? alert("No parking found!") : geo.createGeoData(parkingl, function(pgeodata) {
                        $.trigger("addAnnotationOnly", {
                            geodata: pgeodata
                        });
                        lastpgeodata = pgeodata;
                    });
                });
                lastpgeodata && $.trigger("addAnnotation", {
                    geodata: lastpgeodata
                });
                $.searching.setVisible(false);
            }
        });
    };
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "map";
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
    var __alloyId12 = [];
    $.__views.map = (require("ti.map").createView || Ti.UI.createView)({
        top: "83dp",
        animate: true,
        regionFit: true,
        userLocation: "true",
        region: {
            latitude: Alloy.Globals.LATITUDE_BASE,
            longitude: Alloy.Globals.LONGITUDE_BASE,
            latitudeDelta: .1,
            longitudeDelta: .1
        },
        annotations: __alloyId12,
        id: "map"
    });
    $.__views.map && $.addTopLevelView($.__views.map);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.map.addEventListener("click", function(e) {
        if (!e.annotation || "leftButton" !== e.clicksource && "leftPane" != e.clicksource) {
            if (e.annotation) {
                var parkingdetail = Alloy.createController("parkingdetail", {
                    parkinglot: e.annotation.parkinglot
                }).getView();
                parkingdetail.open();
            }
        } else $.map.removeAnnotation(e.annotation);
    });
    exports.addAnnotation = function(geodata) {
        $.map.setLocation({
            latitude: geodata.coords.latitude,
            longitude: geodata.coords.longitude,
            latitudeDelta: .01,
            longitudeDelta: .01
        });
    };
    exports.addAnnotationOnly = function(geodata) {
        var annotation = Alloy.createController("annotation", {
            title: geodata.title,
            latitude: geodata.coords.latitude,
            longitude: geodata.coords.longitude,
            parkinglot: geodata.parkinglot
        });
        $.map.addAnnotation(annotation.getView());
    };
    exports.removeAnnotations = function() {
        $.map.removeAllAnnotations();
    };
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
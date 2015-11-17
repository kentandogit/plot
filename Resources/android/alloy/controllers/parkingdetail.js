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
    this.__controllerPath = "parkingdetail";
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
    $.__views.parkingdetail = Ti.UI.createWindow({
        navBarHidden: true,
        backgroundColor: "white",
        id: "parkingdetail"
    });
    $.__views.parkingdetail && $.addTopLevelView($.__views.parkingdetail);
    $.__views.__alloyId13 = Ti.UI.createView({
        id: "__alloyId13"
    });
    $.__views.parkingdetail.add($.__views.__alloyId13);
    $.__views.name = Ti.UI.createLabel({
        top: "10dp",
        textAlign: "Ti.UI.TEXT_ALIGNMENT_CENTER",
        color: "#000",
        font: {
            fontSize: "20dp",
            fontWeight: "bold"
        },
        id: "name",
        text: "name"
    });
    $.__views.__alloyId13.add($.__views.name);
    $.__views.address = Ti.UI.createLabel({
        top: "40dp",
        textAlign: "Ti.UI.TEXT_ALIGNMENT_CENTER",
        width: "300dp",
        color: "#000",
        font: {
            fontSize: "15dp"
        },
        id: "address",
        text: "address"
    });
    $.__views.__alloyId13.add($.__views.address);
    $.__views.__alloyId14 = Ti.UI.createLabel({
        top: "160dp",
        textAlign: "Ti.UI.TEXT_ALIGNMENT_CENTER",
        color: "#000",
        font: {
            fontSize: "20dp",
            fontWeight: "bold"
        },
        text: "Vacant Slots",
        id: "__alloyId14"
    });
    $.__views.__alloyId13.add($.__views.__alloyId14);
    $.__views.__alloyId15 = Ti.UI.createView({
        borderRadius: "3dp",
        borderColor: "#636060",
        backgroundColor: "#e7e7e7",
        width: "200dp",
        height: "200dp",
        id: "__alloyId15"
    });
    $.__views.parkingdetail.add($.__views.__alloyId15);
    $.__views.vacant = Ti.UI.createLabel({
        textAlign: "Ti.UI.TEXT_ALIGNMENT_CENTER",
        color: "#000",
        font: {
            fontSize: "50dp",
            fontWeight: "bold"
        },
        text: "0",
        id: "vacant"
    });
    $.__views.__alloyId15.add($.__views.vacant);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var parkinglot = args.parkinglot;
    $.name.setText(parkinglot.get("name") + " name");
    $.address.setText(parkinglot.get("address") + " 21 Bakilid I, AS Fortuna Street, Mandaue City");
    $.vacant.setColor(parkinglot.get("vacant_slot") > 0 ? "#0c940c" : "#ff0000");
    $.vacant.setText(parkinglot.get("vacant_slot"));
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
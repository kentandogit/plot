function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId10(e) {
        if (e && e.fromAdapter) return;
        var opts = __alloyId10.opts || {};
        var models = __alloyId9.models;
        var len = models.length;
        var __alloyId5 = [];
        for (var i = 0; len > i; i++) {
            var __alloyId6 = models[i];
            __alloyId6.__transform = {};
            var __alloyId8 = {
                properties: {
                    title: "undefined" != typeof __alloyId6.__transform["name"] ? __alloyId6.__transform["name"] : __alloyId6.get("name")
                }
            };
            __alloyId5.push(__alloyId8);
        }
        opts.animation ? $.__views.__alloyId4.setItems(__alloyId5, opts.animation) : $.__views.__alloyId4.setItems(__alloyId5);
    }
    function cleanup() {
        $.destroy();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "listview";
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
    var __defers = {};
    Alloy.Collections.instance("parkinglot");
    $.__views.listview = Ti.UI.createWindow({
        navBarHidden: true,
        backgroundColor: "white",
        id: "listview"
    });
    $.__views.listview && $.addTopLevelView($.__views.listview);
    cleanup ? $.addListener($.__views.listview, "close", cleanup) : __defers["$.__views.listview!close!cleanup"] = true;
    $.__views.addAddress = Alloy.createController("addAddress", {
        id: "addAddress",
        __parentSymbol: $.__views.listview
    });
    $.__views.addAddress.setParent($.__views.listview);
    $.__views.__alloyId4 = Ti.UI.createListSection({
        id: "__alloyId4"
    });
    var __alloyId9 = Alloy.Collections["parkinglot"] || parkinglot;
    __alloyId9.on("fetch destroy change add remove reset", __alloyId10);
    var __alloyId11 = [];
    __alloyId11.push($.__views.__alloyId4);
    $.__views.__alloyId3 = Ti.UI.createListView({
        top: "83dp",
        sections: __alloyId11,
        id: "__alloyId3"
    });
    $.__views.listview.add($.__views.__alloyId3);
    exports.destroy = function() {
        __alloyId9.off("fetch destroy change add remove reset", __alloyId10);
    };
    _.extend($, $.__views);
    arguments[0] || {};
    $.addAddress.textField.value && (Alloy.Globals.API_LOCATION_ADDRESS = "?address=" + $.addAddress.textField.value);
    Alloy.Collections.parkinglot.fetch();
    __defers["$.__views.listview!close!cleanup"] && $.addListener($.__views.listview, "close", cleanup);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
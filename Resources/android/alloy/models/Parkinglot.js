var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

exports.definition = {
    config: {
        adapter: {
            type: "book_rest",
            collection_name: "parkinglot",
            base_url: "http://parking.kentando.com/parkinglot/getbyaddress/",
            api_key: "1234567890",
            auth_type: "X-API-KEY"
        }
    }
};

model = Alloy.M("parkinglot", exports.definition, []);

collection = Alloy.C("parkinglot", exports.definition, model);

exports.Model = model;

exports.Collection = collection;
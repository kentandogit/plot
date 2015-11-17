function http_request(method, url, payload, callback) {
    var client = Ti.Network.createHTTPClient({
        onload: function() {
            if (callback) {
                var resource = this.getResponseHeader("Location") || null;
                if (resource) {
                    resource = resource.slice(resource.lastIndexOf("/") + 1);
                    http_request("GET", BASE_URL + resource, null, callback);
                } else callback(null, this.responseText);
            }
        },
        onerror: function(e) {
            callback && callback(e.error, this.responseText);
        },
        timeout: 5e3
    });
    client.open(method, url);
    "basic" === AUTH_TYPE && client.setRequestHeader("Authorization", "Basic " + Ti.Utils.base64encode(API_KEY + ":"));
    "X-API-KEY" === AUTH_TYPE && client.setRequestHeader("X-API-KEY", API_KEY);
    client.send(payload);
}

var BASE_URL, API_KEY, AUTH_TYPE;

module.exports.sync = function(method, model, options) {
    function callback(error, response) {
        var res = response ? JSON.parse(response) : null;
        if (error) {
            var err = res.error || error;
            Ti.API.error("ERROR: " + err);
            options.error(model, error, options);
            model.trigger("error");
        } else {
            res && res.key && (res = res[res.key]);
            options.success(res, response, options);
        }
    }
    var payload = model.toJSON();
    var error;
    switch (method) {
      case "read":
        Alloy.Globals.API_LOCATION_ADDRESS ? http_request("GET", BASE_URL + Alloy.Globals.API_LOCATION_ADDRESS, null, callback) : payload[model.idAttribute] ? http_request("GET", BASE_URL + payload[model.idAttribute], null, callback) : http_request("GET", BASE_URL, null, callback);
        break;

      case "create":
        payload.title && payload.author ? http_request("POST", BASE_URL, {
            title: payload.title,
            author: payload.author
        }, callback) : error = "ERROR: Cannot create model without an author or title!";
        break;

      case "delete":
        payload[model.idAttribute] ? http_request("DELETE", BASE_URL + payload[model.idAttribute], null, callback) : error = "ERROR: Model does not have an ID!";
        break;

      case "update":
        payload[model.idAttribute] ? http_request("PUT", BASE_URL + payload[model.idAttribute], {
            title: payload.title,
            author: payload.author
        }, callback) : error = "ERROR: Model does not have an ID!";
        break;

      default:
        error = "ERROR: Sync method not recognized!";
    }
    if (error) {
        options.error(model, error, options);
        Ti.API.error(error);
        model.trigger("error");
    }
};

module.exports.beforeModelCreate = function(config) {
    config = config || {};
    BASE_URL = config.adapter.base_url || "http://localhost:8080/api/book";
    API_KEY = config.adapter.api_key || "";
    AUTH_TYPE = config.adapter.auth_type || "basic";
    return config;
};

module.exports.afterModelCreate = function() {};
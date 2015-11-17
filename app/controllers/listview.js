var args = arguments[0] || {};

if($.addAddress.textField.value)
	Alloy.Globals.API_LOCATION_ADDRESS = '?address=' + $.addAddress.textField.value;
	
Alloy.Collections.parkinglot.fetch();

function cleanup() {
    $.destroy();
}
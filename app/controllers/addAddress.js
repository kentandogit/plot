var geo = require('geo');
var parkinglot = Alloy.createCollection('parkinglot');

if(Alloy.Globals.API_LOCATION_ADDRESS)
	$.textField.value = Alloy.Globals.API_LOCATION_ADDRESS;

$.button.addEventListener('click', function(e) {
	
	search_parkinglot();
	
	//Ti.API.debug('Parkinglot ' + JSON.stringify(parkinglot, null, '\t'));
});

$.listview.addEventListener('click',function(e){
	var listview = Alloy.createController('listview').getView();
	listview.open();
});

$.mapview.addEventListener('click',function(e){
	var mapview = Alloy.createController('index').getView();
	mapview.open();
});

exports.searchParkingLot = function ()
{
	$.trigger('removeAnnotations');
	$.textField.blur();
	$.searching.setVisible(true);
	
	var lastpgeodata = null;
	Alloy.Globals.API_LOCATION_ADDRESS = '?address=' + $.textField.value;
	
	parkinglot.fetch({
		success:function(collection, response){
			collection.map(function(parkingl){
				if(parkingl.get('status') == false)
				{
					alert('No parking found!');
				}
				else
				{
					geo.createGeoData(parkingl,function(pgeodata){
						$.trigger('addAnnotationOnly', {geodata: pgeodata});
						lastpgeodata = pgeodata;	
					});	
				}
			});
			if(lastpgeodata)
				$.trigger('addAnnotation', {geodata: lastpgeodata});
			$.searching.setVisible(false);
		}
	});
};

function search_parkinglot()
{
	$.trigger('removeAnnotations');
	$.textField.blur();
	$.searching.setVisible(true);
	
	var lastpgeodata = null;
	Alloy.Globals.API_LOCATION_ADDRESS = '?address=' + $.textField.value;
	
	parkinglot.fetch({
		success:function(collection, response){
			collection.map(function(parkingl){
				if(parkingl.get('status') == false)
				{
					alert('No parking found!');
				}
				else
				{
					geo.createGeoData(parkingl,function(pgeodata){
						$.trigger('addAnnotationOnly', {geodata: pgeodata});
						lastpgeodata = pgeodata;	
					});	
				}
			});
			if(lastpgeodata)
				$.trigger('addAnnotation', {geodata: lastpgeodata});
			$.searching.setVisible(false);
		}
	});
}

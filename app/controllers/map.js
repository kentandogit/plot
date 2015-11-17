$.map.addEventListener('click', function(e) {
	if (e.annotation && (e.clicksource === 'leftButton' || e.clicksource == 'leftPane')) {
		$.map.removeAnnotation(e.annotation);
	}
	else if (e.annotation) {
		var parkingdetail = Alloy.createController('parkingdetail',{parkinglot:e.annotation.parkinglot}).getView();
		parkingdetail.open();
	}
});

exports.addAnnotation = function(geodata) {
	$.map.setLocation({
		latitude: geodata.coords.latitude,
		longitude: geodata.coords.longitude,
		latitudeDelta: 0.01,
		longitudeDelta: 0.01
	});
};

exports.addAnnotationOnly = function(geodata) {
	var annotation = Alloy.createController('annotation', {
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
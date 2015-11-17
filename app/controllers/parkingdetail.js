var args = arguments[0] || {};

var parkinglot = args.parkinglot;

$.name.setText(parkinglot.get('name') + ' name');
$.address.setText(parkinglot.get('address') + ' 21 Bakilid I, AS Fortuna Street, Mandaue City');
if(parkinglot.get('vacant_slot') > 0)
	$.vacant.setColor('#0c940c');
else
	$.vacant.setColor('#ff0000');
$.vacant.setText(parkinglot.get('vacant_slot'));

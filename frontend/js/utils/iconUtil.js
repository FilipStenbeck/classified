module.exports = function (category) {
	var icon = '';
	switch (category) {
		case 'cars' :
		icon = '../img/car.png';
		break;

		case  'phones' :
		icon =  '../img/phone.png';
		break;

		case  'services' :
		icon = '../img/service.png';
	}
	return icon;
}
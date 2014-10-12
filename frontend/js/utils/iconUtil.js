module.exports = function (ads) {
	
	function getIcon (category) {
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

	return ads.map(function(ad) {
		ad.icon = getIcon(ad.category);
		return ad;
	});
}
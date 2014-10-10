module.exports = function Add (config) {

	return {
		title : config.title || 'untitled',
		price : config.price || 'unpriced',
		description : config.description || '',
		category : config.category || '',
		contact : {
			email : config.email || '',
			phone : config.phone ||  '',
			city : config.city || ''
		},
	}
}


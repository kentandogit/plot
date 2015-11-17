exports.definition = {
	config: {
		adapter: {
			type: 'book_rest',
			collection_name: 'parkinglot',
			// Endpoint URL to access the Arrow application
			base_url: 'http://parking.kentando.com/parkinglot/getbyaddress/',
			// API key for the Arrow application
			api_key: '1234567890',
			// Authorization type. Set to either none, basic or apikey
			auth_type: 'X-API-KEY'
		}
	}
};

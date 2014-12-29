// Hack
var Handlebars = window.Handlebars;

// return client vars
Handlebars.registerHelper('client', function( selector ){
	// get the client object
	var client = window.client || {};

	// loop through all the key hierarchy (if any)
	var target = client;
	var key = selector.split(".");
	for (i in key){
		target = target[key[i]];

	}
	// fallback to the original string if nothing found
	target = target || selector;
	//output
	return target;
});

export default Handlebars;

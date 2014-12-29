/*
	Publisher: K&D Interactive Inc.
	Read the /humans.txt file for a list of the people involved in the development of this application
*/
var app;

System.config( config.js ); // this is optional - remove if using KISSCMS or Brisk

System.meta['app'] = { format: 'amd' }; // remove this when transitioned to ES6 app

System.import('app').then(function(APP){
	// setup app
	APP(config.app, function( Controller ){
		// initialize
		app = new Controller();
		// update Backbone options
		Backbone.history.start({ pushState: config.app.pushState });
	});

}).catch(function(e) {
	setTimeout(function() {
		throw e;
	});
});

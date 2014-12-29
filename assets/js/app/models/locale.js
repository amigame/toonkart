// main
import { default as Parent } from 'app/models/common';
// helpers
import { default as _ } from 'helpers/underscore';

var Model = Parent.extend({

	name: "locale",

	url: function(){
		return (config.isDev)
			? "/test/data/locale.json"
			: "/test/data/locale.json"; //change this when the server has a is updated
			//: "/api/locale/"+ this.options.lang;
	},

	options: {
		autofetch: true,
		lang: "en"
	},

	defaults: {
		"header": {}
	},

	parse: function( data ){
		_.log( "locale", data );
		window.locale = data;
		return data;
	}

});

// save in the global namespace
//APP.Models.Locale = Model;

export default Model;
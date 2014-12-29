import { default as APP } from 'app';

var Model = APP.Model.extend({

	idAttribute: 'id',

	options: {
		autofetch: false
	},
/*
	// already part of APP model?
	initialize: function(model, options){
		this.options = _.extend({}, this.options, options);

		if( this.options.autofetch ){
			this.fetch();
		}
		return Parent.prototype.initialize.apply( this, arguments );
	},
*/
	parse: function( data ){
		_.log( this.name, data );
		return data;
	}

});

// save in the global namespace
//APP.Models.Common = Model;

export default Model;
// main
import { default as Parent } from 'app/controllers/common';
import { default as Layout } from 'app/layouts/default';
// helpers
import { default as _ } from 'helpers/underscore';


var Router = Parent.extend({

	routes: {
		"": "index"
	},

	index: function(){
		// check if authenticated
		//if( this.session.get("auth") ) return this.home();

		_.log("in index");
		this.data.set({
		});

		this.layout = new Layout({ data: this.data });
	},

	// in case there's a logged in state...
	home: function(){
		_.log("in home");
		var self = this;

		this.data.set({
		});

		//this.layout = new Home({ data: self.data });

	}

});


// save in the global namespace
//APP.Routers.Default = Router;

export default Router;
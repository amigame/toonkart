// main
import { default as APP } from 'app';
import { default as Alert } from 'libs/backbone.ui.alert';
import { default as Locale } from 'app/models/locale';
// helpers
import { default as analytics } from 'helpers/analytics';


var Parent = APP.Router;

var Router = Parent.extend({

	options: {
		session: {
			remote: false,
			// url: "/test/data/session.json"
		}
	},

	//data: new APP.Model(), // move to backbone app?

	initialize: function( options ){
		// display any server-side alerts
		if( typeof client !== "undefined" ){
			// assuming client has a set structure...
			// - setting debug flag
			this.options.debug = client.debug;
			// - display alerts
			if( client.alerts ){
			for( var i in client.alerts ){
				var messages = client.alerts[i];
				var type = i;
				for( var j in messages ){
					new Alert({
						message : messages[j],
						type: type
					});
				}
			}
			}
		}
		// language file
		this.data.set({
			locale: new Locale()
		});

		return Parent.prototype.initialize.call(this, options);
	}
});

export default Router;
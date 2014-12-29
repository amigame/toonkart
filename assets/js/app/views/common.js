// main
import { default as APP } from 'app';
// helpers
import { default as _ } from 'helpers/underscore';
import { default as Handlebars } from 'helpers/handlebars';


var View = APP.View.extend({

	options: {
	}

});

// save in the global namespace
//APP.Views.Common = View;

export default View;

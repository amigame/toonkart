import { default as Parent } from 'app/models/common';

var Model = Parent.extend({

	defaults: {
		"text": {}
	}

});

// save in the global namespace
//APP.Models.Model = Model;

export default Model;
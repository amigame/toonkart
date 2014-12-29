import Parent from 'app/collections/common';

var Collection = Parent.extend({

	name: "collection",

	options: {
		autofetch: true
	}

	//url: ""

});

// save in the global namespace
APP.Collections.Collection = Collection;

export Collection;

import { default as Parent } from 'app/layouts/common';

var Layout = Parent.extend({

	name: "default",

	options: {
		classNames: ""
	}
});

// save in the global namespace
//APP.Layouts.Default = Layout;

export default Layout;

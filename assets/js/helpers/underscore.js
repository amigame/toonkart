// HACK
var _ = window._;

_.mixin({
	log: function(a, b){
		if( DEBUG && console.log ){
			console.log.apply( console, arguments );
		}
	}
});

export default _;
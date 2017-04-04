/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Written by Dor Kleiman @configurator

*/
'use strict';

module.exports = function ProvideAlwaysLoader(contents) {
	if (!this.query.globals) {
		console.error('globals is undefined');
		console.dir(this.query);
		return contents;
	}

	let globals = this.query.globals;
	let initializers = globals.map(param => `(global||window).${param} = (global||window).${param} || {}`);

	let prefix = `(function (/* injected by provide-always-loader */ ${globals.join(', ')}) {`;
	let suffix = `})(/* injected by provide-always-loader */ ${initializers.join(', ')});`;

	return prefix + contents + suffix;
};

# provide-always-loader

This loader does the same as ProvidePlugin, except it always does the injection without checking for a free variable.
This means that even modules that use `var x = ...` at the file scope would have x injected into them.

## Installation

	npm install --save-dev provide-always-loader

## Usage

	module.rules: [
		{
			test: /\.js$/,
			use: [
				{
					loader: 'provide-always-loader',
					globals: [
						'global1',
						'global2',
						'etc'
					]
				}
			]
		}
	]


The [Bech32](https://github.com/bitcoin/bips/blob/master/bip-0173.mediawiki) address format is a new way of formatting Bitcoin addresses to be more robust and mistake-resistant.

This widget is designed as a universal web UI component to handle input of Bech32 addresses from users, and do the validation and prompting to help make sure the user entered the right address.

The source file at `js/Bech32Address.jsx` is the main component, in JSX format, which can be included in other JSX projects with a build process directly. The version at `dist/js/Bech32Address.js` is a ES20150-converted and minified version to skip the build process.

To see a sample of the input field, launch the `dist/demo.html` file.

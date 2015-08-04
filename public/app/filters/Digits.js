/**
 * Digits prefixes or suffixes strings with characters, typically "0" to a user defined length.
 * For instance a minute integer might be stored as a single digit, ex: 9, while it is
 * read 09, ex: 3:09PM.
 *
 * Example use
 * {{$value | digits:2:"0"}}
 * defines a min length for $value (that is: 2), and the character to use for padding (0)
 *
 * @module Services
 * @submodule digits
 * @class digits
 */
Application.filter('digits', function () {
	return function (input, length, pad) {
		input = input.toString();
		if (input.length >= length) { return input; }
		else {
			pad = (pad || 0).toString();
			return new Array(1 + length - input.length).join(pad) + input;
		}
	}
});
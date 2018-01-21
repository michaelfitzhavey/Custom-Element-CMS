/**
 * @license
 * Copyright (c) 2017 The expand.js authors. All rights reserved.
 * This code may only be used under the BSD style license found at https://expandjs.github.io/LICENSE.txt
 * The complete set of authors may be found at https://expandjs.github.io/AUTHORS.txt
 * The complete set of contributors may be found at https://expandjs.github.io/CONTRIBUTORS.txt
 */

const assertArgument = require('./assertArgument'),
    isString         = require('./isString'),
    isVoid           = require('./isVoid');

/**
 * Returns the value representation of a JSON `string`.
 *
 * ```js
 * XP.parseJSON('{"name": "Bear", "surname": "Grylls"}');
 * // => {name: 'Bear', surname: 'Grylls}
 *
 * XP.parseJSON('null');
 * // => null
 *
 * XP.parseJSON('');
 * // => undefined
 * ```
 *
 * @function parseJSON
 * @since 1.0.0
 * @category string
 * @description Returns the value representation of a JSON `string`
 * @source https://github.com/expandjs/expandjs/blog/master/lib/parseJSON.js
 *
 * @param {string} string The target string
 * @returns {*} Returns the parsed value
 */
module.exports = function parseJSON(string) {

    // Asserting
    assertArgument(isVoid(string) || isString(string), 1, 'string');

    // Returning
    try { return JSON.parse(string || ''); } catch (ignore) { }
};
/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */

'use strict'

function pow (m, n) {
    var result = m; 

  for (var i = 1; i < n; i++) {
    result *= m;
  }

  return result;
}


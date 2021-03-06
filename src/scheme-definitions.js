'use strict';
let schemePresets = {
  analogous: {
    count: 3,
    fn: 'analogous',
    options: {}
  },

  complementary: {
    count: 1,
    fn: 'complement',
    options: {}
  },

  splitComplementary: {
    count: 2,
    fn: 'complement',
    options: {}
  },

  triadic: {
    count: 3,
    fn: 'equidistant'
  },

  square: {
    count: 4,
    fn: 'equidistant'
  },

  rectangle: {
    count: 4,
    fn: 'rotate',
    options: {}
  },
};

module.exports = schemePresets;

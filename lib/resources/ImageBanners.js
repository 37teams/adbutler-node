'use strict'

var ResourceFactory = require('../ResourceFactory')

var ImageBanner = function(adbutler) {
  return ResourceFactory.makeResource.call(adbutler, '/ad-items/image')
}

// Custom Resource Methods
// ImageBanner.customMethod1 = function() {};
// ImageBanner.customMethod2 = function() {};

module.exports = ImageBanner

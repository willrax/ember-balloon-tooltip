'use strict';

const Funnel = require('broccoli-funnel');
const mergeTrees = require('broccoli-merge-trees');
const path = require('path');

module.exports = {
  name: 'ember-balloon-tooltip',

  included(app) {
    this._super.included.apply(this, arguments);

    app.import('vendor/balloon-css/balloon.min.css');
  },

  treeForVendor(vendorTree) {
    let trees = [];

    if (vendorTree) {
      trees.push(vendorTree);
    }

    let cssPath = path.join(this.project.root, 'node_modules', 'balloon-css');

    trees.push(new Funnel(cssPath, {
      destDir: 'balloon-css',
      files: ['balloon.min.css']
    }));

    return mergeTrees(trees);
  }
};

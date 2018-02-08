import Component from '@ember/component';
import layout from '../templates/components/balloon-tooltip';

export default Component.extend({
  tagName: 'button',
  classNames: ['ember-balloon-tooltip__element'],

  position: 'up',
  length: false,
  title: '',
  visible: true,

  attributeBindings: [
    'title:data-balloon',
    'position:data-balloon-pos',
    'visible:data-balloon-visible',
    'length:data-balloon-length'
  ],

  layout
});

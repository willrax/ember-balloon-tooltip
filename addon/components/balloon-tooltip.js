import Component from '@ember/component';
import { inject } from '@ember/service';
import layout from '../templates/components/balloon-tooltip';

export default Component.extend({
  tagName: 'button',
  classNames: ['ember-balloon-tooltip__element'],

  attributeBindings: [
    'title:data-balloon',
    'position:data-balloon-pos',
    'visible:data-balloon-visible',
    'length:data-balloon-length'
  ],

  eventBus: inject(),

  length: false,
  position: 'up',
  title: '',
  visible: null,

  didInsertElement() {
    this._super(...arguments);

    this.get('eventBus').on('documentTouched', ({ target }) => {
      if (this.element.contains(target)) {
        return;
      }

      if (this.get('visible')) {
        return;
      } else {
        this.set('visible', null);
      }
    });
  },

  willDestroyElement() {
    this.get('eventBus').off('bodyTouched');

    this._super(...arguments);
  },

  layout
});

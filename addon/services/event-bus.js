import Evented from '@ember/object/evented';
import Service from '@ember/service';

export default Service.extend(Evented, {
  init() {
    this._super(...arguments);
    this.setupListeners();
  },

  setupListeners() {
    document.addEventListener('touchstart', (event) => {
      this.trigger('documentTouched', event);
    });
  }
});

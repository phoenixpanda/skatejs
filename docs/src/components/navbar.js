import skate from '../../../../src/index';
import template from '../util/template';

export default skate('sk-navbar', {
  attached () {
    this._toggleClassOnScroll = () => this.scrolled = window.scrollY;
    document.addEventListener('scroll', this._toggleClassOnScroll);
  },
  detached () {
    document.removeEventListener('scroll', this._toggleClassOnScroll);
  },
  properties: {
    innerHTML: {},
    scrolled: {
      type: Boolean,
      set: function (oldValue, newValue) {
        skate.emit(this, 'skate.property', {
          bubbles: false,
          cancellable: false,
          detail: {
            name: 'scrolled',
            newValue: newValue,
            oldValue: oldValue
          }
        })
      }
    }
  },
  template: template(function () { return `
    <nav class="navbar navbar-default navbar-fixed-top ${this.scrolled ? 'scrolled' : ''}">
      <div class="container-fluid">
        ${this.innerHTML}
      </div>
    </nav>
  `;})
});

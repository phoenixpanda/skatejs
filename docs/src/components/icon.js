import 'bootstrap/fonts/glyphicons-halflings-regular.eot';
import 'bootstrap/fonts/glyphicons-halflings-regular.svg';
import 'bootstrap/fonts/glyphicons-halflings-regular.ttf';
import 'bootstrap/fonts/glyphicons-halflings-regular.woff';
import 'bootstrap/fonts/glyphicons-halflings-regular.woff2';
import 'bootstrap/less/bootstrap.less';
import 'font-awesome/fonts/fontawesome-webfont.eot';
import 'font-awesome/fonts/fontawesome-webfont.svg';
import 'font-awesome/fonts/fontawesome-webfont.ttf';
import 'font-awesome/fonts/fontawesome-webfont.woff';
import 'font-awesome/fonts/fontawesome-webfont.woff2';
import 'font-awesome/less/font-awesome.less';
import skate from '../../../../src/index';

export default skate('bs-icon', {
  properties: {
    from: {
      attr: true,
      init: 'fa'
    },
    prefix: {
      deps: 'from',
      get () {
        return this.from === 'bs' ? 'glyphicon' : this.from;
      }
    },
    type: {
      attr: true,
      deps: 'prefix',
      set (newValue) {
        this.className += ` ${this.prefix} ${this.prefix}-${newValue}`;
      }
    }
  }
});

import './router/route';
import page from 'page';
import skate from '../../../src/index';

export default skate('sk-router', {
  attached () {
    page({
      hashbang: true
    });
  },
  events: {
    route (e) {
      page(e.target.path, this.render.bind(this, e.target.page));
    }
  },
  properties: {
    view: {
      attr: true
    }
  },
  prototype: {
    render (page, context) {
      let view = this.view ? document.getElementById(this.view) : document.body;
      view.innerHTML = `<sk-page-${page}></sk-page-${page}>`;
    }
  }
});

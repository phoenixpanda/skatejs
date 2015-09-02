import skate from '../../../../src/index';

export default skate('sk-route', {
  properties: {
    path: {
      attr: true
    },
    page: {
      attr: true
    }
  },
  created () {
    skate.emit(this, 'route');
  }
});

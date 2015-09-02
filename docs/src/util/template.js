import diff from 'dom-diff';
import skate from '../../../src/index';

export default function (parse) {
  function render (elem) {
    diff.merge({
      destination: skate.fragment(parse.call(elem)),
      source: elem
    });
  }

  return function () {
    render(this);
    this.addEventListener('skate.property', render.bind(null, this));
  };
}

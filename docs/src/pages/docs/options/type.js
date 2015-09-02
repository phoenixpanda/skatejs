import skate from '../../../src/index';

export default skate('sk-page-docs-skate', {
  template () {
    this.innerHTML = `
      <sk-docs-layout>
        <h2><code>options.type</code></h2>
      </sk-docs-layout>
    `;
  }
});

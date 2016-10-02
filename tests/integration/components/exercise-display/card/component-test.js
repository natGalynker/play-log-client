import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('exercise-display/card', 'Integration | Component | exercise display/card', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{exercise-display/card}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#exercise-display/card}}
      template block text
    {{/exercise-display/card}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

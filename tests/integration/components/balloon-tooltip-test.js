import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('balloon-tooltip', 'Integration | Component | balloon-tooltip', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`
    {{#balloon-tooltip title="hello world"}}
      Hello
    {{/balloon-tooltip}}
  `);

  assert.equal(this.$().text().trim(), 'Hello');
});

test('allows for setting visible to always show the tooltip', function(assert) {
  this.render(hbs`
    {{#balloon-tooltip title="hello world" visible=true}}
      Hello
    {{/balloon-tooltip}}
  `);


  assert.equal(this.$('.ember-balloon-tooltip__element').data().balloonVisible, '');
});

test('the title matches to the correct data-tag', function(assert) {
  this.render(hbs`
    {{#balloon-tooltip title="hello world"}}
      Hello
    {{/balloon-tooltip}}
  `);

  assert.equal(this.$('.ember-balloon-tooltip__element').data().balloon, 'hello world');
});

test('the position matches to the correct data-tag', function(assert) {
  this.render(hbs`
    {{#balloon-tooltip title="hello world" position="down"}}
      Hello
    {{/balloon-tooltip}}
  `);

  assert.equal(this.$('.ember-balloon-tooltip__element').data().balloonPos, 'down');
});

test('the length matches to the correct data-tag', function(assert) {
  this.render(hbs`
    {{#balloon-tooltip title="hello world" length="medium"}}
      Hello
    {{/balloon-tooltip}}
  `);

  assert.equal(this.$('.ember-balloon-tooltip__element').data().balloonLength, 'medium');
});

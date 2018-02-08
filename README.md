# Ember Balloon Tooltip

An Ember addon that uses [balloon.css](http://kazzkiq.github.io/balloon.css/) to enable css driven tooltips within your application.

## Usage

Use the balloon-tooltip component to create a new DOM element with a tooltip.

```hbs
{{#balloon-tooltip title="Hello, World!!" tagName="button"}}
  Button
{{/balloon-tooltip}}
```

By default, the tooltip will appear when you hover over the element.

### Programatic Control

You can programatically control the tooltip by using the `visible` attribute.

```hbs
{{#balloon-tooltip title="Hello, World!!" visible=true tagName="button" as |tooltip|}}
  Click Me!
{{/balloon-tooltip}}
```

The example above will ensure that the tooltip is _always_ shown.

### Positioning

The options are `up`, `down`, `left`, `right`.

```hbs
{{#balloon-tooltip title="Hello, World!!" tagName="button" position="down" as |tooltip|}}
  Click Me!
{{/balloon-tooltip}}
```

### Length

You can opt to control the length of the tooltip for varying text sizes. The default is for the tooltip to remain on one line.


The options are `small`, `medium`, `large`, `fit`.

```hbs
{{#balloon-tooltip title="Hello, World!!" tagName="button" length="fit" as |tooltip|}}
  Click Me!
{{/balloon-tooltip}}
```

## Installation

* `ember install ember-balloon-tooltip`

## Running Tests

* `yarn test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

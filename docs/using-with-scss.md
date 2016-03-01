# Using Relayout with [SCSS](http://sass-lang.com)

Relayout has also its implementation written in SCSS, so you can customise pieces of it.

## Customisation

Here's the list of what you can customise on Relayout. Just remember that you must first override Relayout's settings and then import the style:

```scss
/**
 * This is a mobile-first approach and we have three breakpoints:
 * - medium, large and extra-large
 * You should change only the value of the breakpoint, but not its key.
 */
$relayout-breakpoints: (
  sm: 0rem,
  md: 40.0625rem,
  lg: 60.0625rem,
  xl: 75rem
);

/**
 * You can specify different gutters for the different breakpoints
 * Note that those keys are the same as the breakpoints.
 */
$relayout-gutter: (
  sm: 0.75rem,
  md: 1.5rem,
  lg: 1.5rem,
  xl: 1.5rem
);

/**
 * As default, the wrapper will fix it's max-width on each breakpoint.
 * You can change to a more fluid behaviour by changing the "sm", "md"
 * and "lg" keys to "none" and keep only the "xl" with a value.
 */
$relayout-wrapper: (
  sm: 0rem,
  md: 40rem,
  lg: 60rem,
  xl: 75rem
);


@import "./node_modules/relayout/style/sass";

```


## Extra

The SCSS also includes a breakpoint mixin that may be useful for you to keep the rest of your website consistent with the breakpoints:

```scss
.article {
  color: yellow;

  @include relayout-break(md) {
    color: red;
  }

  @include relayout-break(lg) {
    color: blue;
  }

  @include relayout-break(xl) {
    color: green;
  }
}
```

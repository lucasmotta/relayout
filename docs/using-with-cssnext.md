# Using Relayout with [cssnext](http://cssnext.io)

Relayout was first written using cssnext, so you can customise pieces of it.

## Customisation

Here's the list of what you can customise on Relayout.  
Just remember that you must first override Relayout's settings and then import the other styles:

```scss
:root {
  /**
   * You can specify different gutters for the different breakpoints
   */
  --relayout-gutter-sm: 0.75rem;
  --relayout-gutter-md: 1.5rem;
  --relayout-gutter-lg: 1.5rem;
  --relayout-gutter-xl: 1.5rem;

  /**
   * As default, the wrapper will fix it's max-width on each breakpoint.
   * You can change to a more fluid behaviour by changing the "sm", "md"
   * and "lg" keys to "none" and keep only the "xl" with a value.
   */
  --relayout-wrapper-md: 40rem;
  --relayout-wrapper-lg: 60rem;
  --relayout-wrapper-xl: 75rem;

  /**
   * Number of columns
   */
  --relayout-columns: 12;
}

/**
 * This is a mobile-first approach and we have three breakpoints:
 * - md, lg and xl
 * You should change only the value of the breakpoint, but not its name.
 */
@custom-media --relayout-breakpoint-md (min-width: 40.0625rem);
@custom-media --relayout-breakpoint-lg (min-width: 60.0625rem);
@custom-media --relayout-breakpoint-xl (min-width: 75rem);


@import "relayout/style/css/relayout.css";
@import "relayout/style/css/relayout-item.css";
@import "relayout/style/css/relayout-wrapper.css";

```


## Extra

You can take advantage that we already have a set of custom media queries, so you can reuse it across your website for the sake of consistency:

```scss
.article {
  color: yellow;

  @media (--relayout-breakpoint-md) {
    color: red;
  }

  @media (--relayout-breakpoint-lg) {
    color: blue;
  }

  @media (--relayout-breakpoint-xl) {
    color: green;
  }
}
```

# Components

- [Relayout](#relayout)
- [RelayoutItem](#relayoutitem)
- [RelayoutWrapper](#relayoutwrapper)

---

### `<Relayout>`
This is a simple flexbox implementation with a few props modifiers.

#### Props

- `gutter`: Add gutter between your items - default to `true`
- `align`: The horizontal alignment - as default it will be `left` aligned
  - *values:* `left`, `center`, `right`
- `valign`: The vertical alignment - as default it will be `stretch`
  - *values:* `top`, `middle`, `bottom`, `stretch`
- `className`: Custom class name

#### Example
```jsx
<Relayout align="left" valign="bottom" gutter={false}>
  ...
</Relayout>
```

---

### `<RelayoutItem>`
This is when things starts to get a bit more interesting.
You can set a custom number of columns for any breakpoint you need.

You have a total number of 12 columns (where `12 == 100%` and `1 == 8.33%`).
Since we don't have a concept of row, you can add as many `<RelayoutItem>`'s as you want.

### Props

The value for all the props bellow is a number ranging between `1` and `12`.

- `sm`: Small and up (every screen size)
- `md`: Medium and up
- `lg`: Large and up
- `xl`: Extra large
- `relative`: If you want your item to have a position relative - important if you have children with absolute position
- `className`: Custom class name

#### Example

```jsx
<RelayoutItem sm="12" lg="4">
  <p>12 columns on mobile and medium</p>
  <p>4 columns on large and extra-large</p>
</RelayoutItem>

<RelayoutItem sm="4" md="0" lg="8" xl="12">
  <p>4 columns on mobile</p>
  <p>hidden on medium screens only</p>
  <p>8 columns on large</p>
  <p>12 columns on extra-large</p>
</RelayoutItem>
```

---

### `<RelayoutWrapper>`
The wrapper will set a container with a `max-width` on different breakpoints - it also includes some left/right padding.
It should **never** be used inside other wrappers (elements with max-width) or `<RelayoutItem>`'s - it's mainly used as a "root" element.

#### Props

By default, the wrapper will set a `max-width` from the small screens and up, so in every breakpoint you will have a max-width and padding.
But you can change this behaviour and wrap only from a specific breakpoint and up by using the `from` prop, which defaults to `sm`.

- `from`: Include a max-width and padding from this specific breakpoint up.
  - *values:* `sm`, `md`, `lg`, `xl`
- `className`: Custom class name

#### Example
```jsx
<RelayoutWrapper>
  <p>I have max-width and padding on all breakpoints!</p>
</RelayoutWrapper>

<RelayoutWrapper from="lg">
  <p>I have max-width only from the "large" breakpoint and up!</p>
  <p>On small and medium screens I'm 100% width and without padding.</p>
</RelayoutWrapper>
```

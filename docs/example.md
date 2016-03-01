## Real Life Examples

### Header, sidebar, content, footer

```
small     medium          large and extra-large
█████     █████████       █████████████
█████     ██ ██████       ████ ████████
█████     █████████       █████████████
█████
```

```jsx
<LayoutWrapper>
  <Layout>
    <!-- Header -->
    <LayoutItem small="12">
      <h1>I am the header</h1>
    </LayoutItem>

    <!-- Sidebar -->
    <LayoutItem small="12" medium="3" large="4">
      <h1>I am the sidebar</h1>
    </LayoutItem>

    <!-- Content -->
    <LayoutItem small="12" medium="9" large="8">
      <h1>I am the content</h1>
    </LayoutItem>

    <!-- Footer -->
    <LayoutItem small="12">
      <h1>I am the footer</h1>
    </LayoutItem>
  </Layout>
</LayoutWrapper>
```

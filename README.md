[![Build Status](https://travis-ci.org/lucasmotta/relayout.svg?branch=master)](https://travis-ci.org/lucasmotta/relayout)

# Relayout
> A simple flex grid system based on columns for [React](https://facebook.github.io/react)

Because no one should be writing a single line of `flex` or `width` anymore.


## Installation

```sh
npm install relayout --save
```

## Usage

Relayout consists of three Components:
- [Relayout](docs/components.md#relayout)
- [RelayoutItem](docs/components.md#relayoutitem)
- [RelayoutWrapper](docs/components.md#relayoutwrapper)

### JavaScript
```jsx
import React, { Component } from 'react';
import { Relayout, RelayoutItem, RelayoutWrapper } from 'relayout';

export default class App extends Component {
  render() {
    return (
      <RelayoutWrapper>
        <Relayout>
          <RelayoutItem sm="12" md="8" lg="4">
            <h1>Hello World</h1>
          </RelayoutItem>
        </Relayout>
      </RelayoutWrapper>
    );
  }
}
```

### CSS
You can import directly on your CSS if you are using [postcss-import](https://github.com/postcss/postcss-import).
```scss
@import "relayout";
```

#### Using with [cssnext](docs/using-with-cssnext.md) or [SCSS](docs/using-with-scss.md)
Alternatively you can use either [cssnext](docs/using-with-cssnext.md) or [SCSS](docs/using-with-scss.md) and allows you to customise breakpoints, gutters and other bits of Relayout.

## API and Example
You can have either have a look at the [Components API](docs/components.md) and also see a [simple example](docs/example.md) on how to use Relayout.  

## Test
```
npm test
```

## License
MIT

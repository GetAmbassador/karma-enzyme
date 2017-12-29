karma-enzyme
==========

[Enzyme 3](http://airbnb.io/enzyme/) for [Karma](http://karma-runner.github.io)

Intro
-----

There is a npm package for each available enzyme-react adapter:

| karma-enzyme package | Enzyme Adapter Package | React semver compatibility |
| --- | --- | --- |
| `karma-enzyme-react-16` | `enzyme-adapter-react-16` | `^16.0.0` |
| `karma-enzyme-react-15` | `enzyme-adapter-react-15` | `^15.5.0` |
| `karma-enzyme-react-15.4` | `enzyme-adapter-react-15.4` | `15.0.0-0 - 15.4.x` |
| `karma-enzyme-react-14` | `enzyme-adapter-react-14` | `^0.14.0` |
| `karma-enzyme-react-13` | `enzyme-adapter-react-13` | `^0.13.0` |

Installation
------------

Install the plugin from npm:

```sh
$ npm install karma-enzyme-react-* --save-dev
```

Or from Github:

Add `enzyme-react-*` to the `frameworks` key and `karma-enzyme-react-*` to the `plugins` key in your Karma configuration:

```javascript
frameworks = ['enzyme-react-*'];
plugins = ['karma-enzyme-react-*'];
```


Usage
-----

Enzyme will be configured using the appropriate adapter and each of the different Enzyme methods are available in the tests:

```javascript
import React from 'react'
import MyComponent from 'path/to/MyComponent'

describe('MyComponent', () => {
  it('renders', () => {
    shallow(<MyComponent />)
    mount(<MyComponent />)
    render(<MyComponent />)
  })
})
```

The entire enzyme api is also available as `Enzyme`:

```javascript
import React from 'react'
import MyComponent from 'path/to/MyComponent'

describe('MyComponent', () => {
  it('renders', () => {
    Enzyme.shallow(<MyComponent />)
    Enzyme.mount(<MyComponent />)
    Enzyme.render(<MyComponent />)
  })
})
```

License
-------

The MIT License (MIT)

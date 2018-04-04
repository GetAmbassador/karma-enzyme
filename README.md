karma-enzyme
==========

[Enzyme 3](http://airbnb.io/enzyme/) for [Karma](http://karma-runner.github.io)

Intro
-----
Karma-Enzyme provides simple configuration and usage of Enzyme 3 with the Karma test suite.

Automatically include pre configured enzyme methods in karma test suite. This may help if you are having trouble configuring Enzyme 3 in all scenarios. This package requires that your karma test suite is being run in webpack.

There is a npm package for each available enzyme-react adapter:

| karma-enzyme package | Enzyme Adapter Package | React semver compatibility |
| --- | --- | --- |
| `karma-enzyme-react-16` | `enzyme-adapter-react-16` | `^16.0.0` |
| `karma-enzyme-react-15` | `enzyme-adapter-react-15` | `^15.5.0` |
| `karma-enzyme-react-15.4` | `enzyme-adapter-react-15.4` | `15.0.0-0 - 15.4.x` |
| `karma-enzyme-react-14` | `enzyme-adapter-react-14` | `^0.14.0` |
| `karma-enzyme-react-13` | `enzyme-adapter-react-13` | `^0.13.0` |

All the instructions in this readme will use `karma-enzyme-react-16` as an example, use the correct package for your desired configuration.

Installation
------------

Install the plugin from npm:

```sh
$ npm install karma-enzyme-react-16 --save-dev
```

Add `enzyme-react-16` to the `frameworks` key and `karma-enzyme-react-16` to the `plugins` key in your Karma configuration:

```javascript
frameworks = ['enzyme-react-16'];
plugins = ['karma-enzyme-react-16'];
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

# babel-plugin-test001



## Example

**In**

```js
// input code
```

**Out**

```js
"use strict";

// output code
```

## Installation

```sh
$ npm install babel-plugin-test001
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["test001"]
}
```

### Via CLI

```sh
$ babel --plugins test001 script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["test001"]
});
```

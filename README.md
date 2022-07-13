# tonic demonstration

A cool things about this is there is *no build process*.

If you look at `package.json`, the build script is just copying files into a directory that gets served.

```js
  "scripts": {
    "build": "cp src/index.html src/greeting.js node_modules/@socketsupply/tonic/dist/tonic.min.esm.js public",
  }
```

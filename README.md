# tonic demonstration

A cool things about this is there is *no build process*.

If you look at `package.json`, the build script is just copying files into a directory that gets served.

```js
  "scripts": {
    "build": "cp src/index.html src/greeting.js node_modules/@socketsupply/tonic/dist/tonic.min.esm.js public",
  }
```

Then in the HTML file, we are just linking to our app file:

```html
    <script type="module" src="/greeting.js"></script>
```

So this means that links work the way you would expect inside a static directory.

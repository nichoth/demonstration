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

## structure

[island architecture](https://www.patterns.dev/posts/islands-architecture/)

> The islands architecture encourages small, focused chunks of interactivity within server-rendered web pages

This would fit well because the markup in the app is once again in HTML. And any interactivity would be contained in a custom HTML element.



## file sizes

```
-rw-r--r--   1 nick  staff   530B Jul 13 08:26 greeting.js
-rw-r--r--   1 nick  staff   366B Jul 13 08:26 index.html
-rw-r--r--   1 nick  staff   7.2K Jul 13 08:26 tonic.min.esm.js
```

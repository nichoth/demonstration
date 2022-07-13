# tonic demonstration

[a link to a website with this as content](https://nichoth.github.io/demonstration/)

A cool thing about this is there is *no build process*.

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

The link to `/tonic.min.esm.js` [within our JS file](https://github.com/nichoth/demonstration/blob/95c51529e46abd96b26a17f833d855f163182db0/src/greeting.js#L2) is resolved by esm/the browser.

## structure

[island architecture](https://www.patterns.dev/posts/islands-architecture/)

> The islands architecture encourages small, focused chunks of interactivity within server-rendered web pages

This would fit well because the markup in the app is once again in HTML. And any interactivity would be contained in a custom HTML element.

----------------

If you look at traditional naïve JS client-side-rendered apps, the application, including all routes, is contained in a single JS file that gets bundled prior to serving.

If you wanted to re-create that, it would mean creating a single tonic component, called `app` or something, that contains all the logic for handling routes and rendering everything.


## file sizes

```
-rw-r--r--   1 nick  staff   530B Jul 13 08:26 greeting.js
-rw-r--r--   1 nick  staff   366B Jul 13 08:26 index.html
-rw-r--r--   1 nick  staff   7.2K Jul 13 08:26 tonic.min.esm.js
```

-------------------------

## links

* [css-tricks](https://css-tricks.com/tonic-component-framework/)
* [tonicframework.dev](https://tonicframework.dev/)
* [socketsupply/components](https://github.com/socketsupply/components)

# import map demonstration

This shows the [tonic framework](https://www.npmjs.com/package/@socketsupply/tonic) being used with import maps in HTML.

This way we are able to use the standard import in JS
```js
import Tonic from '@socketsupply/tonic'
```
And the browser will know how to resolve that to a file because of the import map.
```html
<script type="importmap">
    {
      "imports": {
        "@socketsupply/tonic": "./tonic.min.js"
      }
    }
</script>
```

* [read more about imort maps](https://www.honeybadger.io/blog/import-maps/)
* [see this demo live](https://nichoth.github.io/demonstration/)

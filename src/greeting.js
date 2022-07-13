// import Tonic from '@socketsupply/tonic'
import Tonic from '/tonic.min.esm.js'

class MyGreeting extends Tonic {
    render () {
        return this.html`<div>Hello, World.</div>`
    }
}

Tonic.add(MyGreeting)

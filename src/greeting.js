import Tonic from '@socketsupply/tonic'

class MyGreeting extends Tonic {
    render () {
        return this.html`<div>Hello, World.</div>`
    }
}

Tonic.add(MyGreeting)

// import Tonic from '@socketsupply/tonic'
import Tonic from './tonic.min.esm.js'

class MyGreeting extends Tonic {
    constructor () {
        super()
        this.state.counter = 0
    }

    // method name corresponds to the DOM event name
    click (ev) {
        ev.preventDefault()
        this.state.counter++
        this.reRender()
    }

    render () {
        return this.html`
            <div>Hello, World.</div>
            <button>${this.state.counter.toString()}</button>
        `
    }
}

Tonic.add(MyGreeting)

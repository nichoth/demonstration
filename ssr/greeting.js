// @ts-check

// import Tonic from './tonic.min.esm.js'
const Tonic = require('tonic-ssr');

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
            <div id="foo">Hello, World.</div>
            <button>${this.state.counter.toString()}</button>
        `
    }
}

Tonic.add(MyGreeting)

async function main () {
    const greeting = new MyGreeting()
    const html = await greeting.preRender();
    console.log('html', html)
}

main()

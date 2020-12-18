import { createElement } from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import ReactHelloWorld from '../components/HelloWorld'

class HelloWorld extends HTMLElement {
    connectedCallback() {
        const props = Object.values(this.attributes).map((attribute) => [
            attribute.name,
            attribute.value,
        ])

        render(createElement(ReactHelloWorld, Object.fromEntries(props)), this)
    }

    disconnectedCallback() {
        unmountComponentAtNode(ReactHelloWorld)
    }
}

customElements.define('hello-world', HelloWorld)

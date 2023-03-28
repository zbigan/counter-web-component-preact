import { Component, h } from 'preact';
import register from 'preact-custom-element';
class Counter extends Component {
    constructor() {
        super();
        this.state = { count: 0 };
    }
    render() {
        return (h("div", null,
            h("h1", null, "Counter React"),
            h("div", { className: "card" },
                h("button", { onClick: () => this.setState(prevState => ({ count: prevState.count + 1 })) }, "+"),
                h("button", { onClick: () => this.setState(prevState => ({ count: prevState.count - 1 })) }, "-"),
                h("div", null,
                    h("h2", null, this.state.count)))));
    }
}
register(Counter, 'preact-counter');
export default Counter;

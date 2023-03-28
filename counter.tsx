import { Component, h } from 'preact';
import register from 'preact-custom-element';


class Counter extends Component<{}, {count: number}> {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  render() {
    return (
      <div>
        <h1>Counter React</h1>
        <div className="card">
        <button onClick={() => this.setState(prevState => ({count: prevState.count + 1}))}>
            +
          </button>
          <button onClick={() => this.setState(prevState => ({count: prevState.count - 1}))}>
            -
          </button>
          <div>
            <h2>{this.state.count}</h2>
          </div>
        </div>
      </div>
    )
  } 
}

register(Counter, 'preact-counter');

type CustomEvents<K extends string> = { [key in K] : (event: CustomEvent) => void };

type CustomElement<T, K extends string = ''> = Partial<T & { children: any } & CustomEvents<`on${K}`>>;

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['preact-counter']: CustomElement<Counter>;
    }
  }
}

export default Counter

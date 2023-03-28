import { Component, h } from 'preact';
declare class Counter extends Component<{}, {
    count: number;
}> {
    constructor();
    render(): h.JSX.Element;
}
type CustomEvents<K extends string> = {
    [key in K]: (event: CustomEvent) => void;
};
type CustomElement<T, K extends string = ''> = Partial<T & {
    children: any;
} & CustomEvents<`on${K}`>>;
declare global {
    namespace JSX {
        interface IntrinsicElements {
            ['preact-counter']: CustomElement<Counter>;
        }
    }
}
export default Counter;

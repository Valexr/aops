declare module '*.svg' {
    const content: any;
    export default content;
}

declare namespace svelteHTML {
    interface IntrinsicElements {
        'my-custom-element': { someattribute: string; 'on:event': (e: CustomEvent<any>) => void };
    }
    interface HTMLAttributes<T> {
        'on:longpress'?: (event: any) => any;
        'on:scroll'?: (event: any) => any;
        indeterminate?: boolean | string
        contentRect?: DOMRectReadOnly
        mycustomattribute?: any;
    }
}

declare namespace HTMLElement {
    interface HTMLAttributes<T> {
        contentRect?: DOMRectReadOnly
    }
}
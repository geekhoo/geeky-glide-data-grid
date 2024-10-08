import React from "react";
/** @category Renderers */
export interface MarkdownDivProps {
    contents: string;
    createNode?: (content: string) => DocumentFragment;
}
/** @category Renderers */
export default class MarkdownDiv<TProps extends MarkdownDivProps, TState> extends React.PureComponent<TProps, TState> {
    private targetElement;
    private renderMarkdownIntoDiv;
    private containerRefHook;
    render(): import("react/jsx-runtime").JSX.Element;
}

import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { styled } from "@linaria/react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const BuilderWrapper = styled.div `
    display: flex;
    height: 100vh;
    width: 100vw;
    position: relative;

    & > .content {
        display: block;

        width: ${p => p.width}px;
        height: ${p => p.height}px;
        align-self: center;

        position: relative;

        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

        user-select: none;

        box-sizing: border-box;

        *,
        *::before,
        *::after {
            box-sizing: inherit;
        }
    }
`;
const SimpleWrapper = styled.div `
    box-sizing: border-box;

    *,
    *::before,
    *::after {
        box-sizing: inherit;
    }
`;
export class BuilderThemeWrapper extends React.PureComponent {
    render() {
        const { context, children, ...rest } = this.props;
        return (_jsxs(_Fragment, { children: [_jsx(BuilderWrapper, { ...rest, children: _jsx("div", { className: "content", children: children }) }), _jsx("div", { id: "portal" })] }));
    }
}
export const SimpleThemeWrapper = p => {
    return (_jsx(SimpleWrapper, { children: _jsx("div", { className: "content", children: p.children }) }));
};

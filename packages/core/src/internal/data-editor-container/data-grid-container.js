import { jsx as _jsx } from "react/jsx-runtime";
import { styled } from "@linaria/react";
import * as React from "react";
function toCss(x) {
    if (typeof x === "string")
        return x;
    return `${x}px`;
}
const Wrapper = styled.div `
    position: relative;

    min-width: 10px;
    min-height: 10px;
    max-width: 100%;
    max-height: 100%;

    width: ${p => p.innerWidth};
    height: ${p => p.innerHeight};

    overflow: hidden;
    overflow: clip;

    direction: ltr;

    > :first-child {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
    }
`;
export const DataEditorContainer = p => {
    const { inWidth, inHeight, children, ...rest } = p;
    return (_jsx(Wrapper, { innerHeight: toCss(inHeight), innerWidth: toCss(inWidth), ...rest, children: children }));
};

import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { styled } from "@linaria/react";
const DrilldownOverlayEditorStyle = styled.div `
    display: flex;
    flex-wrap: wrap;

    .doe-bubble {
        display: flex;
        justify-content: center;
        align-items: center;

        padding: 0 8px;
        height: 24px;

        background-color: var(--gdg-bg-cell);
        color: var(--gdg-text-dark);
        margin: 2px;

        border-radius: var(--gdg-rounding-radius, 6px);

        box-shadow:
            0 0 1px rgba(62, 65, 86, 0.4),
            0 1px 3px rgba(62, 65, 86, 0.4);

        img {
            height: 16px;
            object-fit: contain;

            margin-right: 4px;
        }
    }

    textarea {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 0px;
        height: 0px;

        opacity: 0;
    }
`;
const DrilldownOverlayEditor = p => {
    const { drilldowns } = p;
    return (_jsx(DrilldownOverlayEditorStyle, { children: drilldowns.map((d, i) => (_jsxs("div", { className: "doe-bubble", children: [d.img !== undefined && _jsx("img", { src: d.img }), _jsx("div", { children: d.text })] }, i))) }));
};
export default DrilldownOverlayEditor;

import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { BubblesOverlayEditorStyle } from "./bubbles-overlay-editor-style.js";
const BubblesOverlayEditor = p => {
    const { bubbles } = p;
    return (_jsxs(BubblesOverlayEditorStyle, { children: [bubbles.map((b, i) => (_jsx("div", { className: "boe-bubble", children: b }, i))), _jsx("textarea", { className: "gdg-input", autoFocus: true })] }));
};
export default BubblesOverlayEditor;

import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import * as React from "react";
import MarkdownDiv from "../../markdown-div/markdown-div.js";
import { GrowingEntry } from "../../growing-entry/growing-entry.js";
import { MarkdownOverlayEditorStyle } from "./markdown-overlay-editor-style.js";
import { EditPencil, Checkmark } from "../../../common/utils.js";
export const MarkdownOverlayEditor = p => {
    const { value, onChange, forceEditMode, createNode, targetRect, onFinish, validatedSelection } = p;
    const markdown = value.data;
    const readonly = value.readonly === true;
    const [editMode, setEditMode] = React.useState(markdown === "" || forceEditMode);
    const onEditClick = React.useCallback(() => {
        setEditMode(e => !e);
    }, []);
    const addLeftPad = markdown ? "gdg-ml-6" : "";
    if (editMode) {
        return (_jsxs(MarkdownOverlayEditorStyle, { targetWidth: targetRect.width - 20, children: [_jsx(GrowingEntry, { autoFocus: true, highlight: false, validatedSelection: validatedSelection, value: markdown, onKeyDown: e => {
                        if (e.key === "Enter")
                            e.stopPropagation();
                    }, onChange: onChange }), _jsx("div", { className: `gdg-edit-icon gdg-checkmark-hover ${addLeftPad}`, onClick: () => onFinish(value), children: _jsx(Checkmark, {}) })] }));
    }
    return (_jsxs(MarkdownOverlayEditorStyle, { targetWidth: targetRect.width, children: [_jsx(MarkdownDiv, { contents: markdown, createNode: createNode }), !readonly && (_jsxs(_Fragment, { children: [_jsx("div", { className: "spacer" }), _jsx("div", { className: `gdg-edit-icon gdg-edit-hover ${addLeftPad}`, onClick: onEditClick, children: _jsx(EditPencil, {}) })] })), _jsx("textarea", { className: "gdg-md-edit-textarea gdg-input", autoFocus: true })] }));
};

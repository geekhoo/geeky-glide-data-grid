import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { EditPencil } from "../../../common/utils.js";
import * as React from "react";
import { GrowingEntry } from "../../growing-entry/growing-entry.js";
import { UriOverlayEditorStyle } from "./uri-overlay-editor-style.js";
const UriOverlayEditor = p => {
    const { uri, onChange, forceEditMode, readonly, validatedSelection, preview } = p;
    const [editMode, setEditMode] = React.useState(!readonly && (uri === "" || forceEditMode));
    const onEditClick = React.useCallback(() => {
        setEditMode(true);
    }, []);
    if (editMode) {
        return (_jsx(GrowingEntry, { validatedSelection: validatedSelection, highlight: true, autoFocus: true, value: uri, onChange: onChange }));
    }
    return (_jsxs(UriOverlayEditorStyle, { children: [_jsx("a", { className: "gdg-link-area", href: uri, target: "_blank", rel: "noopener noreferrer", children: preview }), !readonly && (_jsx("div", { className: "gdg-edit-icon", onClick: onEditClick, children: _jsx(EditPencil, {}) })), _jsx("textarea", { className: "gdg-input", autoFocus: true })] }));
};
export default UriOverlayEditor;

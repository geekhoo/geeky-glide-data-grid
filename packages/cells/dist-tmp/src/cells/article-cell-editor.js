import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { Editor, Viewer } from "@toast-ui/react-editor";
import { styled } from "@linaria/react";
const Wrapper = styled.div `
    .gdg-footer {
        display: flex;
        justify-content: flex-end;
        padding: 20px;

        button {
            border: none;
            padding: 8px 16px;
            font-size: 14px;
            font-weight: 500;
            font-family: var(--gdg-font-family);
            cursor: pointer;
            border-radius: var(--gdg-rounding-radius, 9px);
        }
    }
    .gdg-save-button {
        background-color: var(--gdg-accent-color);
        color: var(--gdg-accent-fg);
    }

    .gdg-close-button {
        background-color: var(--gdg-bg-header);
        color: var(--gdg-text-medium);
        margin-right: 8px;
    }
`;
const ArticleCellEditor = p => {
    const [tempValue, setTempValue] = React.useState(p.value.data.markdown);
    const onKeyDown = React.useCallback((e) => {
        e.stopPropagation();
    }, []);
    const onSave = React.useCallback(() => {
        p.onFinishedEditing({
            ...p.value,
            data: {
                ...p.value.data,
                markdown: tempValue,
            },
        });
    }, [p, tempValue]);
    const onClose = React.useCallback(() => {
        p.onFinishedEditing(undefined);
    }, [p]);
    if (p.value.readonly) {
        return (_jsx(Wrapper, { id: "gdg-markdown-readonly", onKeyDown: onKeyDown, style: { height: "75vh", padding: "35px" }, children: _jsx(Viewer, { initialValue: p.value.data.markdown, usageStatistics: false }) }));
    }
    return (_jsxs(Wrapper, { id: "gdg-markdown-wysiwyg", onKeyDown: onKeyDown, children: [_jsx(Editor, { initialEditType: "wysiwyg", autofocus: true, initialValue: p.value.data.markdown, hideModeSwitch: true, onChange: setTempValue, height: "75vh", usageStatistics: false, toolbarItems: [
                    ["heading", "bold", "italic", "strike"],
                    ["hr", "quote"],
                    ["ul", "ol", "task", "indent", "outdent"],
                    ["table", "link"],
                    ["code", "codeblock"],
                ] }), _jsxs("div", { className: "gdg-footer", children: [_jsx("button", { className: "gdg-close-button", onClick: onClose, children: "Close" }), _jsx("button", { className: "gdg-save-button", onClick: onSave, children: "Save" })] })] }));
};
export default ArticleCellEditor;

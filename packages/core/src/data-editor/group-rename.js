import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { styled } from "@linaria/react";
import { css } from "@linaria/core";
import ClickOutsideContainer from "../internal/click-outside-container/click-outside-container.js";
const RenameInput = styled.input `
    flex-grow: 1;
    border: none;
    outline: none;
    background-color: var(--gdg-bg-header-has-focus);
    border-radius: 9px;
    padding: 0 8px;
    box-shadow: 0 0 0 1px var(--gdg-border-color);
    color: var(--gdg-text-group-header);
    min-height: ${p => Math.max(16, p.targetHeight - 10)}px;
    font: var(--gdg-header-font-style) var(--gdg-font-family);
`;
export const GroupRename = p => {
    const { bounds, group, onClose, canvasBounds, onFinish } = p;
    const [value, setValue] = React.useState(group);
    return (_jsx(ClickOutsideContainer, { style: {
            position: "absolute",
            left: bounds.x - canvasBounds.left + 1,
            top: bounds.y - canvasBounds.top,
            width: bounds.width - 2,
            height: bounds.height,
        }, className: css `
                padding: 0 8px;
                display: flex;
                align-items: center;
                background-color: var(--gdg-bg-header);
            `, onClickOutside: onClose, children: _jsx(RenameInput, { targetHeight: bounds.height, "data-testid": "group-rename-input", value: value, onBlur: onClose, onFocus: e => e.target.setSelectionRange(0, value.length), onChange: e => setValue(e.target.value), onKeyDown: e => {
                if (e.key === "Enter") {
                    onFinish(value);
                }
                else if (e.key === "Escape") {
                    onClose();
                }
            }, autoFocus: true }) }));
};

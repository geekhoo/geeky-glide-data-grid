import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from "react";
import { DataEditorAll as DataEditor } from "../../data-editor-all.js";
import { BeautifulWrapper, Description, useMockDataGenerator, defaultProps } from "../../data-editor/stories/utils.js";
import { SimpleThemeWrapper } from "../../stories/story-utils.js";
import { keybindingDefaults } from "../../data-editor/data-editor-keybindings.js";
export default {
    title: "Glide-Data-Grid/DataEditor Demos",
    decorators: [
        (Story) => (_jsx(SimpleThemeWrapper, { children: _jsx(Story, {}) })),
    ],
};
export const CustomKeybindings = () => {
    const { getCellContent, cols, setCellValue } = useMockDataGenerator(30, false);
    const keybindingStyle = {
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gridColumnGap: "32px",
        gridRowGap: "10px",
        marginBottom: "10px",
        marginTop: "20px",
        font: "13px sans-serif",
    };
    const controlGroupStyle = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    };
    const { copy, cut, paste, pageDown, pageUp, first, last, ...rest } = keybindingDefaults;
    const [keybindings, setKeybindings] = useState(rest);
    const handleKeybindingChange = (key, value) => {
        setKeybindings(prev => ({ ...prev, [key]: value }));
    };
    return (_jsx(BeautifulWrapper, { title: "Custom Keybindings", description: _jsxs(Description, { children: ["This demo showcases custom keybindings. Modify the keybindings using the controls below.", _jsx("div", { style: keybindingStyle, children: Object.keys(rest).map(key => (_jsxs("div", { style: controlGroupStyle, children: [_jsxs("label", { children: [key, ": "] }), _jsxs("div", { children: [_jsx("input", { type: "checkbox", checked: keybindings[key] === true, onChange: e => handleKeybindingChange(key, e.target.checked ? true : false) }), _jsx("input", { type: "text", style: { width: "100px" }, value: keybindings[key] || "", onChange: e => handleKeybindingChange(key, e.target.value) })] })] }, key))) })] }), children: _jsx(DataEditor, { ...defaultProps, getCellContent: getCellContent, onCellEdited: setCellValue, keybindings: keybindings, columns: cols, rangeSelect: "multi-rect", rows: 100, rowMarkers: "both" }) }));
};

import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { DataEditorAll as DataEditor } from "../../data-editor-all.js";
import {} from "../../data-editor/data-editor.js";
import { BeautifulWrapper, Description, PropName, useMockDataGenerator, defaultProps, } from "../../data-editor/stories/utils.js";
import { SimpleThemeWrapper } from "../../stories/story-utils.js";
export default {
    title: "Glide-Data-Grid/DataEditor Demos",
    decorators: [
        (Story) => (_jsx(SimpleThemeWrapper, { children: _jsx(BeautifulWrapper, { title: "Row selections", description: _jsxs(Description, { children: ["You can enable row selections by setting ", _jsx(PropName, { children: "rowSelect" }), " prop to", " ", _jsx(PropName, { children: "multi" }), " for multi-selection or ", _jsx(PropName, { children: "single" }), " for single-selection. The row marker behavior and appearance can be controlled via the", " ", _jsx(PropName, { children: "rowMarkers" }), " prop."] }), children: _jsx(Story, {}) }) })),
    ],
};
export const RowSelections = p => {
    const { cols, getCellContent } = useMockDataGenerator(30);
    return (_jsx(DataEditor, { ...defaultProps, rowSelect: p.rowSelect, rowSelectionMode: p.rowSelectionMode, getCellContent: getCellContent, rowMarkers: {
            kind: p.rowMarkersKind,
            checkboxStyle: p.rowMarkersCheckboxStyle,
        }, columns: cols, rows: 400 }));
};
RowSelections.args = {
    rowSelect: "single",
    rowSelectionMode: "auto",
    rowMarkersKind: "checkbox-visible",
    rowMarkersCheckboxStyle: "circle",
};
RowSelections.argTypes = {
    rowSelect: {
        control: { type: "select" },
        options: ["none", "single", "multi"],
    },
    rowSelectionMode: {
        control: { type: "select" },
        options: ["auto", "multi"],
    },
    rowMarkersKind: {
        control: { type: "select" },
        options: ["both", "checkbox", "number", "none", "clickable-number", "checkbox-visible"],
    },
    rowMarkersCheckboxStyle: {
        control: { type: "select" },
        options: ["square", "circle"],
    },
};

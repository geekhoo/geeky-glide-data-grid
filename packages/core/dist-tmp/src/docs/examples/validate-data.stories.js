import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React from "react";
import { DataEditorAll as DataEditor } from "../../data-editor-all.js";
import { BeautifulWrapper, Description, MoreInfo, PropName, useMockDataGenerator, defaultProps, } from "../../data-editor/stories/utils.js";
import { GridCellKind } from "../../internal/data-grid/data-grid-types.js";
import { SimpleThemeWrapper } from "../../stories/story-utils.js";
export default {
    title: "Glide-Data-Grid/DataEditor Demos",
    decorators: [
        (Story) => (_jsx(SimpleThemeWrapper, { children: _jsx(BeautifulWrapper, { title: "Validate data", description: _jsxs(_Fragment, { children: [_jsxs(Description, { children: ["Data can be validated using the ", _jsx(PropName, { children: "validateCell" }), " callback"] }), _jsx(MoreInfo, { children: "This example only allows the word \"Valid\" inside text cells." })] }), children: _jsx(Story, {}) }) })),
    ],
};
export const ValidateData = () => {
    const { cols, getCellContent, setCellValue } = useMockDataGenerator(60, false);
    return (_jsx(DataEditor, { ...defaultProps, getCellContent: getCellContent, columns: cols, rowMarkers: "both", onPaste: true, onCellEdited: setCellValue, rows: 100, validateCell: (_cell, newValue) => {
            if (newValue.kind !== GridCellKind.Text)
                return true;
            if (newValue.data === "Valid")
                return true;
            if (newValue.data.toLowerCase() === "valid") {
                return {
                    ...newValue,
                    data: "Valid",
                    selectionRange: [0, 3],
                };
            }
            return false;
        } }));
};

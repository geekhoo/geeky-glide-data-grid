import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React from "react";
import { DataEditorAll as DataEditor } from "../../data-editor-all.js";
import { BeautifulWrapper, Description, MoreInfo, PropName, useMockDataGenerator, defaultProps, } from "../../data-editor/stories/utils.js";
import { SimpleThemeWrapper } from "../../stories/story-utils.js";
export default {
    title: "Glide-Data-Grid/DataEditor Demos",
    decorators: [
        (Story) => (_jsx(SimpleThemeWrapper, { children: _jsx(BeautifulWrapper, { title: "Copy support", description: _jsxs(_Fragment, { children: [_jsxs(Description, { children: ["Large amounts of data can be copied and customized using", " ", _jsx(PropName, { children: "getCellsForSelection" }), "."] }), _jsx(MoreInfo, { children: "The data is copied into a format ready to be pasted into Excel or Google Sheets" }), _jsx("textarea", { placeholder: "Copy something below and paste it here...", style: {
                                width: "100%",
                                marginBottom: 20,
                                borderRadius: 9,
                                minHeight: 200,
                                padding: 10,
                            } })] }), children: _jsx(Story, {}) }) })),
    ],
};
export const CopySupport = () => {
    const { cols, getCellContent, onColumnResize, setCellValue } = useMockDataGenerator(10, false);
    return (_jsx(DataEditor, { ...defaultProps, getCellContent: getCellContent, rowMarkers: "both", columns: cols, onCellEdited: setCellValue, onColumnResize: onColumnResize, rows: 400 }));
};

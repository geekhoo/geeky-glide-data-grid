import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React from "react";
import { DataEditorAll as DataEditor } from "../../data-editor-all.js";
import { BeautifulWrapper, Description, MoreInfo, PropName, useMockDataGenerator, KeyName, defaultProps, } from "../../data-editor/stories/utils.js";
import { SimpleThemeWrapper } from "../../stories/story-utils.js";
export default {
    title: "Glide-Data-Grid/DataEditor Demos",
    decorators: [
        (Story) => (_jsx(SimpleThemeWrapper, { children: _jsx(BeautifulWrapper, { title: "Multi select columns", description: _jsxs(_Fragment, { children: [_jsxs(Description, { children: ["You can select multiple columns by using the ", _jsx(PropName, { children: "selectedColumns" }), " and", " ", _jsx(PropName, { children: "onSelectedColumnsChange" }), " props"] }), _jsxs(MoreInfo, { children: ["Here you can multi select columns by using ", _jsx(KeyName, { children: "Ctrl" }), " (on Windows) or", " ", _jsx(KeyName, { children: "\u2318" }), " (on Mac)"] })] }), children: _jsx(Story, {}) }) })),
    ],
};
export const MultiSelectColumns = () => {
    const { cols, getCellContent } = useMockDataGenerator(100);
    return (_jsx(DataEditor, { ...defaultProps, getCellContent: getCellContent, rowMarkers: "both", columns: cols, rows: 100_000 }));
};

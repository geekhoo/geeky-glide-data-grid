import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React from "react";
import { DataEditorAll as DataEditor } from "../../data-editor-all.js";
import { Description, useMockDataGenerator, defaultProps, BeautifulStyle } from "../../data-editor/stories/utils.js";
import { SimpleThemeWrapper } from "../../stories/story-utils.js";
export default {
    title: "Glide-Data-Grid/DataEditor Demos",
    decorators: [
        (Story) => (_jsx(SimpleThemeWrapper, { children: _jsxs(BeautifulStyle, { children: [_jsx("h1", { children: "Layout Integration" }), _jsx(Description, { children: "Trying the grid in different situations" }), _jsx(Story, {})] }) })),
    ],
};
export const LayoutIntegration = () => {
    const { cols, getCellContent } = useMockDataGenerator(1000, true, true);
    return (_jsxs(_Fragment, { children: [_jsx(DataEditor, { ...defaultProps, getCellContent: getCellContent, columns: cols, rows: 10, rowMarkers: "both", height: 200 }), _jsx(DataEditor, { ...defaultProps, getCellContent: getCellContent, columns: cols, rows: 10, rowMarkers: "both" }), _jsxs("div", { style: { display: "flex", height: "300px" }, children: [_jsx(DataEditor, { ...defaultProps, getCellContent: getCellContent, columns: cols, rows: 10, rowMarkers: "both" }), _jsx("div", { style: { flexShrink: 0 }, children: "This is some text what happens here?" })] })] }));
};

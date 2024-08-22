import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React from "react";
import { DataEditorAll as DataEditor } from "../../data-editor-all.js";
import { BeautifulWrapper, Description, MoreInfo, PropName, useMockDataGenerator, defaultProps, } from "../../data-editor/stories/utils.js";
import { SimpleThemeWrapper } from "../../stories/story-utils.js";
export default {
    title: "Glide-Data-Grid/DataEditor Demos",
    decorators: [
        (Story) => (_jsx(SimpleThemeWrapper, { children: _jsx(BeautifulWrapper, { title: "Row and Header sizes", description: _jsxs(_Fragment, { children: [_jsxs(Description, { children: ["The row size can be controlled with ", _jsx(PropName, { children: "rowHeight" }), " and the header size with ", _jsx(PropName, { children: "headerHeight" }), "."] }), _jsx(MoreInfo, { children: "Use the story's controls to resize them" })] }), children: _jsx(Story, {}) }) })),
    ],
};
export const RowAndHeaderSizes = p => {
    const { cols, getCellContent } = useMockDataGenerator(6);
    return (_jsx(DataEditor, { ...defaultProps, rowHeight: p.rowHeight, headerHeight: p.headerHeight, rowMarkers: "number", getCellContent: getCellContent, columns: cols, rows: 1000 }));
};
RowAndHeaderSizes.args = {
    rowHeight: 34,
    headerHeight: 34,
};
RowAndHeaderSizes.argTypes = {
    rowHeight: {
        control: {
            type: "range",
            min: 20,
            max: 200,
        },
    },
    headerHeight: {
        control: {
            type: "range",
            min: 20,
            max: 200,
        },
    },
};

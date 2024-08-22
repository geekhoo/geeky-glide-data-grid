import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React from "react";
import { DataEditorAll as DataEditor } from "../../data-editor-all.js";
import { BeautifulWrapper, Description, PropName, useMockDataGenerator, defaultProps, } from "../../data-editor/stories/utils.js";
import { SimpleThemeWrapper } from "../../stories/story-utils.js";
export default {
    title: "Glide-Data-Grid/DataEditor Demos",
    decorators: [
        (Story) => (_jsx(SimpleThemeWrapper, { children: _jsx(BeautifulWrapper, { title: "Padding", description: _jsx(_Fragment, { children: _jsxs(Description, { children: ["You can add padding at the ends of the grid by setting the", " ", _jsx(PropName, { children: "paddingRight" }), " and ", _jsx(PropName, { children: "paddingBottom" }), " props"] }) }), children: _jsx(Story, {}) }) })),
    ],
};
export const Padding = p => {
    const { paddingRight, paddingBottom } = p;
    const { cols, getCellContent } = useMockDataGenerator(20);
    return (_jsx(DataEditor, { ...defaultProps, getCellContent: getCellContent, columns: cols, rowMarkers: "both", experimental: { paddingRight, paddingBottom }, rows: 50 }));
};
Padding.argTypes = {
    paddingRight: {
        control: {
            type: "range",
            min: 0,
            max: 600,
        },
    },
    paddingBottom: {
        control: {
            type: "range",
            min: 0,
            max: 600,
        },
    },
};
Padding.args = {
    paddingRight: 200,
    paddingBottom: 200,
};

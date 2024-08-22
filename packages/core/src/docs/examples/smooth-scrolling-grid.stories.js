import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { DataEditorAll as DataEditor } from "../../data-editor-all.js";
import { BeautifulWrapper, Description, PropName, useMockDataGenerator, defaultProps, } from "../../data-editor/stories/utils.js";
import { SimpleThemeWrapper } from "../../stories/story-utils.js";
export default {
    title: "Glide-Data-Grid/DataEditor Demos",
    decorators: [
        (Story) => (_jsx(SimpleThemeWrapper, { children: _jsx(BeautifulWrapper, { title: "Smooth scrolling", description: _jsxs(Description, { children: ["You can enable smooth scrolling with the ", _jsx(PropName, { children: "smoothScrollX" }), " and", " ", _jsx(PropName, { children: "smoothScrollY" }), " props. Disabling smooth scrolling can dramatically increase performance and improve visual stability during rapid scrolling."] }), children: _jsx(Story, {}) }) })),
    ],
};
export const SmoothScrollingGrid = p => {
    const { cols, getCellContent } = useMockDataGenerator(30);
    return (_jsx(DataEditor, { ...defaultProps, smoothScrollX: p.smoothScrollX, smoothScrollY: p.smoothScrollY, getCellContent: getCellContent, columns: cols, rows: 10_000 }));
};
SmoothScrollingGrid.args = {
    smoothScrollX: false,
    smoothScrollY: false,
};

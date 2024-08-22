import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React from "react";
import { DataEditorAll as DataEditor } from "../../data-editor-all.js";
import { BeautifulWrapper, Description, PropName, useMockDataGenerator, defaultProps, } from "../../data-editor/stories/utils.js";
import { SimpleThemeWrapper } from "../../stories/story-utils.js";
export default {
    title: "Glide-Data-Grid/DataEditor Demos",
    decorators: [
        (Story) => (_jsx(SimpleThemeWrapper, { children: _jsx(BeautifulWrapper, { title: "Prevent Diagonal Scroll", description: _jsx(_Fragment, { children: _jsxs(Description, { children: ["Diagonal scrolling can be prevented by setting", " ", _jsx(PropName, { children: "preventDiagonalScrolling" }), "."] }) }), children: _jsx(Story, {}) }) })),
    ],
};
export const PreventDiagonalScroll = () => {
    const { cols, getCellContent } = useMockDataGenerator(200);
    return (_jsx(DataEditor, { ...defaultProps, getCellContent: getCellContent, columns: cols, preventDiagonalScrolling: true, rows: 5000 }));
};

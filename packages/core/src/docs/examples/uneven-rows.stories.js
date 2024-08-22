import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { DataEditorAll as DataEditor } from "../../data-editor-all.js";
import { BeautifulWrapper, Description, PropName, useMockDataGenerator, defaultProps, } from "../../data-editor/stories/utils.js";
import { SimpleThemeWrapper } from "../../stories/story-utils.js";
export default {
    title: "Glide-Data-Grid/DataEditor Demos",
    decorators: [
        (Story) => (_jsx(SimpleThemeWrapper, { children: _jsx(BeautifulWrapper, { title: "Uneven Rows", description: _jsxs(Description, { children: ["Rows can be made uneven by passing a callback to the ", _jsx(PropName, { children: "rowHeight" }), " prop"] }), children: _jsx(Story, {}) }) })),
    ],
};
export const UnevenRows = () => {
    const { cols, getCellContent } = useMockDataGenerator(6);
    return (_jsx(DataEditor, { ...defaultProps, rowHeight: r => (r % 3 === 0 ? 30 : r % 2 ? 50 : 60), getCellContent: getCellContent, columns: cols, rows: 1000 }));
};

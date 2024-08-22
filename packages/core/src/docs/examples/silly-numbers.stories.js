import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { DataEditorAll as DataEditor } from "../../data-editor-all.js";
import { BeautifulWrapper, Description, useMockDataGenerator, defaultProps } from "../../data-editor/stories/utils.js";
import { SimpleThemeWrapper } from "../../stories/story-utils.js";
export default {
    title: "Glide-Data-Grid/DataEditor Demos",
    decorators: [
        (Story) => (_jsx(SimpleThemeWrapper, { children: _jsx(BeautifulWrapper, { title: "100 Million Rows", description: _jsx(Description, { children: "100 million rows is silly. Once we cross about 33 million pixels in height we can no longer trust the browser to scroll accurately." }), children: _jsx(Story, {}) }) })),
    ],
};
export const SillyNumbers = () => {
    const { cols, getCellContent } = useMockDataGenerator(6);
    return (_jsx(DataEditor, { ...defaultProps, getCellContent: getCellContent, columns: cols, rowHeight: 31, rows: 100_000_000, rowMarkers: "number" }));
};

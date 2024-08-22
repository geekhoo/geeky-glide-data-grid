import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { DataEditorAll as DataEditor } from "../../data-editor-all.js";
import { BeautifulWrapper, Description, useMockDataGenerator, defaultProps } from "../../data-editor/stories/utils.js";
import { SimpleThemeWrapper } from "../../stories/story-utils.js";
export default {
    title: "Glide-Data-Grid/DataEditor Demos",
    decorators: [
        (Story) => (_jsx(SimpleThemeWrapper, { children: _jsx(BeautifulWrapper, { title: "One Million Rows", description: _jsx(Description, { children: "Data grid supports over 1 million rows. Your limit is mostly RAM." }), children: _jsx(Story, {}) }) })),
    ],
};
export const OneMillionRows = () => {
    const { cols, getCellContent } = useMockDataGenerator(6);
    return (_jsx(DataEditor, { ...defaultProps, getCellContent: getCellContent, columns: cols, rowHeight: 31, rows: 1_000_000, rowMarkers: "number" }));
};

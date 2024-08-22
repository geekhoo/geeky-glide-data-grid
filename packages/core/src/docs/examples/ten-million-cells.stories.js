import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { DataEditorAll as DataEditor } from "../../data-editor-all.js";
import { BeautifulWrapper, Description, useMockDataGenerator, defaultProps } from "../../data-editor/stories/utils.js";
import { SimpleThemeWrapper } from "../../stories/story-utils.js";
export default {
    title: "Glide-Data-Grid/DataEditor Demos",
    decorators: [
        (Story) => (_jsx(SimpleThemeWrapper, { children: _jsx(BeautifulWrapper, { title: "Ten Million Cells", description: _jsx(Description, { children: "Data grid supports over 10 million cells. Go nuts with it." }), children: _jsx(Story, {}) }) })),
    ],
};
export const TenMillionCells = () => {
    const { cols, getCellContent } = useMockDataGenerator(100);
    return (_jsx(DataEditor, { ...defaultProps, rowMarkers: "number", getCellContent: getCellContent, columns: cols, rows: 100_000 }));
};

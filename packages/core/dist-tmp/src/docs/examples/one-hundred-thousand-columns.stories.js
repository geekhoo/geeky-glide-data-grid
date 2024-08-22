import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { DataEditorAll as DataEditor } from "../../data-editor-all.js";
import { BeautifulWrapper, Description, useMockDataGenerator, defaultProps } from "../../data-editor/stories/utils.js";
import { SimpleThemeWrapper } from "../../stories/story-utils.js";
export default {
    title: "Glide-Data-Grid/DataEditor Demos",
    decorators: [
        (Story) => (_jsx(SimpleThemeWrapper, { children: _jsx(BeautifulWrapper, { title: "One Hundred Thousand Columns", description: _jsx(Description, { children: "Data grid supports way more columns than you will ever need. Also this is rendering 10 million cells but that's not important." }), children: _jsx(Story, {}) }) })),
    ],
};
export const OneHundredThousandCols = () => {
    const { cols, getCellContent } = useMockDataGenerator(100_000);
    return _jsx(DataEditor, { ...defaultProps, getCellContent: getCellContent, columns: cols, rows: 1000 });
};

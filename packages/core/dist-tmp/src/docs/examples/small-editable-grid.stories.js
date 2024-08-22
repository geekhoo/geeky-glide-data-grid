import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { DataEditorAll as DataEditor } from "../../data-editor-all.js";
import { BeautifulWrapper, Description, useMockDataGenerator, defaultProps } from "../../data-editor/stories/utils.js";
import { SimpleThemeWrapper } from "../../stories/story-utils.js";
export default {
    title: "Glide-Data-Grid/DataEditor Demos",
    decorators: [
        (Story) => (_jsx(SimpleThemeWrapper, { children: _jsx(BeautifulWrapper, { title: "Editable Grid", description: _jsx(Description, { children: "Data grid supports overlay editors for changing values. There are bespoke editors for numbers, strings, images, booleans, markdown, and uri." }), children: _jsx(Story, {}) }) })),
    ],
};
export const SmallEditableGrid = () => {
    const { cols, getCellContent, setCellValue } = useMockDataGenerator(6, false);
    return (_jsx(DataEditor, { ...defaultProps, getCellContent: getCellContent, columns: cols, rows: 20, onCellEdited: setCellValue }));
};

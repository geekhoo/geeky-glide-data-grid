import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { DataEditorAll as DataEditor } from "../../data-editor-all.js";
import { BeautifulWrapper, Description, useMockDataGenerator, defaultProps } from "../../data-editor/stories/utils.js";
import { SimpleThemeWrapper } from "../../stories/story-utils.js";
export default {
    title: "Glide-Data-Grid/DataEditor Demos",
    decorators: [
        (Story) => (_jsx(SimpleThemeWrapper, { children: _jsx(BeautifulWrapper, { title: "Scaled view", description: _jsx(Description, { children: "The data editor supports being scaled." }), scale: "0.5", children: _jsx(Story, {}) }) })),
    ],
};
export const ScaledView = () => {
    const { cols, getCellContent, onColumnResize } = useMockDataGenerator(60);
    return (_jsx(DataEditor, { ...defaultProps, getCellContent: getCellContent, columns: cols, rowMarkers: "both", rows: 500, onColumnResize: onColumnResize }));
};

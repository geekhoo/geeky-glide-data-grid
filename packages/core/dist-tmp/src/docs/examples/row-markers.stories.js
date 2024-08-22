import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React from "react";
import {} from "../../data-editor/data-editor.js";
import { DataEditorAll as DataEditor } from "../../data-editor-all.js";
import { BeautifulWrapper, Description, PropName, useMockDataGenerator, defaultProps, } from "../../data-editor/stories/utils.js";
import { SimpleThemeWrapper } from "../../stories/story-utils.js";
export default {
    title: "Glide-Data-Grid/DataEditor Demos",
    decorators: [
        (Story) => (_jsx(SimpleThemeWrapper, { children: _jsx(BeautifulWrapper, { title: "Row markers", description: _jsx(_Fragment, { children: _jsxs(Description, { children: ["Row Markers can be controlled by setting the ", _jsx(PropName, { children: "rowMarkers" }), " prop."] }) }), children: _jsx(Story, {}) }) })),
    ],
};
export const RowMarkers = p => {
    const { cols, getCellContent } = useMockDataGenerator(10, false);
    return (_jsx(DataEditor, { ...defaultProps, getCellContent: getCellContent, verticalBorder: false, rowMarkers: {
            kind: p.markers,
            checkboxStyle: "square",
            headerAlwaysVisible: true,
            headerTheme: {
                textMedium: "rgba(51, 51, 51, 0.50)",
            },
        }, columns: cols, rows: 400 }));
};
RowMarkers.args = {
    markers: "both",
};
RowMarkers.argTypes = {
    markers: {
        control: { type: "select" },
        options: ["both", "checkbox", "number", "none", "clickable-number", "checkbox-visible"],
    },
};

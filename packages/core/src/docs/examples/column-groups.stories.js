import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { DataEditorAll as DataEditor } from "../../data-editor-all.js";
import { BeautifulWrapper, Description, PropName, useMockDataGenerator, defaultProps, } from "../../data-editor/stories/utils.js";
import { GridColumnIcon } from "../../internal/data-grid/data-grid-types.js";
import { SimpleThemeWrapper } from "../../stories/story-utils.js";
export default {
    title: "Glide-Data-Grid/DataEditor Demos",
    decorators: [
        (Story) => (_jsx(SimpleThemeWrapper, { children: _jsx(BeautifulWrapper, { title: "Column Grouping", description: _jsxs(Description, { children: ["Columns in the data grid may be grouped by setting their ", _jsx(PropName, { children: "group" }), " ", "property."] }), children: _jsx(Story, {}) }) })),
    ],
};
export const ColumnGroups = () => {
    const { cols, getCellContent } = useMockDataGenerator(20, true, true);
    return (_jsx(DataEditor, { ...defaultProps, getCellContent: getCellContent, onGroupHeaderRenamed: (x, y) => window.alert(`Please rename group ${x} to ${y}`), columns: cols, rows: 1000, getGroupDetails: g => ({
            name: g,
            icon: g === "" ? undefined : GridColumnIcon.HeaderCode,
        }), rowMarkers: "both" }));
};

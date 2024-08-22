import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { DataEditorAll as DataEditor } from "../../data-editor-all.js";
import { BeautifulWrapper, Description, PropName, useMockDataGenerator, defaultProps, ColumnAddButton, } from "../../data-editor/stories/utils.js";
import { SimpleThemeWrapper } from "../../stories/story-utils.js";
export default {
    title: "Glide-Data-Grid/DataEditor Demos",
    decorators: [
        (Story) => (_jsx(SimpleThemeWrapper, { children: _jsx(BeautifulWrapper, { title: "New column button", description: _jsxs(Description, { children: ["A new column button can be created using the ", _jsx(PropName, { children: "rightElement" }), "."] }), children: _jsx(Story, {}) }) })),
    ],
};
export const NewColumnButton = () => {
    const { cols, getCellContent } = useMockDataGenerator(10, true);
    const columns = React.useMemo(() => cols.map(c => ({ ...c, grow: 1 })), [cols]);
    return (_jsx(DataEditor, { ...defaultProps, getCellContent: getCellContent, columns: columns, rightElement: _jsx(ColumnAddButton, { children: _jsx("button", { onClick: () => window.alert("Add a column!"), children: "+" }) }), rightElementProps: {
            fill: false,
            sticky: false,
        }, rows: 3000, rowMarkers: "both" }));
};

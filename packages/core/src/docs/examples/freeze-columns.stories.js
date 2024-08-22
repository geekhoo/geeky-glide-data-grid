import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { DataEditorAll as DataEditor } from "../../data-editor-all.js";
import { BeautifulWrapper, Description, PropName, useMockDataGenerator, defaultProps, } from "../../data-editor/stories/utils.js";
import { SimpleThemeWrapper } from "../../stories/story-utils.js";
export default {
    title: "Glide-Data-Grid/DataEditor Demos",
    decorators: [
        (Story) => (_jsx(SimpleThemeWrapper, { children: _jsx(BeautifulWrapper, { title: "Freeze columns", description: _jsxs(Description, { children: ["Columns at the start of your grid can be frozen in place by settings", " ", _jsx(PropName, { children: "freezeColumns" }), " to a number greater than 0."] }), children: _jsx(Story, {}) }) })),
    ],
};
export const FreezeColumns = (p) => {
    const { cols, getCellContent } = useMockDataGenerator(100);
    return (_jsx(DataEditor, { ...defaultProps, rowMarkers: "both", freezeColumns: p.freezeColumns, getCellContent: getCellContent, columns: cols, verticalBorder: false, rows: 1000 }));
};
FreezeColumns.argTypes = {
    freezeColumns: {
        control: {
            type: "range",
            min: 0,
            max: 10,
        },
    },
};
FreezeColumns.args = {
    freezeColumns: 1,
};

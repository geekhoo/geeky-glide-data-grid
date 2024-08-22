import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { DataEditorAll as DataEditor } from "../../data-editor-all.js";
import { BeautifulWrapper, Description, MoreInfo, useMockDataGenerator, defaultProps, } from "../../data-editor/stories/utils.js";
import { SimpleThemeWrapper } from "../../stories/story-utils.js";
export default {
    title: "Glide-Data-Grid/DataEditor Demos",
    decorators: [
        (Story) => (_jsx(SimpleThemeWrapper, { children: _jsx(BeautifulWrapper, { title: "Add and remove columns", description: _jsxs(_Fragment, { children: [_jsx(Description, { children: "You can add and remove columns at your disposal" }), _jsx(MoreInfo, { children: "Use the story's controls to change the number of columns" })] }), children: _jsx(Story, {}) }) })),
    ],
};
export const AddColumns = p => {
    const { cols, getCellContent } = useMockDataGenerator(p.columnsCount);
    return (_jsx(DataEditor, { ...defaultProps, rowMarkers: "number", getCellContent: getCellContent, experimental: { strict: true }, columns: cols, rows: 10_000 }));
};
AddColumns.args = {
    columnsCount: 10,
};
AddColumns.argTypes = {
    columnsCount: {
        control: {
            type: "range",
            min: 2,
            max: 200,
        },
    },
};

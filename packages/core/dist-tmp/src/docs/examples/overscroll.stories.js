import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React from "react";
import { DataEditorAll as DataEditor } from "../../data-editor-all.js";
import { BeautifulWrapper, Description, PropName, useMockDataGenerator, defaultProps, } from "../../data-editor/stories/utils.js";
import { SimpleThemeWrapper } from "../../stories/story-utils.js";
export default {
    title: "Glide-Data-Grid/DataEditor Demos",
    decorators: [
        (Story) => (_jsx(SimpleThemeWrapper, { children: _jsx(BeautifulWrapper, { title: "Overscroll", description: _jsx(_Fragment, { children: _jsxs(Description, { children: ["You can allocate extra space at the ends of the grid by setting the", " ", _jsx(PropName, { children: "overscrollX" }), " and ", _jsx(PropName, { children: "overscrollY" }), " props"] }) }), children: _jsx(Story, {}) }) })),
    ],
};
export const Overscroll = p => {
    const { overscrollX, overscrollY } = p;
    const { cols, getCellContent } = useMockDataGenerator(20);
    return (_jsx(DataEditor, { ...defaultProps, getCellContent: getCellContent, columns: cols, overscrollX: overscrollX, overscrollY: overscrollY, rows: 50 }));
};
Overscroll.argTypes = {
    overscrollX: {
        control: {
            type: "range",
            min: 0,
            max: 600,
        },
    },
    overscrollY: {
        control: {
            type: "range",
            min: 0,
            max: 600,
        },
    },
};
Overscroll.args = {
    overscrollX: 200,
    overscrollY: 200,
};

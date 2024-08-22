import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { DataEditorAll as DataEditor } from "../../data-editor-all.js";
import { BeautifulWrapper, Description, PropName, useMockDataGenerator, defaultProps, } from "../../data-editor/stories/utils.js";
import { SimpleThemeWrapper } from "../../stories/story-utils.js";
import _ from "lodash";
export default {
    title: "Glide-Data-Grid/DataEditor Demos",
    decorators: [
        (Story) => (_jsx(SimpleThemeWrapper, { children: _jsx(BeautifulWrapper, { title: "Scroll Offset", description: _jsxs(Description, { children: ["The ", _jsx(PropName, { children: "rowGrouping" }), " prop can be used to group and even fold rows."] }), children: _jsx(Story, {}) }) })),
    ],
};
export const ScrollOffset = () => {
    const { cols, getCellContent } = useMockDataGenerator(100);
    const rows = 1000;
    return (_jsx(DataEditor, { ...defaultProps, height: "100%", rowMarkers: "both", scrollOffsetY: 400, getCellContent: getCellContent, columns: cols, 
        // verticalBorder={false}
        rows: rows }));
};

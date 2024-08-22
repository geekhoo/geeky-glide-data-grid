import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React from "react";
import { DataEditorAll as DataEditor } from "../../data-editor-all.js";
import { BeautifulWrapper, Description, MoreInfo, PropName, useMockDataGenerator, KeyName, defaultProps, } from "../../data-editor/stories/utils.js";
import { SimpleThemeWrapper } from "../../stories/story-utils.js";
export default {
    title: "Glide-Data-Grid/DataEditor Demos",
    decorators: [
        (Story) => (_jsx(SimpleThemeWrapper, { children: _jsx(Story, {}) })),
    ],
};
export const AutomaticRowMarkers = () => {
    const { cols, getCellContent } = useMockDataGenerator(6);
    const dataEditor = (_jsx(DataEditor, { ...defaultProps, rowMarkers: "checkbox-visible", getCellContent: getCellContent, columns: cols, rows: 1000 }));
    return (_jsx(BeautifulWrapper, { title: "Automatic Row Markers", description: _jsxs(_Fragment, { children: [_jsxs(Description, { children: ["You can enable row markers with rich selection behavior using the", " ", _jsx(PropName, { children: "rowMarkers" }), " prop."] }), _jsxs(MoreInfo, { children: ["Use ", _jsx(KeyName, { children: "\u21E7" }), " + click to make range selections, and ", _jsx(KeyName, { children: "Ctrl" }), " (", _jsx(KeyName, { children: "\u2318" }), " on Mac) + click to add/remove individual rows."] })] }), children: dataEditor }));
};

import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React from "react";
import { DataEditorAll as DataEditor } from "../../data-editor-all.js";
import { BeautifulWrapper, Description, MoreInfo, PropName, useMockDataGenerator, defaultProps, } from "../../data-editor/stories/utils.js";
import { SimpleThemeWrapper } from "../../stories/story-utils.js";
export default {
    title: "Glide-Data-Grid/DataEditor Demos",
    decorators: [
        (Story) => (_jsx(SimpleThemeWrapper, { children: _jsx(BeautifulWrapper, { title: "Resizable columns", description: _jsxs(_Fragment, { children: [_jsxs(Description, { children: ["You can resize columns by dragging their edges, as long as you respond to the", " ", _jsx(PropName, { children: "onColumnResize" }), " prop."] }), _jsxs(MoreInfo, { children: ["By setting the ", _jsx(PropName, { children: "overscrollX" }), " property extra space can be allocated at the end of the grid to allow for easier resizing of the final column. You can highlight multiple columns to resize them all at once."] })] }), children: _jsx(Story, {}) }) })),
    ],
};
export const ResizableColumns = () => {
    const { cols, getCellContent, onColumnResize } = useMockDataGenerator(60);
    return (_jsx(DataEditor, { ...defaultProps, getCellContent: getCellContent, columns: cols, rowMarkers: "both", overscrollX: 200, overscrollY: 200, maxColumnAutoWidth: 500, maxColumnWidth: 2000, rows: 50, scaleToRem: true, theme: React.useMemo(() => ({
            baseFontStyle: "0.8125rem",
            headerFontStyle: "600 0.8125rem",
            editorFontSize: "0.8125rem",
        }), []), onColumnResize: onColumnResize }));
};

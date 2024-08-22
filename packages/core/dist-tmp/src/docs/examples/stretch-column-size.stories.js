import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { DataEditorAll as DataEditor } from "../../data-editor-all.js";
import { BeautifulWrapper, Description, PropName, useMockDataGenerator, defaultProps, } from "../../data-editor/stories/utils.js";
import { SimpleThemeWrapper } from "../../stories/story-utils.js";
export default {
    title: "Glide-Data-Grid/DataEditor Demos",
    decorators: [
        (Story) => (_jsx(SimpleThemeWrapper, { children: _jsx(BeautifulWrapper, { title: "Column Grow", description: _jsxs(Description, { children: ["Columns in the data grid may be set to grow to fill space by setting the", " ", _jsx(PropName, { children: "grow" }), " prop."] }), children: _jsx(Story, {}) }) })),
    ],
};
export const StretchColumnSize = () => {
    const { cols, getCellContent, onColumnResize } = useMockDataGenerator(5, true, true);
    const hasResized = React.useRef(new Set());
    const columns = React.useMemo(() => {
        return cols.map((x, i) => ({ ...x, grow: hasResized.current.has(i) ? undefined : (5 + i) / 5 }));
    }, [cols]);
    return (_jsx(DataEditor, { ...defaultProps, getCellContent: getCellContent, columns: columns, rows: 1000, onColumnResize: (col, _newSize, colIndex, newSizeWithGrow) => {
            hasResized.current.add(colIndex);
            onColumnResize(col, newSizeWithGrow);
        }, rowMarkers: "both" }));
};

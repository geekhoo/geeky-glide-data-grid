import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { range } from "lodash";
import React from "react";
import {} from "../../data-editor/data-editor.js";
import { DataEditorAll as DataEditor } from "../../data-editor-all.js";
import { BeautifulWrapper, Description, PropName, defaultProps } from "../../data-editor/stories/utils.js";
import { GridCellKind } from "../../internal/data-grid/data-grid-types.js";
import { SimpleThemeWrapper } from "../../stories/story-utils.js";
export default {
    title: "Glide-Data-Grid/DataEditor Demos",
    decorators: [
        (Story) => (_jsx(SimpleThemeWrapper, { children: _jsx(BeautifulWrapper, { title: "Reorder Rows", description: _jsx(_Fragment, { children: _jsxs(Description, { children: ["Rows can be re-arranged by using the ", _jsx(PropName, { children: "onRowMoved" }), " callback. When set the first row can be used to drag and drop."] }) }), children: _jsx(Story, {}) }) })),
    ],
};
export const ReorderRows = () => {
    const cols = React.useMemo(() => [
        {
            title: "Col A",
            width: 150,
        },
        {
            title: "Col B",
            width: 150,
        },
    ], []);
    const [rowData, setRowData] = React.useState(() => {
        return range(0, 50).map(x => [`A: ${x}`, `B: ${x}`]);
    });
    const getCellContent = React.useCallback(([col, row]) => {
        return {
            kind: GridCellKind.Text,
            allowOverlay: false,
            data: rowData[row][col],
            displayData: rowData[row][col],
        };
    }, [rowData]);
    const reorderRows = React.useCallback((from, to) => {
        setRowData(cv => {
            const d = [...cv];
            const removed = d.splice(from, 1);
            d.splice(to, 0, ...removed);
            return d;
        });
    }, []);
    return (_jsx(DataEditor, { ...defaultProps, rowMarkers: "both", onRowMoved: reorderRows, getCellContent: getCellContent, columns: cols, rows: 50 }));
};

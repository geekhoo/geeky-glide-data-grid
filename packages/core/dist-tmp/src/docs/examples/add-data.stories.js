import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React from "react";
import { DataEditorAll as DataEditor } from "../../data-editor-all.js";
import { BeautifulWrapper, Description, MoreInfo, useMockDataGenerator, KeyName, defaultProps, clearCell, } from "../../data-editor/stories/utils.js";
import { SimpleThemeWrapper } from "../../stories/story-utils.js";
export default {
    title: "Glide-Data-Grid/DataEditor Demos",
    decorators: [
        (Story) => (_jsx(SimpleThemeWrapper, { children: _jsx(BeautifulWrapper, { title: "Add data", description: _jsxs(_Fragment, { children: [_jsx(Description, { children: "Data can be added by clicking on the trailing row." }), _jsxs(MoreInfo, { children: ["Keyboard is also supported, just navigate past the last row and press", " ", _jsx(KeyName, { children: "Enter" })] })] }), children: _jsx(Story, {}) }) })),
    ],
};
export const AddData = () => {
    const { cols, getCellContent, setCellValueRaw, setCellValue } = useMockDataGenerator(60, false);
    const [numRows, setNumRows] = React.useState(50);
    const onRowAppended = React.useCallback(() => {
        const newRow = numRows;
        // our data source is a mock source that pre-fills data, so we are just clearing this here. You should not
        // need to do this.
        for (let c = 0; c < cols.length; c++) {
            const cell = getCellContent([c, newRow]);
            setCellValueRaw([c, newRow], clearCell(cell));
        }
        // Tell the data grid there is another row
        setNumRows(cv => cv + 1);
    }, [cols.length, getCellContent, numRows, setCellValueRaw]);
    return (_jsx(DataEditor, { ...defaultProps, getCellContent: getCellContent, columns: cols, rangeSelectionColumnSpanning: false, rowMarkers: "both", onPaste: true, onCellEdited: setCellValue, trailingRowOptions: {
            // How to get the trailing row to look right
            sticky: false,
            tint: true,
            hint: "New row...",
        }, rows: numRows, onRowAppended: onRowAppended }));
};
